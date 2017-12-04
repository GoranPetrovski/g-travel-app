var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var UserSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  updated_at: { type: Date, default: Date.now },
});

export = mongoose.model('User', UserSchema);