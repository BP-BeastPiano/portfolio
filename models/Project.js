const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    path: { type: String, required: true },
    link: { type: String },
    download: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);