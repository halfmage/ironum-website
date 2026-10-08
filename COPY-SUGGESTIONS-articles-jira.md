# Copy Analysis & Suggestions: Jira articles (drafts)
**Date:** 2026-10-08
**Page Type:** Blog posts (educate, then capture leads)
**Copy Score:** Article 1 **72/100**, Article 2 **62/100**

- Article 1: `copilot-jira-connector-what-it-reads.mdx` (Alesia Kunz)
- Article 2: `rag-jira-confluence-self-hosted-eu.mdx` (Ironum Team)

---

## Executive Summary

Article 1 is the stronger piece. It has one sharp insight that most readers will not know:
the connector can be live and Copilot still blind, because grounding needs the add-on
license. It backs every claim with Microsoft's own pages and has a checklist a product
owner can act on today. It loses points in two places: the opening paragraph sets a scene
but takes three sentences to reach the answer, and the only conversion points are two
inline links near the end.

Article 2 has a good opening question ("why did we drop offline mode…?"), an honest
comparison table, and a clear six-step explanation. But it reads as a description of RAG in
general rather than of Ironum doing it. There is no example, no named engineer, and no
picture of what a buyer gets after two weeks. For a page whose job is to start a project
conversation, that is the gap.

Both articles share one fix: a visible callout CTA (the same box style the backlog post
uses) instead of a link inside a paragraph.

---

## Voice & Tone Profile

| Dimension | Art. 1 | Art. 2 | Note |
|---|---|---|---|
| Formality | 3/5 | 3/5 | Plain professional, matches the guides |
| Emotion | 3/5 | 2/5 | Art. 1 has the "license trap" tension; art. 2 is flatter |
| Complexity | 3/5 | 4/5 | Art. 2 leans technical (vector, embedding), fine for its buyer |
| Humor | 1/5 | 1/5 | Correct |
| Authority | 4/5 | 3/5 | Art. 2 lacks a person behind the expertise |

Keep the evidence-led, no-hype voice. It matches the LinkedIn voice notes and the guides.

---

## Score Breakdown

### Article 1: 36/50
| Dimension | Score | Why |
|---|---|---|
| Clarity | 9 | Two tables do the heavy lifting; plain sentences |
| Persuasion | 7 | The license insight persuades; the bridge to Ironum is fair but late |
| Specificity | 9 | Versions, crawl intervals, roles, license matrix, a dated source check |
| Emotion | 6 | Opens on recognition, then becomes documentation-flat in "Permissions" and "Freshness" |
| Action | 5 | Two inline links at the end; no mid-article CTA for readers who leave early |

### Article 2: 31/50
| Dimension | Score | Why |
|---|---|---|
| Clarity | 8 | Steps are clear; "embedding" and "vector" are explained only by context |
| Persuasion | 6 | Honest comparison, but no proof that Ironum has done this |
| Specificity | 6 | Timeline only; nothing about scope, inputs or deliverables |
| Emotion | 6 | Strong opening question, then generic |
| Action | 5 | Inline link only; no "what we need from you" to lower the barrier |

---

## Value Proposition Analysis

| | Article 1 | Article 2 |
|---|---|---|
| Target customer | PMs, POs and the IT admin they ask | Engineering and IT leads, heads of product |
| Problem | "Connector is set up, Copilot still knows nothing" | Knowledge split across Jira and Confluence; connector does not fit |
| Solution | Check four things; paste-in method meanwhile; own RAG if needed | Permission-aware, cited, self-hosted RAG |
| Unique mechanism | **Clear**: the license matrix plus "comments not indexed" | **Weak**: generic architecture; no Ironum-specific method |
| Key benefit | Stop wasting time on a setup that cannot work | **Missing as a sentence**: "answers in seconds, with links, without exposing what people may not see" |
| Proof | Microsoft docs | **Missing**: no example, no person |

---

## Headline Recommendations

H1s should keep their keyword-first form for SEO. The alternatives are for the H1 where
noted, otherwise for the LinkedIn post and the social card.

