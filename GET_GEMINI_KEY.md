# 🔑 Gemini API Key Generate Kaise Karein

## ⚠️ IMPORTANT: Current API key INVALID hai!

Aapko **NAYA API key** generate karna hoga.

---

## 📝 Step-by-Step Instructions

### Step 1: Google AI Studio pe jao
🔗 **Link**: https://aistudio.google.com/app/apikey

### Step 2: Login karo
- Google account se sign in karo
- Terms accept karo (agar pehli baar hai)

### Step 3: Create API Key
1. **"Create API key"** button pe click karo
2. Select karo: **"Create API key in new project"** (recommended)
3. API key automatically generate ho jayegi

### Step 4: Copy the Complete Key
- Puri key copy karo (39 characters)
- Format: `AIzaSy...` se start hogi
- **IMPORTANT**: Yeh key sirf ek baar dikhegi!

### Step 5: Test the Key (Browser mein)
1. Same page pe "Try it" ya "Prompt" section mein jao
2. Kuch bhi type karo: "Say hello"
3. Response aana chahiye
4. ✅ Agar response aaya = Key valid hai

### Step 6: Update .env File
```env
GEMINI_API_KEY=AIzaSy_YOUR_ACTUAL_KEY_HERE
```

### Step 7: Server Restart
```bash
# Terminal mein Ctrl+C press karo
# Phir restart karo:
npm start
```

---

## 🔍 Verify API Key is Working

Backend terminal mein yeh dikhna chahiye:
```
✅ Gemini API initialized with key: AIzaSy...
```

Jab message bhejo, toh:
```
📩 Received message: How to improve digestion?
🤖 Calling Gemini 2.5 Flash API...
✅ Gemini response received: Namaste! For improving...
```

---

## ❌ Common Mistakes

1. **Incomplete key copy kiya** - Puri 39 characters ki key copy karo
2. **Spaces add ho gaye** - Copy-paste mein extra spaces na ho
3. **Old key use kar rahe ho** - Naya key generate karo
4. **API not enabled** - Google AI Studio mein enable hona chahiye

---

## 🆘 Still Not Working?

### Check 1: API Key Length
```bash
# Backend folder mein run karo:
node -e "require('dotenv').config(); console.log('Length:', process.env.GEMINI_API_KEY?.length)"
```
Expected: `Length: 39`

### Check 2: Direct Test
```bash
node quick-test.js
```
Expected: ✅ Success with response

### Check 3: Browser Test
Go to: https://aistudio.google.com/prompts/new_chat
- Type: "Say hello"
- If it works in browser but not in your app = API key copy issue

---

## 📞 Alternative: Use Different Model

Agar `gemini-2.5-flash` kaam nahi kar raha, try these:
- `gemini-1.5-flash`
- `gemini-1.5-pro`
- `gemini-pro`

Update in `backend/routes/chat.js`:
```javascript
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
```

---

## ✅ Final Checklist

- [ ] New API key generated from Google AI Studio
- [ ] Tested in browser (aistudio.google.com)
- [ ] Complete 39 character key copied
- [ ] Updated in .env file
- [ ] No extra spaces or characters
- [ ] Server restarted
- [ ] Backend shows "✅ Gemini API initialized"

---

**Jab naya key generate ho jaye, mujhe batao. Main turant update kar dunga!** 🚀
