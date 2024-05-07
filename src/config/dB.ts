import "dotenv/config"
import mongoose from "mongoose";



mongoose.set('strictQuery', false);

type connectDBType = () => Promise<typeof mongoose>

const connectDB: connectDBType = async () => {
    return await mongoose.connect(process.env.MONGODB_URI as string);
}

export default connectDB