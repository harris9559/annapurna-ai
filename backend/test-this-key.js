import fetch from 'node-fetch';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

console.log('Testing API Key:', apiKey);
console.log('Length:', apiKey.length, 'characters\n');

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: 'Say hello' }] }]
  })
})
.then(res => res.json())
.then(data => {
  if (data.error) {
    console.log('❌ API KEY IS INVALID!');
    console.log('Error:', data.error.message);
    console.log('\n🔴 This key does NOT work!');
    console.log('\n📝 You MUST generate a NEW key from:');
    console.log('   https://aistudio.google.com/app/apikey\n');
  } else {
    console.log('✅ Key works!');
    console.log('Response:', data.candidates[0].content.parts[0].text);
  }
})
.catch(err => console.error('Error:', err.message));
