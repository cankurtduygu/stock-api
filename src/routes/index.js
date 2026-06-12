import { Router } from "express";

const router = Router();
import user from "./user.js";
import category from "./category.js";



router.get("/", (req, res) => {
  res.status(200).json({ error: false, message: "Stock API is running" });
});

router.use('/users', user)

router.use("/categories", category);

export default router;