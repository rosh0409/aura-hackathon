import express from "express";

export const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("hiii");
});

routes.post("/verify-user", userVerification);
routes.post("/signup", userSignup);
routes.post("/signin", userSignin);
