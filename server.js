import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import profileRoutes from "./controler/route/route.profile.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running On Port ${PORT}`);
});