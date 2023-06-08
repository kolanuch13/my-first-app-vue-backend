const Orders = require("./schemas/orders");

const getOrders = async (userId) => {
  return Orders.find({ owner: userId })
    .populate("apartmentId", "title price location photo")
    .exec();
};

const createOrder = async (order) => {
  return Orders.create(order);
};

const deleteOrder = async (id) => {
  return Orders.findOneAndDelete({ _id: id });
};

module.exports = {
  getOrders,
  createOrder,
  deleteOrder,
};
