// =============================================================================
// Chip Shots blog — typed content collection.
//
// Posts are plain typed data (no CMS, no markdown tooling) so they stay
// consistent with the rest of the site and require zero new dependencies.
// To publish a post: add an object to `posts` below. The listing page,
// individual post pages and the sitemap all read from this one array.
// =============================================================================

import { business, img } from "@/lib/site";

// A post body is an ordered list of simple blocks. Keep it small on purpose —
// headings, paragraphs, bullet lists and call-to-action buttons cover a local
// business blog without needing a markdown renderer.
export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; label: string; href: string; external?: boolean };

export type Post = {
  slug: string; // URL segment, e.g. "indoor-things-to-do-henderson-summer"
  title: string;
  excerpt: string; // used for the card blurb AND the meta description
  date: string; // ISO date (YYYY-MM-DD) — drives sorting & sitemap lastModified
  readMinutes: number;
  category: string; // small eyebrow label, e.g. "Henderson Guide"
  image: string; // hero/card image — use a key from `img`
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "topgolf-alternative-henderson",
    title: "Searching for Topgolf Near Henderson? There's a Closer Way to Play",
    excerpt:
      "Topgolf Las Vegas is a great night — and a Strip trip. If you're in Henderson and want golf, dinner and drinks without the drive, here's what an indoor golf club offers instead.",
    date: "2026-07-12",
    readMinutes: 4,
    category: "Henderson Guide",
    image: img.heroBay,
    body: [
      {
        type: "p",
        text: "Every week, people in Henderson search for a Topgolf nearby — and end up looking at a drive to the Strip. Topgolf Las Vegas is genuinely fun, but it's also a production: the traffic, the parking, the wait for a bay on a weekend. If what you actually want is to hit golf balls with friends over dinner and drinks, there's a different kind of place five minutes from downtown Henderson — and it plays a different game entirely.",
      },
      { type: "h2", text: "Driving range entertainment vs. playing actual golf" },
      {
        type: "p",
        text: "Topgolf is a driving-range game: you hit balls at targets in an open field and score points. A TrackMan simulator bay is the course itself. At Chip Shots you play real rounds on 500+ real courses — Pebble Beach, St Andrews, Torrey Pines — with radar tracking every shot to the foot. There are casual arcade-style games too, so a group of non-golfers has just as much fun. The difference is that when you want to actually play golf, you can.",
      },
      {
        type: "ul",
        items: [
          "Five private TrackMan bays — the tech tour pros train on",
          "500+ real courses, plus games for groups and beginners",
          "Climate-controlled, private bays — no outdoor hitting line in July heat",
          "Clubs provided, up to four players per bay, billed by the hour not per person",
        ],
      },
      { type: "h2", text: "A restaurant and bar, not a concession stand" },
      {
        type: "p",
        text: "The kitchen at Chip Shots stands on its own — signature burgers, a Philly cheesesteak, wings, shareables — and the bar pours hand-built old fashioneds, signature cocktails and cold drafts, all delivered to your bay. Happy hour runs Monday through Friday, 3–6 PM, and the pricing follows you into the bays.",
      },
      { type: "cta", label: "See the menu", href: "/food-drink" },
      { type: "h2", text: "Five minutes, not forty-five" },
      {
        type: "p",
        text: "This is the practical part: we're at 1473 E Lake Mead Pkwy, Suite 110 — in the heart of Henderson, minutes from Water Street. Book a bay online, walk in, play. No Strip traffic, no parking garage, and a bay that's yours for the hour rather than a spot in a line.",
      },
      { type: "cta", label: "Book a bay in Henderson", href: business.booking, external: true },
      { type: "h2", text: "The short version" },
      {
        type: "p",
        text: "Topgolf is a destination night out, and there's a time for it. But if you're in Henderson and the plan is golf, dinner and drinks with your people — a private TrackMan bay down the street gets you more golf, better food and none of the drive. Come see for yourself.",
      },
      { type: "cta", label: "Reserve your bay", href: business.booking, external: true },
    ],
  },
  {
    slug: "happy-hour-henderson-guide",
    title: "The Happy Hour in Henderson Worth Leaving Work Early For",
    excerpt:
      "Monday through Friday, 3–6 PM: $5 drafts, $6 wells, $8 bites — and the pricing runs in the golf bays too. Here's the full Chip Shots happy hour, item by item.",
    date: "2026-07-12",
    readMinutes: 3,
    category: "Food & Drink",
    image: img.cocktailsHighball,
    body: [
      {
        type: "p",
        text: "A good happy hour is simple: real food, honest pours, prices that make 4 PM feel like a reward. Ours runs Monday through Friday from 3 to 6 PM — at the bar, at a table, or in a TrackMan bay, because happy-hour pricing runs in the bays too. That last part matters: nowhere else in Henderson does your five-dollar draft come with a par three at Pebble Beach.",
      },
      { type: "h2", text: "The drinks" },
      {
        type: "ul",
        items: [
          "$5 domestic drafts — Coors Light, Blue Moon, Modelo",
          "$6 well drinks — vodka, gin, tequila, rum, bourbon",
          "$7 craft, cider & wine — Firestone 805, Angry Orchard, house pours",
          "$10 house cocktails — Par Old Fashioned, Transfusion, Azalea, Peach Palmer, Blue Lagoon",
          "$2 off every other cocktail on the list",
        ],
      },
      { type: "h2", text: "The bites" },
      {
        type: "p",
        text: "The kitchen runs a dedicated happy-hour list: pretzel bites, mozzarella sticks, mini corn dogs, crispy pickle spears and pimento cheese dip at $8, loaded totchos, buffalo chicken dip and the slider trio at $10. The sleeper pick is the Caddie's Combo — a draft and six boneless wings for $12. Add fries or tots to anything for four bucks.",
      },
      { type: "cta", label: "See the full menu", href: "/food-drink" },
      { type: "h2", text: "Take it to a bay" },
      {
        type: "p",
        text: "This is the part first-timers don't expect: book a bay between 3 and 6 on a weekday and the happy-hour pricing follows you in. Order from your seat, play a few holes between rounds of drinks, and let the server keep them coming. It turns a quick after-work drink into the best two hours of the day — no logistics, no second stop.",
      },
      { type: "cta", label: "Book a bay for happy hour", href: business.booking, external: true },
      { type: "h2", text: "Where to find us" },
      {
        type: "p",
        text: "Chip Shots is at 1473 E Lake Mead Pkwy, Suite 110 in Henderson — minutes from Water Street and the 95. Walk-ins are always welcome at the bar; bays are worth booking ahead on Thursday and Friday afternoons. See you at three.",
      },
    ],
  },
  {
    slug: "trivia-night-henderson-tuesdays",
    title: "Trivia Night in Henderson: Free to Play, Every Tuesday at 6",
    excerpt:
      "Live trivia hosted by RobotBrain, every Tuesday at 6 PM — no cover, no sign-up, gift cards for the top teams, and a full kitchen and bar while you play.",
    date: "2026-07-11",
    readMinutes: 3,
    category: "Henderson Guide",
    image: img.diningRoom,
    body: [
      {
        type: "p",
        text: "Every Tuesday at 6 PM, the dining room at Chip Shots turns into Henderson's most comfortable trivia night. It's live, it's free, and it's hosted by RobotBrain — which means real rounds, good pacing and questions that reward a well-balanced team over a phone under the table. No cover, no sign-up sheet: show up a little early, grab a table and pick a team name you won't regret.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "ul",
        items: [
          "Every Tuesday, 6 PM — arrive early for a good table",
          "Free to play, no sign-up required",
          "1st place wins a $50 gift card, runner-up takes $25",
          "Full kitchen and bar running all night",
        ],
      },
      { type: "h2", text: "Come for trivia, stay for dinner" },
      {
        type: "p",
        text: "Trivia is better with a table full of food. The kitchen runs the full menu all night — signature burgers, wings, shareables built for a team to argue over — and the bar pours everything from cold drafts to hand-built old fashioneds. No golf required, though the bays are right there if your team wants to settle a tiebreaker properly.",
      },
      { type: "cta", label: "See the menu", href: "/food-drink" },
      { type: "h2", text: "Make Tuesday the standing plan" },
      {
        type: "p",
        text: "Henderson has plenty of places to eat on a Tuesday. Very few of them hand you a live game, a shot at next week's dinner and a room this comfortable to lose gracefully in. We're at 1473 E Lake Mead Pkwy, Suite 110 — doors open at 11 AM, trivia at 6. Bring the smart friend.",
      },
      { type: "cta", label: "Plan your visit", href: "/events" },
    ],
  },
  {
    slug: "indoor-things-to-do-henderson-summer",
    title: "Beat the Vegas Heat: 6 Indoor Things to Do in Henderson This Summer",
    excerpt:
      "When Henderson hits 110°, the patio and the driving range are off the table. Here are six air-conditioned ways to have a great afternoon — golf, food, happy hour and more.",
    date: "2026-06-14",
    readMinutes: 4,
    category: "Henderson Guide",
    image: img.bayMoody,
    body: [
      {
        type: "p",
        text: "From June through September, Henderson regularly climbs past 105°F — and the back patio, the driving range and the midday hike are all off the table. The good news: the valley is full of climate-controlled ways to have a great afternoon. Here's our running list of the best indoor things to do in Henderson when it's simply too hot to be outside.",
      },
      { type: "h2", text: "1. Play 18 holes without the sunburn" },
      {
        type: "p",
        text: "Indoor golf simulators have quietly become the summer go-to. At Chip Shots, five TrackMan bays let you play 500+ real courses — Pebble Beach before lunch, St Andrews after — in a 70° room with a cold drink in hand. It's beginner-friendly (the screen reads your swing and keeps score for you) and just as fun for a low-handicapper dialing in wedge distances. No tee time, no heat, no problem.",
      },
      { type: "cta", label: "Book a bay", href: business.booking, external: true},
      { type: "h2", text: "2. Turn lunch into an event" },
      {
        type: "p",
        text: "Henderson has no shortage of restaurants, but few of them come with a golf course attached. Our full kitchen runs from shareables and wings to signature burgers, cheesesteaks and shakes — all delivered right to your bay so you never have to step away from the game. It's an easy way to stretch a quick bite into a two-hour hang.",
      },
      { type: "cta", label: "See the full menu", href: "/food-drink" },
      { type: "h2", text: "3. Hit happy hour, in the bays or at the bar" },
      {
        type: "p",
        text: "Monday through Friday, 3–6 PM, happy hour means $5 domestic drafts, $6 well drinks and $7 craft, cider and wine — plus discounted bites. Best part: happy-hour pricing runs in the bays too, so you can eat, drink and play without getting up. It's the most relaxed way to wait out the hottest part of the day.",
      },
      { type: "cta", label: "See happy hour", href: "/food-drink" },
      { type: "h2", text: "4. Make a club night your standing plan" },
      {
        type: "p",
        text: "If you want something on the calendar all summer, our weekly club nights run three nights a week on TrackMan — Men's Club on Sundays, Open Night on Mondays and Ladies Club on Wednesdays, all handicapped so every skill level competes on the same board. There's no season and no buy-in: book a bay, play, and the top three net scores each week bank a food-and-drink credit. It's a low-pressure way to meet other Henderson golfers and keep your swing sharp through the off-season.",
      },
      { type: "cta", label: "See the club nights", href: "/league" },
      { type: "h2", text: "5. Host the party indoors" },
      {
        type: "p",
        text: "Birthday parties, corporate team nights, bachelor and bachelorette groups, even holiday parties — a climate-controlled venue with golf, a full bar and catering is an easy yes when it's 110° out. Private bays keep the group together, and TrackMan's games keep everyone playing, whether they golf or not.",
      },
      { type: "cta", label: "Plan an event", href: "/events" },
      { type: "h2", text: "6. Make it a regular thing with a membership" },
      {
        type: "p",
        text: "If indoor golf becomes your summer habit, a membership quickly pays for itself — unlimited bay time, priority booking and 10% off all food and drink. For anyone playing weekly, it's cheaper than paying per visit, and it's a standing excuse to get out of the house and into the air conditioning.",
      },
      { type: "cta", label: "Compare memberships", href: "/memberships" },
      { type: "h2", text: "Your hot-afternoon plan, sorted" },
      {
        type: "p",
        text: "You don't have to wait for October to enjoy Henderson. Whether it's eighteen holes, a long happy hour or a full-blown party, Chip Shots is the easiest way to beat the heat — open daily at 1473 E Lake Mead Pkwy, Suite 110. Grab a bay and we'll see you in the cool.",
      },
      { type: "cta", label: "Book your bay", href: business.booking, external: true},
    ],
  },
  {
    slug: "what-is-trackman-indoor-golf-henderson",
    title: "What Is TrackMan? A Beginner's Guide to Indoor Golf in Henderson",
    excerpt:
      "Never swung a club but curious about the simulators everyone's talking about? Here's what TrackMan is, how a bay works, and why it's the easiest way to try golf in Henderson.",
    date: "2026-06-12",
    readMinutes: 5,
    category: "Golf 101",
    image: img.bayDesertData,
    body: [
      {
        type: "p",
        text: "Maybe a friend keeps inviting you to \"hit a bay,\" or you've driven past Chip Shots and wondered what goes on inside. Indoor golf can sound intimidating if you've never played — but it's genuinely one of the most beginner-friendly ways to spend an afternoon in Henderson. Here's everything you need to know before your first visit, no golf experience required.",
      },
      { type: "h2", text: "So what exactly is TrackMan?" },
      {
        type: "p",
        text: "TrackMan is the launch-monitor technology behind every bay at Chip Shots — the same system tour pros and club fitters use. Radar tracks your club and ball the instant you swing, then projects the shot onto a big screen in front of you. You're hitting a real golf ball with a real club into the screen, and the software shows you exactly where it would have landed on the course. It reads your swing, keeps score automatically, and even tells you how far each shot flew.",
      },
      { type: "h2", text: "How a bay actually works" },
      {
        type: "p",
        text: "You book a bay by the hour and bring up to four people. We have five climate-controlled bays, each with comfortable seating, a screen, and a server who brings food and drinks right to you. You can play a full 18-hole round on one of 500+ real courses — Pebble Beach, St Andrews, you name it — or skip the round entirely and play one of TrackMan's games. Clubs are available if you don't have your own, so you can show up empty-handed.",
      },
      {
        type: "ul",
        items: [
          "Five TrackMan bays, up to four players each",
          "500+ real courses plus arcade-style games",
          "Clubs provided — just bring yourself",
          "Food and drinks delivered to your bay",
        ],
      },
      { type: "h2", text: "Do I need to know how to golf?" },
      {
        type: "p",
        text: "Not at all — and that's the best part. The screen does the hard work: it tracks your shot, keeps score, and gives everyone in the group an even footing through games and handicaps. Beginners love it because there's no pressure, no group waiting behind you, and no judgment if you shank one. Experienced players love it because they can dial in wedge distances and see real data on every swing. It works for a first-timer and a low-handicapper in the same group.",
      },
      { type: "cta", label: "Book your first bay", href: business.booking, external: true },
      { type: "h2", text: "What does it cost?" },
      {
        type: "p",
        text: "Bay time is billed by the hour, not per person — so splitting a bay with friends is the cheapest way to try it. Non-peak hours run $40/hour and peak times are $50/hour, with a bay holding up to four players. If you end up loving it, a membership drops your rate and includes unlimited bay time, but there's zero commitment to just come try it once.",
      },
      { type: "cta", label: "See rates & book", href: "/golf-booking" },
      { type: "h2", text: "The easiest way to try golf in Henderson" },
      {
        type: "p",
        text: "No tee time, no sunburn, no experience needed — just a fun, air-conditioned room with a screen, a club, and someone bringing you a burger. Whether you're a total beginner or knocking the rust off, Chip Shots is the low-stakes way to find out if golf is your thing. We're open daily at 1473 E Lake Mead Pkwy, Suite 110 in Henderson. Grab a few friends and give it a swing.",
      },
      { type: "cta", label: "Book a bay", href: business.booking, external: true },
    ],
  },
  {
    slug: "where-to-watch-golf-henderson",
    title: "Where to Watch Golf in Henderson (With a Drink in Hand)",
    excerpt:
      "Majors weekend and no tee time? Here's where to catch the tournament on the big screen in Henderson — plus play a few holes yourself between groups.",
    date: "2026-06-11",
    readMinutes: 3,
    category: "Henderson Guide",
    image: img.bayLounge,
    body: [
      {
        type: "p",
        text: "There's a certain kind of weekend — a major championship on Sunday, the back nine heating up — when you want to watch golf somewhere better than your living room. In Henderson, the move is a place where you can watch the pros on a screen and step up and hit a few yourself between groups. That's exactly what a bay at Chip Shots is built for.",
      },
      { type: "h2", text: "Big screens, full bar, and your own bay" },
      {
        type: "p",
        text: "Pull up to the bar to catch the broadcast, or grab a bay and make it a session — play a few holes, watch the leaderboard, order another round. Our full bar runs craft drafts, a deep whiskey and tequila list, and a menu of golfer's classics like the Transfusion (vodka, grape juice and ginger ale — the original 19th-hole drink). It's the closest thing Henderson has to being at the course without leaving the air conditioning.",
      },
      { type: "cta", label: "See the drink menu", href: "/food-drink" },
      { type: "h2", text: "Time it with happy hour" },
      {
        type: "p",
        text: "Catching an afternoon round? Happy hour runs Monday through Friday from 3–6 PM: $5 domestic drafts, $6 well drinks, $7 craft, cider and wine, and $10 signature cocktails — plus discounted shareables. Happy-hour pricing runs in the bays too, so you can play, watch and drink all at once without getting up.",
      },
      { type: "cta", label: "See happy hour", href: "/food-drink" },
      { type: "h2", text: "Make a watch party out of it" },
      {
        type: "p",
        text: "Majors weekend, a Ryder Cup, the Masters — grab a bay with a group, keep the broadcast up, and rotate through a round of your own while you watch. Food and drinks come straight to the bay, so nobody misses a putt on a beer run. We're open until midnight on Fridays and Saturdays at 1473 E Lake Mead Pkwy, Suite 110 in Henderson.",
      },
      { type: "cta", label: "Book a bay", href: business.booking, external: true },
    ],
  },
  {
    slug: "best-date-night-henderson",
    title: "The Best Date Night in Henderson You Haven't Tried Yet",
    excerpt:
      "Dinner-and-a-movie is fine. Golf, cocktails and a full kitchen in your own private bay is better. Here's why indoor golf is Henderson's sleeper date night.",
    date: "2026-06-10",
    readMinutes: 3,
    category: "Henderson Guide",
    image: img.bayMoody,
    body: [
      {
        type: "p",
        text: "The problem with dinner-and-a-movie is that you spend two hours not talking to each other. A date that actually gives you something to do — and a few laughs along the way — is harder to find. In Henderson, one of the best ones is hiding in plain sight: your own private golf bay, a real cocktail menu, and a full kitchen, all in one room.",
      },
      { type: "h2", text: "It's a conversation starter built in" },
      {
        type: "p",
        text: "Neither of you has to be good at golf — that's what makes it fun. TrackMan keeps score and runs easy, low-pressure games so it stays playful instead of competitive. There's a natural rhythm to it: take a swing, sit back, sip your drink, talk. A private bay means it's just the two of you, with a server bringing food and drinks so you never have to break the moment.",
      },
      { type: "cta", label: "Book a bay for two", href: business.booking, external: true },
      { type: "h2", text: "The food and drinks deliver" },
      {
        type: "p",
        text: "This isn't sad bar food. The kitchen runs signature burgers, a Philly cheesesteak, shareables and shakes, and the bar pours real cocktails — espresso martinis, a Cucumber Paloma, hand-built old fashioneds with Woodford and Eagle Rare. There's even a list of boozy shakes if you want to split dessert. It all comes right to your bay.",
      },
      { type: "cta", label: "See the full menu", href: "/food-drink" },
      { type: "h2", text: "Smarter than dinner-and-a-movie" },
      {
        type: "p",
        text: "An hour in a bay is billed per bay, not per person, so a date night here is easy on the wallet and long on fun. Time it with happy hour, 3–6 PM on weekdays, and it's an even easier yes. We're open late on weekends at 1473 E Lake Mead Pkwy, Suite 110 in Henderson — book a bay and try the date night nobody else has thought of yet.",
      },
      { type: "cta", label: "Plan your date night", href: business.booking, external: true },
    ],
  },
  {
    slug: "corporate-team-building-henderson",
    title: "Corporate Team Building in Henderson: Why Indoor Golf Beats the Conference Room",
    excerpt:
      "Looking for a Henderson team-building idea that people actually enjoy? Private bays, real food and a little friendly competition do more for a team than a slideshow ever will.",
    date: "2026-06-13",
    readMinutes: 4,
    category: "For Business",
    image: img.bayRoomWide,
    body: [
      {
        type: "p",
        text: "The trust falls and the hotel ballroom haven't aged well. If you're planning a team night, a client outing or a quarterly off-site in Henderson, the bar for \"team building\" is simply that people have a good time and actually talk to each other. Indoor golf clears it easily — and you don't need a single person who knows how to play.",
      },
      { type: "h2", text: "Everyone plays, regardless of skill" },
      {
        type: "p",
        text: "That's the whole trick. TrackMan handicaps the games and keeps score automatically, so the intern and the VP who golfs every weekend are on even footing. Closest-to-the-pin and long-drive games get the whole room cheering, and nobody's stuck on the sidelines. It's the rare activity that's genuinely fun whether someone's a scratch golfer or has never held a club.",
      },
      { type: "h2", text: "Private bays keep the group together" },
      {
        type: "p",
        text: "We have five climate-controlled bays, each seating a group with its own screen and server. Book a block and your team stays together — rotating through games, grabbing drinks, talking shop or not. No 110° parking lot, no rented gear, no awkward downtime.",
      },
      {
        type: "ul",
        items: [
          "Five private bays, up to four players each",
          "Auto-scored, handicapped games so everyone competes",
          "Full kitchen and bar with catering to the bay",
          "Climate-controlled — works any season, any weather",
        ],
      },
      { type: "cta", label: "Plan a team event", href: "/events" },
      { type: "h2", text: "The food and drinks are handled" },
      {
        type: "p",
        text: "This is the part that sinks most off-sites. Here it's built in: signature burgers, a Philly cheesesteak, shareables and a full bar, all delivered straight to your bays. Run it as a happy-hour outing, an after-work team night or a half-day with catering — nobody has to leave to eat.",
      },
      { type: "cta", label: "See the menu", href: "/food-drink" },
      { type: "h2", text: "Make it a standing thing" },
      {
        type: "p",
        text: "If your team comes back, a Corporate Club membership ($449/mo) or Corporate Premier ($699/mo) makes recurring outings and client entertaining easy on the budget. But you don't need to commit to anything to book a one-off — just grab a few bays. We're at 1473 E Lake Mead Pkwy, Suite 110 in Henderson, open daily.",
      },
      { type: "cta", label: "Book your team night", href: business.booking, external: true },
    ],
  },
  {
    slug: "join-golf-league-henderson-first-timer",
    title: "Looking for a Golf League in Henderson? Try a Weekly Club Night Instead",
    excerpt:
      "No season to commit to, no buy-in, no skill requirement. Here's how Chip Shots' weekly club nights work — a fresh leaderboard every week, with dinner and drinks brought to your bay.",
    date: "2026-07-12",
    readMinutes: 4,
    category: "Clubs & Leagues",
    image: img.trackmanCompetitions,
    body: [
      {
        type: "p",
        text: "\"I'd join a league, but I'm not good enough.\" It's the single most common thing we hear — and it's exactly backwards. Our club nights are handicapped, which means they're built so a beginner can beat a better golfer on any given night. And unlike a traditional league, there's no season to sign up for at all. If you've been searching for a golf league in Henderson, here's why a weekly club night might suit you better.",
      },
      { type: "h2", text: "A club, not a league — here's the difference" },
      {
        type: "p",
        text: "A league asks you to commit to a season and chase standings for weeks. A club night is simpler: a standing weekly time to come play, hang out and land on that week's leaderboard. The board resets every week, so there's nothing to fall behind on — miss a month and you're still one good night from the top spot. Come every week or come when you can.",
      },
      { type: "h2", text: "Three nights, every skill level" },
      {
        type: "p",
        text: "We run three weekly club nights on TrackMan, all with tee-offs at 5 and 7 PM. Men's Club on Sundays and Ladies Club on Wednesdays each play a full 18. Open Night on Mondays is the newcomer's night — an easy 9 holes with generous gimmes, mixed and casual. Net Stableford scoring with handicaps keeps every skill level competitive on the same board.",
      },
      {
        type: "ul",
        items: [
          "Men's Club — Sundays, 5 & 7 PM · full 18",
          "Open Night — Mondays, 5 & 7 PM · easy 9, beginner-friendly",
          "Ladies Club — Wednesdays, 5 & 7 PM · full 18",
          "Net Stableford, handicapped — auto-scored live on TrackMan",
        ],
      },
      { type: "h2", text: "No buy-in, no sign-up fee" },
      {
        type: "p",
        text: "There's nothing to join and nothing extra to pay. Book a bay at the regular hourly rate for the night you want to play, show up, and your net score lands on that week's combined leaderboard. Members simply play on their membership — every club night, every week. No handicap index needed; TrackMan sets and tracks it for you.",
      },
      { type: "cta", label: "See the club nights", href: "/league" },
      { type: "h2", text: "Dinner, drinks and a shot at the board" },
      {
        type: "p",
        text: "Happy hour runs live the whole time you play — a featured draft and a signature cocktail, delivered straight to your bay along with anything from the kitchen. Each week, the top three net scores across all three nights bank a Chip Shots food-and-drink credit: $50 for first, $25 for second, $15 for third. Some nights we post a closest-to-the-pin or long-drive prize on the house, too.",
      },
      { type: "cta", label: "Pick your night", href: "/league" },
    ],
  },
  {
    slug: "birthday-party-ideas-henderson",
    title: "Birthday Party Ideas in Henderson That Aren't the Same Old Thing",
    excerpt:
      "Tired of the usual Henderson birthday spots? Throw it in a private golf bay — games everyone can play, burgers and shakes, and a full bar for the grown-ups.",
    date: "2026-06-08",
    readMinutes: 3,
    category: "Henderson Guide",
    image: img.foodBurger,
    body: [
      {
        type: "p",
        text: "There are only so many times you can do the same Henderson birthday. If you want something that's genuinely fun for the group — kids, adults, or a mix — a private golf bay hits differently: games anyone can play, food coming to the table, and zero planning headaches.",
      },
      { type: "h2", text: "Games everyone can actually play" },
      {
        type: "p",
        text: "You don't need golfers in the group. TrackMan runs arcade-style games and handicapped scoring, so a ten-year-old and grandpa are on even footing and everyone's in on it. A private bay keeps your party together with its own screen and seating, and the games keep the energy up without anyone having to organize a thing.",
      },
      { type: "h2", text: "The food and cake are covered" },
      {
        type: "p",
        text: "Our full kitchen runs slider trios, totchos, wings, signature burgers and a whole lineup of shakes — kid-friendly and crowd-friendly — all delivered to your bay. For the grown-ups, there's a full bar with cocktails and a weekday happy hour. Bring the cake; we'll handle the rest.",
      },
      {
        type: "ul",
        items: [
          "Private bay just for your group",
          "Games for all ages, no golf skill needed",
          "Burgers, shareables and shakes to the bay",
          "Full bar for the adults",
        ],
      },
      { type: "cta", label: "See party options", href: "/events" },
      { type: "h2", text: "Easy to book, easy to host" },
      {
        type: "p",
        text: "Kids' birthdays tie into our Chip Crew youth program, and adult parties — milestone birthdays, bachelor and bachelorette groups — fit right in too. We're open until midnight on weekends at 1473 E Lake Mead Pkwy, Suite 110 in Henderson. Grab a bay and throw the birthday nobody's done before.",
      },
      { type: "cta", label: "Plan a birthday", href: "/events" },
    ],
  },
];

/** All posts, newest first. */
export const getAllPosts = (): Post[] =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

/**
 * Up to `limit` other posts to suggest at the end of an article. Same-category
 * posts come first (most relevant), then the newest remaining posts fill in.
 */
export const getRelatedPosts = (slug: string, limit = 2): Post[] => {
  const current = getPost(slug);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
};

/** Format an ISO post date for display. Runs at build time (static pages). */
export const formatPostDate = (iso: string): string =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
