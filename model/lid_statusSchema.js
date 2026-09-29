const { Schema, model } = require("mongoose");

const lid_statusSchema = new Schema({
  status: { type: String, required: true }
});

const Lid_Status = model("lid_status", lid_statusSchema);
module.exports = { Lid_Status };