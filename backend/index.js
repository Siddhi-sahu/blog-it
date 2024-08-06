const express = require("express");
import MainRouter from "./routes/index";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", MainRouter);

app.listen(3000);
