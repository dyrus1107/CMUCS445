import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.error(error.message);
}

// const {} = require('mongoose')

// main().catch(err => console.log(err));

// async function main() {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Database is connected", db.connection.name);
//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
