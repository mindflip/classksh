const express = require('express');
const router = express.Router();
const groupBestStudentController = require('../../controller/groupBestStudent.controller');

router.post('/', groupBestStudentController.createGroupBestStudent);
router.get('/', groupBestStudentController.getGroupBestStudents);
router.delete('/:group_best_student_id', groupBestStudentController.deleteGroupBestStudent);

module.exports = router;