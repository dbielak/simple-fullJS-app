import cron from 'node-cron';
import sitemap from '../controller/sitemap';

const setCrons = () => {
  cron.schedule('0 23 * * *', (req, res) => {
    sitemap(req, res);
  });
};

module.exports = setCrons;
