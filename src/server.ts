import mongoose from "mongoose";
import app from "./app";
const port = 5000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
