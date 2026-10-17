# Copy

*Drafted: October 2026. Generated from DEFINE.md and the Product Identity. DESIGN.md is how the product looks; this is how it speaks.*

Greenfield mode: there are no UI strings in the repo yet, so these rules govern everything built from now on.

## Voice at a glance

**Tone:** warm, but not soppy · plain, but not cold · proud, but not boastful · certain, but not pushy

**Example sentence (WhatsApp):** "Rudo, your seat 14A is held. The bus leaves Roadport at 07:00 tomorrow. We'll tell your mother when you're on the road. Sleep well."

| Voice attribute | Vocabulary | Verbosity | Grammar & punctuation |
| --- | --- | --- | --- |
| Warm, but not soppy | Use: home, your seat, your family, travel well. Ban: dear customer, valued, we care. | One warm phrase per message at most, in the greeting or sign-off. | Address her by first name in WhatsApp and SMS only, never on the website. |
| Plain, but not cold | Everyday words a 9-year-old knows. Numbers instead of adjectives: "leaves 07:00", "12 seats left". | Website sentences ≤15 words; WhatsApp messages ≤3 short lines. | Sentence case; 24-hour times (07:00); prices as US$10; dates as "Sat 25 Oct". |
| Proud, but not boastful | Ban: luxury, world-class, class is permanent, premium, best. | Heritage lives on the story and landing pages only, never in the booking flow. | No superlatives in product UI. |
| Certain, but not pushy | State facts: "Your seat is booked." Ban: hurry, don't miss out, limited time, act now. | No fake urgency. A real seat count ("3 seats left") is allowed because it's true. | Active voice; present tense. No exclamation marks except the one milestone (Success & toasts). |

**Language:** English, with a little Shona in WhatsApp and SMS greetings and sign-offs only ("Mhoro", "Famba zvakanaka"). Never in buttons, errors, prices, dates, the guarantee or legal text. No Shona on the website UI apart from the tagline.

**"We":** never on the website. Allowed in WhatsApp and SMS, where TENDA's team is speaking from a verified business number.

## Mechanical rules

These are non-negotiable (BONUS Principle 11):

- Sentence case everywhere, including buttons, headings and tabs. Never ALL CAPS.
- No full stops on titles, labels or buttons.
- Active voice. The one exception is the short result toast ("Date changed").
- Second person ("you", "your"). "My" only for ownership ("My bookings").
- Present tense ("Seat booked", not "Seat has been booked").
- Numerals, not words: "3 seats", "seat 14A". Times in 24-hour format (07:00).
- Money as "US$10", never "$10" or "USD 10".
- Positive framing: "Enter a Zimbabwe mobile number", not "Don't enter letters".
- No directional references ("see below", "on the right"); the layout changes on small phones.
- Descriptive links: "View your ticket", never "click here".
- Serial comma in lists of three or more.
- Reading level for a 9-year-old (grade 7), everywhere.

## Terminology lexicon

### Nouns

| Concept | We say | Never say | Notes |
| --- | --- | --- | --- |
| The vehicle | bus | coach, vehicle, bhazi (in UI) | Passengers say "bus". |
| One scheduled trip | departure | trip slot, service, run, schedule item | "The 07:00 departure". |
| What she buys | booking | reservation, order, purchase | One booking can hold several seats. |
| A place on the bus | seat | place, spot | Always with its number: "seat 14A". |
| Proof of booking | ticket | e-ticket, voucher, pass, receipt | Sent on WhatsApp, with SMS as fallback. |
| Pay-cash-later | hold | reservation, pending booking, unpaid booking | "Your seat is held until 18:00 Fri." |
| Person kept informed | family contact | next of kin, recipient, beneficiary, emergency contact | Optional; one per booking. |
| Goods sent | parcel | package, consignment, cargo, luggage | Luggage is only what travels with her. |
| Parcel proof | parcel reference | waybill, tracking ID, consignment number | Format: TP-4821. |
| Parcel release check | collection code | PIN, OTP, password | 4 digits; ID is also required. |
| Harare departure point | Roadport | terminal, station, depot, bus stop | Write "Roadport (Harare)" on first mention. |
| Mutare arrival point | Mutare rank | terminal, station, Sakubva terminus | Confirm the exact rank name with TENDA. |
| Money back | refund | reimbursement, credit, compensation | |
| The promise | guarantee | warranty, policy, assurance | "Your seat, or your money back." |
| TENDA's office or agent | TENDA office | counter, booth, kiosk | For paying cash. |

