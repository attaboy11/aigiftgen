'use client';

type ShareButtonsProps = {
  text: string;
  url: string;
};

export default function ShareButtons({ text, url }: ShareButtonsProps) {
  const shareText = encodeURIComponent(text);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="flex gap-2 mt-2">
      <a
        className="btn btn-ghost"
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on X
      </a>
      <a
        className="btn btn-ghost"
        href={`https://www.reddit.com/submit?title=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reddit
      </a>
      <a
        className="btn btn-ghost"
        href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
