const Joi = require("joi");

const registerValidationSchema = Joi.object({
  lesson_id: Joi.number().required(),
  student_id: Joi.number().required(),
  is_there: Joi.boolean().required(),
  reason: Joi.string().required(),
  be_paid: Joi.boolean().required()
});

const updateStudentLessonValidationSchema = Joi.object({
  lesson_id: Joi.number().optional(),
  student_id: Joi.number().optional(),
  is_there: Joi.boolean().optional(),
  reason: Joi.string().optional(),
  be_paid: Joi.boolean().optional()
});

module.exports = {
  registerValidationSchema,
  updateStudentLessonValidationSchema
};