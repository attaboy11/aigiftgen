import ShareButtons from "./ShareButtons";

export default function Idea({ idea, affiliateTag }: { idea: string; affiliateTag: string; }) {
  const q = encodeURIComponent(idea.replace(/[^a-zA-Z0-9\s]/g, ' ').trim());
  const url = `https://www.amazon.co.uk/s?k=${q}&tag=${affiliateTag||'yourtag-21'}`;
  return (
    <div className="card p-4 mt-3">
      <div className="text-lg">{idea}</div>
      <div className="mt-3 flex items-center gap-3">
        <a className="btn btn-primary" href={url} target="_blank" rel="nofollow noopener noreferrer">View options on Amazon</a>
        <span className="small">Affiliate link</span>
      </div>
      <ShareButtons text={`AI Santa suggests: ${idea}`} url={url} />
    </div>
  );
}
