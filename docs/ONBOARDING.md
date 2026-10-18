# Onboarding Flow

*Drafted: October 2026. Generated from DEFINE.md, Product Identity, and Magic Moment.*

## Summary

TENDA is a mobile-first `web-app`. The flow follows the buyer side of the marketplace onboarding playbook (a first purchase with trust signals and no empty results) plus the website playbook (answer above the fold, a confirmation that delivers). There are 8 screens. Opening the link to "Your seat is booked!" takes about 3–4 minutes, and the magic moment is **Screen 8**, the family departure message on travel morning.

## The magic moment we're engineering toward

> When Rudo adds her mother as family contact and, on the morning of travel, her mother receives "Rudo's bus left Roadport at 07:05. Expected at Mutare rank 10:40. — TENDA", both people in the trip feel looked after.

**Position:** Screen 8 of 8. It's set up on Screen 4 and delivered on travel day.

**Time-to-aha target:** the family contact is added in under 30 seconds on Screen 4; the departure message is delivered within 10 minutes of the bus leaving Roadport.

**Success metric:** 60% of paid bookings include a family contact; 95% of departure messages are sent within 10 minutes of departure.

---

## The flow

### Screen 1 — Home with search

- **Goal:** answer "can I book my seat home?" above the fold and start the search in one tap.
- **User action:** opens a link shared in a family WhatsApp group; Harare → Mutare and the date are pre-filled; taps "Find buses".
- **What this screen proves:** booking a seat home is as simple as sending a WhatsApp, and it costs the same as the rank.
- **Copy:**
  - Headline: "Going home shouldn't be a gamble."
  - Sub: "Book your seat to Mutare. Same price as the rank."
  - CTA: "Find buses"
- **Wireframe:** navy header band with the TENDA wordmark and headline; a white search card overlapping it (From, To, a 4-day date strip, passengers, blue "Find buses"); two trust lines; route cards with photo placeholders.
- **Drop-off risk:** a slow page on costly data. Mitigation: one font, no hero video, photos lazy-loaded below the fold.
- **Reference:** Website Onboarding Tactic #1 (The Answer Above the Fold), Tactic #3 (The Fast Page), Tactic #2 (The Trust Line).

### Screen 2 — Departures

- **Goal:** show every bus for the day with time, seats left and price readable in one glance.
- **User action:** taps the 07:00 departure.
- **What this screen proves:** TENDA tells the truth: real times, a real seat count, a fixed price.
- **Copy:**
  - Headline: "Choose a departure"
  - Sub: "All times leave from Roadport (Harare)."
  - CTA: "Choose seat"
- **Wireframe:** navy header with a white route pill; four departure cards, each with a dot-and-line timeline (07:00 → 10:30), "US$10" and a seats chip (gold "3 seats left"); the 13:00 is greyed with a "Full" label; a sticky bottom bar.
- **Drop-off risk:** every departure is full. Mitigation: never an empty page; suggest the next day's first departure with its seat count.
- **Reference:** Marketplace Onboarding Tactic #10 (The Search That Works on Day One); Website Tactic #5 (The Useful Zero-Results State).

### Screen 3 — Choose seat

- **Goal:** make the booking feel real by letting her pick her own seat.
- **User action:** taps seat 14A (window).
- **What this screen proves:** this seat is hers, held while she books, with no fight at the door.
- **Copy:**
  - Headline: "Choose your seat"
  - Sub: "Your seat is held for 10 minutes while you book."
  - CTA: "Add your details"
- **Wireframe:** progress bar (Seat, Details, Pay, Done); hold banner; legend (Available, Your seat, Taken); a 2 + 2 seat grid, rows 10–17, with door and driver at the front; a sticky bar reading "Seat 14A · window · US$10".
- **Drop-off risk:** a seat map feels slow on a small phone. Mitigation: a seat is pre-selected (best window seat available) so she can just tap "Add your details".
- **Reference:** Marketplace Onboarding Tactic #12 (The Frictionless First Purchase).

