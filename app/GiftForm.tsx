'use client';

import { FormEvent, useState } from 'react';
import Idea from './Idea';

const DEFAULT_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || 'yourtag-21';

export default function GiftForm() {
  const [who, setWho] = useState('my outdoorsy sister who loves hiking');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [affiliateTag, setAffiliateTag] = useState(DEFAULT_TAG);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!who.trim()) {
      setError('Tell AI Santa who you are shopping for first.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ who }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      const data = await resp.json();
      setIdeas(Array.isArray(data.ideas) ? data.ideas : []);
    } catch (err: any) {
      setError(err.message || 'Unable to fetch ideas right now.');
      setIdeas([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="card p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="who" className="block text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
            Who are you shopping for?
          </label>
          <textarea
            id="who"
            name="who"
            value={who}
            onChange={(event) => setWho(event.target.value)}
            rows={3}
            className="input min-h-[120px] resize-y"
            placeholder="e.g. my best friend who is learning to cook"
          />
          <p className="small mt-2">
            Be descriptive: mention hobbies, inside jokes, favourite snacks—AI Santa thrives on the details.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
          <div>
            <label htmlFor="affiliate" className="block text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
              Optional Amazon affiliate tag
            </label>
            <input
              id="affiliate"
              name="affiliate"
              value={affiliateTag}
              onChange={(event) => setAffiliateTag(event.target.value)}
              className="input"
              placeholder="yourtag-21"
            />
            <p className="small mt-2">
              We&apos;ll append this tag to Amazon search links so you can earn commission on any purchases.
            </p>
          </div>
          <div className="flex items-end">
            <button type="submit" className="btn btn-primary w-full md:w-auto px-8 py-3 text-lg" disabled={loading}>
              {loading ? 'Summoning ideas…' : 'Generate gift ideas'}
            </button>
          </div>
        </div>
      </form>

      {error && <p className="mt-6 text-red-300">{error}</p>}

      {ideas.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">AI Santa suggests:</h3>
          {ideas.map((idea) => (
            <Idea key={idea} idea={idea} affiliateTag={affiliateTag.trim() || 'yourtag-21'} />
          ))}
        </div>
      )}
    </section>
  );
}
