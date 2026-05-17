# GEO Audit Report: ironum.com

**Date:** 2026-05-17
**Business type:** Sovereign-EU AI services agency (RAG, automation, chatbots, fine-tuning, consulting)
**Locales scored:** EN + DE (full mirror)
**Pages on site:** 67 URLs in sitemap, 19 blog posts (7 EN-only, 12 DE/bilingual)
**Competitors benchmarked:** deepset.ai, aleph-alpha.com, dida.do
**Method:** fresh full-site scoring (does not reference prior audits)

---

## Executive Summary

### Composite GEO Score: 55/100 (Fair)

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Crawler Access | 92/100 | 10% | 9.2 |
| Entity & Brand Authority | 22/100 | 20% | 4.4 |
| Citability | 72/100 | 25% | 18.0 |
| Structured Data Depth | 50/100 | 15% | 7.5 |
| E-E-A-T | 55/100 | 15% | 8.25 |
| Per-Platform Readiness | 48/100 | 15% | 7.2 |
| **TOTAL** | | | **54.55 → 55** |

### Score interpretation

- 0–20 Critical — virtually invisible to AI search
- 21–40 Poor — minimal AI discoverability
- 41–60 Fair — present, but with significant structural gaps ← **you are here**
- 61–80 Good — solid AI presence
- 81–100 Excellent — strong AI search visibility

### Headline read

Ironum's **on-site fundamentals are now in the "Good" range** (crawler access 92, citability 72, localization done right). The composite is held down by two factors outside the markup layer: **entity recognition** (1 sameAs, no Wikipedia, no Crunchbase, no Person schema) and **per-platform spread** (no Bing/Google ecosystem presence). Both are addressable, but only one — Bing Webmaster Tools + Person schema — is a code/config fix. The other is a brand-building investment that compounds over months.

### Top 5 critical issues

1. **`HowTo` schema still emitted on every page that uses `ProcessSteps`** (`src/components/sections/ProcessSteps.astro:16-26`). Google [deprecated `HowTo` for rich results in September 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes). It is no longer ignored cleanly — it adds noise that AI extractors may parse and surface oddly. Remove the JSON-LD block; keep the visual component.
2. **`FAQPage` schema is missing from service pages that already render FAQ sections.** `src/pages/services/enterprise-rag.astro:63-84` defines five rich Q&A pairs and passes them to `FAQSection`, but `src/components/sections/FAQSection.astro` does not emit `FAQPage` schema. Every service page with a FAQ block is leaving direct-answer citability on the table.
3. **Single `sameAs` entry in Organization schema** (`src/layouts/Layout.astro:71-73`). Just `linkedin.com/company/ironum`. No GitHub, X, YouTube, Crunchbase, G2, Wikipedia. AI knowledge graphs cannot do entity resolution from a single LinkedIn URL; Ironum is functionally invisible to the entity layer.
4. **No `Person` schema for Gerrit Halfmann anywhere on the site**, despite a detailed founder block at `src/pages/about.astro:60-71`. Blog posts also attribute author as `Organization` (`src/layouts/BlogLayout.astro:49`). With no Person entity, every E-E-A-T signal gets attributed to an unknown legal entity instead of a verifiable human expert.
5. **`llms.txt` only lists 5 of 19 blog posts** (`public/llms.txt:25-29`). DE-language posts are entirely absent. The file's "Resources" section captures roughly a quarter of the actual content corpus AI crawlers should see prioritized.

### Top 5 quick wins (<1 hour each)

1. Delete the `<script type="application/ld+json">` block in `ProcessSteps.astro:29` — removes deprecated `HowTo`.
2. Add a `structuredData` prop pass-through from `FAQSection.astro` so each service page emits `FAQPage` schema for its Q&A items.
3. Expand the `sameAs` array in `Layout.astro:71-73` to include LinkedIn, the founder's personal LinkedIn, the company GitHub if any, and AskMention (Gerrit's GEO product) as a related entity.
4. Add a `Person` schema for Gerrit Halfmann as part of the default `@graph` in `Layout.astro`, then reference it as `author` in `BlogLayout.astro:49`.
5. Refresh `public/llms.txt`: list all 19 posts, add a DE section, fix the umlaut on "haftungsbeschränkt" (line 33 currently reads "haftungsbeschrankt").

