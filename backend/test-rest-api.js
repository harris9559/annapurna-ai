import https from 'https';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

const data = JSON.stringify({
  contents: [{
    parts: [{ text: 'Say hello' }]
  }]
});

const options = {
  hostname: 'generativelanguage.googleapis.com',
  path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  },
  timeout: 10000
};

console.log('Testing Gemini API with REST...\n');

const req = https.request(options, (res) => {
  let body = '';
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const response = JSON.parse(body);
    
    if (res.statusCode === 200) {
      console.log('✅ API KEY WORKS!');
      console.log('Response:', response.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ API KEY INVALID');
      console.log('Error:', response.error?.message || body);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Network Error:', error.message);
});

req.on('timeout', () => {
  console.log('❌ Request Timeout - API not responding');
  req.destroy();
});

req.write(data);
req.end();