### Screen 4 — Your details + "Who's waiting for you in Mutare?"

- **Goal:** collect only what's needed for the ticket, and set up the magic moment with a family contact.
- **User action:** enters her name and WhatsApp number, then her mother's name and WhatsApp number.
- **What this screen proves:** TENDA cares about both people in the trip, not just the seat.
- **Copy:**
  - Headline: "Your details"
  - Sub: "Your ticket arrives here on WhatsApp." / family card: "Who's waiting for you in Mutare?" and "They get a WhatsApp when your bus leaves and when it arrives."
  - CTA: "Go to payment"; secondary: "Skip family contact"
- **Wireframe:** booking summary card; a white passenger card (2 fields, +263 prefix); a highlighted pale-blue family card with a blue border, a message icon and 2 fields; "They can reply STOP at any time."; a blue button with a visible skip link.
- **Drop-off risk:** the extra fields feel like admin and she abandons. Mitigation: framed as a question about her mother, not a form label; the skip link is always visible; only 2 fields; no email, ID or account.
- **Reference:** Website Onboarding Tactic #6 (The Inline Ask After Value), Tactic #7 (The One-Field Form).

### Screen 5 — Pay

- **Goal:** let a first-time online payer pay in the way she already trusts, with the guarantee beside the button.
- **User action:** keeps EcoCash selected and taps "Pay US$10 with EcoCash", or chooses "Hold seat, pay cash".
- **What this screen proves:** paying online is safe here: familiar EcoCash, a cash option, and her money back if anything goes wrong.
- **Copy:**
  - Headline: "How do you want to pay?"
  - Sub: "Seat 14A is held for you until 06:52."
  - CTA: "Pay US$10 with EcoCash" (or "Hold seat, pay cash")
- **Wireframe:** a hold banner; a summary card with "Total US$10" in large numerals; two radio cards (EcoCash; Hold seat, pay cash); a green guarantee strip "Your seat, or your money back plus the next bus free" directly above the blue button.
- **Drop-off risk:** fear of paying and losing the money. Mitigation: the guarantee sits next to the button; "No booking fee"; the cash path is visible.
- **Reference:** Marketplace Onboarding Tactic #11 (The Trust-Stack Above the Fold), Tactic #12 (The Frictionless First Purchase).

### Screen 6 — Waiting for EcoCash

- **Goal:** name the wait and tell her exactly what to do on her phone.
- **User action:** approves the EcoCash prompt with her PIN.
- **What this screen proves:** nothing is broken; her seat is still held.
- **Copy:**
  - Headline: "Waiting for EcoCash"
  - Sub: "Check your phone and enter your EcoCash PIN to pay US$10."
  - CTA: "Didn't get the prompt? Send it again"
- **Wireframe:** a centred phone icon in a progress ring; three numbered steps; "Seat 14A stays held while you pay."; a resend link.
- **Drop-off risk:** the EcoCash prompt never arrives or times out. Mitigation: a resend link, then the "Payment didn't go through" error with "Hold seat, pay cash" as the fallback (see `docs/COPY.md`).
- **Reference:** Website Onboarding Tactic #3 (The Fast Page), `docs/COPY.md` Loading & progress (named wait).

### Screen 7 — Seat booked + ticket on WhatsApp

- **Goal:** the one celebration: confirm the seat and show the ticket has already arrived.
- **User action:** reads the confirmation; taps "View ticket" or closes the page.
- **What this screen proves:** the seat is real, the ticket is in WhatsApp, and her mother will be told.
- **Copy:**
  - Headline: "Your seat is booked!"
  - Sub: "Seat 14A · Sat 25 Oct · 07:00 Roadport → 10:30 Mutare rank · Boarding from 06:40"
  - CTA: "View ticket"; secondary: "Add to calendar"
