const { Router } = require("express");
const groups = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postGroup,
  getGroups, 
  deleteGroup,
  updateGroup, 
  searchGroup
} = require("../controllers/group.controller");

const {
  registerValidationSchema,
  updateGroupValidationSchema
} = require("../validation/group.validation");

/**
 * @swagger
 * /groups/postGroup:
 *   post:
 *     summary: Yangi group yaratish
 *     tags: [Groups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 example: example
 *               lesson_start_time:
 *                 type: string
 *                 example: example
 *               lesson_continuous:
 *                 type: string
 *                 example: example
 *               lesson_week_day:
 *                 type: string
 *                 example: example
 *               group_stage_idint:
 *                 type: number
 *                 example: 1
 *               room_number:
 *                 type: string
 *                 example: example
 *               room_floor:
 *                 type: number
 *                 example: 1
 *               branch_id:
 *                 type: number
 *                 example: 1
 *               lessons_quant:
 *                 type: number
 *                 example: 1
 *               is_active:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - group_name
 *               - lesson_start_time
 *               - lesson_continuous
 *               - lesson_week_day
 *               - group_stage_idint
 *               - room_number
 *               - room_floor
 *               - branch_id
 *               - lessons_quant
 *               - is_active
 *     responses:
 *       201:
 *         description: Muvaffaqiyatli yaratildi
 *       500:
 *         description: Server xatosi
 */
groups.post("/postGroup", validateSchema(registerValidationSchema), postGroup);

/**
 * @swagger
 * /groups/getGroups:
 *   get:
 *     summary: Barcha groupsni olish
 *     tags: [Groups]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       500:
 *         description: Server xatosi
 */
groups.get("/getGroups", getGroups);

/**
 * @swagger
 * /groups/deleteGroup/{id}:
 *   delete:
 *     summary: Groupni o‘chirish
 *     tags: [Groups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB hujjatining ID raqami
 *         schema:
 *           type: string
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
groups.delete("/deleteGroup/:id", deleteGroup);

/**
 * @swagger
 * /groups/updateGroup/{id}:
 *   put:
 *     summary: Groupni yangilash
 *     tags: [Groups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB hujjatining ID raqami
 *         schema:
 *           type: string
 *         example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 example: example
 *               lesson_start_time:
 *                 type: string
 *                 example: example
 *               lesson_continuous:
 *                 type: string
 *                 example: example
 *               lesson_week_day:
 *                 type: string
 *                 example: example
 *               group_stage_idint:
 *                 type: number
 *                 example: 1
 *               room_number:
 *                 type: string
 *                 example: example
 *               room_floor:
 *                 type: number
 *                 example: 1
 *               branch_id:
 *                 type: number
 *                 example: 1
 *               lessons_quant:
 *                 type: number
 *                 example: 1
 *               is_active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
groups.put("/updateGroup/:id", validateSchema(updateGroupValidationSchema), updateGroup);

/**
 * @swagger
 * /groups/searchGroup:
 *   get:
 *     summary: Group bo‘yicha qidirish
 *     tags: [Groups]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Qidiruv so‘zi
 *         schema:
 *           type: string
 *         example: test
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 *       500:
 *         description: Server xatosi
 */
groups.get("/searchGroup", searchGroup);


module.exports = { groups };