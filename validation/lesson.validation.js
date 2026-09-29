const Joi = require("joi");

const registerValidationSchema = Joi.object({
  lesson_theme: Joi.string().required(),
  lesson_number: Joi.number().required(),
  group_id: Joi.number().required(),
  lesson_date: Joi.date().required()
});

const updateLessonValidationSchema = Joi.object({
  lesson_theme: Joi.string().optional(),
  lesson_number: Joi.number().optional(),
  group_id: Joi.number().optional(),
  lesson_date: Joi.date().optional()
});

module.exports = {
  registerValidationSchema,
  updateLessonValidationSchema
};