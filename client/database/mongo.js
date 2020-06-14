const mongoose = require('mongoose');

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE, MONGODB_PORT, CLIENT_PORT } = process.env;

const MONGODB_URL = `mongodb://mongo:${MONGODB_PORT}/${MONGODB_DATABASE}`;

const connectDb = (app) =>
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      user: MONGODB_USERNAME,
      pass: MONGODB_PASSWORD,
      keepAlive: true
    })
    .then(() => {
      app.listen(CLIENT_PORT);
      console.log(`Client started at port ${CLIENT_PORT}`);
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = connectDb;
