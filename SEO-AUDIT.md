# SEO Content Audit
## https://www.ironum.com (current branch)
### Date: 2026-03-25

---

## SEO Health Score: 82/100

Strong technical foundation with well-implemented structured data and on-page elements. Key gaps are in social meta tags, heading keyword alignment, and content freshness signals.

---

## On-Page SEO Checklist

### Title Tag
- **Status: Pass**
- Current: `Ironum | Enterprise AI Without the Compliance Risk`
- Length: 56 characters (ideal range 50-60)
- Includes brand name and primary value proposition
- Primary keyword "Enterprise AI" appears early
- **No changes needed** -- this is well-optimized

### Meta Description
- **Status: Pass**
- Current: `European AI engineering partner. We build private AI systems, including knowledge search, automation, chatbots, and custom models, deployed on your infrastructure. GDPR compliant. No vendor lock-in. Book a free strategy call.`
- Length: ~225 characters -- **slightly over the 160-char display limit**
- Contains CTA ("Book a free strategy call")
- **Recommendation:** Trim to 155 characters:
  - `European AI engineering partner. Private AI systems deployed on your infrastructure. GDPR compliant. No vendor lock-in. Book a free strategy call.` (148 chars)

### Heading Hierarchy
- **Status: Pass with notes**
- H1: `Enterprise AI Without the Compliance Risk` -- 1 H1 per page (correct)
- H2s (7): Good section structure
- H3s (20): Appropriate subsection detail
- H4s (4): Footer navigation (appropriate)
- **Issue:** H1 does not contain "European" or "GDPR" which are high-intent keywords for the target audience. Consider: `Enterprise AI for Europe -- Without the Compliance Risk`
- **Issue:** No heading skips detected (H1 > H2 > H3 > H4) -- clean hierarchy

### Image Optimization
- **Status: Needs Work**
- All images have alt text (100% compliance)
- Hero background loaded via CSS `background-image` -- not indexable by image search
- Avatar images (Gerrit, testimonials) have good alt text
- Infrastructure diagram has descriptive alt text
- **Issues:**
  - Screenshot images (`/screenshots/*.png`) are unoptimized PNGs -- should be WebP
  - Avatar images are mixed formats (PNG, JPG, WebP) -- standardize to WebP
  - No `srcset` or `<picture>` elements for responsive images
  - Logo overlay has generic alt text "Ironum AI Core logo overlay"

### Internal Linking
- **Status: Pass**
- 56 internal links on homepage
- Descriptive anchor text throughout (no "click here")
- Deep linking to all service and industry pages
- Testimonial cards link to relevant service pages
- **Strength:** Good cross-linking between services and industries
- **Gap:** No links to blog posts from homepage. Blog content should be surfaced for topical authority.

### URL Structure
- **Status: Pass**
- Clean, readable URLs: `/services/geo-optimization/`, `/industries/education/`
- All lowercase with hyphens
- Consistent trailing slashes
- No query parameters
- Under 60 characters for all URLs

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| **Experience** | Present | Testimonials with real clients (Helena Vossen, Prof. Dr. Carsten Wolff, Alesia Kunz). Product screenshots showing real deployments. Specific metrics from client work. |
| **Expertise** | Strong | Technical depth across service pages. EU AI Act and GDPR compliance knowledge demonstrated. Industry-specific solutions with real statistics. |
| **Authoritativeness** | Present | Named founder (Gerrit Halfmann) appears in CTAs. University partnership (FH Dortmund). Client logos. However, no press mentions, awards, or third-party endorsements visible. |
| **Trustworthiness** | Strong | HTTPS, privacy policy, imprint with legal entity (LearnSlice UG), physical address (Dusseldorf), phone number, email. Real testimonials with photos. |

**Biggest E-E-A-T gap:** No author bylines on blog posts, no "About the Team" section with credentials, no press/media section. Adding these would strengthen authority signals.

---

## Keyword Analysis

### Primary Keyword: "Enterprise AI Europe" / "GDPR compliant AI"
- **Search intent:** Commercial (comparing AI providers for European businesses)
- Title tag: "Enterprise AI" present, "Europe" missing
- H1: "Enterprise AI" present, "Europe/GDPR" missing
- First 100 words: "European" and "GDPR" both present
- Meta description: "European", "GDPR compliant" present
- URL: `/` (homepage, no keyword in URL -- acceptable)

### Secondary Keywords (should appear naturally across homepage)
| Keyword | Present? | Location |
|---|---|---|
| private AI | Yes | Hero subhead, Infrastructure |
| AI compliance | Yes | Hero, Problem section |
| on-premise AI | Partial | "your infrastructure" used instead |
| EU AI Act | Yes | Problem section |
| data sovereignty | Yes | Impacts section |
| AI chatbot GDPR | Yes | Services section |
| enterprise RAG | Yes | Services section |
| workflow automation | Yes | Services section |
| sovereign AI | No | Missing from homepage -- add to hero or infrastructure |
| AI infrastructure Germany | No | Missing -- "German data centers" appears in Infrastructure but not as keyword phrase |

### Search Intent Alignment
- **Intent:** Commercial investigation (business leaders evaluating AI partners)
- **Content match:** Strong. Problem-Solution-Proof structure matches buyer journey.
- **Gap:** No comparison content ("Ironum vs [competitor]") or pricing signals on homepage.

---

## Technical SEO

