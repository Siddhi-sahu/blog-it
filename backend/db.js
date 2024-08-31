import mongoose, { Schema } from "mongoose";

mongoose.connect("");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

const blogSchema = new Schema({
  // date
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  // description: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   maxlength: 200,
  // },
  blog: {
    type: String,
    required: true,
    trim: true,
    maxlength: 6000,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
const Blog = mongoose.model("Blog", blogSchema);

export { User, Blog };
