import express from 'express';
import path from 'path';
import fs from 'fs';
import connectDb from './database/mongo';
import Offer from './database/models/event';

const app = express();

const filePath = path.resolve(__dirname, './build', 'index.html');

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'Todo.pl - simple react boilerplate')
      .replace(/\$OG_DESCRIPTION/g, 'Description test')
      .replace(/\$OG_URL/g, 'https://todo.pl')
      .replace(/\$OG_IMAGE/g, 'https://todo.pl/images/x.jpg');

    res.send(result);
    return;
  });
});

app.get('/add-todo', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) return console.log(err);

    const result = data
      .replace(/\$OG_TITLE/g, 'Add new Todo')
      .replace(/\$OG_DESCRIPTION/g, 'Add new todo description')
      .replace(/\$OG_URL/g, 'https://test.pl/add-todo')
      .replace(/\$OG_IMAGE/g, 'https://test.pl/images/x.jpg');

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

app.use('*/robots.txt', express.static('public/robots.txt'));
app.use('*/sitemap.xml', express.static('public/sitemap.xml'));
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (_, res) {
  const filePath = path.resolve(__dirname, './build', 'index.html');

  res.sendFile(filePath);
});

connectDb(app);
