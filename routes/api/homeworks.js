const express = require('express');
const router = express.Router();
const homeworkController = require("../../controller/homework.controller");

router.post("/", homeworkController.createHomework);
router.get("/", homeworkController.getHomeworks);
router.get("/:homework_id", homeworkController.getHomeworkById);
router.patch("/:homework_id", homeworkController.updateHomework);
router.delete("/:homework_id", homeworkController.deleteHomework);

module.exports = router;