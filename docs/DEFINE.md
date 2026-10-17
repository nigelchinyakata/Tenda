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

### Header

**Persona:** Rudo, the family's Harare link

**Tagline:** A Manicaland-born working woman in Harare who goes home to Mutare at month-end and holidays, carrying or sending the family's groceries and medicine. She can't plan the trip because she never knows if she'll get a seat or when the bus will actually leave.

### Identity

**Role:** A shop assistant at a Harare city-centre supermarket or wholesaler, earning about US$250–300 a month (close to the national average of about US$253), sometimes topped up with small side-selling.

**One-line description:** 32, born in Sakubva, Mutare. She's been in Harare 8 years, sharing a rented room in Glen View. She's the family's Harare link: she brings groceries, medicine and school things home, and her mother calls her when something is needed.

### Problem Context

**When does the problem come up?** The Saturday after month-end payday, and at Easter and Christmas. She starts planning on Friday.

**Where (physical setting, device, time of day)?** Friday lunch break at work, on a Tecno or Itel Android phone with a WhatsApp bundle and little open data, trying to find out which bus leaves Saturday morning and whether it'll be full. Then at the Harare rank by about 6am on Saturday, holding two bags of groceries.

**What's the emotional state?** Anxious and rushed. She's up before dawn, carrying money and goods through a crowded rank, and unsure whether she'll get a seat on an early bus or lose half her short weekend waiting.

**Who else is around?** Her mother in Sakubva texting "uri kupi?" ("where are you?"); sometimes a niece or nephew travelling with her; touts and conductors at the rank.

### Behaviors & Habits

**What do they do repeatedly to solve the problem?**
- On Friday she asks in her family or workmates' WhatsApp group "ko mabhazi eMutare ari kuenda nguvai mangwana?" ("what time are the Mutare buses leaving tomorrow?").
- On Saturday she gets to the rank very early, about 6am, and queues. She takes whichever bus is loading first rather than the one she trusts, because she has already lost time.

**What workarounds have they built?**
- She sends parcels with a known conductor or a travelling cousin, then calls home repeatedly to check they arrived.
- She sends her mother a photo of the bus number plate so the family can watch for it.

The real cost of her habit is time and sleep, not money.

### Tools & Tech Fluency

**Apps and tools they currently use:** WhatsApp (all day, on a bundle), Facebook (often Facebook Lite), TikTok, and EcoCash through the `*151#` USSD menu (typed phone codes, no app or data needed) for airtime, ZESA electricity tokens and sending money home.

**Last new tool adopted (and did it stick?):** The EcoCash app or InnBucks to send money to her mother. It stuck because it saved a trip to an agent.

**Comfort level with online payments:** She pays with mobile money (EcoCash) and cash in USD, both regularly. She has never paid a business through a website. A checkout that hands off to an EcoCash prompt on her phone feels familiar; typing card details doesn't. She needs two ways to pay: EcoCash at checkout, and "reserve now, pay cash at a TENDA office or agent before a deadline".

**Trust level:** She trusts WhatsApp messages from a real, verified business number. She distrusts links from strangers because of scams. AI tools play no part in this job.

### Job-to-be-Done

**When** payday comes and I'm going home to Mutare on Saturday with groceries for my mother,
**I want to** know on Friday that my seat is secured and when the bus will really leave,
**So I can** sleep instead of queueing at 6am, arrive home before midday with everything intact, and tell my mother exactly when to meet me.

### Triggers

**What specific event causes them to search for a solution?** A bad trip. She queued from 6am, the first two buses filled before she reached the door, she got home after 2pm, and her mother waited at the Mutare rank for hours. The bad trip is the lead trigger; a late or incomplete parcel is secondary.

**How often does this happen?** She travels home every month. A bad trip happens a few times a year, almost always on month-end Saturdays, at Easter and in the Christmas rush, when fares also jump.

**What's the cost (time, money, emotional)?**
- **Time:** half of a two-day weekend lost (4–6 hours queueing and waiting).
- **Money:** festive fares up to double, plus local transport to and from the rank.
- **Emotional:** guilt at making her mother wait, and fear of carrying money and goods through a crowd.

### Current Alternatives

**What are they doing today to handle the job?**
- She queues at the rank for whichever Mutare bus is loading first (TENDA, CAG or another operator). She's loyal to whoever leaves first.
- She has never booked a bus online, CAG's pre-booking included, so TENDA would be her first online booking.
- For parcels, she uses a conductor, a travelling relative, or a WhatsApp courier ("from US$5").

