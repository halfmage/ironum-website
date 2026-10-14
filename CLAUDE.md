# Ironum website

Astro site for Ironum, in English (`src/pages/`) and German (`src/pages/de/`). Translations live in `src/i18n/translations/en.ts` and `de.ts`. A change to one language almost always needs the same change in the other.

## Company

- Ironum is a product of LearnSlice UG (haftungsbeschränkt), Düsseldorf. Use this wording ("Ironum is a product of LearnSlice UG" / "Ironum ist ein Produkt der LearnSlice UG"). The imprint, the contact pages and the privacy pages already use it.

## Hosting and forms

- The site is hosted on **Netlify** (`netlify.toml`, publish dir `dist`). It is not hosted on Hetzner. Hetzner on service and industry pages means infrastructure for client deployments, not this website.
- Forms use **Netlify Forms**: `contact` (EN), `contact-de` (DE) and `guide-download`. When you add or rename a form field, also add it to `public/__forms.html`, or Netlify drops the field.
- The contact forms have Name, Email, Message and a required consent checkbox (`consent`) that links to the privacy page. No company or time field.
- Form `action` must point to a page that exists: `/thank-you/` (EN), `/de/danke/` (DE). Until October 2026 the DE form posted to `/danke/`, which does not exist.
- The privacy pages (`src/pages/privacy.astro`, `src/pages/de/datenschutz.astro`) name Netlify as host and form processor, and say that the US transfer runs under the EU-US Data Privacy Framework. They make no DPA or SCC claim (the user decided not to sign a DPA with Netlify). Keep them in sync with any new third-party service.

## Calls to action

- There is **no calendar booking**. Microsoft Bookings / the Outlook booking link was removed in October 2026. Do not add it again.
- Every call CTA goes to the contact form: `t.bookingUrl` = `/contact/#message-form` or `/de/kontakt/#message-form`. `PageHero` uses it as the default link.
- CTA wording says "request" / "get in touch" ("anfragen" / "Kontakt aufnehmen"), never "book" / "buchen", because the visitor sends a form and Gerrit replies with a calendar invite.
- Do not prefill the message field. Do not put the avatar photo in buttons. Do not add an "or send us a message" link under a CTA button.

## Writing style

- Do not use the em dash (—) in any content, code comment or document. Use a comma, colon, period, parentheses, or a hyphen in empty table cells. Use the en dash (–) only for number and date ranges.
- In blog frontmatter, quote values that contain ": " so the YAML stays valid.

## Internal documents

- Audits, proposals and playbooks are in `docs/reports/`. They are not deployed and can be out of date (for example, they still mention the Outlook booking link).

## Checks

- `npm run build` must pass. The user tests the live forms after each deploy.
