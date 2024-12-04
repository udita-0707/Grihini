const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:user_id', userController.getUserById);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;
