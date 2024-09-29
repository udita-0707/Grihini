const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', getProducts);              // Fetch all products
router.post('/', authenticateToken, addProduct);  // Add a new product (Admin protected)

module.exports = router;
