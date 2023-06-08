const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orders = new Schema({
  date: {
    type: String,
    required: true,
  },
  apartmentId: [{ type: Schema.Types.ObjectId, ref: "apartments" }],
  owner: {
    type: String,
    require: true,
  },
});

const Orders = mongoose.model("orders", orders);
module.exports = Orders;
