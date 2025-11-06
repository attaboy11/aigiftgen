'use client';

import { useState } from "react";

import Idea from "@/components/Idea";

export default function Home() {
  const [who, setWho] = useState("my brother who loves hiking and bad puns");
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const affiliateTag = process.env.NEXT_PUBLIC_AFFILIATE_TAG || "yourtag-21";

  async function generate() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gifts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ who }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch gift ideas");
      }

      const data = await res.json();
      setIdeas(data.ideas || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <header className="mt-12 mb-8 text-center">
        <h1 className="text-4xl font-bold">🎅 AI Gift Generator</h1>
        <p className="small mt-2">
          Tell AI Santa who you&apos;re shopping for. Get 3–5 witty, spot‑on gift
          ideas.
        </p>
      </header>

      <div className="card p-5">
        <label className="small">Who is the gift for?</label>
        <input
          className="input mt-2"
          value={who}
          onChange={(event) => setWho(event.target.value)}
          placeholder="e.g., my dad who grills in winter and collects jazz vinyl"
        />
        <div className="flex gap-2 mt-4">
          <button
            className="btn btn-primary"
            onClick={generate}
            disabled={loading}
          >
            {loading ? "Summoning AI Santa…" : "Generate ideas"}
          </button>
          <a href="/clone" className="btn btn-ghost">
            Clone this site → earn too
          </a>
        </div>
      </div>

      {error && <div className="card p-4 mt-4 text-red-300">Error: {error}</div>}

      <section className="mt-6">
        {ideas.map((idea, index) => (
          <Idea key={index} idea={idea} affiliateTag={affiliateTag} />
        ))}
      </section>

      <footer className="mt-10 text-center small">
        Built by AI ·
        <a className="link" href="https://aigiftgen.co.uk" target="_blank">
          aigiftgen.co.uk
        </a>
        · Not affiliated with Amazon.
      </footer>
    </main>
  );
}
