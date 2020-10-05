const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
  foldername: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  parentname: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  children: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('folder', folderSchema)