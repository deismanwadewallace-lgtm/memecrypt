#!/usr/bin/env python3
"""Render /research/provenance from content/generated/summary.json.

Integration Spec section 6: "/research/provenance is not a legal
disclaimer page. It is an exhibit." Phase 4 acceptance criterion: "tier
counts on the provenance page are computed from the content files, not
hardcoded." This script is that computation — the prose template below
has blanks, and the numbers are filled in from summary.json, not typed
into the template by hand.

Run after build_register.py (which produces summary.json).
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARY_PATH = ROOT / "content" / "generated" / "summary.json"
OUT_PATH = ROOT / "content" / "generated" / "provenance-page.json"

NUMBER_WORDS = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one",
    "twenty-two", "twenty-three", "twenty-four",
]


def words(n):
    return NUMBER_WORDS[n] if 0 <= n < len(NUMBER_WORDS) else str(n)


def main():
    summary = json.loads(SUMMARY_PATH.read_text())
    tiers = summary["display_tier_counts"]
    total = summary["total_specimens"]
    d1, d2, d3 = tiers.get("D1", 0), tiers.get("D2", 0), tiers.get("D3", 0)
    identifiable = summary["identifiable_person_count"]
    minors = summary["minor_in_image_count"]

    thesis = (
        f"Of {words(total)} specimens in the permanent collection, {words(d1)} may be shown freely, "
        f"{words(d2)} require a rights note, and {words(d3)} cannot be shown at all. "
        f"{words(identifiable).capitalize()} depict an identifiable person. "
        f"{words(minors).capitalize()} depict a person who was a child at the time."
    )

    closing = "The museum's central finding is administrative rather than theoretical. The ideas belong to everyone. The images belong to somebody."

    founding_cases = [
        {
            "name": "The Grumpy Cat verdict",
            "register_id": "M02",
            "note": "A 2018 jury verdict of $710,001 against a defendant who had a licence and exceeded it. The clearest merch precedent in the collection.",
        },
        {
            "name": "The Success Kid appeal",
            "register_id": "M03",
            "note": "Griner v. King for Congress, affirmed by the Eighth Circuit in 2024 and denied certiorari by the Supreme Court in 2025 — fair use rejected under Warhol.",
        },
        {
            "name": "The Pepe enforcement campaign",
            "register_id": "M04",
            "note": "Furie v. Infowars settled in 2019 for $15,000 plus destruction of stock; the court declined to hold that meme-ification diminishes the author's copyright.",
        },
    ]

    page = {
        "title": "Provenance",
        "route": "/research/provenance",
        "thesis": thesis,
        "closing": closing,
        "founding_cases": founding_cases,
        "computed_from": "content/generated/summary.json — regenerate this page by re-running scripts/build_register.py then scripts/build_provenance.py",
    }

    OUT_PATH.write_text(json.dumps(page, indent=2) + "\n")
    print(thesis)
    print(f"Wrote {OUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
