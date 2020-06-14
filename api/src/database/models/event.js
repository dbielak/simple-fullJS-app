const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventId: {
    type: Number,
    required: true
  },
  rewrite: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categoryCode: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  },
  agenda: {
    type: [Schema.Types.Mixed]
  },
  eventDate: {
    type: Date
  },
  eventTime: {
    type: String
  },
  organizatorName: {
    type: String,
    required: true
  },
  organizatorPhone: {
    type: String
  },
  organizatorEmail: {
    type: String,
    required: true
  },
  organizatorWebsite: {
    type: String,
    required: true
  },
  eventAddress: {
    type: String,
    required: true
  },
  eventRegionCode: {
    type: String,
    required: true
  },
  eventRegionName: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number || Boolean,
    default: null
  },
  currency: {
    type: String,
    default: 'PLN'
  },
  eventPriceType: {
    type: String
  },
  status: {
    type: String,
    default: 'moderate'
  },
  photo: {
    type: String
  },
  eventTemplate: {
    type: Schema.Types.ObjectId,
    ref: 'Template'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

eventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', eventSchema);
