const homeworkScoreModel = require("../model/homeworkScore.model");

exports.createHomeworkScore = async (req, res, next) => {
    try {
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

exports.getHomeworkSocreById = async (req, res, next) => {
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

exports.updateHomeworkScore = async (req, res, next) => {
    try {
        const homeworkScore = await homeworkScoreModel.findByIdAndUpdate(req.params.homework_score_id, req.body, {
            new: true
        });
        if(homeworkScore) {
            res.status(200).json()
        }
    } catch (err) {

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