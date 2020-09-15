const express = require('express');
const router = express.Router();
const studentController = require('../controller/student.controller');

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.get("/:student_id", studentController.getStudentById);
router.patch("/:student_id", studentController.updateStudent);
router.delete("/:student_id", studentController.deleteStudent);

module.exports = router;