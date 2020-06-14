const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  phones: {
    type: [Schema.Types.Mixed]
  },

  website: {
    type: String
  },

  photo: {
    type: String
  },

  dateAdded: {
    type: Date,
    default: Date.now
  },

  status: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  companyName: {
    type: String
  },

  companyAddress: {
    type: String
  },

  companyZip: {
    type: String
  },

  companyNip: {
    type: String
  },

  companyCountry: {
    type: String
  },

  rodoAccept: {
    type: Number,
    required: true
  },

  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],

  favoriteEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
