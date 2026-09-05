import express, { type NextFunction, type Request, type Response } from "express";
import User from "../model/User";
import bcrypt from "bcryptjs";
import ResponseInterface from "../types/response";
import authMiddleware from "../middleware/authMiddleware";
const router = express.Router();

router.get("/", authMiddleware, (req: Request, res: Response, next: NextFunction) => {
	try {
		const Responses: ResponseInterface = { result: "succes", code: "AUTH_SUCCESSED" };
		res.status(200).json(Responses);
	} catch (error) {
		next(error as string);
	}
});

export default router;
