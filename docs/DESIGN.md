---
version: alpha
name: TENDA Road
description: A light, mobile-first booking system in TENDA navy and signal blue with a heritage-gold accent — Trainline-style clarity, one task per screen, built for low-end Android phones and costly data.
colors:
  primary: "#0B2B5C"
  on-primary: "#FFFFFF"
  primary-container: "#E8F0FB"
  on-primary-container: "#0B2B5C"
  action: "#1570C9"
  on-action: "#FFFFFF"
  action-pressed: "#0F5BA8"
  accent: "#F2B233"
  on-accent: "#0B2B5C"
  accent-text: "#8A5A00"
  surface: "#FFFFFF"
  surface-container: "#F4F6FA"
  surface-container-high: "#E8ECF2"
  on-surface: "#121A2B"
  on-surface-variant: "#4A5568"
  outline: "#8792A6"
  outline-variant: "#DCE2EB"
  error: "#B3261E"
  on-error: "#FFFFFF"
  error-container: "#FCE8E6"
  on-error-container: "#7A1A14"
  success: "#1E7B45"
  on-success: "#FFFFFF"
  success-container: "#E3F4EA"
  on-success-container: "#14532D"
typography:
  display-lg:
    fontFamily: Figtree
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Figtree
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Figtree
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
  title-md:
    fontFamily: Figtree
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: Figtree
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Figtree
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Figtree
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
  label-md:
    fontFamily: Figtree
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
  label-sm:
    fontFamily: Figtree
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.02em
  numeral-lg:
    fontFamily: Figtree
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.01em
rounded:
  none: 0
  sm: 8px
  md: 12px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 20px
components:
  header-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-lg}"
    rounded: "{rounded.xl}"
    padding: 20px
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    height: 56px
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 52px
  button-primary-pressed:
    backgroundColor: "{colors.action-pressed}"
    textColor: "{colors.on-action}"
  button-primary-disabled:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 52px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 52px
  input-field-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
  route-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 0
  departure-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 16px
  departure-row-selected:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  seat-available:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    size: 44px
  seat-selected:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
  seat-taken:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
  chip-seats-left:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  ticket-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 20px
  banner-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.on-error-container}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  banner-success:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.on-success-container}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  toast:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 16px
  bottom-nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
    height: 64px
---

# TENDA Buses

## Product Identity

*Drafted: October 2026*

| Brand Card | |
| --- | --- |
| **Name** | TENDA (written "TENDA Buses" online) · tendabuses.com |
| **Worldview** | Every trip home has two people in it: the one on the bus and the one waiting at the other end. |
| **We believe** | A seat should belong to a person before they leave home, and the family waiting in Mutare deserves to know where she is. |
| **We sound** | Warm · plain · quietly proud |
| **Visual style** | Documentary photography of real Manicaland journeys · top reference: Trainline's clarity |

### Name

**TENDA**, written "TENDA Buses" online. The booking service is simply "TENDA" ("book on TENDA"); the earlier working name "Seat & Send" is retired.