### Verbs

| Action | We say | Never say | Notes |
| --- | --- | --- | --- |
| Buy a seat and pay now | Book | Reserve, Purchase, Buy ticket | "Book seat". |
| Keep a seat and pay cash later | Hold | Reserve, Save | "Hold seat, pay cash". |
| Pay | Pay | Checkout, Complete payment, Proceed | "Pay US$10 with EcoCash". |
| Move to another day | Change date | Reschedule, Amend, Modify | One free change before the cut-off. |
| End a booking | Cancel booking | Delete, Void, Remove | The seat is released and refunded. |
| Pick a seat | Choose seat | Select seat, Assign | Her own subjective choice (BONUS Tactic #2). |
| Pick a departure | Select | Choose | From a closed list of times. |
| Send goods | Send parcel | Ship, Dispatch, Courier | |
| Pick up goods | Collect | Claim, Retrieve, Pick up | "Collect at Mutare rank". |
| Get on the bus | Board | Embark, Check in | "Boarding from 06:40". |
| Add the family member | Add family contact | Nominate, Assign | |
| Look at something | View | See (as a button label) | "View ticket". |

## Per-surface rules

### Buttons & CTAs

Tactics #1–3.

- A verb plus a noun, 1–3 words, ≤25 characters, sentence case, no punctuation.
- Payment buttons name the amount and method.
- One primary button per screen.

| Good | Bad |
| --- | --- |
| "Book seat" | "Submit" |
| "Hold seat, pay cash" | "Reserve now" |
| "Pay US$10 with EcoCash" | "Proceed to checkout" |
| "Change date" | "Manage booking" (it hides the one action she wants) |

### Labels, nav & forms

Tactics #4–6.

- Visible bare-noun labels with no colon. "(optional)" marks the exception.
- Hint text shows a format example only, never the label itself.
- **Navigation:** "Book" · "My bookings" · "Parcels" · "Help".

| Labels | Hint text |
| --- | --- |
| "From" · "To" · "Date" · "Passengers" · "Your name" · "Your WhatsApp number" · "Family contact (optional)" · "Parcel size" | "077 123 4567", "Mai Rudo" |

| Good | Bad |
| --- | --- |
| "Your WhatsApp number" | "Mobile No.:" |
| "Family contact (optional)" | "Next of kin details" |

### Empty states

Tactics #7–8. Each empty state has a reason and one action, with a title of ≤6 words.

- **First use (My bookings):** "No bookings yet". "Book a seat and your ticket arrives on WhatsApp." **[Book seat]**
- **No results (a day with no departures):** "No buses on Sun 26 Oct". "The next departure is Mon 27 Oct at 07:00." **[View Monday]**
- **Cleared (all trips done):** "No upcoming trips". "Your past bookings are in History." **[Book seat]**

| Good | Bad |
| --- | --- |
| "No buses on Sun 26 Oct" | "No results found" |

### Loading & progress

Tactic #9. Name the wait and, where it applies, what she must do.

| Good | Bad |
| --- | --- |
| "Waiting for EcoCash. Check your phone and enter your PIN." | "Processing…" |
| "Checking seats on the 07:00" | "Loading…" |

### Errors & validation

Tactics #10–13.

- **Anatomy:** a title stating the effect (3–4 words); a body with what happened, why, and the fix, using real numbers (≤2 sentences); then a one-tap fix button.
- **Blame-free:** never "you entered", "invalid", "failed" or "error".
- **The apology budget is one.** "Sorry" appears only when TENDA breaks the seat guarantee (error 5), because that's the one time TENDA is at fault.

**1. Payment didn't go through (website)**

> **Payment didn't go through**
> EcoCash didn't confirm your US$10 within 5 minutes. Your seat is held for {10|5} more minutes.
> **[Try EcoCash again]** [Hold seat, pay cash]

The retry hold is 10 minutes normally and 5 minutes at busy times (month-end weekends, Easter and Christmas weeks). The message always shows the real number.

**2. Departure filled while she was choosing (website)**

> **The 07:00 departure is full**
> The last seat was booked a moment ago. The 08:00 has 12 seats left.
> **[Book 08:00]** [Choose another day]

**3. Hold ended because cash wasn't paid (WhatsApp)**

> Mhoro Rudo. Your held seat 14A on the 07:00 was released at 18:00 because we didn't receive the cash. The 07:00 has 9 seats left.
> Book again: tendabuses.com/b/{code}

**4. Too late to change the date (website)**

> **Date can't be changed now**
> Changes close at 18:00 the day before. Your bus leaves in 11 hours.
> **[Message TENDA on WhatsApp]**

**5. The guarantee, where the single apology lives (WhatsApp)**

> We're sorry, Rudo. Your seat 14A on the 07:00 wasn't held. That's on us.
> Your US$10 is on its way back to your EcoCash, and your seat on the 08:00 is free. Show this message to the conductor.

**Field validation:**

| Good | Bad |
| --- | --- |
| "Enter a Zimbabwe mobile number, like 077 123 4567" | "Invalid phone number" |
| "Choose a date from today onwards" | "Date error" |

### Confirmations & destructive actions

Tactics #14–15. The title is "{Verb} {noun}?", the body states the consequence, and both buttons carry verbs. Never "Are you sure?", "Yes" or "No".

> **Cancel booking?**
> Your US$10 goes back to your EcoCash within 24 hours. Seat 14A is released.
> **[Cancel booking]** **[Keep booking]**

> **Change date?**
> Move seat 14A from Sat 25 Oct to Sat 1 Nov. This is your one free change.
> **[Change date]** **[Keep Sat 25 Oct]**

> **Remove family contact?**
> Mai Rudo will stop getting messages about this booking.
> **[Remove contact]** **[Keep contact]**

### Success & toasts

Tactics #16–17.

- **Toasts** are 2–5 words, a noun plus a past participle, with no exclamation mark: "Date changed" · "Family contact saved" · "Parcel booked" · "Hold paid".
- **The one milestone** is seat confirmed. It's the only screen allowed warmth and a single exclamation mark:

> **Your seat is booked!**
> Seat 14A · Sat 25 Oct · leaves Roadport 07:00
> Your ticket is on WhatsApp. Boarding from 06:40.

Final milestone wording follows `docs/MAGIC-MOMENT.md` once Design Step 5 is done.

| Good | Bad |
| --- | --- |
| "Date changed" | "Success! Your booking has been successfully updated!" |

### Notifications & permissions

Tactics #18–19. WhatsApp and SMS are TENDA's main notification surface.

- The key fact comes first.
- ≤3 short lines.
- Shona only in the greeting or sign-off.
- "We" is allowed.
- Every message ends with "— TENDA" when sent to someone other than the booker.

**Ticket:**
> Mhoro Rudo. Your TENDA ticket: seat 14A, Sat 25 Oct, Roadport → Mutare, leaves 07:00. Boarding from 06:40. Famba zvakanaka.

**Hold reminder (14:00 on the cut-off day):**
> Rudo, seat 14A is held until 18:00 today. Pay cash at any TENDA office, or pay with EcoCash: tendabuses.com/p/{code}

**Departed (to the family contact):**
> Rudo's bus left Roadport at 07:05. Expected at Mutare rank 10:40. — TENDA

**Parcel booked (to the sender):**
> Parcel TP-4821 is booked on the 07:00 to Mutare. Your family gets the collection code when it arrives.

**Parcel arrived (to the family contact):**
> Your parcel from Rudo is at Mutare rank. Collection code: 4821. Bring this message and your ID.

At collection, staff check **both the 4-digit code and the collector's ID**.

**Permission ask (adding a family contact):** at the moment of booking, not before:
> "Family contact (optional): we'll send them a WhatsApp when your bus leaves and arrives."

The family contact receives a first message explaining who added them and how to stop messages ("Reply STOP to stop these messages").

**Push notifications:** the product has none (it's a web app). This part is intentionally empty.

## Banned words & phrases

| Never | Because | Instead |
| --- | --- | --- |
| luxury, world-class, premium, class is permanent | Boasting; breaks "proud, but not boastful" | State the fact: "70 seats, WiFi" |
| your comfort is our priority, valued customer, Dear Sir/Madam | Corporate filler | Her first name (WhatsApp) or nothing |
| oops, uh-oh, something went wrong | Vague; Apology Loop | The three-part error |
| invalid, illegal, error, failed, denied | Blame Shift | "Enter…", "didn't go through" |
| successfully, has been | Wordy, passive | "Date changed" |
| reserve, reservation | Two names for hold or booking | hold / booking |
| reschedule, amend, modify | Synonym Shuffle | Change date |
| coach, vehicle, bhazi (UI) | Synonym Shuffle | bus |
| waybill, manifest, consignment, PIN, OTP | Jargon (Developer Leak) | parcel reference, collection code |
| e-ticket, voucher, pass | Synonym Shuffle | ticket |
| hurry, don't miss out, act now, limited time | Fake urgency | A true seat count: "3 seats left" |
| submit, continue, proceed, click here | Says nothing about the action | {Verb} {noun} |
| streamline, seamless, effortless, unlock, powerful | Marketing Bleed | Name the object and action |
| Are you sure? / Yes / No | Are-You-Sure Dialog | "{Verb} {noun}?" plus verb buttons |
| we, our, us (on the website) | The interface isn't a person | "Your mother gets a message…" |
| !!!, ALL CAPS | Shouting | One "!" on the seat-confirmed screen only |

## Copy review rubric

Run this on every screen and every message template. A screen passes when every point is yes.

- [ ] Every string is in sentence case, with no full stops on titles, labels or buttons.
- [ ] Every button is a verb plus a noun, 1–3 words; payment buttons show the amount and method.
- [ ] Every noun and verb matches the lexicon, with no synonyms (Synonym Shuffle).
- [ ] No banned words or phrases appear.
- [ ] Every error has an effect title, a why, a fix with real numbers, and a one-tap fix button (Vague Error).
- [ ] "Sorry" appears only in the seat-guarantee message (Apology Loop).
- [ ] No "we", "our" or "us" on the website; WhatsApp and SMS may use "we".
- [ ] Shona appears only in WhatsApp and SMS greetings or sign-offs, never in money, errors or instructions.
- [ ] Times are 24-hour, money is US$, dates are "Sat 25 Oct", numbers are numerals.
- [ ] Every empty state has a reason and one button (Empty Empty State).
- [ ] Every confirmation is "{Verb} {noun}?" with a consequence line and verb buttons (Are-You-Sure Dialog).
- [ ] Toasts are 2–5 words; exactly one exclamation mark exists in the product, on the seat-confirmed screen (Enthusiasm Overdose).
- [ ] WhatsApp and SMS messages put the key fact first and run ≤3 lines (Wall of Words).
- [ ] No luxury or "class" boasting, no fake urgency, no marketing words in the booking flow (Marketing Bleed).

## Sources

- Reference: `productos/design/BONUS-UX-Writing-Best-Practice.md` (Principles 9–12; Tactics #1–20; Calibration; Anti-Patterns)
- Tone of voice: `docs/DESIGN.md` → Product Identity
- Product context: `docs/DEFINE.md` (Offer, Product Shape, Persona, Pricing)
- Member decisions: "we" banned on the website and allowed in WhatsApp and SMS; "bus" and "hold" confirmed; retry hold 10 minutes normally and 5 at busy times; parcel collection needs the 4-digit code and ID.
- Design tokens: not yet; Design Step 3 will align component names with this lexicon.