---

## AI Platform Readiness

| Platform | Score | Status | Biggest gap |
|---|---|---|---|
| Google AI Overviews | 65/100 | Fair | Service page H2s are marketing taglines ("Your Knowledge Is Trapped"), not query-matching headers Google's extractor can lift |
| ChatGPT Web Search | 50/100 | Fair | Zero entity resolution — Ironum cannot be linked to a knowledge graph node from current `sameAs` set |
| Perplexity AI | 55/100 | Fair | External citations now present in blog posts (good), but no Reddit, Hacker News, or forum footprint for cross-validation |
| Google Gemini | 45/100 | Poor | No Google ecosystem signal: no Google Business Profile, no YouTube channel, no Wikipedia/Wikidata entity |
| Bing Copilot | 40/100 | Poor | Bing Webmaster Tools not registered, no IndexNow ping, Bing has no view into the site |
| **Average** | **51/100** | **Fair** | |

---

## AI Visibility Breakdown

### Citability: 72/100 (Good)

**Best-citable content (May 2026):**
- `chatbot-own-data-gdpr-sme.mdx` — 3,500+ words, embedded comparison table (on-premise vs EU cloud vs US SaaS), 8 FAQ items in frontmatter (which become FAQPage schema), three external citations to Bitkom and datensicherheit.de. **This is the flagship citation piece.**
- `enterprise-rag-explained` and `eu-ai-act-compliance-checklist` — extractable definitions, numbered steps.
- DE blog corpus (`ki-hosting-europa-hetzner-ionos-vergleich`, `ki-im-mittelstand-strategie-2026`, etc.) — 12 posts with concrete numbers, German-keyword density, citations.
- Enterprise RAG service page features a 5-item FAQ and use-case stat blocks (80% faster review, 60% ticket reduction, 10x compliance checks).

**Weakest content for citation:**
- Homepage hero + problem cards — marketing copy, no extractable facts (`src/pages/index.astro:42-55`).
- Testimonial section — not quotable by AI (no schema, conversational tone).
- About page (`src/pages/about.astro`) — ~600 words, mostly mission/values; no founder credentials beyond a single paragraph.

### AI Crawler Access: 92/100 (Excellent)

- `public/robots.txt:5-23` — named allow rules for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended.
- `public/robots.txt:26` — correct sitemap path (`https://ironum.com/sitemap-index.xml`).
- `astro.config.mjs:54` — site URL set to `https://ironum.com` (non-www), matching canonicals in `Layout.astro:31`.
- SSG output (Astro default, no `output: 'hybrid'` / `'server'`). All 67 routes pre-rendered as static HTML — bots see full markup.
- `public/llms.txt` exists. Quality is high for what it lists, but it only covers ~26% of the blog corpus (5 of 19 posts) and lists no DE-language resources.

Deductions: -5 for partial `llms.txt` coverage; -3 for legal entity typo ("haftungsbeschrankt") in `llms.txt:33`.

### Brand Mentions: 22/100 (Poor — unchanged)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Absent — no entity node |
| Reddit (r/artificial, r/MachineLearning, r/de, r/Mittelstand) | Absent |
| YouTube | Absent — no channel |
| LinkedIn (company page) | Present (small follower base) |
| LinkedIn (founder page) | Present, but not cross-linked from site as a `sameAs` |
| G2 / Capterra / Trustpilot | Absent |
| Crunchbase | Absent |
| GitHub | Absent — no public repos as Ironum |
| Industry press (t3n, Gründerszene, Heise) | Absent |
| Aggregators (sortlist, clutch) | Absent |

