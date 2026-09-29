const Joi = require("joi");

const registerValidationSchema = Joi.object({
  name: Joi.string().required()
});

const updateRoleValidationSchema = Joi.object({
  name: Joi.string().optional()
});

module.exports = {
  registerValidationSchema,
  updateRoleValidationSchema
}