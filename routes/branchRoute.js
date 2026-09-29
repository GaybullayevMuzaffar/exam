const { Router } = require("express");
const branches = Router();
const { validateSchema } = require("../middleware/validate.middleware");

const {
  postBranch,
  getBranches,
  deleteBranch,
  updateBranch,
  searchBranch
} = require("../controllers/branch.controller");

const {
  registerValidationSchema,
  updateBranchValidationSchema
} = require("../validation/branch.validation");

/**
 * @swagger
 * /branches/postBranch:
 *   post:
 *     summary: Yangi branche yaratish
 *     tags: [Branches]
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
 *               address:
 *                 type: string
 *                 example: example
 *               call_number:
 *                 type: number
 *                 example: 1
 *             required:
 *               - name
 *               - address
 *               - call_number
 *     responses:
 *       201:
 *         description: Muvaffaqiyatli yaratildi
 *       500:
 *         description: Server xatosi
 */
branches.post("/postBranch", validateSchema(registerValidationSchema), postBranch);

/**
 * @swagger
 * /branches/getBranches:
 *   get:
 *     summary: Barcha branchesni olish
 *     tags: [Branches]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       500:
 *         description: Server xatosi
 */
branches.get("/getBranches", getBranches);

/**
 * @swagger
 * /branches/deleteBranch/{id}:
 *   delete:
 *     summary: Brancheni o‘chirish
 *     tags: [Branches]
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
branches.delete("/deleteBranch/:id", deleteBranch);

/**
 * @swagger
 * /branches/updateBranch/{id}:
 *   put:
 *     summary: Brancheni yangilash
 *     tags: [Branches]
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
 *               address:
 *                 type: string
 *                 example: example
 *               call_number:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli bajarildi
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
branches.put("/updateBranch/:id", validateSchema(updateBranchValidationSchema), updateBranch);

/**
 * @swagger
 * /branches/searchBranch:
 *   get:
 *     summary: Branche bo‘yicha qidirish
 *     tags: [Branches]
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
 *       500:
 *         description: Server xatosi
 */
branches.get("/searchBranch", searchBranch);


module.exports = { branches };