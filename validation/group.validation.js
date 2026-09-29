const Joi = require("joi");

const registerValidationSchema = Joi.object({
  group_name: Joi.string().required(),
  lesson_start_time: Joi.string().required(),
  lesson_continuous: Joi.string().required(),
  lesson_week_day: Joi.string().required(),
  group_stage_idint: Joi.number().required(),
  room_number: Joi.string().required(),
  room_floor: Joi.number().required(),
  branch_id: Joi.number().required(),
  lesson_quant: Joi.number().required(),
  is_active: Joi.boolean().required()
});

const updateGroupValidationSchema = Joi.object({
  group_name: Joi.string().optional(),
  lesson_start_time: Joi.string().optional(),
  lesson_continuous: Joi.string().optional(),
  lesson_week_day: Joi.string().optional(),
  group_stage_idint: Joi.number().optional(),
  room_number: Joi.string().optional(),
  room_floor: Joi.number().optional(),
  branch_id: Joi.number().optional(),
  lesson_quant: Joi.number().optional(),
  is_active: Joi.boolean().optional()
});

module.exports = {
  registerValidationSchema,
  updateGroupValidationSchema
};