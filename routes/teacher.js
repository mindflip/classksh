const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const studentModel = require("../model/student.model");
const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const homeworkScoreModel = require("../model/homeworkScore.model");


router.get('/', isLoggedIn, async (req, res, next) => {
    try {
        const students = await studentModel.find({});
        const homeworkGroup = await homeworkGroupModel.find({});
        const homework = await homeworkModel.find({});
        const homeworkScore = await homeworkScoreModel.find({});






        res.render('teacher', {
            students: students,
            homeworkGroup: homeworkGroup,
            homework: homework,
            homeworkScore: homeworkScore
        });
    } catch (err) {
        console.error(err)
        next(err);
    }
});

module.exports = router;