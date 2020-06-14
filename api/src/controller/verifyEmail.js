import sendEmail from './sendEmail';
import Company from '../models/company';

export default async (req, res) => {
  const data = {
    email: req.query.email,
    secret: req.query.secret,
    res: res,
  };

  const company = await Company.findOne({ secret: data.secret });

  if (company && company._doc.active === 0) {
    Company.findOneAndUpdate({ email: data.email }, { active: 1 }, function(err, user) {
      if (err) throw err;

      sendEmail(data, 'email-verify-success');

      res.redirect('/verify');
    });
  } else {
    res.redirect('/verify-error');
  }
};
