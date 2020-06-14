const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  dateAdded: {
    type: Date,
    default: Date.now
  },

  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ]
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
