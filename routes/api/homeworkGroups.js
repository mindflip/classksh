const express = require("express");
const router = express.Router();
const homeworkGroupController = require("../../controller/homeworkGroup.controller");

router.get("/", homeworkGroupController.getHomeworkGroups);
router.post("/", homeworkGroupController.createHomeworkGroup);
router.get("/:homework_group_id", homeworkGroupController.getHomeworkGroupById);
router.delete("/:homework_group_id", homeworkGroupController.deleteHomeworkGroup);


module.exports = router;