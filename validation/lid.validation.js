const Joi = require("joi");

const registerValidationSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().required(),
  lid_stage_id: Joi.number().required(),
  test_date: Joi.date().required(),
  trial_lesson_date: Joi.date().required(),
  trial_lesson_time: Joi.number().required(),
  trial_lesson_group_id: Joi.number().required(),
  lid_status_id: Joi.number().required(),
  cancel_reason_id: Joi.number().required()
});

const updateLidValidationSchema = Joi.object({
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone_number: Joi.string().optional(),
  lid_stage_id: Joi.number().optional(),
  test_date: Joi.date().optional(),
  trial_lesson_date: Joi.date().optional(),
  trial_lesson_time: Joi.number().optional(),
  trial_lesson_group_id: Joi.number().optional(),
  lid_status_id: Joi.number().optional(),
  cancel_reason_id: Joi.number().optional()
});

module.exports = {
  registerValidationSchema,
  updateLidValidationSchema
};