const { Router } = require("express");
const payments = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postPayment,
  getPayments,
  deletePayment,
  searchPayment
} = require("../controllers/payment.controller");

const {
  registerValidationSchema
} = require("../validation/payment.validation");

/**
 * @swagger
 * /payments/postPayment:
 *   post:
 *     summary: Yangi payment yaratish
 *     tags: [Payments]
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
 *               payment_last_date:
 *                 type: string
 *                 example: example
 *               payment_date:
 *                 type: string
 *                 example: example
 *               price:
 *                 type: number
 *                 example: 1
 *               is_paid:
 *                 type: boolean
 *                 example: true
 *               total_attent:
 *                 type: number
 *                 example: 1
 *             required:
 *               - student_id
 *               - payment_last_date
 *               - payment_date
 *               - price
 *               - is_paid
 *               - total_attent
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
payments.post("/postPayment", validateSchema(registerValidationSchema), postPayment);

/**
 * @swagger
 * /payments/getPayments:
 *   get:
 *     summary: Barcha paymentsni olish
 *     tags: [Payments]
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
payments.get("/getPayments", getPayments);

/**
 * @swagger
 * /payments/deletePayment/{id}:
 *   delete:
 *     summary: Paymentni o‘chirish
 *     tags: [Payments]
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
payments.delete("/deletePayment/:id", deletePayment);

/**
 * @swagger
 * /payments/searchPayment:
 *   get:
 *     summary: Payment bo‘yicha qidirish
 *     tags: [Payments]
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
payments.get("/searchPayment", searchPayment);

module.exports = { payments };