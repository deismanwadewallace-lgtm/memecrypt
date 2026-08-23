#!/usr/bin/env python3
"""Generate content/products/slogan-line/*.json from content/pages/quotations.json.

Integration Spec section 5: "The slogan corpus is the merch." Each family
maps to one substrate (diagnostics -> mugs/posters, koans -> shirts,
institutional voice -> signage/stickers, allusions -> prints). No prices
or SKUs are invented here — currency/fulfilment is an open decision
(spec section 9, item 1), so those fields stay null until a real
manufacturing pass assigns them, the same discipline already applied to
specimen accession numbers.
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
    for existing in OUT_DIR.glob("*.json"):
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
                "note": "Price, SKU, and accession are unassigned pending the currency/fulfilment decision in Integration Spec section 9.",
            }

            filename = f"{family['id']}-{slug(text)}.json"
            with open(OUT_DIR / filename, "w") as f:
                json.dump(product, f, indent=2, ensure_ascii=False)
                f.write("\n")
            count += 1

    print(f"Wrote {count} slogan-line products to {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
