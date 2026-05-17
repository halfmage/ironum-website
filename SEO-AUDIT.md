# SEO Audit — ironum.com

**Date:** 2026-05-17
**Branch:** `main` (post-EU rebuild merge; hreflang sitemap support shipped 2026-05-11)
**Locales scored:** EN + DE
**Routes in sitemap:** 67
**Method:** fresh full-site scoring (does not reference prior audits)

---

## SEO Health Score: 74/100 (Good, with addressable gaps)

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical Foundations | 78/100 | 25% | 19.5 |
| On-Page | 80/100 | 20% | 16.0 |
| Content Quality | 72/100 | 20% | 14.4 |
| Schema Markup | 60/100 | 15% | 9.0 |
| Image & Performance | 58/100 | 10% | 5.8 |
| Localization (i18n) | 88/100 | 10% | 8.8 |
| **TOTAL** | | | **73.5 → 74** |

### Headline read

The site is structurally strong: SSG output, complete bilingual mirror with proper German slugs, hreflang done correctly in both HTML and sitemap, canonical aligned to non-www, robots.txt cooperating with the @astrojs/sitemap output, 19 blog posts (up from 5 in the spring) with real external citations. The drag on the score is **operational hygiene** (sitemap has no `<lastmod>` at all, hero background is still CSS-loaded, four screenshots ship as both PNG and WebP) plus **schema completeness** (deprecated `HowTo` still emitted, `FAQPage` not on service pages, `dateModified` mirrors `datePublished`).

The localization side is the standout — 88/100 — and is the strongest competitive moat versus the German peer set (deepset, dida, Aleph Alpha all have weaker bilingual structure).

---

## On-Page SEO Checklist

### Title tags

**Homepage** (`src/i18n/messages/en.ts` via `t.meta.defaultTitle`):
- EN: `Ironum | Enterprise AI Without the Compliance Risk` — 56 chars, pass.
- DE: `Ironum | KI-Lösungen für europäische Unternehmen` — 50 chars, pass.

**Service pages** (per-page override, e.g., `src/pages/services/enterprise-rag.astro:106`):
- `Enterprise RAG Solutions | Private Document AI | Ironum` — 56 chars, pass. Primary keyword first, brand last.

**About** (`src/pages/about.astro:10`):
- `About Ironum | European AI Sovereignty from Düsseldorf | Ironum` — 63 chars, slightly long; "Ironum" duplicated. Trim to `About Ironum | European AI Sovereignty from Düsseldorf` (54 chars).

### Meta descriptions

- Homepage (EN): `European AI engineering partner. Private AI systems deployed on your infrastructure. GDPR compliant. No vendor lock-in. Book a free strategy call.` — 148 chars, optimal.
- Enterprise RAG: `Turn your documents into actionable intelligence with Retrieval-Augmented Generation. Private deployment, GDPR compliant, open-source LLMs. Deployed on your infrastructure.` — 173 chars; will truncate in SERP. Trim to ~155.

### Heading hierarchy

Verified on the EN homepage:
- `H1` (`src/components/Hero.astro:16`) — translated `t.hero.title`. Single H1 per page. Pass.
- `H2` (9 distinct, spans problem, services, testimonials, infrastructure, impacts, process, blog, CTA, newsletter).
- `H3`–`H4` properly nested.
- No level skips on the routes spot-checked (`/`, `/services/enterprise-rag/`, `/resources/blog/chatbot-own-data-gdpr-sme/`).

**Gap:** Service page `H2` text reads as marketing taglines, not queries. Example: `enterprise-rag.astro:124` "Your Knowledge Is Trapped". Reworking these to query-matching format (`"Why enterprise document search fails (and what to do)"`) would help Google AI Overviews extract headings cleanly.

### Internal linking

- Homepage → all 6 service pages (`index.astro:65-72`), latest 3 blog posts (`:107-126`), `/resources/blog/` index.
- Footer (`src/components/Footer.astro`) — comprehensive sitemap-like coverage.
- Blog posts cross-link to services and other posts (verified in `chatbot-own-data-gdpr-sme.mdx` lines 38, 52, 63 — links to enterprise-rag-explained, eu-ai-act-us-companies-guide, ki-hosting-europa-hetzner-ionos-vergleich).
- DE homepage routes correctly to DE blog when `dePosts.length >= 3` (`src/pages/de/index.astro:23`).
- Anchor text is descriptive throughout.

