import express from "express";
import { router as userRouter } from "./user.js";
import { router as blogRouter } from "./blog.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/blog", blogRouter);

export { router };
