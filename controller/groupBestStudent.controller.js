const groupBestStudentModel = require('../model/groupBestStudent.model');

exports.createGroupBestStudent = async (req, res, next) => {
    try {

        const deleteDoc = await groupBestStudentModel.deleteMany({ group_id: req.query.group_id, student_id: req.query.student_id });

        let counts = await groupBestStudentModel.count({ student_id: req.query.student_id });

        console.log(counts);

        let reqObj = req.body;
        reqObj.times = counts + 1;

        const bestStudent = await groupBestStudentModel.create(reqObj);
        res.status(201).json(reqObj);
    } catch (err) {
        next(err);
    }
};

exports.getGroupBestStudents = async (req, res, next) => {
    try {
        const bestStudent = await groupBestStudentModel.find({});
        res.status(200).json(bestStudent);
    } catch (err) {
        next(err);
    }
};

exports.deleteGroupBestStudent = async (req, res, next) => {
    try {
        const bestStudent = await groupBestStudentModel.findByIdAndDelete(req.params.group_best_student_id);

        if(bestStudent) {
            res.status(200).json(bestStudent);
        } else {
            res.status(404).send();
        }

    } catch (err) {
        next(err);
    }
}