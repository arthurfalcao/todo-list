const { Router } = require('express');

const authenticate = require('./middlewares/authenticate');

const { getProjectsController } = require('./modules/todos/useCases/getProjects');
const { createProjectController } = require('./modules/todos/useCases/createProject');
const { updateProjectController } = require('./modules/todos/useCases/updateProject');
const { deleteProjectController } = require('./modules/todos/useCases/deleteProject');

const { createTaskController } = require('./modules/todos/useCases/createTask');
const { updateTaskController } = require('./modules/todos/useCases/updateTask');
const { deleteTaskController } = require('./modules/todos/useCases/deleteTask');
const { finishTaskController } = require('./modules/todos/useCases/finishTask');
const { unfinishTaskController } = require('./modules/todos/useCases/unfinishTask');

const { createUserController } = require('./modules/users/useCases/createUser');
const { loginController } = require('./modules/users/useCases/login');

const router = Router();

router.post('/signup', createUserController);
router.post('/login', loginController);

router.get('/projects', authenticate, getProjectsController);
router.post('/projects', authenticate, createProjectController);
router.put('/projects/:id', authenticate, updateProjectController);
router.delete('/projects/:id', authenticate, deleteProjectController);

router.post('/tasks', authenticate, createTaskController);
router.put('/tasks/:id', authenticate, updateTaskController);
router.put('/tasks/:id/finish', authenticate, finishTaskController);
router.put('/tasks/:id/unfinish', authenticate, unfinishTaskController);
router.delete('/tasks/:id', authenticate, deleteTaskController);

module.exports = router;
