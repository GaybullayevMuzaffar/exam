const Joi = require("joi");

const registerValidationSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().required(),
  login: Joi.string().required(),
  parol: Joi.string().required(),
  is_active: Joi.boolean().required()
});

const updateStuffValidationSchema = Joi.object({
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone_number: Joi.string().optional(),
  login: Joi.string().optional(),
  parol: Joi.string().optional(),
  is_active: Joi.boolean().optional()
});

module.exports = {
  registerValidationSchema,
  updateStuffValidationSchema
};