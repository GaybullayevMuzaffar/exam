const { Router } = require("express");
const lidStatus = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postLidStatus, 
  getLidStatus, 
  deleteLidStatus, 
  updateLidStatus, 
  searchLidStatus
} = require("../controllers/lid_status.controller");

const {
  registerValidationSchema,
  updateLidStatusValidationSchema
} = require("../validation/lid_status.validation");

/**
 * @swagger
 * /lidStatus/postLidStatus:
 *   post:
 *     summary: Yangi lid statuse yaratish
 *     tags: [Lid Statuses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: example
 *             required:
 *               - status
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
lidStatus.post("/postLidStatus", validateSchema(registerValidationSchema), postLidStatus);

/**
 * @swagger
 * /lidStatus/getLidStatus:
 *   get:
 *     summary: Barcha lid statusesni olish
 *     tags: [Lid Statuses]
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
lidStatus.get("/getLidStatus", getLidStatus);

/**
 * @swagger
 * /lidStatus/deleteLidStatus/{id}:
 *   delete:
 *     summary: Lid Statuseni o‘chirish
 *     tags: [Lid Statuses]
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
lidStatus.delete("/deleteLidStatus/:id", deleteLidStatus);

/**
 * @swagger
 * /lidStatus/updateLidStatus/{id}:
 *   put:
 *     summary: Lid Statuseni yangilash
 *     tags: [Lid Statuses]
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
 *               status:
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
lidStatus.put("/updateLidStatus/:id", validateSchema(updateLidStatusValidationSchema), updateLidStatus);

/**
 * @swagger
 * /lidStatus/searchLidStatus:
 *   get:
 *     summary: Lid Statuse bo‘yicha qidirish
 *     tags: [Lid Statuses]
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
lidStatus.get("/searchLidStatus", searchLidStatus);

module.exports = { lidStatus };