import express from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import User from "../db";

const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string().max(30),
  lastName: z.string().max(30),
  password: z.string().min(6),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  //directly accessing success property from the object returned by signupSchema.safeParse(body);(remove)
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    res.status(400).json({
      message: "Invalid Inputs",
    });
  }

  const existingUser = await User.findOne(body);

  if (existingUser) {
    res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await User.create(body);

  const userId = user._id;

  if (!userId) {
    res.status(500).json({});
  }
});

module.exports = router;