**How long have they been doing it that way?** Since she moved to Harare, about 8 years.

**How satisfied are they (1-10) with the current approach?** 4. She always gets home eventually and the fare is fine, but she hates the queue and the uncertainty.

### Pains & Frustrations

**Pain 1:** "I don't know if the 7am will be full until I'm standing there." She wakes at 4:30, queues at 6, and gets on at 8:30. *Fix: a live seat count per departure ("12 seats left") she can check on Friday.*

**Pain 2:** "If I pay online, how do I know the seat is real when I get there?" *Fix: a WhatsApp ticket from TENDA's verified business number with her name and seat number, and the "your seat or your money back" guarantee shown beside the Pay button.*

**Pain 3:** "My mother waits at the rank not knowing which bus I'm on or when it'll arrive." *Fix: an automatic "Rudo's bus left Harare at 7:05, expected in Mutare 10:40" message to her saved family contact.*

**Pain 4:** "I give the parcel to the conductor and just hope." *Fix: a waybill reference at drop-off and a collection code sent to her mother.*

**Pain 5:** "If my manager changes my Saturday shift, I lose my fare." *Fix: free date change up to a cut-off (for example 6pm the day before), done from the WhatsApp ticket in a couple of taps, with the refund rule shown at checkout.*

### Decision Criteria & Objections

**Top 3 things they'll evaluate a solution on:**
1. **Price:** a booked seat must cost exactly the rank fare, with no booking fee.
2. **The seat is really there:** proof on her phone from TENDA itself.
3. **Easy to pay and change:** EcoCash or cash, and she can move the date if her shift changes.

**The objection that most often kills the deal:** "What if I pay on EcoCash and the bus is full anyway, or they say they never got my money?"

**The proof that would overcome that objection:**
- A WhatsApp ticket from TENDA's verified number.
- "Your seat or your money back plus the next coach free", stated plainly at checkout.
- Above all, a workmate or relative who has already booked and boarded with it. Word of mouth in her WhatsApp groups is her strongest proof.

### Willingness to Pay

**What they currently spend on the problem (money + time):**
- Fare: about US$10–15 each way. TENDA was reported at about US$10, CAG at US$15. At holidays it's up to double.
- Local transport to and from the rank: about US$1–2 each way. *[Research-backed; confirm.]*
- Time: 4–6 hours queueing and waiting on a bad trip.
- A typical month-end round trip costs US$25–35, about 10–12% of her monthly pay.

**Anchor products and their prices:**
- CAG Travellers Harare–Mutare: US$15
- A bus parcel to Mutare: about US$10
- A WhatsApp courier: "from US$5"
- Econet WhatsApp bundle: about US$1 a week

**Acceptable price:**
- A booked seat: exactly the rank fare.
- A parcel: US$5–10 depending on size, paid either by Rudo at drop-off or by her family at collection.

