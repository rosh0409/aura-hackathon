import express from "express";
import "./db/Connection.js";

const app = express();

app.listen(8000, (err) => {
  if (err) return err.message;
  console.log("server started");
});
