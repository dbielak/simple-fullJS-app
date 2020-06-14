import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const setSettings = (app) => {
  app.use(cors());
  app.use(fileUpload());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

module.exports = setSettings;
