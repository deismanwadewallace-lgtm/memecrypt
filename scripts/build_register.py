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

from validate import check_display_rule, renders_image

ROOT = Path(__file__).resolve().parent.parent
SPECIMENS_DIR = ROOT / "content" / "specimens"
OUT_PATH = ROOT / "content" / "generated" / "summary.json"

def main():
    paths = sorted(SPECIMENS_DIR.glob("*.json"))
    records = [json.loads(p.read_text()) for p in paths]

    tier_counts = Counter(r["display_tier"] for r in records)
    decision_counts = Counter(r["display_decision"] for r in records)
    evidence_counts = Counter(r["evidence_grade"] for r in records)
    rendered = [r for r in records if renders_image(r)]
    placeholder = [r for r in records if not renders_image(r)]

    def is_yes(value):
        return isinstance(value, str) and value.startswith("Yes")

    identifiable_count = sum(1 for r in records if is_yes(r.get("identifiable_person")))
    minor_count = sum(1 for r in records if is_yes(r.get("minor_in_image")))
    never_pursue_count = sum(1 for r in records if r.get("merch_posture") == "Never pursue")

    failures = [failure for record in records for failure in check_display_rule(record)]

    summary = {
        "total_specimens": len(records),
        "display_tier_counts": dict(tier_counts),
        "display_decision_counts": dict(decision_counts),
        "evidence_grade_counts": dict(evidence_counts),
        "rendered_count": len(rendered),
        "placeholder_count": len(placeholder),
        "rendered_ids": [r["register_id"] for r in rendered],
        "placeholder_ids": [r["register_id"] for r in placeholder],
        "identifiable_person_count": identifiable_count,
        "minor_in_image_count": minor_count,
        "merch_posture_never_pursue_count": never_pursue_count,
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(summary, indent=2) + "\n")

    print(f"{len(records)} specimens: {dict(tier_counts)}")
    print(f"{len(rendered)} render an image, {len(placeholder)} fall back to the MC.2026.009 placeholder card.")

    if failures:
        print("\n".join(f"INVARIANT VIOLATION: {failure}" for failure in failures))
        raise SystemExit(1)


if __name__ == "__main__":
    main()
