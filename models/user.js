const mongoose = require('mongoose');

const cdMediaSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  trackListingA: {
    type: String,
    required: true,
  },
  trackListingB: {
    type: String,
    required: true,
  }, 
  trackListingC: {
    type: String,
    required: true,
  }, 
  trackListingD: {
    type: String,
    required: true,
  },
  albumArtLink: {
    type: String,
  },
  condition: {
    type: String,
  },
  packageType: {
    type: String,
    enum: ['jewelcase', 'digipack', 'cardboardSleeve'],
    required: true
  }   
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  myCDs: [cdMediaSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
