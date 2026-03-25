# GEO Audit Report: ironum.com

**Date:** 2026-03-25
**Business Type:** Agency (AI Services)
**Pages Analyzed:** 31 (sitemap) / 8 deep-analyzed
**Audit Tool:** Claude Code GEO Skill v1.0

---

## Executive Summary

### Composite GEO Score: 49/100 (Fair)

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability & Visibility | 52/100 | 25% | 13.0 |
| Brand Authority Signals | 22/100 | 20% | 4.4 |
| Content Quality & E-E-A-T | 62/100 | 20% | 12.4 |
| Technical Foundations | 72/100 | 15% | 10.8 |
| Structured Data | 34/100 | 10% | 3.4 |
| Platform Optimization | 48/100 | 10% | 4.8 |
| **TOTAL** | | | **48.8 → 49** |

### Score Interpretation
- 0-20: Critical — Virtually invisible to AI search
- 21-40: Poor — Minimal AI discoverability
- **41-60: Fair — Some AI visibility but significant gaps** ← You are here
- 61-80: Good — Solid AI presence with room for improvement
- 81-100: Excellent — Strong AI search visibility

### Top 5 Critical Issues

1. **Sitemap.xml returns 404** — robots.txt references `sitemap.xml` but it doesn't exist; actual file is `sitemap-index.xml`. Blocks page discovery across ALL search engines and AI platforms.
2. **Zero `sameAs` links in Organization schema** — AI systems cannot perform entity resolution. Ironum is invisible to knowledge graphs.
3. **No Person schema for founder/author** — Blog posts attribute authorship to "Organization" not a Person. Destroys E-E-A-T signals.
4. **No llms.txt file** — Missing the emerging standard for AI system discoverability.
5. **www vs non-www canonical mismatch** — Canonical tags reference `www.ironum.com` but site serves from `ironum.com`. Conflicting signals.

### Top 5 Quick Wins (< 1 hour each)

1. Fix robots.txt sitemap reference → `Sitemap: https://ironum.com/sitemap-index.xml`
2. Deploy `llms.txt` file (content provided below)
3. Add `sameAs` array to Organization schema (LinkedIn, GitHub, etc.)
4. Add explicit AI bot rules to robots.txt (GPTBot, ClaudeBot, PerplexityBot)
5. Update copyright year from 2025 to 2026

---

## AI Platform Readiness

| Platform | Score | Status | Biggest Gap |
|---|---|---|---|
| Google AI Overviews | 58/100 | Fair | Marketing headings instead of query-matching H2s |
| ChatGPT Web Search | 38/100 | Poor | Zero entity recognition (no sameAs, no Wikipedia) |
| Perplexity AI | 42/100 | Poor | No community validation (Reddit, forums, reviews) |
| Google Gemini | 40/100 | Poor | No Google ecosystem presence (GBP, YouTube) |
| Bing Copilot | 32/100 | Critical | No Bing Webmaster Tools, no IndexNow, no sitemap |
| **Average** | **42/100** | **Poor** | |

---

## AI Visibility Breakdown

### Citability: 68/100 (Good)

**Top citation-ready content:**
- Enterprise RAG definition (blog) — 82/100
- EU AI Act risk classification table — 79/100
- European AI sovereignty infrastructure comparison — 76/100
- Enterprise RAG use case metrics — 74/100

**Weakest content for citation:**
- Homepage hero/problem section — 38/100 (marketing copy, no data)
- Testimonial section — 28/100 (not quotable by AI)
- Services overview cards — 32/100 (taglines, not substance)

### AI Crawler Access: 90/100 (Excellent)

All major AI crawlers are allowed via blanket `User-agent: * / Allow: /`:
GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, CCBot, Amazonbot, Applebot-Extended, Cohere-ai.

**Deduction:** No explicit per-bot rules (-10). Adding named entries is best practice.

### Brand Mentions: 22/100 (Poor)

