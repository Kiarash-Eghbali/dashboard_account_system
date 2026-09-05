import mongoose from "mongoose";

const db = async (): Promise<void> => {
	try {
		const dbConnect = await mongoose.connect(process.env.MONGODB_URL as string);
		console.log(`Mongo DB Connected`);
	} catch (error) {
		console.log(`Mongo DB Connection has been failed for : ${error} `);
		process.exit(1);
	}
};

export default db;
