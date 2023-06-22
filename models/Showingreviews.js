const mongoose = require("mongoose");

const ShowingreviewsSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    review: {type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Showingreviews", ShowingreviewsSchema);