**Gap:** Service pages do not contextually link out to relevant blog posts. Example: `enterprise-rag.astro` has no body-text link to `enterprise-rag-explained.mdx`. Adding "Read more in our guide" inline links from each service page to its anchor blog post is a 1-hour pass that materially helps topical clustering.

### URL structure

- All lowercase, hyphens, trailing slashes consistent (`/services/enterprise-rag/`, `/de/branchen/finanzdienstleistungen/`).
- German slugs are localized (not transliterated): `gesundheitswesen`, `oeffentlicher-sektor`, `chatbot-eigene-daten-dsgvo-mittelstand`.
- No query parameters in canonical paths.
- Under 60 characters in all sampled cases.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | 13/25 | Three real homepage testimonials (Helena Vossen, Prof. Dr. Carsten Wolff at FH Dortmund, Alesia Kunz) with names and photos. **But service pages still frame use cases hypothetically** ("A mid-size German law firm processes thousands of contracts monthly" — `enterprise-rag.astro:45`). No named-customer case studies as separate pages. |
| Expertise | 18/25 | 19 blog posts averaging 1,500–3,500 words. Real external citations (Bitkom 2026 AI study, datensicherheit.de GDPR survey, BetrVG references). Technical depth on RAG, EU AI Act, GDPR is substantive. |
| Authoritativeness | 12/25 | Founder bio with photo on About page (`about.astro:60-71`). University partnership (FH Dortmund) shown as a logo. **Still missing:** press section, awards, conference appearances surfaced on-site, named author bylines on blog. |
| Trustworthiness | 19/25 | Strong: HTTPS, complete imprint with legal entity (LearnSlice UG), GDPR-compliant privacy policy, physical Düsseldorf address, phone number, real testimonials with photos. |

**Top E-E-A-T fixes** (priority order):
1. Convert blog `author` from `Organization` to `Person` (`BlogLayout.astro:49`).
2. Add visible author bylines on blog post hero (currently `frontmatter.author` renders as "Ironum Team" at `BlogLayout.astro:94`).
3. Add a "Press & speaking" or "Recognition" section to About page.
4. Replace at least two hypothetical service-page use cases with a real named customer.

### Content metrics (May 2026)

| Page | Words | Depth |
|---|---|---|
| Homepage (EN) | ~1,200 | Standard |
| About (EN) | ~600 | Thin |
| Enterprise RAG service | ~2,400 | Strong |
| `chatbot-own-data-gdpr-sme` (flagship post) | ~3,500 | Excellent |
| `enterprise-rag-explained` | ~2,300 | Strong |
| `eu-ai-act-compliance-checklist` | ~2,200 | Strong |
| `ki-im-mittelstand-strategie-2026` (DE) | ~2,500 | Strong |
| `ki-hosting-europa-hetzner-ionos-vergleich` (DE) | ~2,800 | Strong |

The blog corpus is now substantial. The about page is the thinnest high-stakes page on the site.

---

## Keyword Analysis

### Primary keyword targets (EN side): "Enterprise AI Europe" / "GDPR-compliant AI" / "sovereign AI Europe"

| Keyword | Title tag | H1 | Meta desc | First 100 words | URL |
|---|---|---|---|---|---|
| Enterprise AI | ✓ | ✓ | ✓ | ✓ | n/a |
| Europe / European | ✗ (homepage title) | ✗ | ✓ | ✓ | n/a |
| GDPR | ✗ (homepage title) | ✗ | ✓ | ✓ | n/a |
| sovereign AI | ✗ | ✗ | ✗ | ✗ | n/a |
| private AI | partial | ✗ | ✓ | ✓ | n/a |
| on-premise AI | ✗ | ✗ | partial | partial | n/a |
| EU AI Act | ✗ | ✗ | ✗ | partial | n/a |

Consider one of these as the homepage H1:
- `Enterprise AI for Europe — Without the Compliance Risk` (adds "Europe")
- `Sovereign Enterprise AI Without the Compliance Risk` (adds "sovereign", a rising AI-search term)

