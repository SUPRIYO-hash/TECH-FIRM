export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  keyFeatures: string[];
  metricsOrHighlight?: string;
  liveUrl: string;
  featured: boolean;
  themeColor: string;
  heroMockup: {
    tagline: string;
    subtext: string;
    ctaLabel: string;
    accentColor: string;
    navItems: string[];
    bannerHighlights: { label: string; value: string }[];
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "aura-wellness",
    name: "Aura Wellness & Aesthetic Studio",
    category: "Salons & Beauty",
    industry: "Luxury Aesthetics & Skin Clinic",
    shortDescription: "A serene, mobile-first appointment booking experience and treatment catalog for a boutique wellness studio.",
    fullDescription: "Designed and engineered an ethereal, calming digital storefront for Aura Wellness. The platform integrates a real-time service reservation flow, specialist bios, interactive service menus, and frictionless WhatsApp and calendar confirmations.",
    deliverables: ["Custom Web Design", "Responsive Web Development", "Service Booking Flow", "Performance Optimization"],
    keyFeatures: [
      "Treatment catalog with categorized pricing",
      "Interactive appointment booking request flow",
      "Mobile-optimized treatment gallery",
      "One-click WhatsApp direct consultation",
      "Fast load times under 0.8s on 4G"
    ],
    metricsOrHighlight: "Optimized for high mobile conversion",
    liveUrl: "https://demo.nexorastudios.com/aura-wellness",
    featured: true,
    themeColor: "#0EA5E9",
    heroMockup: {
      tagline: "Holistic Aesthetics & Skin Therapy",
      subtext: "Bespoke clinical treatments curated for restorative cellular radiance and inner balance.",
      ctaLabel: "Reserve Consultation",
      accentColor: "#38BDF8",
      navItems: ["Treatments", "Therapists", "Pricing", "Location"],
      bannerHighlights: [
        { label: "Client Rating", value: "4.9 / 5" },
        { label: "Response Time", value: "< 15 min" },
        { label: "Bookings", value: "Real-time" }
      ]
    }
  },
  {
    id: "kaviar-bistro",
    name: "Kaviar Artisan Bistro & Espresso",
    category: "Restaurants & Cafés",
    industry: "Hospitality & Specialty Coffee",
    shortDescription: "A rich, sensory dining portfolio featuring dynamic seasonal menus, table reservation requests, and location directions.",
    fullDescription: "Crafted for an artisanal neighbourhood bistro and micro-roastery. Highlights the seasonal menu with high-resolution culinary showcases, dietary filter tags, evening tasting reservation inquiries, and instant map routing.",
    deliverables: ["Visual Brand Identity Translation", "Digital Menu Experience", "Reservation Inquiry System", "Local SEO Setup"],
    keyFeatures: [
      "Dynamic seasonal food & beverage menus",
      "Table reservation request with party size selection",
      "Integrated location map with parking notes",
      "Dietary filters (Vegan, Gluten-Free, Organic)",
      "Accessible high-contrast typography"
    ],
    metricsOrHighlight: "Zero-friction digital dining menu",
    liveUrl: "https://demo.nexorastudios.com/kaviar-bistro",
    featured: true,
    themeColor: "#F59E0B",
    heroMockup: {
      tagline: "Artisan Slow Food & Micro-Roastery",
      subtext: "Handmade sourdough, heirloom produce, and single-origin pour-overs served from dawn to twilight.",
      ctaLabel: "View Daily Menu",
      accentColor: "#FBBF24",
      navItems: ["Daily Menu", "Wine & Coffee", "Reserve", "Hours"],
      bannerHighlights: [
        { label: "Cuisine", value: "Seasonal Modern" },
        { label: "Hours", value: "8 AM – 11 PM" },
        { label: "Reservations", value: "Available" }
      ]
    }
  },
  {
    id: "solstice-travel",
    name: "Solstice Expeditions & Tours",
    category: "Travel & Tourism",
    industry: "Adventure & Curated Getaways",
    shortDescription: "An immersive travel itinerary platform showcasing eco-treks, bespoke travel packages, and instant booking inquiries.",
    fullDescription: "Built for an experiential travel agency specializing in high-altitude treks and cultural retreats. Delivers comprehensive day-by-day itineraries, packing guides, transparent pricing breakdowns, and direct booking inquiries.",
    deliverables: ["Interactive Expedition Directory", "Custom Itinerary Builder", "Lead Ingestion System", "SEO Foundations"],
    keyFeatures: [
      "Interactive day-by-day expedition timelines",
      "Difficulty ratings, elevation charts, and inclusions",
      "Direct WhatsApp and inquiry dispatch",
      "Offline-first route maps and gear checklists",
      "Sub-second image loading and WebP compression"
    ],
    metricsOrHighlight: "Curated expedition discovery",
    liveUrl: "https://demo.nexorastudios.com/solstice-travel",
    featured: true,
    themeColor: "#10B981",
    heroMockup: {
      tagline: "Untamed Horizons & Curated Expeditions",
      subtext: "Small-group journeys led by certified naturalists through the Eastern Himalayas and coastal sanctuaries.",
      ctaLabel: "Explore Itineraries",
      accentColor: "#34D399",
      navItems: ["Destinations", "Trek Calendar", "Custom Trips", "About"],
      bannerHighlights: [
        { label: "Group Size", value: "Max 8 Guests" },
        { label: "Guides", value: "Certified Locals" },
        { label: "Eco Standard", value: "Leave No Trace" }
      ]
    }
  },
  {
    id: "vanguard-advisory",
    name: "Vanguard Corporate & Advisory",
    category: "Business Websites",
    industry: "Corporate Legal & Strategic Consulting",
    shortDescription: "An authoritative, clean web presence for a corporate law firm and strategic business advisory practice.",
    fullDescription: "Designed for a boutique corporate law firm. Delivers a sophisticated, credible layout that highlights practice areas, attorney credentials, regulatory advisories, and confidential consultation scheduling.",
    deliverables: ["Corporate Web Architecture", "Practice Area Documentation", "Consultation Intake System", "WCAG AA Compliance"],
    keyFeatures: [
      "Practice area breakdowns (M&A, IP, Regulatory, Corporate)",
      "Secure confidential consultation intake form",
      "Publication repository for legal briefs and insights",
      "Rigorous contrast ratios and keyboard navigation",
      "Clean semantic structure tailored for search engines"
    ],
    metricsOrHighlight: "Authoritative corporate architecture",
    liveUrl: "https://demo.nexorastudios.com/vanguard-advisory",
    featured: true,
    themeColor: "#6366F1",
    heroMockup: {
      tagline: "Precision Counsel for Complex Enterprise",
      subtext: "Cross-border corporate restructuring, commercial litigation, and regulatory compliance advisory.",
      ctaLabel: "Schedule Briefing",
      accentColor: "#818CF8",
      navItems: ["Practice Areas", "Attorneys", "Insights", "Contact"],
      bannerHighlights: [
        { label: "Jurisdictions", value: "Multi-State" },
        { label: "Practices", value: "12 Disciplines" },
        { label: "Ethics", value: "Strict Privilege" }
      ]
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova Studio & Direction",
    category: "Personal Brands",
    industry: "Creative Direction & Industrial Design",
    shortDescription: "An editorial portfolio website showcasing limited-edition physical furniture and spatial design commissions.",
    fullDescription: "Engineered for an independent industrial designer and creative director. Focuses on generous whitespace, high-fidelity gallery viewports, bespoke project case studies, and direct private commission inquiries.",
    deliverables: ["Editorial Portfolio Design", "High-Resolution Gallery", "Press Archive", "Custom Domain Connection"],
    keyFeatures: [
      "Full-bleed visual case studies with material specs",
      "Lightweight image viewer with zoom capability",
      "Selected exhibition history and monograph press index",
      "Private commission inquiry flow with budget tiers",
      "Zero clutter, typography-first minimalism"
    ],
    metricsOrHighlight: "Editorial minimalism & typography",
    liveUrl: "https://demo.nexorastudios.com/elena-rostova",
    featured: false,
    themeColor: "#EC4899",
    heroMockup: {
      tagline: "Spatial Form & Material Experiments",
      subtext: "Exploring the boundary between structural permanence and tactile silence through sculptural utility.",
      ctaLabel: "View Catalog",
      accentColor: "#F472B6",
      navItems: ["Objects", "Spaces", "Monographs", "Inquiries"],
      bannerHighlights: [
        { label: "Medium", value: "Stone & Bronze" },
        { label: "Editions", value: "Numbered (1/12)" },
        { label: "Studio", value: "By Appointment" }
      ]
    }
  },
  {
    id: "apex-logistics",
    name: "Apex Peak Freight & Supply Chain",
    category: "Service Businesses",
    industry: "Regional Logistics & Cold Chain Transport",
    shortDescription: "A high-clarity service platform providing quote calculators, fleet capabilities, and dispatch inquiries.",
    fullDescription: "Developed for a regional logistics provider operating temperature-controlled warehousing and fleet transport. Features a quick freight quote estimator, terminal route maps, compliance certifications, and 24/7 driver dispatch contacts.",
    deliverables: ["Service Platform Development", "Interactive Freight Quote Estimator", "Fleet Showcase", "Performance Tuning"],
    keyFeatures: [
      "Quick freight route quote request form",
      "Warehouse hub directory and route coverage maps",
      "Fleet capability specifications (Reefer, Dry Van, Flatbed)",
      "Emergency cargo dispatch hotline integration",
      "Ultra-fast loading on mobile handheld devices"
    ],
    metricsOrHighlight: "Streamlined B2B freight intake",
    liveUrl: "https://demo.nexorastudios.com/apex-logistics",
    featured: false,
    themeColor: "#14B8A6",
    heroMockup: {
      tagline: "Reliable Cold Chain & Regional Freight",
      subtext: "Precision-monitored refrigerated transport and synchronized distribution across 18 regional hubs.",
      ctaLabel: "Request Freight Quote",
      accentColor: "#2DD4BF",
      navItems: ["Services", "Fleet Specs", "Coverage", "Dispatch"],
      bannerHighlights: [
        { label: "Fleet Readiness", value: "99.4%" },
        { label: "Monitoring", value: "Live GPS & Temp" },
        { label: "Transit Time", value: "Guaranteed SLA" }
      ]
    }
  }
];

export const PROJECT_CATEGORIES = [
  "All",
  "Business Websites",
  "Restaurants & Cafés",
  "Salons & Beauty",
  "Travel & Tourism",
  "Personal Brands",
  "Service Businesses"
];
