const mongoose = require("mongoose");

const VisitSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Visit", VisitSchema);