import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

export function authMiddleWare(req, res, next) {
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "no token detected. signin to continue",
    });
  }
  const token = authHeaders.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    // req.username = decoded.username;
    next();
  } catch (error) {
    console.log("error from authentication: " + error);
    res.status(411).json({
      message: "Invalid token",
    });
    return;
  }
}
