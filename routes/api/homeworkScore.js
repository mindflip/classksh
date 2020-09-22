const express = require('express');
const router = express.Router();
const homeworkScoreController = require("../../controller/homeworkScore.controller");

router.post("/", homeworkScoreController.createHomeworkScore);
router.get("/", homeworkScoreController.getHomeworkScores);
router.get("/:homework_score_id", homeworkScoreController.getHomeworkSocreById);
router.patch("/:homework_score_id", homeworkScoreController.updateHomeworkScore);
router.delete("/:homework_score_id", homeworkScoreController.deleteHomeworkScore);

module.exports = router;