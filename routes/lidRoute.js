const { Router } = require("express");
const lids = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postLid,
  getLid,
  deleteLid,
  updateLid,
  searchLid
} = require("../controllers/lid.controller");

const {
  registerValidationSchema,
  updateLidValidationSchema
} = require("../validation/lid.validation");

/**
 * @swagger
 * /lids/postLid:
 *   post:
 *     summary: Yangi lid yaratish
 *     tags: [Lids]
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
 *               lid_stage_id:
 *                 type: string
 *                 example: example
 *               test_date:
 *                 type: string
 *                 example: example
 *               trial_lesson_date:
 *                 type: number
 *                 example: 1
 *               trial_lesson_time:
 *                 type: string
 *                 example: example
 *               trial_lesson_group_id:
 *                 type: string
 *                 example: example
 *               lid_status_id:
 *                 type: string
 *                 example: example
 *               cancel_reason_id:
 *                 type: string
 *                 example: example
 *             required:
 *               - first_name
 *               - last_name
 *               - phone_number
 *               - lid_stage_id
 *               - test_date
 *               - trial_lesson_date
 *               - trial_lesson_time
 *               - trial_lesson_group_id
 *               - lid_status_id
 *               - cancel_reason_id
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
lids.post("/postLid", validateSchema(registerValidationSchema), postLid);

/**
 * @swagger
 * /lids/getLid:
 *   get:
 *     summary: Barcha lidsni olish
 *     tags: [Lids]
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
lids.get("/getLid", getLid);

/**
 * @swagger
 * /lids/deleteLid/{id}:
 *   delete:
 *     summary: Lidni o‘chirish
 *     tags: [Lids]
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
lids.delete("/deleteLid/:id", deleteLid);

/**
 * @swagger
 * /lids/updatelid/{id}:
 *   put:
 *     summary: Lidni yangilash
 *     tags: [Lids]
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
 *               lid_stage_id:
 *                 type: string
 *                 example: example
 *               test_date:
 *                 type: string
 *                 example: example
 *               trial_lesson_date:
 *                 type: number
 *                 example: 1
 *               trial_lesson_time:
 *                 type: string
 *                 example: example
 *               trial_lesson_group_id:
 *                 type: string
 *                 example: example
 *               lid_status_id:
 *                 type: string
 *                 example: example
 *               cancel_reason_id:
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
lids.put("/updatelid/:id",validateSchema(updateLidValidationSchema), updateLid);

/**
 * @swagger
 * /lids/searchLid:
 *   get:
 *     summary: Lid bo‘yicha qidirish
 *     tags: [Lids]
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
lids.get("/searchLid", searchLid);


module.exports = { lids }