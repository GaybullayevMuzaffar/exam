const { Schema, model } = require("mongoose");
const { Student } = require("./studentSchema");

const paymentSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  payment_last_date: { type: Date, required: true },
  payment_date: { type: Date, required: true },
  price: { type: Number, required: true },
  is_paid: { type: Boolean, required: true },
  total_attent: { type: Number, required: true }
});

const Payment = model("payment", paymentSchema);
module.exports = { Payment };