const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Album', albumSchema)
