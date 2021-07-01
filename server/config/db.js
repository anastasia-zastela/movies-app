import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://admin:1qasw23edfr4@cluster0.llbzc.mongodb.net/test-movies-app-db?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
