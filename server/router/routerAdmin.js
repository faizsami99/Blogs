
const controller = require('../controller/controller');
const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', controller.loginPage);

adminRouter.post('/', controller.login);

adminRouter.get('/dashboard', controller.adminDash);

adminRouter.get('/add', controller.add);

adminRouter.post('/add', controller.addNew);

module.exports = adminRouter;