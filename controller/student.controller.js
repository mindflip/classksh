const studentModel = require("../model/student.model");

exports.createStudent = async (req, res, next) => {
    try {
        const createModel = await studentModel.create(req.body);
        res.status(201).json(createModel);
    } catch (err) {
        next(err);
    }
};

exports.getStudents = async (req, res, next) => {
    try {
        const allStudents = await studentModel.find({});
        res.status(200).json(allStudents);
    } catch(err) {
        next(err);
    }
};

exports.getStudentById = async (req, res, next) => {
    try {
        const student = await studentModel.findById(req.params.student_id);
        if(student) {
            res.status(200).json(student);
        } else {
            res.status(404).send();
        }
    } catch(err) {
        next(err);
    }
};

exports.updateStudent = async (req, res, next) => {
    try {
        const updatedStudent = await studentModel.findByIdAndUpdate(req.params.student_id, req.body, {
            new: true,
            useFindAndModify: false
        });
        if(updatedStudent)
            res.status(200).json(updatedStudent);
        else
            res.status(404).send();

    } catch (err) {
        next(err);
    }
};

exports.deleteStudent = async (req, res, next) => {
    try {
        const deleteStudent = await studentModel.findByIdAndDelete(req.params.student_id);

        if(deleteStudent)
            res.status(200).json(deleteStudent);
        else
            res.status(404).send();
    } catch (err) {
        next(err);
    }
};