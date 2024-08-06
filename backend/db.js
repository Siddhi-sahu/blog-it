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
    minlength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
