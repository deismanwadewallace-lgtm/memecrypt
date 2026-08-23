#!/usr/bin/env python3
"""Validate specimen structure and the museum's display-decision rule."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCHEMA_PATH = ROOT / "data" / "schema" / "specimen.schema.json"
SPECIMENS_DIR = ROOT / "content" / "specimens"


def has_display_material(record):
    return (
        record.get("image_mode") in ("original_plate", "licensed")
        and bool(record.get("commentary"))
        and bool(record.get("attribution"))
    )


def meets_rendering_prerequisites(record):
    return record.get("display_tier") != "D3" and has_display_material(record)


def renders_image(record):
    return (
        record.get("display_decision") == "cleared"
        and meets_rendering_prerequisites(record)
    )


def check_display_rule(record):
    failures = []
    name = record.get("register_id") or record.get("common_name") or "Unknown specimen"
    tier = record.get("display_tier")
    decision = record.get("display_decision")
    mode = record.get("image_mode")
    eligible = meets_rendering_prerequisites(record)

    if tier == "D3" and decision != "unavailable":
        failures.append(
            f"{name}: D3 specimen has display_decision={decision}. "
            "D3 is always unavailable."
        )

    if tier == "D3" and record.get("image_mode") not in (None, "placeholder"):
        failures.append(
            f"{name}: D3 specimen has image_mode={mode}. "
            "D3 records cannot carry display imagery."
        )

    if tier != "D3" and decision == "unavailable":
        failures.append(
            f"{name}: {tier} specimen has display_decision=unavailable. "
            "Use declined unless the rights tier is D3."
        )

    if decision == "cleared" and not eligible:
        failures.append(
            f"{name}: display_decision=cleared but image_mode={mode}. "
            "A cleared specimen must satisfy the rendering rule."
        )

    return failures


def validate_records(records):
    schema = json.loads(SCHEMA_PATH.read_text())
    required = set(schema["required"])
    allowed = set(schema["properties"])
    decisions = set(schema["properties"]["display_decision"]["enum"])
    failures = []

    for record in records:
        name = record.get("register_id") or record.get("common_name") or "Unknown specimen"
        missing = sorted(required - set(record))
        extra = sorted(set(record) - allowed)
        if missing:
            failures.append(f"{name}: missing required fields: {', '.join(missing)}")
        if extra:
            failures.append(f"{name}: unknown fields: {', '.join(extra)}")
        if record.get("display_decision") not in decisions:
            failures.append(
                f"{name}: invalid display_decision={record.get('display_decision')}"
            )
        failures.extend(check_display_rule(record))

    return failures


def main():
    paths = sorted(SPECIMENS_DIR.glob("*.json"))
    records = [json.loads(path.read_text()) for path in paths]
    failures = validate_records(records)
    if failures:
        print("\n".join(f"FAIL: {failure}" for failure in failures))
        raise SystemExit(1)
    print(f"Validated {len(records)} specimen records.")


if __name__ == "__main__":
    main()
