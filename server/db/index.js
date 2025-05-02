import mongoose from "mongoose"
import { DB_Name } from "../constants.js"

export const connectDB = async () => {
    try {
        console.log("Mongo URI:", `${process.env.MONGODB_URL}/${DB_Name}`);
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_Name}`
        );
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log("Mongo DB connection error:", error);
        process.exit(1);
    }
}
