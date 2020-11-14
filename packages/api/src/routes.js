const { Router } = require('express');

const { createUserController } = require('./modules/users/useCases/createUser');

const router = Router();

router.post('/signup', createUserController);

module.exports = router;
