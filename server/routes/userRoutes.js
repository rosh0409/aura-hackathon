import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";
import { UserVerification } from "../controller/auth/userVerification.js";

export const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("hiii");
});

//! All user routes

//! All get request
routes.get("/verify-user", UserVerification);

//! All post request
routes.post("/signup", UserSignup);
routes.post("/signin", UserSignin);
