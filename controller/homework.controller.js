const homeworkModel = require("../model/homework.model");

exports.createHomework = async (req, res, next) => {
    try {
        const homework = await homeworkModel.create(req.body);
        res.status(201).json(homework);
    } catch (err) {
        next(err);
    }
};

exports.getHomeworks = async (req, res, next) => {
    try {
        const homeworks = await homeworkModel.find({});
        res.status(200).json(homeworks);
    } catch (err) {
        next(err);
    }
};

exports.getHomeworkById = async (req, res, next) => {
    try {
        const homework = await homeworkModel.findById(req.params.homework_id);
        if(homework) {
            res.status(200).json(homework);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.updateHomework = async (req, res, next) => {
    try {
        const updatedHomework = await homeworkModel.findByIdAndUpdate(req.params.homework_id, req.body, {
            new: true,
            useFindAndModify: false
        });
        if(updatedHomework) {
            res.status(200).json(updatedHomework);
        } else {
            res.status(404).send();
        }

    } catch (err) {
        next(err);
    }
};

exports.deleteHomework = async (req, res, next) => {
    try {
        const deletedHomework = await homeworkModel.findByIdAndDelete(req.params.homework_id);

        if(deletedHomework) {
            res.status(200).json(deletedHomework);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};