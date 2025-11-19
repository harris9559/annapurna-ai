import fetch from 'node-fetch';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

async function testWithFetch() {
  console.log('Testing Gemini API with fetch...\n');
  console.log('API Key:', apiKey.substring(0, 20) + '...');
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout
  
  try {
    console.log('Making request...');
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: 'Say hello' }] }]
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeout);
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS!');
      console.log('Response:', data.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ API Error');
      console.log('Status:', response.status);
      console.log('Error:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    clearTimeout(timeout);
    if (error.name === 'AbortError') {
      console.log('❌ Request timeout - API not responding');
    } else {
      console.log('❌ Error:', error.message);
    }
  }
}

testWithFetch();
