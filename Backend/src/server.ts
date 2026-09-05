import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/db";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

db();

app.use("/api/auth", require("./router/auth.js"));

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server runned to ${PORT} port`);
});
