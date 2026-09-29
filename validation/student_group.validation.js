const Joi = require("joi");

const registerValidationSchema = Joi.object({
  student_id: Joi.number().required(),
  group_id: Joi.number().required()
});

module.exports = {
  registerValidationSchema
};