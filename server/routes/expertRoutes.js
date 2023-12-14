import express from "express";
import { UserVerification } from "../controller/auth/userVerification.js";
import {expertPosting} from '../controller/expert/expertPosting.js'
export const ExpertRoutes = express.Router();

// ExpenseRoutes.get("/", (req, res) => {
//   res.send("hiii");
// });

// ExpenseRoutes.post("/verify-user", userVerification);
ExpertRoutes.post("/expertPose", UserVerification, expertPosting);
