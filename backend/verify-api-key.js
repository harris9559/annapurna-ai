import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

async function verifyAPIKey() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  console.log('🔍 Verifying Gemini API Key...\n');
  console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND');
  
  if (!apiKey) {
    console.log('❌ No API key found in .env file');
    return;
  }
  
  // Test with a simple REST API call
  const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
  
  try {
    console.log('\n📡 Testing API connection...');
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ API Key is VALID!\n');
      console.log('Available models:');
      data.models.forEach(model => {
        console.log(`  - ${model.name}`);
      });
    } else {
      console.log('❌ API Key is INVALID');
      console.log('Error:', data.error?.message || JSON.stringify(data));
      console.log('\n📝 Steps to fix:');
      console.log('1. Go to: https://aistudio.google.com/app/apikey');
      console.log('2. Create a new API key or verify existing one');
      console.log('3. Make sure "Generative Language API" is enabled');
      console.log('4. Update GEMINI_API_KEY in .env file');
    }
  } catch (error) {
    console.log('❌ Connection Error:', error.message);
  }
}

verifyAPIKey();
