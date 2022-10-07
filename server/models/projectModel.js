const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please provide title"],
    },
    projectDescription: {
      type: String,
      required: [true, "Please provide projectDescription"],
      unique: true,
    },
    imageLink: {
      type: String,
      required: [true, "Please provide description"],
    },
    webLink: {
      type: String,
      default: "",
    },
    githubLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projectModel", projectSchema);

module.exports = projectModel;
