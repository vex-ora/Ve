from html.parser import HTMLParser
from pathlib import Path

html = Path("index.html").read_text(encoding="utf-8")

class Validator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.project_cards = 0
        self.logo_count = 0
        self.logo_alts = []
        self.external_hrefs = []
        self.ids = set()
        self.duplicate_ids = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()
        if tag == "div" and "proj" in classes:
            self.project_cards += 1
        if "project-logo" in classes:
            self.logo_count += 1
            self.logo_alts.append(attrs.get("alt", ""))
        if "id" in attrs:
            if attrs["id"] in self.ids:
                self.duplicate_ids.add(attrs["id"])
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href", "").startswith("https://"):
            self.external_hrefs.append(attrs["href"])

parser = Validator()
parser.feed(html)
errors = []
if parser.project_cards != 10:
    errors.append(f"expected 10 project cards, found {parser.project_cards}")
if parser.logo_count != 10:
    errors.append(f"expected 10 project logos, found {parser.logo_count}")
if any(not alt.strip() for alt in parser.logo_alts):
    errors.append("every project logo must have alt text")
if '<span class="url">' in html or '.bw .url' in Path("assets/styles.css").read_text(encoding="utf-8"):
    errors.append("project destination URLs must not be rendered in the card UI")
if parser.duplicate_ids:
    errors.append("duplicate IDs: " + ", ".join(sorted(parser.duplicate_ids)))
if errors:
    raise SystemExit("Validation failed:\n- " + "\n- ".join(errors))
print(f"Validation passed: {parser.project_cards} project cards, {parser.logo_count} local logos, {len(parser.external_hrefs)} external links, no duplicate IDs.")
