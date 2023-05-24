const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartments = new Schema({
  title: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
  },
  reviews: {
    type: Array,
    default: []
  },
  owner: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});

const Apartments = mongoose.model("apartments", apartments);
module.exports = Apartments;
