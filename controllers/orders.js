const service = require("../service/orders");

const get = async (req, res, next) => {
  const user = req.user;
  try {
    const result = await service.getOrders(user.id);
    res.send({ result });
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  const user = req.user;
  try {
    const order = req.body;
    order.owner = user.id;
    const result = await service.createOrder(order);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
 
const remove = async (req, res, next) => {
  const id = req.params;
  try {
    const result = await service.deleteOrder(id.orderId);
    if (!result) {
      res.status(404).json({ message: "Not found contact with that id." });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  create,
  remove
};