import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./emailRoute.mjs";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", emailRouter);

const port = 8000;

const start = async () => {
  try {
    app.listen(port, async () => {
      console.log("App started");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
