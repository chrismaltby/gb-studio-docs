#!/usr/bin/env bash
set -euo pipefail

IMAGES=(
    "static/img/home/screenshot_mac_1_v4.png"
    "static/img/home/screenshot_mac_2_v4.png"
    "static/img/home/screenshot_mac_3_v4.png"
    "static/img/home/screenshot_mac_4_v4.png"
    "static/img/home/screenshot_win_1_v4.png"
    "static/img/home/screenshot_win_2_v4.png"
    "static/img/home/screenshot_win_3_v4.png"
    "static/img/home/screenshot_win_4_v4.png"
)

THUMB_WIDTH=480    
THUMB_HEIGHT=480 
THUMB_SUFFIX="_thumb"

for src in "${IMAGES[@]}"; do
  if [[ ! -f "$src" ]]; then
    echo "⚠️  Skipping missing file: $src"
    continue
  fi

  dir="$(dirname "$src")"
  filename="$(basename "$src")"
  name="${filename%.png}"

  out="$dir/${name}${THUMB_SUFFIX}.png"

  echo "Generating $out"

  magick "$src" \
    -resize "${THUMB_WIDTH}x${THUMB_HEIGHT}>" \
    PNG:- \
  | pngquant --quality=65-90 --strip  --force --output "$out" -
  oxipng -o 4 -s "$out"
done

echo "✅ Thumbnails generated"