- **Wireframe:** a tall navy band with a gold check and "You're going home to Mutare"; the ticket card; two green confirmation rows ("Your ticket is on WhatsApp", "Mai Rudo gets a message when your bus leaves"); two buttons.
- **Drop-off risk:** the WhatsApp ticket is delayed. Mitigation: the ticket also shows on this page and in an SMS fallback; target delivery under 60 seconds.
- **Reference:** Website Onboarding Tactic #8 (The Confirmation That Delivers).

### Screen 8 — Travel morning on Mai Rudo's phone ★

- **Goal:** keep the promise to the second person in the trip.
- **User action:** Mai Rudo reads the departure message and replies (optional).
- **What this screen proves:** TENDA looks after both people in the trip; this is the reason to book with TENDA every month.
- **Copy:**
  - Headline: "Rudo's bus left Roadport at 07:05. Expected at Mutare rank 10:40. — TENDA"
  - Sub: the day before: "Mhoro. Rudo Moyo added you as her family contact… Reply STOP to stop these messages." Afterwards: "Rudo's bus arrived at Mutare rank at 10:36. — TENDA"
  - CTA: none; the message is the value.
- **Wireframe:** a messaging thread from the verified "TENDA Buses" business account; the consent message on Fri 24 Oct; the departure message highlighted on Sat 25 Oct at 07:06; a reply "Ndatenda. I'll be at the rank."; the arrival message at 10:37.
- **Drop-off risk:** staff forget to mark the departure, so the message is late or wrong. Mitigation: a one-tap "Departed" button in the staff tool, an automatic fallback message if no mark arrives 15 minutes after scheduled time ("Rudo's bus is boarding at Roadport…"), and daily monitoring of send times.
- **Reference:** Website Onboarding Tactic #11 (The Kept Promise), Tactic #12 (The Personal Alert).
- **Magic moment:** this is where the family contact receives the departure message, the activation event in `docs/MAGIC-MOMENT.md`.

---

## Anti-patterns avoided

- **The Empty Search Result** (Marketplace): a full departure or day always suggests the next available bus with its seat count.
- **The Trust-Signal-Free Listing** (Marketplace): the guarantee, the true seat count, the fixed price and "No booking fee" appear before payment.
- **The Ask Pile-Up** (Website): no account, email, ID or password; only name, WhatsApp number and the optional family contact.
- **The Entry Pop-Up** (Website): no newsletter or app-install pop-up anywhere in the flow.
- **The Empty Welcome** (Website): the confirmation delivers the ticket itself and tells her exactly what happens next.

## Success metric

- **Primary (from `docs/MAGIC-MOMENT.md`):** 60% of paid bookings include a family contact; 95% of departure messages are sent within 10 minutes of departure.
- **Supporting funnel metrics:**
  - Screen-by-screen drop-off from Home → Seat booked, with the first-time booking completion rate as the headline.
  - Median time from "Find buses" to payment confirmed (target under 90 seconds for the Pay step alone).
  - Family-contact skip rate on Screen 4.
  - EcoCash prompt success rate on the first try.

## Wireframe

The clickable flow is on the Claude Design canvas **TENDA Booking Flow**: https://claude.ai/artifact/1ai4QrLWLyFaVvNz4SRqFF. Press Play on Screen 1 and tap through all 8 screens. The seat map, departure list and payment choice work, and Screen 6 has a "Prototype: simulate PIN entered" link. It uses the TENDA design tokens from `docs/DESIGN.md` rather than a grey lo-fi wireframe, because the member chose Claude Design for the Design phase.

## Sources

- Reference: `productos/design/onboarding/BONUS-Marketplace-Onboarding-Best-Practice.md` (buyer-side onboarding: Tactics #10–12), with tactics from `BONUS-Website-Onboarding-Best-Practice.md` (Tactics #1–3, #5–8, #11–12)
- Tone of voice: `docs/DESIGN.md` → Product Identity
- Copy: `docs/COPY.md`
- Magic moment: `docs/MAGIC-MOMENT.md`
