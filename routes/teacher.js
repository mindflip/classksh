const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const studentModel = require("../model/student.model");
const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const homeworkScoreModel = require("../model/homeworkScore.model");
const todayNoticeModel = require("../model/todayNotice.model");

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

router.post('/today', isLoggedIn, async (req, res, next) => {
    try {
        const todayNotice = await todayNoticeModel.create(req.body);

        res.redirect('/');

    } catch (err) {
        next(err);
    }
})

module.exports = router;