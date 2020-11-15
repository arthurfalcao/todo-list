const { Router } = require('express');

const { createProjectController } = require('./modules/todos/useCases/createProject');
const { createUserController } = require('./modules/users/useCases/createUser');
const { loginController } = require('./modules/users/useCases/login');

const router = Router();

router.post('/signup', createUserController);
router.post('/login', loginController);

router.post('/projects', createProjectController);

module.exports = router;
