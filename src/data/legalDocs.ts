import { SITE_CONFIG } from "../config/siteConfig";

export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const LEGAL_DOCUMENTS: Record<string, LegalDocument> = {
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    lastUpdated: SITE_CONFIG.legalLastUpdated,
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "NEXORA  Studios practices strict data minimization. We only collect information that you voluntarily submit through our contact and project inquiry forms.",
          "This includes your name, business or brand name, email address, optional contact phone number, project requirements, and approximate budget.",
          "We do not collect payment card numbers, sensitive personal identifiers, or background location data through this website."
        ]
      },
      {
        heading: "2. Purpose of Collection",
        content: [
          "Information submitted via our inquiry form is used exclusively to respond to your project request, prepare tailored quotes, communicate project timelines, and deliver website design and development services.",
          "We do not sell, rent, trade, or monetize your contact details with data brokers, advertisers, or third-party marketing companies."
        ]
      },
      {
        heading: "3. Data Retention & Minimization",
        content: [
          "Inquiry records are retained solely for the duration required to process your request and maintain business records. If you decide not to proceed with a project, you may request deletion of your inquiry data at any time by contacting us."
        ]
      },
      {
        heading: "4. Cookies and Local Storage",
        content: [
          "This website utilizes strictly necessary local browser storage solely to preserve your cookie preferences and interface display settings (such as dismissing temporary notices). We do not deploy third-party advertising or cross-site tracking cookies."
        ]
      },
      {
        heading: "5. Security Practices",
        content: [
          "All traffic between your browser and this website is encrypted using Transport Layer Security (TLS/HTTPS). Form transmissions are processed through secure server endpoints designed to protect against unauthorized interception."
        ]
      },
      {
        heading: "6. User Rights & Contact",
        content: [
          `Under applicable data protection principles, you hold the right to request access to, correction of, or deletion of your personal contact data. For any privacy inquiries, reach our team directly at ${SITE_CONFIG.contactEmail}.`
        ]
      }
    ]
  },
  terms: {
    id: "terms",
    title: "Terms & Conditions",
    lastUpdated: SITE_CONFIG.legalLastUpdated,
    sections: [
      {
        heading: "1. Scope of Services",
        content: [
          "NEXORA  Studios provides professional web design, front-end development, website redesign, and basic search engine optimization foundation services.",
          "Each project scope, deliverables, timeline, and final quotation are formalized in an agreed proposal prior to the commencement of development."
        ]
      },
      {
        heading: "2. Quotations and Pricing",
        content: [
          `Standard basic website projects start from ₹${SITE_CONFIG.standardStartingPrice.toLocaleString()}. Any promotional rates (including seasonal offers) are valid strictly during stated promotional windows and apply to qualifying basic packages.`,
          "Final pricing varies based on page volume, custom functionality, third-party integrations, domain registration fees, and ongoing hosting requirements."
        ]
      },
      {
        heading: "3. Intellectual Property & Handover",
        content: [
          "Upon complete settlement of agreed project invoices, the client receives full ownership of the bespoke website code, custom layout assets, and published content produced specifically for the project.",
          "NEXORA  Studios reserves the professional right to display completed project screenshots, design artifacts, and live links within its studio portfolio unless a non-disclosure agreement (NDA) has been explicitly executed."
        ]
      },
      {
        heading: "4. Client Obligations & Content",
        content: [
          "Clients are responsible for supplying timely feedback, text copy, official brand logos, and required high-resolution imagery unless photography and copywriting are explicitly contracted as deliverables.",
          "The client certifies that all materials supplied do not infringe upon any third-party copyright, trademark, or proprietary rights."
        ]
      },
      {
        heading: "5. Disclaimer & Realistic Expectations",
        content: [
          "NEXORA  Studios engineers websites following semantic standards, mobile-first responsiveness, and accessibility guidelines. However, we do not make false guarantees regarding specific third-party search engine ranks, sales conversions, or third-party platform traffic."
        ]
      }
    ]
  },
  cookies: {
    id: "cookies",
    title: "Cookie Policy",
    lastUpdated: SITE_CONFIG.legalLastUpdated,
    sections: [
      {
        heading: "1. What Are Cookies?",
        content: [
          "Cookies and browser local storage mechanisms are small data files stored on your device that enable web applications to remember your preferences and ensure security."
        ]
      },
      {
        heading: "2. What We Use",
        content: [
          "Strictly Necessary Storage: Used to store your cookie consent preferences and session dismissal states.",
          "Functional Performance: Optional client-side state required to maintain responsive device previews and active filter selections during your visit.",
          "We do NOT use third-party behavioral advertising cookies, ad-network beacons, or fingerprinting scripts."
        ]
      },
      {
        heading: "3. Managing Your Preferences",
        content: [
          "You can adjust your cookie choices at any time through our on-site cookie consent banner or by clearing your browser's local storage cache."
        ]
      }
    ]
  },
  refund: {
    id: "refund",
    title: "Refund & Cancellation Policy",
    lastUpdated: SITE_CONFIG.legalLastUpdated,
    sections: [
      {
        heading: "1. Milestone-Based Commitment",
        content: [
          "Because bespoke web design and software engineering require dedicated research, layout drafting, and development hours, work is organized into defined milestones.",
          "Initial project onboarding deposits cover initial discovery, wireframing, and design research."
        ]
      },
      {
        heading: "2. Cancellation During Active Milestones",
        content: [
          "If a client requests project cancellation prior to the completion of the visual design phase, charges are prorated to cover only the recorded discovery and design hours completed to date, and any unexpended deposit balance is returned.",
          "Once final website code is approved and deployed to production, milestone payments are non-refundable."
        ]
      },
      {
        heading: "3. Defect Correction & Warranty",
        content: [
          "Every website delivered by NEXORA  Studios includes a standard 14-day post-launch warranty window during which any layout glitches, broken links, or form submission errors arising from our implementation are corrected promptly at no additional cost."
        ]
      }
    ]
  },
  accessibility: {
    id: "accessibility",
    title: "Accessibility Statement",
    lastUpdated: SITE_CONFIG.legalLastUpdated,
    sections: [
      {
        heading: "1. Our Commitment",
        content: [
          "NEXORA  Studios is committed to making its digital experiences accessible to visitors of all abilities, adhering to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA benchmarks."
        ]
      },
      {
        heading: "2. Concrete Accessibility Features",
        content: [
          "Semantic HTML elements across all headings, landmarks, lists, and form controls.",
          "High-contrast color pairings satisfying minimum 4.5:1 contrast ratios for body prose.",
          "Comprehensive keyboard navigability with visible focus indicators for all interactive buttons and modal dialogs.",
          "Compliance with prefers-reduced-motion to significantly reduce non-essential animations for users with vestibular sensitivities.",
          "Meaningful button labels and descriptive alt text on all visual representations."
        ]
      },
      {
        heading: "3. Feedback & Inquiries",
        content: [
          `If you encounter any difficulty accessing any portion of our website, please email ${SITE_CONFIG.contactEmail} so we can provide immediate assistance and implement necessary improvements.`
        ]
      }
    ]
  }
};
