const Apartments = require("./schemas/apartments");

const getCities = async () => {
  return Apartments.find();
};

module.exports = {
  getCities,
};
