const { Router } = require("express");
const reasonLid = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postReasonLid,
  getReasonLid,
  deleteReasonLid,
  updateReasonLid,
  searchReasonLid
} = require("../controllers/reason_lid.controller");

const {
  registerValidationSchema,
  updateReasonLidValidationSchema
} = require("../validation/reason_lid.validation");

/**
 * @swagger
 * /reasonLid/postReasonLid:
 *   post:
 *     summary: Yangi reason lid yaratish
 *     tags: [Reason Lids]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason_lid:
 *                 type: string
 *                 example: example
 *             required:
 *               - reason_lid
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
reasonLid.post("/postReasonLid", validateSchema(registerValidationSchema), postReasonLid);

/**
 * @swagger
 * /reasonLid/getReasonLid:
 *   get:
 *     summary: Barcha reason lidsni olish
 *     tags: [Reason Lids]
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
reasonLid.get("/getReasonLid", getReasonLid);

/**
 * @swagger
 * /reasonLid/deleteReasonLid/{id}:
 *   delete:
 *     summary: Reason Lidni o‘chirish
 *     tags: [Reason Lids]
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
reasonLid.delete("/deleteReasonLid/:id", deleteReasonLid);

/**
 * @swagger
 * /reasonLid/updateReasonLid/{id}:
 *   put:
 *     summary: Reason Lidni yangilash
 *     tags: [Reason Lids]
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
 *               reason_lid:
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
reasonLid.put("/updateReasonLid/:id", validateSchema(updateReasonLidValidationSchema), updateReasonLid);

/**
 * @swagger
 * /reasonLid/searchReasonLid:
 *   get:
 *     summary: Reason Lid bo‘yicha qidirish
 *     tags: [Reason Lids]
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
reasonLid.get("/searchReasonLid", searchReasonLid);

module.exports = { reasonLid };