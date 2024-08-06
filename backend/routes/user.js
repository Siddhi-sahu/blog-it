import express from "express";
import { z } from "zod";

const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string().max(30),
  lastName: z.string().max(30),
  password: z.string().min(6),
});

router.post("/signup", (req, res) => {
  const body = req.body;
  //directly accessing success property from the object returned by signupSchema.safeParse(body);(remove)
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    res.status(400).json({
      message: "Invalid Inputs",
    });
  }
});

module.exports = router;
