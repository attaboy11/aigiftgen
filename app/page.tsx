import Link from 'next/link';
import GiftForm from './GiftForm';

const samplePrompts = [
  'My partner who is obsessed with cosy sci-fi reading nooks',
  'A Secret Santa gift for a developer who loves retro gaming',
  'My mum who just retired and wants to travel more',
];

const features = [
  {
    title: 'Story-driven prompts',
    description: 'Describe the recipient in vivid detail. AI Santa uses the nuance to tailor thoughtful ideas.'
  },
  {
    title: 'Affiliate ready',
    description: 'Add your Amazon UK Associate tag and instantly share monetisable suggestion lists.'
  },
  {
    title: 'Shareable in seconds',
    description: 'One-click links for X, Reddit and WhatsApp help you crowdsource opinions from friends.'
  },
];

const faqs = [
  {
    q: 'Is this free to use?',
    a: 'Yes. Generate as many gift brainstorms as you like. Heavy usage may be throttled to keep AI costs sane.'
  },
  {
    q: 'Do you store my prompts or personal data?',
    a: 'No. Requests are processed live via the OpenAI API and not persisted, beyond anonymous analytics (if enabled).'
  },
  {
    q: 'Can I use my own affiliate tag?',
    a: 'Absolutely. Paste your Amazon UK tag before generating ideas. We append it to every shopping link.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-20">
      <div className="mx-auto max-w-5xl">
        <header className="py-16 text-center space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide text-[var(--muted)]">
            🎄 Meet AI Santa
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Find the perfect gift in minutes, not hours
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">
            Describe who you&apos;re shopping for and let our playful-yet-practical AI brainstorm gifts across price points.
            Each idea links straight to Amazon UK searches—add your affiliate tag to monetise the inspiration.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <GiftForm />

          <aside className="space-y-10">
            <section className="card p-6">
              <h2 className="text-xl font-semibold">Try these starter prompts</h2>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                {samplePrompts.map((prompt) => (
                  <li key={prompt} className="rounded-xl bg-white/5 px-4 py-3 text-sm">
                    {prompt}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card p-6 space-y-4">
              <h2 className="text-xl font-semibold">How it works</h2>
              <ol className="space-y-3 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-white">1.</span> Paint a vivid picture of the recipient—their hobbies, quirks, upcoming milestones.
                </li>
                <li>
                  <span className="font-semibold text-white">2.</span> Click generate. AI Santa blends humour and utility to produce 3-5 shoppable ideas.
                </li>
                <li>
                  <span className="font-semibold text-white">3.</span> Share or shop instantly using the Amazon, X, Reddit or WhatsApp buttons.
                </li>
              </ol>
            </section>

            <section className="card p-6 space-y-4">
              <h2 className="text-xl font-semibold">Why gift hunters love it</h2>
              <ul className="space-y-4 text-[var(--muted)]">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center md:grid-cols-3">
          {['Gifting pros', 'Busy parents', 'Office Secret Santas'].map((segment) => (
            <div key={segment} className="space-y-2">
              <div className="text-3xl">✨</div>
              <h3 className="text-xl font-semibold">{segment}</h3>
              <p className="text-sm text-[var(--muted)]">
                Saves hours of browsing with ideas that feel tailored and personal.
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="card p-6 text-left">
              <h3 className="text-lg font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{faq.a}</p>
            </article>
          ))}
        </section>

        <footer className="mt-20 flex flex-col items-center gap-4 text-sm text-[var(--muted)]">
          <p>
            Built with ❤️ by AI Santa. Need the legal bits?{' '}
            <Link href="/legal" className="link">Legal &amp; privacy</Link>.
          </p>
          <p>Spread the cheer—share your favourite ideas and credit your tag when you do!</p>
        </footer>
      </div>
    </main>
  );
}
