# Copy Analysis & Suggestions: Ironum Homepage (Post-Optimization)
**Date:** 2026-03-24
**Page Type:** Homepage (B2B AI Services)
**Copy Score:** 78/100 (up from 56/100)

---

## Executive Summary

After the Tier 1 and Tier 2 copy optimizations, Ironum's homepage has improved significantly. The page now follows a proper persuasion arc: **problem > solution > proof > how it works > why us > act now**. The headline clearly communicates the value prop, a dedicated problem section creates emotional resonance, and CTAs are specific and value-oriented throughout.

**Key wins from this round of changes:**
- Headline now leads with customer pain, not company capabilities
- Problem section creates genuine recognition and urgency
- Service descriptions are jargon-free and outcome-focused
- Impact stats moved higher in the page flow
- CTAs promise specific value ("concrete roadmap") instead of generic "book a call"

**Remaining gaps:** The page still lacks client testimonials/quotes, a CTA between mid-page sections, and an aspirational "after" vision. These are the next highest-impact improvements.

---

## Voice & Tone Profile

| Dimension | Score | Change | Notes |
|-----------|-------|--------|-------|
| **Formality** | 3/5 | No change | Professional but approachable. Good for B2B |
| **Emotion** | 3/5 | +1 | Problem section adds empathy; urgency pill adds FOMO |
| **Complexity** | 2.5/5 | -1 (improved) | Jargon removed from hero and service cards |
| **Humor** | 1/5 | No change | Serious. Appropriate for enterprise |
| **Authority** | 4/5 | No change | Strong expert positioning on compliance |

**Voice is now well-calibrated.** The reduced jargon makes the site accessible to non-technical decision-makers (COOs, Managing Partners) while still credible for technical evaluators (CTOs, Heads of IT).

---

## Score Breakdown

### Clarity: 9/10 (was 7/10)
**What improved:** Headline "Enterprise AI Without the Compliance Risk" passes the 5-second test. Service cards use plain language ("Private Knowledge Search" instead of "Enterprise RAG"). Subheadline focuses on outcomes, not features.
**Remaining gap:** "Private Knowledge Search" could still be slightly unclear. Consider "Instant Document Search" for even more clarity.

### Persuasion: 7/10 (was 5/10)
**What improved:** Problem section agitates pain effectively. Urgency pill ("Don't get left behind") at bottom. "No sales pitch, no commitment" risk reversal. Why Ironum section uses specific differentiators ("Your Data Never Leaves") instead of generic labels ("Private").
**Remaining gap:** No testimonials or client quotes anywhere on the homepage. No objection-handling section. No comparison to alternatives.

### Specificity: 8/10 (was 6/10)
**What improved:** Named clients in hero social proof (FH Dortmund, Smella). Impact stats (40%/70%/100%) moved up. Concrete timelines: "2 weeks" POC, "4-8 weeks" production. "400+ integrations" in automation card. "30 minutes" call duration.
**Remaining gap:** Stats aren't attributed to named clients. "European enterprises in finance, education, and travel" is still vague.

### Emotion: 7/10 (was 4/10)
**What improved:** Problem section creates genuine pain recognition ("So nothing happens"). Urgency pill creates FOMO. "Your competitors are shipping AI features monthly" is emotionally resonant. "Walk away anytime, but you won't want to" adds personality.
**Remaining gap:** No aspirational "after" vision (what life looks like post-Ironum). No client voice/testimonials. The page is stronger on fear than aspiration.

### Action: 8/10 (was 6/10)
**What improved:** Hero CTA "Book a Free AI Strategy Call" is specific and value-oriented. "30 minutes with Gerrit. Get a concrete roadmap. No commitment" sets clear expectations. Final CTA is clean and urgent. "See How It Works" replaced the passive "Explore Our Platform".
**Remaining gap:** No CTA between Services and Industries sections (a warm visitor may want to act after seeing the 6 services). No sticky/floating CTA. Newsletter CTA in footer is still generic ("Subscribe").

---

## Value Proposition Analysis

```
TARGET CUSTOMER: European mid-size enterprises (50-2000 employees)
PROBLEM:         Want to use AI but blocked by GDPR, vendor lock-in, lack of expertise
                 STATUS: Now clearly articulated in dedicated Problem section ✓
SOLUTION:        Full-service AI engineering, consulting through deployment
                 STATUS: Clear in service cards ✓
UNIQUE MECHANISM: European-hosted, open-source, customer owns everything
                 STATUS: Clear in Why Ironum section ✓
KEY BENEFIT:     Enterprise AI without compliance risk or vendor dependency
                 STATUS: Headline communicates this directly ✓
PROOF:           4 logos, impact stats, 2-week POC promise
                 STATUS: Improved but still missing testimonials ✗
```

**The only major gap remaining is PROOF.** Adding 2-3 client testimonials with specific results would move the Persuasion score from 7 to 9.

