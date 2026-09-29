const { Router } = require("express");
const lessons = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postLesson, 
  getLesson, 
  deleteLesson, 
  updateLesson, 
  searchLesson
} = require("../controllers/lesson.controller");

const {
  registerValidationSchema,
  updateLessonValidationSchema
} = require("../validation/lesson.validation");

/**
 * @swagger
 * /lessons/postLesson:
 *   post:
 *     summary: Yangi lesson yaratish
 *     tags: [Lessons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 example: example
 *               lesson_number:
 *                 type: number
 *                 example: 1
 *               group_id:
 *                 type: string
 *                 example: example
 *               lesson_date:
 *                 type: string
 *                 example: example
 *             required:
 *               - lesson_theme
 *               - lesson_number
 *               - group_id
 *               - lesson_date
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       201:
 *         description: Muvaffaqiyatli yaratildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
lessons.post("/postLesson", validateSchema(registerValidationSchema), postLesson);

/**
 * @swagger
 * /lessons/getLesson:
 *   get:
 *     summary: Barcha lessonsni olish
 *     tags: [Lessons]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
lessons.get("/getLesson", getLesson);

/**
 * @swagger
 * /lessons/deleteLesson/{id}:
 *   delete:
 *     summary: Lessonni o‘chirish
 *     tags: [Lessons]
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
 *       400:
 *         description: Noto‘g‘ri so‘rov
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
lessons.delete("/deleteLesson/:id", deleteLesson);

/**
 * @swagger
 * /lessons/updateLesson/{id}:
 *   put:
 *     summary: Lessonni yangilash
 *     tags: [Lessons]
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
 *               lesson_theme:
 *                 type: string
 *                 example: example
 *               lesson_number:
 *                 type: number
 *                 example: 1
 *               group_id:
 *                 type: string
 *                 example: example
 *               lesson_date:
 *                 type: string
 *                 example: example
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
lessons.put("/updateLesson/:id", validateSchema(updateLessonValidationSchema), updateLesson);

/**
 * @swagger
 * /lessons/searchLesson:
 *   get:
 *     summary: Lesson bo‘yicha qidirish
 *     tags: [Lessons]
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
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
lessons.get("/searchLesson", searchLesson);

module.exports = { lessons };