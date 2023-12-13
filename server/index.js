import express from "express";
import "./db/Connection.js";
import { routes } from "./routes/userRoutes.js";

const app = express();

app.use("/api/user", routes);

app.listen(8000, (err) => {
  if (err) return err.message;
  console.log("server started");
});
