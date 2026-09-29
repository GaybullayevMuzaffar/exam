const { Schema, model } = require("mongoose");

const groupSchema = new Schema({
  group_name: { type: String, required: true },
  lesson_start_time: { type: String, required: true },
  lesson_continuous: { type: String, required: true },
  lesson_week_day: { type: String, required: true },
  group_stage_idint: { type: Number, required: true },
  room_number: { type: String, required: true },
  room_floor: { type: Number, required: true },
  branch_id: { type: Number, required: true },
  lessons_quant: { type: Number, required: true },
  is_active: { type: Boolean, required: true }
});

const Group = model("group", groupSchema);
module.exports = { Group };