import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
const port = 5000;



async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("MongoDB connected");
    app.listen(config.port, () => {
      console.log(`Server is running on port: ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
