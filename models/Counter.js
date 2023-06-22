const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema(
  {
    counter: {type: String, required: true},
    number: {type: Number, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Counter", CounterSchema);