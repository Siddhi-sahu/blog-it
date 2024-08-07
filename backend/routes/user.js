import express from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { User } from "../db.js";
import { JWT_SECRET } from "../config.js";

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
  const username = req.body.username;

  if (!userId) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }

  const payload = {
    userId,
    username,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  res.status(200).json({
    message: "user created successfully",
    token: token,
  });
});

export { router };
