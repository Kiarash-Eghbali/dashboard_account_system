import { type NextFunction, type Request, type Response } from "express";
import ResponseInterface from "../types/response";
import UserInterface from "../types/user";
import User from "../model/User";

declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user: UserInterface = req.user;

		if (!user) {
			const response: ResponseInterface = { result: "User dont login", code: "USER_DONT_LOGIN" };
			return res.status(401).json(response);
		}

		const userData = await User.findOne({ username: user.username });
		if (!userData) {
			const response: ResponseInterface = { result: "User not Found", code: "USER_NOT_FOUND" };
			return res.status(401).json(response);
		}

		const response: ResponseInterface = { result: "User is login", code: "USER_IS_LOGIN" };
		res.status(200).json(response);

		next();
	} catch (error) {
		next(error as string);
	}
};

export default authMiddleware;
