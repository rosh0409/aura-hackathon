import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";
import { UserVerification } from "../controller/auth/userVerification.js";

export const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) => {
  res.send("hiii");
});

<<<<<<< HEAD
// UserRoutes.post("/verify-user", userVerification);
UserRoutes.post("/signup", UserSignup);
UserRoutes.post("/signin", UserSignin);
=======
//! All user routes

//! All get request
routes.get("/verify-user", UserVerification);

//! All post request
routes.post("/signup", UserSignup);
routes.post("/signin", UserSignin);
>>>>>>> f66b70de6dd27ef3ffbd6de227462e39808f47ee
