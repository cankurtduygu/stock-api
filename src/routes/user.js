import { Router } from 'express';

import validate from '../middlewares/validate.middleware.js';
import userSchema from '../helpers/joiSchemas.js';
import userController from "../controllers/category.controller.js";

const router = Router();

router.post('/', validate(userSchema), userController.create);

export default router;
