import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";
import { UserVerification } from "../controller/auth/userVerification.js";
import multer from "multer";
import { storage } from "../controller/auth/uploadImage.js";
import { uniquefile } from "../controller/auth/uploadImage.js";
import userLogout from "../controller/auth/userLogout.js";
export const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) => {
  res.send("hiii");
});

const upload = multer({ storage: storage });

//! All user routes

//! All get request
UserRoutes.get("/verify-user", UserVerification);

//! All post request
UserRoutes.post("/signup", upload.single("profile"), UserSignup);
UserRoutes.post("/signin", UserSignin);
UserRoutes.post("/logout", userLogout);

UserRoutes.post("/image", upload.single("profile"), (req, res) => {
  res.send("hii");
});
