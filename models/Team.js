const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    path: { type: String, required: true },
    link: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
