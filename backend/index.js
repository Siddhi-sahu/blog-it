import express from "express";
import { router as MainRouter } from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", MainRouter);

app.listen(3000);