### Secondary keywords (EN)

| Keyword | Present? | Where |
|---|---|---|
| AI compliance | ✓ | Hero, Problem section |
| EU AI Act | ✓ | Problem section, multiple blog posts |
| data sovereignty | ✓ | About, Infrastructure |
| AI chatbot GDPR | ✓ | Services + flagship blog post |
| enterprise RAG | ✓ | Services + dedicated blog |
| workflow automation | ✓ | Services |
| n8n self-hosted | ✓ | Services + dedicated blog (`n8n-vs-zapier-vs-make`) |
| LLM fine-tuning | ✓ | Services |
| sovereign AI Germany | partial | About; not on homepage |
| AI infrastructure Germany | partial | "German data centers" wording |

### DE primary targets: "KI Mittelstand" / "DSGVO KI" / "KI Deutschland"

| Keyword | Coverage | Where |
|---|---|---|
| KI Mittelstand | ✓ strong | DE blog (`ki-im-mittelstand-strategie-2026`, `fachkraeftemangel-ki-loesungen-mittelstand`) |
| DSGVO KI | ✓ strong | `ki-dsgvo-datenschutzkonform-2026`, `chatbot-eigene-daten-dsgvo-mittelstand`, `ki-in-der-kanzlei-dsgvo-verschwiegenheit-brao` |
| KI Hosting Deutschland | ✓ | `ki-hosting-europa-hetzner-ionos-vergleich` |
| EU AI Act Deutschland | ✓ | `eu-ai-act-mittelstand-fristen-kosten` |
| Kanzlei KI | ✓ | `ki-in-der-kanzlei-dsgvo-verschwiegenheit-brao` |
| Betriebsrat KI | ✓ | `ki-betriebsrat-mitbestimmung` |
| KI Fertigung | ✓ | `ki-fertigung-produktion-2026` |
| KI Agenten | ✓ | `ki-agenten-unternehmen-2026` |
| DSGVO-konformer Chatbot | ✓ | flagship DE post |

**The DE side has tighter keyword coverage than the EN side.** German posts are vertically targeted (Kanzlei, Mittelstand, Betriebsrat); English posts read more generically. If the EN audience is US enterprises evaluating EU AI providers, two US-buyer-native posts ("EU sovereign AI for US-headquartered companies", "GDPR for US SaaS expanding into Europe") would close the gap.

### Search intent alignment

| Intent | Pages targeting | Match |
|---|---|---|
| Commercial investigation | Homepage, service pages, industry pages | Strong — problem/solution/proof structure matches buyer-journey |
| Comparison | `n8n-vs-zapier-vs-make`, flagship chatbot post (architecture table) | Present — could expand: "Ironum vs deepset", "Ironum vs Aleph Alpha for Mittelstand", "on-premise vs EU cloud AI" |
| How-to / educational | Blog posts | Strong |
| Transactional | CTA to discovery call | Present |
| Branded / navigational | Footer + brand mentions | Adequate |

---

## Technical SEO

### Robots.txt — Pass

`public/robots.txt`:
- `Allow: /` for all bots.
- Explicit allow rules for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended (lines 5–23).
- Sitemap reference: `https://ironum.com/sitemap-index.xml` (line 26) — matches the actual generated path.

### XML Sitemap — Needs Work

- Index at `/sitemap-index.xml`, child at `/sitemap-0.xml`.
- **67 URLs** in `sitemap-0.xml` — full bilingual coverage including 19 blog posts, all services, all industries, platform pages, about/contact/imprint/privacy.
- Hreflang alternates in sitemap on every paired route (verified across `/services/*`, `/industries/*`, `/platform/*`).
- EN-only blog posts (`enterprise-rag-explained`, etc.) and DE-only blog posts (`ki-im-mittelstand-strategie-2026`, etc.) correctly omit alternates — they have no counterpart.
- **Critical:** **no `<lastmod>` tags at all.** The earlier dynamic timestamp issue was fixed by removing the line, but the replacement is to emit no `lastmod`. Crawlers lose a useful prioritization signal. Recommended: emit `lastmod` per page from the source modification time (or from blog `publishDate`/`updatedDate` for posts, and `git log -1 --format=%cI` for static routes).
- `priority`/`changefreq` are set correctly per `astro.config.mjs:73-82`: homepage 1.0/weekly, blog 0.7/monthly, other 0.8/monthly.

