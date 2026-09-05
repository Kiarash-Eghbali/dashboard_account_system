import { Document } from "mongoose";

interface UserInterface extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	lastLogin: Date;
}

export default UserInterface;
