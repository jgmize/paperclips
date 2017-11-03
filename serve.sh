#!/bin/sh

cd src
echo serving on http://localhost:8000/index2.html
python3 -m http.server
