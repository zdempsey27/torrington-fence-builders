# Fencing Website Content Generation

## Overview

This is a template for generating fencing contractor websites. Claude Code can automatically generate all content files from a filled-in Site Brief.

## Paths

- **Site Briefs Location:** `C:/Users/Owner/Documents/Three Oaks Digital/3OD Obsidian Vault/Fencing-sites/03-Sites/`
- **Content Output:** `./src/content/`

## Quick Start

When asked to generate content for a site (e.g., "Generate all content for Odessa Fence Builders"):

1. Read the Site Brief from: `C:/Users/Owner/Documents/Three Oaks Digital/3OD Obsidian Vault/Fencing-sites/03-Sites/[site-folder]/Site-Brief.md`
2. Generate all 20 content files
3. Save them to the correct locations in `./src/content/`

---

## Files to Generate

| File | Location | Count |
|------|----------|-------|
| `homepage.js` | `src/content/` | 1 |
| `about.js` | `src/content/` | 1 |
| `contact.js` | `src/content/` | 1 |
| `testimonials.js` | `src/content/` | 1 |
| Service pages | `src/content/services/` | 8 |
| Service area pages | `src/content/service-areas/` | varies |
| **Total** | | **20+** |

---

## Services (Standard 8)

| Service | Slug | Export Name |
|---------|------|-------------|
| Chain-Link Fence | chain-link-fence | chainLinkFenceContent |
| Vinyl Fence | vinyl-fence | vinylFenceContent |
| Wood Fence | wood-fence | woodFenceContent |
| Wrought Iron Fence | wrought-iron-fence | wroughtIronFenceContent |
| Metal Fence | metal-fence | metalFenceContent |
| Farm & Ranch Fence | farm-ranch-fence | farmRanchFenceContent |
| Fence Repair | fence-repair | fenceRepairContent |
| Commercial Fencing | commercial-fencing | commercialFencingContent |

---

## Service Area Naming

- **Slug:** Lowercase, spaces → dashes (e.g., "San Benito" → "san-benito")
- **Export:** camelCase + "Content" (e.g., "San Benito" → "sanBenitoContent")

---

## Content Contracts

### Testimonials (`testimonials.js`)

```javascript
export const testimonials = [
  {
    quote: String,     // 1-3 sentences, reference local street/neighborhood
    name: String,      // "FirstName L." format
    location: String,  // Must match a SERVICE_AREA_NAME
  },
  // ... 4 testimonials total
];
export default testimonials;
```

**Rules:**
- Each testimonial should reference a real local street, neighborhood, or landmark
- Locations should be spread across different service areas
- Vary the fence types mentioned (privacy, farm, vinyl, repair, etc.)
- Keep tone authentic — like a real customer wrote it
- No superlatives or marketing speak

### Homepage (`homepage.js`)

```javascript
export const homepageContent = {
  hero: { ctaText: String },
  intro: { heading: String, paragraphs: [String], formHeading: String },
  serviceCards: { "[slug]": { description: String, ctaText: String } },  // 8 cards
  about: { heading: String, content: String, ctaText: String },
  whyChooseUs: { heading: String, intro: String, cards: [{ heading: String, content: String }] },  // 4 cards
  gallery: { heading: String },
  perks: { heading: String, intro: String, cards: [{ heading: String, content: String }] },  // 4 cards
  faq: { heading: String, intro: String, questions: [{ question: String, answer: String }] },  // 6-8 questions
  cta: { heading: String, content: String, ctaText: String },
};
export default homepageContent;
```

**Word count:** ~1,100 words total

### Service Page (`services/[slug].js`)

```javascript
export const [serviceName]Content = {
  seo: { title: String, description: String },
  hero: { heading: String, subtitle: String, ctaText: String },
  intro: { formHeading: String, content: String },
  sections: [{ heading: String, content: String }],  // EXACTLY 3
  gallery: { heading: String },
  signsYouNeed: { heading: String, intro: String, cards: [{ heading: String, content: String }] },  // EXACTLY 4 cards
  process: { heading: String, intro: String, steps: [{ heading: String, content: String }] },  // EXACTLY 4 steps
  cta: { heading: String, content: String, ctaText: String },
  closing: String,
};
export default [serviceName]Content;
```

**Word count:** 750-950 words
**Template variables allowed:** {businessName}, {city}, {stateAbbr}, {phone}

