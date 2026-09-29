const Joi = require("joi");

const registerValidationSchema = Joi.object({
  name: Joi.string().required()
});

const updateStageValidationSchema = Joi.object({
  name: Joi.string().optional()
});

module.exports = {
  registerValidationSchema,
  updateStageValidationSchema
}