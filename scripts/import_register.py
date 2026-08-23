#!/usr/bin/env python3
"""Regenerate content/specimens/*.json from docs/source/rights-register.xlsx.

The register is the single source of truth for tier, rights holder, and
evidence grade (Integration Spec section 4). Re-run this after editing the
register sheet instead of hand-editing the generated specimen files.
"""
import json
import re
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
REGISTER_PATH = ROOT / "docs" / "source" / "rights-register.xlsx"
OUT_DIR = ROOT / "content" / "specimens"

# Full specimen schema per Integration Spec section 4. Register-backed fields
# are refreshed from the workbook. Editorial fields already written in an
# existing specimen record are preserved.
SCHEMA_FIELDS = [
    "accession", "register_id", "common_name", "binomial",
    "first_outbreak", "peak", "status", "undead_rating",
    "habitat", "diet", "predators", "transmission",
    "cause_of_death", "resurrection", "host_population", "mutation", "prognosis",
    "display_tier", "display_decision", "rights_holder", "evidence_grade", "image_mode",
    "attribution", "commentary", "sources",
    "identifiable_person", "minor_in_image", "merch_posture",
    "underlying_work", "enforcement_history", "curatorial_note",
]

DISPLAY_DECISIONS = {"declined", "cleared", "unavailable"}


def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def parse_year(value):
    if not isinstance(value, str):
        return None
    match = re.search(r"(19|20)\d{2}", value)
    return int(match.group(0)) if match else None


def default_display_decision(tier):
    return "unavailable" if tier == "D3" else "declined"


def parse_sources(value):
    if not value or value == "Not verified this pass":
        return []
    return [source.strip() for source in str(value).splitlines() if source.strip()]


def main():
    wb = openpyxl.load_workbook(REGISTER_PATH, data_only=True)
    ws = wb["Register"]
    rows = [r for r in ws.iter_rows(values_only=True) if r and r[0]]
    header, *data = rows
    # Drop the trailing "Assumption:" footer row, which isn't a register entry.
    data = [row for row in data if re.fullmatch(r"M\d+", str(row[0]))]

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    existing_by_id = {}
    for existing_path in OUT_DIR.glob("*.json"):
        existing = json.loads(existing_path.read_text())
        register_id = existing.get("register_id")
        if register_id:
            existing_by_id[register_id] = existing

    count = 0
    written_paths = set()
    for row in data:
        record = dict(zip(header, row))
        source = record["Source"]

        specimen = {field: None for field in SCHEMA_FIELDS}
        specimen.update(existing_by_id.get(record["ID"], {}))
        decision = specimen.get("display_decision")
        if decision not in DISPLAY_DECISIONS:
            decision = default_display_decision(record["Display tier"])
        if record["Display tier"] == "D3":
            decision = "unavailable"
        elif decision == "unavailable":
            decision = "declined"

        specimen.update({
            "register_id": record["ID"],
            "common_name": record["Specimen"],
            "first_outbreak": parse_year(record["First circulation"]),
            "underlying_work": record["Underlying work"],
            "rights_holder": record["Rights holder / claimant"],
            "enforcement_history": record["Enforcement history"],
            "evidence_grade": record["Evidence grade"],
            # Kept as the register's own text (e.g. "Yes (three models)")
            # rather than coerced to boolean, so the qualifying detail
            # a wall label would need isn't discarded.
            "identifiable_person": record["Identifiable person"],
            "minor_in_image": record["Minor in image"],
            "display_tier": record["Display tier"],
            "display_decision": decision,
            "merch_posture": record["Merch posture"],
            "curatorial_note": record["Curatorial note"],
            "sources": parse_sources(source),
        })

        filename = f"{record['ID'].lower()}-{slug(record['Specimen'])}.json"
        output_path = OUT_DIR / filename
        with open(output_path, "w") as f:
            json.dump(specimen, f, indent=2, ensure_ascii=False)
            f.write("\n")
        written_paths.add(output_path)
        count += 1

    for stale_path in OUT_DIR.glob("*.json"):
        if stale_path not in written_paths:
            stale_path.unlink()

    print(f"Wrote {count} specimen records to {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
