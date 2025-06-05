import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // System prompt to guide the model behavior
    const systemPrompt = `You are a concise AI assistant for Public Events. Follow these rules strictly:

RESPONSE RULES:
- Keep all responses under 2-3 sentences
- Be direct and clear
- No lengthy explanations
- Get straight to the point
- Use simple language
- Focus on essential information only
- For quotes or pricing, give ranges quickly
- For event planning, ask only crucial questions
- End with a clear next step

KEY INFO:
- Event planning & management company
- Services: Corporate events, weddings, conferences
- Contact: +21212345678

ABOUT THE COMPANY:
- Name: Public Events
- Founded: 2002
- Location: Porte 3, 106 Rue Abderrahman Sahraoui, Casablanca 20100
- Core Services: Event planning, venue management, corporate events, weddings, conferences
- Contact: +21212345678 and contact@publicevents.ma`;

    // Format the input for the model
    const payload = {
      inputs: `<|system|>\n${systemPrompt}\n<|user|>\n${message}\n<|assistant|>`,
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true,
        return_full_text: false
      }
    };

    // Hugging Face Inference API
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        headers: {
          "Content-Type": "application/json",
          // Replace with your Hugging Face API token
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`
        },
        method: "POST",
        body: JSON.stringify(payload),
        timeout: 15000 // 15 seconds timeout
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`API error: ${JSON.stringify(error)}`);
    }

    const result = await response.json();
    let textResponse = result[0]?.generated_text || "Sorry, I couldn't generate a response.";

    // Clean up the text response if needed
    textResponse = textResponse.trim();

    return NextResponse.json({ response: textResponse });
  } catch (error) {
    console.error('Error details:', error.message, error.stack);
    return NextResponse.json(
      { response: "I apologize, but I'm having trouble connecting right now. Please try again shortly." },
      { status: 500 }
    );
  }
}