### Article 1 (current: "What the Copilot Jira Connector Can and Cannot Read")
1. **"Your Copilot Jira Connector Is Live. Why Can't Copilot See Jira?"** (PAS; for LinkedIn and the OG card)
2. "What the Copilot Jira Connector Can and Cannot Read" (current; keep as H1)
3. "The Copilot Jira Connector: Two Versions, One License Trap" (curiosity)
4. "Copilot and Jira: What the Connector Reads, Skips and Costs" (4U)
5. "Before You Blame the Jira Connector, Check Your Copilot License" (PAS)

### Article 2 (current: "RAG Over Jira and Confluence, Self-Hosted in the EU")
1. **"Ask Jira and Confluence Anything, With Sources, On Your Own Servers"** (benefit-led; for LinkedIn and the OG card)
2. "RAG Over Jira and Confluence, Self-Hosted in the EU" (current; keep as H1)
3. "When the Copilot Connector Isn't Enough: Self-Hosted RAG for Jira and Confluence" (bridge from article 1)
4. "One Question, Jira and Confluence, Every Answer Cited" (4U)
5. "From an Hour of Searching to an Answer With Links" (Before-After-Bridge)

---

## Section-by-Section Copy Suggestions

### Article 1: opening
**Before:**
> You set up the Jira connector, or someone in IT did, and Copilot still answers as if your backlog does not exist. Before you blame the connector, check three things: which Jira you run, which license you hold, and what the connector actually copies across. Each one can quietly rule the answer out.

**After:**
> **Short answer:** Copilot can read Jira through one of Microsoft's two connectors, but only if an administrator deploys it and you hold the Microsoft 365 Copilot add-on. On a standard Microsoft 365 license, Jira shows up in search, never in Copilot's answers.
>
> So if the connector is set up and Copilot still answers as if your backlog does not exist, nothing may be broken. Check three things: which Jira you run, which license you hold, and what the connector actually copies across.

**Why:** the answer comes in the first 50 words (snippet and impatient reader), and the
scene still lands, now as the reason to keep reading.

### Article 1: mid-article callout (new, after "The License Question…")
> **Not sure which Copilot license you are on?** The free guide for product owners has the tier table and prompts that work on any license, because you supply the content. [Get the guide, free]

**Why:** readers who learn they lack the add-on are exactly the ones who need the paste-in
method now. That is the guide's audience.

### Article 1: "Permissions" and "Freshness"
Add one sentence in each that says what it means for the reader, not just how it works:
- Permissions: "If one project returns nothing while others work, check its permission scheme first. That is the most common cause."
- Freshness: "In practice: don't ask Copilot about the refinement you finished ten minutes ago."

### Article 1: closing CTA
**Before:** "…[tell us what your setup looks like](/contact/?source=blog-jira-connector)."
**After:** a callout box:
> **Hit one of these limits?** Write to us with your Jira version and what you need Copilot to answer. Alesia replies herself within two working days with whether it is solvable and roughly what it would take. [Ask whether it's solvable]

This is the same promise as the guide pages, so the site stays consistent.

### Article 2: add the benefit sentence after the opening
> The result: one question, answered from both systems in seconds, with a link to every issue and page it used, and nothing shown to someone who could not open it in Jira or Confluence.

### Article 2: replace the generic close of "What It Takes" with concrete inputs and outputs
> **What we need from you:** read access for a service account, one pilot Jira project and one Confluence space, and a handful of real questions your team asks every week.
>
> **What you have after about two weeks:** a working assistant on that pilot data, permission filtering on from day one, cited answers your team can test against what they already know, and a plan for production (typically four to eight weeks).

**Why:** it lowers the barrier (the buyer sees that the ask is small) and makes "proof of
concept" concrete.

### Article 2: proof and author
- Byline: Gerrit Halfmann (or "Gerrit Halfmann, Founder"). The schema already maps him to `#person-gerrit`.
- One anonymized example paragraph, even three sentences long. Without it the page argues that RAG works, not that Ironum delivers it.

### Article 2: jargon
On first use: "an embedding model (it turns text into numbers that capture meaning, so
similar passages end up close together)". One clause is enough.

