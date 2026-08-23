#!/usr/bin/env python3
"""Generate content/products/slogan-line/*.json from content/pages/quotations.json.

Integration Spec section 5: "The slogan corpus is the merch." Each family
maps to one substrate (diagnostics -> mugs/posters, koans -> shirts,
institutional voice -> signage/stickers, allusions -> prints). No prices
or SKUs are invented here — currency/fulfilment is an open decision
(spec section 9, item 1), so those fields stay null until a real
manufacturing pass assigns them, the same discipline already applied to
specimen accession numbers.

Generated records may later receive commissioned original art. Preserve the
hand-authored ``image`` and ``image_alt`` fields when rebuilding so a routine
content generation pass never detaches a finished asset from its product.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QUOTATIONS_PATH = ROOT / "content" / "pages" / "quotations.json"
OUT_DIR = ROOT / "content" / "products" / "slogan-line"

SUBSTRATE_BY_FAMILY = {
    "diagnostics": "Mug or poster",
    "koans": "Shirt",
    "institutional-voice": "Signage or sticker",
    "allusions": "Print",
}


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:60]


def main():
    quotations = json.loads(QUOTATIONS_PATH.read_text())

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    preserved_art = {}
    for existing in OUT_DIR.glob("*.json"):
        record = json.loads(existing.read_text())
        art = {
            key: record[key]
            for key in ("image", "image_alt")
            if key in record
        }
        if art:
            preserved_art[existing.name] = art
        existing.unlink()

    count = 0
    for family in quotations["families"]:
        substrate = SUBSTRATE_BY_FAMILY[family["id"]]
        for line in family["lines"]:
            if isinstance(line, dict):
                text, attribution = line["text"], line["attribution"]
            else:
                text, attribution = line, None

            product = {
                "accession": None,
                "sku": None,
                "family": family["id"],
                "slogan": text,
                "attribution": attribution,
                "substrate": substrate,
                "price": None,
                "status": "concept",
                "image_source": "original_design",
            }

            filename = f"{family['id']}-{slug(text)}.json"
            product.update(preserved_art.get(filename, {}))
            product["note"] = "Price, SKU, and accession are unassigned pending the currency/fulfilment decision in Integration Spec section 9."
            with open(OUT_DIR / filename, "w") as f:
                json.dump(product, f, indent=2, ensure_ascii=False)
                f.write("\n")
            count += 1

    print(f"Wrote {count} slogan-line products to {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
