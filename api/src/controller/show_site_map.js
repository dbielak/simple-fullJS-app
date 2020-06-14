import fs from 'fs';

export default (_, res) => {
  const filePath = '/../sitemap.xml';
  const contentType = 'application/xml';

  fs.readFile(__dirname + filePath, function (_, data) {
    res.contentType(contentType);
    res.send(data);
  });
};
