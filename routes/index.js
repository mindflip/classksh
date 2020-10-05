const express = require('express');
const router = express.Router();
const studentModel = require("../model/student.model");
const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const homeworkScoreModel = require("../model/homeworkScore.model");
const groupBestStudentModel = require("../model/groupBestStudent.model");
const todayNoticeModel = require("../model/todayNotice.model");

router.use( async (req, res, next) => {
    res.locals.user = req.user;
    let today = await todayNoticeModel.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    if(today) {
        res.locals.today = today.content;
    }

    next();
});

/* GET home page. */
router.get('/', async (req, res, next) => {

    let homeworkGroup = await homeworkGroupModel.find({});
    let homework = await homeworkModel.find({});
    let homeworkScore = await homeworkScoreModel.find({});
    let student = await studentModel.find({});
    let groupBestStudents = await groupBestStudentModel.find({});

    // get recentHomeworkGroupScore
    let recentHomeworkGroupScore = 0;
    console.log(homeworkGroup);
    if(homeworkGroup.length != 0) {
        let recentHomeworkGroupId = homeworkGroup[homeworkGroup.length - 1]._id;
        let recentHomeworksInRecentGroup = homework.filter(element => recentHomeworkGroupId == element.group_id );
        recentHomeworksInRecentGroup.forEach(recentHomework => {
            homeworkScore.forEach(singleHomeworkScore => {
                if(recentHomework._id == singleHomeworkScore.homework_id) {
                    recentHomeworkGroupScore += Number(singleHomeworkScore.score);
                }
            });
        });
    }
    

    // get totalScore
    let totalScore = 0;
    if(homeworkScore.length != 0) {
        homeworkScore.forEach(score => {
            totalScore += Number(score.score);
        });
    }

    // get bestStudents
    let bestStudents = [];
    if(homeworkGroup.length != 0) {
        homeworkGroup.forEach(hwg => {
        
            let group = {
                title: hwg.title,
                students: []
            };
    
            groupBestStudents.forEach(gbs => {
                if(hwg._id == gbs.group_id) {
                    let studentInfo = student.filter(obj => {
                        return obj._id == gbs.student_id;
                    });
                    // console.log(studentInfo);
                    studentInfo.forEach(std => {
                        group.students.push({
                            name: std.name,
                            times: gbs.times
                        });        
                    });
                }
            });
    
            bestStudents.push(group);
        });
    }

    console.log(res.locals.user);

    res.render('index', {
        title: 'Express',
        user: res.locals.user,
        today: res.locals.today? res.locals.today : "오늘도 힘내요!",
        
        recentHomeworkGroupScore: recentHomeworkGroupScore,
        totalScore: totalScore,
        bestStudents: bestStudents.reverse(),
        
    });
});

module.exports = router;