| Platform | Status |
|---|---|
| Wikipedia | Absent |
| Reddit | Absent/Minimal |
| YouTube | Absent |
| LinkedIn | Present (~20 followers) |
| G2 / Trustpilot / Capterra | Absent |
| Industry Press | Minimal (1 conference mention) |

### llms.txt: 0/100 (Missing)

No `llms.txt` file exists at `https://ironum.com/llms.txt`.

---

## Technical SEO: 72/100 (Good)

| Category | Score | Status |
|---|---|---|
| Server-Side Rendering | 98/100 | Excellent — Astro SSG, full HTML in initial response |
| URL Structure | 95/100 | Excellent — clean, descriptive, consistent trailing slashes |
| Mobile Optimization | 90/100 | Excellent — responsive, touch-friendly |
| Meta Tags & Indexability | 82/100 | Good — complete OG/Twitter, proper canonicals |
| Response & Status | 75/100 | Good — Netlify CDN, proper redirects |
| Core Web Vitals Risk | 65/100 | Fair — hero background not preloaded, 7 images missing dimensions |
| Crawlability | 50/100 | Fair — broken sitemap reference, www/non-www mismatch |
| Security Headers | 40/100 | Poor — missing CSP, X-Frame-Options, X-Content-Type-Options |

### Critical Technical Issues

1. **Sitemap reference in robots.txt points to 404** — `sitemap.xml` doesn't exist, actual file is `sitemap-index.xml`
2. **www/non-www canonical mismatch** — canonical tags use `www.ironum.com`, site serves from `ironum.com`
3. **All 31 sitemap URLs use wrong domain** — `www.ironum.com` URLs all require 301 redirect
4. **Missing security headers** — No CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
5. **Hero background image not optimized for LCP** — PNG via CSS background-image, not preloaded

---

## Content Quality & E-E-A-T: 62/100 (Fair)

| Dimension | Score |
|---|---|
| Experience | 10/25 — Hypothetical scenarios, no real case studies |
| Expertise | 13/25 — Good technical knowledge, but anonymous "Ironum Team" authorship |
| Authoritativeness | 10/25 — Very young company, no external citations, small client base |
| Trustworthiness | 19/25 — Strong: HTTPS, imprint, privacy policy, physical address, DPA/NDA |

### Content Metrics

| Page | Words | Depth |
|---|---|---|
| Homepage | ~1,200 | Standard |
| Enterprise RAG Service | ~1,800 | Good |
| Enterprise RAG Blog | ~2,300 | Strong |
| EU AI Act Blog | ~2,200 | Strong |
| Legal Industry | ~2,200 | Strong |
| About Page | ~400 | **Thin** |

### Key Content Gaps

- No real case studies (all scenarios are hypothetical)
- No named author on blog posts ("Ironum Team")
- No external citations for statistical claims
- No original research or proprietary data
- About page severely underdeveloped (~400 words)
- No visual content (diagrams, architecture illustrations, screenshots)
- Only 5 blog posts total

---

## Structured Data: 34/100 (Poor)

### What Exists (Good)
- Organization schema with address, contact, founding date ✓
- WebSite schema ✓
- Service schema on service pages ✓
- BlogPosting schema on blog posts ✓
- BreadcrumbList on service/blog/industry pages ✓
- FAQPage on legal industry page ✓
- All in JSON-LD format, server-rendered ✓

### What's Missing (Critical)
- **sameAs links** — 0 external profiles linked (0/100 entity resolution)
- **Person schema** — Founder has no structured identity anywhere
- **speakable property** — No content marked for AI assistant consumption
- **Blog author is Organization, not Person** — Kills E-E-A-T signals
- **HowTo schema still active** — Deprecated by Google Sep 2023, adds dead weight
- **FAQPage schema missing on service pages** — FAQ content exists but isn't marked up
- **Post-specific images missing** — All blog posts use generic `social.png`

---

## Prioritized Action Plan

### CRITICAL (Fix Immediately — Blocks Indexing/Visibility)

