# Gemini API Integration - AnnapurnaAI Chatbot

## ✅ Setup Complete!

Your Gemini API has been successfully integrated into your Ayurvedic wellness chatbot.

## 🔑 API Key Configuration

Your Gemini API key has been added to `.env`:
```
GEMINI_API_KEY=AIzaSyCNV2jEyMWNkSq-jYzPx1c8byR0l9ca5eM
```

## 🤖 Model Used

- **Model**: `gemini-2.0-flash-exp` (Gemini 2.5 Flash)
- **Purpose**: Domain-specific Ayurvedic wellness responses

## 🎯 Domain-Specific Configuration

The chatbot is configured with an Ayurvedic system prompt that ensures:
- Disease-specific dietary recommendations
- Ayurvedic herbs and remedies suggestions
- Dosha balance considerations (Vata, Pitta, Kapha)
- Practical meal suggestions
- Lifestyle recommendations
- Compassionate, culturally appropriate responses

## 🚀 How to Start

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend (in another terminal):**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the chatbot:**
   - Navigate to the chatbot page in your app
   - Login with your credentials
   - Start asking Ayurvedic wellness questions!

## 📝 Example Questions

Try asking:
- "How to improve digestion?"
- "Foods for immunity"
- "Remedies for stress"
- "Better sleep tips"
- "What foods should I eat for diabetes according to Ayurveda?"

## 🔧 Technical Details

**File Modified**: `backend/routes/chat.js`
- Replaced OpenAI with Google Generative AI SDK
- Maintained domain-specific Ayurvedic system prompt
- Error handling with fallback responses

**Package Installed**: `@google/generative-ai`

## ⚠️ Important Notes

- Keep your API key secure and never commit it to public repositories
- The chatbot responses are focused on Ayurvedic wellness domain
- Users are advised to consult healthcare professionals for serious conditions
