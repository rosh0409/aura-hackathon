import express from "express";
import { UserVerification } from "../controller/auth/userVerification.js";
import { fetchCategoryData } from "../controller/graph_data/fetchCategoryData.js";
export const GraphRoutes = express.Router();

// ExpenseRoutes.post("/verify-user", userVerification);
// ExpertRoutes.post("/expertPosting", UserVerification, expertPosting);
// ExpertRoutes.post("/expertSignup", expertSignup);
// ExpertRoutes.post("/expertSignin", expertSignin);
GraphRoutes.get("/fetchCategory", UserVerification, fetchCategoryData);
