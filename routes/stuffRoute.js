const { Router } = require("express");
const stuffs = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStuff,
  getStuff,
  deleteStuff,
  updateStuff,
  searchStuff
} = require("../controllers/stuff.controller");

const {
  registerValidationSchema,
  updateStuffValidationSchema
} = require("../validation/stuff.validation");

/**
 * @swagger
 * /stuffs/postStuff:
 *   post:
 *     summary: Yangi stuff yaratish
 *     tags: [Stuffs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: example
 *               last_name:
 *                 type: string
 *                 example: example
 *               phone_number:
 *                 type: string
 *                 example: example
 *               login:
 *                 type: string
 *                 example: example
 *               parol:
 *                 type: string
 *                 example: example
 *               is_active:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - first_name
 *               - last_name
 *               - phone_number
 *               - login
 *               - parol
 *               - is_active
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
stuffs.post("/postStuff", validateSchema(registerValidationSchema), postStuff);
/**
 * @swagger
 * /stuffs/getStuffs:
 *   get:
 *     summary: Barcha stuffsni olish
 *     tags: [Stuffs]
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
stuffs.get("/getStuffs", getStuff);

/**
 * @swagger
 * /stuffs/deleteStuff/{id}:
 *   delete:
 *     summary: Stuffni o‘chirish
 *     tags: [Stuffs]
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
stuffs.delete("/deleteStuff/:id", deleteStuff);

/**
 * @swagger
 * /stuffs/updateStuff/{id}:
 *   put:
 *     summary: Stuffni yangilash
 *     tags: [Stuffs]
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
 *               first_name:
 *                 type: string
 *                 example: example
 *               last_name:
 *                 type: string
 *                 example: example
 *               phone_number:
 *                 type: string
 *                 example: example
 *               login:
 *                 type: string
 *                 example: example
 *               parol:
 *                 type: string
 *                 example: example
 *               is_active:
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
stuffs.put("/updateStuff/:id",validateSchema(updateStuffValidationSchema), updateStuff);

/**
 * @swagger
 * /stuffs/searchStuff:
 *   get:
 *     summary: Stuff bo‘yicha qidirish
 *     tags: [Stuffs]
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
stuffs.get("/searchStuff", searchStuff);

module.exports = { stuffs };