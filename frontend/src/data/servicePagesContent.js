/**
 * Service page content specification for Genius36 Technologies.
 * Uniform structure for: slug, SEO, hero, description, features, benefits,
 * visual blocks, process, CTAs, and footer (related services, contact, social).
 */

// Standard layout: 2-column grid for feature blocks; icons from Lucide (Globe, Code, etc.)
const LAYOUT = {
  featureBlocks: "2-column grid (1 col mobile, 2 col lg)",
  processSteps: 5,
  ctaPrimary: { label: "Start Project / Get Consultation", color: "#0951d8", size: "lg" },
  ctaSecondary: { label: "Learn More / View Pricing", variant: "outline" },
};

// Unsplash/placeholder images; alt text per service
const IMAGES = {
  webMobile: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
  uiUx: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  digitalMarketing: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  cloudCyber: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
  aiMl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  labs3d: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80",
};

export const servicePages = [
  {
    slug: "website-mobile-app-development",
    name: "Website & Mobile App Development",
    seo: {
      metaTitle: "Website & Mobile App Development | Custom Web & Mobile Solutions | Genius36 Technologies",
      metaDescription: "Professional website and mobile app development: custom web apps, iOS & Android apps, responsive design, and scalable solutions. Get a quote from Genius36 Technologies.",
      focusKeywords: ["website development", "mobile app development", "custom web apps", "iOS Android apps", "responsive websites"],
    },
    breadcrumb: "Website & Mobile App Development",
    hero: {
      headline: "Website & Mobile App Development That Scales",
      subheadline: "Custom web and mobile solutions from concept to launch—responsive, fast, and built for growth.",
      image: IMAGES.webMobile,
      imageAlt: "Developer coding on laptop with modern IDE and mobile device mockups",
    },
    description: {
      overview: "We build custom websites and mobile applications tailored to your business. From responsive business sites and web apps to native and cross-platform mobile apps (iOS, Android), we use modern stacks—React, Node, Flutter, React Native—and follow best practices for performance, security, and scalability.",
      targetAudience: "Startups, SMEs, enterprises, and educational institutions needing a strong web or mobile presence.",
      useCases: ["Business websites and landing pages", "Web applications and dashboards", "iOS and Android mobile apps", "Cross-platform apps (Flutter, React Native)", "API development and third-party integrations"],
    },
    detailsSections: [
      {
        title: "How we build your website or app",
        paragraphs: [
          "We start by understanding your goals, users, and the actions you want visitors to take. From there, we define the right information architecture, core screens, and a scalable feature roadmap.",
          "Our builds follow a clean component-based approach with consistent UI patterns, fast performance, and accessibility in mind—so your product stays easy to maintain as it grows.",
        ],
      },
      {
        title: "Technology, performance, and security",
        paragraphs: [
          "We choose a modern stack based on your requirements—React for web, Node for APIs, and Flutter/React Native when cross-platform speed is needed. We also integrate analytics, payments, maps, chat, and third‑party services when required.",
          "Performance and security are built in: optimized images, code-splitting where needed, secure API patterns, and deployment best practices so you get a stable, production-ready release.",
        ],
      },
    ],
    keyFeatures: [
      "Responsive, mobile-first web design",
      "Native iOS & Android and cross-platform mobile apps",
      "Modern tech stack: React, Node, Flutter, React Native",
      "RESTful APIs and third-party integrations",
      "Performance optimization and fast load times",
      "Ongoing maintenance and support",
    ],
    benefits: [
      "Faster time-to-market with agile delivery",
      "Scalable architecture for future growth",
      "SEO-friendly and accessible web builds",
      "Secure, compliant development practices",
    ],
    visualBlocks: [
      { icon: "Globe", title: "Web Development", description: "Responsive sites, SPAs, and web apps.", layout: "2-col" },
      { icon: "Smartphone", title: "Mobile Apps", description: "Native and cross-platform mobile solutions.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Discovery & Planning — We align on goals, features, and timeline.",
        "Wireframing & Design — UI/UX mockups and user flows.",
        "Development & Coding — Build with modern frameworks and clean code.",
        "Testing & QA — Cross-browser, device, and performance checks.",
        "Launch & Maintenance — Deploy and provide ongoing support.",
      ],
    },
    cta: {
      primary: { label: "Start Project", to: "/contact" },
      secondary: { label: "View Pricing", to: "/services" },
    },
    relatedServices: ["ui-ux-responsive-design", "ecommerce-solutions-platforms", "cloud-cybersecurity-it-consultancy"],
  },
  {
    slug: "ui-ux-responsive-design",
    name: "UI/UX & Responsive Design Services",
    seo: {
      metaTitle: "UI/UX & Responsive Design Services | User-Centered Design | Genius36 Technologies",
      metaDescription: "Expert UI/UX and responsive design: user research, wireframes, prototypes, and pixel-perfect interfaces. Improve engagement and conversions with Genius36 Technologies.",
      focusKeywords: ["UI design", "UX design", "responsive design", "user experience", "wireframing", "prototyping"],
    },
    breadcrumb: "UI/UX & Responsive Design",
    hero: {
      headline: "UI/UX & Responsive Design That Users Love",
      subheadline: "User-centered interfaces and responsive layouts that boost engagement and conversions.",
      image: IMAGES.uiUx,
      imageAlt: "UI/UX design workspace with wireframes and design tools on screen",
    },
    description: {
      overview: "Our UI/UX and responsive design services focus on users first. We deliver wireframes, high-fidelity prototypes, and production-ready designs that work across devices. We use evidence-based practices, accessibility standards (WCAG), and modern design systems to create clear, consistent, and conversion-focused experiences.",
      targetAudience: "Product teams, startups, enterprises, and agencies that need professional UI/UX and responsive design.",
      useCases: ["Website and app redesigns", "New product UI/UX", "Design systems and style guides", "Responsive and mobile-first layouts", "Usability audits and improvements"],
    },
    detailsSections: [
      {
        title: "Research-driven UI/UX (not just visuals)",
        paragraphs: [
          "We map user journeys, identify friction points, and define the content hierarchy before jumping into screens. This helps the final UI feel intuitive and reduces rework during development.",
          "Design decisions are guided by clarity, accessibility, and conversion—so the interface supports real business outcomes like enquiries, signups, or purchases.",
        ],
      },
      {
        title: "Responsive design and developer handoff",
        paragraphs: [
          "We design for key breakpoints (mobile, tablet, desktop) with reusable components and a design system mindset. This ensures your product looks consistent across devices and scales to new pages easily.",
          "You’ll get a clean handoff with components, spacing rules, states (hover/active/disabled), and assets—making implementation faster and more accurate.",
        ],
      },
    ],
    keyFeatures: [
      "User research and usability testing",
      "Wireframes, prototypes, and high-fidelity mockups",
      "Responsive, mobile-first layouts",
      "WCAG-aligned accessibility",
      "Design systems and component libraries",
      "Handoff to development with specs and assets",
    ],
    benefits: [
      "Higher user engagement and lower bounce rates",
      "Faster development with clear design specs",
      "Consistent branding across touchpoints",
      "Inclusive, accessible experiences",
    ],
    visualBlocks: [
      { icon: "Layout", title: "Responsive Layouts", description: "Fluid grids and breakpoints for all devices.", layout: "2-col" },
      { icon: "Palette", title: "Design Systems", description: "Reusable components and visual consistency.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Discovery & Research — Goals, users, and constraints.",
        "Wireframing & Information Architecture — Structure and flows.",
        "Visual Design & Prototyping — High-fidelity UI and interactions.",
        "Responsive & Accessibility Review — Multi-device and a11y checks.",
        "Handoff & Support — Specs, assets, and design QA.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "View Portfolio", to: "/projects" },
    },
    relatedServices: ["website-mobile-app-development", "ecommerce-solutions-platforms", "digital-marketing-seo"],
  },
  {
    slug: "ecommerce-solutions-platforms",
    name: "E-Commerce Solutions & Platforms",
    seo: {
      metaTitle: "E-Commerce Solutions & Platforms | Online Store Development | Genius36 Technologies",
      metaDescription: "E-commerce solutions: Shopify, WooCommerce, and custom platforms. Payment gateways, inventory, and secure checkout. Start selling online with Genius36 Technologies.",
      focusKeywords: ["e-commerce development", "Shopify", "WooCommerce", "online store", "payment integration", "ecommerce platform"],
    },
    breadcrumb: "E-Commerce Solutions & Platforms",
    hero: {
      headline: "E-Commerce Solutions That Drive Sales",
      subheadline: "Online stores and marketplaces with secure payments, inventory, and scalable growth.",
      image: IMAGES.ecommerce,
      imageAlt: "E-commerce dashboard and shopping cart on laptop and mobile",
    },
    description: {
      overview: "We build and optimize e-commerce sites on Shopify, WooCommerce, and custom platforms. Services include store setup, theme customization, payment and shipping integration, inventory and order management, and performance tuning to maximize conversions and support growth.",
      targetAudience: "Retailers, brands, B2B sellers, and startups launching or scaling online sales.",
      useCases: ["New online stores (B2C and B2B)", "Migrating to Shopify or WooCommerce", "Marketplace and multi-vendor setups", "Subscription and recurring billing", "Integration with ERP, CRM, and analytics"],
    },
    detailsSections: [
      {
        title: "Storefront that converts",
        paragraphs: [
          "We design product discovery, category navigation, and checkout flow to reduce drop-offs. This includes fast-loading pages, clear CTAs, trust elements, and mobile-first usability.",
          "From home page to product pages, we focus on content structure, filters, search, and a smooth purchase journey—so customers can buy with confidence.",
        ],
      },
      {
        title: "Payments, shipping, and integrations",
        paragraphs: [
          "We integrate payment gateways and shipping partners based on your market and operational needs. Taxes, coupons, inventory rules, and order statuses are configured carefully to match your workflow.",
          "If you use ERP/CRM/accounting tools, we plan integrations so your store data stays consistent across systems and reporting remains reliable.",
        ],
      },
    ],
    keyFeatures: [
      "Shopify and WooCommerce development",
      "Custom e-commerce and marketplace builds",
      "Payment gateways (Razorpay, Stripe, PayPal, etc.)",
      "Inventory, orders, and shipping logic",
      "SEO and conversion optimization",
      "Security (PCI awareness) and performance",
    ],
    benefits: [
      "Faster checkout and fewer abandoned carts",
      "Scalable catalog and order management",
      "Unified data with ERP/CRM and analytics",
      "Reliable, secure, and uptime-focused hosting",
    ],
    visualBlocks: [
      { icon: "ShoppingCart", title: "Store Setup", description: "Platform selection, design, and catalog.", layout: "2-col" },
      { icon: "CreditCard", title: "Payments & Checkout", description: "Secure payments and smooth checkout.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Discovery & Planning — Products, workflows, and integrations.",
        "Wireframing & Design — Store structure and key pages.",
        "Development & Integration — Platform build, payments, and APIs.",
        "Testing & QA — Checkout, inventory, and security checks.",
        "Launch & Maintenance — Go-live and ongoing support.",
      ],
    },
    cta: {
      primary: { label: "Start Your Store", to: "/contact" },
      secondary: { label: "View Pricing", to: "/services" },
    },
    relatedServices: ["website-mobile-app-development", "ui-ux-responsive-design", "digital-marketing-seo"],
  },
  {
    slug: "digital-marketing-seo",
    name: "Digital Marketing & SEO Services",
    seo: {
      metaTitle: "Digital Marketing & SEO Services | Grow Traffic & Leads | Genius36 Technologies",
      metaDescription: "Digital marketing and SEO: organic search, content, PPC, and analytics. Data-driven strategies to grow traffic, leads, and revenue. Partner with Genius36 Technologies.",
      focusKeywords: ["digital marketing", "SEO services", "search engine optimization", "content marketing", "PPC", "Google Analytics"],
    },
    breadcrumb: "Digital Marketing & SEO",
    hero: {
      headline: "Digital Marketing & SEO That Grows Your Business",
      subheadline: "Data-driven strategies for search, content, and paid campaigns to increase traffic and leads.",
      image: IMAGES.digitalMarketing,
      imageAlt: "Digital marketing analytics dashboard with charts and metrics",
    },
    description: {
      overview: "We offer digital marketing and SEO services to improve visibility, traffic, and conversions. Our work includes technical and on-page SEO, content strategy, local SEO, and paid campaigns (Google, social). We use analytics and testing to refine tactics and report on ROI.",
      targetAudience: "SMEs, startups, local businesses, and enterprises aiming to grow online visibility and lead generation.",
      useCases: ["Organic search and SEO audits", "Content and blog strategy", "Local SEO and Google Business", "PPC and social advertising", "Analytics, reporting, and CRO"],
    },
    detailsSections: [
      {
        title: "SEO that builds long-term traffic",
        paragraphs: [
          "We improve technical foundations (site speed, indexability, structure) and align on-page content to real search intent. Keyword strategy is tied to your services/products and the leads you want.",
          "We also help plan content calendars and landing pages so your website consistently targets high-intent queries and supports your sales funnel.",
        ],
      },
      {
        title: "Campaigns, tracking, and reporting",
        paragraphs: [
          "For paid campaigns, we structure ads and landing pages for relevance and conversion. We monitor search terms, creatives, and budgets to reduce wasted spend.",
          "Tracking is set up so you can measure real outcomes—calls, forms, and purchases. Monthly reports focus on insights and next actions, not just vanity metrics.",
        ],
      },
    ],
    keyFeatures: [
      "Technical and on-page SEO",
      "Keyword research and content strategy",
      "Local SEO and Google Business Profile",
      "PPC (Google Ads) and social ads",
      "Analytics and conversion tracking",
      "Monthly reporting and optimization",
    ],
    benefits: [
      "Higher organic rankings and qualified traffic",
      "Clear attribution and ROI-focused reporting",
      "Cost-efficient lead generation",
      "Long-term, sustainable growth",
    ],
    visualBlocks: [
      { icon: "Search", title: "SEO", description: "Technical and content SEO for growth.", layout: "2-col" },
      { icon: "BarChart3", title: "Analytics & Ads", description: "Data, PPC, and conversion optimization.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Audit & Discovery — Baseline, goals, and competition.",
        "Strategy & Plan — Channels, keywords, and content.",
        "Implementation — On-site, content, and technical SEO.",
        "Campaigns & Optimization — Ads, content, and tests.",
        "Reporting & Iteration — Metrics, insights, and next steps.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "Learn More", to: "/services" },
    },
    relatedServices: ["ecommerce-solutions-platforms", "ui-ux-responsive-design", "website-mobile-app-development"],
  },
  {
    slug: "cloud-cybersecurity-it-consultancy",
    name: "Cloud, Cybersecurity & IT Consultancy",
    seo: {
      metaTitle: "Cloud, Cybersecurity & IT Consultancy | Secure & Scalable IT | Genius36 Technologies",
      metaDescription: "Cloud migration, cybersecurity, and IT consultancy: AWS, Azure, security audits, and compliance. Secure, scalable infrastructure from Genius36 Technologies.",
      focusKeywords: ["cloud services", "cybersecurity", "IT consultancy", "AWS", "Azure", "security audit", "compliance"],
    },
    breadcrumb: "Cloud, Cybersecurity & IT Consultancy",
    hero: {
      headline: "Cloud, Cybersecurity & IT Consultancy You Can Trust",
      subheadline: "Secure, scalable cloud infrastructure and strategic IT guidance for modern organizations.",
      image: IMAGES.cloudCyber,
      imageAlt: "Cloud and cybersecurity concepts: server racks, locks, and secure network diagrams",
    },
    description: {
      overview: "We provide cloud, cybersecurity, and IT consultancy to design, migrate, and operate secure and scalable systems. Services include cloud adoption (AWS, Azure, GCP), architecture review, security assessments, compliance support, and ongoing advisory to align IT with business goals.",
      targetAudience: "Enterprises, regulated industries, and growth-stage companies that need robust cloud and security practices.",
      useCases: ["Cloud migration and hybrid cloud", "Security audits and penetration testing", "Compliance (e.g., ISO, SOC, industry-specific)", "Infrastructure and DevOps advisory", "Disaster recovery and business continuity"],
    },
    detailsSections: [
      {
        title: "Cloud strategy and reliable operations",
        paragraphs: [
          "We assess your current infrastructure and define a roadmap for cloud adoption—public, private, or hybrid—based on workload needs and cost targets.",
          "From architecture review to implementation, we focus on reliability: backups, monitoring, disaster recovery, and repeatable deployments so your systems stay stable under load.",
        ],
      },
      {
        title: "Security and compliance by design",
        paragraphs: [
          "We identify risks through audits and best-practice reviews, then implement hardening steps like access controls, secure network patterns, and incident readiness.",
          "If you have compliance requirements, we help with policies, documentation, and practical controls—so security becomes part of operations, not an afterthought.",
        ],
      },
    ],
    keyFeatures: [
      "Cloud architecture and migration (AWS, Azure, GCP)",
      "Security assessments and penetration testing",
      "Compliance and policy support",
      "DevOps and infrastructure as code",
      "Disaster recovery and backup strategies",
      "Ongoing IT and security advisory",
    ],
    benefits: [
      "Reduced risk with proactive security and compliance",
      "Scalable, cost-effective cloud infrastructure",
      "Clear roadmaps for cloud and security",
      "Faster incident response and recovery",
    ],
    visualBlocks: [
      { icon: "Cloud", title: "Cloud", description: "Migration, architecture, and optimization.", layout: "2-col" },
      { icon: "Shield", title: "Cybersecurity", description: "Audits, hardening, and incident readiness.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Assessment & Discovery — Current state, risks, and goals.",
        "Strategy & Roadmap — Cloud and security roadmap.",
        "Design & Implementation — Architecture and migration.",
        "Hardening & Compliance — Security and compliance checks.",
        "Handover & Support — Runbooks, training, and ongoing support.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "Learn More", to: "/services" },
    },
    relatedServices: ["website-mobile-app-development", "ai-ml-training-workshops", "labs-setup-3d-printing"],
  },
  {
    slug: "ai-ml-training-workshops",
    name: "AI/ML Training & Technology Workshops",
    seo: {
      metaTitle: "AI/ML Training & Technology Workshops | Hands-On Learning | Genius36 Technologies",
      metaDescription: "AI and machine learning training and technology workshops: Python, NLP, automation, and real-world projects. Upskill with Genius36 Technologies.",
      focusKeywords: ["AI training", "machine learning", "ML workshops", "Python AI", "NLP", "AI automation", "technology workshops"],
    },
    breadcrumb: "AI/ML Training & Technology Workshops",
    hero: {
      headline: "AI/ML Training & Technology Workshops for Modern Teams",
      subheadline: "Hands-on AI, ML, and automation workshops with real projects and industry-relevant skills.",
      image: IMAGES.aiMl,
      imageAlt: "AI and machine learning concepts: neural network diagrams and code on screen",
    },
    description: {
      overview: "Our AI/ML and technology workshops combine theory and practice. We cover Python for AI, data fundamentals, classic ML, intro to deep learning, NLP, and automation. Sessions are tailored to teams and roles and include hands-on labs and capstone projects.",
      targetAudience: "IT teams, product and engineering groups, educators, and professionals upskilling in AI/ML and automation.",
      useCases: ["Corporate AI/ML training programs", "Python and data science bootcamps", "NLP and automation workshops", "Train-the-trainer and curriculum design", "Custom workshops for tools and platforms"],
    },
    detailsSections: [
      {
        title: "Hands-on learning with real outcomes",
        paragraphs: [
          "Workshops are structured around practical exercises—not only slides. Participants build mini-projects, learn key concepts, and practice problem-solving with guided labs.",
          "We tailor sessions for beginner, intermediate, or mixed audiences so everyone stays engaged and leaves with usable skills.",
        ],
      },
      {
        title: "Curriculum, labs, and post-training support",
        paragraphs: [
          "You get a clear curriculum, lab material, and recommended tools to continue learning after the session. We also support capstone project guidance where needed.",
          "For organizations, we can align the training with your internal workflows—like automation use cases, data pipelines, or evaluation of AI tools.",
        ],
      },
    ],
    keyFeatures: [
      "Python for AI and data science",
      "Classical ML and intro to deep learning",
      "NLP and text analytics",
      "AI automation and prompt engineering",
      "Hands-on labs and real-world projects",
      "Certificates and post-workshop support",
    ],
    benefits: [
      "Practical, job-relevant AI/ML skills",
      "Faster adoption of AI tools and workflows",
      "Customizable content for your stack and use cases",
      "Scalable upskilling for teams",
    ],
    visualBlocks: [
      { icon: "Cpu", title: "AI/ML Fundamentals", description: "Python, data, and ML basics.", layout: "2-col" },
      { icon: "Bot", title: "Automation & NLP", description: "Prompting, NLP, and workflow automation.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Needs & Scope — Goals, audience, and prerequisites.",
        "Curriculum & Labs — Custom content and exercises.",
        "Delivery — Live or hybrid workshops.",
        "Projects & Assessment — Hands-on projects and quizzes.",
        "Certificates & Follow-up — Credentials and support.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "View Training", to: "/training" },
    },
    relatedServices: ["cloud-cybersecurity-it-consultancy", "labs-setup-3d-printing", "website-mobile-app-development"],
  },
  {
    slug: "labs-setup-3d-printing",
    name: "Labs Setup & 3D Printing Services",
    seo: {
      metaTitle: "Labs Setup & 3D Printing Services | IT Labs & Maker Labs | Genius36 Technologies",
      metaDescription: "IT lab setup, computer labs, and 3D printing services for schools, colleges, and makers. Hardware, software, and support from Genius36 Technologies.",
      focusKeywords: ["lab setup", "computer lab", "3D printing", "IT lab", "maker lab", "educational technology"],
    },
    breadcrumb: "Labs Setup & 3D Printing",
    hero: {
      headline: "Labs Setup & 3D Printing for Education and Makers",
      subheadline: "IT labs, computer labs, and 3D printing solutions—from design to installation and support.",
      image: IMAGES.labs3d,
      imageAlt: "Modern computer lab with workstations and 3D printer in use",
    },
    description: {
      overview: "We design, supply, and install IT and computer labs for schools, colleges, and institutes. Services include workstation and network setup, lab software and imaging, and 3D printing equipment and training. We also support maker labs and fabrication spaces with printers, filaments, and maintenance.",
      targetAudience: "Schools, colleges, universities, vocational centers, and maker spaces needing reliable lab and 3D printing infrastructure.",
      useCases: ["New or upgraded computer and IT labs", "Programming and design labs", "3D printing labs and maker spaces", "Network and server setup for labs", "AMC and ongoing support"],
    },
    detailsSections: [
      {
        title: "End-to-end lab setup (planning to handover)",
        paragraphs: [
          "We plan the lab layout, power/network requirements, and a bill of materials to match your budget and capacity goals. Installation includes structured cabling, workstation setup, and network configuration.",
          "We also set up essential lab software, imaging, and management tools so the environment stays consistent and easy to maintain.",
        ],
      },
      {
        title: "3D printing setup, training, and AMC",
        paragraphs: [
          "For 3D printing labs, we help select printers and materials, configure slicing workflows, and train staff/students on safe operation and basic troubleshooting.",
          "We can provide AMC and ongoing support so equipment stays operational and your lab runs smoothly throughout the academic year.",
        ],
      },
    ],
    keyFeatures: [
      "Computer and IT lab design and setup",
      "Workstations, networking, and servers",
      "Lab software, imaging, and management",
      "3D printers, filaments, and maintenance",
      "Training and documentation",
      "AMC and on-site support",
    ],
    benefits: [
      "Reliable, scalable lab infrastructure",
      "Hands-on 3D printing for learning and prototyping",
      "Single-point support and AMC",
      "Future-proof, upgradeable setups",
    ],
    visualBlocks: [
      { icon: "Monitor", title: "IT & Computer Labs", description: "Design, hardware, and software setup.", layout: "2-col" },
      { icon: "Box", title: "3D Printing", description: "Printers, materials, and training.", layout: "2-col" },
    ],
    process: {
      title: "Website Designed & Developed in Just 5 Steps",
      steps: [
        "Requirement & Site Visit — Needs, space, and budget.",
        "Design & Proposal — Layout, BOM, and timeline.",
        "Procurement & Installation — Hardware and wiring.",
        "Software & Configuration — Imaging and access control.",
        "Handover & AMC — Training, docs, and support.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "Learn More", to: "/services" },
    },
    relatedServices: ["ai-ml-training-workshops", "cloud-cybersecurity-it-consultancy", "website-mobile-app-development"],
  },
];

/** Get a service page by slug. */
export function getServiceBySlug(slug) {
  return servicePages.find((s) => s.slug === slug) || null;
}

/** All slugs for routing and sitemaps. */
export function getAllServiceSlugs() {
  return servicePages.map((s) => s.slug);
}

/** Resolve related service entries for a given slug. */
export function getRelatedServices(slugs) {
  if (!Array.isArray(slugs)) return [];
  return slugs
    .map((slug) => servicePages.find((s) => s.slug === slug))
    .filter(Boolean);
}

export default servicePages;
