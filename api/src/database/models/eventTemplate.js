const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  views: {
    type: Number
  },

  redirects: {
    type: Number
  }
});

module.exports = mongoose.model('Template', templateSchema);
