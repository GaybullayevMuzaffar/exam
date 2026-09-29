const { Router } = require("express");
const stages = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStage,
  getStages,
  deleteStage,
  updateStage,
  searchStage
} = require("../controllers/stage.controller");

const {
  registerValidationSchema,
  updateStageValidationSchema
} = require("../validation/stage.validation");

/**
 * @swagger
 * /stages/postStage:
 *   post:
 *     summary: Yangi stage yaratish
 *     tags: [Stages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: example
 *             required:
 *               - name
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
stages.post("/postStage", validateSchema(registerValidationSchema), postStage);

/**
 * @swagger
 * /stages/getStages:
 *   get:
 *     summary: Barcha stagesni olish
 *     tags: [Stages]
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
stages.get("/getStages", getStages);

/**
 * @swagger
 * /stages/deleteStage/{id}:
 *   delete:
 *     summary: Stageni o‘chirish
 *     tags: [Stages]
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
stages.delete("/deleteStage/:id", deleteStage);

/**
 * @swagger
 * /stages/updateStage/{id}:
 *   put:
 *     summary: Stageni yangilash
 *     tags: [Stages]
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
 *               name:
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
stages.put("/updateStage/:id", updateStage);

/**
 * @swagger
 * /stages/searchStage:
 *   get:
 *     summary: Stage bo‘yicha qidirish
 *     tags: [Stages]
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
stages.get("/searchStage", searchStage);

module.exports = { stages };