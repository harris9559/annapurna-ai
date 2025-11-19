import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export default async function sendToAI(prompt) {
  if (!OPENROUTER_API_KEY) {
    throw new Error("❌ Missing OPENROUTER_API_KEY in .env");
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        },
      }
    );

    return (
      response.data?.choices?.[0]?.message?.content ||
      "No response from AI."
    );

  } catch (err) {
    console.error("❌ OPENROUTER API ERROR:", err.response?.data || err.message);
    throw new Error("AI API Error");
  }
}
