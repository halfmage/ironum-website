# SEO Content Audit
## /resources/blog/rag-jira-confluence-self-hosted-eu/
### Date: 2026-10-22 (pre-publication re-check, branch `publish/rag-jira-confluence`, PR #3)

Follow-up to `SEO-AUDIT-articles-jira.md` (2026-10-08). Method: review of the source and of
the built HTML in `dist/`, plus a re-check of the Microsoft Learn pages the comparison
table relies on. No keyword volumes (no keyword tool available).

---

## SEO Health Score: 82/100 (was 70 on 2026-10-08)

Most fixes from 8 October are in: the meta description is shortened, the article has its own
OG card, the H2s now name Jira and Confluence, related posts are ranked by tags, and the
connector articles and the service page link here. Three things are still open, listed
under Prioritized Recommendations.

---

## On-Page SEO Checklist

### Title Tag
- Status: **Pass**
- Current: "RAG Over Jira and Confluence, Self-Hosted in the EU | Ironum" (60 characters)
- Primary keyword first, brand last, unique on the site.

### Meta Description
- Status: **Pass**
- Current (153): "How a private RAG system reads Jira and Confluence, keeps their permissions, cites sources and runs on EU servers you control. Architecture and timeline."

### Heading Hierarchy
- One H1, same as the title without the brand. **Pass.**
- H2s: Key Takeaways · Copilot Connector or Self-Hosted RAG? · How RAG Over Jira and Confluence Works · Three Things That Decide the Quality of a Jira and Confluence RAG · Hosting in the EU · How Long a Jira and Confluence RAG Takes to Build. **Pass.**
- Minor: "Hosting in the EU" has no topic keyword. Optional: "Where a Self-Hosted Jira and Confluence RAG Can Run".

### Image Optimization
- No images in the article body. OG card `og-rag-jira-confluence.jpg` is 1200×630, 131 KB. **Pass.**

### Internal Linking
| Link | Status |
|---|---|
| → Copilot Jira connector article | ✓ (body and Related Articles) |
| → enterprise-rag-explained | ✓ |
| → guides hub | ✓ |
| → `/services/enterprise-rag/` **in the body** | **Missing.** The only links to it are in the navigation and footer. This is the money page for the topic. |
| ← connector article (EN, DE), service page, backlog post, blog index | ✓ |
| Broken internal links | None |

**Related Articles block:** shows the connector article, the backlog refinement post and
*How to Cut Costs Without Layoffs*. The third is off-topic. It gets in only because it shares
the category: the article's tag is "Enterprise RAG", and the RAG posts are tagged "RAG",
so tag matching finds no overlap. Adding `"RAG"` to the tags fixes it, and
*Enterprise RAG Explained* or *Chatbot on Your Own Data* takes the slot.

### URL Structure
`/resources/blog/rag-jira-confluence-self-hosted-eu/`: readable, keyword-first, lowercase, hyphens, 50 characters. **Pass.**

---

## Content Quality (E-E-A-T)
| Dimension | Score | Evidence |
|---|---|---|
| Experience | Weak | No project example. The byline stays "Ironum Team" and there is no example for now (decided 2026-10-08). The two-week inputs/outputs block helps a little |
| Expertise | Present | Accurate architecture: permission layers, separate permission sync, deny-by-default, freshness measurement |
| Authoritativeness | Weak | Organization author; no named engineer |
| Trustworthiness | Strong | Honest "use the connector if it fits", disclaimer, DPO sentence instead of a legal claim |

**Fact check, 2026-10-22.** All connector claims in the comparison table still match
Microsoft Learn:
- Jira Cloud connector: Cloud only. The indexed fields list does not include comments. Page updated 30 Sep.
- Jira Data Center connector: version 8.14+. Comments and attachments only on request via Microsoft Support. Access is denied when permissions cannot be resolved. Page updated 25 Sep.
- Licensing: grounding needs the Copilot add-on or Microsoft 365 E7. Indexing is free. Page updated 25 Sep.

---

## Keyword Analysis
- **Primary keyword:** RAG over Jira and Confluence / self-hosted RAG for Jira and Confluence.
- **Search intent:** commercial investigation by technical buyers. The content matches it.
- **Placement:** title ✓, H1 ✓, URL ✓, meta ✓, first 100 words ✓ ("RAG over Jira and Confluence" is in paragraph 2), H2 ✓. Three uses in about 1,180 words, so no stuffing.
- **Secondary keywords:** Confluence RAG, permission-aware RAG, private RAG Jira, Jira knowledge base AI, AI search Jira Confluence on-premise. Only "permission" phrasing is present. "On-premise" does not appear (the article says "your own servers"). Optional: use "on-premise" once in the hosting section, because buyers search with that word.

---

## Technical SEO
- Canonical: self-referencing. Robots: index, follow. In the sitemap. **Pass.**
- hreflang: en + x-default only (no DE twin yet). Correct for now.
- No em dashes in the rendered page.

## Schema Markup
| Type | Status |
|---|---|
| BlogPosting | Present. Author: Organization; datePublished 2026-10-22 |
| FAQPage | Present, 4 questions matching the visible FAQ |
| BreadcrumbList, Organization, WebSite | Present |

## Featured Snippet Opportunities
1. **"How does RAG over Jira and Confluence work"**: the six numbered steps under the matching H2 are already list-snippet-shaped. **Pass.**
2. **"Copilot connector vs self-hosted RAG"**: the comparison table is a table-snippet candidate. **Pass.**
3. **"What is RAG over Jira and Confluence"**: the definition is only in the FAQ and the first takeaway. Optional: a 40–60 word definition right under the "How … Works" H2.

## Core Web Vitals
Static page, no body images, small scripts. No risk expected. Check PageSpeed Insights after the deploy.

---

## Prioritized Recommendations

### Before merging (5 minutes)
1. **Add a contextual body link to `/services/enterprise-rag/`**, for example in the build-time section: "…and a plan for production. How we build these systems is on the [enterprise RAG service page](/services/enterprise-rag/)." This sends topical authority to the money page.
2. **Add `"RAG"` to the tags**, so the off-topic cost-cutting post leaves Related Articles.

### This month
3. Decide on the German version (open question from the routine).
4. Submit the URL in Search Console and IndexNow after the deploy (`scripts/indexnow.mjs`).

### When possible
5. One anonymized project example as soon as there is one. This is the biggest remaining E-E-A-T gain.
6. Use "on-premise" once; add a short definition under the "How … Works" H2.
7. Next piece: Copilot vs Atlassian Rovo vs Gemini Enterprise for Jira (from the 8 October gap analysis).
