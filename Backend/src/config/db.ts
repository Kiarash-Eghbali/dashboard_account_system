import mongoose from "mongoose";

const db = async (): Promise<void> => {
	try {
		const dbConnect = await mongoose.connect(process.env.MONGODB_URL as string);
		console.log(`Mongo DB Connected to ${dbConnect.connection.host} `);
	} catch (error) {
		throw new Error("Mongo DB Connection has been failed");
		process.exit(1);
	}
};

export default db;
