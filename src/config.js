import fs from 'fs';
import { testimonials } from './content/testimonials.js';

// ============================================================================
// IMAGE AUTO-DISCOVERY — No need to edit image paths manually
// ============================================================================

function getImagesMatching(prefix) {
  try {
    const files = fs.readdirSync('./public/images');
    return files
      .filter(f => f.startsWith(prefix) && /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map(f => `/images/${f}`);
  } catch {
    return [];
  }
}

function getFirstImage(prefix) {
  const images = getImagesMatching(prefix);
  return images[0] || null;
}

// ============================================================================
// MASTER DETAILS — EDIT THIS SECTION ONLY
// ============================================================================

const BUSINESS_NAME = "Torrington Fence Builders";
const SITE_URL = "https://torringtonfencebuilders.com";
const TAGLINE = "Quality Fencing You Can Trust";
const PHONE_DISPLAY = "(860) 606-3757";
const PHONE_TEL = "tel:+18606063757";
const PHONE_RAW = "8606063757";
const EMAIL = "";
const CLIENT_EMAIL = "";

const CITY = "Torrington";
const STATE = "Connecticut";
const STATE_ABBR = "CT";
const COUNTY = "Litchfield County";
const REGION = "Northwest Connecticut";
const GEO_LAT = 41.8009;
const GEO_LNG = -73.1212;

const PRIMARY_COLOR = "#2C4A5C";
const PRIMARY_DARK = "#1A2D3A";
const SECONDARY_COLOR = "#D4C5A9";
const ACCENT_COLOR = "#B8733F";
const OVERLAY_COLOR = "44, 74, 92"; // RGB values of PRIMARY_COLOR for rgba() overlays

// Hero & Trust Signals — customize per client
const HERO_TAGLINE = "PROFESSIONAL FENCE INSTALLATION";
const HERO_HEADLINE = `${CITY}'s Top-Rated Fence Contractors`;
const HERO_DESCRIPTION = `${BUSINESS_NAME} delivers quality fence installations using premium materials and expert craftsmanship to secure your property and boost curb appeal.`;
const HERO_CTA_TEXT = "Request Your Free Estimate";
const FORM_HEADING = "Get Your Free Estimate";
const FORM_URGENCY_TEXT = "Limited Slots Available This Month!";

// Reviews & Trust (set to 0 to hide)
const REVIEW_RATING = 4.9;
const REVIEW_COUNT = 100;
const TRUST_BADGES = [
  { text: "Licensed & Insured", icon: "shield" },
  { text: "Locally Owned", icon: "award" },
];

// Business Hours
const BUSINESS_HOURS = "Mon-Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM";

// Why Choose Us Stats (progress bars)
const STATS = [
  { label: "Quality Materials", value: 95 },
  { label: "Customer Satisfaction", value: 98 },
  { label: "On-Time Completion", value: 94 },
];

// Testimonials — imported from src/content/testimonials.js

// Services — customize per site. Each needs a matching content file + images.
// Slug = image prefix (drop in images like "wood-fence-1.jpeg", "chain-link-fence-2.png")
const SERVICES = [
  { name: "Chain-Link Fence", slug: "chain-link-fence" },
  { name: "Vinyl Fence", slug: "vinyl-fence" },
  { name: "Wood Fence", slug: "wood-fence" },
  { name: "Wrought Iron Fence", slug: "wrought-iron-fence" },
  { name: "Aluminum Fence", slug: "aluminum-fence" },
  { name: "Pool Fencing", slug: "pool-fencing" },
  { name: "Fence Repair", slug: "fence-repair" },
  { name: "Commercial Fencing", slug: "commercial-fencing" },
  { name: "Farm & Ranch Fencing", slug: "farm-ranch-fencing" },
];

// Just type the area names — slugs generate automatically.
// Put your primary city FIRST.
const SERVICE_AREA_NAMES = [
  "Torrington",
  "Winsted",
  "Litchfield",
  "Harwinton",
  "New Hartford",
  "Goshen",
  "Thomaston",
  "Plymouth",
  "Barkhamsted",
];

// ============================================================================
// STOP EDITING HERE — Everything below auto-populates from above
// ============================================================================

function toSlug(name) {
  return name.toLowerCase().replace(/[&]/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const siteConfig = {
  businessName: BUSINESS_NAME,
  siteUrl: SITE_URL,
  tagline: TAGLINE,
  niche: "Fencing",
  nicheLC: "fencing",

  phone: {
    display: PHONE_DISPLAY,
    tel: PHONE_TEL,
    raw: PHONE_RAW,
  },

  email: EMAIL,

  location: {
    city: CITY,
    state: STATE,
    stateAbbr: STATE_ABBR,
    county: COUNTY,
    region: REGION,
    fullAddress: `${CITY}, ${STATE_ABBR}`,
    mapQuery: `${CITY},+${STATE_ABBR}`,
    geo: {
      lat: GEO_LAT,
      lng: GEO_LNG,
    },
  },

  hero: {
    tagline: HERO_TAGLINE,
    headline: HERO_HEADLINE,
    description: HERO_DESCRIPTION,
    ctaText: HERO_CTA_TEXT,
    formHeading: FORM_HEADING,
    urgencyText: FORM_URGENCY_TEXT,
    reviews: {
      rating: REVIEW_RATING,
      count: REVIEW_COUNT,
    },
    trustBadges: TRUST_BADGES,
  },

  stats: STATS,
  testimonials: testimonials,
  businessHours: BUSINESS_HOURS,

  services: SERVICES.map(s => ({
    name: s.name,
    slug: s.slug,
  })),

  serviceAreas: SERVICE_AREA_NAMES.map((entry, i) => {
    const name = typeof entry === 'string' ? entry : entry.name;
    const neighborhoods = typeof entry === 'object' && entry.neighborhoods
      ? entry.neighborhoods.map(n => ({ name: n, slug: toSlug(n) }))
      : [];
    return {
      name,
      slug: toSlug(name),
      ...(i === 0 ? { isPrimary: true } : {}),
      ...(neighborhoods.length > 0 ? { neighborhoods } : {}),
    };
  }),

  colors: {
    primary: PRIMARY_COLOR,
    primaryDark: PRIMARY_DARK,
    secondary: SECONDARY_COLOR,
    accent: ACCENT_COLOR,
    overlay: OVERLAY_COLOR,
    dark: "#1a1a1a",
    light: "#f5f5f5",
    white: "#ffffff",
    gray: "#555555",
  },

  images: {
    // Logo - discovers logo.jpg, logo.png, logo.webp, etc.
    logo: getFirstImage("logo"),
    
    // Branded truck - supports "Branded-truck-*" or "branded-truck-*"
    brandedTruck: getFirstImage("Branded-truck") || getFirstImage("branded-truck"),
    
    // Trust badges - case-insensitive prefix matching
    badges: {
      licensed: getFirstImage("Licensed") || getFirstImage("licensed"),
      award: getFirstImage("Award") || getFirstImage("award"),
      fiveStars: getFirstImage("Five-stars") || getFirstImage("five-stars") || getFirstImage("5-star"),
    },
    
    // Fence installer images - array for variety across page sections
    installers: getImagesMatching("fence-installer"),
    
    // Section backgrounds — auto-assigned from service images for overlay textures.
    // Pages reference these by key (wood, vinyl, chainLink, etc.) but they're just
    // decorative slots behind dark overlays. Falls back to fence-installer if a
    // service doesn't have images yet.
    backgrounds: (() => {
      const fallback = getFirstImage("fence-installer");
      const serviceImages = SERVICES.map(s => getFirstImage(s.slug)).filter(Boolean);
      return {
        wood: serviceImages[0] || fallback,
        vinyl: serviceImages[1] || fallback,
        chainLink: serviceImages[2] || fallback,
        metal: serviceImages[3] || fallback,
        installer: fallback,
        commercial: serviceImages[4] || fallback,
        farmRanch: serviceImages[5] || fallback,
      };
    })(),

    heroMain: getFirstImage("hero") || getFirstImage("fence-installer"),
    
    // Service card thumbnails — auto-discovered from SERVICES slugs
    serviceCards: Object.fromEntries(
      SERVICES.map(s => [
        s.slug,
        getFirstImage(s.slug) || getFirstImage("fence-installer"),
      ])
    ),

    // Homepage gallery — pulls first image from each service
    gallery: SERVICES
      .map(s => getFirstImage(s.slug))
      .filter(Boolean)
      .slice(0, 6)
      .map(src => ({ 
        src, 
        alt: `Fence Installation in ${CITY}, ${STATE_ABBR}` 
      })),

    // Individual service page galleries — auto-discovered from SERVICES slugs
    serviceGalleries: Object.fromEntries(
      SERVICES.map(s => [
        s.slug,
        getImagesMatching(s.slug).length > 0 
          ? getImagesMatching(s.slug) 
          : getImagesMatching("fence-installer"),
      ])
    ),

    aboutWork: getFirstImage("fence-installer"),
    formImage: getFirstImage("form-image") || getFirstImage("fence-installer"),
  },

  seo: {
    titleTemplate: "{page} | {businessName}",
    defaultTitle: `${BUSINESS_NAME} | Fencing Installation & Repair in ${CITY}, ${STATE_ABBR}`,
    defaultDescription: `Professional fencing contractor in ${CITY}, ${STATE_ABBR}. We install chain-link, vinyl, and wood fences. Call ${PHONE_DISPLAY} for a free estimate.`,
  },

  footerAbout: `At ${BUSINESS_NAME}, we specialize in custom fencing tailored to your needs. From privacy fences to decorative options, our skilled team ensures high-quality craftsmanship and durability.`,

  social: {
    facebook: "",
    instagram: "",
    google: "",
    yelp: "",
  },

  forms: {
    action: "https://lead-form-handler.zak-b7e.workers.dev",
    clientEmail: CLIENT_EMAIL,
    serviceOptions: [
      ...SERVICES.map(s => ({ value: s.slug, label: s.name })),
      { value: "other", label: "Other" },
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFullLocation() {
  return `${siteConfig.location.city}, ${siteConfig.location.stateAbbr}`;
}

export function getSeoTitle(pageTitle) {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return `${pageTitle} | ${siteConfig.businessName}`;
}

export function getServiceBySlug(slug) {
  return siteConfig.services.find(s => s.slug === slug);
}

export function getServiceAreaBySlug(slug) {
  return siteConfig.serviceAreas.find(a => a.slug === slug);
}

export function getNeighborhoodBySlug(citySlug, neighborhoodSlug) {
  const area = getServiceAreaBySlug(citySlug);
  if (!area || !area.neighborhoods) return null;
  return area.neighborhoods.find(n => n.slug === neighborhoodSlug);
}
