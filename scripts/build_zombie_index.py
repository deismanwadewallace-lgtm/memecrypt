#!/usr/bin/env python3
"""Compile the Zombie Index: every specimen sorted by undead_rating.

Integration Spec route /museum/index calls for "a sortable rating table."
No page template exists yet (Phase 2 is data/content only in this repo),
so this script produces the sorted data as JSON. A future front end reads
content/generated/zombie-index.json rather than re-deriving it.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIMENS_DIR = ROOT / "content" / "specimens"
OUT_PATH = ROOT / "content" / "generated" / "zombie-index.json"


def main():
    records = [json.loads(p.read_text()) for p in sorted(SPECIMENS_DIR.glob("*.json"))]

    rated = [r for r in records if r.get("undead_rating") is not None]
    unrated = [r for r in records if r.get("undead_rating") is None]

    rated.sort(key=lambda r: (-r["undead_rating"], r["common_name"]))
    unrated.sort(key=lambda r: r["common_name"])

    def row(r):
        return {
            "register_id": r["register_id"],
            "common_name": r["common_name"],
            "binomial": r["binomial"],
            "status": r["status"],
            "undead_rating": r["undead_rating"],
            "display_tier": r["display_tier"],
        }

    index = {
        "rated": [row(r) for r in rated],
        "unrated": [row(r) for r in unrated],
        "note": "unrated specimens have no field-guide content yet (undead_rating is null) — they're queued for a future volume, not missing data.",
    }

    OUT_PATH.write_text(json.dumps(index, indent=2) + "\n")
    print(f"{len(rated)} rated, {len(unrated)} unrated. Wrote {OUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
