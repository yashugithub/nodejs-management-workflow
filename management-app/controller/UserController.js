const UserController = require('express').Router();
const UserService = require('../service/UserService');

UserController.get('/', UserService.getAllUsers);
UserController.get('/:id', UserService.getUserById);
UserController.post('/', UserService.createUser);

module.exports = UserController;