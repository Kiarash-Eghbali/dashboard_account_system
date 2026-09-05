import mongoose, { Schema, Model } from "mongoose";
import UserInterface from "../types/user";

const userModel = new Schema<UserInterface>({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: null },
});

const User: Model<UserInterface> = mongoose.model<UserInterface>("User", userModel);

export default User;
