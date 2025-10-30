// test-gemini.ts
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

async function testGemini() {
  try {
    const google = createGoogleGenerativeAI({
      apiKey: "AIzaSyC2tVdCfBeZxXiw3luY5OszN_URDeBhmzs",
    });

    const result = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt: "Say hello!",
    });
    console.log("✓ API Key works!", result.text);
  } catch (error) {
    console.error("❌ API Key test failed:", error);
  }
}

testGemini();
