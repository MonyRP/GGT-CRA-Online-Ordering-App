const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Vault = mongoose.model('user', UserSchema);
