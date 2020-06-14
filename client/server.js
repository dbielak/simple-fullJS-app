import express from 'express';
import path from 'path';
import fs from 'fs';
import connectDb from './database/mongo';
import MobileDetect from 'mobile-detect';
import Offer from './database/models/event';

const app = express();

const filePath = path.resolve(__dirname, './build', 'index.html');

app.get('/', function (req, res) {
  const md = new MobileDetect(req.headers['user-agent']);
  res.setHeader('Content-Type', 'text/html');

  if (md.mobile()) {
    res.writeHead(302, {
      Location: '/mobile'
    });
    res.end();
    return;
  }

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'GitJob.pl - Work for programmers')
      .replace(/\$OG_DESCRIPTION/g, 'Job offers for IT professionals. Work for Javascript, PHP, Ruby on Rails, Java, C + or Database Administrators')
      .replace(/\$OG_URL/g, 'https://gitjob.pl')
      .replace(/\$OG_IMAGE/g, 'https://gitjob.pl/images/promo-v2.jpg');

    res.send(result);
    return;
  });
});

app.get('/mobile', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  const md = new MobileDetect(req.headers['user-agent']);
  if (!md.mobile()) {
    res.writeHead(302, {
      Location: '/'
    });
    res.end();
    return;
  }

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'GitJob.pl - Work for programmers')
      .replace(/\$OG_DESCRIPTION/g, 'Job offers for IT professionals. Work for Javascript, PHP, Ruby on Rails, Java, C + or Database Administrators')
      .replace(/\$OG_URL/g, 'https://gitjob.pl/mobile')
      .replace(/\$OG_IMAGE/g, 'https://gitjob.pl/images/promo-v2.jpg');

    res.send(result);
    return;
  });
});

app.get('/login', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'Log In - GitJob.pl')
      .replace(/\$OG_DESCRIPTION/g, 'Log in to the company panel')
      .replace(/\$OG_URL/g, 'https://gitjob.pl/login')
      .replace(/\$OG_IMAGE/g, 'https://gitjob.pl/images/promo-v2.jpg');

    res.send(result);
    return;
  });
});

app.get('/register', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'Register - GitJob.pl')
      .replace(/\$OG_DESCRIPTION/g, 'Add new account')
      .replace(/\$OG_URL/g, 'https://gitjob.pl/register')
      .replace(/\$OG_IMAGE/g, 'https://gitjob.pl/images/promo-v2.jpg');

    res.send(result);
    return;
  });
});

app.get('/add-offer', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'Add new offer - GitJob.pl')
      .replace(/\$OG_DESCRIPTION/g, 'Add a new job offer for a programmer on GitJob.pl')
      .replace(/\$OG_URL/g, 'https://gitjob.pl/add-offer')
      .replace(/\$OG_IMAGE/g, 'https://gitjob.pl/images/promo-v2.jpg');

    res.send(result);
    return;
  });
});

app.get('/offer/:rewrite', function (req, res) {
  fs.readFile(filePath, 'utf8', async function (err, data) {
    if (err) return console.log(err);

    const singleOffer = await Offer.findOne({
      rewrite: `${req.params.rewrite}`
    });

    if (singleOffer) {
      let salaryFrom = Number(singleOffer.salaryFrom).toLocaleString('pl-PL').replace(',', ' ');

      let salaryTo = Number(singleOffer.salaryTo).toLocaleString('pl-PL').replace(',', ' ');

      const city = singleOffer.city[0].toUpperCase() + singleOffer.city.slice(1);

      let result = data
        .replace(/\$OG_TITLE/g, `${singleOffer.title} #${singleOffer.companyName}`)
        .replace(
          /\$OG_DESCRIPTION/g,
          `${salaryFrom} - ${salaryTo} ${String(singleOffer.currency).toUpperCase()} ${singleOffer.employType === 'b2b' ? 'nett' : 'gross'} | ${city}`
        )
        .replace(/\$OG_URL/g, `https://gitjob.pl/offer/${singleOffer.rewrite}`)
        .replace(/\$OG_IMAGE/g, `${process.env.DOMAIN}${singleOffer.companySocialImage}`);

      res.setHeader('Content-Type', 'text/html');
      res.send(result);
    } else {
      res.status(404).send({ message: '404 Page not Found' });
    }
    return;
  });
});

app.use('*/images', express.static('public/images'));
app.use('*/robots.txt', express.static('public/robots.txt'));
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (_, res) {
  const filePath = path.resolve(__dirname, './build', 'index.html');

  res.sendFile(filePath);
});

connectDb(app);
