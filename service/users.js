const User = require("./schemas/users");

const registration = async ({ name, password, email, token }) => {
  return User.create({ name, password, email, token });
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
