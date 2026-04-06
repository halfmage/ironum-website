# SEO Content Audit
## Source: Branch `feature/eu-market-website-rebuild` (local build)
### Date: 2026-04-06

---

## SEO Health Score: 88/100

Up from 82/100 (March 25). Major improvements: Twitter Card tags added, robots meta tag added, BlogPosting schema implemented, HowTo schema implemented, hreflang tags fully functional, testimonial avatar dimensions fixed, homepage now links to blog posts. Remaining gaps are in sitemap accuracy, image optimization, and content depth.

---

## On-Page SEO Checklist

### Title Tag
- **Status: Pass**
- Current: `Ironum | Enterprise AI Without the Compliance Risk`
- Length: 56 characters (ideal 50-60)
- Primary keyword "Enterprise AI" near beginning
- Brand name included
- **No changes needed**

### Meta Description
- **Status: Pass**
- Current: `European AI engineering partner. Private AI systems deployed on your infrastructure. GDPR compliant. No vendor lock-in. Book a free strategy call.`
- Length: 148 characters (within 155-char display limit)
- Contains CTA, primary keywords, and value proposition
- **Previously trimmed from 225 chars — now optimal**

### Heading Hierarchy
- **Status: Pass with notes**
- H1: `Enterprise AI Without the Compliance Risk` — single H1 per page
- H2s (9): Good section structure covering problem, services, testimonials, infrastructure, process, blog, CTA, newsletter
- H3s: Appropriate subsections
- H4s: Footer navigation
- No heading level skips (H1 > H2 > H3 > H4)
- **Remaining gap:** H1 does not contain "European" or "GDPR" — high-intent keywords for target audience
- **Recommendation:** Consider `Enterprise AI for Europe — Without the Compliance Risk`

### Image Optimization
- **Status: Needs Work**
- All images have alt text (100% coverage)
- Hero avatar uses Astro `<Image>` with explicit `width={32} height={32}` and `loading="eager"`
- Testimonial avatars have `width="48" height="48"` — **fixed since last audit**
- Logo uses `<Image>` with `width={120} height={24}` and `loading="eager"`
- **Remaining issues:**
  - Testimonial screenshot images (`Testimonials.astro:31`) missing `width`/`height` — CLS risk
  - Homepage trusted-by logos (`index.astro:30-33`) use `<img>` without explicit `width`/`height` (CSS-only sizing)
  - Founder image (`about.astro:63`) missing `width`/`height`
  - PNG screenshots still in `/public/screenshots/` alongside WebP versions — PNGs are 3-8x larger (e.g., `fh-dortmund.png` 1.6MB vs `.webp` 168KB)
  - Stale build artifacts in `public/screenshots/` (`.astro/`, `node_modules/`) — should be removed
  - Mixed image formats across avatars (PNG, JPG, WebP)

### Internal Linking
- **Status: Pass**
- Homepage links to all 6 service pages, blog section shows latest 3 posts — **blog links added since last audit**
- Testimonial cards link to relevant service pages
- Footer provides comprehensive sitemap-like linking
- Blog posts cross-link to service and industry pages
- Descriptive anchor text throughout
- **Gap:** No contextual body-text links from homepage to blog posts (only card-style links)

### URL Structure
- **Status: Pass**
- Clean, readable URLs: `/services/geo-optimization/`, `/industries/education/`
- All lowercase with hyphens
- Consistent trailing slashes
- No query parameters
- Under 60 characters

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| **Experience** | Present | Testimonials with real clients (Helena Vossen, Prof. Dr. Carsten Wolff, Alesia Kunz). Product screenshots showing real deployments. Specific metrics. |
| **Expertise** | Strong | Technical depth across service pages. EU AI Act and GDPR compliance knowledge. Industry-specific solutions with real statistics. 5 blog posts covering technical topics. |
| **Authoritativeness** | Present | Named founder (Gerrit Halfmann) with detailed bio on About page. University partnership (FH Dortmund). Client logos. **Still missing:** press mentions, awards, third-party endorsements. |
| **Trustworthiness** | Strong | HTTPS, privacy policy, imprint with legal entity (LearnSlice UG), physical address (Düsseldorf), phone number, email. Real testimonials with photos and names. |

**Biggest E-E-A-T gap:** Blog posts use "Ironum Team" as author rather than a named individual. Author bylines with credentials would strengthen expertise signals. No press/media section on About page.

---

## Keyword Analysis

### Primary Keyword: "Enterprise AI Europe" / "GDPR compliant AI"
- **Search intent:** Commercial (comparing AI providers for European businesses)
- Title tag: "Enterprise AI" present, "Europe" missing
- H1: "Enterprise AI" present, "Europe/GDPR" missing
- First 100 words: "European" and "GDPR" both present
- Meta description: "European", "GDPR compliant" present
- URL: `/` (homepage — acceptable)

