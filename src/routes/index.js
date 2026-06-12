import { Router } from "express";

const router = Router();

import categoryRouter from "./category.js";

router.get("/", (req, res) => {
  res.status(200).json({ error: false, message: "Stock API is running" });
});


router.use("/categories", categoryRouter);

export default router;