const User = require("./schemas/users");

const registration = async ({ name, password, email }) => {
  return User.create({ name, password, email });
};

const login = (id, token) => {
  return User.findByIdAndUpdate({ _id: id }, { token: token });
};

const logout = (id) => {
  return User.findByIdAndUpdate({ _id: id }, { token: "" });
};

const current = (id) => {
  return User.findById({ _id: id });
};

module.exports = {
  registration,
  login,
  logout,
  current
};
