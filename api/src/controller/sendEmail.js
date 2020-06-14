import emailBody from './emailBody';
import request from 'request';

const smtp = '1.malito.smtp';
const appkey = 'f5f688618fba6b72fb83c4d5fc44f240663babc3';
const secret = 'b20d564bb5f4c4128750b46355f345d3885d2018';

export default (data, type) => {
  let subject;
  let html;
  let files;
  let toEmail = data.email;

  if (type === 'message' || type == 'offer-created') toEmail = process.env.ADMIN_EMAIL;

  const emailDomain = data.email.split('@');

  let options = {
    method: 'POST',
    url: 'https://api.emaillabs.net.pl/api/new_sendmail',
    form: {
      smtp_account: smtp,
      to: {
        [toEmail]: [{ [toEmail]: parseInt(Math.random() * 10000, 10) + '@' + emailDomain[1] }],
      },
      subject: subject,
      html: html,
      from: 'kontakt@gitjob.pl',
      from_name: 'GitJob.pl',
    },
    headers: {
      Authorization: 'Basic ' + new Buffer(appkey + ':' + secret).toString('base64'),
    },
  };

  switch (type) {
    case 'verify-email':
      subject = 'Potwierdź swój e-mail';
      html = emailBody('veryfiEmail', data);
      break;
    case 'email-verify-success':
      subject = 'Twój adres e-mail został potwierdzony';
      html = emailBody('createAccountSuccess', data);
      break;
    case 'offer-new-company':
      subject = 'Twoje konto na GitJob.pl zostało utworzone';
      html = emailBody('automativCreateAccount', data);
      break;
    case 'apply-email':
      subject = `Zgłoszenie do: "${data.title}"`;
      html = emailBody('apply', data);
      break;
    case 'offer-expired':
      subject = `Ogłoszenie ${data.title} wygasło`;
      html = emailBody('expired', data);
      break;
    case 'offer-refreshed':
      subject = `Ogłoszenie ${data.title} zostało odświeżone`;
      html = emailBody('refreshed', data);
      break;
    case 'message':
      subject = `Wiadomość ze strony GitJob.pl`;
      html = emailBody('message', data);
      break;
    case 'offer-created':
      subject = `Nowa oferta do zmoderowania`;

      html = emailBody('offer-created');
      break;
    case 'log':
      subject = `Log z GITJOB`;
      html = emailBody('log', data);
      break;
  }

  if (data.applyCv) {
    files = [
      {
        name: data.applyCv ? `CV_${data.userName.replace(' ', '_')}.pdf` : '',
        mime: data.applyCv ? 'application/pdf' : '',
        content: data.applyCv ? data.applyCv : '',
      },
    ];
  }

  options.form.subject = subject;
  options.form.html = html;
  options.form.files = files;

  request(options, () => 'OK');
};
