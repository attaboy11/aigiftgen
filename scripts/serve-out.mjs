import { createServer } from "http";
import { createReadStream } from "fs";
import { promises as fs } from "fs";
import { extname, join, normalize } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const outDir = normalize(join(__dirname, "..", "out"));

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json"
};

async function fileExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
}

const hasOutDir = await fileExists(outDir);

if (!hasOutDir) {
  console.error("⚠️  The \"out\" directory is missing. Run \"npm run build\" before starting the preview server.");
  process.exit(1);
}

const port = Number.parseInt(process.env.PORT ?? "4173", 10);

const server = createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad request");
    return;
  }

  const requestUrl = new URL(req.url, `http://${req.headers.host ?? `localhost:${port}`}`);
  let pathname = requestUrl.pathname;

  if (pathname.endsWith("/")) {
    pathname = `${pathname}index.html`;
  }

  const decodedPath = decodeURIComponent(pathname);
  const safePath = normalize(join(outDir, decodedPath));

  if (!safePath.startsWith(outDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  const fileFound = await fileExists(safePath);

  if (!fileFound) {
    const notFoundPath = join(outDir, "404.html");
    if (await fileExists(notFoundPath)) {
      res.writeHead(404, { "Content-Type": MIME_TYPES[".html"] });
      createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
    }
    return;
  }

  const ext = extname(safePath).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  createReadStream(safePath).pipe(res);
});

server.listen(port, () => {
  console.log(`➡️  Preview server running at http://localhost:${port}`);
  console.log(`    Serving static files from ${outDir}`);
});
