# Design Prompts

*Drafted: October 2026. Generated from `docs/DEFINE.md`, `docs/DESIGN.md` (Product Identity + tokens) and `docs/COPY.md`. The full website flow was mapped from Mobbin reference flows (Trainline, BlaBlaCar, Shopee, Grab, Vrbo, Expedia, Meetup, Lloyds, CVS) and Firecrawl captures of Trainline's mobile site. Paste each prompt into your AI design tool; the brand context and tokens are already in every prompt.*

## How to use this file

1. Open your AI design tool. These prompts are written for **paper.design**; MagicPath, Pencil and Claude Design take them unchanged.
2. **Start with Prompt 1, the design system.** It renders the `docs/DESIGN.md` tokens as a component library that every screen reuses.
3. Run Prompts 2–17 **in order, on the same canvas**, so each screen reuses Prompt 1's components.
4. For each screen, **attach the reference images listed under it** (they're in `docs/design-references/flow/`). The prompt tells the tool exactly what to borrow from each: layout and interaction pattern only, never their logos, photos, colours or wording.
5. Copy each prompt from "Design…" to the last line, paste it, generate, then iterate on layout or content.
6. `docs/DESIGN.md` stays the source of truth for exact tokens, and `docs/COPY.md` for every word. If either changes, re-run this step.

**About the reference "assets":** the Mobbin screens are other companies' copyrighted designs, kept for internal reference only. We take their *visual language*: layout, hierarchy, spacing rhythm and interaction patterns. TENDA's own assets are its logo (supplied), its tokens, Figtree, a free line-icon set and TENDA's own photography (commissioned and credited bus-spotter photos). Until real photos exist, the prompts ask for clearly labelled photo placeholders, not AI-generated people.

---

## The website flow

The booking journey runs top to bottom; parcels and help branch off it.

| # | Screen | Frame | Reference screens (`docs/design-references/flow/`) | Mobbin source |
| --- | --- | --- | --- | --- |
| 1 | Design system foundation | Canvas | `../trainline-ios-popular-journeys.jpg` | [Trainline home](https://mobbin.com/screens/f9f7f929-f55c-46fd-acde-61ecc96bd5f7) |
| 2 | Home (mobile) | 390 × 844, scrolling | `s01-home--trainline-mobile-web.png`, `s01-home--trainline-popular-journeys.jpg` | Trainline mobile web (Firecrawl), [Trainline home](https://mobbin.com/screens/f9f7f929-f55c-46fd-acde-61ecc96bd5f7) |
| 3 | Home (desktop) | 1440 wide | `s02-home-desktop--ikea-going-home.jpg` | [IKEA hero](https://mobbin.com/sites/sections/20bfbcca-e030-47a8-987d-3f2ca638f657) |
| 4 | Search | 390 × 844 | `s03-search--trainline-search.jpg` | [Trainline passengers flow](https://mobbin.com/flows/f94ea03d-3f9e-435a-a5b7-19946c7442b1) |
| 5 | Departures | 390 × 844 | `s04-departures--trainline-results.jpg`, `s04-departures--blablacar-results.jpg` | [Trainline booking](https://mobbin.com/flows/6be1c2ae-08be-4a2e-8c62-8ed1c28f9c4a), [BlaBlaCar bus booking](https://mobbin.com/flows/fe5fde44-ddb5-43f5-b161-f46d687702fc) |
| 6 | Choose seat | 390 × 844 | `s05-seat-map--shopee-seat-map.jpg` | [Shopee selecting a seat](https://mobbin.com/flows/4b244753-0033-45b5-9e5f-3272646fc4a2) |
| 7 | Your details | 390 × 844 | `s06-details--blablacar-passenger.jpg`, `s06-details--shopee-review.jpg` | [BlaBlaCar bus booking](https://mobbin.com/flows/fe5fde44-ddb5-43f5-b161-f46d687702fc) |
| 8 | Pay | 390 × 844 | `s07-pay--trainline-option-cards.jpg`, `s07-pay--blablacar-payment-method.jpg`, `s07-pay--trainline-price-locked.jpg` | [Trainline booking](https://mobbin.com/flows/6be1c2ae-08be-4a2e-8c62-8ed1c28f9c4a) |
| 9 | Waiting for EcoCash | 390 × 844 | `s08-waiting--lloyds-processing.jpg`, `s08-waiting--trainline-booking-spinner.jpg` | [Lloyds processing](https://mobbin.com/screens/fcc662bf-e8ac-42be-b19c-ff6d2cc0fed3) |
| 10 | Seat booked | 390 × 844 | `s09-booked--expedia-confirmed.jpg`, `s09-booked--trainline-youre-going.jpg` | [Expedia confirmed](https://mobbin.com/screens/dd7132ea-8076-41a1-9ee4-9cccfd7ccd72) |
| 11 | Ticket | 390 × 844 | `s10-ticket--meetup-ticket.jpg`, `s10-ticket--blablacar-thank-you.jpg` | [Meetup ticket](https://mobbin.com/screens/427c632f-e3ad-471e-8652-1d95b622e4f3) |
| 12 | My bookings + booking detail | 2 × 390 × 844 | `s11-my-bookings--vrbo-reservation.jpg`, `s11-my-bookings--vrbo-manage.jpg` | [Vrbo manage booking](https://mobbin.com/flows/894b9329-72d4-4957-ac1e-264439210e4b) |
| 13 | Change date + cancel confirmations | 2 × 390 × 844 | `s12-confirm--shopee-dialog.jpg` | [Shopee selecting a seat](https://mobbin.com/flows/4b244753-0033-45b5-9e5f-3272646fc4a2) |
| 14 | Send parcel | 390 × 844 | `s13-parcel--grab-delivery-details.jpg`, `s13-parcel--grab-recipient-form.jpg` | [Grab delivery order](https://mobbin.com/flows/29794f92-ab64-464d-b664-0b4c862707cd) |
| 15 | Parcel status | 390 × 844 | `s14-tracking--shopee-timeline.jpg`, `s14-tracking--cvs-stepper.jpg` | [Shopee tracking](https://mobbin.com/screens/16424e24-00a4-46ca-a5b7-c4653be987ca) |
| 16 | Error states | 2 × 390 × 844 | none (from `docs/COPY.md`) | none |
| 17 | Help and the guarantee | 390 × 844 | none | none |

**Journey:**
- Home (2, 3) → Search (4) → Departures (5) → Choose seat (6) → Your details (7) → Pay (8) → Waiting for EcoCash (9) → Seat booked (10) → Ticket (11).
- Later: My bookings (12) → Change date or Cancel booking (13).
- Branches: Send parcel (14) → Parcel status (15); Help (17), reachable from every screen.
- Errors (16) can appear at Choose seat and at Pay.

---

## Brand identity context (embedded in every prompt below)

- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

---

## Prompt 1: Design system foundation

**Purpose:** Render the full TENDA component library from the `docs/DESIGN.md` tokens. Every screen reuses it. Run this first.

**Attach:** `docs/design-references/trainline-ios-popular-journeys.jpg` for the overall feel only.

### Prompt — paste this into your AI design tool

```
Design a complete UI design system foundation for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare, get the ticket on WhatsApp, and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Use these design tokens exactly — do not invent new colors, sizes, or radii:

Colors (token: hex)
primary: #0B2B5C
on-primary: #FFFFFF
primary-container: #E8F0FB
on-primary-container: #0B2B5C
action: #1570C9
on-action: #FFFFFF
action-pressed: #0F5BA8
accent: #F2B233
on-accent: #0B2B5C
accent-text: #8A5A00
surface: #FFFFFF
surface-container: #F4F6FA
surface-container-high: #E8ECF2
on-surface: #121A2B
on-surface-variant: #4A5568
outline: #8792A6
outline-variant: #DCE2EB
error: #B3261E
on-error: #FFFFFF
error-container: #FCE8E6
on-error-container: #7A1A14
success: #1E7B45
on-success: #FFFFFF
success-container: #E3F4EA
on-success-container: #14532D

Typography (level: family / size / weight / line-height / letter-spacing)
display-lg: Figtree / 40px / 800 / 1.1 / -0.02em
headline-lg: Figtree / 28px / 800 / 1.2 / -0.01em
headline-md: Figtree / 22px / 700 / 1.25
title-md: Figtree / 18px / 700 / 1.3
body-lg: Figtree / 18px / 400 / 1.5
body-md: Figtree / 16px / 400 / 1.5
body-sm: Figtree / 14px / 500 / 1.45
label-md: Figtree / 16px / 700 / 1.25
label-sm: Figtree / 13px / 700 / 1.3 / 0.02em
numeral-lg: Figtree / 32px / 800 / 1.1 / -0.01em (tabular numerals, for times, seat numbers and prices)

Spacing
xs 4px, sm 8px, md 16px, lg 24px, xl 40px, gutter 16px, margin 20px

Corner radius
none 0, sm 8px, md 12px, lg 16px, xl 28px, full 9999px

Elevation
Almost flat: depth from colour bands (navy header, pale-blue primary-container band, white cards) and 1px outline-variant hairlines. The only shadow is a soft one under the search pill where it overlaps the navy header. Modals and toasts sit on a 40% navy scrim, never a blur.

Components already defined (render these first, with exactly these token values)
header-band: background primary, text on-primary, typography headline-lg, radius xl on the bottom corners only, padding 20px
search-pill: background surface, text on-surface, typography body-md, radius full, padding 12px 20px, height 56px, one soft shadow
button-primary: background action, text on-action, typography label-md, radius full, padding 14px 24px, height 52px
button-primary-pressed: background action-pressed, text on-action
button-primary-disabled: background surface-container-high, text on-surface-variant
button-secondary: background surface, text primary, 1.5px primary border, typography label-md, radius full, padding 14px 24px, height 52px
input-field: background surface, text on-surface, 1px outline-variant border, typography body-md, radius md, padding 14px 16px, height 52px, visible label above
input-field-error: same as input-field with a 2px error border and error helper text below
route-card: background surface, 1px outline-variant border, radius lg, 4:3 photo on top, route name in title-md, duration in body-sm
departure-row: background surface, 1px outline-variant border, text on-surface, typography body-md, radius lg, padding 16px; time in numeral-lg
departure-row-selected: background primary-container, text on-primary-container
seat-available: 44px square, background surface, text primary, navy outline, typography label-sm, radius sm
seat-selected: background action, text on-action
seat-taken: background surface-container-high, text on-surface-variant
chip-seats-left: background accent, text on-accent, typography label-sm, radius full, padding 4px 10px
ticket-card: background surface, 1px outline-variant border, text on-surface, radius lg, padding 20px
banner-error: background error-container, text on-error-container, typography body-sm, radius md, padding 12px 16px
banner-success: background success-container, text on-success-container, typography body-sm, radius md, padding 12px 16px
toast: background on-surface, text surface, typography body-sm, radius full, padding 10px 16px
bottom-nav: background surface, text on-surface-variant, typography label-sm, height 64px, 4 items, active item in primary

What to design:
Render the tokens above as a foundations sheet (colour swatches with token names and hexes, a live specimen of every typography level, the spacing and radius scales, the elevation levels). Then build the full component library from those tokens only, grouped by category. Extend the defined components in the same style:

- Buttons: primary, secondary, a text-only tertiary link in action blue, and a destructive variant (error background, on-error text) used only for "Cancel booking". States: default, pressed, focus (2px action ring), disabled, loading ("Waiting for EcoCash" with a small spinner). Sizes md and lg only.
- Form elements: text input, phone input with a fixed "+263" prefix, date picker as a horizontal 7-day strip of date chips, passenger stepper (minus / number / plus), radio cards for payment method (EcoCash, Hold seat and pay cash), segmented control for parcel size (Small, Medium, Large), checkbox for consent. Each with label, helper text and error state.
- Cards: route card, departure row, ticket card, booking summary card (route, date, seat, price), parcel card (parcel reference, status chip).
- Modal: bottom sheet on mobile, centred dialog on desktop, with title, one-line consequence, two verb buttons stacked.
- Navigation: navy header band with back arrow and title, bottom navigation (Book, My bookings, Parcels, Help), desktop top bar with the TENDA wordmark left and the same four items right, tabs (Upcoming, History).
- Lists: departure list, booking list, help question list with chevrons.
- Chips and badges: seats-left (gold), status chips (Booked in success colours, Held in primary-container, Cancelled in surface-container-high, Parcel at Mutare rank in success colours).
- Seat map: a 2+2 bus seat grid with a numbered aisle, driver position and door marked at the front, a legend (Available, Your seat, Taken).
- Status timeline: vertical stepper with completed (navy filled dot), current (blue ring) and upcoming (grey hollow dot) steps, each with a 24-hour time.
- Toasts, banners: success, error, info (primary-container).
- Icons: rounded line icons with a 1.75px stroke from the free Lucide set (bus, ticket, map-pin, calendar, user, phone, package, clock, check-circle, shield-check, message-circle, chevron, arrow-left-right for swap). Show 12 icons.
- Empty states (illustration-free: an icon in a primary-container circle, a ≤6-word title, one sentence and one button), loading skeletons in surface-container, error states using banner-error.
- Progress: a 4-step booking progress bar (Seat, Details, Pay, Done).
- Motion: one 200ms ease-out for sheets, chips and selection; no bounce, no confetti.

Layout
- Mobile first: 360–390px wide, single column, 20px side margins, 16px gutter, the primary button pinned within thumb reach at the bottom.
- Desktop (1440): content max 1120px, the booking column 480px wide beside a large photo; never stretch forms across the page.
- Breakpoints: mobile under 600px, tablet 600–1024px, desktop above 1024px.

Button and label text follows docs/COPY.md: sentence case, {Verb} {noun}, 1–3 words, no full stops ("Book seat", "Hold seat, pay cash", "Pay US$10 with EcoCash", "Change date", "Cancel booking", "Send parcel", "View ticket"). One name per thing: bus (never coach), departure, booking, seat, ticket, hold, family contact, parcel, parcel reference, collection code, Roadport, Mutare rank.

Visual notes:
- One blue button per screen; gold only behind navy text; generous white space; colour bands and hairlines instead of shadows.
- Maintain WCAG AA contrast for all text-on-colour pairings; never rely on colour alone to show seat state — taken seats also show a small cross, your seat a check.
- Overall feel: calm, certain and warm — a trusted older cousin who knows the road, never a flashy luxury brand.

Present the design system as a tidy sticker sheet on a single canvas, grouped by category, with clear section headings.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 2: Home (mobile)

**Purpose:** The first screen most people see, from a link shared in a family WhatsApp group or Facebook. It makes the promise and starts the search in one glance.
**Position in journey:** First visit, before booking.
**Attach:**
- `flow/s01-home--trainline-mobile-web.png`: borrow the headline-then-inline-search stack and the one-way/return segmented control.
- `flow/s01-home--trainline-popular-journeys.jpg`: borrow the navy header band with the white pill and the horizontal row of photo route cards.

### Prompt — paste this into your AI design tool

```
Design the mobile home page (390 × 844, scrolling) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The first screen most visitors see, usually from a link shared in a family WhatsApp group. It states the promise and lets them start a Harare → Mutare search in one tap.

Layout (top to bottom):
- Navy header band (rounded bottom edge): TENDA wordmark (white, heavy italic wordmark from the supplied logo) at top left, "Help" text link at top right. Headline in white, headline-lg: "Going home shouldn't be a gamble." Supporting line in body-md, white: "Book your seat to Mutare. Same price as the rank."
- Search card overlapping the bottom of the header band (white, radius lg, one soft shadow): From field "Harare (Roadport)", a circular swap button with a left-right arrow icon, To field "Mutare", date strip of 7 date chips starting "Today", passengers stepper "1 passenger", and a full-width blue primary button "Find buses".
- Trust strip: 3 short rows with line icons — shield-check "Your seat, or your money back", message-circle "Your family gets a WhatsApp when your bus leaves", ticket "Pay with EcoCash or cash at a TENDA office".
- "Popular routes" heading (headline-md) and a horizontally scrolling row of route cards (4:3 photo placeholder labelled "Photo: Christmas Pass at dawn" etc.): "Harare → Mutare · 3h 30m" and "Mutare → Harare · 3h 30m", each showing "US$10" in title-md and a gold "Daily" chip, and "Harare → Johannesburg · cross-border" showing "Ask on WhatsApp" instead of a price.
- Pale-blue band: "Sending something home?" headline-md, one line "Parcels from US$5. Your family gets a collection code.", secondary button "Send parcel".
- Footer: small TENDA wordmark, "The Pride of Manicaland", links "My bookings", "Parcels", "Help", "Terms".

Content / copy hints:
- Headline: "Going home shouldn't be a gamble."
- Sub-headline / supporting copy: "Book your seat to Mutare. Same price as the rank."
- CTAs and buttons: "Find buses", "Send parcel"
- Other key labels: "From", "To", "Date", "Passengers", "Popular routes", "Today"

Reference images attached (borrow the pattern, not the brand): from the Trainline mobile site, take the stacked promise headline followed directly by an inline search form; from the Trainline app, take the navy header band with an overlapping white search card and the horizontally scrolling photo route cards with "A → B" titles. Do not copy their logo, mint or purple colours, photos or wording.

Visual notes:
- Mobile, 390px wide, scrolling page; the search card must be fully visible above the fold.
- Generous white space, one blue button above the fold, gold only on the "Daily" chips.
- Text at least 14px; body copy 16px; WCAG AA contrast.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Calm and certain: Rudo should feel that booking her seat home is as simple as sending a WhatsApp, and that TENDA has done this for decades.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 3: Home (desktop)

**Purpose:** The same promise for people booking from a work computer or laptop, including relatives booking for someone else.
**Position in journey:** First visit, before booking.
**Attach:** `flow/s02-home-desktop--ikea-going-home.jpg`. Borrow the warm real-family photo with a short headline about home over its calm left side, and the search sitting directly on the hero.

### Prompt — paste this into your AI design tool

```
Design the desktop home page (1440 wide, scrolling) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The landing page for visitors on a computer, including relatives booking for someone else. Same promise as mobile, with room for one large photo.

Layout (top to bottom):
- Top bar on white: TENDA wordmark (navy) at left; "Book", "My bookings", "Parcels", "Help" at right.
- Hero: left half is a navy panel with the headline in white display-lg "Going home shouldn't be a gamble.", supporting line in body-lg "Book your seat to Mutare. Same price as the rank. Your family gets a WhatsApp when your bus leaves.", and the 480px-wide white search card (From "Harare (Roadport)", swap button, To "Mutare", date chips, passengers, blue button "Find buses"). Right half is a large photo placeholder labelled "Photo: a mother waiting at Mutare rank in morning light, real person, documentary style", rounded lg on the outer corner only.
- Trust row of 3 columns with line icons: "Your seat, or your money back", "Departures you can plan around", "Pay with EcoCash or cash".
- "Popular routes": 3 route cards in a row: "Harare → Mutare · 3h 30m · US$10", "Mutare → Harare · 3h 30m · US$10", and "Harare → Johannesburg · cross-border · Ask on WhatsApp", each with a photo placeholder.
- Pale-blue band split in two: left "Sending something home?" with "Parcels from US$5. Your family gets a collection code." and secondary button "Send parcel"; right a small photo placeholder "Photo: TENDA bus on Christmas Pass, credited to a bus spotter".
- Story strip on white: headline-md "Every trip home has two people in it." and one sentence "The one on the bus, and the one waiting at the other end. TENDA keeps both in the loop."
- Footer in navy: wordmark, "The Pride of Manicaland", links, "tendabuses.com".

Content / copy hints:
- Headline: "Going home shouldn't be a gamble."
- Sub-headline / supporting copy: "Book your seat to Mutare. Same price as the rank. Your family gets a WhatsApp when your bus leaves."
- CTAs and buttons: "Find buses", "Send parcel"
- Other key labels: "Popular routes", "From", "To", "Date", "Passengers"

Reference images attached (borrow the pattern, not the brand): from the IKEA careers hero, take the warm real-family photography and the short, emotional headline about home placed on a calm area beside the photo, with the search sitting directly in the hero. Do not copy their logo, colours, photo or wording.

Visual notes:
- Desktop 1440; content max width 1120px; the booking card stays 480px wide.
- Photo placeholders are clearly labelled grey blocks in surface-container-high — never stock models.
- One blue button in the hero; gold only on small chips; no shadows except the search card.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Proud but quiet: decades of Manicaland behind it, said in one photo and one sentence, with the booking form doing the talking.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 4: Search

**Purpose:** The focused form opened from the home search pill on small phones: route, date and passengers, nothing else.
**Position in journey:** Booking step 0.
**Attach:** `flow/s03-search--trainline-search.jpg`. Borrow the stacked white cards ("Where", "When", "Passengers") on a soft background, the swap icon between From and To, and the full-width button pinned at the bottom.

### Prompt — paste this into your AI design tool

```
Design the search screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
A full-screen form opened from the home search pill on small phones: choose route, date and passengers, then see departures.

Layout (top to bottom):
- Navy header band with a close (X) icon button at left (aria label "Close") and title "Find a bus".
- Card "Route": From "Harare (Roadport)" and To "Mutare", joined by a dotted vertical line with a navy dot and a gold dot, and a circular swap button with an up-down arrow icon on the right.
- Card "Date": a horizontal strip of 7 date chips ("Today Fri 24", "Sat 25", "Sun 26"…), with "Sat 25" selected in action blue; below it a text link "Choose another date".
- Card "Passengers": stepper with minus, "1", plus, and helper text "Up to 6 seats in one booking".
- Info banner in primary-container: "Book by 15 December and pay the normal fare, even at Christmas."
- Full-width blue primary button pinned at the bottom: "Find buses".

Content / copy hints:
- Headline: "Find a bus"
- Sub-headline / supporting copy: "Book by 15 December and pay the normal fare, even at Christmas."
- CTAs and buttons: "Find buses"
- Other key labels: "From", "To", "Date", "Passengers", "Choose another date"

Reference images attached (borrow the pattern, not the brand): from Trainline's search sheet, take the stacked white cards on a soft background, the swap control between origin and destination, and the single full-width button pinned to the bottom. Do not copy their logo, colours or wording.

Visual notes:
- Mobile 390 × 844; cards on a surface-container background; 44px minimum touch targets.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Plain and quick: three decisions, one button, nothing to read twice.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 5: Departures

**Purpose:** The list of today's buses. Rudo picks the one that gets her home before midday.
**Position in journey:** Booking step 1.
**Attach:**
- `flow/s04-departures--trainline-results.jpg`: borrow the navy header with the route pill and the departure cards (big times, arrow, stations, price on the right).
- `flow/s04-departures--blablacar-results.jpg`: borrow the vertical dot-and-line timeline inside each card.

### Prompt — paste this into your AI design tool

```
Design the departures list screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Shows every TENDA bus for the chosen day so Rudo can pick the one that gets her home before midday. Times, seats left and price must be readable in one glance.

Layout (top to bottom):
- Navy header band: back arrow, title "Choose a departure", and a white route pill "Harare → Mutare · Sat 25 Oct · 1 passenger" with an edit pencil icon.
- Date strip just under the header: "Fri 24", "Sat 25" (selected), "Sun 26", "Mon 27", each chip showing "from US$10".
- 4 departure rows, each a card: left side a vertical timeline — departure time in numeral-lg "07:00" with "Roadport (Harare)", a dotted line labelled "3h 30m", arrival "10:30" with "Mutare rank"; right side "US$10" in title-md and a status: gold chip "3 seats left" on the 07:00, "12 seats left" in on-surface-variant text on the 08:00 and 10:00, and a grey "Full" label on the 13:00 (row in surface-container-high, not tappable). Each row has small line icons for WiFi and luggage.
- The 07:00 row is selected (departure-row-selected, pale blue).
- Sticky bottom bar: "07:00 · seat not chosen yet" and blue primary button "Choose seat".

Content / copy hints:
- Headline: "Choose a departure"
- Sub-headline / supporting copy: "All times are departure from Roadport (Harare)."
- CTAs and buttons: "Choose seat"
- Other key labels: "3 seats left", "12 seats left", "Full", "3h 30m", "US$10", "Roadport (Harare)", "Mutare rank"

Reference images attached (borrow the pattern, not the brand): from Trainline's "Choose outbound", take the navy header with the white route summary pill and the departure cards with large times joined by an arrow and the price aligned right; from BlaBlaCar's bus results, take the vertical dot-and-line timeline between departure and arrival inside each card. Do not copy their logos, purple or blue palettes, operator badges or wording.

Visual notes:
- Mobile 390 × 844; times in numeral-lg with tabular numerals; prices aligned right.
- Never show a time without its place; full departures stay visible but clearly unavailable (text label plus grey, not colour alone).
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Certain: no surprises, no fake urgency — a true seat count, a fixed price, a clear time.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 6: Choose seat

**Purpose:** Rudo picks her own seat, which makes the booking feel real.
**Position in journey:** Booking step 2.
**Attach:** `flow/s05-seat-map--shopee-seat-map.jpg`. Borrow the seat legend row (available, selected, taken), the numbered seat grid with an aisle, and the passenger tag showing the chosen seat.

### Prompt — paste this into your AI design tool

```
Design the choose-seat screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Rudo picks her own seat on the 07:00 bus. Choosing seat 14A by the window is what makes the booking feel real.

Layout (top to bottom):
- Navy header band: back arrow, title "Choose your seat", sub-line "07:00 · Roadport → Mutare rank · Sat 25 Oct".
- Progress bar: Seat (current), Details, Pay, Done.
- Info banner in primary-container with a clock icon: "Your seat is held for 10 minutes while you book."
- Legend row: white tile "Available", blue tile with a check "Your seat", grey tile with a small cross "Taken".
- Seat map of a 70-seat bus in a white rounded card: front of bus at the top with a steering-wheel icon labelled "Driver" and a door icon labelled "Door"; rows 1–18 numbered down the aisle; 2 + 2 seats per row labelled A B | C D; about half the seats taken; seat 14A selected in action blue. Show rows 10–17 in view with the card scrolling.
- Sticky bottom bar: "Seat 14A · window" on the left in title-md, "US$10" below it, and the blue primary button "Add your details" on the right.

Content / copy hints:
- Headline: "Choose your seat"
- Sub-headline / supporting copy: "Your seat is held for 10 minutes while you book."
- CTAs and buttons: "Add your details"
- Other key labels: "Available", "Your seat", "Taken", "Driver", "Door", "Seat 14A · window"

Reference images attached (borrow the pattern, not the brand): from Shopee's seat selection, take the legend row of seat states, the numbered grid with a central aisle and the timer banner at the top. Do not copy their logo, orange colours or wording, and drop the countdown pressure — show the hold as a calm fact, not a ticking timer.

Visual notes:
- Mobile 390 × 844; seat tiles 44px with 8px gaps; taken seats use grey plus a cross so state never depends on colour alone.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Warm and in control: like choosing your own seat at the window before anyone else arrives at the rank.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 7: Your details

**Purpose:** The minimum details to send her ticket, plus the optional family contact, TENDA's signature feature.
**Position in journey:** Booking step 3.
**Attach:**
- `flow/s06-details--blablacar-passenger.jpg`: borrow the white cards for passenger and contact on a soft background.
- `flow/s06-details--shopee-review.jpg`: borrow the trip summary card at the top of the form.

### Prompt — paste this into your AI design tool

```
Design the your-details screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Collects only what's needed to send the WhatsApp ticket, plus an optional family contact who gets a message when the bus leaves and arrives — TENDA's signature feature.

Layout (top to bottom):
- Navy header band: back arrow, title "Your details".
- Progress bar: Seat, Details (current), Pay, Done.
- Booking summary card: "Harare → Mutare", "Sat 25 Oct · leaves Roadport 07:00", "Seat 14A", "US$10" right-aligned in title-md.
- Card "Passenger": input "Your name" (placeholder "Rudo Moyo"), phone input "Your WhatsApp number" with fixed "+263" prefix and placeholder "77 123 4567", helper text "Your ticket arrives here on WhatsApp."
- Card "Family contact (optional)" with a message-circle icon: helper "They get a WhatsApp when your bus leaves and when it arrives." Inputs "Their name" (placeholder "Mai Rudo") and "Their WhatsApp number" (+263 prefix). Small text: "They can reply STOP at any time."
- Checkbox: "I've read the luggage rules: 1 bag and 1 hand item per seat." with a text link "View luggage rules".
- Sticky bottom bar with blue primary button "Go to payment".

Content / copy hints:
- Headline: "Your details"
- Sub-headline / supporting copy: "Your ticket arrives on WhatsApp."
- CTAs and buttons: "Go to payment"
- Other key labels: "Your name", "Your WhatsApp number", "Family contact (optional)", "Their name", "Their WhatsApp number", "View luggage rules"

Reference images attached (borrow the pattern, not the brand): from BlaBlaCar's passenger details, take the separate white cards for passenger and contact with labels above the fields; from Shopee's "Fill in details", take the compact trip summary card at the top. Do not copy their logos, colours or wording, and do not ask for email, ID or passport.

Visual notes:
- Mobile 390 × 844; visible labels above every field, never placeholder-only; 52px inputs.
- The family contact card gets a pale-blue primary-container background so it stands out as the special part.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Light and caring: two fields for her, and an easy way to let her mother know she's on the road.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 8: Pay

**Purpose:** Two ways to pay that match Rudo's life: EcoCash now, or hold the seat and pay cash, with the guarantee right beside the button.
**Position in journey:** Booking step 4.
**Attach:**
- `flow/s07-pay--trainline-option-cards.jpg`: borrow the side-by-side option cards with one selected.
- `flow/s07-pay--blablacar-payment-method.jpg`: borrow the radio list of payment methods.
- `flow/s07-pay--trainline-price-locked.jpg`: borrow the soft blue "price and seats locked until" banner.

### Prompt — paste this into your AI design tool

```
Design the payment screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Rudo chooses how to pay: EcoCash now, or hold the seat and pay cash at a TENDA office before 18:00 the day before. The seat guarantee sits right next to the pay button to answer her biggest fear.

Layout (top to bottom):
- Navy header band: back arrow, title "Pay".
- Progress bar: Seat, Details, Pay (current), Done.
- Info banner in primary-container with a lock icon: "Seat 14A is held for you until 06:52."
- Booking summary card: "Harare → Mutare · Sat 25 Oct · 07:00", "Seat 14A · Rudo Moyo", divider, "Total" and "US$10" in numeral-lg.
- Heading "How do you want to pay?" and two radio cards stacked:
  1. Selected: "EcoCash" with a phone icon — "Pay now. You'll get a prompt on 077 123 4567." Small text "No booking fee."
  2. "Hold seat, pay cash" with a building icon — "Pay at any TENDA office by 18:00 Fri 24 Oct. Unpaid holds are released."
- Guarantee row with shield-check icon in success colours: "Your seat, or your money back plus the next bus free."
- Sticky bottom bar with blue primary button "Pay US$10 with EcoCash" (when the second card is selected, the button reads "Hold seat, pay cash").
- Small print under the button: "By paying you accept the travel rules." with a text link "View travel rules".

Content / copy hints:
- Headline: "How do you want to pay?"
- Sub-headline / supporting copy: "Seat 14A is held for you until 06:52."
- CTAs and buttons: "Pay US$10 with EcoCash", "Hold seat, pay cash"
- Other key labels: "EcoCash", "Total", "No booking fee", "Your seat, or your money back plus the next bus free.", "View travel rules"

Reference images attached (borrow the pattern, not the brand): from Trainline's ticket options, take the selectable option cards with one clearly selected; from BlaBlaCar, take the clean radio list of payment methods; from Trainline's payment page, take the soft blue banner stating how long the price and seat are locked. Do not copy their logos, colours, card or wallet brands, or wording — TENDA shows EcoCash and cash only.

Visual notes:
- Mobile 390 × 844; the price is the largest number on the screen; the guarantee line sits directly above the button.
- No card-number fields, no Apple Pay, no promo codes.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Safe for a first-time online payer: familiar EcoCash, a cash option, and a plain promise if anything goes wrong.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 9: Waiting for EcoCash

**Purpose:** The short wait while Rudo approves the EcoCash prompt on her phone, so she knows exactly what to do.
**Position in journey:** Booking step 4b.
**Attach:**
- `flow/s08-waiting--lloyds-processing.jpg`: borrow the centred processing card with a simple spinner.
- `flow/s08-waiting--trainline-booking-spinner.jpg`: borrow the single spinner with one line naming what's happening.

### Prompt — paste this into your AI design tool

```
Design the waiting-for-payment screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Shown for up to 5 minutes while Rudo approves the EcoCash prompt on her phone. It names the wait and tells her exactly what to do.

Layout (top to bottom):
- Plain white screen, no header band, no navigation.
- Centred: a 64px phone icon inside a primary-container circle with a thin action-blue progress ring around it.
- Title in headline-md: "Waiting for EcoCash".
- Body in body-md: "Check your phone and enter your EcoCash PIN to pay US$10."
- Step list with numbers: "1. Look for the EcoCash prompt on 077 123 4567", "2. Enter your PIN", "3. Your ticket arrives on WhatsApp".
- Small text: "Seat 14A stays held while you pay."
- Text link at the bottom: "Didn't get the prompt? Send it again".

Content / copy hints:
- Headline: "Waiting for EcoCash"
- Sub-headline / supporting copy: "Check your phone and enter your EcoCash PIN to pay US$10."
- CTAs and buttons: "Send it again"
- Other key labels: "Seat 14A stays held while you pay."

Reference images attached (borrow the pattern, not the brand): from Lloyds and Trainline, take the calm centred spinner with one plain line saying what is happening. Do not copy their logos, colours or wording, and never say "Processing…".

Visual notes:
- Mobile 390 × 844; lots of white space; no buttons competing with the instruction.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Patient and clear: she knows the next step and that her seat isn't going anywhere.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 10: Seat booked

**Purpose:** The one celebration in the product, the moment Rudo knows she won't queue at 6am.
**Position in journey:** Booking step 5, the magic moment.
**Attach:**
- `flow/s09-booked--expedia-confirmed.jpg`: borrow the big plain confirmation headline, the departure → arrival row and the single pill button.
- `flow/s09-booked--trainline-youre-going.jpg`: borrow the coloured top band announcing the destination.

### Prompt — paste this into your AI design tool

```
Design the seat-booked confirmation screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The one celebration in the product: Rudo's seat is booked, her ticket is on WhatsApp and her mother will be told when the bus leaves. She should feel she can sleep instead of queueing at 6am.

Layout (top to bottom):
- Navy header band (taller, rounded bottom edge) with a gold check-circle icon, small line "You're going home to" and "Mutare" in display-lg white.
- Headline below the band in headline-lg navy: "Your seat is booked!" (the only exclamation mark in the product).
- Ticket card: "Seat 14A" in numeral-lg, "Sat 25 Oct", a row "07:00 Roadport (Harare) → 10:30 Mutare rank" with a gold arrow, "Boarding from 06:40", booking reference "TND-48213".
- Two confirmation rows with icons in success colours: message-circle "Your ticket is on WhatsApp", user "Mai Rudo gets a message when your bus leaves".
- Blue primary button "View ticket" and a secondary button "Add to calendar".
- Small text link at the bottom: "Need to change something? Change date".

Content / copy hints:
- Headline: "Your seat is booked!"
- Sub-headline / supporting copy: "Seat 14A · Sat 25 Oct · leaves Roadport 07:00. Boarding from 06:40."
- CTAs and buttons: "View ticket", "Add to calendar", "Change date"
- Other key labels: "You're going home to", "Your ticket is on WhatsApp", "Mai Rudo gets a message when your bus leaves"

Reference images attached (borrow the pattern, not the brand): from Expedia's confirmation, take the very large plain confirmation headline, the departure-to-arrival row and the single full-width pill button; from Trainline, take the strong coloured top band that names the destination. Do not copy their logos, colours, illustrations, cross-sell ads or wording — no hotel offers, no upsells.

Visual notes:
- Mobile 390 × 844; gold appears on the check icon and the route arrow only; no confetti.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Quiet relief and pride: the trip home is sorted, and the person waiting at the other end will know.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 11: Ticket

**Purpose:** The ticket page she opens or screenshots at Roadport, readable at a glance in sunlight.
**Position in journey:** Day of travel.
**Attach:**
- `flow/s10-ticket--meetup-ticket.jpg`: borrow the ticket-shaped card with a notch, the large code area and the dotted divider.
- `flow/s10-ticket--blablacar-thank-you.jpg`: borrow the "quick boarding, show this code" instruction above the code.

### Prompt — paste this into your AI design tool

```
Design the ticket screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The ticket Rudo opens or screenshots at Roadport on Saturday morning. The conductor checks it; she reads it in sunlight.

Layout (top to bottom):
- Navy header band: back arrow, title "Your ticket", share icon button (aria label "Share ticket").
- Ticket card with a notch on both sides and a dotted divider:
  - Top half: TENDA wordmark small in navy; "Harare → Mutare" in title-md; "Sat 25 Oct"; large row "07:00" → "10:30" in numeral-lg with a gold arrow; "Roadport (Harare)" and "Mutare rank" under the times; a grid of three facts: "Seat 14A", "Boarding 06:40", "Passenger Rudo Moyo".
  - Bottom half after the dotted divider: a large QR code (placeholder pattern) and the booking reference "TND-48213" in label-md; instruction "Show this to the conductor when you board."
- Status chip "Booked" in success colours above the card.
- Row "Family contact: Mai Rudo · gets your departure and arrival messages" with a message-circle icon.
- Two secondary buttons side by side: "Change date" and "Cancel booking" (text link style, not destructive red here).
- Help row: "Your seat is guaranteed. If it isn't held, you get your money back plus the next bus free."

Content / copy hints:
- Headline: "Your ticket"
- Sub-headline / supporting copy: "Show this to the conductor when you board."
- CTAs and buttons: "Change date", "Cancel booking", "Share ticket"
- Other key labels: "Seat 14A", "Boarding 06:40", "Booked", "Family contact"

Reference images attached (borrow the pattern, not the brand): from Meetup's ticket, take the ticket-shaped card with side notches, a dotted tear line and a large centred code; from BlaBlaCar, take the short "for quick boarding, show this code" instruction. Do not copy their logos, colours or wording, and no Apple Wallet buttons.

Visual notes:
- Mobile 390 × 844; highest contrast in the product (navy on white); seat and time are the biggest text.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Solid and official, like a printed ticket she can trust at a crowded rank.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 12: My bookings and booking detail

**Purpose:** Find upcoming trips and manage one: view the ticket, change the date, cancel.
**Position in journey:** Return visits.
**Attach:**
- `flow/s11-my-bookings--vrbo-reservation.jpg`: borrow the booking detail with key facts at the top and two stacked actions.
- `flow/s11-my-bookings--vrbo-manage.jpg`: borrow the "Manage booking" sections that each explain the rule before the button.

### Prompt — paste this into your AI design tool

```
Design two screens side by side (each 390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare: "My bookings" and the booking detail.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Rudo finds her upcoming trip and manages it: view the ticket, change the date if her shift changes, or cancel.

Layout (top to bottom):
Screen A — My bookings:
- Navy header band with title "My bookings" and tabs "Upcoming" (selected) and "History".
- Upcoming booking cards: card 1 "Harare → Mutare · Sat 25 Oct · 07:00 · Seat 14A" with a "Booked" chip in success colours and a chevron; card 2 "Mutare → Harare · Sun 26 Oct · 15:00 · Seat 9C" with a "Held · pay by 18:00 Sat" chip in primary-container.
- Parcel card: "Parcel TP-4821 · Medium · to Mutare rank" with a "On the 07:00 bus" chip.
- Bottom navigation: Book, My bookings (active), Parcels, Help.
- Also show a small empty-state variant below the frame: icon in a primary-container circle, "No bookings yet", "Book a seat and your ticket arrives on WhatsApp.", button "Book seat".
Screen B — Booking detail:
- Navy header band: back arrow, title "Sat 25 Oct · Harare → Mutare".
- Facts block: "07:00 Roadport (Harare) → 10:30 Mutare rank", "Seat 14A", "Booking TND-48213", "Paid US$10 with EcoCash".
- Blue primary button "View ticket".
- Section "Change date": rule "One free change until 18:00 Fri 24 Oct." and secondary button "Change date".
- Section "Cancel booking": rule "Cancel until 18:00 Fri 24 Oct and your US$10 goes back to your EcoCash within 24 hours." and a text button "Cancel booking" in error colour.
- Section "Family contact": "Mai Rudo · 077 765 4321" and text button "Change family contact".

Content / copy hints:
- Headline: "My bookings"
- Sub-headline / supporting copy: "One free change until 18:00 Fri 24 Oct."
- CTAs and buttons: "View ticket", "Change date", "Cancel booking", "Book seat", "Change family contact"
- Other key labels: "Upcoming", "History", "Booked", "Held · pay by 18:00 Sat", "No bookings yet"

Reference images attached (borrow the pattern, not the brand): from Vrbo, take the reservation detail with the key facts at the top and stacked actions, and the "Manage booking" page where each section states its rule in plain words before its button. Do not copy their logo, blue palette, map or wording.

Visual notes:
- Mobile 390 × 844 each; one blue button per screen (View ticket on B); the destructive action is a text button, never the most prominent element.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- In control: every rule is stated before she taps, with no surprises.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 13: Change date and cancel confirmations

**Purpose:** The two "are you sure" moments, written as consequences with verb buttons.
**Position in journey:** Managing a booking.
**Attach:** `flow/s12-confirm--shopee-dialog.jpg`. Borrow the centred dialog over a dimmed screen that states the consequence before the two buttons.

### Prompt — paste this into your AI design tool

```
Design two confirmation bottom sheets side by side (each over a 390 × 844 booking-detail screen) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The two moments Rudo commits to something she can't undo: changing the date and cancelling. Each states the consequence in one line, with verb buttons.

Layout (top to bottom):
Sheet A — Change date (over a 40% navy scrim on the booking detail screen):
- Grab handle, title "Change date?" in headline-md.
- A mini date strip with "Sat 1 Nov" selected and a departure chosen: "07:00 · 14 seats left".
- Consequence line: "Move seat 14A from Sat 25 Oct to Sat 1 Nov. This is your one free change."
- Stacked buttons: blue primary "Change date", secondary "Keep Sat 25 Oct".
Sheet B — Cancel booking:
- Grab handle, title "Cancel booking?".
- Consequence line: "Your US$10 goes back to your EcoCash within 24 hours. Seat 14A is released."
- Stacked buttons: destructive "Cancel booking" (error background, white text), secondary "Keep booking".
- After each sheet, show the resulting toast at the bottom of the screen: "Date changed" and "Booking cancelled".

Content / copy hints:
- Headline: "Change date?" and "Cancel booking?"
- Sub-headline / supporting copy: "Move seat 14A from Sat 25 Oct to Sat 1 Nov. This is your one free change." and "Your US$10 goes back to your EcoCash within 24 hours. Seat 14A is released."
- CTAs and buttons: "Change date", "Keep Sat 25 Oct", "Cancel booking", "Keep booking"
- Other key labels: "Date changed", "Booking cancelled"

Reference images attached (borrow the pattern, not the brand): from Shopee's booking check dialog, take the dimmed background and a short consequence statement placed before two clearly labelled buttons. Do not copy their logo, orange colours or wording, and never use "Are you sure?", "Yes" or "No".

Visual notes:
- Mobile 390 × 844; sheets rounded xl at the top; buttons 52px and full width.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Honest and calm: she sees exactly what happens to her seat and her money before she decides.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 14: Send parcel

**Purpose:** Send groceries or medicine home on today's bus, paid now or by the family at collection.
**Position in journey:** Parcels branch.
**Attach:**
- `flow/s13-parcel--grab-delivery-details.jpg`: borrow the from/to summary with a dotted connector and the stacked detail rows with chevrons.
- `flow/s13-parcel--grab-recipient-form.jpg`: borrow the simple recipient fields (name, number).

### Prompt — paste this into your AI design tool

```
Design the send-parcel screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Rudo books a parcel of groceries or medicine onto a TENDA bus to Mutare. Her family gets a collection code and must show ID to collect. She can pay now or let them pay at collection.

Layout (top to bottom):
- Navy header band: back arrow, title "Send parcel", sub-line "From US$5. Same-day on TENDA buses."
- Route card: "From Roadport (Harare)" and "To Mutare rank" joined by a dotted line with navy and gold dots; below it "Drop off by 06:30 for the 07:00 bus" with a clock icon.
- Segmented control "Parcel size" with three options showing price and example: "Small · US$5 · documents, up to 2 kg", "Medium · US$7 · a grocery bag, up to 10 kg" (selected), "Large · US$10 · up to 25 kg".
- Card "Who collects it": inputs "Their name" (placeholder "Mai Rudo"), "Their WhatsApp number" (+263 prefix), helper "They get a 4-digit collection code and must show ID."
- Card "Your WhatsApp number" (+263 prefix), helper "You get the parcel reference here."
- Radio pair "Who pays": "I pay now with EcoCash" (selected) and "They pay at collection".
- Note in primary-container: "Not allowed: cash, fuel, or anything illegal. View parcel rules."
- Sticky bottom bar: "Medium parcel · US$7" and blue primary button "Send parcel".

Content / copy hints:
- Headline: "Send parcel"
- Sub-headline / supporting copy: "From US$5. Same-day on TENDA buses."
- CTAs and buttons: "Send parcel", "View parcel rules"
- Other key labels: "Parcel size", "Who collects it", "Who pays", "I pay now with EcoCash", "They pay at collection"

Reference images attached (borrow the pattern, not the brand): from Grab's delivery details, take the origin-to-destination summary with a dotted connector and the stacked rows for each decision; from Grab's drop-off form, take the short recipient name and number fields. Do not copy their logo, green colours, map, delivery-speed options or wording — TENDA parcels travel on scheduled buses only.

Visual notes:
- Mobile 390 × 844; the size control is the main decision, so give it the most space; prices shown inline, no surprises at the end.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Dependable: like handing the bag to someone you trust, with a receipt this time.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 15: Parcel status

**Purpose:** Where the parcel is now, and the collection code the family needs.
**Position in journey:** After sending a parcel.
**Attach:**
- `flow/s14-tracking--shopee-timeline.jpg`: borrow the vertical timeline with timestamps on the left and the newest step on top.
- `flow/s14-tracking--cvs-stepper.jpg`: borrow the simple four-step stepper with clear done/current/upcoming states.

### Prompt — paste this into your AI design tool

```
Design the parcel status screen (390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Rudo (or her mother, from the WhatsApp link) sees where the parcel is and how to collect it.

Layout (top to bottom):
- Navy header band: back arrow, title "Parcel TP-4821".
- Status card: chip "At Mutare rank" in success colours; title-md "Ready to collect"; line "Arrived 10:34 on the 07:00 bus".
- Collection block in a gold-bordered card (accent outline, white background, navy text): "Collection code" label, "4821" in numeral-lg, and "Bring this code and your ID to the TENDA office at Mutare rank."
- Vertical status timeline (newest at the top): "10:34 · At Mutare rank" (current, blue ring), "07:05 · Left Roadport on the 07:00 bus" (done, navy dot), "06:22 · Dropped off at Roadport" (done), "Fri 18:10 · Parcel booked" (done). Times on the left in body-sm.
- Details: "Medium · up to 10 kg", "From Rudo Moyo", "To Mai Rudo · 077 765 4321", "Paid US$7".
- Secondary button "Share collection code" and text link "Help with this parcel".

Content / copy hints:
- Headline: "Ready to collect"
- Sub-headline / supporting copy: "Bring this code and your ID to the TENDA office at Mutare rank."
- CTAs and buttons: "Share collection code", "Help with this parcel"
- Other key labels: "At Mutare rank", "Collection code", "Left Roadport on the 07:00 bus", "Dropped off at Roadport", "Parcel booked"

Reference images attached (borrow the pattern, not the brand): from Shopee's parcel tracking, take the vertical timeline with timestamps on the left and the newest step on top; from CVS, take the bold stepper with clearly different done, current and upcoming states. Do not copy their logos, colours, driver-location features or wording.

Visual notes:
- Mobile 390 × 844; the collection code is the most prominent element after the status; states use shape as well as colour.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Reassuring: the parcel arrived, and the person waiting knows exactly what to bring.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 16: Error states

**Purpose:** The two errors people will actually meet, written in TENDA's voice from `docs/COPY.md`.
**Position in journey:** At Choose seat and at Pay.
**Attach:** none. The copy comes from `docs/COPY.md`.

### Prompt — paste this into your AI design tool

```
Design two error-state screens side by side (each 390 × 844) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
The two errors people will actually meet. Each says what happened, why, and the one tap that fixes it — no blame, no "oops".

Layout (top to bottom):
Screen A — Payment didn't go through (on the Pay screen):
- Navy header band "Pay"; progress bar at Pay.
- Error banner at the top (error-container, alert icon): title "Payment didn't go through" in label-md; body "EcoCash didn't confirm your US$10 within 5 minutes. Your seat is held for 10 more minutes."
- The booking summary card and the two payment cards below, unchanged.
- Sticky bottom: blue primary button "Try EcoCash again" and secondary button "Hold seat, pay cash".
Screen B — The departure is full (on the Choose seat screen):
- Navy header band "Choose your seat".
- Error banner: title "The 07:00 departure is full"; body "The last seat was booked a moment ago. The 08:00 has 12 seats left."
- A suggestion card showing the 08:00 departure row (08:00 → 11:30, "12 seats left", "US$10").
- Blue primary button "Book 08:00" and a text button "Choose another day".
- Also show one field-validation example under the frames: phone input in error state with helper text "Enter a Zimbabwe mobile number, like 077 123 4567".

Content / copy hints:
- Headline: "Payment didn't go through" and "The 07:00 departure is full"
- Sub-headline / supporting copy: "EcoCash didn't confirm your US$10 within 5 minutes. Your seat is held for 10 more minutes." and "The last seat was booked a moment ago. The 08:00 has 12 seats left."
- CTAs and buttons: "Try EcoCash again", "Hold seat, pay cash", "Book 08:00", "Choose another day"
- Other key labels: "Enter a Zimbabwe mobile number, like 077 123 4567"

Visual notes:
- Mobile 390 × 844; errors use the error-container banner, never a red full screen; the fix is always one tap away.
- No "sorry", no "oops", no "invalid", no exclamation marks.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Steady: something didn't work, here's what to do, and her seat is still safe.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Prompt 17: Help and the guarantee

**Purpose:** Plain answers to the questions that stop a first-time online booker, with a human on WhatsApp one tap away.
**Position in journey:** Reachable from every screen.
**Attach:** none.

### Prompt — paste this into your AI design tool

```
Design the help page (390 × 844, scrolling) for TENDA Buses, a mobile-first website where Manicaland people in Harare book a guaranteed bus seat home to Mutare and send tracked parcels.

Brand identity:
- Product: TENDA Buses, a mobile-first booking website (tendabuses.com) for Manicaland people in Harare going home to Mutare. Book a guaranteed seat at the rank fare (US$10), get the ticket on WhatsApp, and the family at home gets departure updates. Parcels too.
- Brand character: "Every trip home has two people in it: the one on the bus and the one waiting at the other end." We hold booked seats until departure; the family is kept informed. Everyday line: "Going home shouldn't be a gamble."
- Tone: Warm, but not soppy. Plain, but not cold. Proud, but not boastful. Certain, but not pushy. English, numbers instead of adjectives, no exclamation marks except the one seat-booked moment.
- Visual style: Trainline-style clarity: a deep navy header band with a white pill search, white pages, one task per screen, one blue button per screen. Documentary photography of real Manicaland journeys (early-morning light on the Harare–Mutare road and Christmas Pass, real people, never models). Almost flat: depth from colour bands and 1px hairlines, not shadows.
- Type: Figtree only (one family, weights 400/500/700/800). Times, seat numbers and prices set large.
- Colour: TENDA navy #0B2B5C (header band, headings), signal blue #1570C9 (the one primary button and selected states), heritage gold #F2B233 only behind navy text (seats-left chips, the seat-booked moment, route arrows), white #FFFFFF pages with pale-blue #E8F0FB section bands, text #121A2B and secondary text #4A5568.
- Avoid: dark or flashy "luxury coach" looks, gradients, drop shadows on cards, ads or several competing buttons, grey text lighter than #4A5568 or smaller than 14px, a second font, and the words luxury, world-class, premium, Submit, Continue, Oops, reserve, coach.

Screen purpose:
Answers the questions that stop a first-time online booker, states the seat guarantee in full, and puts a real person on WhatsApp one tap away.

Layout (top to bottom):
- Navy header band: title "Help", line "Talk to a person on WhatsApp, or find your answer below."
- Contact card: blue primary button "Message TENDA on WhatsApp" with a message-circle icon, and below it "Call the booking desk" as a secondary button; line "Open every day 05:00–20:00".
- Guarantee card in success-container colours with a shield-check icon: title "Your seat, or your money back", body "If your booked seat isn't held when you board, you get your US$10 back on EcoCash and a free seat on the next TENDA bus."
- Question list with chevrons: "How do I pay cash for a held seat?", "When does a held seat get released?", "Can I change my date?", "How much luggage can I bring?", "How does my family contact get messages?", "How do I send a parcel?", "Where is Roadport and the Mutare rank office?"
- One question expanded as an example: "When does a held seat get released?" → "At 18:00 the day before your bus leaves. You get a WhatsApp reminder at 14:00 that day."
- Footer strip: "TENDA Buses · The Pride of Manicaland" and links "Travel rules", "Parcel rules", "Privacy".

Content / copy hints:
- Headline: "Help"
- Sub-headline / supporting copy: "Talk to a person on WhatsApp, or find your answer below."
- CTAs and buttons: "Message TENDA on WhatsApp", "Call the booking desk"
- Other key labels: "Your seat, or your money back", "Open every day 05:00–20:00"

Visual notes:
- Mobile 390 × 844, scrolling; questions as 56px-tall rows with hairline dividers; the WhatsApp button is the one blue button.
- Opening hours and contact numbers are placeholders until TENDA confirms them.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, same form elements, same cards.

What this screen should feel like:
- Like asking a trusted cousin who works at the rank: short answers, and a real person if she needs one.

Use tokens from docs/DESIGN.md where applicable for exact colors, type, spacing, and component styling.
```

---

## Sources

- Product context: `docs/DEFINE.md`
- Brand strategy: `docs/DESIGN.md` → Product Identity
- Design tokens: `docs/DESIGN.md`
- Copy rules: `docs/COPY.md`
- Flow references (Mobbin, October 2026; internal reference only, stored in `docs/design-references/flow/`):
  - Trainline booking flow: https://mobbin.com/flows/6be1c2ae-08be-4a2e-8c62-8ed1c28f9c4a
  - Trainline passengers: https://mobbin.com/flows/f94ea03d-3f9e-435a-a5b7-19946c7442b1
  - BlaBlaCar bus booking: https://mobbin.com/flows/fe5fde44-ddb5-43f5-b161-f46d687702fc
  - Shopee seat selection: https://mobbin.com/flows/4b244753-0033-45b5-9e5f-3272646fc4a2
  - Grab delivery order: https://mobbin.com/flows/29794f92-ab64-464d-b664-0b4c862707cd
  - Vrbo manage booking: https://mobbin.com/flows/894b9329-72d4-4957-ac1e-264439210e4b
  - Expedia confirmed: https://mobbin.com/screens/dd7132ea-8076-41a1-9ee4-9cccfd7ccd72
  - Meetup ticket: https://mobbin.com/screens/427c632f-e3ad-471e-8652-1d95b622e4f3
  - Lloyds processing: https://mobbin.com/screens/fcc662bf-e8ac-42be-b19c-ff6d2cc0fed3
  - Shopee parcel tracking: https://mobbin.com/screens/16424e24-00a4-46ca-a5b7-c4653be987ca
  - CVS order stepper: https://mobbin.com/screens/6ade5a53-e2a8-423e-b5d9-c135e5bf010c
  - IKEA going-home hero: https://mobbin.com/sites/sections/20bfbcca-e030-47a8-987d-3f2ca638f657
- Firecrawl: Trainline mobile homepage screenshot and branding (mint #00A88F, indigo #2332C4, TLCircular), BlaBlaCar branding (blue #0071EB, navy #001536), captured October 2026. Used only to understand their visual language; none of their colours, fonts or assets are used.
- Placeholders to confirm with TENDA before the screens go live: booking desk hours, phone numbers, the Mutare rank office name, departure times, journey durations, and cross-border routes and fares.