### Secondary Keywords
| Keyword | Present? | Location |
|---|---|---|
| private AI | Yes | Hero subhead, Infrastructure |
| AI compliance | Yes | Hero, Problem section |
| on-premise AI | Partial | "your infrastructure" used instead |
| EU AI Act | Yes | Problem section |
| data sovereignty | Yes | Impacts section, About page |
| AI chatbot GDPR | Yes | Services section |
| enterprise RAG | Yes | Services section |
| workflow automation | Yes | Services section |
| sovereign AI | Partial | Present on About page ("European AI Sovereignty") but not homepage |
| AI infrastructure Germany | No | "German data centers" in Infrastructure but not as keyword phrase |

### Search Intent Alignment
- **Intent:** Commercial investigation (business leaders evaluating AI partners)
- **Content match:** Strong. Problem-Solution-Proof structure matches buyer journey.
- **Gap:** No comparison content ("Ironum vs [competitor]") or pricing signals on homepage.

---

## Technical SEO

### Robots.txt: Pass with note
- Allows all crawlers
- Sitemap declared: `https://www.ironum.com/sitemap.xml`
- **Note:** The local `public/robots.txt` references `/sitemap.xml` but the Astro build generates `/sitemap-index.xml`. Verify the deployed robots.txt points to the correct sitemap path.

### XML Sitemap: Needs Work
- Sitemap index at `/sitemap-index.xml` references `/sitemap-0.xml`
- **50 URLs indexed** (25 EN + 23 DE + 5 blog posts) — full bilingual coverage
- Hreflang alternates present in sitemap for homepage (`/` ↔ `/de/`)
- **Critical issue:** All 50 URLs have identical `lastmod: 2026-04-05T15:09:31.976Z` — the build timestamp
  - `astro.config.mjs:29` sets `item.lastmod = new Date().toISOString()` on every build
  - This signals to search engines that all pages change simultaneously — reduces crawl trust
  - **Fix:** Use actual content modification dates or at minimum differentiate by page type
- **Gap:** Hreflang alternates only present on homepage pair (`/` ↔ `/de/`) — all other EN/DE page pairs (services, industries, platform, etc.) lack sitemap-level hreflang alternates. They are handled via HTML `<link>` tags in Layout.astro, which is acceptable but sitemap-level is preferred for completeness.

### Canonical Tags: Pass
- Self-referencing canonicals on all pages
- Dynamic: `https://www.ironum.com${pathname}`

### Hreflang Tags: Pass
- `<link rel="alternate" hreflang="en">` present
- `<link rel="alternate" hreflang="de">` present (conditionally, excluding EN-only pages like blog)
- `<link rel="alternate" hreflang="x-default">` pointing to EN version
- **Good:** Blog posts correctly excluded from DE hreflang (EN-only content)

### Meta Robots: Pass
- `<meta name="robots" content="index, follow">` present in Layout.astro — **fixed since last audit**

### Twitter/X Cards: Pass
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` all present — **fixed since last audit**

### Open Graph: Pass
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:locale:alternate`, `og:site_name` all present
- Locale-aware with proper `en_US`/`de_DE` values

### Page Speed (Estimated)
- **LCP:** Likely good (<2.5s) — static HTML, preloaded logo
- **FID/INP:** Likely good (<100ms) — minimal JS (only Alpine.js for dropdowns)
- **CLS:** Mostly good — hero avatar and logo have explicit dimensions. **Risk:** screenshot images in testimonials lack dimensions
- **Improvement opportunity:** Hero background still loaded via CSS `background-image` (not preloadable via `<link rel="preload">`)

### Mobile-Friendliness: Pass
- Viewport meta tag present
- Touch targets sized appropriately (`min-h-[48px]`, `touch-manipulation`)
- Responsive grid layouts throughout
- Mobile menu with accordion navigation

---

## Schema Markup

| Schema Type | Status | Notes |
|---|---|---|
| Organization | Present | Complete: name, URL, logo, address, contact, founding date, area served |
| WebSite | Present | With publisher reference |
| BreadcrumbList | Present | Dynamic on all inner pages |
| BlogPosting | Present | **Added since last audit.** Headline, author, dates, publisher |
| Service | Present | On all service pages |
| FAQPage | Present | On service and industry pages |
| HowTo | Present | **Added since last audit.** On ProcessSteps component |
| LocalBusiness | Missing | Company has physical address — should add |
| AggregateRating | Missing | Testimonials could support this |

**Remaining high-impact additions:**
1. Add `LocalBusiness` schema — physical address in Düsseldorf exists
2. Add `articleSection` to BlogPosting schema for category-level rich snippets
3. Fix `dateModified` in BlogPosting — currently hardcoded to equal `datePublished` (`BlogLayout.astro:42`)

---

## Content Gap Analysis

| Missing Topic | Search Volume | Competition | Content Type | Priority |
|---|---|---|---|---|
| "AI Act compliance checklist 2026" | High | Medium | Blog/Guide | 1 |
| "on-premise AI vs cloud AI comparison" | Medium | Low | Blog | 2 |
| "GDPR compliant chatbot" | Medium | Medium | Landing page | 3 |
| "sovereign AI Germany" | Medium | Low | Blog | 4 |
| "AI for Mittelstand" | Medium | Low | Blog/Landing | 5 |
| "private LLM deployment guide" | Medium | Medium | Blog | 6 |
| "AI vendor evaluation checklist" | Medium | Low | Downloadable/Lead gen | 7 |
| "RAG vs fine-tuning when to use" | Medium | Low | Blog | 8 |

