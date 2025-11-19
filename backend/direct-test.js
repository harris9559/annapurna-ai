import fetch from 'node-fetch';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

async function testDirect() {
  console.log('Testing API Key directly...');
  console.log('API Key:', apiKey);
  console.log('Length:', apiKey.length, 'characters\n');
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Say hello in Hindi'
          }]
        }]
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS!');
      console.log('Response:', data.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ FAILED');
      console.log('Status:', response.status);
      console.log('Error:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

testDirect();
