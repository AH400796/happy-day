import mongoose from "mongoose";

const DB_HOST = process.env.NEXT_PUBLIC_DB_HOST!;
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(DB_HOST, {
      dbName: "happy_day",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
