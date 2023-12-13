import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";

export const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("hiii");
});

// routes.post("/verify-user", userVerification);
routes.post("/signup", UserSignup);
routes.post("/signin", UserSignin);
