#!/usr/bin/env bash
set -euo pipefail

find static -type f -name "*.png" -print0 | xargs -0 oxipng -o 4 -s

echo "✅ PNG optimization complete"
