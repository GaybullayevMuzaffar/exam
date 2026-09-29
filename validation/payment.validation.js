const Joi = require("joi");

const registerValidationSchema = Joi.object({
  student_id: Joi.number().required(),
  payment_last_date: Joi.date().required(),
  payment_date: Joi.date().required(),
  price: Joi.number().required(),
  is_paid: Joi.boolean().required(),
  total_attent: Joi.number().required(),
});

module.exports = {
  registerValidationSchema
};