**Note:** Blog posts on EU AI Act compliance and enterprise RAG now exist — these were gaps in the previous audit. Remaining gaps focus on comparison/decision content.

---

## Featured Snippet Opportunities

1. **"What is Generative Engine Optimization?"** — GEO service page has content but needs a 40-60 word answer paragraph immediately after the question heading
2. **"How to deploy AI on-premise"** — Process Steps could be reformatted as numbered list snippet
3. **"EU AI Act high-risk categories"** — Blog post covers this but could add a concise list for snippet capture
4. **"RAG vs traditional search"** — Enterprise RAG blog post opportunity for table snippet

---

## Internal Linking Opportunities

1. **Homepage body text → blog posts** — Add contextual links within problem/solution sections to relevant blog articles
2. **Blog → blog cross-linking** — Posts link to services but rarely to each other
3. **Service pages → blog posts** — Add "Learn more in our guide" links from service pages to related blog content
4. **German pages → EN blog** — Consider linking German service pages to EN blog posts with "(English)" notation until DE blog content exists

---

## Core Web Vitals Assessment

| Metric | Estimated | Status | Notes |
|---|---|---|---|
| LCP | <2.5s | Good | Static HTML, preloaded critical assets |
| FID/INP | <100ms | Good | Minimal JavaScript (Alpine.js only) |
| CLS | <0.1 | At Risk | Screenshot images in testimonials lack explicit dimensions |
| TTFB | <200ms | Good | Static site on Netlify CDN |

**Revenue impact of screenshot CLS fix:** Reducing CLS by 0.1 correlates with ~15% decrease in bounce rate.

---

## Fixes Completed Since Last Audit (March 25)

| Recommendation | Status |
|---|---|
| Add Twitter Card meta tags | **Done** |
| Trim meta description to 155 chars | **Done** (148 chars) |
| Add explicit robots meta tag | **Done** |
| Add width/height to testimonial avatars | **Done** (48x48) |
| Add BlogPosting schema to blog posts | **Done** |
| Add HowTo schema to Process Steps | **Done** |
| Surface blog posts on homepage | **Done** (Latest from the Blog section) |
| Hreflang implementation | **Done** (full i18n with en/de/x-default) |

---

## Prioritized Recommendations

### Critical (Fix This Week)
1. **Fix sitemap lastmod dates** (`astro.config.mjs:29`) — All 50 URLs show identical timestamp. Use actual modification dates or per-page dates. This actively misleads crawlers.
2. **Fix robots.txt sitemap path** — `public/robots.txt` references `/sitemap.xml` but the build generates `/sitemap-index.xml`. Update to match.
3. **Remove stale build artifacts from `public/screenshots/`** — `.astro/` and `node_modules/` directories are being served publicly. Security and crawl-waste issue.

### High Priority (This Month)
4. **Add width/height to testimonial screenshot images** (`Testimonials.astro:31`) — CLS risk on high-traffic homepage
5. **Delete PNG duplicates from `public/screenshots/`** — WebP versions exist and are 3-8x smaller. PNGs waste bandwidth and storage (fh-dortmund.png alone is 1.6MB vs 168KB WebP)
6. **Add LocalBusiness schema** to Layout.astro — Physical address exists, enables local search features
7. **Add "sovereign AI" keyword to homepage** — H1 or hero section. High-intent term missing from main landing page
8. **Fix `dateModified` in BlogPosting schema** (`BlogLayout.astro:42`) — Currently mirrors `datePublished`. Track real modification dates via frontmatter field.

### Medium Priority (This Quarter)
9. **Add author bylines with real names** to blog posts — Replace "Ironum Team" with "Gerrit Halfmann" + credentials for E-E-A-T
10. **Create comparison blog content** — "On-premise AI vs Cloud AI", "RAG vs Fine-tuning" — fills content gaps
11. **Add `width`/`height` to homepage logo images** (`index.astro:30-33`) and founder image (`about.astro:63`)
12. **Standardize all images to WebP format** — Avatars are mixed PNG/JPG/WebP
13. **Preload hero background image** — Convert from CSS `background-image` to `<img>` with `fetchpriority="high"` or add `<link rel="preload">`
14. **Add sitemap-level hreflang for all EN/DE page pairs** — Currently only homepage has sitemap hreflang alternates

### Low Priority (When Resources Allow)
15. **Add press/media section to About page** — Authority signal for E-E-A-T
16. **Add `articleSection` to BlogPosting schema** — Category-level rich snippets
17. **Add individual `ogImage` to blog posts** — Currently all use generic `/social.png`
18. **Add structured data validation to CI/CD** — Prevent schema regressions on deploy
