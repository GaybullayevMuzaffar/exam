const { Schema, model } = require("mongoose");
const { Student } = require("./studentSchema");
const { Group } = require("./groupSchema");

const student_groupSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  group_id: { type: Schema.Types.ObjectId, ref: Group },
});

const Student_Group = model("student_group", student_groupSchema);
module.exports = { Student_Group };