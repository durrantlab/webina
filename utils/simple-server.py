#!/usr/bin/env python3

# Adapted from
# https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server
# https://dzone.com/articles/extending-pythons-simple-http-server


import sys

if sys.version_info < (3, 0, 0):
    print("Requires Python3!")
    sys.exit(0)

from http.server import HTTPServer, SimpleHTTPRequestHandler, test as test_orig
import socketserver


def test(*args):
    prt = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    test_orig(*args, port=prt, bind="localhost")


class CustomRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        SimpleHTTPRequestHandler.end_headers(self)


# Python 3.7.5 adds in the WebAssembly Media Type. If this is an older version,
# add in the Media Type.
if sys.version_info < (3, 7, 5):
    CustomRequestHandler.extensions_map[".wasm"] = "application/wasm"

if __name__ == "__main__":
    test(CustomRequestHandler, HTTPServer)
