export default function ClonePage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mt-12">Clone this site & earn</h1>
      <p className="mt-4">
        Want your own AI Gift Generator? Fork the template repo, set your affiliate tag, and deploy to Vercel in minutes.
      </p>
      <ol className="list-decimal ml-6 mt-4 space-y-2">
        <li>Download the template (zip) or fork it on GitHub.</li>
        <li>Create a Vercel project, add your <code>OPENAI_API_KEY</code> and <code>NEXT_PUBLIC_AFFILIATE_TAG</code>.</li>
        <li>Deploy. Share your link. Watch affiliate clicks accrue.</li>
      </ol>
      <p className="mt-4">Pro tip: Keep the “Clone this site” link in your footer to propagate the network.</p>
    </main>
  );
}
