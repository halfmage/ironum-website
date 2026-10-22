# Copy Analysis & Suggestions: RAG über Jira und Confluence (DE)
**Date:** 2026-10-22
**Page Type:** Blog post (educate, then start a project conversation)
**Copy Score:** 76/100 after this pass (EN twin: 76/100)

Includes the readability pass and the fact check for both languages.

## Executive Summary

The German version is written in natural Sie-form and does not read like a translation.
Readers hear the same voice as on the rest of the German site. This pass made three kinds of
changes in both languages: it dropped claims that the sources do not support, simplified
sentences that were long or unclear, and replaced jargon in the step names.

## Score Breakdown (38/50)
| Dimension | Score | Why |
|---|---|---|
| Clarity | 9 | Shorter sentences, plain step names, one jargon term explained |
| Persuasion | 7 | Honest "use the connector if it fits"; no project proof yet |
| Specificity | 7 | Timeline, inputs, outputs; sources now dated and linked |
| Emotion | 6 | Strong opening question |
| Action | 9 | The CTA headline and button name the pilot ("Zweiwöchigen Pilot anfragen") |

## Fact Check (EN and DE)

Verified against Microsoft Learn on 2026-10-22 (pages last updated 25 and 30 September 2026):
- the Jira Cloud connector supports Jira Cloud only; comments are not among the indexed fields;
- the Data Center connector needs the agent and the plugin; comments and attachments come only on request via Microsoft Support; access is denied when a permission cannot be resolved;
- the index lives in Microsoft 365; grounding in Copilot answers needs the Copilot add-on or E7.

Internal source (confirmed by the team on 2026-10-08): two weeks for a PoC, four to eight
weeks for production.

**Dropped or rewritten because no verified source backs it:**
| Before | After | Reason |
|---|---|---|
| "…means an hour of searching" / "kostet eine Stunde Suche" | "…means searching both tools by hand" / "heißt: in beiden Tools von Hand suchen" | Duration not measured |
| "answer it in seconds" / "in Sekunden" | "answers it directly" / "direkt" | Speed not measured |
| Table row "Choice of model: Microsoft's" | removed | Not covered by the cited Microsoft pages; which models Copilot uses is not documented there |
| "typically every few minutes" (sync) | "on a schedule you set" / "in einem Rhythmus, den Sie festlegen" | No source for the interval |
| "This is where most first versions fail" | "This part needs the most care" | Generalization without data |
| FAQ: "The usual approach is…" | describes the approach without "usual" | No source for how common it is |
| FAQ: "do not index by default, such as Jira Cloud comments" | "do not index" | For Jira Cloud there is no option at all, so "by default" was misleading |

**Added:** a Sources section in both languages (en-us and de-de Microsoft Learn links, dated).
The licence bullet now names E7, matching the table and Microsoft's licensing page.

## Readability Changes (EN and DE)
- Step names: "Ingestion" → "Reading the data"; "Chunking" → "Splitting into passages"; DE "Daten einlesen", "In Abschnitte aufteilen".
- "The question is embedded" → "The question is turned into a vector the same way".
- Key takeaway 2 split into clear clauses; "Atlassian versions" → "a supported Jira version".
- Unclear pronouns fixed: "It can run…" → "The system can run…"; DE "Dort, wo Sie es betreiben" → "…das System betreiben"; "niemandem … diese Person" → "nur Inhalte, die die fragende Person auch … öffnen darf".
- "The safe answer, and the one Microsoft's … uses, is to deny access" → two short sentences.
- Table header "License to use it in answers" → "License for Jira content in answers" / "Lizenz für Jira-Inhalte in Antworten".
- "Start with the honest comparison" → "First, the comparison" (dropped the filler adjective).

## Swipe File (DE, for LinkedIn and the OG card)
1. „Jira und Confluence alles fragen, mit Quellen, auf eigenen Servern.“ (OG card)
2. „Wenn der Copilot-Connector nicht reicht: RAG für Jira und Confluence, selbst gehostet“
3. „Ein Pilotprojekt, ein Confluence-Bereich, zwei Wochen“
4. „Berechtigungen, Aktualität, Quellen: Was ein RAG-System für Jira und Confluence gut macht“
