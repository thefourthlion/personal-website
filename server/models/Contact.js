const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    email: { type: String, required: [true, "Please provide email"] },
    message: { type: String, required: [true, "Please provide message"] },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
