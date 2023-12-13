import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";

export const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) => {
  res.send("hiii");
});

// UserRoutes.post("/verify-user", userVerification);
UserRoutes.post("/signup", UserSignup);
UserRoutes.post("/signin", UserSignin);
