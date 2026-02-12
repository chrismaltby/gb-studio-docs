#!/usr/bin/env bash
set -euo pipefail

PLUGINS=(
    "static/assets/plugins/assetExamplePlugin"
    "static/assets/plugins/engineExamplePlugin"
    "static/assets/plugins/eventExamplePlugin"
    "static/assets/plugins/sceneTypeExamplePlugin"
)

for src in "${PLUGINS[@]}"; do
  dir="$(dirname "$src")"
  filename="$(basename "$src")"

  out="$dir/${filename}.zip"

  echo "Generating $out"
  rm -f "$out"

  (
    cd "$dir"
    zip -r "${filename}.zip" "$filename" -x "*.DS_Store"
  )
done

echo "✅ Zips generated"
