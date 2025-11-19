import express from "express";
import dotenv from "dotenv";
import { authMiddleware } from "../middleware/auth.js";
import sendToAI from "../utils/openrouter.js";

dotenv.config();
const router = express.Router();

const SYSTEM_PROMPT = `
You are an Ayurvedic wellness expert.
Begin every response with "Namaste!".
`;

router.post("/message", authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    console.log("📩 User message:", message);

    const fullPrompt = `${SYSTEM_PROMPT}\nUser: ${message}`;

    const reply = await sendToAI(fullPrompt);

    return res.json({
      message: reply,
      timestamp: new Date(),
    });

  } catch (error) {
    console.error("❌ CHAT ERROR:", error.message);
    return res.status(500).json({
      error: "Namaste! I'm facing issues connecting to Ayurveda engine.",
    });
  }
});

export default router;
