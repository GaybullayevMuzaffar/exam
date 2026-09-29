const { Schema, model } = require("mongoose");
const { Stage } = require("./stageSchema");
const { Group } = require("./groupSchema");
const { Reason_Lid } = require("./reason_lidSchema");
const { Lid_Status } = require("./lid_statusSchema");

const lidSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  lid_stage_id: { type: Schema.Types.ObjectId, ref: Stage },
  test_date: { type: Date, required: true },
  trial_lesson_date: { type: Number, required: true },
  trial_lesson_time: { type: String, required: true },
  trial_lesson_group_id: { type: Schema.Types.ObjectId, ref: Group },
  lid_status_id: { type: Schema.Types.ObjectId, ref: Lid_Status },
  cancel_reason_id: { type: Schema.Types.ObjectId, ref: Reason_Lid }
});

const Lid = model("lid", lidSchema);
module.exports = { Lid };