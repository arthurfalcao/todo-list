const { Router } = require('express');

const { getProjectsController } = require('./modules/todos/useCases/getProjects');
const { createProjectController } = require('./modules/todos/useCases/createProject');
const { updateProjectController } = require('./modules/todos/useCases/updateProject');
const { deleteProjectController } = require('./modules/todos/useCases/deleteProject');
const { createTaskController } = require('./modules/todos/useCases/createTask');
const { createUserController } = require('./modules/users/useCases/createUser');
const { loginController } = require('./modules/users/useCases/login');

const router = Router();

router.post('/signup', createUserController);
router.post('/login', loginController);

router.get('/projects', getProjectsController);
router.post('/projects', createProjectController);
router.put('/projects/:id', updateProjectController);
router.delete('/projects/:id', deleteProjectController);

router.post('/tasks', createTaskController);

module.exports = router;
