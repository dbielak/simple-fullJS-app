import sm from 'sitemap';
import fs from 'fs';
import Event from '../database/models/event';

const DOMAIN = process.env.DOMAIN;

export default async () => {
  const events = await Event.find();

  let urls = [];
  urls.push({ url: `/`, changefreq: 'yearly', lastmodISO: new Date().toISOString(), priority: 1.0 });
  urls.push({ url: `/dodaj-wydarzenie`, changefreq: 'monthly', lastmodISO: new Date().toISOString(), priority: 0.7 });
  events.map((event) => {
    urls.push({
      url: `/wydarzenie/${event.rewrite}`,
      lastmodISO: new Date().toISOString(),
      img: [{ url: `${DOMAIN}/images/${event.companySocialImage}`, caption: `${event.title} #${event.companyName}` }],
      changefreq: 'daily',
      priority: 0.5
    });
  });

  var sitemap = sm.createSitemap({
    hostname: DOMAIN,
    cacheTime: 82800,
    urls: urls
  });

  fs.writeFileSync('./sitemap.xml', sitemap.toString());
};
