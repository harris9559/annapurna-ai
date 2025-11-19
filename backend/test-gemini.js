import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

async function testGeminiAPI() {
  console.log('Testing Gemini API...');
  console.log('API Key:', process.env.GEMINI_API_KEY ? 'Found' : 'Not Found');
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Try with gemini-2.5-flash model
    console.log('\nTrying gemini-2.5-flash model...');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const prompt = "Say hello in Hindi";
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    console.log('✅ Success!');
    console.log('Response:', response);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.status === 400) {
      console.log('\n⚠️  API Key Issue:');
      console.log('1. Verify your API key at: https://aistudio.google.com/app/apikey');
      console.log('2. Make sure the API key is enabled for Gemini API');
      console.log('3. Check if there are any restrictions on the API key');
    }
  }
}

testGeminiAPI();
