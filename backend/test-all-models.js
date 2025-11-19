import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyAZaywOGsFtH5lSqw4vkJBo4H7uqqmL8-4';

const models = [
  'gemini-1.5-flash',
  'gemini-1.5-pro', 
  'gemini-pro',
  'gemini-2.0-flash-exp',
  'gemini-2.5-flash'
];

async function testAllModels() {
  console.log('Testing all Gemini models...\n');
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  for (const modelName of models) {
    try {
      console.log(`Testing ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Say hi');
      const response = result.response.text();
      console.log(`✅ ${modelName} WORKS!`);
      console.log(`   Response: ${response.substring(0, 50)}...\n`);
      break; // Stop at first working model
    } catch (error) {
      console.log(`❌ ${modelName} failed: ${error.message}\n`);
    }
  }
}

testAllModels();
