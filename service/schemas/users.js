const mongoose = require("mongoose");
const bCrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const emailRegexp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: emailRegexp,
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    default: "",
  },
});

user.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
}

user.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", user);
module.exports = User;
