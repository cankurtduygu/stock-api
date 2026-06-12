import { Router } from 'express';

import validate from '../middlewares/validate.middleware.js';
import userSchema from '../helpers/joiSchemas.js';
import userController from '../controllers/user.controller.js';

const router = Router();

router.route('/')
      .get(userController.list)
      .post(validate(userSchema),userController.create);

router.route('/:id')
      .get(userController.read)
      .put(userController.update)
      .patch(userController.update)
      .delete(userController.deletee);

    

export default router;
