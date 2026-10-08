# SEO Content Audit
## Ironum AI guides cluster (pre-launch, local build)
### Date: 2026-10-08

> **Status (2026-10-08, same day):** all on-site recommendations below are implemented,
> except: the LearnSlice 301s (item 1, still due on launch day in the LearnSlice repo) and the
> bridge posts (item 8, content to write). Blog H2s were kept in Title Case: on inspection,
> Title Case is the existing convention for Ironum blog posts, so item 12 did not apply.

Pages audited:

| URL | Words | Role |
|---|---|---|
| `/resources/guides/` | 403 | Hub |
| `/resources/guides/ai-for-product-owners/` | 1,887 | Landing page, PO guide |
| `/resources/guides/ai-for-product-managers/` | 1,877 | Landing page, PM guide |
| `/resources/blog/ai-backlog-refinement-product-owners/` | 3,224 | Supporting article |

Method: `analyze_page.py` against `astro preview` of commit `14a3fc5`, plus manual review of
source and built HTML. No keyword tool was available, so there are no search volumes here.
Competitive judgements reuse the live SERP checks LearnSlice recorded on 2026-09-17
(`qizify-website/SEO-AUDIT-ai-guides.md`, `COPY-SUGGESTIONS-ai-guides.md`). Re-check them
in Search Console once the pages have impressions.

---

## SEO Health Score: 72/100

| Area | Score | Note |
|---|---|---|
| Technical hygiene | 9/10 | Canonical, robots, sitemap, noindex on PDFs and the download page all correct |
| Title and meta | 7/10 | Two titles 61 chars, blog title 70 chars because of the template suffix |
| Heading structure | 7/10 | Keyword H2s present; three generic interface H2s per landing page |
| Indexable content | 8/10 | ~1,900 words per landing page, 3,200 on the article. Hub is thin |
| Internal linking | 6/10 | Sitewide footer link, hub, article. No links in from service pages or related posts |
| Cannibalisation | 4/10 | **Three pages chase "Copilot can't read Jira"** |
| Topical authority | 5/10 | Up from 1/10 on LearnSlice: the RAG cluster is adjacent, but there is no PM content yet |
| E-E-A-T | 8/10 | Named author, About card, Person schema, sourced figures |
| Schema | 9/10 | FAQPage, BreadcrumbList, DigitalDocument, BlogPosting with the correct author |
| Social / OG | 3/10 | Every page shares the generic `/social.png` |

**Compared with the LearnSlice page (66/100):** the move fixes the hardest problem that
audit found. On learnslice.com, topical authority was 1/10 and nothing on the page could
change it. On Ironum the guides sit next to an existing enterprise RAG / private AI cluster,
and their closing pitch is Ironum's real service. The remaining gaps are all on-site and
fixable.

---

## Critical: one launch blocker

### 1. Duplicate content on learnslice.com
The blog article is word-for-word identical to `learnslice.com/blog/ai-backlog-refinement-product-owners`.
Most of the FAQ answers are also identical to `learnslice.com/ai-guides`. If both stay live, Google picks one
canonical, and the older, already-indexed LearnSlice URL will probably win.

**Fix, on the same day the Ironum pages go live:** add 301 redirects on learnslice.com
(`/ai-guides` → `/resources/guides/`, and the blog post → the Ironum post). Then remove both
URLs from the LearnSlice footer and sitemap, and run IndexNow on both domains. A 301 also
carries over whatever links the LearnSlice URLs have earned.

---

## On-Page SEO Checklist

### Title Tags

| Page | Current | Len | Status | Recommended |
|---|---|---|---|---|
| Hub | Free AI Guides for Product Managers & Product Owners \| Ironum | 61 | Needs Work | `AI Guides for Product Managers & Product Owners \| Ironum` (56) |
| PO | AI for Product Owners: Free Backlog Refinement Guide \| Ironum | 61 | Needs Work | `AI for Product Owners: Backlog Refinement Guide \| Ironum` (56) |
| PM | AI for Product Managers: Free Practical Guide \| Ironum | 54 | Pass | Keep |
| Blog | AI Backlog Refinement When Copilot Cannot Read Your Jira \| Ironum Blog | 70 | Fail | `AI Backlog Refinement When Copilot Can't Read Jira \| Ironum` (59) |

The blog suffix ` | Ironum Blog` (14 chars) comes from `BlogLayout.astro` and affects every
post. Changing it to ` | Ironum` saves 5 characters sitewide. "Free" still appears in the
H1 area and the meta, so dropping it from the titles costs nothing.

### Meta Descriptions
All four pass: 139–155 characters, unique, keyword present, reason to click. The PM meta
leads with the 97% / 64% pair, which is the strongest hook in the cluster. No change.

### Heading Hierarchy
- One H1 per page. **Pass.**
- Keyword H2s on the landing pages. **Pass.** ("What AI backlog refinement can and cannot do",
  "Why Copilot cannot read your Jira backlog", "AI prompts for product managers").
