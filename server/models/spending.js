const mongoose = require("mongoose");

const spendSchema = new mongoose.Schema({
  cost: {
    type: String,
    require: [true, "Please provide purchase amount"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
  },
  store: {
    type: String,
    required: [true, "Please provide store quality."],
  },
  card: {
    type: String,
    required: [true, "Please provide card used."],
  },
  timestamp: {
    type: String,
    required: [true, "Please provide timestamp."],
  },
});

const spending = mongoose.model("spending", spendSchema);

module.exports = spending;
