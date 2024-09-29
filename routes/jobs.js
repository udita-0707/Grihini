const express = require('express');
const { getJobs, addJob } = require('../controllers/jobController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', getJobs);           // Fetch all jobs
router.post('/', authenticateToken, addJob);  // Add a new job (Admin protected)

module.exports = router;