- **Say it:** two syllables, easy in English and Shona.
- **Spell it:** five letters, one way to write it.
- **Search it:** clashes with Tenda, the Chinese router brand (tendacn.com). Always pair the name with "Buses" or "Mutare" online (#TendaBuses, "TENDA Buses").
- **Feel it:** decades of Manicaland goodwill; fans already post "the pride of Mutare".
- **Domain:** **tendabuses.com** (available, primary), with **booktenda.com** (available) redirecting to it. GoDaddy returned tenda.co.zw and tendabuses.co.zw as unavailable, but may not sell `.co.zw`; check with a Zimbabwean registrar.

### Worldview

Every trip home has two people in it: the one on the bus and the one waiting at the other end.

The everyday line is: **"Going home shouldn't be a gamble."**

### Contrarian Belief

Most bus companies sell a seat to whoever is standing at the rank. We believe a seat should belong to a person before they leave home, and that the family waiting in Mutare deserves to know where she is.

TENDA holds booked seats until departure, even when a walk-up passenger is waiting with cash.

### Tone of Voice

**Attributes:**
- **Warm, but not soppy:** a trusted older cousin who knows the road.
- **Plain, but not cold:** short sentences; one idea per line; numbers, not adjectives.
- **Proud, but not boastful:** decades of Manicaland behind it, said quietly.
- **Certain, but not pushy:** it states facts and never uses fake urgency.

**Language:** English, with a little Shona in greetings and sign-offs where it feels natural ("Mhoro", "Famba zvakanaka"). Never in instructions, prices or the guarantee.

**We say:** your seat, home, your family, on time, leaves at, here's what happens next, sorry, your money back.

**We don't say:** luxury, world-class, class is permanent, your comfort is our priority, valued customer, Dear Sir/Madam, ALL CAPS, multiple exclamation marks, unexplained jargon (waybill, manifest).

**Example:** "Rudo, your seat 14A is held. The bus leaves Roadport at 07:00 tomorrow. We'll tell your mother when you're on the road. Sleep well."

### Visual Style

**Lane:** documentary photography of real Manicaland journeys and real people, under the existing TENDA logo.

**Style notes:**
- Early-morning light on the Harare–Mutare road and Christmas Pass, warm and honest, never glossy stock.
- People shown as they are: a traveller with her grocery bags, a mother waiting at Sakubva, a driver greeting passengers. No models.
- The logo's navy and blue are the brand anchors. Screens are clean and white, with one clear action per screen.
- Bus-spotter community photos of TENDA coaches are featured, credited and with permission, alongside commissioned passenger shots.

**Composition rules:**
- One person or one bus per image, with generous sky and road.
- Pair a photo with a phone showing the WhatsApp ticket, to show the promise in one frame.
- Text never sits on a busy part of a photo. Headlines go on clean navy or white.

**References:**
- Trainline: clarity and one-task screens.
- Humans of New York: one real person and one line of their story.
- Airbnb host photography: real people in their real places, warmly lit.

*Sources:*
- **Competitors checked:** CAG Travellers (forest green, functional), Intercape (orange), Eagle Liner (purple), FlixBus (lime). Zimbabwean operators default to fleet and "luxury" talk; none addresses the family at the other end.
- **Admired brand:** Trainline's brand page ("make train and coach travel easier", "a business with heart").
- **Domain checks:** GoDaddy, October 2026.
- **Bus-fan posts:** TENDA loads for Mutare at Roadport; "When it comes to the Mutare highway, class is permanent".

## Brand & Style

TENDA Road is a calm, mobile-first booking system for people going home: the structure of Trainline's app (a navy header band, a white search pill, photo route cards, one task per screen) wearing TENDA's own colours from its logo. The aesthetic intent is "certain at a glance": Rudo, on a low-end Android phone with a WhatsApp bundle, should see her seat, time and price without reading twice. Warmth comes from documentary photography of real Manicaland journeys and from heritage gold used sparingly, never from decoration. It must never become a dark, flashy "luxury coach" look, a busy page with ads or several competing buttons, or tiny grey text that's hard to read outdoors at the rank.

## Colors

`primary` is TENDA navy (#0B2B5C), sampled from the logo wordmark: it fills the header band, headings and the brand's big moments. `action` is the logo's bright "BUSES" blue (#1570C9), reserved for the one primary button on each screen and for selected states, so the next step is always the blue thing. `accent` is heritage gold (#F2B233), echoing TENDA's first gold-striped bus; it appears only as a fill behind navy text (seats-left chips, the seat-confirmed moment, route arrows), and `accent-text` (#8A5A00) is used where gold must be text on white. Pages are white `surface` with a pale-blue `primary-container` band to separate sections, as Trainline does. `on-surface-variant` (#4A5568) is the lightest text colour allowed, dark enough to read in sunlight. Every text pairing meets WCAG AA: white on action is about 5.0:1, navy on gold about 7.4:1, and on-surface-variant on white about 7.5:1.

## Typography

One family, Figtree (free on Google Fonts and the closest free match to Trainline's Circular), keeps pages to a single font download on costly data. Headings use 700–800 weights in sentence case: `display-lg` for the landing page, `headline-lg` in the header band, `headline-md` for screen titles, `title-md` for route names like "Harare → Mutare". `numeral-lg` sets departure times, seat numbers and prices large, with tabular numerals, because those are the facts she scans for. Body text never drops below 14px (`body-sm`, weight 500); 16px is the default. Buttons and chips use bold labels (`label-md`, `label-sm`). There are no all-caps labels, matching the copy rules in `docs/COPY.md`.

## Layout & Spacing

The layout is a single column designed at 360px wide first, with 20px side margins and a 16px gutter; on desktop the content sits in a 480px booking column beside a photo, never stretched wide. Spacing follows a 4/8 rhythm: 8px inside groups, 16px between related items, 24px between blocks, 40px between sections. Density is comfortable, not tight: one primary action per screen, placed where a thumb reaches it at the bottom of the viewport on phones. Route cards scroll horizontally in a row, as in Trainline's "Popular journeys", so the home screen stays short.

## Elevation & Depth

TENDA Road is almost flat. Depth comes from colour bands (navy header, pale-blue section band, white cards) and 1px `outline-variant` hairlines, not shadows, which keeps rendering cheap on low-end phones. The only shadow in the system is a soft one under the search pill where it overlaps the navy header band, so it reads as lifted. Modals and the toast sit on a 40% navy scrim rather than a blur.

## Shapes

Shapes are soft and friendly, matching "warm, but plain": interactive controls (buttons, search pill, chips, toast) are fully rounded pills; cards and photos use 16px corners; inputs use 12px; seat tiles use 8px so the seat map stays compact. The navy header band has a 28px rounded bottom edge, echoing Trainline's curved header. Nothing is sharp-cornered except full-bleed photos at the top of the landing page.

## Components

- **Header band:** navy, with the screen title in white and the search pill overlapping its rounded bottom edge.
- **Search pill:** a white, 56px-tall fully rounded field summarising From, To and Date. Tapping it opens the full search form.
- **Primary button:** a blue pill, 52px tall, always a verb plus a noun from `docs/COPY.md` ("Book seat", "Pay US$10 with EcoCash"). It has pressed and disabled variants; disabled uses grey with readable text, never faded blue.
- **Secondary button:** white with navy text and a navy hairline. It carries the second choice ("Hold seat, pay cash", "Keep booking").
- **Input fields:** 52px tall with a visible label above. In the error state the border and helper text turn `error`, with the helper text explaining the fix.
- **Route card:** a 4:3 photo on top, then "Harare → Mutare" in `title-md` and the duration in `body-sm`.
- **Departure row:** time in `numeral-lg`, then arrival, price and a gold seats-left chip. It turns pale blue when selected.
- **Seat tiles:** 44px touch targets in three states: available (white with a navy outline), selected (blue), taken (grey).
- **Ticket card:** a white card with seat, date, departure time and Roadport in large numerals, plus the booking reference. It's what she screenshots.
- **Banners:** error and success banners use the container colours with dark text.
- **Toast:** a dark pill at the bottom, 2–5 words, auto-dismissed.
- **Bottom navigation:** the four lexicon items, Book · My bookings · Parcels · Help.

## Do's and Don'ts

**Do:**
- Use exactly one blue primary button per screen.
- Show the seat, time and price in large numerals before anything else.
- Use real photography of Manicaland roads, buses and people on route cards and the landing page.
- Use gold only behind navy text, and only for seats-left, the confirmed moment and route arrows.
- Keep every touch target at least 44px.

**Don't:**
- Use a dark or flashy "luxury coach" theme.
- Put several competing buttons or any ads on a screen.
- Use grey text lighter than `on-surface-variant` or smaller than 14px.
- Use gold as text on white (use `accent-text`).
- Add drop shadows to cards, or gradients anywhere.
- Load a second font family.