**Price ceiling (above which they'd say "I'll think about it"):** Anything above the rank fare for a seat, and she'll queue instead. Above about US$10 for a parcel, she'll find a travelling relative.

**Budget bucket (personal / business / discretionary):** Personal, from her salary at month-end. Parcel fees are sometimes paid by the family in Mutare.

### Watering Holes

**Specific communities (name them):**
- Her family and workmates' WhatsApp groups (the most powerful, but private).
- Facebook groups "MUTARE ZIMBABWE", "Mutare Community" and "Mutare Community group 2".
- The bus-fan groups "Zimbabwe Long Distance Buses (ALL BUSES INCL.)" and "Highways & Heritage", which she mostly sees through shares.
- Her church group in Glen View.

**Specific podcasts / newsletters / channels (name them):**
- **Radio:** Diamond FM (Mutare) and Star FM (Harare), morning and drive-time shows. *[Research-backed; confirm which stations she listens to.]*
- **Facebook and TikTok:** bus-spotter accounts Chiwambu Transit Eye and African Highway Diaries; Baxter The Traveler on TikTok, who has filmed TENDA trips.
- **News:** The Manica Post (Manicaland's regional paper), H-Metro and ZimLive.

**People they trust and follow (name them):** Her own workmates and relatives who've done the trip. After them, local Mutare Facebook pages. Not ads from businesses she doesn't know.

### Anti-Persona

**Who looks similar but is a bad fit?** The informal cross-border trader or bulk vendor who travels Harare ⇄ Mutare (and on to the Forbes border post) several times a week with large loads of goods. They want luggage space, cheap freight and the freedom to jump on any bus at the last minute.

**Why would those people churn or complain?** They book, then no-show or change constantly, which wastes seats Rudo-type travellers could have had. Their luggage won't fit seat-ticket allowances, and they'll argue the guarantee every week.

**How do we keep them from signing up in the first place?**
- A clear luggage allowance per seat (for example 1 bag plus 1 hand item, up to [X] kg). Bulk goods go as paid parcels, not luggage.
- One free date change per booking, not unlimited changes.
- No-shows forfeit the fare unless the change was made before the cut-off.

*Based on: the Product Offer, 5 web research passes (salary scales, data bundle prices, festive fare reports, Mutare community groups, bus and parcel pricing), and the member's answers. 0 customer interviews. Recommended next step: 5 conversations with Harare-based Manicaland travellers to validate Problem Context, Triggers, Pains, Willingness to Pay and radio habits.*

## 3. Pricing Strategy

### Who Pays

Rudo, the traveller, pays from her personal month-end salary, per trip. The buyer is the user. Parcels are paid either by Rudo at drop-off or by her family in Mutare at collection. The value is linked to a transaction: each seat and each parcel is a separate purchase.

### How the Business Earns

**Supports another business.** The booking site charges no fee of its own; it earns for TENDA's coach business in three ways:
- filling more seats, by taking passengers from the queue and from CAG;
- selling more parcels;
- cutting empty seats from no-shows.

Rejected: a booking fee or paid membership. Rudo won't pay a cent above the rank fare, so any surcharge would send her back to the queue.

### Pricing Model

| Decision | Choice |
| --- | --- |
| **Billing unit** | Per seat, per trip, at the rank fare. Parcels by size band. |
| **Plans** | One fare for everyone; no tiers. |
| **Entry** | Book free, no account needed. Two ways to pay: **EcoCash at checkout**, or **reserve and pay cash** at a TENDA office or agent by 6pm the day before departure (the seat is released if unpaid). Cash reservations are capped at about 20% of each coach's seats. |
| **Cadence** | Pay per trip. Paid seats get one free date change before the cut-off (6pm the day before); after that, no-shows forfeit the fare. |
| **Extra use** | 1 bag plus 1 hand item per seat; extra goods travel as a paid parcel. |
| **Festive promise** | Book by 15 December (or 2 weeks before Easter) and pay the normal fare; walk-ups pay the festive fare. |

**The whole offer in one sentence:** For Manicaland travellers in Harare, TENDA delivers a guaranteed seat home for US$10 per seat per trip (the same as the rank fare), including WhatsApp ticket and departure updates to her family; parcels start from US$5, and booking ahead locks the normal fare even at Christmas.

### Price Anchors

- **CAG Travellers, Harare–Mutare: US$15.** TENDA sits US$5 below, with a seat guarantee and family updates CAG doesn't offer.
- **Bus parcel to Mutare, about US$10, and a WhatsApp courier "from US$5".** TENDA parcels start at US$5 and add a receipt, a same-day promise and a collection code.
- **Festive fares across Zimbabwe: up to double the normal fare.** TENDA's book-ahead promise keeps the normal fare, the strongest reason to book online.

### Launch Price

**Seat: US$10 per trip, Harare–Mutare,** the reported TENDA rank fare. *[Working figure; confirm TENDA's current fare before launch.]*

**Parcels, advertised as "from US$5":**
- Small (documents, up to 2 kg): US$5
- Medium (a grocery bag, up to 10 kg): US$7
- Large (up to 25 kg): US$10

**Value ceiling:** the rank fare. Rudo's real gain is time and certainty (4–6 hours saved on a bad trip), not money, so she won't pay above the rank fare. For parcels, the ceiling is about US$10, the point where a travelling relative becomes the alternative.

**Cost floor per online seat:**
- Gateway fee: about US$0.30–0.50 (3–5% of US$10) *[working assumption]*.
- WhatsApp: about 7 utility messages (to Rudo and her family contact) at US$0.004 each, about US$0.03.
- SMS fallback: about US$0.05 *[working assumption]*.
- Guarantee payouts: rare, because seats are capped at real capacity.

**Anchor position:** US$5 under CAG, equal to the rank, and up to half the walk-up price at Christmas.

**Sanity line:** US$10 − about US$0.58 direct cost ≈ **US$9.40 kept per online seat**. That's positive, and every seat filled that would otherwise have gone empty is almost pure gain for TENDA.

### Your Price Line

**DM version:** "Book your TENDA seat to Mutare online. Same price as the rank, US$10, no queue, and your seat is guaranteed. Book by 15 December and you pay the normal fare, even at Christmas."

**Full version:** For Manicaland travellers in Harare, TENDA delivers a guaranteed seat home for US$10 per seat per trip (the same as the rank fare), including WhatsApp ticket and departure updates to her family; parcels start from US$5, and booking ahead locks the normal fare even at Christmas.

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

### Customer Persona

Researched October 2026.

- **Salaries:**
  - National average about US$253 a month (wage.is, February 2026, https://wage.is/zimbabwe/).
  - Civil-service scale about US$370 to nearly US$900 (The Herald, https://www.heraldonline.co.zw/civil-servants-smile-to-the-bank-as-revised-salaries-kick-in/).
  - C-band US$463–536 (ZiFM News on Facebook).
- **Data costs:** Econet WhatsApp bundles cost US$0.50–1.50 a week and US$3–7 a month (Paynow guide, https://paynow.co.zw/blog/complete-guide-to-econet-usd-bundles-pricing-validity-and-how-to-buy-online/; Econet, https://www.econet.co.zw/usd-data-bundles/).
- **Festive fares:**
  - Transport owners "double their fares" (GroundUp, https://groundup.org.za/article/zimbabweans-festive-season-travel-no-holiday_693/).
  - Rural fares hiked 50% (The Herald, https://www.heraldonline.co.zw/rural-bus-operators-hike-fares/).
  - Facebook thread: "Why are Zimbabwe bus fares higher on Christmas?"
- **Communities:**
  - Facebook groups "MUTARE ZIMBABWE" (https://www.facebook.com/groups/241169327298644/), "Mutare Community" (https://www.facebook.com/groups/1332436687469818/) and "Mutare Community group 2" (https://www.facebook.com/groups/463194299606850/).
  - Bus groups "Zimbabwe Long Distance Buses (ALL BUSES INCL.)" and "Highways & Heritage".
  - Manica Post on Facebook.
- **Fare and parcel anchors:** see the Product Offer sources (CAG US$15; bus parcel about US$10; WhatsApp courier from US$5).
- **Member-confirmed:** the persona is the woman who is the family's Harare link, near-average income, travels Saturday morning, arrives early and queues, pays by mobile money and cash, has never booked online, needs date changes, the bad trip is the lead trigger, a booked seat must cost exactly the rank fare, parcels can be paid at drop-off or collection, and she listens to radio.
- **Unverified assumptions:** her name, age and neighbourhood are illustrative; local transport cost to the rank; specific radio stations.

### Pricing Strategy

Researched October 2026.

- **Business model:** `productos/define/BONUS-Business-Models.md#business-15-supports-another-business`. Pricing layers and price setting: `productos/define/BONUS-Pricing-Models.md` ("Keep the layers separate"; chapter 25).
- **Anchors:**
  - CAG Travellers Harare–Mutare US$15 (Rome2Rio, https://www.rome2rio.com/s/Harare/Mutare).
  - Bus parcel about US$10 (Zimbabwe Long Distance Buses Facebook group).
  - WhatsApp courier "from US$5" (Instagram listing).
  - Festive fare hikes up to double (GroundUp; The Herald).
- **Cost floor:**
  - WhatsApp utility messages for the "Rest of Africa" region (including Zimbabwe): US$0.004 each (SleekFlow rate table as of 1 October 2026, https://sleekflow.io/en-us/blog/whatsapp-business-price; Meta pricing, https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).
  - Payment gateway fee of 3–5%: *[working assumption]*; Paynow and ContiPay merchant fees aren't published and must be confirmed. Paynow notes bank-to-wallet fees of 1.5–5% (https://paynow.co.zw/blog/ecocash-charges-understanding-how-much-you-pay/).
  - SMS fallback about US$0.05 per message: *[working assumption]*.
- **Member-confirmed:** no booking fee (seat equals the rank fare); fixed fare for advance bookers at festive peaks; US$10 working seat price; parcels advertised "from US$5"; cash reservations held until 6pm the day before and capped at about 20% of each coach.
