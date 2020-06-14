import sendEmail from './sendEmail';

export default async (body) => {
  const data = {
    email: 'dbielakpl@gmail.com',
    body: JSON.stringify(body),
  };

  sendEmail(data, 'log');

  res.send('OK');
};
