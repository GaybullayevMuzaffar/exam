const { Router } = require("express");
const studentLesson = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStudentLesson,
  getStudentLesson,
  deleteStudentLesson,
  updateStudentLesson
} = require("../controllers/student_lesson.controller");

const {
  registerValidationSchema,
  updateStudentLessonValidationSchema
} = require("../validation/student_lesson.validation");

/**
 * @swagger
 * /studentLesson/postStudentLesson:
 *   post:
 *     summary: Yangi student lesson yaratish
 *     tags: [Student Lessons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 example: example
 *               student_id:
 *                 type: string
 *                 example: example
 *               is_there:
 *                 type: boolean
 *                 example: true
 *               reason:
 *                 type: string
 *                 example: example
 *               be_paid:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - lesson_id
 *               - student_id
 *               - is_there
 *               - reason
 *               - be_paid
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
studentLesson.post("/postStudentLesson", validateSchema(registerValidationSchema), postStudentLesson);

/**
 * @swagger
 * /studentLesson/getStudentLesson:
 *   get:
 *     summary: Barcha student lessonsni olish
 *     tags: [Student Lessons]
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
studentLesson.get("/getStudentLesson", getStudentLesson);

/**
 * @swagger
 * /studentLesson/deleteStudentLesson/{id}:
 *   delete:
 *     summary: Student Lessonni o‘chirish
 *     tags: [Student Lessons]
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
studentLesson.delete("/deleteStudentLesson/:id", deleteStudentLesson);

/**
 * @swagger
 * /studentLesson/updateStudentLesson/{id}:
 *   put:
 *     summary: Student Lessonni yangilash
 *     tags: [Student Lessons]
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
 *               lesson_id:
 *                 type: string
 *                 example: example
 *               student_id:
 *                 type: string
 *                 example: example
 *               is_there:
 *                 type: boolean
 *                 example: true
 *               reason:
 *                 type: string
 *                 example: example
 *               be_paid:
 *                 type: boolean
 *                 example: true
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
studentLesson.put("/updateStudentLesson/:id", updateStudentLesson);

module.exports = { studentLesson };