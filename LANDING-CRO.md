# Landing Page CRO Analysis
## https://www.ironum.com (Homepage)
### Analysis Date: 2026-03-23

---

## Overall CRO Score: 62/100

## Page Type: Consultation Booking (B2B Services)
## Current Estimated Conversion Rate: 2-4%
## Target Conversion Rate: 6-10%

---

## Section-by-Section Analysis

### 1. Hero Section [Score: 7/10] (Weight: 25%)

**Findings:**
- Headline "We Build AI Solutions. You Own the Results." is benefit-driven, clear, and under 10 words
- Eyebrow "AI DEVELOPMENT PARTNER FOR EUROPE" establishes geographic and service positioning
- Subheadline lists specific services (consulting, RAG, chatbots, fine-tuning) with compliance hook
- CTA "Book Call With Gerrit" is above the fold with founder avatar — personalized and trust-building
- Blue CTA button (#2563eb) contrasts well against black background
- Background image with spinning logo overlay creates visual interest
- Hero uses `md:min-h-[60vh]` — good viewport coverage

**What's Working:**
- Headline passes the 5-second test — visitor knows exactly what Ironum does
- Founder avatar on CTA is unusual for B2B and creates personal connection
- Service list in subheadline pre-qualifies visitors

**What's Missing:**
- No social proof above the fold (no "trusted by X" or client count)
- No secondary CTA for visitors not ready to book a call
- No urgency signal (EU AI Act deadline, limited slots)
- No microcopy under CTA (e.g., "Free 30-minute consultation · No commitment")
- Navigation menu competes with CTA (full nav visible — this is a multi-page site, not a dedicated landing page, so acceptable but not optimal for conversion)

**Fixes (Priority: HIGH):**
1. Add microcopy below CTA: `<span class="text-white/50 text-sm mt-2">Free 30-min consultation · No commitment required</span>`
2. Add a secondary text CTA: "or [send us a message](/contact/)" for lower-commitment visitors
3. Add social proof line above CTA: "Trusted by European enterprises in legal, manufacturing, and finance"

### 2. Value Proposition [Score: 8/10] (Weight: 20%)

**Findings:**
- Clear statement of what they do: "Full-Service AI Partner" (Services section)
- Six specific services listed with one-line descriptions
- Industry vertical targeting with market statistics on each card
- "How It Works" process steps reduce perceived complexity (3 steps)
- Compliance banner creates urgency with EU AI Act deadline and EUR 35M penalty

**4U Framework Assessment:**
| Dimension | Score | Evidence |
|-----------|-------|----------|
| **Useful** | 9/10 | Solves real EU compliance + AI adoption problem |
| **Urgent** | 7/10 | EU AI Act Aug 2026 deadline mentioned but not in hero |
| **Unique** | 8/10 | European-first, GDPR-native, open-source positioning |
| **Ultra-specific** | 7/10 | Good stats (40%, 70%) but unattributed; specific services listed |

**Fixes (Priority: MEDIUM):**
1. Move urgency signal to hero: Add "EU AI Act deadline: August 2026" near the CTA
2. Add differentiation line: "Unlike US-based platforms, your data never leaves European jurisdiction"

### 3. Social Proof [Score: 3/10] (Weight: 15%)

**Findings:**

**Present:**
- TrustBar with technology names: n8n, Hetzner, Azure, OpenAI, Anthropic, GDPR, EU AI Act
- Impact metrics: 40% lower costs, 70% faster compliance, 100% EU sovereignty
- Metrics now have attribution line

**Missing (CRITICAL):**
- No customer testimonials — zero quotes from real clients
- No client logos or "trusted by" section
- No case studies with named companies
- No review scores or third-party ratings
- No media mentions ("as seen in")
- No certifications shown (ISO 27001, SOC 2)
- No user/deployment count ("serving X enterprises")
- Social proof is NOT placed near decision points (CTAs)

**Impact:** For B2B enterprise, social proof is the #1 conversion factor after value proposition. Its near-total absence is the single biggest conversion killer on this page.

**Fixes (Priority: CRITICAL):**
1. Add testimonial section between Impacts and ProcessSteps — even 2-3 quotes with name, title, company
2. Add "Serving X European enterprises" or "X AI deployments completed" to hero area
3. Place a testimonial quote directly above the FinalCTA section
4. Add client industry logos or "trusted by companies in legal, manufacturing, finance" text

### 4. Features and Benefits [Score: 8/10] (Weight: 15%)

**Findings:**
- Services section: 6 cards in clean 3-column grid, each with title + benefit description + "Learn more" arrow
- Infrastructure section: 5 feature blocks (Secure, Relevant, Auditable, Customizable, Simple) — benefit-led
- Industry section: 6 cards with market statistics as social proof proxies
- Architecture diagram image provides visual evidence

**What's Working:**
- Feature-to-benefit translation is excellent:
  - Bad example avoided: Not "n8n integration" but "Open-source automation — no vendor lock-in"
  - Good: "Private knowledge systems powered by your documents. Zero public cloud exposure."
- Scannable format with clear mini-headlines
- Visual hierarchy guides eye: Eyebrow → H2 → Description → Cards

**Fixes (Priority: LOW):**
1. Add icons to service cards (currently text-only) — visual scanning aid
2. Consider highlighting 1-2 "most popular" services

### 5. Objection Handling [Score: 5/10] (Weight: 10%)

**Findings:**

**Objections addressed:**
| Objection | How Addressed | Location |
|-----------|--------------|----------|
| "Is my data safe?" | GDPR, EU AI Act, European hosting, DPA/NDA | Compliance banner, Infrastructure |
| "Too complicated" | "Plug-and-play setup: built in weeks" | Infrastructure section |
| "I need an AI team" | "No AI team required" (implicit in positioning) | Subheadline mentions full-service |
| "How long does it take?" | "PoC in 2 weeks" | ProcessSteps |

**Objections NOT addressed:**
| Objection | Missing Element |
|-----------|----------------|
| "Too expensive" | No pricing info, no ROI calculator, no "starting at" |
| "Does it actually work?" | No case studies, no proof of results |
| "What if I don't like it?" | No guarantee, no pilot terms, no "cancel anytime" |
| "I need to ask my team" | No shareable comparison document or one-pager |
| "Why not a bigger company?" | No differentiation vs. Accenture/Deloitte/McKinsey |

**Fixes (Priority: HIGH):**
1. Add FAQ section to homepage addressing top 3 objections
2. Add risk reversal near CTA: "Start with a free assessment. No commitment."
3. Add pricing transparency: "Fixed-fee projects starting from EUR X" or "How Our Pricing Works" link

### 6. Call-to-Action [Score: 5/10] (Weight: 10%)

**Findings:**

**CTA Inventory:**
| Location | CTA Text | Type |
|----------|----------|------|
| Hero | "Book Call With Gerrit" | Primary — booking |
| Nav bar | "Book a Call" | Primary — booking |
| Compliance banner | "Learn About Our Compliance" | Secondary — navigation |
| FinalCTA | "Book Call With Gerrit" | Primary — booking |
| Footer | "Subscribe" (newsletter) | Tertiary — email capture |

**CTA Scoring:**
- Button text "Book Call With Gerrit" = Medium strength (describes action, personalized, but not value-focused)
- Better alternative: "Get Your Free AI Assessment" or "Start With a Free Consultation"
- CTA appears 2x on long page (hero + bottom) — adequate but could add mid-page
- Blue button on black background = good contrast
- Newsletter signup in footer = good secondary capture

**Critical Issues:**
1. No CTA microcopy anywhere (no "Free · 30 minutes · No commitment")
2. No secondary CTA in hero (visitors not ready to call have no option except scroll)
3. CTA button text focuses on ACTION ("Book Call") not VALUE ("Get Your AI Strategy")
4. External Outlook booking link takes visitors off-site and may require Office 365 auth
5. Same CTA copy repeated — no variation by section context

**Fixes (Priority: HIGH):**
1. Add microcopy under every primary CTA: "Free 30-minute consultation · No commitment"
2. Add secondary CTA to hero: "or explore our services" or "Download: EU AI Act Checklist"
3. Test value-focused CTA copy: "Get Your Free AI Assessment" vs "Book Call With Gerrit"
4. Add mid-page CTA between Infrastructure and Impacts sections
5. Consider embedded booking widget instead of external Outlook link

### 7. Footer and Secondary Elements [Score: 7/10] (Weight: 5%)

**Findings:**
- Newsletter signup present with clear value prop and inline form
- 4-column navigation: Services, Industries, Resources, Company
- Privacy policy and imprint linked
- Copyright and location (Düsseldorf) present
- Contact link available

**What's Working:**
- Newsletter form is clean, single-field, low friction
- FormSubmit.co backend requires no JavaScript
- Comprehensive sitemap in footer aids SEO and navigation

**What's Missing:**
- No trust badges repeated near newsletter CTA
- No social media links (LinkedIn is important for B2B)
- No final booking CTA in footer itself

**Fixes (Priority: LOW):**
1. Add LinkedIn profile link
2. Add "GDPR Compliant · EU AI Act Ready" badge near newsletter form

---

## Copy Score: 68/100

| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | 9/10 | Visitor understands offer within 5 seconds. Excellent headline. |
| Urgency | 5/10 | EU AI Act deadline mentioned in compliance section but NOT in hero. No countdown, limited slots, or time pressure. |
| Specificity | 7/10 | Good metrics (40%, 70%), specific services listed, market stats on industry cards. Metrics lack attribution to named clients. |
| Proof | 4/10 | Claims are made but not proven. No testimonials, case studies, client names, or third-party validation. |
| Action Orientation | 9/10 | Clear CTA on every section. "Book Call" is direct. ProcessSteps show clear next action. |

**Copy Score: (9+5+7+4+9)/5 × 10 = 68/100**

---

## Form Audit

**Primary conversion mechanism:** External Outlook calendar booking (not a form)
**Secondary:** FormSubmit.co contact form on /contact/ page, newsletter in footer

| Element | Current State | Recommendation |
|---------|--------------|----------------|
| Field count | Newsletter: 1 field (email) | Optimal for email capture |
| Button text | "Subscribe" | Acceptable but "Get AI Insights" would be stronger |
| Contact form | 4 fields (name, email, company, message) | Good — under 5 fields |
| Contact form button | Likely "Send Message" | Should be "Get Your Free Consultation" |
| Error handling | Browser default (HTML5 required) | Adequate for static site |
| Booking path | External Outlook link | HIGH FRICTION — requires leaving site, possible Office auth |

**Critical Recommendation:** The Outlook booking link is the highest-friction conversion path possible for a B2B site. At minimum, add a Calendly or Cal.com embed, or provide the contact form as a prominent alternative on the homepage itself, not just on /contact/.

---

## Mobile Audit

| Check | Status | Notes |
|-------|--------|-------|
| CTA thumb-reachable | Partial | Hero CTA is center-positioned, not bottom-aligned |
| Text readable (16px+) | Yes | Body text is text-lg (18px), headings scale properly |
| Forms usable | Yes | Newsletter has large tap targets (min-h-[48px]) |
| Images responsive | Yes | Astro Image component with width/height, lazy loading |
| No horizontal scroll | Likely Yes | max-w-7xl + px-4 padding on all sections |
| Sticky nav on scroll | Yes | `sticky top-0 z-50` on nav |
| Click-to-call | N/A | Phone only on contact page |
| Touch targets | Yes | min-h-[44px] and touch-manipulation on all interactive elements |

**Mobile is well-implemented.** Astro SSG + Tailwind responsive classes handle mobile well. The main concern is the Outlook booking link, which is particularly problematic on mobile.

---

## Page Speed Impact Assessment

| Factor | Status | Impact |
|--------|--------|--------|
| SSG (Static Site Generation) | Astro builds static HTML | Optimal — no server rendering |
| Image optimization | astro:assets with WebP conversion | Good — lazy loading on below-fold |
| JavaScript | Alpine.js only (~14KB) | Minimal — no React/Vue overhead |
| CSS | Tailwind with Vite purging | Optimized |
| Third-party scripts | SimpleAnalytics only | Minimal — privacy-first, lightweight |
| CDN | Unknown (deployment-dependent) | Recommend Cloudflare or Vercel |
| Hero image preload | Yes — `<link rel="preload">` for hero-background.png | Good |

**Estimated load time: 1-2 seconds** (static HTML + optimized images). Page speed is NOT a conversion issue.

---

## A/B Test Recommendations

1. **"If we add microcopy 'Free 30-min consultation · No commitment' under the hero CTA, then click-through rate will increase 15-25% because it reduces perceived risk for first-time visitors."**

2. **"If we change the CTA from 'Book Call With Gerrit' to 'Get Your Free AI Assessment', then conversion rate will increase 10-20% because it focuses on value received rather than action required."**

3. **"If we add a testimonial quote with photo directly above the FinalCTA section, then bottom-of-page conversion will increase 20-30% because social proof at the decision point reduces final objections."**

4. **"If we add a secondary CTA in the hero ('Download: EU AI Act Compliance Checklist'), then total lead captures will increase 30-50% because it captures visitors who aren't ready for a call but want to engage."**

5. **"If we move the EU AI Act urgency message ('August 2026 deadline') into the hero subheadline, then CTA clicks will increase 10-15% because urgency at first contact creates immediate motivation."**

6. **"If we replace the external Outlook booking link with an embedded Cal.com or Calendly widget, then booking completion rate will increase 25-40% because it eliminates the friction of leaving the site and potential Office 365 authentication."**

---

## Heat Map Predictions

**Expected Attention Pattern:** F-pattern due to content density

- **High attention zones:** Hero headline, CTA button, first 2 service cards, impact metrics (40%, 70%, 100%), compliance badge area
- **Medium attention zones:** Industry cards (especially Legal and Manufacturing — first in grid), ProcessSteps
- **Low attention zones:** Service cards 4-6 (below fold on mobile), Infrastructure feature text, TrustBar (text-only, no logos)
- **Scroll depth prediction:** 40-50% reach Impacts, 25-35% reach ProcessSteps, 15-25% reach FinalCTA
- **Rage click risk:** TrustBar items look like they could be links but aren't clickable
- **Dead zones:** Infrastructure section text blocks — too much text, no visual anchors

---

## Prioritized Fix List

### Quick Wins (implement this week)
1. **Add CTA microcopy** — "Free 30-min consultation · No commitment" under hero and FinalCTA buttons. Expected impact: +15-25% CTA clicks. Effort: 10 minutes.
2. **Add secondary hero CTA** — "or [send us a message](/contact/)" text link below primary CTA. Expected impact: +10-15% total conversions. Effort: 5 minutes.
3. **Add urgency to hero** — "EU AI Act deadline: August 2026" near the CTA. Expected impact: +5-10% urgency-driven clicks. Effort: 5 minutes.
4. **Fix FinalCTA eyebrow** — "Whats next?" is missing an apostrophe → "What's Next?" Effort: 1 minute.

### Medium-Term (implement this month)
5. **Add testimonials section** to homepage between Impacts and ProcessSteps — even 3 placeholder quotes from real engagements. Expected impact: +20-30% conversion improvement. Effort: 2-4 hours.
6. **Replace Outlook booking with embedded booking** (Calendly/Cal.com) or add contact form directly to homepage. Expected impact: +25-40% booking completion. Effort: 2-3 hours.
7. **Add FAQ section to homepage** addressing "How much does it cost?", "How long does deployment take?", "What if we already use other AI tools?" Expected impact: +10-15% visitor retention. Effort: 1-2 hours.
8. **Add "Serving X European enterprises" proof point** to hero area. Effort: 5 minutes.

### Strategic (implement this quarter)
9. **Create downloadable lead magnet** (EU AI Act Checklist PDF) with email gate — captures visitors not ready to call. Expected impact: +30-50% total lead volume.
10. **Add pricing transparency** — even "projects typically start from EUR X" or a "How Pricing Works" page. Expected impact: +15-20% qualified leads.
11. **Develop 3-5 case studies** with named clients and measurable results. Expected impact: +25-40% conversion for enterprise decision-makers.
12. **Build ROI calculator** — "estimate your savings from AI automation" interactive tool. Expected impact: +10-20% engagement and lead quality.

---

## Current vs Recommended Homepage Layout

### Current Flow:
```
Nav → Hero (CTA) → TrustBar → Services (6 cards) → Industries (6 cards) →
Infrastructure (5 features + image) → Impacts (3 stats) →
ProcessSteps (3 steps) → Compliance Banner → FinalCTA → Footer (newsletter)
```

### Recommended Flow:
```
Nav → Hero (CTA + microcopy + secondary CTA + urgency) →
TrustBar (with "serving X enterprises") →
Services (6 cards) → Industries (6 cards) →
Impacts (3 stats + attribution) →
★ TESTIMONIALS (NEW — 2-3 quotes with photos) →
ProcessSteps (3 steps) → Infrastructure (5 features + image) →
★ FAQ (NEW — 5 questions addressing objections) →
Compliance Banner →
★ TESTIMONIAL QUOTE (NEW — single quote above FinalCTA) →
FinalCTA (+ microcopy + secondary CTA) →
Footer (newsletter)
```

**Key changes:**
- Move Impacts before Testimonials (quantify impact → prove it with quotes)
- Add Testimonials after Impacts (social proof at the consideration stage)
- Move Infrastructure after ProcessSteps (process is more engaging, infrastructure is detail)
- Add FAQ before Compliance (handle objections before final push)
- Add single testimonial quote directly above FinalCTA (proof at decision point)