---

## CTA Optimization

| CTA | Article | Verdict |
|---|---|---|
| "guide for product owners" (inline) | 1 | Fine, but buried at the end of the checklist → add the mid-article callout |
| "enterprise RAG" (inline) | 1, 2 | Good contextual link, keep |
| "tell us what your setup looks like" (inline) | 1, 2 | Weak → callout box with the two-working-days promise |
| "AI guides…" (inline, end) | 2 | Wrong moment: a buyer at the end of art. 2 wants a conversation, not a guide. Move it up into "Connector or Own System?" for readers who are not ready |
| Sidebar or sticky CTA | both | The blog layout has none. The header "Free AI Strategy Call" is the only persistent CTA, which is acceptable for art. 2 |

---

## Before/After Examples

1. **Art. 1 opening**: see above (answer-first).
2. **Art. 1 closing CTA**: inline link → callout with promise.
3. **Art. 2 "What It Takes"**: timeline only → inputs, deliverables, timeline.
4. **Art. 2 meta description**
   - BEFORE (196 chars, truncated): "How a private retrieval system reads Jira and Confluence, keeps their permissions, cites its sources and runs on EU infrastructure you control. Architecture, trade-offs, timeline."
   - AFTER (154): "How a private RAG system reads Jira and Confluence, keeps their permissions, cites sources and runs on EU servers you control. Architecture and timeline."
5. **Art. 1 "Freshness" H2**
   - BEFORE: "Freshness"
   - AFTER: "How Fresh Is Jira Data in Copilot?" (it answers the question readers type)

---

## Swipe File

**Social and OG headlines:** see the headline lists above (option 1 for each).

**Subheadlines**
1. "Two connectors, one license trap, and the comments Copilot never sees."
2. "Why a connected Jira can still give you an empty answer."
3. "What it takes to make Jira and Confluence answer questions, with sources, on your own servers."
4. "The connector is the easy option. Here is when it's the wrong one."
5. "Permissions, freshness, citations: the three things that decide whether your team trusts it."

**CTA buttons**
1. Ask whether it's solvable
2. Get the guide, free
3. Show me what a 2-week pilot covers
4. Talk to Gerrit about your setup
5. Check my setup with you

**Meta descriptions**
1. Art. 1 (current, 156): keep.
2. Art. 2: see before/after 4.
3. Art. 1 alt (151): "Copilot only answers from Jira with the add-on license. What Microsoft's Cloud and Data Center connectors index, what they skip, and how to check."

**Social proof framing (once available)**
1. "Built for a 40-person product org across 3 Jira projects and 1,200 Confluence pages" (anonymized, only if true)
2. A one-line quote from a pilot user about finding an answer
3. "Every answer cites its source", shown as a screenshot of a cited answer

---

## Implementation Priority

| # | Change | Article | Impact | Effort |
|---|---|---|---|---|
| 1 | Answer-first opening | 1 | High (snippet + bounce) | XS |
| 2 | Closing callout with the two-working-days promise | 1, 2 | High | XS |
| 3 | "What we need / what you get" block | 2 | High | S |
| 4 | Mid-article guide callout | 1 | Med | XS |
| 5 | Named author (Gerrit) + one example | 2 | High (trust) | S, needs Gerrit |
| 6 | Benefit sentence after the opening | 2 | Med | XS |
| 7 | "What it means for you" sentences in Permissions and Freshness | 1 | Med | XS |
| 8 | Jargon clause for embeddings | 2 | Low | XS |
| 9 | Move the guide link up | 2 | Low | XS |

Combined with the SEO audit (`SEO-AUDIT-articles-jira.md`): items 1, 2, 3, 4, 6, 7, 8 and 9
plus the SEO fixes are a single editing pass. Item 5 needs Gerrit's input.
