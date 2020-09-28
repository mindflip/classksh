const homeworkScoreModel = require("../model/homeworkScore.model");
const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const studentModel = require("../model/student.model");

exports.createHomeworkScore = async (req, res, next) => {
    try {
        // get doc using homework_id and student_id

        console.log(req.query.homework_id);
        console.log(req.query.student_id);
        const deleteScore = await homeworkScoreModel.deleteMany({ homework_id: req.query.homework_id, student_id: req.query.student_id });

        const homeworkScore = await homeworkScoreModel.create(req.body);

        res.status(201).json(homeworkScore);
    } catch (err) {
        next(err);
    }
};

exports.getHomeworkScores = async (req, res, next) => {
    try {
        const homeworkScores = await homeworkScoreModel.find({});
        res.status(200).json(homeworkScores);
    } catch (err) {
        next(err);
    }
};

exports.getHomeworkScoreById = async (req, res, next) => {
    try {
        const homeworkScore = await homeworkScoreModel.findById(req.params.homework_score_id);
        if(homeworkScore) {
            res.status(200).json(homeworkScore);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.getHomeworkScoreByStudentId = async (req, res, next) => {
    try {
        let result = [];
        const homeworkGroup = await homeworkGroupModel.find({});
        const homework = await homeworkModel.find({});
        const homeworkScore = await homeworkScoreModel.find({ student_id : req.params.student_id });
        
        result.push(homeworkGroup);
        result.push(homework);
        result.push(homeworkScore);

        if(homeworkGroup && homework) {
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
}

exports.getHomeworkScoreByHomeworkGroupId = async (req, res, next) => {
    try {
        let result = [];
        let aryHomeworkScore = [];
        const homeworkGroup = await homeworkGroupModel.findById(req.params.homework_group_id);
        const homework = await homeworkModel.find({ group_id: homeworkGroup._id });
        //console.log(homework);
        homework.forEach( async (element) => {
            const homeworkScore = await homeworkScoreModel.find({ homework_id: element._id });
            // console.log(homeworkScore);
            aryHomeworkScore = aryHomeworkScore.concat(homeworkScore);
        });
        const student = await studentModel.find({});

        console.log(aryHomeworkScore);
        result.push(homeworkGroup);
        result.push(homework);
        result.push(aryHomeworkScore);
        result.push(student);

        if(homeworkGroup && homework) {
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
        
    } catch (err) {
        next(err);
    }
};

exports.updateHomeworkScore = async (req, res, next) => {
    try {
        const homeworkScore = await homeworkScoreModel.findByIdAndUpdate(req.params.homework_score_id, req.body, {
            new: true
        });
        if(homeworkScore) {
            res.status(200).json()
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.deleteHomeworkScore = async (req, res, next) => {
    try {
        const homeworkScore = await homeworkScoreModel.findByIdAndDelete(req.params.homework_score_id);

        if(homeworkScore) {
            res.status(200).json(homeworkScore);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
}