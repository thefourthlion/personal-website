const mongoose = require("mongoose");

const spendSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const spendModel = mongoose.model("spendModel", spendSchema);

module.exports = spendModel;
