import https from 'https';

const GEMINI_API_KEY = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

const data = JSON.stringify({
  contents: [{
    parts: [{ text: 'Say hello in one sentence' }]
  }]
});

const options = {
  hostname: 'generativelanguage.googleapis.com',
  path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  },
  timeout: 30000
};

console.log('Testing Gemini API...');

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    try {
      const response = JSON.parse(body);
      if (res.statusCode === 200) {
        console.log('✅ Success!');
        console.log('Response:', response.candidates[0].content.parts[0].text);
      } else {
        console.log('❌ Error:', response.error?.message || 'Unknown error');
        console.log('Full response:', JSON.stringify(response, null, 2));
      }
    } catch (error) {
      console.log('❌ Parse error:', error.message);
      console.log('Body:', body);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Request error:', error.message);
});

req.on('timeout', () => {
  req.destroy();
  console.log('❌ Request timeout');
});

req.write(data);
req.end();
