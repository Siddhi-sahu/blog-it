import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://himani:fSKP1zLzZqXtMshG@cluster0.ujlkouj.mongodb.net/BlogitDB"
);

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
});

const blogSchema = new Schema({
  // date
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 7000,
  },
  author: {},
});

const User = mongoose.model("User", userSchema);

export { User };