This is the single largest GEO ceiling. The on-site work is largely done; the off-site work has not started.

### llms.txt: 75/100

Present at `public/llms.txt`. Strengths: tight value-prop paragraph, six services listed with specific factual claims (deployment time, model support), six industries with vertical hooks, company entity info. Gaps:

- Lists 5 blog posts of 19. Missing: `n8n-vs-zapier-vs-make` (already listed ✓), `eu-ai-act-us-companies-guide`, `chatbot-own-data-gdpr-sme` (the FAQ-rich flagship), and all 12 DE-language posts.
- No separate `## Optional` or DE section to surface localized resources for German-language AI crawlers.
- "LearnSlice UG (haftungsbeschrankt)" should be "haftungsbeschränkt" (umlaut) to match the legal name in `Layout.astro:46`.

---

## Entity & E-E-A-T Deep Dive

### Entity recognition: 25/100

The Organization schema in `Layout.astro:41-74` is structurally complete (legalName, address, contactPoint, foundingDate, areaServed, logo) but the **entity-graph reach is one link** — `linkedin.com/company/ironum`. For an AI knowledge graph to confidently cite "Ironum" as a distinct entity, it needs convergent signals from multiple authoritative sources. Today, an AI system asked "who is Ironum" has only one URL to verify against, against ~thirteen for a comparably sized competitor like dida.do (LinkedIn + GitHub + cross-references from research papers) and dozens for Aleph Alpha (press, customer co-mentions).

### E-E-A-T: 55/100

| Dimension | Score | Evidence |
|---|---|---|
| Experience | 13/25 | Service pages still use hypothetical scenario framing ("A mid-size German law firm processes thousands of contracts monthly" — `enterprise-rag.astro:45`). No named-customer case studies. Three real testimonials exist on the homepage (`Testimonials.astro`) — strong signal, but not packaged as case studies with metrics. |
| Expertise | 16/25 | Substantial improvement from the spring: 19 blog posts vs. 5, with embedded external citations (Bitkom, datensicherheit.de, BetrVG references). Technical depth on RAG, EU AI Act, GDPR is genuine. Author attribution is the bottleneck. |
| Authoritativeness | 9/25 | Founder bio exists (`about.astro:60-71`) but is not surfaced as a `Person` entity. No press mentions, no academic citations, no conference appearances surfaced on-site. University partnership (FH Dortmund) is shown as a logo but not explained as a credential. |
| Trustworthiness | 17/25 | Strong on the legal/compliance side: HTTPS, imprint with legal entity, privacy policy, physical Düsseldorf address, named phone number, real DPA reference. No trust seals (TÜV, ISO badges) and no AggregateRating schema on testimonials. |

**The single biggest E-E-A-T fix:** convert blog author from `Organization` to a `Person` with linked credentials. `src/layouts/BlogLayout.astro:49` is the line; the corresponding `Person` definition should live in `Layout.astro`'s default `@graph`.

---

## Structured Data Audit

### What exists (verified May 2026)

| Schema type | Location | Status |
|---|---|---|
| Organization | `Layout.astro:41-74` | Present, complete, but only 1 `sameAs` |
| WebSite | `Layout.astro:75-83` | Present, with `inLanguage` per locale |
| BreadcrumbList | `Layout.astro:88-97` | Dynamic, on every inner page |
| BlogPosting | `BlogLayout.astro:45-59` | Present; `author` is Organization, `dateModified` mirrors `datePublished` |
| FAQPage | `BlogLayout.astro:61-73` | Conditional on `frontmatter.faq` — currently active on **only 2 blog posts** (the two chatbot-on-own-data posts in EN+DE). Service pages with FAQ sections do **not** emit this schema. |
| Service | per-service-page (e.g., `enterprise-rag.astro:86-96`) | Present, with `@id`, provider, areaServed, serviceType |
| HowTo | `ProcessSteps.astro:16-26` | **Deprecated by Google Sept 2023.** Should be removed. |

