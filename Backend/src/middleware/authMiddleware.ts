import { type NextFunction, type Request, type Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	console.log(req);
	next();
};

export default authMiddleware;
