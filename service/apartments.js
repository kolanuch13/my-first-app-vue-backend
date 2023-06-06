const Apartments = require("./schemas/apartments");

const getAllApartments = async (page, limit) => {
  return Apartments.find()
    .skip(page * limit)
    .limit(limit)
    .exec();
};

const getApartmentsById = async (id) => {
  return Apartments.findById({ _id: id });
};

const addApartmentsReview = async (id, review) => {
  console.log(review);
  return Apartments.findOneAndUpdate(
    { _id: id },
    {
      $push: { reviews: review },
    },
    { new: true }
  );
};

module.exports = {
  getAllApartments,
  getApartmentsById,
  addApartmentsReview,
};
