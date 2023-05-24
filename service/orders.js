const Orders = require("./schemas/orders");

const getOrders = async (userId) => {
  return Orders.find({owner: userId})
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
