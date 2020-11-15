const { Router } = require('express');

const { createProjectController } = require('./modules/todos/useCases/createProject');
const { updateProjectController } = require('./modules/todos/useCases/updateProject');
const { createUserController } = require('./modules/users/useCases/createUser');
const { loginController } = require('./modules/users/useCases/login');

const router = Router();

router.post('/signup', createUserController);
router.post('/login', loginController);

router.post('/projects', createProjectController);
router.put('/projects/:id', updateProjectController);

module.exports = router;