- **Needs Work:** each landing page has three generic H2s: "Get the guide", "Common Questions"
  and "Related". The same issue was flagged on LearnSlice. Rename:
  - "Get the guide" → "Download the free AI guide for product owners" (or "…for product managers").
  - "Common Questions" → "AI for product owners: common questions".
  - "Related" → "More on AI and your backlog".
- **Blog:** H2s use Title Case ("What To Paste, And What Must Never Go In"). That is
  harmless for ranking but differs from the site's sentence case. Low priority.

### Images
- All content images have descriptive alt text that includes the figures. **Pass.**
- The one "missing alt" the script reports is the decorative logo overlay in the hero. Empty alt is correct there.
- **Needs Work:** the blog's two inline SVGs come from markdown and have no `loading="lazy"`.
  They are small (2–3 KB), so the impact is negligible.

### URL Structure
`/resources/guides/ai-for-product-owners/` is readable, has the keyword, uses hyphens and is
under 60 characters. **Pass.** It matches the existing `/resources/blog/` pattern.

### Internal Linking

| Inbound source | Status |
|---|---|
| Footer "AI Guides" on every EN page | Present |
| `/resources/` hub card | Present |
| Blog article (2 callouts + RAG paragraph) | Present |
| Guide pages link to each other | Present |
| `/services/enterprise-rag/` | **Missing** |
| `/services/custom-ai-development/` | **Missing** |
| `/resources/blog/chatbot-own-data-gdpr-sme/` (has an FAQ on Copilot) | **Missing** |
| `/resources/blog/enterprise-rag-explained/` | **Missing** |
| About page (Alesia card links to `/resources/guides/`) | Present |

Footer links count for little. Contextual links from the RAG pages tie the guides into the
cluster and also send readers in the other direction.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | Strong | Field notes from 17+ years as PM/PO in the PDFs; the article is written from inside the role |
| Expertise | Strong | Every figure traced to a primary source (Product Focus, IAB, Eurostat, OECD, Scrum Guide, Microsoft docs); the article lists its sources |
| Authoritativeness | Present | Named author with both roles, About card, `#person-alesia` with LinkedIn `sameAs`. No external mentions yet |
| Trustworthiness | Strong | Imprint, privacy policy, address, disclosed LearnSlice relationship, honest form copy ("decides nothing about your download") |

**Gap:** the byline on the landing pages is plain bold text. Link "Alesia Kunz" to
`/about/` so readers and crawlers can reach the bio in one click. The blog layout also
shows the author as plain text, which affects all posts.

---

## Keyword Analysis

Earlier SERP research (LearnSlice, 2026-09-17) found:

| Query | Field | Best Ironum page |
|---|---|---|
| AI for product owners | Weak (agilemania, premieragile, agileseekers) | PO landing page |
| AI backlog refinement | Weak, same field | Blog article |
| AI user stories / acceptance criteria | Moderate (Mountain Goat) | Blog article, future post |
| Copilot can't read Jira / Copilot Jira connector | Not measured; mostly Microsoft Learn + forums | Blog article |
| AI for product managers | **Strong**: Atlassian, monday.com, Product School | PM page; not a realistic target |
| AI prompts for product managers | Saturated | Not a target |

### Search Intent
All three content pages serve informational intent and put the answer before the form. This
matches the queries. The only commercial content is the "When the limit is the tool" section,
placed late. **Pass.**

### Cannibalisation (the main on-site issue)
"Can Copilot read my Jira backlog?" appears as:
- the blog title and an H2 on the blog,
- the PO landing page H2 "Why Copilot cannot read your Jira backlog" and its first FAQ,
- the PM landing page FAQ "Can Microsoft Copilot see my Jira tickets?".

The tier table image and paragraph are also identical on both landing pages. Three Ironum
URLs then compete for one query, and Google will rotate between them.

**Give each page one job:**

| Page | Owns | Change |
|---|---|---|
| Blog article | Copilot + Jira, AI backlog refinement how-to | Keep as is |
| PO page | "AI for product owners" (guide intent) | Rename the H2 to "What the guide says about Copilot and Jira", cut the paragraph to two sentences plus a link to the article, replace the Jira FAQ with "What should a product owner never paste into Copilot?" |
| PM page | "AI for product managers", "Copilot Chat vs Microsoft 365 Copilot" | Keep the tier table here, drop the Jira FAQ, add "Which Copilot licence do I have?" |

### Secondary Keywords to Work In Naturally
- PO: acceptance criteria with AI, splitting user stories with AI, sprint goal AI, Scrum Guide product owner accountabilities, Azure DevOps Copilot.
- PM: AI for product discovery, AI customer interview questions, AI prioritisation, AI stakeholder updates, Microsoft 365 Copilot licence.
- Cluster bridge: RAG over Jira and Confluence, self-hosted AI for Jira, AI on Jira Server / Data Center.

---

