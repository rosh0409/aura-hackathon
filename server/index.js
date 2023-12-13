import express from "express";
import "./db/Connection.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { UserRoutes } from "./routes/userRoutes.js";
import { ExpenseRoutes } from "./routes/expenseRoutes.js"

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));



app.use("/api/user", UserRoutes);
app.use("/api/expense", ExpenseRoutes);

app.listen(8000, (err) => {
  if (err) return err.message;
  console.log("server started");
});
