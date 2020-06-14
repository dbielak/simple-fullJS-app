const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todoId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

todoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Todo', todoSchema);
