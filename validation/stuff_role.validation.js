const Joi = require("joi");

const registerValidationSchema = Joi.object({
  stuff_id: Joi.number().required(),
  role_id: Joi.number().required()
});

module.exports = {
  registerValidationSchema
};