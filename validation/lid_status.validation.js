const Joi = require("joi");

const registerValidationSchema = Joi.object({
  status: Joi.string().required()
});

const updateLidStatusValidationSchema = Joi.object({
  status: Joi.string().optional()
});

module.exports = {
  registerValidationSchema,
  updateLidStatusValidationSchema
}