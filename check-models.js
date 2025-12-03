const {
    GoogleGenerativeAI
} = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Load .env.local manually since we are running a standalone script
const envPath = path.resolve(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const match = envContent.match(/GEMINI_API_KEY=(.*)/);
const apiKey = match ? match[1].trim() : null;

if (!apiKey) {
    console.error("Could not find GEMINI_API_KEY in .env.local");
    process.exit(1);
}

console.log("Using API Key:", apiKey.substring(0, 5) + "...");

async function listModels() {
    const genAI = new GoogleGenerativeAI(apiKey);
    try {
        // Note: The SDK might not expose listModels directly on the instance in all versions,
        // but let's try to use the model manager if available or just try to generate with a few common names.

        // Actually, for the current SDK version, we might not have a direct listModels helper exposed easily
        // without using the lower level API.
        // Let's try a simple generation with 'gemini-1.5-flash' and 'gemini-pro' to see which one works.

        const modelsToTest = ["gemini-1.5-flash", "gemini-1.5-flash-001", "gemini-pro", "gemini-1.0-pro"];

        console.log("\nTesting models...");

        for (const modelName of modelsToTest) {
            process.stdout.write(`Testing ${modelName}... `);
            try {
                const model = genAI.getGenerativeModel({
                    model: modelName
                });
                const result = await model.generateContent("Hi");
                const response = await result.response;
                console.log("✅ OK");
            } catch (e) {
                console.log("❌ Failed (" + e.message.split(':')[0] + ")");
            }
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
