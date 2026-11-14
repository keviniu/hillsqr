/* ==========================================================================
   David's Property – website content
   --------------------------------------------------------------------------
   ALL words, numbers, photos and contact details on the page live here.
   Edit this file only; index.html is the layout and should not need changing.

   Rules:
   - Keep the quotes '...' around text. If the text itself contains ' use \'
   - Every item in a list ends with a comma.
   - Photos: put the file in the images/ folder, then write 'images/name.jpg'.
     Leave a photo as '' to show a grey placeholder box instead.
   - To hide a block, empty its list: items: []
   ========================================================================== */

window.SITE = {

  /* ---------- Business details (used all over the page) ---------- */
  business: {
    name: "David's Property",
    subName: 'General Handyman Service by David',
    town: 'Arborfield',
    region: 'Berkshire',
    strapline: 'Roofing & property maintenance · Arborfield and surrounding areas',
    phones: ['07453 159073', '07511 719222'],   // first one is the main number
    whatsapp: '85291816360',                     // TEST number. David: 447453159073 (country code, no + or spaces)
    facebook: '',                                // David's Facebook page URL, e.g. 'https://www.facebook.com/...'
    siteUrl: 'https://hillsqr.com/client/handymandavid/'
  },

  /* ---------- Quote form ---------- */
  form: {
    formspreeId: 'xljjnqez',                     // TEST: Hillsqr's form. Create one for David before go-live.
    emailSubject: '[TEST] Handyman David – website quote request',
    jobTypes: ['Roofing', 'Fencing', 'TV mounting / feature wall', 'General repairs', 'Something else']
  },

  /* ---------- Top banner ---------- */
  hero: {
    badge: 'Free no-obligation quotes',
    heading: 'Roofing & property maintenance you can rely on',
    intro: "Hi, I'm David — your local handyman and roofer in Arborfield. From roof repairs and fencing to TV walls and odd jobs, I'll give you an honest price and leave the place tidy.",
    photos: [                                    // 1 large + 2 small
      { src: '', alt: 'David on a roof job' },
      { src: '', alt: 'Slatted TV feature wall' },
      { src: '', alt: 'New fence panels' }
    ],
    stats: [                                     // remove a line to hide that number
      { value: '100%', label: 'recommend · 102 Facebook reviews' },
      { value: '2.5K', label: 'local followers' }
      // { value: '15', label: "years' experience" },
    ]
  },

  /* ---------- Services ----------
     icon: one of roof, fence, tv, tools, check, house */
  services: {
    eyebrow: 'What I do',
    heading: 'One trusted pair of hands for the whole house',
    items: [
      { icon: 'roof',  title: 'Roofing repairs',      text: 'Slipped and broken tiles, leaks, flat roofs, flashing and ridge work — fixed properly, not patched.' },
      { icon: 'fence', title: 'Fencing & gates',      text: 'Storm-damaged panels, new posts, full fence runs and gates, set solid and finished neatly.' },
      { icon: 'tv',    title: 'TV walls & mounting',  text: 'Wall-mounted TVs with cables hidden, plus slatted acoustic-panel feature walls.' },
      { icon: 'tools', title: 'General handyman',     text: 'The to-do list: shelves, doors, flat-pack, small repairs and the jobs that keep getting put off.' },
      { icon: 'check', title: 'Property maintenance', text: 'Ongoing upkeep for homeowners and landlords — one number to call when something needs sorting.' },
      { icon: 'house', title: 'Exterior timber work', text: 'Cladding, frames, decking and outdoor structures built to last the British weather.' }
    ]
  },

  /* ---------- Before / after jobs ----------
     category: any word; the filter buttons are made from these automatically.
     Newest job first. */
  jobs: {
    eyebrow: 'Recent jobs',
    heading: 'Before → After',
    items: [
      { title: 'Slatted TV feature wall',  town: '', category: 'Interiors', before: '', after: '' },
      { title: 'Roof repair & re-felt',    town: '', category: 'Roofing',   before: '', after: '' },
      { title: 'Garden fence replacement', town: '', category: 'Fencing',   before: '', after: '' },
      { title: 'Timber frame & cladding',  town: '', category: 'Roofing',   before: '', after: '' }
    ]
  },

  /* ---------- How it works ---------- */
  steps: [
    { title: 'Call, WhatsApp or send photos', text: 'Tell me what needs doing. A couple of photos helps me give you a rough idea straight away.' },
    { title: 'Free, no-obligation quote',     text: "I'll come and look, then give you a clear fixed price — no surprises later." },
    { title: 'Job done, site left tidy',      text: 'Work finished to the agreed time, everything cleared away, and you check it before paying.' }
  ],

  /* ---------- Reviews ----------
     Copy real reviews from Facebook only (with the customer's first name).
     While items is empty, the review cards are hidden and only the headline shows. */
  reviews: {
    eyebrow: 'What customers say',
    headline: '100% recommend',
    count: '102 reviews',
    items: [
      // { text: 'Paste the review here', name: 'Sarah, Wokingham', job: 'Fencing' },
    ]
  },

  /* ---------- Areas covered ---------- */
  areas: {
    heading: 'Based in Arborfield, working across Berkshire',
    text: "Not sure if you're in range? Send your postcode and I'll let you know.",
    towns: ['Arborfield', 'Wokingham', 'Finchampstead', 'Shinfield', 'Crowthorne', 'Reading', 'Bracknell']
  },

  /* ---------- Quote section text ---------- */
  quote: {
    heading: 'Get your free quote',
    text: 'No obligation, no hard sell. Usually a reply the same day.'
  }
};
