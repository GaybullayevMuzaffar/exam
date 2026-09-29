const { Router } = require("express");
const roles = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postRole,
  getRoles,
  deleteRoles,
  updateRole,
  searchRole
} = require("../controllers/role.controller");

const {
  registerValidationSchema,
  updateRoleValidationSchema
} = require("../validation/role.validation");

/**
 * @swagger
 * /roles/postRole:
 *   post:
 *     summary: Yangi role yaratish
 *     tags: [Roles]
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
roles.post("/postRole", validateSchema(registerValidationSchema), postRole);

/**
 * @swagger
 * /roles/getRoles:
 *   get:
 *     summary: Barcha rolesni olish
 *     tags: [Roles]
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
roles.get("/getRoles", getRoles);

/**
 * @swagger
 * /roles/deleteRoles/{id}:
 *   delete:
 *     summary: Roleni o‘chirish
 *     tags: [Roles]
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
roles.delete("/deleteRoles/:id", deleteRoles);

/**
 * @swagger
 * /roles/updateRole/{id}:
 *   put:
 *     summary: Roleni yangilash
 *     tags: [Roles]
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
roles.put("/updateRole/:id", validateSchema(updateRoleValidationSchema), updateRole);

/**
 * @swagger
 * /roles/searchRole:
 *   get:
 *     summary: Role bo‘yicha qidirish
 *     tags: [Roles]
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
roles.get("/searchRole", searchRole);

module.exports = { roles };