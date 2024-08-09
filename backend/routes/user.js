import express from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { Blog, User } from "../db.js";
import { JWT_SECRET } from "../config.js";
import { authMiddleWare } from "../middleware.js";

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

  const existingUser = await User.findOne({
    username: req.body.username,
  });

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

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

router.post("/signin", async (req, res) => {
  try {
    const body = req.body;

    const { success } = signinSchema.safeParse(body);

    if (!success) {
      res.status(400).json({
        message: "Incorrect inputs",
      });
    }

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json({
        message: "No user found. Sign up to continue!",
      });
    }

    const userId = user._id;
    const username = user.username;

    const payload = {
      userId,
      username,
    };
    const token = jwt.sign(payload, JWT_SECRET);

    res.status(200).json({
      msg: "signed in successfully",
      token: token,
    });
  } catch (error) {
    console.log("error:  ", error);
    res.json({
      msg: "error",
    });
  }
});

const updateSchema = z.object({
  password: z.string().min(6).optional(),
  firstName: z.string().max(30).optional(),
  lastName: z.string().max(30).optional(),
});

router.put("/update", authMiddleWare, async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  const { success } = updateSchema.safeParse(body);

  if (!success) {
    return res.status(400).json({
      message: "incorrect inputs",
    });
  }
  // console.log("Request body:", body);

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return res.json({
      message: "something went wrong",
    });
  }

  //$set

  await User.updateOne({ _id: userId }, { $set: body });
  // console.log("Request body:", body);

  return res.status(200).json({
    message: "Updated successfully",
  });
});

//need to work on it more

router.get("/bulk", authMiddleWare, async (req, res) => {
  const users = await User.find({});

  res.status(200).json({
    users: users,
  });
});

const blogBody = z.object({
  title: z.string().max(200),
  blog: z.string().max(6000),
  // author: z.string(),
});

router.post("/createblog", authMiddleWare, async (req, res) => {
  const { success } = blogBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Invalid inputs/character limit execeded",
    });
  }

  await Blog.create({
    title: req.body.title,
    blog: req.body.blog,
  });

  res.status(200).json({
    message: "blog uploaded successfully",
  });
});
router.use(function (err, req, res, next) {
  res.json({
    msg: err,
  });
});

export { router };
