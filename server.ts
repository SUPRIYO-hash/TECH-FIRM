import express, { Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === "production";

app.use(express.json());

// API: Handle Chatbot Inquiries
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const systemPrompt = `You are the official digital concierge for NEXORA  Studios (note the two spaces in the brand name).
NEXORA  Studios is a premium web design and development studio.
Studio Purpose: We design and develop fast, responsive, and tailored websites for businesses, salons, restaurants, cafés, travel agencies, personal brands, and modern service practices.

Core Guidelines:
1. Always write the brand name exactly as "NEXORA  Studios" (with two spaces).
2. Never reveal personal names or identities of people behind the studio.
3. Be professional, honest, concise, polite, and helpful.
4. Starting price is from ₹2,000 for standard basic websites. Every project is tailored to its requirements; final quote depends on page volume, features, content, integrations, domain, and hosting.
5. Never invent fake awards, fake statistics, fake partner logos, or fake guarantees (like "guaranteed #1 Google ranking" or "guaranteed sales").
6. If asked about timelines: 3 to 7 business days for focused single-page landing pages/business sites, 1 to 3 weeks for multi-page commercial platforms.
7. If asked how to start: advise them to submit an inquiry through the contact form or email productionsupriyo@gmail.com.
8. Keep answers succinct (2-4 sentences max) and invite them to explore the portfolio or contact form.`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: message,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.3,
            maxOutputTokens: 250,
          },
        });

        const reply = response.text || "Thank you for inquiring with NEXORA  Studios. Our team is available to assist you with custom website design and development.";
        res.json({ reply });
        return;
      } catch {
        // Fall back to grounded response if AI call encounters quota or network error
      }
    }

    // Grounded studio fallback response
    res.json({
      reply: "Thank you for reaching out to NEXORA  Studios. We specialize in custom, responsive websites starting from ₹2,000. You can explore our Selected Work or submit an inquiry through our contact form.",
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Failed to process chat message" });
  }
});

// API: Handle Project Inquiries
app.post("/api/contact", (req: Request, res: Response) => {
  try {
    const { fullName, businessName, email, phone, projectType, budget, message, consent } = req.body;

    if (!fullName || !businessName || !email || !message || !consent) {
      res.status(400).json({ error: "Required fields missing or consent not granted." });
      return;
    }

    const referenceId = `NXR-${Date.now().toString().slice(-6)}`;

    res.json({
      success: true,
      referenceId,
      message: "Inquiry received. NEXORA  Studios will review your project details promptly.",
    });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== "true",
      },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(indexPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`NEXORA  Studios server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
