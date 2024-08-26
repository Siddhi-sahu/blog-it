import express from "express";
import { z } from "zod";
// import jwt from "jsonwebtoken";
import { Blog, User } from "../db.js";
// import { JWT_SECRET } from "../config.js";
import { authMiddleWare } from "../middleware.js";

const router = express.Router();

const blogBody = z.object({
  title: z.string().max(200),
  blog: z.string().max(6000),
  // author: z.string(),
});

router.post("/createblog", authMiddleWare, async (req, res) => {
  // const username = req.username;
  const userId = req.userId;
  const { success } = blogBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Invalid inputs/character limit execeded",
    });
  }

  const blog = await Blog.create({
    title: req.body.title,
    blog: req.body.blog,
    author: userId,
  });

  await User.findByIdAndUpdate(userId, {
    $push: {
      blogs: blog._id,
    },
  });

  res.status(200).json({
    message: "blog uploaded successfully",
  });
});

router.get("/bulk/blogs", authMiddleWare, async (req, res) => {
  try {
    const blogs = await Blog.find().populate({
      path: "author",
      select: "firstName lastName",
    });

    res.status(200).send({
      blogs: blogs.map((blog) => ({
        ...blog.toObject(),
        author: {
          name: `${blog.author.firstName} ${blog.author.lastName}`,
        },
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to fetch blogs" });
  }
});

//getting a single blog for editing and for reAading

router.get("/userblog/:id", authMiddleWare, async (req, res) => {
  const blogId = req.params.id;

  try {
    const userBlog = await Blog.findById(blogId);
    res.status(200).json({
      blog: userBlog,
    });
  } catch (err) {
    console.log("error: ", err);
    return res.status(400).json({ msg: "something went wrong" });
  }
});

//editing user blogs

const updateBlogSchema = z.object({
  title: z.string().max(200).optional(),
  blog: z.string().max(6000).optional(),
});

router.put("/update/blogs/:id", authMiddleWare, async (req, res) => {
  const blogId = req.params.id;
  //   const body = req.body;

  const { success } = updateBlogSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      img: "Incorrect inputs. Cannot update",
    });
  }
  try {
    const result = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: req.body,
      },
      { new: true } //send back so that we debugg
    );

    if (!result) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.status(200).json({
      msg: "Blog updated!",
    });
  } catch (err) {
    console.log("error: " + err);
    return res.status(400).json({ msg: "something went wrong" });
  }
});

//deleting user blogs
router.delete("/delete/:id", authMiddleWare, async (req, res) => {
  const blogId = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(200).json({
      msg: "blog deleted successfully",
    });
  } catch (err) {
    console.log("error: " + err);
    return res
      .status(400)
      .json({ msg: "something went wrong/could not delete" });
  }
});

router.use(function (err, req, res, next) {
  res.send("global catch error : " + err);
});

export { router };
