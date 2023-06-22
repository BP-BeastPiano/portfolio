const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema(
  {
    service: {type: String, required: true},
    img: { type: String, required: true },
    path: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Services", ServicesSchema);