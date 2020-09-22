const express = require("express");
const router = express.Router();
const adminController = require("../../controller/admin.controller");

router.get("/", adminController.getAdmins);
router.post("/", adminController.createAdmin);
router.get("/:admin_id", adminController.getAdminById);
router.delete("/:admin_id", adminController.deleteAdmin);

module.exports = router;