### Canonical tags — Pass

`Layout.astro:31` — `https://ironum.com${pathname}`. Non-www, matches sitemap and `astro.config.mjs:9`.

### Hreflang — Pass

`Layout.astro:129-131`:
- `hreflang="en"` on every page.
- `hreflang="de"` conditionally (skipped on EN-only blog posts at `Layout.astro:33`).
- `hreflang="x-default"` always points to EN.

Sitemap-level hreflang also present on paired routes via `astro.config.mjs:84-90` and the `URL_TO_PAIR` lookup.

### Meta robots — Pass

`Layout.astro:123` — `<meta name="robots" content="index, follow">`.

### Twitter/X Cards — Pass

`Layout.astro:118-121` — `summary_large_image`, title, description, image. Image defaults to `/social.png` and accepts per-page override via `ogImage` prop.

### Open Graph — Pass

`Layout.astro:109-116` — `og:title`, `og:description`, `og:image`, `og:url`, `og:type` ("website" for all pages, including blog — should be `"article"` for blog posts), `og:locale` (locale-aware), `og:locale:alternate`, `og:site_name`.

**Gap:** `og:type` is hardcoded to `"website"` even on blog posts. Should be `"article"` when rendered via `BlogLayout.astro`. Add an `ogType` prop to `Layout.astro:14` defaulting to `"website"` and override to `"article"` in `BlogLayout.astro:76`.

### Core Web Vitals (estimated)

| Metric | Estimate | Status | Notes |
|---|---|---|---|
| LCP | ~2.5–3.0s | At risk | Hero background loaded via CSS `background-image: url('/hero-background.png')` (`Hero.astro:13`) — not preloadable; PNG, not WebP/AVIF |
| FID/INP | <100ms | Good | Minimal JS (Alpine.js for accordion + dropdowns; Simple Analytics) |
| CLS | Low risk overall | At risk | Trusted-by logos lack `width`/`height` (`index.astro:30-33`) and so does the founder image (`about.astro:63`) |
| TTFB | <200ms | Good | Static on Netlify CDN |

### Security headers — Poor (40/100)

`netlify.toml` only sets `Content-Language`. Missing: CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, Strict-Transport-Security (HSTS preload not declared). These are SEO-adjacent trust signals — Google's site-quality models penalize their absence, and Mozilla Observatory / SecurityHeaders.com scores feed third-party assessments.

### Mobile-friendliness — Pass

Viewport meta present, touch targets sized appropriately (`min-h-[48px]` + `touch-manipulation`), responsive grid layouts, mobile accordion menu via Alpine.

---

## Schema Markup

| Type | Status | Location |
|---|---|---|
| Organization | ✓ complete (1 `sameAs` only) | `Layout.astro:41-74` |
| WebSite | ✓ | `Layout.astro:75-83` |
| BreadcrumbList | ✓ dynamic | `Layout.astro:88-97` |
| BlogPosting | ✓ (`author` is Organization, `dateModified` hardcoded) | `BlogLayout.astro:45-59` |
| Service | ✓ per service page | e.g. `enterprise-rag.astro:86-96` |
| FAQPage | partial — only on blog posts with `frontmatter.faq` (2 posts: EN+DE chatbot flagship) | `BlogLayout.astro:61-73` |
| HowTo | **deprecated by Google Sept 2023, still emitted** | `ProcessSteps.astro:16-29` |
| LocalBusiness | missing | n/a |
| Person | missing | n/a |
| Review / AggregateRating | missing | n/a |

### High-impact additions

