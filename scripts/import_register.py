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

# Full specimen schema per Integration Spec section 4. Fields not sourced
# from the register (binomial, status, field-guide/autopsy blocks, and the
# image/commentary/attribution fields the rendering rule checks) start as
# null: no species page, plate, or wall copy has been written yet.
SCHEMA_FIELDS = [
    "accession", "register_id", "common_name", "binomial",
    "first_outbreak", "peak", "status", "undead_rating",
    "habitat", "diet", "predators", "transmission",
    "cause_of_death", "resurrection", "host_population", "mutation", "prognosis",
    "display_tier", "rights_holder", "evidence_grade", "image_mode",
    "attribution", "commentary", "sources",
    "identifiable_person", "minor_in_image", "merch_posture",
    "underlying_work", "enforcement_history", "curatorial_note",
]


def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def parse_year(value):
    if not isinstance(value, str):
        return None
    match = re.search(r"(19|20)\d{2}", value)
    return int(match.group(0)) if match else None


def main():
    wb = openpyxl.load_workbook(REGISTER_PATH, data_only=True)
    ws = wb["Register"]
    rows = [r for r in ws.iter_rows(values_only=True) if r and r[0]]
    header, *data = rows
    # Drop the trailing "Assumption:" footer row, which isn't a register entry.
    data = [row for row in data if re.fullmatch(r"M\d+", str(row[0]))]

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for existing in OUT_DIR.glob("*.json"):
        existing.unlink()

    count = 0
    for row in data:
        record = dict(zip(header, row))
        source = record["Source"]

        specimen = {field: None for field in SCHEMA_FIELDS}
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
            "merch_posture": record["Merch posture"],
            "curatorial_note": record["Curatorial note"],
            "sources": [] if not source or source == "Not verified this pass" else [source],
        })

        filename = f"{record['ID'].lower()}-{slug(record['Specimen'])}.json"
        with open(OUT_DIR / filename, "w") as f:
            json.dump(specimen, f, indent=2, ensure_ascii=False)
            f.write("\n")
        count += 1

    print(f"Wrote {count} specimen records to {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
