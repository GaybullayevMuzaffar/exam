const Joi = require("joi");

const registerValidationSchema = Joi.object({
  group_id: Joi.number().required(),
  stuff_id: Joi.number().required()
});

module.exports = {
  registerValidationSchema
}