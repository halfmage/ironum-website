# SEO Content Audit
## Draft articles: Copilot Jira connector + RAG over Jira and Confluence
### Date: 2026-10-08 (pre-publication, local render of the drafts)

| Article | URL | Words (page) | Score |
|---|---|---|---|
| What the Copilot Jira Connector Can and Cannot Read | `/resources/blog/copilot-jira-connector-what-it-reads/` | ~2,000 | **78/100** |
| RAG Over Jira and Confluence, Self-Hosted in the EU | `/resources/blog/rag-jira-confluence-self-hosted-eu/` | ~1,600 | **70/100** |

Method: `analyze_page.py` against `astro preview` with both drafts temporarily set to
`draft: false`, manual review of source and HTML, and live SERP checks on 2026-10-08. There
are no search volumes here because no keyword tool was available.

---

## Verdict

Both drafts are publishable after a short list of fixes. Article 1 targets a query where
the SERP is almost entirely Microsoft's own documentation plus vendor pages (Atlassian Rovo,
Google Gemini Enterprise). Nobody brings the facts together into one comparison with a license
table, which is a clear opening. Article 2 targets a query with **no direct answer in the
SERP** (results are Jira-alternative listicles and tool directories), so even a modest page
can rank. Its weakness is that it is less specific than article 1.

---

## On-Page SEO Checklist

### Title Tags
| Article | Current | Len | Status |
|---|---|---|---|
| 1 | What the Copilot Jira Connector Can and Cannot Read \| Ironum | 60 | **Pass**: keyword first, fits |
| 2 | RAG Over Jira and Confluence, Self-Hosted in the EU \| Ironum | 60 | **Pass** |

### Meta Descriptions
| Article | Len | Status | Note |
|---|---|---|---|
| 1 | 156 | **Pass** | Keyword, both connectors, the license hook |
| 2 | 196 | **Fail**: truncated | Recommended (154): "How a private RAG system reads Jira and Confluence, keeps their permissions, cites sources and runs on EU servers you control. Architecture and timeline." |

### Headings
- One H1 each, matching the title. **Pass.**
- Article 1 H2s carry the query language well ("Two Connectors, Not One", "The License Question…", "What the Connector Actually Reads"). **Needs work, minor:** "Freshness" and "Permissions: Safe, Sometimes Too Safe" carry no keyword. Suggested: "How Fresh Is Jira Data in Copilot?" and "Does the Jira Connector Respect Jira Permissions?" These match People-Also-Ask phrasing and the FAQ.
- Article 2: "Connector or Own System?" → "Copilot Connector or Self-Hosted RAG?"; "What It Takes" → "How Long a Jira and Confluence RAG Takes to Build".

### Images
No in-article images in either. Article 1 reuses the PO guide's OG image; article 2 has
**no `ogImage`** and falls back to the generic `/social.png`. Both articles have tables, which
work well for snippets, so a chart is optional. A dedicated OG card for each is not.

### Internal Linking
| Link | Art. 1 | Art. 2 |
|---|---|---|
| → `/services/enterprise-rag/` | ✓ | ✓ |
| → PO guide / guides hub | ✓ | ✓ |
| → each other | **Missing** (1 → 2) | ✓ (2 → 1) |
| → `enterprise-rag-explained` | Missing | **Missing** (natural fit for "What RAG is") |
| ← from the backlog refinement post | **Missing**: its connector sentence should link to article 1 on publish | — |
| ← from `/services/enterprise-rag/` | Missing | **Missing**: this is the money page for article 2 |

**"Related Articles" block is off-topic.** `BlogLayout` picks the first three posts in the
same `category` ("implementation"), so both drafts show *Cost cutting without layoffs* and
*Chatbot on your own data* instead of each other and the backlog post. Fix it in the layout:
rank related posts by tag overlap first, then by category.

### URLs
`copilot-jira-connector-what-it-reads` and `rag-jira-confluence-self-hosted-eu`: readable,
keyword-first, under 60 characters. **Pass.**

---

## Content Quality (E-E-A-T)

| Dimension | Art. 1 | Art. 2 | Evidence |
|---|---|---|---|
| Experience | Present | **Weak** | Art. 1 has the product-team checklist from the author's role. Art. 2 has no example from a real project; the internal note flags that |
| Expertise | **Strong** | Present | Art. 1 cites 5 Microsoft Learn pages, dated, and points out Microsoft's own version contradiction. Art. 2 is correct but generic |
| Authoritativeness | Present | Weak | Art. 1 is by Alesia (Person schema, About link). Art. 2 is by "Ironum Team", which schema maps to the Organization, with no named engineer |
| Trustworthiness | **Strong** | Strong | Honest "use the connector if it fits", disclaimer on art. 2, sources section on art. 1 |

