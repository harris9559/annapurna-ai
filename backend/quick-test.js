import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

async function quickTest() {
  console.log('Quick Gemini Test...\n');
  
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const prompt = 'Say hello in one word';
    console.log('Sending prompt:', prompt);
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    console.log('✅ Response:', response);
    console.log('\n🎉 Gemini API is working!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
  }
}

quickTest();
