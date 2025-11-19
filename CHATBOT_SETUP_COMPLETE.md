# ✅ Chatbot Setup Complete - Troubleshooting Guide

## 🔧 Changes Made

### 1. MongoDB - Local Setup
```env
MONGODB_URI=mongodb://localhost:27017/annapurnai
```
**Note**: Make sure MongoDB is running locally on port 27017

### 2. Gemini API Key - Updated
```env
GEMINI_API_KEY=AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4
```
✅ Tested and working with `gemini-2.5-flash` model

### 3. Frontend - Enhanced Error Logging
Added console logs to debug API calls and responses

---

## 🚀 How to Start

### Terminal 1 - Backend
```bash
cd backend
npm start
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

---

## 🔍 Debugging Steps

### Check 1: Backend API is Running
```bash
curl http://localhost:5000/api/health-check
```
Expected: `{"status":"ok","message":"AnnapurnaAI Backend Running"}`

### Check 2: Gemini API Key is Working
```bash
cd backend
node test-gemini.js
```
Expected: ✅ Success with Hindi greeting

### Check 3: Frontend Can Reach Backend
Open browser console (F12) and check:
- Network tab for API calls to `http://localhost:5000/api/chat/message`
- Console tab for error messages

---

## 🐛 Common Issues & Solutions

### Issue 1: "No authentication token" Error
**Problem**: User not logged in or token expired
**Solution**: 
1. Go to `/login` page
2. Login with your credentials
3. Token will be saved in localStorage
4. Then go to `/chatbot` page

### Issue 2: "API key not valid" Error
**Problem**: Gemini API key issue
**Solution**: Already fixed with new key `AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4`

### Issue 3: MongoDB Connection Error
**Problem**: MongoDB not running locally
**Solution**: 
```bash
# Start MongoDB service
# Windows:
net start MongoDB

# Or use MongoDB Atlas (cloud) - update MONGODB_URI in .env
```

### Issue 4: Response Not Showing in Frontend
**Possible Causes**:
1. ❌ Not logged in → Login first
2. ❌ CORS issue → Backend already has `cors()` enabled
3. ❌ Wrong API URL → Check `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
4. ❌ Token expired → Logout and login again

---

## 📊 Complete Flow

```
User Types Message
    ↓
Frontend (page.js)
    ↓
POST /api/chat/message
    ↓
Backend (chat.js)
    ↓
Auth Middleware (verify JWT)
    ↓
Gemini API Call
    ↓
Response with Ayurvedic advice
    ↓
Frontend displays message
```

---

## 🧪 Test the Complete Flow

1. **Start both servers** (backend + frontend)
2. **Open browser**: http://localhost:3000
3. **Login** with your account
4. **Go to chatbot**: http://localhost:3000/chatbot
5. **Open browser console** (F12)
6. **Type a message**: "How to improve digestion?"
7. **Check console logs** for:
   - "Sending message to: http://localhost:5000/api/chat/message"
   - "Response received: {message: '...'}"
8. **See response** in chat UI

---

## 📝 Files Modified

### Backend:
- ✅ `backend/.env` - MongoDB local + new Gemini API key
- ✅ `backend/routes/chat.js` - Using gemini-2.5-flash model
- ✅ `backend/server.js` - Already configured correctly

### Frontend:
- ✅ `frontend/app/chatbot/page.js` - Added debug logging
- ✅ `frontend/.env.local` - API URL configured

---

## 🎯 Expected Behavior

When you send "How to improve digestion?":

**Response should be like:**
```
Namaste! For improving digestion according to Ayurveda, I recommend:

**Foods to Eat:**
- Warm, cooked foods
- Ginger tea before meals
- Cumin, coriander, fennel (CCF tea)
- Buttermilk with meals

**Foods to Avoid:**
- Cold, raw foods
- Heavy, oily foods
- Overeating

**Lifestyle Tips:**
- Eat at regular times
- Avoid eating when stressed
- Walk after meals

This helps balance Agni (digestive fire) and supports healthy digestion.
```

---

## 🆘 Still Not Working?

Run this debug command:
```bash
cd backend
node test-chat-endpoint.js
```

Then check browser console for detailed error messages.
