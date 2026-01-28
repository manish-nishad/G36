/**
 * Service page content specification for Genius36 Technologies.
 * Uniform structure for: slug, SEO, hero, description, features, benefits,
 * visual blocks, process, CTAs, and footer (related services, contact, social).
 */

import { servicesImages } from "../mockData";

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
    // Map to Index page service: "Custom Website Design & Development" - uses WebDevelopment Lottie
    lottieKey: "WebDevelopment",
    cardImage: servicesImages.development,
    seo: {
      metaTitle: "Custom Website Development Company in India | Mobile Apps",
      metaDescription: "Expert custom website & mobile app development services in India. Responsive websites, React Native apps, and web applications. 10+ years experience. Get free quote.",
      focusKeywords: [
        "custom website development company in india",
        "mobile app development services bhilai",
        "responsive website development services",
        "web application development company",
        "react native app development india"
      ],
    },
    breadcrumb: "Website & Mobile App Development",
    hero: {
      headline: "Custom Website Development Company in India: Responsive Websites & Mobile Apps",
      subheadline: "Professional web and mobile app development services with 10+ years experience. Responsive websites, React Native apps, and custom web applications that drive business growth.",
      image: IMAGES.webMobile,
      imageAlt: "Custom website development company in India - developer coding responsive websites and mobile apps",
    },
    description: {
      overview: "Looking for a reliable custom website development company in India? Genius36 Technologies delivers professional web and mobile app development services that drive business growth. With over 10 years of experience serving clients across India, we specialize in building responsive websites, custom web applications, and cross-platform mobile apps using modern technologies like React, Node.js, Flutter, and React Native. Our responsive website development services ensure your site looks perfect on desktops, tablets, and smartphones. With mobile traffic accounting for over 60% of web visits, having a mobile-friendly website isn't optional—it's essential. We build every website with a mobile-first approach, ensuring fast load times, intuitive navigation, and seamless user experiences across all devices.",
      targetAudience: "Startups, SMEs, enterprises, and educational institutions needing a strong web or mobile presence. Businesses looking for custom website development, mobile app development services, or web application development across India.",
      useCases: [
        "Business websites and landing pages with responsive design",
        "Custom web applications and enterprise solutions",
        "Native iOS and Android mobile apps",
        "Cross-platform apps using React Native and Flutter",
        "Progressive web apps (PWAs) and API development",
        "E-commerce platforms and online stores"
      ],
    },
    detailsSections: [
      {
        title: "Custom Web Application Development",
        paragraphs: [
          "Beyond traditional websites, we excel at web application development. Whether you need a customer portal, admin dashboard, inventory management system, or a progressive web app (PWA), our developers use modern frameworks and best practices to build scalable, secure applications.",
          "Our web application development services include custom web applications tailored to your business needs, enterprise-grade solutions with robust security, API development and third-party integrations, real-time features and data synchronization, and cloud deployment with scalable architecture.",
        ],
      },
      {
        title: "Mobile App Development Services",
        paragraphs: [
          "Our mobile app development services cover both native and cross-platform solutions. For businesses targeting iOS and Android users, we offer React Native app development, which allows us to build one codebase that works seamlessly on both platforms—saving time and reducing costs.",
          "We also develop native iOS and Android apps when performance and platform-specific features are critical. Our mobile app development process includes user experience (UX) design and wireframing, native iOS development using Swift, native Android development using Kotlin, React Native development for cross-platform apps, app store optimization and submission, and post-launch maintenance and updates.",
        ],
      },
      {
        title: "Our Technology Stack",
        paragraphs: [
          "As a professional website development company, we stay current with industry-leading technologies. For web development, we use React.js, Next.js, Vue.js for frontend, Node.js and Express.js for backend, and MySQL, PostgreSQL, MongoDB for databases.",
          "For mobile development, we specialize in React Native for cross-platform apps, Flutter for native-like performance, native iOS (Swift) and Android (Kotlin) development, and Firebase for backend services. All our solutions are deployed on AWS, Azure, or Google Cloud Platform for reliability and scalability.",
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
    // Map to Index page service: Similar to web development - use WebDevelopment Lottie
    lottieKey: "WebDevelopment",
    cardImage: servicesImages.workspace,
    seo: {
      metaTitle: "UI/UX Design Services India | Responsive Web Design Company",
      metaDescription: "Expert UI/UX and responsive design services in India. User research, wireframes, prototypes, and pixel-perfect interfaces. Improve engagement and conversions.",
      focusKeywords: [
        "ui ux design services india",
        "responsive web design company",
        "user experience design services",
        "ui design company bhilai",
        "wireframing and prototyping services"
      ],
    },
    breadcrumb: "UI/UX & Responsive Design Services",
    hero: {
      headline: "UI/UX Design Services India: Responsive Web Design That Converts",
      subheadline: "Expert user experience design and responsive web design services in India. User research, wireframes, prototypes, and pixel-perfect interfaces that improve engagement and drive conversions.",
      image: IMAGES.uiUx,
      imageAlt: "UI/UX design services India - designer working on responsive web design and user experience mockups",
    },
    description: {
      overview: "Looking for professional UI/UX design services in India? Genius36 Technologies delivers expert user experience design and responsive web design solutions that improve engagement and drive conversions. With over 10 years of experience, we specialize in user research, wireframing, prototyping, and pixel-perfect implementation across all devices. Our responsive web design company approach ensures your interface works beautifully on desktop, tablet, and mobile devices. We combine aesthetics with functionality, creating user-centered designs that prioritize usability, accessibility, and visual appeal.",
      targetAudience: "Businesses looking to improve user engagement, conversion rates, and brand perception through better design. Companies needing UI/UX design services, responsive web design, or user experience improvements.",
      useCases: [
        "Website redesigns and rebranding with responsive design",
        "Mobile app UI/UX design and user experience optimization",
        "Dashboard and admin panel interfaces",
        "E-commerce product pages and checkout optimization",
        "Landing page optimization and conversion rate improvement"
      ],
    },
    detailsSections: [
      {
        title: "User Experience Design Services",
        paragraphs: [
          "Our UI/UX design services begin with comprehensive user research to understand your audience, their needs, pain points, and behaviors. This research informs our wireframing and prototyping process, where we create low-fidelity and high-fidelity designs that we test and iterate based on user feedback.",
          "We prioritize usability, accessibility (WCAG compliance), and visual appeal—ensuring your interface works beautifully on desktop, tablet, and mobile devices. Our responsive web design company approach means every design is mobile-first, ensuring fast load times and seamless user experiences across all screen sizes.",
        ],
      },
      {
        title: "Wireframing and Prototyping Services",
        paragraphs: [
          "Our wireframing and prototyping services help you visualize and test your design before development begins. We create interactive prototypes that allow stakeholders and users to experience the interface, gather feedback, and make informed decisions.",
          "This process reduces development costs, improves user satisfaction, and ensures your final product meets user expectations. We use industry-standard tools like Figma, Adobe XD, and Sketch to create pixel-perfect designs that developers can implement efficiently.",
        ],
      },
    ],
    keyFeatures: [
      "User research and persona development",
      "Wireframing and interactive prototypes",
      "Responsive design for all screen sizes",
      "Accessibility compliance (WCAG)",
      "Design system and style guide creation",
      "Usability testing and optimization",
    ],
    benefits: [
      "Improved user engagement and conversions",
      "Consistent brand experience across devices",
      "Reduced bounce rates and support tickets",
      "Future-proof, scalable design systems",
    ],
    visualBlocks: [
      { icon: "Layout", title: "UI Design", description: "Pixel-perfect interfaces with modern aesthetics.", layout: "2-col" },
      { icon: "Palette", title: "UX Research", description: "Data-driven design decisions.", layout: "2-col" },
    ],
    process: {
      title: "Design Process in 5 Steps",
      steps: [
        "Research & Discovery — Understand users, business goals, and competitors.",
        "Wireframing — Create low-fidelity layouts and information architecture.",
        "Design & Prototyping — Build high-fidelity designs and interactive prototypes.",
        "Testing & Refinement — User testing and iterative improvements.",
        "Handoff & Implementation — Design system and developer-ready assets.",
      ],
    },
    cta: {
      primary: { label: "Get Design Consultation", to: "/contact" },
      secondary: { label: "View Portfolio", to: "/projects" },
    },
    relatedServices: ["website-mobile-app-development", "ecommerce-solutions-platforms", "digital-marketing-seo"],
  },
  {
    slug: "ecommerce-solutions-platforms",
    name: "E-Commerce Solutions & Platforms",
    // Map to Index page service: Similar to software development - use SoftwareDevelopment Lottie
    lottieKey: "SoftwareDevelopment",
    cardImage: servicesImages.workspace,
    seo: {
      metaTitle: "E-Commerce Development Company India | Shopify & WooCommerce",
      metaDescription: "Professional e-commerce development: Shopify, WooCommerce, custom platforms. Payment integration, inventory management. Launch your online store today.",
      focusKeywords: [
        "ecommerce development company india",
        "shopify store development services",
        "woocommerce development company",
        "online store development services",
        "ecommerce website development bhilai"
      ],
    },
    breadcrumb: "E-Commerce Solutions & Platforms",
    hero: {
      headline: "E-Commerce Development Company India: Shopify & WooCommerce Solutions",
      subheadline: "Professional e-commerce development services in India. Shopify store development, WooCommerce customization, and custom platforms with payment integration and inventory management.",
      image: IMAGES.ecommerce,
      imageAlt: "E-commerce development company India - Shopify and WooCommerce online store dashboard",
    },
    description: {
      overview: "Looking for a reliable e-commerce development company in India? Genius36 Technologies delivers professional online store development services including Shopify store development, WooCommerce customization, and custom e-commerce platforms. With over 10 years of experience, we help businesses launch and scale their online stores with complete solutions covering product catalogs, payment gateways, inventory management, and order fulfillment. Our e-commerce development services ensure your online store is secure, scalable, and optimized for conversions.",
      targetAudience: "Retailers, manufacturers, and businesses looking to sell products or services online. Companies needing Shopify store development, WooCommerce development, or custom e-commerce solutions.",
      useCases: [
        "Online retail stores with Shopify or WooCommerce",
        "B2B e-commerce platforms and wholesale portals",
        "Marketplace development and multi-vendor platforms",
        "Subscription-based stores and recurring billing",
        "Digital product sales and download management"
      ],
    },
    detailsSections: [
      {
        title: "Shopify Store Development Services",
        paragraphs: [
          "Our Shopify store development services help you launch a professional online store quickly and efficiently. We customize Shopify themes, set up product catalogs, configure payment gateways, and integrate third-party apps to create a complete e-commerce solution.",
          "We also provide WooCommerce development services for businesses preferring WordPress-based solutions. Our WooCommerce development includes theme customization, plugin integration, payment gateway setup, and performance optimization.",
        ],
      },
      {
        title: "Custom E-Commerce Platform Development",
        paragraphs: [
          "For businesses with unique requirements, we build custom e-commerce platforms tailored to your specific needs. Our custom solutions include advanced features like multi-vendor marketplaces, subscription management, complex pricing rules, and enterprise-level inventory systems.",
          "We integrate payment gateways (Razorpay, Stripe, PayPal), shipping providers, inventory management systems, and analytics tools to give you a complete, scalable e-commerce operation that grows with your business.",
        ],
      },
    ],
    keyFeatures: [
      "Platform setup and customization (Shopify, WooCommerce, custom)",
      "Payment gateway integration",
      "Inventory and order management",
      "Multi-currency and tax support",
      "Mobile-responsive shopping experience",
      "SEO optimization for product pages",
    ],
    benefits: [
      "Faster time-to-market with proven platforms",
      "Scalable infrastructure for growth",
      "Secure payment processing",
      "Comprehensive analytics and reporting",
    ],
    visualBlocks: [
      { icon: "ShoppingCart", title: "Online Stores", description: "Complete e-commerce platforms.", layout: "2-col" },
      { icon: "CreditCard", title: "Payments", description: "Secure checkout and transactions.", layout: "2-col" },
    ],
    process: {
      title: "E-Commerce Setup in 5 Steps",
      steps: [
        "Requirements & Platform Selection — Choose the right platform for your needs.",
        "Design & Branding — Customize store appearance and user experience.",
        "Product Setup — Catalog, pricing, and inventory configuration.",
        "Integration & Testing — Payment, shipping, and third-party integrations.",
        "Launch & Training — Go live and train your team on management.",
      ],
    },
    cta: {
      primary: { label: "Start Your Store", to: "/contact" },
      secondary: { label: "View Examples", to: "/projects" },
    },
    relatedServices: ["website-mobile-app-development", "ui-ux-responsive-design", "digital-marketing-seo"],
  },
  {
    slug: "digital-marketing-seo",
    name: "Digital Marketing & SEO Services",
    // Map to Index page service: Similar to IT Consulting - use ItConsultation Lottie
    lottieKey: "ItConsultation",
    cardImage: servicesImages.team,
    seo: {
      metaTitle: "SEO Services Company India | Digital Marketing & Social Media",
      metaDescription: "Expert SEO and digital marketing services in India. Search engine optimization, social media marketing, content strategy. Grow your online presence.",
      focusKeywords: [
        "seo services company india",
        "digital marketing services bhilai",
        "social media marketing services",
        "seo company chhattisgarh",
        "content marketing services india"
      ],
    },
    breadcrumb: "Digital Marketing & SEO Services",
    hero: {
      headline: "SEO Services Company India: Digital Marketing That Drives Results",
      subheadline: "Expert SEO services and digital marketing in India. Search engine optimization, social media marketing, content strategy, and paid advertising to grow your online presence and drive qualified leads.",
      image: IMAGES.digitalMarketing,
      imageAlt: "Digital marketing dashboard with analytics and campaign metrics",
    },
    description: {
      overview: "Looking for a reliable SEO services company in India? Genius36 Technologies delivers expert search engine optimization and digital marketing services that increase visibility, traffic, and conversions. With over 10 years of experience, we specialize in SEO services, social media marketing, content marketing, and paid advertising. Our data-driven approach ensures measurable results and ROI. Whether you need SEO services in Bhilai, Chhattisgarh, or across India, we help businesses grow their online presence and attract qualified customers through proven digital marketing strategies.",
      targetAudience: "Businesses looking to increase online visibility, attract more customers, and grow revenue through digital channels. Companies needing SEO services, social media marketing, or comprehensive digital marketing solutions.",
      useCases: [
        "Search engine optimization (SEO) to improve Google rankings",
        "Social media marketing campaigns on Facebook, Instagram, LinkedIn",
        "Content marketing and blogging to build authority",
        "Pay-per-click (PPC) advertising with Google Ads",
        "Email marketing automation and lead nurturing"
      ],
    },
    detailsSections: [
      {
        title: "SEO Services Company India",
        paragraphs: [
          "Our SEO services company in India helps businesses improve their search engine rankings and attract organic traffic. We conduct comprehensive SEO audits, keyword research, on-page optimization, technical SEO, link building, and content optimization to improve your Google rankings.",
          "We provide local SEO services for businesses in Bhilai, Chhattisgarh, and across India, helping you rank for location-based searches and attract customers in your service area. Our SEO services include regular reporting, performance tracking, and continuous optimization to ensure long-term results.",
        ],
      },
      {
        title: "Digital Marketing Services",
        paragraphs: [
          "Our digital marketing services include social media marketing, content marketing, email marketing, and paid advertising. We develop and execute marketing strategies across multiple channels to engage audiences, build brand authority, and drive qualified leads.",
          "Our approach is data-driven—we track performance, analyze results, and optimize campaigns continuously to maximize ROI and achieve your business goals. We provide regular reports and insights to help you understand what's working and where to invest more.",
        ],
      },
    ],
    keyFeatures: [
      "SEO optimization and keyword research",
      "Social media strategy and management",
      "Content creation and marketing",
      "Google Ads and PPC campaigns",
      "Email marketing automation",
      "Analytics and performance reporting",
    ],
    benefits: [
      "Increased organic traffic and rankings",
      "Higher conversion rates and ROI",
      "Stronger brand presence online",
      "Measurable, data-driven results",
    ],
    visualBlocks: [
      { icon: "Search", title: "SEO", description: "Search engine optimization.", layout: "2-col" },
      { icon: "BarChart3", title: "Analytics", description: "Performance tracking and insights.", layout: "2-col" },
    ],
    process: {
      title: "Marketing Strategy in 5 Steps",
      steps: [
        "Audit & Research — Analyze current performance and identify opportunities.",
        "Strategy Development — Create comprehensive marketing plan and goals.",
        "Implementation — Execute campaigns across chosen channels.",
        "Monitoring & Optimization — Track performance and refine strategies.",
        "Reporting & Growth — Regular reports and continuous improvement.",
      ],
    },
    cta: {
      primary: { label: "Get Marketing Consultation", to: "/contact" },
      secondary: { label: "View Case Studies", to: "/projects" },
    },
    relatedServices: ["website-mobile-app-development", "ui-ux-responsive-design", "ecommerce-solutions-platforms"],
  },
  {
    slug: "cloud-cybersecurity-it-consultancy",
    name: "Cloud, Cybersecurity & IT Consultancy",
    // Map to Index page service: "Cloud Solutions & Server Setup" - uses Cloud Lottie, "Networking & IT Infrastructure" - uses Networking Lottie
    lottieKey: "Cloud",
    cardImage: servicesImages.networking,
    seo: {
      metaTitle: "Cloud Migration & Cybersecurity Services India | IT Consulting",
      metaDescription: "Expert cloud migration, cybersecurity, and IT consulting services in India. AWS, Azure, security audits, infrastructure setup. Secure your IT environment.",
      focusKeywords: [
        "cloud migration services india",
        "cybersecurity services company",
        "it consulting services bhilai",
        "aws cloud services india",
        "network security services"
      ],
    },
    breadcrumb: "Cloud, Cybersecurity & IT Consultancy",
    hero: {
      headline: "Cloud Migration & Cybersecurity Services India: Secure IT Infrastructure",
      subheadline: "Expert cloud migration services, cybersecurity, and IT consulting in India. AWS and Azure cloud services, security audits, and infrastructure setup to secure and modernize your IT environment.",
      image: IMAGES.cloudCyber,
      imageAlt: "Cloud migration services India - cybersecurity and IT infrastructure with AWS Azure cloud solutions",
    },
    description: {
      overview: "Looking for reliable cloud migration services in India? Genius36 Technologies delivers expert cloud solutions, cybersecurity services, and IT consulting to help businesses modernize and secure their technology infrastructure. With over 10 years of experience, we specialize in cloud migration to AWS and Azure, cybersecurity audits, network security, and IT infrastructure setup. Our cloud migration services ensure smooth transitions to the cloud with minimal downtime, while our cybersecurity services protect your business from threats and ensure compliance.",
      targetAudience: "Businesses needing cloud migration, IT infrastructure improvements, security enhancements, or strategic IT guidance. Companies looking for AWS cloud services, cybersecurity services, or IT consulting in Bhilai and across India.",
      useCases: [
        "Cloud migration to AWS, Azure, or Google Cloud Platform",
        "IT infrastructure setup and management",
        "Cybersecurity audits and security implementation",
        "Network security services and monitoring",
        "Disaster recovery and backup solutions"
      ],
    },
    detailsSections: [
      {
        title: "Cloud Migration Services India",
        paragraphs: [
          "Our cloud migration services in India help businesses transition to AWS, Azure, or Google Cloud Platform with minimal disruption. We assess your current infrastructure, plan the migration strategy, execute the migration, and provide ongoing support to ensure optimal performance.",
          "We work with leading cloud providers to build robust, scalable, and secure IT environments that support business growth. Our AWS cloud services and Azure implementations include proper architecture design, security configuration, and cost optimization.",
        ],
      },
      {
        title: "Cybersecurity Services Company",
        paragraphs: [
          "As a cybersecurity services company, we help businesses protect their digital assets from threats. Our services include security audits, vulnerability assessments, penetration testing, security implementation, and ongoing monitoring.",
          "We implement network security services, firewall configuration, intrusion detection systems, and security policies to ensure your IT infrastructure is protected. We also provide IT consulting services in Bhilai and across India to help businesses make informed technology decisions.",
        ],
      },
    ],
    keyFeatures: [
      "Cloud migration and architecture",
      "Cybersecurity audits and implementation",
      "Network infrastructure setup",
      "Server management and monitoring",
      "Backup and disaster recovery",
      "24/7 IT support and maintenance",
    ],
    benefits: [
      "Improved security and compliance",
      "Scalable, cost-effective infrastructure",
      "Reduced downtime and risks",
      "Expert guidance and support",
    ],
    visualBlocks: [
      { icon: "Cloud", title: "Cloud Solutions", description: "Migration and architecture.", layout: "2-col" },
      { icon: "Shield", title: "Cybersecurity", description: "Security audits and protection.", layout: "2-col" },
    ],
    process: {
      title: "IT Solution Implementation in 5 Steps",
      steps: [
        "Assessment & Planning — Evaluate current infrastructure and define requirements.",
        "Architecture Design — Design secure, scalable solution architecture.",
        "Implementation — Deploy and configure systems and security measures.",
        "Testing & Validation — Test security, performance, and reliability.",
        "Support & Maintenance — Ongoing monitoring, updates, and support.",
      ],
    },
    cta: {
      primary: { label: "Get IT Consultation", to: "/contact" },
      secondary: { label: "Learn More", to: "/services" },
    },
    relatedServices: ["website-mobile-app-development", "ecommerce-solutions-platforms", "ai-ml-training-workshops"],
  },
  {
    slug: "ai-ml-training-workshops",
    name: "AI/ML Training & Technology Workshops",
    // Map to Index page service: "IT Training & Programming Courses" - uses ItTraining Lottie
    lottieKey: "ItTraining",
    cardImage: servicesImages.team,
    seo: {
      metaTitle: "AI/ML Training Courses India | Machine Learning & Data Science",
      metaDescription: "Comprehensive AI and machine learning training programs in India. Hands-on workshops, certification, real-world projects. Advance your career in AI/ML.",
      focusKeywords: [
        "ai ml training courses india",
        "machine learning training bhilai",
        "artificial intelligence courses",
        "data science training india",
        "ai training workshops chhattisgarh"
      ],
    },
    breadcrumb: "AI/ML Training & Technology Workshops",
    hero: {
      headline: "AI/ML Training Courses India: Master Machine Learning & Data Science",
      subheadline: "Comprehensive AI and machine learning training programs in India. Hands-on workshops, certification programs, and real-world projects to advance your career in artificial intelligence and data science.",
      image: IMAGES.aiMl,
      imageAlt: "AI ML training courses India - machine learning and data science training workshop",
    },
    description: {
      overview: "Looking for professional AI/ML training courses in India? Genius36 Technologies delivers comprehensive artificial intelligence and machine learning training programs that combine theory with hands-on practice. With over 10 years of experience, we offer AI ML training courses, machine learning training in Bhilai, data science training, and technology workshops. Our training programs include real-world projects, industry insights, and certification opportunities to help you advance your career in AI, ML, and data science.",
      targetAudience: "Professionals, students, and organizations looking to upskill in AI, ML, and modern technologies. Individuals seeking AI/ML training courses, machine learning training, or data science training in India.",
      useCases: [
        "AI and ML fundamentals training for beginners",
        "Deep learning workshops and advanced ML techniques",
        "Data science training and bootcamps",
        "Technology certification programs",
        "Corporate training and workshops for teams"
      ],
    },
    detailsSections: [
      {
        title: "AI ML Training Courses India",
        paragraphs: [
          "Our AI ML training courses in India cover AI fundamentals, machine learning algorithms, deep learning, natural language processing (NLP), computer vision, and practical applications. We combine classroom learning with hands-on projects and real-world case studies to ensure you gain practical skills.",
          "We provide industry-aligned curriculum, expert instructors with real-world experience, certification opportunities, and placement support to help you succeed in your career. Our machine learning training programs are designed for both beginners and advanced learners.",
        ],
      },
      {
        title: "Data Science Training and Workshops",
        paragraphs: [
          "Our data science training programs cover data analysis, statistical modeling, machine learning, data visualization, and big data technologies. We offer both comprehensive bootcamps and focused workshops on specific topics.",
          "We also provide AI training workshops in Chhattisgarh and across India, making it convenient for professionals to upskill. Our training includes real-world projects, industry case studies, and mentorship to help you build a strong portfolio.",
        ],
      },
    ],
    keyFeatures: [
      "Hands-on AI and ML training",
      "Industry expert instructors",
      "Real-world projects and case studies",
      "Certification programs",
      "Placement support and career guidance",
      "Flexible learning schedules",
    ],
    benefits: [
      "Career advancement opportunities",
      "Industry-relevant skills",
      "Practical, project-based learning",
      "Networking and mentorship",
    ],
    visualBlocks: [
      { icon: "Cpu", title: "AI & ML", description: "Comprehensive training programs.", layout: "2-col" },
      { icon: "Bot", title: "Workshops", description: "Hands-on learning experiences.", layout: "2-col" },
    ],
    process: {
      title: "Training Program in 5 Steps",
      steps: [
        "Enrollment & Assessment — Understand your goals and current skill level.",
        "Curriculum & Planning — Personalized learning path and schedule.",
        "Learning & Practice — Classes, workshops, and hands-on projects.",
        "Projects & Certification — Build portfolio and earn certifications.",
        "Career Support — Placement assistance and ongoing mentorship.",
      ],
    },
    cta: {
      primary: { label: "Enroll Now", to: "/contact" },
      secondary: { label: "View Courses", to: "/training" },
    },
    relatedServices: ["cloud-cybersecurity-it-consultancy", "website-mobile-app-development", "ecommerce-solutions-platforms"],
  },
  {
    slug: "labs-setup-3d-printing",
    name: "Labs Setup & 3D Printing Services",
    // Map to Index page service: "Computer Hardware Sales & Repair" - uses ComputerHardware Lottie
    lottieKey: "ComputerHardware",
    cardImage: servicesImages.general,
    seo: {
      metaTitle: "Computer Lab Setup & 3D Printing Services | Lab Solutions",
      metaDescription: "Professional lab setup and 3D printing services. Computer labs, maker spaces, 3D printing facilities. Complete solutions for educational institutions.",
      focusKeywords: [
        "computer lab setup services",
        "3d printing services bhilai",
        "maker space setup india",
        "lab infrastructure setup",
        "3d printing solutions chhattisgarh"
      ],
    },
    breadcrumb: "Labs Setup & 3D Printing Services",
    hero: {
      headline: "Computer Lab Setup & 3D Printing Services: Complete Lab Solutions",
      subheadline: "Professional computer lab setup services and 3D printing solutions in India. Complete lab infrastructure setup including maker spaces, 3D printing facilities, and technology infrastructure for educational institutions and businesses.",
      image: IMAGES.labs3d,
      imageAlt: "Computer lab setup services - 3D printing services and maker space with technology infrastructure",
    },
    description: {
      overview: "We provide complete lab setup services including computer labs, maker spaces, and 3D printing facilities. From planning and hardware procurement to installation and training, we handle everything to get your lab operational.",
      targetAudience: "Educational institutions, research facilities, and businesses needing computer labs, maker spaces, or 3D printing capabilities.",
      useCases: ["Computer lab setup for schools and colleges", "Maker space and innovation labs", "3D printing facility setup", "Hardware procurement and installation", "Lab maintenance and support"],
    },
    detailsSections: [
      {
        title: "Computer Lab Setup Services",
        paragraphs: [
          "Our computer lab setup services include complete design, hardware procurement, installation, network configuration, software installation, and staff training. We work with leading manufacturers to provide quality equipment and ensure proper installation.",
          "We design labs that support modern educational needs, including high-performance workstations, networking infrastructure, and software licenses. Our lab infrastructure setup ensures your lab is ready for use from day one, with proper documentation and training provided.",
        ],
      },
      {
        title: "3D Printing Services and Maker Spaces",
        paragraphs: [
          "Our 3D printing services in Bhilai and across India help educational institutions and businesses set up 3D printing facilities. We provide 3D printer selection, installation, calibration, and training to ensure optimal performance.",
          "We also set up maker spaces and innovation labs that combine 3D printing with other tools like CNC machines, laser cutters, and electronics workbenches. Our 3D printing solutions in Chhattisgarh support both educational and commercial applications, helping you bring ideas to life.",
        ],
      },
    ],
    keyFeatures: [
      "Lab design and planning",
      "Hardware procurement and installation",
      "3D printer setup and calibration",
      "Network and software configuration",
      "Staff training and documentation",
      "Ongoing maintenance and support",
    ],
    benefits: [
      "Turnkey lab solutions",
      "Quality equipment and installation",
      "Reduced setup time and hassle",
      "Expert support and training",
    ],
    visualBlocks: [
      { icon: "Monitor", title: "Lab Setup", description: "Complete lab infrastructure.", layout: "2-col" },
      { icon: "Box", title: "3D Printing", description: "3D printing solutions.", layout: "2-col" },
    ],
    process: {
      title: "Lab Setup in 5 Steps",
      steps: [
        "Planning & Design — Assess requirements and design lab layout.",
        "Procurement — Source and order equipment and materials.",
        "Installation — Set up hardware, network, and software.",
        "Testing & Calibration — Test all systems and calibrate equipment.",
        "Training & Handover — Train staff and provide documentation.",
      ],
    },
    cta: {
      primary: { label: "Get Lab Consultation", to: "/contact" },
      secondary: { label: "View Services", to: "/services" },
    },
    relatedServices: ["cloud-cybersecurity-it-consultancy", "website-mobile-app-development", "ai-ml-training-workshops"],
  },
];

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
