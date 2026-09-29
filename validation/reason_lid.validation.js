const Joi = require("joi");

const registerValidationSchema = Joi.object({
  reason_lid: Joi.string().required()
});

const updateReasonLidValidationSchema = Joi.object({
  reason_lid: Joi.string().optional()
});

module.exports = {
  registerValidationSchema,
  updateReasonLidValidationSchema
}