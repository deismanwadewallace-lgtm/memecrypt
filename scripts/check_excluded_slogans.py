#!/usr/bin/env python3
"""Fail if a barred slogan appears anywhere in printed/publishable copy.

Integration Spec section 5 names two lines that must never be printed:
"I shop therefore I am" (Barbara Kruger's actual artwork, not a style
reference) and "This is fine" (KC Green sells merch from those exact
panels; printing it competes with his own market). Phase 4 acceptance
criterion: "No excluded slogan appears anywhere in the repo."

Scope is deliberately narrow: content/pages/, content/products/, and
docs/production/ are where copy could actually get printed. It excludes
content/specimens/ and content/routes.json on purpose — the museum is
allowed to discuss "This Is Fine" (M14) by its own name in curatorial
text; only printing the bare phrase as a slogan or on merch is barred.
content/pages/quotations.json's own `excluded` list is exempted the same
way: naming a barred line for the record isn't using it as content.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QUOTATIONS_PATH = ROOT / "content" / "pages" / "quotations.json"

BARRED = [
    "I shop therefore I am",
    "This is fine",
]

SCAN_ROOTS = [
    ROOT / "content" / "pages",
    ROOT / "content" / "products",
    ROOT / "docs" / "production",
]


def text_for(path):
    text = path.read_text()
    if path == QUOTATIONS_PATH:
        data = json.loads(text)
        data.pop("excluded", None)
        text = json.dumps(data)
    return text


def main():
    violations = []
    for base in SCAN_ROOTS:
        if not base.exists():
            continue
        for path in list(base.rglob("*.json")) + list(base.rglob("*.md")):
            text = text_for(path)
            for phrase in BARRED:
                if phrase.lower() in text.lower():
                    violations.append((str(path.relative_to(ROOT)), phrase))

    if violations:
        for path, phrase in violations:
            print(f"BARRED SLOGAN FOUND: {phrase!r} in {path}")
        raise SystemExit(1)

    print("No barred slogans found in printable content.")


if __name__ == "__main__":
    main()
