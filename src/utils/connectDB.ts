import mongoose from 'mongoose';


//  async: connecting to the database 
const connectDB = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI as string);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
};

export default connectDB;