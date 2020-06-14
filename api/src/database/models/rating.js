const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  certificate: {
    type: String,
    required: true
  },

  rating: {
    type: [Number],
    required: true
  },

  opinion: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: 'moderate'
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  eventTemplate: {
    type: Schema.Types.ObjectId,
    ref: 'Template'
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
