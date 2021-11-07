import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";

import questionRoutes from "./routes/questions.routes.js";

const app = express();

app.set("port", config.PORT);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(questionRoutes);
app.use(express.urlencoded({ extended: true }));

export default app;