| # | Action | Impact | Effort | Affects |
|---|---|---|---|---|
| 1 | Fix robots.txt sitemap reference to `sitemap-index.xml` | All platforms lose page discovery | 5 min | All 5 platforms |
| 2 | Resolve www/non-www — align canonical, sitemap, OG URLs to `ironum.com` | Conflicting signals across all engines | 30 min | All 5 platforms |
| 3 | Add `sameAs` to Organization schema (LinkedIn, GitHub, etc.) | Zero entity recognition without this | 15 min | ChatGPT, Gemini, Copilot |
| 4 | Add Person schema for Gerrit Halfmann (founder + blog author) | No author identity = no E-E-A-T | 30 min | All 5 platforms |
| 5 | Fix BlogPosting author from Organization to Person | Google explicitly penalizes this | 15 min | Google AIO, ChatGPT, Perplexity |

### HIGH (Fix Within 1 Week)

| # | Action | Impact | Effort |
|---|---|---|---|
| 6 | Deploy `llms.txt` file | +7-10 points on composite score | 10 min |
| 7 | Add explicit AI bot rules to robots.txt | Signals cooperation with AI crawlers | 10 min |
| 8 | Add security headers via Netlify config | Trust signals + security | 30 min |
| 9 | Register Bing Webmaster Tools + implement IndexNow | Bing/Copilot currently blind | 30 min |
| 10 | Create Google Business Profile for Dusseldorf office | Feeds Gemini knowledge graph | 30 min |
| 11 | Add FAQPage schema to all service pages with FAQ sections | FAQ content exists but isn't marked up | 1 hr |
| 12 | Remove deprecated HowTo schema from ProcessSteps component | Dead weight, removed by Google Sep 2023 | 10 min |
| 13 | Add `speakable` property to BlogPosting schema | Marks content as AI-assistant-ready | 15 min |

### MEDIUM (Fix Within 1 Month)

| # | Action | Impact | Effort |
|---|---|---|---|
| 14 | Replace hypothetical scenarios with real case studies | Experience is 10/25, needs real proof | 1 week |
| 15 | Expand about page from 400 to 1,000+ words | Thinnest page on site, critical for E-E-A-T | 2 hrs |
| 16 | Add external citations to all blog posts | Zero outbound links undermines trustworthiness | 2 hrs |
| 17 | Rewrite service page H2s from marketing to query-matching format | Google AIO extracts query-matching headings | 2 hrs |
| 18 | Add comparison tables (RAG vs Fine-Tuning, deployment models) | AIO frequently extracts tables | 2 hrs |
| 19 | Add `width`/`height` to 7 images missing dimensions | CLS risk | 30 min |
| 20 | Preload hero background image + convert to WebP | LCP improvement | 30 min |
| 21 | Add named author bylines to blog posts (visible on page) | "Ironum Team" → "Gerrit Halfmann, Founder" | 30 min |
| 22 | Use post-specific images instead of generic social.png | Schema accuracy + visual richness | 1 hr |
| 23 | Create LinkedIn company page content strategy (weekly posts) | Brand mentions score is 22/100 | Ongoing |

### STRATEGIC (1-3 Months)

| # | Action | Impact | Effort |
|---|---|---|---|
| 24 | Publish original research ("State of AI in German SMEs 2026") | Makes Ironum a primary citable source | 2 weeks |
| 25 | Create YouTube channel with 3-5 educational videos | Feeds Gemini, adds multi-format signals | 2 weeks |
| 26 | Create Crunchbase, G2, Capterra profiles | Entity presence on review platforms | 2 hrs |
| 27 | Seed community presence (Reddit r/artificial, Stack Overflow) | Perplexity indexes Reddit heavily | Ongoing |
| 28 | Establish 2-4 posts/month publishing cadence | 5 posts total is thin for topical authority | Ongoing |
| 29 | Add diagrams/architecture visuals to blog posts and services | No visual content currently | 1 week |
| 30 | Pursue guest posts on t3n, Gruenderszene, AI publications | External authority signals | Ongoing |

---

## Recommended llms.txt Content

Deploy as `public/llms.txt`:

