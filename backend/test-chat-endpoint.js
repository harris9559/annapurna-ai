import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

async function testChatEndpoint() {
  console.log('🧪 Testing Chat Endpoint\n');
  
  // First, let's test without auth to see the error
  console.log('1️⃣ Testing without authentication...');
  try {
    const response = await fetch('http://localhost:5000/api/chat/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello, test message'
      })
    });
    
    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', data);
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
  
  console.log('\n2️⃣ To test with authentication:');
  console.log('- Login to your app first');
  console.log('- Get the JWT token from localStorage');
  console.log('- Add it to the Authorization header');
  console.log('\n📝 Expected flow:');
  console.log('Frontend -> POST /api/chat/message with Bearer token');
  console.log('Backend -> Verify token -> Call Gemini API -> Return response');
}

testChatEndpoint();
