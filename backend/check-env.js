import dotenv from 'dotenv';

dotenv.config();

console.log('Environment Variables Check:');
console.log('============================');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? `${process.env.GEMINI_API_KEY.substring(0, 15)}... (${process.env.GEMINI_API_KEY.length} chars)` : 'NOT FOUND');
console.log('\nFull API Key:', process.env.GEMINI_API_KEY);
