import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import foodRoutes from "./routes/food.js";
import healthRoutes from "./routes/health.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
}));

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err.message);
    console.log("⚠️ Using in-memory storage as fallback");
  });

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/chat", chatRoutes);

app.get("/api/health-check", (req, res) => {
  res.json({ status: "ok", message: "AnnapurnaAI Backend Running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