```markdown
# Ironum

> Full-service AI development partner for European businesses. We build sovereign AI systems on European infrastructure — enterprise RAG, workflow automation, chatbots, custom LLM fine-tuning, and AI consulting. GDPR compliant, deployed on your infrastructure, no vendor lock-in.

## Services

- [Enterprise RAG Solutions](https://ironum.com/services/enterprise-rag/): Private document AI using Retrieval-Augmented Generation. Deployed on-premises or EU cloud. Supports PDF, DOCX, email, SharePoint, Confluence. 4-8 week deployment.
- [AI Consulting & Audits](https://ironum.com/services/ai-consulting/): Technical AI audits, readiness assessments, and EU AI Act compliance planning. Engineer-led, not management consulting.
- [Workflow Automation](https://ironum.com/services/workflow-automation/): Self-hosted n8n workflow automation with 400+ integrations. GDPR compliant, zero per-execution fees.
- [AI Assistants & Chatbots](https://ironum.com/services/chatbot-interfaces/): Customer-facing and internal AI assistants. Multi-channel, branded, private infrastructure.
- [LLM Fine-Tuning](https://ironum.com/services/llm-fine-tuning/): Custom AI models trained on industry-specific data. Open-source foundations (Llama, Mistral). No per-query API costs.
- [GEO Optimization](https://ironum.com/services/geo-optimization/): AI search visibility optimization for ChatGPT, Perplexity, and AI-powered search engines.

## Industries

- [Legal](https://ironum.com/industries/legal/): Document review, contract analysis, compliance monitoring for law firms.
- [Manufacturing](https://ironum.com/industries/manufacturing/): Industry 4.0 AI integration, quality control, predictive maintenance.
- [Healthcare](https://ironum.com/industries/healthcare/): Patient data processing on sovereign infrastructure, GDPR Article 9 compliant.
- [Financial Services](https://ironum.com/industries/financial-services/): KYC/AML screening, transaction monitoring, regulatory compliance.
- [Education](https://ironum.com/industries/education/): Learning platforms, assessment tools, institutional knowledge management.
- [Public Sector](https://ironum.com/industries/public-sector/): Sovereign infrastructure for government document processing.

## Resources

- [Enterprise RAG Guide](https://ironum.com/resources/blog/enterprise-rag-explained/): Non-technical guide to RAG for enterprise decision makers.
- [EU AI Act Checklist](https://ironum.com/resources/blog/eu-ai-act-compliance-checklist/): 6-step compliance checklist for German SMEs.
- [European AI Sovereignty](https://ironum.com/resources/blog/european-ai-sovereignty/): Analysis of Europe's AI infrastructure dependence.
- [GDPR-Compliant AI Guide](https://ironum.com/resources/blog/gdpr-compliant-ai-guide/): GDPR requirements for enterprise AI deployment.

## Company

- Legal entity: LearnSlice UG (haftungsbeschrankt)
- Location: Dusseldorf, Germany
- Founded: 2024
- Service area: Europe
- Contact: info@ironum.com
```

---

## Recommended robots.txt Update

```
User-agent: *
Allow: /

# AI Search Crawlers - Explicitly Allowed
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://ironum.com/sitemap-index.xml
```

---

## Key Source Files to Modify

| File | Changes Needed |
|---|---|
| `public/robots.txt` | Fix sitemap reference, add AI bot rules |
| `public/llms.txt` | Create new file |
| `src/layouts/Layout.astro` | Add sameAs, Person schema, fix www references |
| `src/layouts/BlogLayout.astro` | Fix author to Person, add speakable |
| `src/components/sections/ProcessSteps.astro` | Remove deprecated HowTo schema |
| `src/pages/about.astro` | Expand content, add custom structured data |
| `src/pages/services/*.astro` | Add FAQPage schema to pages with FAQ sections |
| `astro.config.mjs` | Update site URL to `https://ironum.com` (non-www) |
| `netlify.toml` or `public/_headers` | Add security headers |

---

*Report generated by Claude Code GEO Skill — 2026-03-25*
