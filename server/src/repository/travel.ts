var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var TravelSchema = new mongoose.Schema({
  id: String,
  from: String,
  to: String,
  date: Date,
  userId: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);