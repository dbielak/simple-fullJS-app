import sharp from 'sharp';

export default (req, res) => {
  if (req.files.file.mimetype !== 'image/png' && req.files.file.mimetype !== 'image/jpeg') {
    return res.status(500).send('Wrong file extension.');
  }

  const randomChars =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  const ext = req.files.file.mimetype === 'image/png' ? '.png' : '.jpg';
  const imagePath = `${__dirname}/../../front/public/images/${randomChars + ext}`;
  const thumbnailPath = `${__dirname}/../../front/public/images/optimized/90x90_${randomChars + ext}`;
  const bigImagePath = `${__dirname}/../../front/public/images/optimized/250x250_${randomChars + ext}`;

  req.files.file.mv(`${__dirname}/../../front/public/images/${randomChars + ext}`, function(err) {
    if (err) return res.status(500).send(err);

    if (!req.body.social) {
      sharp(imagePath)
        .resize(90, 90)
        .resize({ fit: 'inside' })
        .toFile(thumbnailPath)
        .catch();

      sharp(imagePath)
        .resize(250, 250)
        .resize({ fit: 'inside' })
        .toFile(bigImagePath)
        .catch();
    }

    res.json({
      file: `${randomChars + ext}`,
    });
  });
};
