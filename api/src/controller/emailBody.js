import path from 'path';
import Mailgen from 'mailgen';

export default (type, data) => {
  const mailGenerator = new Mailgen({
    theme: {
      path: path.resolve(`emails/${type}.html`),
    },
    product: {
      name: 'GitJob.pl',
      link: 'https://gitjob.pl',
    },
  });

  const email = {
    body: {
      data: data,
    },
  };

  return mailGenerator.generate(email);
};