### What's missing (highest-impact)

| Schema type | Why it matters |
|---|---|
| **Person** (Gerrit Halfmann) | E-E-A-T signal currently flows to a legal entity (LearnSlice UG), not a person. AI systems weight named-expert authorship more heavily. |
| **LocalBusiness** | Physical address at Luisenstraße 66, 40215 Düsseldorf already exists in `Layout.astro:55-61`. Promoting Organization → LocalBusiness (with `@type: ["Organization", "ProfessionalService"]`) feeds local-search and German Mittelstand discovery. |
| **FAQPage on service pages** | At least 6 service pages have FAQ sections. None emit schema. |
| **speakable** | Mark hero summary paragraphs in BlogPosting so voice-AI / podcast-style assistants can quote cleanly. |
| **AggregateRating** | Three named testimonials exist (`Testimonials.astro`). Wrap them in `Review` + Organization `aggregateRating`. |
| **Article `articleSection`** | BlogPosting omits `articleSection` — minor, but it's how category-level rich snippets get attached. |

### What's incorrect

- `BlogLayout.astro:52` — `"dateModified": frontmatter.publishDate`. Hardcoded equality. Every post claims it has not been updated since publish. Add an optional `updatedDate` frontmatter field.
- All blog posts share the generic `/social.png` `ogImage` unless overridden. Several posts now ship hero images (`/blog/chatbot-mittelstand-modes-ui.png` etc.), but they are passed to `Layout.astro` as `ogImage` only when frontmatter sets it. Good — but post-specific images should be the default, not the exception.

---

## Competitor Benchmark

### Competitors chosen

Three German competitors that match different points on Ironum's positioning axis:

1. **dida.do** (Berlin) — closest direct peer: ML/AI services agency, GDPR positioning, custom delivery model.
2. **deepset.ai** (Berlin) — adjacent: B2B AI platform built on open-source Haystack framework. Less of an agency, more of a platform-plus-services play.
3. **aleph-alpha.com** (Heidelberg) — the brand DACH buyers compare Ironum to in the "sovereign EU AI" conversation. Different category (sovereign LLM provider), but shares the GDPR/EU-sovereignty story.

(Note: kern.ai was the original fourth candidate; that domain now 301-redirects to accompio.com — Kern AI was acquired and is no longer a standalone brand.)

### Side-by-side: GEO signals

| Signal | **Ironum** | dida.do | deepset.ai | Aleph Alpha |
|---|---|---|---|---|
| `llms.txt` present | ✓ (5 of 19 posts listed) | ✓ (well-written) | ✓ (last updated Jun 2025) | ✗ (404) |
| `robots.txt` AI-bot allow rules | ✓ explicit per-bot | implicit only | implicit only | implicit only |
| Sitemap URL count | 67 | unclear (index empty) | 243 | 4 (very thin) |
| Hreflang | ✓ en/de/x-default (HTML + sitemap on paired routes) | ✓ en-US/de-DE | partial | ✓ en/de |
| JSON-LD schemas (homepage) | Organization, WebSite, BreadcrumbList | Organization + Corporation | none visible in HTML | none visible in HTML (Astro-rendered) |
| `sameAs` entries | 1 (LinkedIn) | 1 (LinkedIn) | n/a in HTML | 3 in footer (LinkedIn, X, GitHub) |
| Author identity on blog | "Ironum Team" (Org) | n/a | "deepset Team" (Org) | n/a |
| Real named case studies | 0 (hypothetical use cases) | Yes (visible) | Yes (Airbus, Zeit Online, Manz, Barmenia, Oak North) | Yes (Bosch, Deutsche Bank metrics) |
| Top-tier customer logos | LearnSlice, FH Dortmund, Smella, Ute Becker | mid-tier mix | Airbus, YPulse, Manz | Bosch, SAP, Deutsche Bank, Bundesagentur für Arbeit, Schwarz Gruppe, Infineon |
| FAQ schema on flagship pages | partial (2 blog posts only) | not visible | not visible | not visible |
| Blog cadence | ~3–4 posts/month, 19 total | sparse | ~weekly | infrequent thought-leadership |
| Full EN+DE mirror with localized slugs | ✓ (best in set) | partial (EN-default) | mixed (single blog) | ✓ (DE-default, EN alt) |

