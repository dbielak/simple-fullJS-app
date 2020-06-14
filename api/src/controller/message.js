import sendEmail from './sendEmail';

export default async (req, res) => {
  const data = {
    email: req.body.email,
    name: req.body.name,
    message: req.body.message,
    rules: req.body.rules,
  };

  sendEmail(data, 'message');

  res.send('OK');
};