## Technical SEO
- **robots.txt:** `/guides/` is crawlable so the `X-Robots-Tag: noindex` header gets read. AI crawlers are allowed. **Pass.**
- **Sitemap:** all four pages are in `sitemap-0.xml`; `/resources/guides/download/*` is excluded. **Pass.** The blog has `lastmod` from `updatedDate`. The guide pages have no `lastmod` because the config only sets it for blog posts; that is low impact.
- **Canonical:** self-referencing on all four. **Pass.**
- **Download pages:** `noindex, nofollow`. **Pass.**
- **hreflang:** none, correctly, since the pages are EN-only and not in `routes.ts`.
- **Mobile:** viewport present, forms single column on mobile, buttons ≥48px. **Pass.**
- **Speed:** static HTML, two small scripts, lazy-loaded SVGs. No CWV risk expected. Verify with PageSpeed Insights after deploy.

---

## Content Gap Analysis

The guides and the RAG cluster sit side by side, but nothing in between connects them.
These posts would join the two and are realistic to rank for:

| Missing Topic | Volume | Competition | Type | Priority |
|---|---|---|---|---|
| Copilot Jira connector: Cloud vs Server/Data Center, what it can and cannot read | Med | Low (Microsoft Learn + forums) | Blog | 1 |
| RAG over Jira and Confluence, self-hosted in the EU | Low–Med | Low | Blog → enterprise RAG | 1 |
| AI acceptance criteria: prompts that produce testable criteria | Med | Moderate | Blog → PO guide | 2 |
| Splitting user stories with AI | Med | Low–Moderate | Blog → PO guide | 3 |
| Which Microsoft 365 Copilot licence do I have (and what it can see) | Med | Moderate | Blog → PM guide | 3 |

Each one should link to its guide page and to `/services/enterprise-rag/`.

---

## Featured Snippet Opportunities
- **"Can Copilot read Jira?"**: the blog FAQ answer runs about 85 words. Add a 45-word
  answer directly under the H2 "Why Copilot Cannot Read Your Backlog", starting "No.".
- **Copilot tier comparison**: the blog has a real HTML table, which is good for table
  snippets. The landing pages only have the SVG. Keep the HTML table on the page that owns
  the query (the PM page after the cannibalisation fix).
- **"Can AI prioritise a backlog?"**: the 50-word FAQ answer on the PO page fits the paragraph-snippet format already.

---

## Schema Markup

| Type | Hub | PO | PM | Blog |
|---|---|---|---|---|
| Organization / WebSite | ✓ | ✓ | ✓ | ✓ |
| Person (#person-alesia) | ✓ | ✓ | ✓ | ✓ |
| BreadcrumbList | ✓ | ✓ | ✓ | ✓ |
| FAQPage | n/a | ✓ (5) | ✓ (5) | ✓ (6) |
| DigitalDocument (author → Alesia) | — | ✓ | ✓ | n/a |
| BlogPosting (author → #person-alesia) | n/a | n/a | n/a | ✓ |
| ItemList of the two guides | **Missing** | n/a | n/a | n/a |

Low-value addition: an `ItemList` (or `CollectionPage`) on the hub. Validate all four pages in
the Rich Results Test after deploy. Note that Google now shows FAQ rich results only for
authoritative government and health sites. The FAQ markup still helps AI answer engines, but
expect no SERP accordion.

---

## Social / Open Graph
All four pages use `/social.png`. LinkedIn is the main distribution channel for these guides
(see the LinkedIn voice notes), so a specific card matters more here than anywhere else on the site.
Create `og-ai-guides.png` (1200×630) with the 97% / 64% pair, use it on the hub and PM page,
and make a PO variant with the 27% / 21% pair. The blog layout already accepts `ogImage`.

---

## Content Strategy Recommendations
1. **Launch order:** deploy → 301s on LearnSlice the same day → IndexNow → submit the four URLs in Search Console.
2. **Cadence:** one bridge post every two weeks, starting with the two priority-1 gaps above. Five posts give the cluster depth.
3. **Distribution:** LinkedIn first (Alesia's profile), linking to the landing pages rather than the PDFs.
4. **Refresh:** Microsoft changes Copilot tiers and connectors often. Re-check the tier table and Jira connector facts quarterly, and bump `updatedDate` on the article when anything changes.
5. **German version later:** the PO guide's anchor statistic is German (IAB), and Ironum has more authority in DACH. Translate once the EN pages show impressions.

---

## Prioritized Recommendations

### Critical (before or at launch)
1. 301 the LearnSlice guide page and article to Ironum on launch day (duplicate content).

### High Priority (this month)
2. Fix the cannibalisation: give each page one query, as in the table above.
3. Add contextual links from `/services/enterprise-rag/`, `/services/custom-ai-development/`, `chatbot-own-data-gdpr-sme` and `enterprise-rag-explained`.
4. Create guide-specific OG images (LinkedIn is the main channel).
5. Rename the generic H2s ("Get the guide", "Common Questions", "Related").

### Medium Priority (this quarter)
6. Shorten the PO, hub and blog titles; change the blog title suffix to ` | Ironum` sitewide.
7. Link the author byline to `/about/` on the guide pages and in the blog layout.
8. Write the two priority-1 bridge posts (Copilot Jira connector; RAG over Jira/Confluence).
9. Add a 45-word snippet answer under the blog's Copilot H2.

### Low Priority
10. ItemList schema on the hub; `lastmod` for non-blog pages.
11. Lazy-load the markdown images in the blog layout.
12. Make blog H2s sentence case to match the site.
