import express from "express";
import { UserVerification } from "../controller/auth/userVerification.js";
import {expertPosting} from '../controller/expert/expertPosting.js'
import { expertSignup } from "../controller/expert/expertSignup.js";
import { expertSignin } from "../controller/expert/expertSignin.js";
export const ExpertRoutes = express.Router();

// ExpenseRoutes.get("/", (req, res) => {
//   res.send("hiii");
// });

// ExpenseRoutes.post("/verify-user", userVerification);
ExpertRoutes.post("/expertPosting", UserVerification, expertPosting);
ExpertRoutes.post("/expertSignup", expertSignup);
ExpertRoutes.post("/expertSignin", expertSignin);
