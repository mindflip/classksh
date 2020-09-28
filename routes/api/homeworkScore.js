const express = require('express');
const router = express.Router();
const homeworkScoreController = require("../../controller/homeworkScore.controller");

router.post("/", homeworkScoreController.createHomeworkScore);
router.get("/", homeworkScoreController.getHomeworkScores);
router.get("/:homework_score_id", homeworkScoreController.getHomeworkScoreById);
router.get("/student/:student_id", homeworkScoreController.getHomeworkScoreByStudentId);
router.get("/homework_group/:homework_group_id", homeworkScoreController.getHomeworkScoreByHomeworkGroupId);
router.patch("/:homework_score_id", homeworkScoreController.updateHomeworkScore);
router.delete("/:homework_score_id", homeworkScoreController.deleteHomeworkScore);

module.exports = router;