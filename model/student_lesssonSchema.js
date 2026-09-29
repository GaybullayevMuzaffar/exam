const { Schema, model } = require("mongoose");
const { Lesson } = require("./lessonSchema");
const { Student } = require("./studentSchema");

const student_lessonSchema = new Schema({
  lesson_id: { type: Schema.Types.ObjectId, ref: Lesson },
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  is_there: { type: Boolean, required: true },
  reason: { type: String, required: true },
  be_paid: { type: Boolean, required: true }
});

const Student_Lesson = model("student_lesson", student_lessonSchema);
module.exports = { Student_Lesson };