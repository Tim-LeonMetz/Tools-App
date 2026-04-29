#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse


ROOT = Path(__file__).resolve().parent


def is_mobile_user_agent(value):
    user_agent = (value or "").lower()
    mobile_markers = ("android", "iphone", "ipad", "ipod", "mobile", "windows phone")
    return any(marker in user_agent for marker in mobile_markers)


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
        clean_path = path.split("?", 1)[0].split("#", 1)[0]
        if clean_path in ("", "/", "/index.html"):
            entry = "mobile.html" if is_mobile_user_agent(self.headers.get("User-Agent")) else "desktop.html"
            return str(ROOT / entry)
        if clean_path in ("/desktop", "/desktop/"):
            return str(ROOT / "desktop.html")
        if clean_path in ("/mobile", "/mobile/"):
            return str(ROOT / "mobile.html")

        requested = Path(super().translate_path(path)).resolve()
        try:
            requested.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "desktop.html")
        if requested.exists() and requested.is_file():
            return str(requested)
        entry = "mobile.html" if is_mobile_user_agent(self.headers.get("User-Agent")) else "desktop.html"
        return str(ROOT / entry)

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
    print(f"School Tools laeuft auf http://{args.host}:{args.port}")
    print("Im Tailscale-Netz: http://<tailscale-ip-oder-magicdns-name>:%s" % args.port)
    print("Direktlinks: /desktop und /mobile")
    server.serve_forever()


if __name__ == "__main__":
    main()
