# TENDA Buses — Define

*Last updated: October 2026*

## Summary

For Manicaland people living in Harare who go home once a month and at holidays, to help them avoid the rank-day gamble (no guaranteed seat, no real departure time, parcels handed over with no receipt) and get a confirmed seat, a known departure and same-day tracked parcels. TENDA does this with **Seat & Send**: website booking that only sells real seats, live WhatsApp departure messages, and collection-coded parcels linked to one saved family contact. It is backed by decades of Manicaland trust and a public monthly on-time record, and de-risked by "your seat or your money back plus the next coach free" and "same-day parcels or your fee back".

TENDA is a heritage, family-run coach operator on the Harare ⇄ Mutare corridor. Seat & Send replaces turning up at the rank and asking touts, and handing parcels to a conductor on trust. Its closest rival, CAG Travellers, already sells seats online. TENDA's edge is linking the traveller in Harare to the household in Mutare: one account carries her trips, her parcels and the family member waiting at the other end.

## 1. Product Offer

### Customer

Manicaland-born working adults (about 25–45) living in Harare who go home to Mutare and Manicaland roughly once a month and at holidays: month-end, long weekends, Christmas and Easter. Between trips, the same people send groceries and goods to family. Today they turn up at the rank and take whichever bus is loading, ask touts for times and fares, or pre-book with CAG Travellers. *[Research-backed; confirm TENDA's Harare loading point and current fare with TENDA.]*

### Pain

The main pain is uncertainty. On a going-home trip she can't know whether she'll get a seat or when the bus will actually leave. She crosses town to the rank with bags of groceries, faces touts and conflicting times, waits while the bus fills, and can't tell family when she'll arrive.

Parcels carry two fears: she hands goods to a conductor with no proof they were sent, and no idea when they'll arrive, while family waits at the Mutare rank hoping.

Supporting pains are safety and comfort (overloading, rough crews) and holiday price jumps. *[Research-backed from passenger posts and news reports; confirm in 5 traveller conversations.]*

### Outcome

- **Travel:** her seat is guaranteed on her phone before she leaves work, and she gets the real departure time, with updates if it changes. She stops guessing at the rank and can tell family when she'll be home. *[TENDA does not commit to leaving before a coach is full; confirm departure policy with TENDA.]*
- **Parcels:** she gets a WhatsApp or SMS receipt with a reference at drop-off, and her family is messaged when the parcel reaches Mutare the same day.

### Mechanism

**TENDA Seat & Send: one booking, linked to her family at home.**

1. **Book on the TENDA website in under 2 minutes.** It's mobile-first: pick the coach and seat, pay by EcoCash, card or USD, and get the ticket on WhatsApp or SMS. WhatsApp is the backup booking line. Each coach sells only its real seat count, so a booked seat can't be resold.
2. **Live departure messages** go to her and to her saved family contact: confirmed, boarding, departed, and the expected arrival time.
3. **Parcels on the same account:** a waybill reference at drop-off, and an arrival message with a collection code to the saved Mutare contact, so only the right person collects.
4. **Why it's hard to copy:** decades of TENDA trust in Manicaland, plus travel and parcels both linked to the same family contact. CAG sells seats; TENDA keeps the household connected.

### Guarantee

- **Your seat, or your money back plus the next coach free.** If a booked seat isn't available at boarding, she gets a full refund and a free seat on the next TENDA coach.
- **Same-day parcels, or the fee back.** If a parcel isn't in Mutare the same day, the sending fee is refunded. If it's lost, TENDA pays its declared value up to US$50.

*[Confirm both with TENDA before publishing.]*

### Proof

**Now (heritage):**
- "Carrying Manicaland home since [YEAR]." *[Confirm the founding year with TENDA.]*
- TENDA's reputation is public in Facebook bus groups. Passengers there call it "the pride of Mutare", and one review praises it as "organized and clean… very reliable and safe".
- TENDA has public Google and Facebook reviews. *[Member-confirmed; check the rating before showing it.]*

**From launch (verifiable):**
- A public on-time board on the website, published monthly: the share of departures that left within 15 minutes of the stated time, and the share of booked seats honoured. *[Member-confirmed that TENDA will publish this.]*
- A parcel counter: "X parcels delivered same day this month."
- Google and Facebook reviews requested by WhatsApp after every trip, with the star rating shown beside the booking form.

## Product Shape

### Primary Shape

`web-app` — a mobile-first booking site on TENDA's own domain. Passengers book and pay as a guest, with no sign-up, and get their ticket by WhatsApp or SMS. An optional account saves their family contact and parcel history.

### Secondary Shapes

None. WhatsApp notifications (confirmed, boarding, departed, parcel arrived) and the staffed WhatsApp backup booking line are features of the web app, not a separate chat-assistant product.

### Why This Shape

The going-home traveller lives on her phone and in WhatsApp: WhatsApp is the largest driver of mobile data use in Zimbabwe (POTRAZ). A web link works on any phone, needs no install or storage, and can be shared in family WhatsApp groups and TENDA's Facebook posts, where the audience already is.

Rejected `mobile-app`, even though CAG Travellers ships an iOS app. A once-a-month traveller won't install and update an app for one trip on costly data.

Rejected `productized-service`. The coach journey is TENDA's existing operation; what's new, and what gets designed and built, is the booking and tracking layer.

### Live Means

A stranger opens the TENDA site on their phone over HTTPS, books and pays for a real Harare → Mutare seat through live checkout, and receives a WhatsApp or SMS ticket with seat number and reference. They also get the live departure messages, and their saved family contact can receive them too. The parcel flow works end to end as well: a booking reference is issued at drop-off and the arrival message with a collection code reaches the Mutare contact. No test keys, seeded data or staff-only steps are involved.

### First Sale Means

A real passenger (not TENDA staff or the member) pays for a seat through the site's live checkout via a Zimbabwean gateway (EcoCash, OneMoney or card), the money lands in TENDA's merchant account, and the seat is issued and honoured at boarding.

### Build Implications

- **Mobile-first and light:** it must load fast on low-end Android phones and costly data.
- **Booking and seats:** guest checkout; a schedule and seat inventory per coach that sells only real seats (no overbooking); seat selection.
- **Payments:** a local gateway is required, because Stripe isn't available to Zimbabwean businesses. The candidates are Paynow (most widely used) and ContiPay (EcoCash, OneMoney, Visa and Mastercard in one integration). Card support differs between gateways and must be confirmed in the PRD. USD pricing.
- **Messaging:** WhatsApp Business API (or a provider such as Twilio or 360dialog) plus SMS fallback for tickets, departure updates and parcel notifications. These carry per-message costs.
- **Parcels:** waybill references, collection codes, and status updates at drop-off and arrival.
- **Staff tools:** a simple dashboard for TENDA staff to see bookings per coach, mark boarding and departure, log parcels in and out, and issue refunds under the guarantee.
- **Public pages:** an on-time board and parcel counter fed from that departure and parcel data.
- **Data:** stores a second person's phone number (the family contact) with consent; follows Zimbabwe's Cyber and Data Protection Act.
- **Hosting:** TENDA's own domain over HTTPS. No app-store review.

### Sequence

None planned. Revisit after 3 months live: if more than about 30% of bookings still arrive through the WhatsApp backup line, add a WhatsApp booking assistant as a secondary `chat-assistant` shape. An Android app is considered only if repeat travellers ask for one.

## 2. Customer Persona

*Filled by `define-customer-persona`.*

### Header

### Identity

### Problem Context

### Behaviors & Habits

### Tools & Tech Fluency

### Job-to-be-Done

### Triggers

### Current Alternatives

### Pains & Frustrations

### Decision Criteria & Objections

### Willingness to Pay

### Watering Holes

### Anti-Persona

## 3. Pricing Strategy

*Filled by `define-pricing`.*

### Who Pays

### How the Business Earns

### Pricing Model

### Price Anchors

### Launch Price

### Your Price Line

## 4. Business Strategy *(optional)*

*Filled by `define-business-strategy` — the optional deep dive, usually run when the money questions get real.*

### Cost & Margin

### Unfair Advantage

### North Star Metric

## Idea Audit *(optional)*

*Filled by `define-idea-finder` — only the parts the member chose to keep (usually The One Idea, The Route, and the Parking Lot), under the worksheet's section names.*

## Sources

### Product Offer

Researched October 2026. Also draws on `docs/tenda-brand-research.md`.

- **Competitor fare and frequency:** CAG Travellers Coaches, Harare (Mbare Musika) → Mutare, 5 departures a day, US$15, about 4h30 — Rome2Rio, https://www.rome2rio.com/s/Harare/Mutare
- **Competitor online booking:** CAG Tours website (https://cagtours.co.zw/) and iOS app ("Book intercity bus travel across Zimbabwe in seconds", https://apps.apple.com/ve/app/cag-tours/id6771501641). CAG's Facebook posts promote Mutare pre-booking with express pick-up and drop-off points.
- **Premium fare benchmark:** CityLink Luxury Coaches, Bulawayo → Harare, US$35 — https://www.citylinkcoaches.co.zw/routes-fares/
- **Parcel prices:** buses charge about US$10 for a Harare → Mutare parcel (Zimbabwe Long Distance Buses Facebook group). A Harare–Mutare courier on Instagram advertises "affordable rates from just US$5". Formal couriers include Zimpost and UrgentGo.
- **Pain language:**
  - CAG Facebook post: "Why ask strangers about bus fares and routes…"
  - Zimbabwe Long Distance Buses group thread: "WHAT PASSENGERS ACTUALLY WANT: 'I want to arrive safely…'", with replies describing a crew as "very rough".
  - Reports of overloading and breakdowns: IOL (16 Oct 2026, overloaded Zimbabwe buses on the N1); The Zimbabwean (Dec 2025); Mbare Musika breakdown posts.
- **TENDA reputation:** a Facebook group review ("organized and clean… very reliable and safe"); "pride of Mutare" posts in bus-fan groups; the X history thread by @HistoryFactou (11 Mar 2026), which is unsourced.
- **Working assumptions still to confirm with TENDA (offer):** Harare loading point, current fare, departure policy, the refund-plus-next-coach guarantee, the US$50 parcel cap, the founding year, the current review rating, and whether same-day parcels are feasible on scheduled coaches.

### Product Shape

Researched October 2026.

- **Comparable shapes:** CAG Travellers sells through a website (https://cagtours.co.zw/) and an iOS app. Intercape sells through a web booking flow plus retail partners. FlixBus sells through a web app plus a mobile app.
- **WhatsApp and data use:** POTRAZ reports WhatsApp as the largest driver of mobile data use in Zimbabwe (about 36.76%), via Techzim, https://www.facebook.com/techzim/posts/1564945378978127/
- **Payment gateways:**
  - Paynow is the most widely integrated, covering EcoCash, OneMoney, Visa and Mastercard according to zimapps.co.zw and flixtechs.co.zw. Nyuchi Africa's 2026 review says Paynow does not support Visa or Mastercard.
  - ContiPay covers Visa and Mastercard (3D Secure), EcoCash, OneMoney, InnBucks and ZIPIT in one API (Nyuchi Africa, https://www.nyuchi.com/blog/zimbabwe-payment-gateways-2026).
  - Pesepay specialises in EcoCash.
  - Card support must be confirmed in the PRD.
- **Constraint:** Stripe does not onboard Zimbabwean businesses, so the web-app shape's default Stripe checkout is replaced by a local gateway.