### Robots.txt: Pass
- Allows all crawlers, no important pages blocked
- Sitemap declared: `https://www.ironum.com/sitemap.xml`

### XML Sitemap: Pass with notes
- 31 URLs indexed across all page types
- Auto-generated by Astro sitemap integration
- **Missing:** `<lastmod>` dates -- add these for crawl prioritization
- **Missing:** `<priority>` values -- not critical but helpful

### Canonical Tags: Pass
- Self-referencing canonicals on all pages
- Dynamic generation: `https://www.ironum.com${pathname}`

### Meta Robots: Needs Work
- **No explicit `<meta name="robots" content="index, follow">` tag**
- Pages are indexable by default, but explicit declaration is best practice
- Add to Layout.astro

### Twitter/X Cards: Fail
- **No Twitter Card meta tags found**
- Missing: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- OG tags provide fallback, but explicit Twitter tags improve sharing appearance
- **Fix:** Add `<meta name="twitter:card" content="summary_large_image">` and corresponding tags

### Hreflang: Not Applicable (currently)
- Single-language site (English)
- Note: If German content is planned, hreflang tags will be needed

---

## Schema Markup

| Schema Type | Status | Notes |
|---|---|---|
| Organization | Present | Complete with address, contact, logo |
| WebSite | Present | With publisher reference |
| Service | Present | On all service pages |
| FAQPage | Present | On service and industry pages (rich snippet eligible) |
| BreadcrumbList | Present | Dynamic on all inner pages |
| LocalBusiness | Missing | Consider adding -- company has physical address |
| BlogPosting | Missing | Blog posts lack article schema with datePublished, author |
| AggregateRating | Missing | No review schema (testimonials could support this) |
| HowTo | Missing | Process Steps section could use HowTo schema |

**High-impact additions:**
1. Add `BlogPosting` schema to blog posts with `datePublished`, `dateModified`, `author`
2. Add `HowTo` schema to Process Steps for rich snippet eligibility
3. Consider `Review` or `AggregateRating` schema for testimonials

---

## Content Gap Analysis

| Missing Topic | Search Volume | Competition | Content Type | Priority |
|---|---|---|---|---|
| "AI Act compliance checklist 2026" | High | Medium | Blog/Guide | 1 |
| "on-premise AI vs cloud AI comparison" | Medium | Low | Blog | 2 |
| "GDPR compliant chatbot" | Medium | Medium | Landing page | 3 |
| "sovereign AI Germany" | Medium | Low | Blog | 4 |
| "enterprise RAG deployment guide" | Medium | Low | Blog/Guide | 5 |
| "AI for Mittelstand" | Medium | Low | Blog/Landing | 6 |
| "n8n workflow automation examples" | High | Medium | Blog | 7 |
| "private LLM deployment" | Medium | Medium | Blog | 8 |

---

## Featured Snippet Opportunities

1. **"What is Generative Engine Optimization?"** -- GEO page has the content but needs a concise 40-60 word answer paragraph directly after the question heading
2. **"SEO vs GEO comparison"** -- Table already exists on GEO page, strong snippet candidate
3. **"How to deploy AI on-premise"** -- Process Steps could be reformatted as a numbered list snippet
4. **"EU AI Act high-risk categories"** -- Education page mentions this but could be expanded into a list snippet

---

## Core Web Vitals Assessment

**Estimated performance (Astro static site with Tailwind):**
- **LCP:** Likely good (<2.5s) -- static HTML, preloaded critical resources
- **FID/INP:** Likely good (<100ms) -- minimal JavaScript (only Alpine.js)
- **CLS:** Likely good (<0.1) -- most images have dimensions set

**Potential issues:**
- Hero background loaded via CSS `background-image` -- not preloaded
- Screenshot PNGs are large -- convert to WebP for faster load
- No explicit `width`/`height` on testimonial avatar `<img>` tags (potential CLS)

---

## Prioritized Recommendations

### Critical (Fix This Week)
1. **Add Twitter Card meta tags to Layout.astro** -- 5 min fix, improves every social share
2. **Trim meta description to 155 characters** -- prevents truncation in SERPs
3. **Add explicit robots meta tag** -- `<meta name="robots" content="index, follow">`
4. **Add width/height attributes to testimonial avatar images** -- prevents CLS

### High Priority (This Month)
5. **Convert all PNG screenshots to WebP** -- significant page speed improvement
6. **Add BlogPosting schema to blog posts** -- enables rich snippets (date, author)
7. **Add HowTo schema to Process Steps** -- rich snippet opportunity
8. **Add "sovereign AI" keyword to homepage** -- missing high-intent keyword
9. **Link to 2-3 blog posts from homepage** -- builds topical authority signal

### Medium Priority (This Quarter)
10. **Add lastmod dates to sitemap** -- helps crawl prioritization
11. **Create comparison content** -- "on-premise AI vs cloud AI" blog post
12. **Add author bylines and bios to blog posts** -- E-E-A-T signal
13. **Add LocalBusiness schema** -- since physical address exists
14. **Standardize image formats to WebP** -- avatars are mixed PNG/JPG/WebP

### Low Priority (When Resources Allow)
15. **Add press/media section to About page** -- authority signal
16. **Create FAQ schema on homepage** -- if FAQ content is added
17. **Optimize hero background for preloading** -- convert from CSS background-image to `<img>` with fetchpriority="high"
18. **Add structured data testing to CI/CD** -- prevent schema regressions
