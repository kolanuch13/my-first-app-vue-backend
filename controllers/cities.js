const service = require("../service/cities");

const get = async (req, res, next) => {
  try {
    const result = await service.getCities();
    const citiesArray = result.reduce((acc, item) => {
      acc.push(item.location.city);
      return acc;
    }, []);
    res.send(citiesArray);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
};