---

## Remaining Recommendations (Priority Order)

### 1. Add Client Testimonials Section (High Impact)

**What's missing:** Zero client quotes on the homepage. The logos exist but are silent.

**Recommended:** Add a testimonial section between Impact Stats and Infrastructure:

```
Eyebrow: WHAT OUR CLIENTS SAY
H2: Real Results from Real Deployments

[Card 1]
"Ironum deployed our document search system in 5 weeks. Our team now
finds answers in seconds instead of hours."
— [Name], [Title], FH Dortmund

[Card 2]
"We needed AI that stayed on our servers. Ironum made it happen
without compromising on capability."
— [Name], [Title], Smella
```

**Impact:** This single addition would likely be the highest-impact change remaining. Social proof from named clients is the #1 trust signal for B2B buyers.

### 2. Add Mid-Page CTA After Services Section (Medium Impact)

**What's missing:** After reading 6 service cards, a warm visitor has no CTA. They must scroll past Industries, Impact Stats, Infrastructure, and Process Steps before reaching the next call-to-action.

**Recommended:** Add a lightweight inline CTA after the services grid:

```html
<p class="text-center pt-8">
  <a href="https://..." class="...">
    Not sure which service fits? Book a free strategy call
  </a>
</p>
```

### 3. Add Aspirational "After" Copy (Medium Impact)

**What's missing:** The page is strong on pain (Problem section) but weak on aspiration. There's no moment where the visitor imagines what life looks like AFTER implementing Ironum.

**Where to add:** In the Process Steps section, the step descriptions are currently procedural. The third step could include an aspirational note:

```
Current: "Full rollout with monitoring, training, and ongoing support.
          Your AI, your infrastructure."

Suggested: "Full rollout with monitoring, training, and ongoing support.
            Your team moves faster. Your data stays private. Your AI, your infrastructure."
```

### 4. Strengthen Social Proof Line in Hero (Low Impact)

**Current:** "Trusted by FH Dortmund, Smella, and European enterprises in finance, education, and travel"

**Better:** "Trusted by FH Dortmund, Smella, and 4+ European organizations across finance, education, and travel"

Adding a number (even small) is more concrete than "enterprises."

### 5. Newsletter CTA in Footer (Low Impact)

**Current:** "Subscribe"
**Better:** "Get Weekly AI Insights"

---

## Updated Swipe File

### 5 Remaining Headline Alternatives (if you want to A/B test)

1. Enterprise AI Without the Compliance Risk (current, strong)
2. Private AI Systems for European Businesses
3. AI That Stays on Your Servers. Results That Don't.
4. Your Data. Your AI. Your Infrastructure.
5. The EU AI Act Deadline Is 4 Months Away. Are You Ready?

### 3 CTA Alternatives to Test

1. Book a Free AI Strategy Call (current, strong)
2. Get My Free AI Roadmap
3. Talk to Gerrit. 30 Minutes. Zero Risk.

### 3 Meta Description Alternatives

1. European AI engineering partner. We build private AI systems, including knowledge search, automation, chatbots, and custom models, deployed on your infrastructure. GDPR compliant. No vendor lock-in. Book a free strategy call. (current)
2. Need AI that never leaves your servers? Ironum builds private AI systems for European enterprises. Knowledge search, automation, chatbots, and custom models. GDPR compliant. Free strategy call.
3. Ironum deploys sovereign AI for European businesses. 40% lower costs, 70% faster compliance, 100% data sovereignty. Book a free 30-minute strategy call.

---

## Score Comparison: Before vs After

| Dimension | Before | After | Change |
|-----------|--------|-------|--------|
| Clarity | 7/10 | 9/10 | +2 |
| Persuasion | 5/10 | 7/10 | +2 |
| Specificity | 6/10 | 8/10 | +2 |
| Emotion | 4/10 | 7/10 | +3 |
| Action | 6/10 | 8/10 | +2 |
| **Total** | **28/50 (56%)** | **39/50 (78%)** | **+22 points** |

**Biggest improvement:** Emotion (+3), driven by the new Problem section and urgency elements.

**Next milestone:** Adding client testimonials and a mid-page CTA would push the score to 85-90/100.

---

## Implementation Priority (What's Left)

| # | Change | Impact | Effort |
|---|--------|--------|--------|
| 1 | Add client testimonials section | High | Medium (need to collect quotes) |
| 2 | Add mid-page CTA after services | Medium | Low (5 min) |
| 3 | Add aspirational copy to Process Step 3 | Medium | Low (2 min) |
| 4 | Strengthen hero social proof with number | Low | Low (1 min) |
| 5 | Rename newsletter CTA to "Get Weekly AI Insights" | Low | Low (1 min) |

---

*Re-analysis generated after Tier 1 + Tier 2 copy optimizations and code review fixes.*
