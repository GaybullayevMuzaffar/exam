const { Router } = require("express");
const stuffRoles = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postStuffRole,
  getStuffRole,
  deleteStuffRole
} = require("../controllers/stuff_role.controller");

const {
  registerValidationSchema
} = require("../validation/stuff_role.validation");

/**
 * @swagger
 * /stuffRoles/postStuffRole:
 *   post:
 *     summary: Yangi stuff role yaratish
 *     tags: [Stuff Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stuff_id:
 *                 type: string
 *                 example: example
 *               role_id:
 *                 type: string
 *                 example: example
 *             required:
 *               - stuff_id
 *               - role_id
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
stuffRoles.post("/postStuffRole", validateSchema(registerValidationSchema), postStuffRole);

/**
 * @swagger
 * /stuffRoles/getStuffRoles:
 *   get:
 *     summary: Barcha stuff rolesni olish
 *     tags: [Stuff Roles]
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
stuffRoles.get("/getStuffRoles", getStuffRole);

/**
 * @swagger
 * /stuffRoles/deleteStuffRoles/{id}:
 *   delete:
 *     summary: Stuff Roleni o‘chirish
 *     tags: [Stuff Roles]
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
stuffRoles.delete("/deleteStuffRoles/:id", deleteStuffRole);

module.exports = { stuffRoles };