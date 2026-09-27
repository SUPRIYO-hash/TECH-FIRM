export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Understand the business, audience and requirements.",
    description: "We begin by conducting an in-depth discovery into your business operations, target customers, aesthetic preferences, and competitive context to ensure every decision serves a real business purpose.",
    activities: [
      "In-depth requirements questionnaire",
      "Audience and customer journey mapping",
      "Competitor and industry benchmarking",
      "Technical scope and integration audit"
    ]
  },
  {
    step: "02",
    title: "Plan",
    tagline: "Define structure, content and visual direction.",
    description: "We map out the website architecture, page blueprints, and content structure. This stage clarifies what goes on each page before writing code or assembling layouts.",
    activities: [
      "Sitemap and information architecture",
      "Page content outlines and copy direction",
      "Call-to-action strategy and conversion points",
      "Visual moodboard and typographic direction"
    ]
  },
  {
    step: "03",
    title: "Design",
    tagline: "Create the visual experience.",
    description: "We craft the complete visual identity of your website—curating typography, color schemes, whitespace, and interface components tailored to your specific industry.",
    activities: [
      "Desktop and mobile interface design",
      "Typography pairing and color palette selection",
      "Interactive component design (menus, forms, cards)",
      "Client design walkthrough and feedback rounds"
    ]
  },
  {
    step: "04",
    title: "Build",
    tagline: "Develop the responsive website.",
    description: "We engineer the website using clean, modern web standards. We focus on lightweight code, rapid page speed, and seamless adaptation across all screen resolutions.",
    activities: [
      "Modular, semantic HTML5 and clean CSS",
      "Full mobile, tablet, and widescreen responsiveness",
      "Interactive forms, menus, and validation logic",
      "Basic SEO schema and metadata integration"
    ]
  },
  {
    step: "05",
    title: "Review",
    tagline: "Test layout, forms, responsiveness and usability.",
    description: "We conduct meticulous testing across multiple real devices, browsers, and network speeds to ensure every link, form submission, and visual transition works reliably.",
    activities: [
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "Mobile and touch device usability audit",
      "Form validation and lead delivery verification",
      "Performance and accessibility (WCAG) checks"
    ]
  },
  {
    step: "06",
    title: "Launch",
    tagline: "Deploy the final website.",
    description: "We connect your custom domain, configure SSL encryption, verify search engine indexing settings, and hand over a pristine, live website ready to welcome your clients.",
    activities: [
      "Domain DNS and SSL security configuration",
      "Production deployment and CDN caching",
      "Search engine indexing check and sitemap setup",
      "Handover guide and post-launch verification"
    ]
  }
];
