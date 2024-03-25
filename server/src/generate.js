import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import Role, {ROLES} from "./models/Role.js"; // Import Role model

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apicompany", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to generate random username and email
const generateRandomString = () => {
  return Math.random().toString(36).substring(7);
};

// Function to generate random password
const generateRandomPassword = () => {
  return Math.random().toString(36).substring(2, 10);
};

// Function to generate random role
const generateRandomRole = async () => {
  const randomIndex = Math.floor(Math.random() * ROLES.length);
  const roleName = ROLES[randomIndex];
  // Assuming Role model is imported
  const role = await Role.findOne({ name: roleName }); // Use Role instead of 'role'
  return role._id;
};

// Function to generate 500 users
const generateUsers = async () => {
  for (let i = 0; i < 500; i++) {
    const username = generateRandomString();
    const email = generateRandomString() + "@example.com";
    const password = await bcrypt.hash(generateRandomPassword(), 10);
    const role = await generateRandomRole();

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      roles: [role],
    });

    // Save user to database
    await newUser.save();
    console.log(`User ${i + 1} created`);
  }
  console.log("All users created successfully!");
};

generateUsers().then(() => {
  mongoose.connection.close(); // Close the connection after users are generated
});
