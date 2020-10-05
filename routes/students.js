const express = require('express');
const router = express.Router();
const studentModel = require("../model/student.model");
const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const homeworkScoreModel = require("../model/homeworkScore.model");

router.get('/', async (req, res, next) => {

    const students = await studentModel.find({});
    // console.log(students);

    res.render('students', {
        students: students
    });
});

router.get('/:student_id', async (req, res, next) => {

    // student, homework group, homework, score
    const student = await studentModel.findById(req.params.student_id);
    const homeworkGroup = await homeworkGroupModel.find({});
    const homework = await homeworkModel.find({});
    const homeworkScore = await homeworkScoreModel.find({ student_id: req.params.student_id });

    res.render('student-detail', {
        student: student,
        homeworkGroup: homeworkGroup.reverse(),
        homework: homework,
        homeworkScore: homeworkScore
    });
});

module.exports = router;