1. **Add `FAQPage` schema emission to `FAQSection.astro`.** Six service pages render a FAQ block but emit no schema. This is the single biggest schema-rich-result opportunity.
2. **Add `Person` schema for Gerrit Halfmann.** Then change `BlogPosting.author` (`BlogLayout.astro:49`) to reference the Person `@id`.
3. **Promote Organization to also be a `LocalBusiness`** (or use dual-type `["Organization", "ProfessionalService"]`). Physical Düsseldorf address is already in the Organization block.
4. **Add `AggregateRating` to homepage** using the three real testimonials wrapped in `Review` items.
5. **Remove HowTo from ProcessSteps** — it's not just neutral, it actively risks SERP weirdness from extractors that still parse it.
6. **Fix BlogPosting `dateModified`** (`BlogLayout.astro:52`). Add optional `updatedDate` to the schema in `src/content/config.ts`, fall back to `publishDate`.
7. **Add `og:type: "article"` for blog posts** (currently hardcoded `"website"` in `Layout.astro:113`).

---

## Image & Performance

### Strengths

- Astro `<Image>` used for avatar (`Hero.astro:22`) and logo overlay (`Hero.astro:29`) with explicit `width`/`height`.
- Alt text coverage is 100% on visible spot-checks.
- Hero CTA avatar alt: `"Gerrit Halfmann, Ironum AI Core founder and GDPR AI compliance expert"` — good, descriptive, keyword-relevant.
- WebP versions exist for screenshot files (`public/screenshots/*.webp`).

### Gaps

1. **PNG duplicates still alongside WebP** in `public/screenshots/`: askmention, fh-dortmund, financial-companion, learnslice — every one has both `.png` and `.webp`. PNGs are unreferenced bloat (and waste cache/CDN). Delete the PNG variants once references are confirmed to use WebP.
2. **Hero background image (`/hero-background.png`)** is loaded via inline CSS `style="background-image: url(...)"` (`Hero.astro:13`). Not preloadable, not served as WebP/AVIF, not responsive. LCP risk on first paint. Either convert to an `<img fetchpriority="high">` element behind a black overlay, or add `<link rel="preload" href="/hero-background.png" as="image">` in `Layout.astro` head.
3. **Trusted-by logos lack `width`/`height`** (`index.astro:30-33` and `de/index.astro:36-39`) — CLS risk. Use `<Image>` from `astro:assets` or add explicit dimensions to the `<img>` tags.
4. **Founder image lacks dimensions** (`about.astro:63`) — same fix.
5. **Mixed image formats across the asset set**: avatars are PNG, JPGs and WebP coexist, logos are SVG+PNG. Standardize on WebP for raster, SVG for logos.

---

## Content Gap Analysis

| Missing topic | Search intent | Audience | Type | Priority |
|---|---|---|---|---|
| "EU sovereign AI for US-headquartered companies" | Commercial | US enterprises expanding into EU | Blog/landing | 1 |
| "On-premise AI vs EU cloud AI — decision guide" | Comparison | All EU buyers | Blog | 2 |
| "RAG vs fine-tuning — when to choose which" | Educational | Engineering leaders | Blog | 3 |
| "Ironum vs deepset vs Aleph Alpha (positioning)" | Commercial / branded | Mid-market buyers comparing | Landing page | 4 |
| "GDPR-compliant AI vendor evaluation checklist" | Decision-stage | Procurement / DPO | Downloadable / lead gen | 5 |
| "Kosten KI-Projekt Mittelstand (Realistische Budgets)" | Decision-stage DE | German SME buyers | Blog | 6 |
| "KI-Datenschutzfolgenabschätzung (DPIA) Vorlage" | How-to DE | German DPOs | Downloadable | 7 |
| "Sovereign LLM provider comparison: Aleph Alpha, Mistral, Llama-3 on Hetzner" | Comparison | Technical buyers | Blog | 8 |

Several spring-2026 gaps have been filled (`eu-ai-act-compliance-checklist`, `enterprise-rag-explained`, `gdpr-compliant-ai-guide`). Remaining gaps cluster around **comparison content** (vendor-vs-vendor, deployment-vs-deployment) and **decision-stage tools** (checklists, calculators) — both formats AI search engines extract from heavily.

---

## Featured Snippet Opportunities

1. **"What is Generative Engine Optimization?"** — the `/services/geo-optimization/` page should open with a tight 40–60-word answer paragraph immediately after the H1.
2. **"How to deploy AI on-premise (4 steps)"** — `ProcessSteps` content already structured as numbered steps; reformat as a true ordered list with concise step labels.
3. **"EU AI Act risk classifications"** — already in `eu-ai-act-compliance-checklist`; add a compact table near the top of the post for snippet extraction.
4. **"RAG vs traditional search"** — `enterprise-rag-explained` could add a 5-row comparison table.
5. **"On-premise vs EU cloud vs US SaaS chatbot — comparison"** — already exists in `chatbot-own-data-gdpr-sme.mdx` (the 8-row table at line ~70). This is snippet-ready as-is — make sure it's the first table in the post so extractors find it.

