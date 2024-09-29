const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', getCourses);
router.post('/', authenticateToken, addCourse);

module.exports = router;
