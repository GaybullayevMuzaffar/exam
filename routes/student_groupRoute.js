const { Router } = require("express");
const studentGroups = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStudentGroup,
  getStudentGroup,
  deleteStudentGroup
} = require("../controllers/student_group.controller");

const {
  registerValidationSchema
} = require("../validation/student_group.validation");

/**
 * @swagger
 * /studentGroups/postStudentGroup:
 *   post:
 *     summary: Yangi student group yaratish
 *     tags: [Student Groups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 example: example
 *               group_id:
 *                 type: string
 *                 example: example
 *             required:
 *               - student_id
 *               - group_id
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
studentGroups.post("/postStudentGroup", validateSchema(registerValidationSchema), postStudentGroup);

/**
 * @swagger
 * /studentGroups/getStudentGroup:
 *   get:
 *     summary: Barcha student groupsni olish
 *     tags: [Student Groups]
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
studentGroups.get("/getStudentGroup", getStudentGroup);

/**
 * @swagger
 * /studentGroups/deleteStudentGroup/{id}:
 *   delete:
 *     summary: Student Groupni o‘chirish
 *     tags: [Student Groups]
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
studentGroups.delete("/deleteStudentGroup/:id", deleteStudentGroup);

module.exports = { studentGroups };