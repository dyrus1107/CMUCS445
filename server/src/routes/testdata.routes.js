import { Router } from "express";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

import fs from "fs"

const loadJSON = path =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const people = loadJSON('../mockDataPeople.json')
const router = Router();


// router.post("/", createEmployee);
// router.get("/", getEmployees);
// // router.post("/", [verifyToken, isAdmin, checkExistingUser], createEmployee);
// // router.get("/", [verifyToken, isAdmin, checkExistingUser], getEmployees);
// router.get("/:employeeId", [verifyToken, isAdmin, checkExistingUser], getEmployee);
router.get("/", async(req,res) =>{
  res.status(200).json(people)
})
export default router;
