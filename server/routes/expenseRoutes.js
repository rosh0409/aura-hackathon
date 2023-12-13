import express from "express";
import {saveExpense} from '../controller/expense/saveExpense.js'
import { UserVerification } from "../controller/auth/userVerification.js";
export const ExpenseRoutes = express.Router();

// ExpenseRoutes.get("/", (req, res) => {
//   res.send("hiii");
// });

// ExpenseRoutes.post("/verify-user", userVerification);
ExpenseRoutes.post("/saveExpense", UserVerification,saveExpense);
// ExpenseRoutes.post("/signin", UserSignin);
