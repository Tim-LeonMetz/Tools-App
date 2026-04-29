#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse


ROOT = Path(__file__).resolve().parent


class SpaHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".svg": "image/svg+xml",
        ".json": "application/json; charset=utf-8",
    }

    def translate_path(self, path):
        requested = Path(super().translate_path(path)).resolve()
        try:
            requested.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "index.html")
        if requested.exists() and requested.is_file():
            return str(requested)
        return str(ROOT / "index.html")

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description="Serve the School Tools app.")
    parser.add_argument("--host", default="0.0.0.0")
    parser.add_argument("--port", default=8080, type=int)
    args = parser.parse_args()

    server = ThreadingHTTPServer((args.host, args.port), SpaHandler)
    print(f"School Tools läuft auf http://{args.host}:{args.port}")
    print("Im Tailscale-Netz: http://<tailscale-ip-oder-magicdns-name>:%s" % args.port)
    server.serve_forever()


if __name__ == "__main__":
    main()
