const { Schema, model } = require("mongoose");

const branchSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  call_number: { type: Number, required: true }
});

const Branch = model("branch", branchSchema);
module.exports = { Branch };