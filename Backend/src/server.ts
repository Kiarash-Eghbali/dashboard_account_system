import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/db";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./router/auth";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

db();

app.use("/api/auth", authRoutes);

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server runned to ${PORT} port`);
});
