const { Schema, model } = require("mongoose");
const { Role } = require("./roleSchema");
const { Stuff } = require("./stuffSchema");

const stuff_roleSchema = new Schema({
  role_id: { type: Schema.Types.ObjectId, ref: Role },
  stuff_id: { type: Schema.Types.ObjectId, ref: Stuff }
})

const Stuff_Role = model("stuff_role", stuff_roleSchema);
module.exports = { Stuff_Role };