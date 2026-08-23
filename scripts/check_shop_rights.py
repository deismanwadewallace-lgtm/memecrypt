#!/usr/bin/env python3
"""Fail if any product could display a third-party image.

Integration Spec Phase 5 acceptance: "No product page displays a
third-party image under any condition" and "every SKU traces to either
an original slogan, an original plate, or the placeholder card." This
enforces that structurally: every product file must declare
image_source, and it must be one of the allowed values — never a raw
reference to someone else's copyrighted work.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS_DIR = ROOT / "content" / "products"

ALLOWED_IMAGE_SOURCES = {"original_design", "original_plate", "placeholder_card", "pending"}


def main():
    violations = []
    paths = sorted(PRODUCTS_DIR.rglob("*.json"))
    for path in paths:
        product = json.loads(path.read_text())
        source = product.get("image_source")
        if source not in ALLOWED_IMAGE_SOURCES:
            violations.append((str(path.relative_to(ROOT)), source))

    if violations:
        for path, source in violations:
            print(f"SHOP RIGHTS VIOLATION: {path} has image_source={source!r} (must be one of {sorted(ALLOWED_IMAGE_SOURCES)})")
        raise SystemExit(1)

    print(f"{len(paths)} products checked. All declare an original or placeholder image_source.")


if __name__ == "__main__":
    main()
