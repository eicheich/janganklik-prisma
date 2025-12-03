'use server';

import {
  GoogleGenerativeAI
}

  from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing in environment variables!");
}

else {
  console.log("✅ GEMINI_API_KEY is present.");
}

const genAI = new GoogleGenerativeAI(apiKey || "dummy-key");

export async function checkUrlSafety(url: string) {
  try {

    // Menggunakan model gemini-2.0-flash yang tersedia di akun Anda
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    }

    );

    // Prompt Engineering: Kita suruh AI jadi Cyber Security Expert
    const prompt = `Act as a cybersecurity expert. Analyze the following URL for potential phishing, malware, or suspicious patterns.

    URL: ${url}

    Evaluate based on:
    1. Domain reputation (simulate knowledge).
    2. URL structure (typosquatting, excessive subdomains, weird TLDs).
    3. Obfuscation techniques.

    Scoring Scale (0-100):
    - 0-69: Dangerous/High Risk (Phishing, Malware, Known Bad)
    - 70-79: Suspicious (Unusual, Unverified)
    - 80-100: Safe (Legitimate, Trusted)

    Return ONLY a JSON object with this format (no markdown):
    {
      "isSafe": boolean, // Set to true ONLY if score >= 80
      "riskScore": number, // 0 (Dangerous) to 100 (Safe)
      "reason": "Penjelasan singkat, padat, dan jelas dalam Bahasa Indonesia. Jelaskan mengapa link ini aman atau berbahaya.",
      "category": "Phishing" | "Malware" | "Safe" | "Suspicious"
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Membersihkan format JSON jika AI memberikan markdown ```json ... ```
    const cleanJson = text.replace(/```json|```/g, '').trim();

    return JSON.parse(cleanJson);

  }

  catch (error: any) {
    console.error("AI Error:", error);
    const errorMessage = error?.message || "Unknown error";

    return {

      isSafe: false,
      reason: `Error checking URL: $ {
        errorMessage
      }

      . (API Key Present: $ {
           ! !apiKey
        }

      )`,
      error: true
    }

      ;
  }
}