**Biggest lift for article 2:** a named technical author (Gerrit) and one concrete example,
even anonymized ("a 40-person product org, 3 Jira projects, 1,200 Confluence pages: what
we indexed, what permission edge cases we hit"). That is the experience signal the page lacks.

---

## Keyword Analysis

### Article 1
- **Primary:** Copilot Jira connector. Present in title, H1, URL, meta and first section. **Pass.**
- **Intent:** informational and evaluative (admins and PMs deciding whether it works for them). Matches.
- **Secondary to work in:** "Microsoft 365 Copilot Jira integration", "Jira Data Center Copilot", "Copilot connector license", "Copilot Jira comments", "Copilot connectors Jira Server". Most are already in the body; "Microsoft 365 Copilot Jira integration" appears nowhere and is the common phrasing.
- **SERP (2026-10-08):** Microsoft Learn pages (several locale copies), Atlassian's "Connect Jira Data Center to Rovo", Google's Gemini Enterprise Jira DC docs, MCP server listings. No independent explainer. **Winnable.**

### Article 2
- **Primary:** RAG Jira Confluence / self-hosted RAG for Jira and Confluence. Title, H1 and URL pass. The phrase "RAG over Jira and Confluence" appears in the H1 but not in the body text.
- **Intent:** commercial investigation (technical buyers). Matches. The CTA comes late and stays low-key, which is correct.
- **Secondary:** "Confluence RAG", "private RAG Jira", "Jira knowledge base AI", "AI search Jira Confluence on-premise", "permission-aware RAG".
- **SERP:** no direct answers, only Jira-alternative listicles and tool directories. **Open field.**

### Cannibalisation check
The backlog refinement post's FAQ "Can Microsoft Copilot read my Jira backlog?" overlaps
article 1's "Can Microsoft 365 Copilot read Jira?". When publishing, shorten the refinement
post's answer to two sentences ending in a link to article 1, so article 1 owns the query.

---

## Technical SEO
- Drafts are now excluded from routes and the sitemap (fixed earlier today). On publish they get `lastmod` from `publishDate`.
- Canonical, robots, breadcrumbs and BlogPosting schema are inherited from `BlogLayout`. **Pass.**
- FAQPage schema: 5 questions (art. 1) and 4 questions (art. 2). **Pass.** Google shows FAQ rich results only for authoritative government and health sites, but AI answer engines use the markup.
- Article 1 author schema resolves to `#person-alesia`. Article 2 resolves to the Organization.

---

## Content Gap Analysis

| Missing topic | Volume | Competition | Type | Priority |
|---|---|---|---|---|
| Copilot vs Atlassian Rovo vs Gemini Enterprise for Jira | Med | Low (vendor pages only) | Comparison post | 1 |
| Copilot Confluence connector: what it reads (pages, blogs, attachments; permission lag) | Med | Low | Blog, twin of art. 1 | 2 |
| Azure DevOps and Copilot: what it can read | Med | Low–Med | Blog | 3 |
| Permission-aware RAG explained | Low | Low | Blog → enterprise RAG | 3 |

The SERP shows that Atlassian (Rovo, Teamwork Graph) and Google (Gemini Enterprise) both now
offer Jira Data Center connections. A neutral comparison is the obvious next piece. It
needs its own fact-check before writing.

---

## Featured Snippet Opportunities
1. **"Can Copilot read Jira?"**: article 1 opens on a scene, not an answer. Add a 45-word answer as the first paragraph under the H1 ("Yes, through a connector, but only with…").
2. **"Copilot Jira connector license"**: the license table is already a strong table-snippet candidate. Keep it as an HTML table and add a one-line summary above it.
3. **"Does the Copilot Jira connector index comments?"**: answer it directly in an H2 phrased as the question.
4. **Article 2, "how does RAG over Jira work"**: the six-step list is snippet-shaped already. Phrase the H2 as "How RAG Over Jira and Confluence Works".

---

## Core Web Vitals
Static pages, no images, two small scripts. No risk expected. Verify in PageSpeed Insights after deploy.

---

## Content Strategy
1. **Publish order:** article 1 first, with the backlog post's FAQ trimmed and linked, then article 2 one to two weeks later, then link 1 → 2.
2. **Distribution:** article 1 is a strong LinkedIn piece for Alesia (the "connector deployed, Copilot still blind" license trap). Article 2 suits Gerrit's profile.
3. **Refresh:** Microsoft's connector docs changed in August and September 2026. Re-check article 1 every quarter and bump `updatedDate`.

---

## Prioritized Recommendations

### Critical (before publishing)
1. Shorten article 2's meta description (196 → ~154 characters).
2. Give article 2 an OG image; give article 1 its own (both now reuse or fall back).

### High
3. Add a 40–60 word direct answer at the top of article 1.
4. Fix the "Related Articles" logic (tags before category) so each draft shows the other plus the backlog post.
5. On publish: link the backlog post → art. 1 and trim its overlapping FAQ; link `/services/enterprise-rag/` → art. 2; link art. 1 → art. 2.
6. Add a named author and one concrete example to article 2.

### Medium
7. Rename the keyword-less H2s (see Headings).
8. Work "Microsoft 365 Copilot Jira integration" into article 1 and "RAG over Jira and Confluence" into article 2's body.
9. Link article 2's step 1 to `enterprise-rag-explained` for readers who are new to RAG.

### Low
10. The comparison post (Copilot vs Rovo vs Gemini Enterprise for Jira) as the next piece.
