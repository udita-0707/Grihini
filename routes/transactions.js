const express = require('express');
const { createTransaction, getTransactions } = require('../controllers/transactionController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/', authenticateToken, createTransaction);  // Create a transaction (protected)
router.get('/', authenticateToken, getTransactions);     // View transaction history (protected)

module.exports = router;
