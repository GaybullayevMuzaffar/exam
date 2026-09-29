const { Router } = require("express");
const groupStuffs = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postGroupStuff,
  getGroupStuff,
  deleteGroupStuff
} = require("../controllers/group_stuff.controller");

const {
  registerValidationSchema
} = require("../validation/group_stuff.validation");

/**
 * @swagger
 * /groupStuffs/postGroupStuff:
 *   post:
 *     summary: Yangi group stuff yaratish
 *     tags: [Group Stuffs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: string
 *                 example: example
 *               stuff_id:
 *                 type: string
 *                 example: example
 *             required:
 *               - group_id
 *               - stuff_id
 *     responses:
 *       201:
 *         description: Muvaffaqiyatli yaratildi
 *       500:
 *         description: Server xatosi
 */
groupStuffs.post("/postGroupStuff", validateSchema(registerValidationSchema), postGroupStuff);

/**
 * @swagger
 * /groupStuffs/getGroupStuff:
 *   get:
 *     summary: Barcha group stuffsni olish
 *     tags: [Group Stuffs]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       500:
 *         description: Server xatosi
 */
groupStuffs.get("/getGroupStuff", getGroupStuff);

/**
 * @swagger
 * /groupStuffs/deleteGroupStuff/{id}:
 *   delete:
 *     summary: Group Stuffni o‘chirish
 *     tags: [Group Stuffs]
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
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuffs.delete("/deleteGroupStuff/:id", deleteGroupStuff);

module.exports = { groupStuffs };