import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import OpenAI from "openai";

const schema = z.object({
  who: z.string().min(3).max(300)
});

// Use the official OpenAI SDK; expect OPENAI_API_KEY to be provided in Vercel env
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
function extractJsonArray(text: string): string[] {
  // Try direct parse
  try {
    const maybe = JSON.parse(text);
    if (Array.isArray(maybe)) return maybe;
  } catch {}
  // Try to find the first [...] block
  const m = text.match(/\[[\s\S]*\]/);
  if (m) {
    try {
      const maybe = JSON.parse(m[0]);
      if (Array.isArray(maybe)) return maybe;
    } catch {}
  }
  // Fallback: line split
  return text.split(/\n|\r/).map(s => s.trim()).filter(Boolean).slice(0,5);
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { who } = schema.parse(body);

    // Prompt engineering: humorous + useful hybrid
    const sys = `You are 'AI Santa'—a witty but helpful gift recommender. 
Return ONLY a JSON array of 3-5 concise gift ideas. Each idea should be 8-20 words, 
specific enough to search on Amazon UK. Avoid brand names unless iconic. No extra commentary.`;

    const user = `Who: ${who}
Constraints:
- Mix fun + practicality
- Vary price points
- Include at least one small stocking stuffer
Output: JSON array of strings only.`;

    // Use Responses API (compatible with gpt-4.1/gpt-4o/gpt-5 when available)
    const resp = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: sys },
        { role: "user", content: user }
      ],
      temperature: 0.8,
      max_tokens: 300
    });

    const text = resp.choices?.[0]?.message?.content || "[]";
    // Best-effort JSON parse
    let ideas: string[] = [];
    try {
      ideas = JSON.parse(text);
      if (!Array.isArray(ideas)) ideas = [];
    } catch {
      // fallback: split lines if LLM didn't return JSON
      ideas = text.split(/\n|\r/).filter(Boolean).slice(0,5);
    }

    // Basic sanitization & cap
    ideas = ideas.map(s => String(s).trim()).filter(Boolean).slice(0,5);
    if (ideas.length < 3) {
      // Force a minimal list if the model misbehaves
      ideas = [
        "Insulated hiking mug with clip carabiner",
        "Waterproof phone pouch for trail photos",
        "Compact headlamp with rechargeable battery"
      ];
    }

    // TODO: optional: log to KV (requires Vercel KV or Upstash Redis)
    // Skipped by default for zero-config deploy

    return NextResponse.json({ ideas });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Bad request" }, { status: 400 });
  }
}
