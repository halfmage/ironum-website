#!/usr/bin/env bash
# Renders a guide to PDF. Requires pandoc and Google Chrome. Usage: build-guide-pdf.sh pm|po
# Output lands in docs/guides/pdf/out/ (gitignored). To publish, copy it to public/guides/
# under a new content-hash filename and update src/data/guides.ts (file + startNote pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
case "${1:-}" in
  pm) SRC="$ROOT/docs/guides/guide-ai-for-product-managers.md"; NAME="AI-for-Product-Managers" ;;
  po) SRC="$ROOT/docs/guides/guide-ai-for-product-owners.md"; NAME="AI-for-Product-Owners" ;;
  *) echo "usage: $0 pm|po" >&2; exit 2 ;;
esac
PDFDIR="$ROOT/docs/guides/pdf"
OUT="$PDFDIR/out"
mkdir -p "$OUT"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME (set CHROME=...)" >&2; exit 1; }
command -v pandoc >/dev/null || { echo "pandoc not installed" >&2; exit 1; }

# Intermediates are removed even if a step fails.
trap 'rm -f "$PDFDIR/body.md" "$PDFDIR/body.html" "$PDFDIR/guide.html"' EXIT

# Strip internal-only HTML comments, then make image paths absolute for Chrome.
python3 - "$SRC" "$PDFDIR/body.md" "$ROOT" <<'PY'
import re,sys
src,dst,root=sys.argv[1],sys.argv[2],sys.argv[3]
t=open(src).read()
t=re.sub(r'<!--.*?-->','',t,flags=re.S)
t=t.replace('(/images/blog/', '(file://'+root+'/docs/guides/assets/')
t=t.replace('[signup]','')
open(dst,'w').write(t.strip()+'\n')
PY

pandoc -f gfm -t html5 "$PDFDIR/body.md" -o "$PDFDIR/body.html"
python3 "$PDFDIR/wrap.py" "$PDFDIR/body.html" "$PDFDIR/guide.html"
rm -f "$OUT/$NAME.pdf"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT/$NAME.pdf" \
  "file://$PDFDIR/guide.html" 2>"$OUT/chrome.log" || true
[ -s "$OUT/$NAME.pdf" ] || { echo "Chrome produced no PDF; see $OUT/chrome.log" >&2; exit 1; }
echo "built: $OUT/$NAME.pdf"
