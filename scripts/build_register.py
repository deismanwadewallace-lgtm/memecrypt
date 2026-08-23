#!/usr/bin/env python3
"""Apply the rendering rule to every specimen and report tier counts.

Integration Spec section 4 says the fair-dealing rule must be "enforced in
code rather than left to editorial discipline." This script is that
enforcement: it decides, per specimen, whether an image may render, and it
computes the tier/evidence counts the provenance page must display live
rather than hardcode (Phase 4 acceptance criterion).

Run after import_register.py, or after hand-editing a specimen file.
"""
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIMENS_DIR = ROOT / "content" / "specimens"
OUT_PATH = ROOT / "content" / "generated" / "summary.json"


def renders_image(specimen):
    """The rendering rule, verbatim from Integration Spec section 4."""
    return (
        specimen.get("display_tier") != "D3"
        and specimen.get("image_mode") in ("original_plate", "licensed")
        and bool(specimen.get("commentary"))
        and bool(specimen.get("attribution"))
    )


def main():
    paths = sorted(SPECIMENS_DIR.glob("*.json"))
    records = [json.loads(p.read_text()) for p in paths]

    tier_counts = Counter(r["display_tier"] for r in records)
    evidence_counts = Counter(r["evidence_grade"] for r in records)
    rendered = [r for r in records if renders_image(r)]
    placeholder = [r for r in records if not renders_image(r)]

    # A D3 specimen must never carry a real image_mode. If one does, a
    # future contributor uploaded a file the register forbids showing.
    violations = [
        r["register_id"] for r in records
        if r["display_tier"] == "D3" and r.get("image_mode") not in (None, "placeholder")
    ]

    summary = {
        "total_specimens": len(records),
        "display_tier_counts": dict(tier_counts),
        "evidence_grade_counts": dict(evidence_counts),
        "rendered_count": len(rendered),
        "placeholder_count": len(placeholder),
        "rendered_ids": [r["register_id"] for r in rendered],
        "placeholder_ids": [r["register_id"] for r in placeholder],
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(summary, indent=2) + "\n")

    print(f"{len(records)} specimens: {dict(tier_counts)}")
    print(f"{len(rendered)} render an image, {len(placeholder)} fall back to the MC.2026.009 placeholder card.")

    if violations:
        print(f"INVARIANT VIOLATION: D3 specimens with a non-placeholder image_mode: {violations}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
