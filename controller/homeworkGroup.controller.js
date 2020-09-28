const homeworkGroupModel = require("../model/homeworkGroup.model");
const homeworkModel = require("../model/homework.model");
const homeworkScoreModel = require("../model/homeworkScore.model");

exports.createHomeworkGroup = async (req, res, next) => {
    try {
        const homeworkGroup = await homeworkGroupModel.create(req.body);
        res.status(201).json(homeworkGroup);
    } catch(err) {
        next(err);
    }
};

exports.getHomeworkGroups = async (req, res, next) => {
    try {
        const homeworkGroups = await homeworkGroupModel.find({});
        res.status(200).json(homeworkGroups);
    } catch (err) {
        next(err);
    }
};

exports.getHomeworkGroupById = async (req, res, next) => {
    try {
        const homeworkGroup = await homeworkGroupModel.findById(req.params.homework_group_id);
        
        if(homeworkGroup) {
            res.status(200).json(homeworkGroup);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.deleteHomeworkGroup = async (req, res, next) => {
    try {
        const deletedHomeworkGroup = await homeworkGroupModel.findByIdAndDelete(req.params.homework_group_id);
        const deletedHomework = await homeworkModel.deleteMany({ group_id: req.params.homework_group_id });
        const deletedHomeworkScore = await homeworkScoreModel.deleteMany({ homework_id: deletedHomework._id });

        if(deletedHomeworkGroup) {
            res.status(200).json(deletedHomeworkGroup);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

