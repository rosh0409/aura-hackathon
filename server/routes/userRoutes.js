import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";
import { UserVerification } from "../controller/auth/userVerification.js";
import { userLogout } from "../controller/auth/userLogout.js";

export const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) => {
  res.send("hiii");
});

// UserRoutes.post("/verify-user", userVerification);
//! All user routes

//! All get request
UserRoutes.get("/verify-user", UserVerification);

//! All post request
UserRoutes.post("/signup", UserSignup);
UserRoutes.post("/signin", UserSignin);
UserRoutes.post("/logout", UserVerification,userLogout);