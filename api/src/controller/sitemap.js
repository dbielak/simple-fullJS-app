import sm from 'sitemap';
import fs from 'fs';

const DOMAIN = process.env.DOMAIN;

export default async () => {
  let urls = [];
  urls.push({ url: `/`, changefreq: 'yearly', lastmodISO: new Date().toISOString(), priority: 1.0 });

  var sitemap = sm.createSitemap({
    hostname: DOMAIN,
    cacheTime: 82800,
    urls: urls
  });

  fs.writeFileSync('./sitemap.xml', sitemap.toString());
};
