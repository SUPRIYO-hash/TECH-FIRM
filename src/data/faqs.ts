export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing & Scope" | "Technical" | "Process";
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-types",
    question: "What type of websites do you build?",
    category: "General",
    answer: "NEXORA  Studios builds custom websites for local businesses, salons, restaurants, cafés, travel agencies, personal brands, professional services (legal, medical, financial), and campaign landing pages. Every website is built custom to your industry rather than forced into a rigid generic template."
  },
  {
    id: "faq-cost",
    question: "How much does a website cost?",
    category: "Pricing & Scope",
    answer: "Our minimum website making charge starts from ₹1,200, accompanied by a ₹300/month ongoing maintenance plan that covers technical updates, security patches, uptime monitoring, and routine content modifications. For multi-page commercial platforms or specialized dashboards, quotes are tailored based on factors such as total page volume, interactive booking features, asset preparation, and custom integrations. We provide transparent, itemized quotes before any work begins."
  },
  {
    id: "faq-time",
    question: "How long does a website take to complete?",
    category: "Process",
    answer: "A focused single-page landing page or basic business site is typically completed within 3 to 7 business days, provided content and feedback are available. Multi-page commercial platforms or websites requiring specialized booking flows generally take between 1 to 3 weeks."
  },
  {
    id: "faq-redesign",
    question: "Can you redesign an existing website?",
    category: "General",
    answer: "Yes. If your current website feels outdated, runs slowly, looks broken on smartphones, or fails to represent your business professionally, we can restructure and redesign it from scratch while preserving your existing domain name and brand assets."
  },
  {
    id: "faq-domain",
    question: "Can you connect a custom domain?",
    category: "Technical",
    answer: "Yes, absolutely. We configure custom domain names (such as yourbusiness.com, .in, .org) and ensure an automated SSL security certificate is active for HTTPS encryption. If you do not yet own a domain, we guide you through registering one in your own name."
  },
  {
    id: "faq-mobile",
    question: "Do you provide responsive mobile design?",
    category: "Technical",
    answer: "Yes. Every website we build is engineered mobile-first. We thoroughly test typography, button touch-targets, navigation drawers, and image scaling across small mobile screens, tablets, laptops, and ultra-wide desktop monitors."
  },
  {
    id: "faq-forms",
    question: "Can you add forms and inquiry capture?",
    category: "Technical",
    answer: "Yes. We can incorporate custom contact forms, quote request estimators, appointment reservation inquiries, table booking flows, and direct WhatsApp contact triggers that deliver leads directly to your inbox or phone."
  },
  {
    id: "faq-chatbot",
    question: "Can you add a chatbot to our website?",
    category: "Technical",
    answer: "Yes. We can implement lightweight interactive assistants, automated inquiry guides, or AI-powered chatbots tailored with your business's hours, services, and FAQ responses to engage visitors 24/7."
  },
  {
    id: "faq-changes",
    question: "Can I request changes during and after the project?",
    category: "Process",
    answer: "Yes. During the design and build phases, structured feedback rounds are included so you can review and refine layouts before launch. After launch, we provide support and can arrange ongoing maintenance or ad-hoc updates as your business evolves."
  },
  {
    id: "faq-start",
    question: "How do I start a project with NEXORA  Studios?",
    category: "Process",
    answer: "Simply submit an inquiry through our contact form below or reach out to our team with your business overview, preferred website type, and timeline. We will review your requirements and respond with initial recommendations and a clear proposal."
  }
];
