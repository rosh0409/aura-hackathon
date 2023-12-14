import express from "express";
import "./db/Connection.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { UserRoutes } from "./routes/userRoutes.js";
import { ExpenseRoutes } from "./routes/expenseRoutes.js";
import dotenv from "dotenv";
import { ExpertRoutes } from "./routes/expertRoutes.js";
import { GraphRoutes } from "./routes/graphRoutes.js";
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

//! defining cross origin resource sharing url
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

//! Making static file access over http
app.use("/static", express.static("public/uploads"));

//! All user related api
app.use("/api/user", UserRoutes);

//! All expense related api
app.use("/api/expense", ExpenseRoutes);

//! All expense related api
app.use("/api/expert", ExpertRoutes);

//! Routes for the graph
app.use("/api/graph",GraphRoutes)

//! setting up server
app.listen(process.env.PORT, (err) => {
  if (err) return err.message;
  console.log("server started");
});
