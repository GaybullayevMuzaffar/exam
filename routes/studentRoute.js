const { Router } = require("express");
const students = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  searchStudent
} = require("../controllers/student.controller");

const {
  registerValidationSchema,
  updateStudentValidationSchema
} = require("../validation/student.validation");

/**
 * @swagger
 * /students/postStudent:
 *   post:
 *     summary: Yangi student yaratish
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *                 example: example
 *               first_name:
 *                 type: string
 *                 example: example
 *               last_name:
 *                 type: string
 *                 example: example
 *               phone_number:
 *                 type: string
 *                 example: example
 *               birthday:
 *                 type: string
 *                 example: example
 *               gender:
 *                 type: string
 *                 example: example
 *             required:
 *               - lid_id
 *               - first_name
 *               - last_name
 *               - phone_number
 *               - birthday
 *               - gender
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
students.post("/postStudent", validateSchema(registerValidationSchema), postStudent);

/**
 * @swagger
 * /students/getStudent:
 *   get:
 *     summary: Barcha studentsni olish
 *     tags: [Students]
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
students.get("/getStudent", getStudent);

/**
 * @swagger
 * /students/deleteStudent/{id}:
 *   delete:
 *     summary: Studentni o‘chirish
 *     tags: [Students]
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
students.delete("/deleteStudent/:id", deleteStudent);

/**
 * @swagger
 * /students/updateStudent/{id}:
 *   put:
 *     summary: Studentni yangilash
 *     tags: [Students]
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
 *               lid_id:
 *                 type: string
 *                 example: example
 *               first_name:
 *                 type: string
 *                 example: example
 *               last_name:
 *                 type: string
 *                 example: example
 *               phone_number:
 *                 type: string
 *                 example: example
 *               birthday:
 *                 type: string
 *                 example: example
 *               gender:
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
students.put("/updateStudent/:id",validateSchema(updateStudentValidationSchema), updateStudent);

/**
 * @swagger
 * /students/searchStudent:
 *   get:
 *     summary: Student bo‘yicha qidirish
 *     tags: [Students]
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
students.get("/searchStudent", searchStudent);

module.exports = { students };