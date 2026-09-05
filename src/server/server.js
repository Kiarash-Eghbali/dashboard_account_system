const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dataBase = require("./config/db");
const app = express();
require("dotenv").config();



app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/api/auth", require("./router/auth.js"));

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server runned to ${PORT} port`);
});
