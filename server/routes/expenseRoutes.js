import express from "express";
import {saveExpense} from '../controller/expense/saveExpense.js'
export const ExpenseRoutes = express.Router();

// ExpenseRoutes.get("/", (req, res) => {
//   res.send("hiii");
// });

// ExpenseRoutes.post("/verify-user", userVerification);
ExpenseRoutes.post("/saveExpense", saveExpense);
// ExpenseRoutes.post("/signin", UserSignin);
