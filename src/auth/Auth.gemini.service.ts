import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY; 

    if (!apiKey) {
      throw new Error('GEMINI_API_KEY no está definida en el archivo .env');
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      
      console.log('Raw result:', result);

      if (typeof result.response === 'string') {
        return result.response;
      } else {
        return result.response.text ? result.response.text() : 'No response text available';
      }
    } catch (error) {
      console.error('Error en Gemini API:', error);
      throw new Error('No se pudo obtener una respuesta de Gemini.');
    }
  }
}

