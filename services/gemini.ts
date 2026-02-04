
import { GoogleGenAI } from "@google/genai";

// Use the API key string directly from the environment when initializing the GoogleGenAI client instance
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getArticleContent = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explain the history of ${topic} in medicine for a Gen Z audience. Use slang like "rizz", "no cap", "main character energy", "goated", and "ratioed" where appropriate. Keep it educational but highly engaging and funny. Format with catchy headers and bullet points.`,
      config: {
        temperature: 0.9,
      }
    });
    // Extract the generated text from the response using the .text property (not as a method)
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini content:", error);
    return "Failed to load the rizz. Try refreshing!";
  }
};
