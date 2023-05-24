const service = require("../service/apartments");

const get = async (req, res, next) => {
  try {
    const page = req.query.page || 0;
    const size = req.query.size || 0;

    const limit = parseInt(size);
    const index = parseInt(page);

    const result = await service.getAllApartments(index, limit);
    res.send({ page, size, result });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = req.params;
  try { 
    const result = await service.getApartmentsById(id.apartmentId);
    if (!result) {
      res.status(404).json({ message: "Not found apartment with that id." });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createReview = async (req, res, next) => {
  const id = req.params;
  const user = req.user;
  try {
    const review = {
      author: user.name,
      content: req.body.content,
      raiting: req.body.raiting
    };
    const result = await service.addApartmentsReview(id.apartmentId, review);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  getById,
  createReview,
};
