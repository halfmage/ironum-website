# SEO Content Audit
## /de/ressourcen/blog/rag-jira-confluence-selbst-gehostet-eu/
### Date: 2026-10-22 (pre-publication, branch `publish/rag-jira-confluence`, PR #3)

Method: review of the source and of the built HTML in `dist/`. No keyword volumes (no keyword tool available).

## SEO Health Score: 84/100

## On-Page SEO Checklist

### Title Tag
- Status: **Needs work (minor)**
- Current: "RAG über Jira und Confluence, selbst gehostet in der EU | Ironum" (64 characters)
- The keyword comes first, so in the worst case Google cuts off only "| Ironum". Kept as is, because the H1 and the EN twin match it.

### Meta Description
- Status: **Pass** (148 characters, after the fix)
- Before: "Wie ein privates RAG-System Jira und Confluence liest, …"
- After: "Wie ein KI-Assistent (RAG) Jira und Confluence liest, Berechtigungen wahrt, Quellen belegt und auf EU-Servern Ihrer Wahl läuft. Aufbau und Zeitplan."
- Why: German buyers search with "KI" far more often than with "RAG". The snippet now contains both.

### Heading Hierarchy
- One H1. The H2s carry "RAG über Jira und Confluence" and "RAG-System für Jira und Confluence". **Pass.**
- Fixed: "eines RAG" → "eines RAG-Systems" in two H2s. "Eines RAG" is not correct German, and "RAG-System" is the term people search for.

### Images
- No images in the body. Own German OG card (`og-rag-jira-confluence-de.jpg`, 1200×630, 93 KB). **Pass.**

### Internal Linking
| Link | Status |
|---|---|
| → DE Copilot Jira connector article | ✓ |
| → DE Enterprise RAG service page (body) | ✓ |
| → DE hosting comparison (Hetzner/IONOS/OVHcloud) | ✓ (DE only) |
| → guides hub, Enterprise RAG Explained | ✓ marked "(auf Englisch)" |
| ← DE connector article | ✓ |
| Weitere Artikel | Connector article, Chatbot mit eigenen Daten, KI-Hosting comparison: all on topic |
| Broken links | None |

### URL
`/de/ressourcen/blog/rag-jira-confluence-selbst-gehostet-eu/`: German slug, keyword-first, 61 characters. **Pass.**

## Content Quality (E-E-A-T)
| Dimension | Score | Evidence |
|---|---|---|
| Experience | Weak | No project example; author "Ironum Team" (decided 2026-10-08) |
| Expertise | Present | Correct architecture, permission layers, deny-by-default |
| Authoritativeness | Weak | Organization author |
| Trustworthiness | Strong | New "Quellen" section with de-de Microsoft Learn pages, dated 22 Oct 2026; DPO sentence instead of a legal claim; disclaimer |

## Keyword Analysis
- **Primary:** RAG Jira Confluence / KI für Jira und Confluence, selbst gehostet.
- **Intent:** commercial investigation. Matches.
- **Placement:** title, H1, URL, meta, first 100 words, H2. **Pass.**
- **Secondary keywords, now present:** KI-Assistent, On-Premise, KI-Hosting, Datenschutzbeauftragte. "DSGVO" is deliberately not used, because the site does not make compliance claims (non-legal content rule).

## Technical SEO
- hreflang en/de/x-default pair with the EN article. Canonical tag is self-referencing. `lang="de"`. In the sitemap. **Pass.**
- BlogPosting, FAQPage (4 questions), BreadcrumbList present.

## Featured Snippet Opportunities
- The six numbered steps under "Wie RAG über Jira und Confluence funktioniert" work as a list snippet.
- The comparison table works as a table snippet.

## Core Web Vitals
Static page, no body images. No risk expected.

## Prioritized Recommendations
### Done in this pass
1. Meta description with "KI-Assistent".
2. "RAG-System" in two H2s.
3. Sources section.
### When possible
4. Add a project example once one can be shared (both languages).
5. Write a German version of *Enterprise RAG Explained*, so that link no longer points to an English page.
