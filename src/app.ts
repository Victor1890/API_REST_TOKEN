import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
const app: Application = express();

import authRoutes from "./routes/auth.routes";

//settings
app.set("PORT", process.env.PORT || 3000);
app.use(express.json());
app.use(cors());

//middlewares
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);

export default app;
