import ShareButtons from "./ShareButtons";

type IdeaProps = {
  idea: string;
  affiliateTag: string;
};

export default function Idea({ idea, affiliateTag }: IdeaProps) {
  const sanitized = idea.replace(/[^a-zA-Z0-9\s]/g, " ").trim();
  const query = encodeURIComponent(sanitized);
  const tag = affiliateTag || "yourtag-21";
  const url = `https://www.amazon.co.uk/s?k=${query}&tag=${tag}`;

  return (
    <div className="card p-4 mt-3">
      <div className="text-lg">{idea}</div>

      <div className="mt-3 flex items-center gap-3">
        <a
          className="btn btn-primary"
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          View options on Amazon
        </a>
        <span className="small">Affiliate link</span>
      </div>

      <ShareButtons text={`AI Santa suggests: ${idea}`} url={url} />
    </div>
  );
}