---

## Competitor Benchmark (abbreviated)

Three German peers benchmarked: **deepset.ai**, **aleph-alpha.com**, **dida.do**. (See `GEO-AUDIT-REPORT.md` for the full GEO-focused comparison.) SEO-specific signals:

| Signal | **Ironum** | dida.do | deepset.ai | Aleph Alpha |
|---|---|---|---|---|
| Sitemap URL count | 67 | unclear / sitemap empty on fetch | 243 | 4 (very thin) |
| `<lastmod>` in sitemap | absent | unknown | present | unknown |
| Hreflang in sitemap | ✓ on paired routes | unknown | partial | ✓ |
| Schema breadth | 7 types (1 deprecated) | 2 types (Org + Corporation) | minimal in HTML | minimal in HTML |
| Full bilingual mirror with localized slugs | ✓ (gold standard) | partial | mixed | ✓ |
| Blog post count | 19 | sparse | very deep | sparse |
| Named author on blog | "Ironum Team" (Org) | n/a | "deepset Team" (Org) | n/a |
| Real customer case studies | 0 | Yes | Yes (8+) | Yes (3 with metrics + Bosch/SAP/Bundesagentur logos) |
| Security headers (estimate) | low | medium | high | high |
| HTTPS / cleanliness | ✓ | ✓ | ✓ | ✓ |

**Ironum's structural SEO is competitive with or ahead of all three on the bilingual / hreflang / schema-breadth dimensions.** It trails on three things only:
- **Content corpus depth** (deepset's 243-URL sitemap vs. Ironum's 67) — purely a function of time and publishing cadence.
- **Real customer case studies** — every competitor has them. Ironum has testimonials but not packaged case studies.
- **Sitemap `<lastmod>` data** — deepset emits it; Ironum doesn't.

---

## EN / DE Parity

| Dimension | EN | DE | Status |
|---|---|---|---|
| Page mirror | 25 routes | 25 routes | ✓ complete |
| Hreflang (HTML + sitemap) | ✓ | ✓ | ✓ |
| Localized URL slugs | n/a | ✓ (gesundheitswesen, finanzdienstleistungen, oeffentlicher-sektor, ...) | ✓ |
| Title tags localized | ✓ | ✓ | ✓ |
| Meta descriptions localized | ✓ | ✓ | ✓ |
| Blog post count | 7 EN-only + 12 bilingual | 12 DE-only/translated | EN has more total |
| Blog post depth | comparable | comparable | ✓ |
| Keyword targeting tightness | weaker (generic AI/GDPR terms) | stronger (DSGVO, Mittelstand, Kanzlei, BetrVG, IHK) | DE is sharper |
| FAQ schema deployment | 1 post | 1 post | even |
| Booking link / CTA | live | live (`t.bookingUrl`) | ✓ |
| `Content-Language` HTTP header | `en` (default) | `de` (per `netlify.toml`) | ✓ |

**Net:** DE side is sharper for its audience than EN is for its audience. EN side reads like a translated DE pitch; if the EN target is US enterprises, it needs US-native posts and US-buyer-aware service-page framing.

---

## Prioritized Recommendations

### Critical (this week)

| # | Action | File / line | Effort |
|---|---|---|---|
| 1 | Remove deprecated `HowTo` schema from `ProcessSteps.astro:16-29` | `src/components/sections/ProcessSteps.astro` | 5 min |
| 2 | Emit `FAQPage` JSON-LD from `FAQSection.astro`; pass items into it from each service page | `src/components/sections/FAQSection.astro` + service pages | 30–45 min |
| 3 | Add real `lastmod` per page in sitemap — use blog `publishDate`/optional `updatedDate` for posts, file modification time for static routes | `astro.config.mjs:67-95` `serialize()` callback | 30 min |
| 4 | Add `og:type` prop to `Layout.astro:14`; override to `"article"` in `BlogLayout.astro:76` | both files | 10 min |
| 5 | Trim `enterprise-rag.astro:107` meta description from 173 to ~155 chars | one file | 5 min |
| 6 | Delete PNG duplicates from `public/screenshots/` once references are confirmed WebP | `public/screenshots/` | 10 min |

