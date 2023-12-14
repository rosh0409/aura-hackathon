import express from "express";
import { saveExpense } from "../controller/expense/saveExpense.js";
import { UserVerification } from "../controller/auth/userVerification.js";
import { FetchExpense } from "../controller/expense/fetchExpense.js";
import { saveBudget } from "../controller/expense/saveBudget.js";
import { saveIncome } from "../controller/expense/saveIncome.js";
import { deleteExpense } from "../controller/expense/deleteExpense.js";
import { deleteBudget } from "../controller/expense/deleteBudget.js";
import { deleteIncome } from "../controller/expense/deleteIncome.js";
export const ExpenseRoutes = express.Router();

// ExpenseRoutes.get("/", (req, res) => {
//   res.send("hiii");
// });

// ExpenseRoutes.post("/verify-user", userVerification);
ExpenseRoutes.post("/saveBudget", UserVerification, saveBudget);
ExpenseRoutes.post("/saveIncome", UserVerification, saveIncome);
ExpenseRoutes.post("/saveExpense", UserVerification, saveExpense);
ExpenseRoutes.get("/fetchExpense", UserVerification, FetchExpense);
ExpenseRoutes.get("/deleteExpense", UserVerification, deleteExpense);
ExpenseRoutes.get("/deleteBudget", UserVerification, deleteBudget);
ExpenseRoutes.get("/deleteIncome", UserVerification, deleteIncome);
