# Copy Analysis & Suggestions: RAG Over Jira and Confluence
**Date:** 2026-10-22 (pre-publication re-check, PR #3)
**Page Type:** Blog post (educate, then start a project conversation)
**Copy Score:** 72/100 (was 62 on 2026-10-08)

Follow-up to `COPY-SUGGESTIONS-articles-jira.md`.

## Executive Summary

Most of the 8 October suggestions are in: the benefit sentence after the opening, the
embedding explanation, the move of the guides link up into the comparison section, the
"what we need from you / what you have after two weeks" block, and a callout box CTA. The
article now gives the buyer a concrete picture of a small first step.

Two things hold it back. First, the CTA box opens with "Has your team hit the limits of the
connector?" That assumes the reader came from the connector article or uses Copilot. A reader
who searched "self-hosted RAG Jira" may not, and the box ignores the two-week pilot the
paragraph above has just described. Second, there is still no proof that Ironum has done
this. That was a deliberate decision on 8 October, so it is noted here, not re-argued.

## Voice & Tone Profile
Formality 3/5 · Emotion 2–3/5 · Complexity 4/5 · Humor 1/5 · Authority 3/5.
Plain, evidence-led, no hype. It matches the site and the connector article. Keep it.

## Score Breakdown (36/50)
| Dimension | Score | Why |
|---|---|---|
| Clarity | 8 | Six clear steps, jargon explained once, honest table |
| Persuasion | 7 | "If the connector covers your case, use it" builds trust; the freshness line ("worse than none, because it sounds confident") persuades |
| Specificity | 7 | Timeline, inputs, outputs; the architecture stays generic (no numbers, no example) |
| Emotion | 6 | Strong opening question, then mostly technical |
| Action | 8 | Callout CTA with a reply promise and "no sales sequence"; the headline is too narrow (see below) |

## Value Proposition
| | |
|---|---|
| Target customer | Engineering/IT leads and heads of product in EU companies on Jira + Confluence |
| Problem | Answers need both systems; an hour of searching; the connector does not fit |
| Solution | Permission-aware, cited RAG on infrastructure they choose |
| Unique mechanism | Present but generic: permission filtering before retrieval, separate permission sync |
| Key benefit | Present: "answer it in seconds, with a link to every issue and page" |
| Proof | **Missing** (decided 2026-10-08, revisit once there is a project) |

## CTA Optimization

**CTA box headline**
- BEFORE: "Has your team hit the limits of the connector?"
- AFTER: "Want to see it on your own Jira and Confluence?"
- WHY: it works for every reader, not only connector users, and it picks up the pilot the reader has just read about.

**Button**
- BEFORE: "Ask whether it is solvable"
- AFTER: "Ask about a two-week pilot"
- WHY: "solvable" fits the connector article, where the reader has a problem. Here the reader is weighing a build, so a concrete next step works better. Keep the reply promise text as it is.

Alternative buttons: "Check my setup with you" · "Start with one project and one space".

## Before/After Examples

1. **CTA headline**: see above.
2. **CTA button**: see above.
3. **Build-time section, closing line (also covers the SEO service-page link)**
   - BEFORE: "…cited answers your team can test against what it already knows, and a plan for production."
   - AFTER: "…cited answers your team can test against what it already knows, and a plan for production. How we build these systems is on the [enterprise RAG service page](/services/enterprise-rag/)."
4. **Key Takeaways, bullet 4** (it repeats the hosting section, and "so the content does not leave infrastructure you choose" is clumsy)
   - BEFORE: "Hosting can be your own servers or an EU cloud provider, with an open-source model, so the content does not leave infrastructure you choose."
   - AFTER: "It can run on your own servers or at an EU provider, with an open-source model, so your content stays on infrastructure you choose."
5. **Meta description**: 153 characters, keep as is.

## Swipe File (for the LinkedIn post and the OG card; keep the H1)
1. "Ask Jira and Confluence Anything, With Sources, On Your Own Servers"
2. "When the Copilot Connector Isn't Enough: Self-Hosted RAG for Jira and Confluence"
3. "From an Hour of Searching to an Answer With Links"
4. "Permissions, Freshness, Citations: What Decides a Jira and Confluence RAG"
5. "One Pilot Project, One Confluence Space, Two Weeks"

## Implementation Priority
1. CTA headline and button (2 minutes, highest conversion impact).
2. Service-page link sentence (also SEO item 1).
3. Key Takeaways bullet 4 (polish).
4. A project example once one can be shared.
