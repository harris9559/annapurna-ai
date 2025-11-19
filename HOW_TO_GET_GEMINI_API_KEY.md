# Gemini API Key Kaise Generate Karein

## Step-by-Step Guide (Hindi)

### 1. Google AI Studio pe jao
🔗 **Link**: https://aistudio.google.com/app/apikey

### 2. Google Account se Login karo
- Apne Google account se sign in karo
- Agar pehli baar use kar rahe ho, toh terms accept karo

### 3. API Key Create karo
- **"Get API key"** ya **"Create API key"** button pe click karo
- Ek project select karo (ya naya project banao)
- API key automatically generate ho jayegi

### 4. API Key Copy karo
- Puri key copy karo (39 characters ki hogi)
- Format: `AIzaSy...` se start hogi
- **Important**: Yeh key sirf ek baar dikhegi, isliye safely save karo

### 5. API Key ko .env file mein paste karo

Backend folder mein `.env` file open karo aur update karo:

```env
GEMINI_API_KEY=YOUR_NEW_API_KEY_HERE
```

### 6. Server Restart karo

```bash
# Terminal mein Ctrl+C press karke server stop karo
# Phir restart karo:
npm run dev
```

---

## ⚠️ Important Notes

1. **API Key ko public mat karo** - GitHub pe commit mat karo
2. **Free tier limits**: 
   - 60 requests per minute
   - 1500 requests per day
3. **Agar error aaye**: 
   - API key regenerate karo
   - Generative Language API enable hai ya nahi check karo

---

## 🔍 Troubleshooting

### Error: "API key not valid"
✅ Naya API key generate karo
✅ Copy-paste mein koi space ya extra character na ho
✅ .env file save karo aur server restart karo

### Error: "Model not found"
✅ Model name check karo: `gemini-2.5-flash`
✅ API access enabled hai ya nahi verify karo

---

## 📞 Help Links

- Google AI Studio: https://aistudio.google.com
- Gemini API Docs: https://ai.google.dev/docs
- API Key Management: https://aistudio.google.com/app/apikey