### Service Area Page (`service-areas/[slug].js`)

```javascript
export const [areaName]Content = {
  areaName: String,
  mapQuery: String,  // "AreaName,+ST"
  seo: { title: String, description: String },
  hero: { heading: String, subtitle: String, ctaText: String },
  intro: { welcome: String, paragraphs: [String] },  // 2 paragraphs
  services: { heading: String, intro: String, cards: [{ heading: String, content: String }], footer: String },  // EXACTLY 3 cards
  whyUs: { heading: String, intro: String, cards: [{ heading: String, content: String }] },  // EXACTLY 3 cards
  nearby: { heading: String, content: String, links: [{ name: String, slug: String }] },  // 3-5 links
  cta: { heading: String, content: String, ctaText: String },
};
export default [areaName]Content;
```

**Word count:** 375-390 words
**Template variables allowed:** {businessName}, {phone}
**Use `<strong>` tags** around neighborhood names, street names, and key terms

### About Page (`about.js`)

```javascript
export const aboutContent = {
  hero: { heading: String, subtitle: String },
  main: { heading: String, paragraphs: [String] },  // 3 paragraphs
  coreValues: { heading: String, values: [{ heading: String, content: String }] },  // EXACTLY 4 values
  whyTrustUs: { heading: String, values: [{ title: String, description: String }], closingParagraph: String },  // EXACTLY 4 values, title is ONE word
  cta: { heading: String, content: String, ctaText: String },
};
export default aboutContent;
```

**Word count:** ~290 words
**No template variables** — write out actual business name and city

### Contact Page (`contact.js`)

```javascript
export const contactContent = {
  hero: { heading: String, subtitle: String },
  main: { heading: String, content: String },
  contactInfo: { 
    phoneLabel: String, 
    addressLabel: String, 
    addressText: String,  // Use {city}, {stateAbbr} here only
    hoursLabel: String, 
    hours: String,  // Use \n for line breaks
    preferCallHeading: String 
  },
  form: { 
    heading: String, 
    submitText: String, 
    fields: { name, email, phone, address, addressPlaceholder, service, message, messagePlaceholder, timeline: all String },
    timelineOptions: [{ value: String, label: String }]  // 5 options
  },
};
export default contactContent;
```

**Word count:** ~70 words

---

## Writing Rules (Apply to ALL Content)

### Tone
- Direct contractor voice — not marketing agency
- Confident, not salesy
- Like explaining to a neighbor

### SEO
- Natural keyword usage, no stuffing
- Include city name in key headings
- Reference local climate/geography

### Forbidden
- Never use the word "solutions"
- Never use "Welcome to" or "Looking for" as openers
- Never use filler: "in today's world", "when it comes to", "look no further"
- Never use buzzwords: "leverage", "synergy", "cutting-edge"

### Local Knowledge
- Reference real streets, neighborhoods, landmarks
- Mention actual climate challenges (heat, humidity, storms, soil conditions)
- Each service area page must be genuinely unique — not name-swapped templates

### Structure
- Match exact card/section counts specified in contracts
- Vary sentence openings — don't start multiple paragraphs the same way
- Don't start more than one section with "At {businessName}" or "We"

---

## Generation Process

When generating content:

1. **Read Site Brief** — Extract all business details
2. **Create directories** if they don't exist:
   - `src/content/services/`
   - `src/content/service-areas/`
3. **Generate files in this order:**
   - `testimonials.js`
   - `homepage.js`
   - `about.js`
   - `contact.js`
   - All 8 service pages
   - All service area pages (number varies per site)
4. **Save each file** to correct location
5. **Report completion** with summary

---

## Config.js

After generating content, also update `src/config.js` with the business details from the Site Brief. The MASTER DETAILS section at the top needs:

- BUSINESS_NAME
- TAGLINE
- PHONE_DISPLAY, PHONE_TEL, PHONE_RAW
- EMAIL, CLIENT_EMAIL
- CITY, STATE, STATE_ABBR, COUNTY, REGION
- PRIMARY_COLOR, PRIMARY_DARK, SECONDARY_COLOR, ACCENT_COLOR
- SERVICE_AREA_NAMES array

**Note:** Testimonials are now imported from `src/content/testimonials.js` — do NOT add them to config.js.
