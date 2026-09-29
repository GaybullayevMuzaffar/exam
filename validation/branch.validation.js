const Joi = require("joi");

const registerValidationSchema = Joi.object({
  name: Joi.string().required(), 
  address: Joi.string().required(), 
  call_number: Joi.string().required()
});

const updateBranchValidationSchema = Joi.object({
  name: Joi.string().optional(),
  address: Joi.string().optional(),
  call_number: Joi.string().optional(),
});

module.exports = {
  registerValidationSchema,
  updateBranchValidationSchema
};