### High (this month)

| # | Action | File / line | Effort |
|---|---|---|---|
| 7 | Add `Person` schema for Gerrit Halfmann to default `@graph`, reference as blog `author` | `src/layouts/Layout.astro` + `BlogLayout.astro:49` | 30 min |
| 8 | Add `LocalBusiness` (or dual-type `["Organization", "ProfessionalService"]`) | `src/layouts/Layout.astro:43` | 15 min |
| 9 | Add `updatedDate` to blog schema; use real `dateModified` | `src/content/config.ts` + `BlogLayout.astro:52` | 20 min |
| 10 | Preload hero background image, convert to WebP, or move into `<img fetchpriority="high">` | `Hero.astro:13` + `Layout.astro` head | 30 min |
| 11 | Add `width`/`height` to trusted-by logos (`index.astro:30-33`, `de/index.astro:36-39`) and founder image (`about.astro:63`) | three files | 15 min |
| 12 | Trim About title from `"About Ironum | European AI Sovereignty from Düsseldorf | Ironum"` to remove duplicate brand | `about.astro:10` | 1 min |
| 13 | Add security headers via `netlify.toml`: CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, HSTS | `netlify.toml` | 30 min |
| 14 | Add contextual body-text links from each service page to its anchor blog post | per service page | 1 hr |
| 15 | Consider rewriting homepage H1 to include `Europe` or `sovereign` keyword | `src/i18n/messages/*` | 10 min |

### Medium (this quarter)

| # | Action | Effort |
|---|---|---|
| 16 | Replace at least 2 hypothetical use cases with real named-customer case studies | 1–2 weeks customer outreach |
| 17 | Add author bylines on blog post hero (display `frontmatter.author` styled, link to a future `/team` page) | 30 min |
| 18 | Expand About page from ~600 to 1,200+ words; add a "Speaking & writing" section | 3 hrs |
| 19 | Add `AggregateRating` + `Review` schema for homepage testimonials | 30 min |
| 20 | Two EN-native US-buyer posts (e.g., "EU sovereign AI for US-headquartered companies", "GDPR for US SaaS expanding into Europe") | 2 weeks |
| 21 | Two German Mittelstand decision-stage posts ("Kosten KI-Projekt Mittelstand", "KI-DPIA-Vorlage") | 2 weeks |
| 22 | Rewrite top 3 service-page H2s from marketing-tagline to query-matching format | 2 hrs |
| 23 | Add `speakable` property to BlogPosting | 15 min |
| 24 | Use post-specific `ogImage` consistently — fall back to `heroImage` automatically when no explicit `ogImage` set | 10 min (extension to existing logic in `BlogLayout.astro:76`) |

### Low (when resources allow)

| # | Action | Effort |
|---|---|---|
| 25 | Add schema validation to CI (rich-results-test, or schema.org JSON validator) to prevent regressions | 1 hr |
| 26 | Add `articleSection` to BlogPosting schema | 10 min |
| 27 | Set up Bing Webmaster Tools + IndexNow | 30 min |
| 28 | Create Google Business Profile for Düsseldorf office | 30 min |
| 29 | Investigate publishing a downloadable lead-gen asset (DPA template, EU AI Act risk classifier) — both surface in AI search and feed lead capture | 1 week |
| 30 | Run a Lighthouse audit and tackle whichever CWV metric most impacts your live data; Simple Analytics doesn't surface CWV, so pair with PageSpeed Insights | 30 min |

---

*Audit generated 2026-05-17. Methodology: fresh full-site scoring on a 6-category weighted rubric with three-competitor benchmark (deepset.ai, aleph-alpha.com, dida.do). All claims tied to current files at branch `main` HEAD with file paths and line numbers. Companion document: `GEO-AUDIT-REPORT.md` covers AI-search-specific signals (entity graph, llms.txt, per-platform readiness).*
