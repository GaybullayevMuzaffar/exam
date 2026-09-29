const { Schema, model } = require("mongoose");
const { Group } = require("./groupSchema");
const { Stuff } = require("./stuffSchema");

const group_stuffSchema = new Schema({
  group_id: { type: Schema.Types.ObjectId, ref: Group },
  stuff_id: { type: Schema.Types.ObjectId, ref: Stuff }
});

const Group_Stuff = model("group_stuff", group_stuffSchema);
module.exports = { Group_Stuff };