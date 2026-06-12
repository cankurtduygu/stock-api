import { Router } from "express";

const router = Router();

import categoryController from "../controllers/category.controller.js";

router.route("/")
  .get(categoryController.list)
  .post(categoryController.create);

router.route("/:id")
  .get(categoryController.read)
  .put(categoryController.update)
  .delete(categoryController.deletee);

export default router;