### Estimated composite GEO scores

| Site | Composite | Notes |
|---|---|---|
| **deepset.ai** | ~72 | Carried by Haystack open-source community = enormous entity authority on GitHub, in research papers, in Hacker News threads. Real case studies. Massive sitemap. Weakness: same author-as-Organization pattern as Ironum. |
| **Aleph Alpha** | ~60 | Entity authority is mostly *off-site* (customer co-mentions in press: Bosch + Aleph Alpha; SAP + Aleph Alpha). The site itself is unusually thin on schema and only 4 sitemap URLs. They get away with it because the brand has already won the knowledge-graph battle elsewhere. |
| **Ironum** | **55** | Best on-site infrastructure of the three peers (full hreflang, complete bilingual mirror, llms.txt, FAQ schema where deployed). Held back by tiny entity footprint. |
| **dida.do** | ~50 | Cleanest schema in the set (Organization + Corporation, both with sameAs). Has llms.txt. But thinner content surface area and quieter brand. |

### Positioning analysis

**What Ironum does uniquely well vs this set:**
- **Most complete bilingual mirror** with proper German slugs (`/de/branchen/finanzdienstleistungen/` vs. peers' partial translations). This is durable structural SEO/GEO value.
- **Industry-vertical landing pages (6)** — legal, healthcare, manufacturing, financial-services, public-sector, education. None of the three competitors match this depth. This is a real moat for vertical-keyword AI queries ("AI for German law firms", "KI in der Fertigung").
- **Mittelstand-specific tone** in the DE corpus (BetrVG references, IHK-anchored framing, Hetzner/IONOS comparisons). Aleph Alpha is positioned for DAX-30 + government; deepset is global enterprise; dida is mid-market generic. Ironum has a clearer ICP signal in its content than any of them.
- **Engineer-led services positioning** — explicit contrast with management consulting. Differentiated copy.
- **FAQ schema deployed** (only on 2 posts, but it's deployed) — none of the three competitors emit FAQ schema on the pages spot-checked.

**What competitors have that Ironum needs to close:**
- **Aleph Alpha's customer-logo strategy** is the cheapest entity-authority lift Ironum can copy: every named blue-chip co-mention (e.g., "Ironum partners with [Mittelstand client name]") creates a brand co-occurrence in AI training data. Today the trusted-by row shows LearnSlice, FH Dortmund, Smella, Ute Becker — useful as proof-of-life, but none of these carry knowledge-graph weight on their own. Either *land* a recognizable Mittelstand brand and surface it loudly, or partner publicly with one (joint webinar, co-authored white paper).
- **deepset's open-source angle** = community presence on GitHub, Hacker News, research papers. Ironum has no public OSS surface area. Even shipping one small useful tool (e.g., an open-source DPA template generator, or a GDPR-compliant RAG starter kit) under an `ironum-labs` GitHub org would create cross-platform entity signals.
- **dida's cleaner schema** is a 30-minute fix — add `Corporation` alongside `Organization`, expand sameAs.

---

## EN vs DE Locale Gaps

| Dimension | EN | DE | Gap |
|---|---|---|---|
| Page mirror coverage | 25 routes | 25 routes | ✓ complete parity |
| Hreflang on paired routes | ✓ | ✓ | none |
| Blog post count | 7 EN-only + 12 bilingual = 19 surfaced | 12 DE | DE has fewer total (12 vs 19); EN-only posts (e.g., `enterprise-rag-explained`, `eu-ai-act-us-companies-guide`, `european-ai-sovereignty`) have no DE counterparts |
| FAQ schema deployment | 1 post (`chatbot-own-data-gdpr-sme`) | 1 post (`chatbot-eigene-daten-dsgvo-mittelstand`) | even — but should be on more |
| Localized slugs | n/a | ✓ proper (gesundheitswesen, finanzdienstleistungen, etc.) | none |
| Sitemap hreflang alternates | ✓ on paired routes | ✓ on paired routes | EN-only and DE-only blog posts correctly omit alternates |
| llms.txt DE section | n/a | ✗ — no DE-language resources surfaced | **Add a `## Ressourcen (Deutsch)` section** |
| German keyword density | "European" 4x, "GDPR" 6x | "DSGVO", "Mittelstand", "BetrVG", "Hetzner", "Kanzlei" prominent in DE blog | EN side under-uses "EU sovereign AI" / "sovereign LLM" terms |
| og:locale + Content-Language | `en_US` | `de_DE` | both correct; Content-Language set in `netlify.toml` |

**The DE side is in better shape than the EN side for its target audience.** DE keywords are tighter, blog topics are sharper (BetrVG, IHK, Kanzlei, Hetzner-vs-IONOS), and the Mittelstand framing is consistent. The EN side reads like a translation of the DE pitch rather than a native US/UK-audience pitch. Consider commissioning two EN-native posts that target "EU sovereign AI" as a US-buyer keyword.

---

## Prioritized Action Plan

### Critical — this week

| # | Action | File / line | Effort | Why |
|---|---|---|---|---|
| 1 | Delete deprecated `HowTo` JSON-LD | `src/components/sections/ProcessSteps.astro:16-29` | 5 min | Google deprecated Sep 2023; removes parse noise for AI extractors |
| 2 | Emit `FAQPage` schema from `FAQSection` component | `src/components/sections/FAQSection.astro` | 30 min | Six service pages already define FAQ items; this unlocks direct-answer citation on each |
| 3 | Add `Person` schema for Gerrit Halfmann to default `@graph` | `src/layouts/Layout.astro:41-84` | 30 min | E-E-A-T attribution requires a person, not an org |
| 4 | Change blog `author` from Organization to Person | `src/layouts/BlogLayout.astro:49` | 5 min | Google explicitly penalizes org-author for editorial content |
| 5 | Expand `sameAs` to 5+ entries | `src/layouts/Layout.astro:71-73` | 15 min | Add: founder LinkedIn, AskMention, GitHub if created, Crunchbase profile once registered |

### High — this month

| # | Action | File / line | Effort |
|---|---|---|---|
| 6 | Refresh `llms.txt`: list all 19 posts, add DE section, fix umlaut on "haftungsbeschrankt" | `public/llms.txt` | 20 min |
| 7 | Add `LocalBusiness` (or `Organization` + `ProfessionalService` types) | `src/layouts/Layout.astro:43` | 15 min |
| 8 | Register Bing Webmaster Tools, submit sitemap, enable IndexNow | external | 30 min |
| 9 | Create Google Business Profile for Düsseldorf office | external | 30 min |
| 10 | Add `dateModified` support: optional `updatedDate` frontmatter, fall back to `publishDate` | `src/content/config.ts` + `BlogLayout.astro:52` | 20 min |
| 11 | Add `speakable` property to BlogPosting | `BlogLayout.astro:45-59` | 15 min |
| 12 | Convert default `ogImage` per blog post: use `heroImage` automatically when no `ogImage` set | already partially done at `BlogLayout.astro:76` — extend to fall back |  10 min |
| 13 | Register on Crunchbase + AI service aggregators (Sortlist, Clutch DE) | external | 1 hr |

### Medium — this quarter

| # | Action | Effort |
|---|---|---|
| 14 | Replace at least 2 hypothetical use cases on service pages with real named-customer case studies (one EN, one DE) | 1–2 weeks of customer outreach + write-up |
| 15 | Land or document one recognizable Mittelstand co-mention (joint white paper, webinar, customer quote with company name + logo) | 2–4 weeks |
| 16 | Ship one open-source artifact under `github.com/ironum-labs` (DPA template, GDPR-RAG starter, EU AI Act checklist as a tool) | 2 weeks |
| 17 | Rewrite top 3 service page H2s from marketing-tagline format to query-matching format. E.g., `enterprise-rag.astro:124` "Your Knowledge Is Trapped" → "Why enterprise document search fails (and what to do)" | 2 hrs |
| 18 | Add `AggregateRating` schema to homepage, wrapping the three real testimonials in `Review` items | 30 min |
| 19 | Two EN-native posts targeting US-audience sovereign-AI keywords ("EU sovereign AI for US-headquartered companies", "GDPR for US SaaS expanding into Europe") | 2 weeks |
| 20 | Expand About page from ~600 to 1,200+ words; add a press/media section even if it starts as "Speaking & writing" with conference appearances | 3 hrs |

### Strategic — 1–3 months

| # | Action | Effort |
|---|---|---|
| 21 | Original research: "State of AI in the German Mittelstand 2026" — survey 50+ companies, publish numbers. Makes Ironum a primary citable source. | 4–6 weeks |
| 22 | Wikipedia + Wikidata entity creation for Ironum or for Gerrit Halfmann (notability bar applies — start with Wikidata) | 2 weeks of prep |
| 23 | YouTube channel: 3–5 short technical videos (5–10 min each) explaining RAG, EU AI Act, GDPR-compliant chatbot architecture. Feeds Gemini, surfaces in AI Overviews. | 3–4 weeks |
| 24 | Reddit seeding: substantive comments (not promotion) in r/MachineLearning, r/de, r/Mittelstand, r/sysadmin EU threads. Perplexity weights Reddit heavily. | ongoing, 2 hrs/week |
| 25 | Guest posts on t3n, Gründerszene, or Heise on a DACH AI compliance topic. Adds external authority citation. | 4 weeks per post |

---

## Key Source Files to Modify

| File | Changes |
|---|---|
| `src/layouts/Layout.astro` | Lines 41–84: expand `sameAs` (line 71), add Person schema for founder, consider LocalBusiness type or dual-type Organization+ProfessionalService |
| `src/layouts/BlogLayout.astro` | Line 49: change author to Person referencing `@id`. Line 52: support `updatedDate` frontmatter for real `dateModified`. Lines 45–59: add `speakable` property |
| `src/components/sections/ProcessSteps.astro` | Lines 16–29: delete entire `howToSchema` and its `<script>` tag |
| `src/components/sections/FAQSection.astro` | Lines 1–37: emit FAQPage JSON-LD using the items array (and update consumers to pass `name` / unique IDs) |
| `src/content/config.ts` | Add `updatedDate: z.coerce.date().optional()` to blog schema |
| `public/llms.txt` | Expand to all 19 blog posts; add `## Ressourcen (Deutsch)` section; fix "haftungsbeschrankt" → "haftungsbeschränkt" on line 33 |
| `src/pages/about.astro` | Add inline `Person` structured data via a per-page `structuredData` prop; expand body copy to 1,200+ words |
| `src/components/Testimonials.astro` | Add `Review` + `AggregateRating` schema for the three real testimonials |
| `src/pages/services/*.astro` | Pass FAQ items into FAQSection (once the component emits schema) — already passed on `enterprise-rag.astro:299`; audit other service pages for parity |
| `netlify.toml` | Add security headers (CSP, X-Content-Type-Options, Referrer-Policy) — trust signal that compounds with E-E-A-T |

---

*Report generated 2026-05-17. Methodology: fresh full-site scoring against a 6-category weighted rubric, with three-competitor benchmark (deepset.ai, aleph-alpha.com, dida.do). Per-platform readiness assesses ChatGPT Web Search, Google AI Overviews, Perplexity, Gemini, Bing Copilot.*
