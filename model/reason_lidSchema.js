const { Schema, model } = require("mongoose");

const reason_lidSchema = new Schema({
  reason_lid: { type: String, required: true }
});

const Reason_Lid = model("reason_lid", reason_lidSchema);
module.exports = { Reason_Lid };