import express from "express";
import { UserSignup } from "../controller/auth/userSignup.js";
import { UserSignin } from "../controller/auth/userSignin.js";
import { UserVerification } from "../controller/auth/userVerification.js";
import multer from "multer";
import { storage } from "../controller/auth/uploadImage.js";
import { uniquefile } from "../controller/auth/uploadImage.js";
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
UserRoutes.post("/signup", UserSignup);

const upload = multer({ storage: storage });
UserRoutes.post("/image", upload.single("profile"), (req, res) => {
  res.send("hii");
});
