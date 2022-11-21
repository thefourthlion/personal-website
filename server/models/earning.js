const mongoose = require("mongoose");

const earnSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
      require: [true, "Please provide earn amount"],
    },
    activity: {
      type: String,
      required: [true, "Please provide activity"],
    },
    enjoyment: {
      type: String,
      required: [true, "Please provide enjoyment."],
    },
    deposit: {
      type: String,
      required: [true, "Please provide deposit."],
    },
    timestamp: {
      type: String,
      required: [true, "Please provide timestamp."],
    },
  },
  { timestamps: true }
);

const earning = mongoose.model("earning", earnSchema);

module.exports = earning;
