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
    slug: "custom-website-design-development",
    name: "Custom Website Design & Development",
    // Map to Index page service: "Custom Website Design & Development" - uses WebDevelopment Lottie
    lottieKey: "WebDevelopment",
    cardImage: servicesImages.development, // Assuming this exists, otherwise use a generic
    seo: {
      metaTitle: "Custom Website Development Company in India | Responsive Web Design",
      metaDescription: "Expert custom website development services in India. Responsive websites, React apps, and modern web solutions. 10+ years experience. Get free quote.",
      focusKeywords: [
        "custom website development company in india",
        "responsive website development services",
        "web application development company",
        "custom web design services",
        "professional website development"
      ],
    },
    breadcrumb: "Custom Website Design & Development",
    hero: {
      headline: "Custom Website Development Company in India: Responsive & Modern Design",
      subheadline: "Professional web development services with 10+ years experience. We build responsive, SEO-friendly websites and web applications tailored to your business growth.",
      image: IMAGES.webMobile, // Reusing existing image key
      imageAlt: "Custom website development company in India - developer coding responsive websites",
    },
    description: {
      overview: "Looking for a reliable custom website development company in India? We deliver professional web development services that drive business growth. With over 10 years of experience, we specialize in building responsive websites, custom web applications, and modern SPAs using technologies like React, Next.js, and Node.js. Our responsive website development services ensure your site looks perfect on desktops, tablets, and smartphones.",
      targetAudience: "Startups, SMEs, and enterprises needing a strong web presence. Businesses looking for custom website development or web applications.",
      useCases: [
        "Business websites and corporate portfolios",
        "Custom web applications and SaaS platforms",
        "E-commerce backend development",
        "Progressive web apps (PWAs)",
        "API development and integration"
      ],
    },
    detailsSections: [
      {
        title: "Custom Web Development",
        paragraphs: [
          "We go beyond templates. Our team builds custom websites tailored to your specific brand identity and business requirements. Whether you need a simple landing page or a complex web application, we use clean code and modern frameworks to ensure performance and scalability.",
          "Our stack includes React.js, Next.js, Vue.js for frontend, and Node.js, Python, or PHP for backend development."
        ],
      },
      {
        title: "Responsive Design & Performance",
        paragraphs: [
          "With mobile traffic dominating the internet, we adopt a mobile-first approach. Every website we build is fully responsive, ensuring fast load times, intuitive navigation, and a seamless user experience across all devices.",
          "We also optimize for Core Web Vitals to ensure your site ranks well on search engines and retains visitors."
        ],
      },
    ],
    keyFeatures: [
      "Responsive, mobile-first design",
      "Modern tech stack (React, Node, Next.js)",
      "SEO-friendly architecture",
      "Cross-browser compatibility",
      "Fast loading speeds",
      "Secure and scalable code"
    ],
    benefits: [
      "Unique brand identity",
      "Better user engagement",
      "Higher search engine rankings",
      "Scalable for future growth"
    ],
    visualBlocks: [
      { icon: "Globe", title: "Web Development", description: "Custom sites and web apps.", layout: "2-col" },
      { icon: "Smartphone", title: "Responsive", description: "Mobile-friendly designs.", layout: "2-col" },
    ],
    process: {
      title: "Web Development Process",
      steps: [
        "Discovery — We align on goals, features, and tech stack.",
        "Design — UI/UX mockups and responsive prototyping.",
        "Development — Clean coding with modern frameworks.",
        "Testing — QA for functionality, speed, and security.",
        "Launch — Deployment and post-launch support.",
      ],
    },
    cta: {
      primary: { label: "Start Project", to: "/contact" },
      secondary: { label: "View Portfolio", to: "/projects" },
    },
    relatedServices: ["software-development", "ui-ux-responsive-design", "digital-marketing-seo"],
  },
  {
    slug: "software-development",
    name: "Software Development",
    // Map to Index page service: "Software Development" - uses SoftwareDevelopment Lottie
    lottieKey: "SoftwareDevelopment",
    cardImage: servicesImages.workspace, // Assuming generic workspace image
    seo: {
      metaTitle: "Custom Software Development Company India | Enterprise Solutions",
      metaDescription: "Expert custom software development services in India. Enterprise-grade software, SaaS platforms, and scalable business solutions. Get a free consultation.",
      focusKeywords: [
        "custom software development company india",
        "enterprise software development services",
        "saas development company",
        "business software solutions",
        "scalable software architecture"
      ],
    },
    breadcrumb: "Software Development",
    hero: {
      headline: "Custom Software Development Company: Scalable Enterprise Solutions",
      subheadline: "We build high-performance, scalable software solutions tailored to your business processes. From SaaS platforms to internal tools, we handle the full development lifecycle.",
      image: IMAGES.software, // New key placeholder
      imageAlt: "Custom software development company - code on screen showing software architecture",
    },
    description: {
      overview: "Transform your business operations with custom software development. We specialize in creating robust, secure, and scalable software solutions that automate processes and improve efficiency. Whether you need a CRM, ERP, or a completely new SaaS product, our team has the expertise to deliver.",
      targetAudience: "Enterprises, SMEs, and startups looking to automate workflows or launch digital products.",
      useCases: [
        "Customer Relationship Management (CRM) systems",
        "Enterprise Resource Planning (ERP) software",
        "SaaS product development",
        "Inventory and supply chain management",
        "Internal business tools and dashboards"
      ],
    },
    detailsSections: [
      {
        title: "Enterprise-Grade Solutions",
        paragraphs: [
          "We develop software that grows with you. Our architecture is designed for scalability, security, and performance. We integrate with existing systems (APIs) to ensure seamless data flow across your organization.",
          "Our development process emphasizes clean code, comprehensive documentation, and rigorous testing to ensure reliability."
        ],
      },
      {
        title: "Modern Tech Stack",
        paragraphs: [
          "We utilize the latest technologies to build future-proof software. This includes cloud-native development, microservices architecture, and containerization using Docker and Kubernetes.",
          "We work with stacks like .NET, Java, Python, Node.js, and modern frontend frameworks to build cross-platform desktop and web applications."
        ],
      },
    ],
    keyFeatures: [
      "Custom-tailored solutions",
      "Scalable microservices architecture",
      "API integration capabilities",
      "Cloud-ready deployment",
      "Robust security protocols",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Increased operational efficiency",
      "Data-driven decision making",
      "Automated workflows",
      "Competitive advantage"
    ],
    visualBlocks: [
      { icon: "Code", title: "Custom Code", description: "Tailored software solutions.", layout: "2-col" },
      { icon: "Server", title: "SaaS", description: "Cloud-ready platforms.", layout: "2-col" },
    ],
    process: {
      title: "Software Development Lifecycle",
      steps: [
        "Requirement Analysis — Deep dive into business needs.",
        "System Design — Architecture and database planning.",
        "Agile Development — Sprints and regular updates.",
        "Quality Assurance — Testing and bug fixing.",
        "Deployment & Maintenance — Release and ongoing support.",
      ],
    },
    cta: {
      primary: { label: "Discuss Your Project", to: "/contact" },
      secondary: { label: "Our Process", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "it-consulting-digital-transformation", "custom-website-design-development"],
  },
  {
    slug: "it-consulting-digital-transformation",
    name: "IT Consulting & Digital Transformation",
    // Map to Index page service: "IT Consulting & Digital Transformation" - uses ItConsultation Lottie
    lottieKey: "ItConsultation",
    cardImage: servicesImages.team,
    seo: {
      metaTitle: "IT Consulting Services India | Digital Transformation Company",
      metaDescription: "Expert IT consulting and digital transformation services. Technology audit, strategy planning, and digital roadmaps to modernize your business.",
      focusKeywords: [
        "it consulting services india",
        "digital transformation company",
        "technology consulting services",
        "business process automation",
        "it strategy consulting"
      ],
    },
    breadcrumb: "IT Consulting & Digital Transformation",
    hero: {
      headline: "IT Consulting & Digital Transformation Services: Modernize Your Business",
      subheadline: "Strategic IT consulting to help you navigate the digital landscape. We audit your infrastructure and create roadmaps for digital innovation and efficiency.",
      image: IMAGES.digitalMarketing, // Reusing or generic consulting image
      imageAlt: "IT consulting services - strategic planning for digital transformation",
    },
    description: {
      overview: "Navigate the complex world of technology with expert IT consulting. We help businesses identify the right tools and strategies to reduce costs, improve productivity, and drive growth. From digital roadmaps to technology audits, we set the foundation for your success.",
      targetAudience: "Businesses undergoing digital transformation, needing IT audits, or looking to optimize technology spend.",
      useCases: [
        "Digital strategy and roadmap creation",
        "Technology stack audit and optimization",
        "Cloud migration consulting",
        "Process automation strategies",
        "Cybersecurity readiness assessment"
      ],
    },
    detailsSections: [
      {
        title: "Strategic Planning",
        paragraphs: [
          "We align technology with your business goals. Our consultants analyze your current infrastructure and recommend solutions that provide the highest ROI. We help you choose between SaaS vs. custom build, on-premise vs. cloud, and more.",
        ],
      },
      {
        title: "Digital Transformation",
        paragraphs: [
          "Transformation is about people and processes, not just tools. We guide you through change management, helping your team adopt new technologies and workflows that drive efficiency and innovation.",
        ],
      },
    ],
    keyFeatures: [
      "Comprehensive IT audits",
      "Strategic roadmaps",
      "Cost optimization",
      "Vendor selection assistance",
      "Change management",
      "Risk assessment"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved agility",
      "Better decision making",
      "Future-proof infrastructure"
    ],
    visualBlocks: [
      { icon: "Lightbulb", title: "Strategy", description: "Data-driven IT planning.", layout: "2-col" },
      { icon: "TrendingUp", title: "Growth", description: "Digital transformation.", layout: "2-col" },
    ],
    process: {
      title: "Consulting Process",
      steps: [
        "Assessment — Audit current infrastructure and processes.",
        "Strategy — Develop a customized IT roadmap.",
        "Planning — Select vendors and define milestones.",
        "Implementation — Assist in execution and deployment.",
        "Review — Monitor results and optimize strategy.",
      ],
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "Our Services", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "networking-it-infrastructure", "software-development"],
  },
  {
    slug: "cctv-camera-installation-security",
    name: "CCTV Camera Installation & Security",
    // Map to Index page service: "CCTV Camera Installation & Security" - uses Cctv Lottie
    lottieKey: "Cctv",
    cardImage: servicesImages.general,
    seo: {
      metaTitle: "CCTV Camera Installation Services India | Security Systems",
      metaDescription: "Professional CCTV camera installation and security services. HD surveillance, remote monitoring, and security system setup for homes and offices.",
      focusKeywords: [
        "cctv camera installation services",
        "security camera installation bhilai",
        "video surveillance systems",
        "home security installation",
        "cctv maintenance services"
      ],
    },
    breadcrumb: "CCTV Camera Installation & Security",
    hero: {
      headline: "CCTV Camera Installation & Security Systems: 24/7 Surveillance",
      subheadline: "Protect your property with professional security camera installation. HD video quality, night vision, and remote monitoring solutions for complete peace of mind.",
      image: IMAGES.cctv, // New key placeholder
      imageAlt: "CCTV camera installation services - security surveillance monitor setup",
    },
    description: {
      overview: "Ensure the safety of your home or business with our professional CCTV installation services. We provide high-definition security cameras, DVR/NVR systems, and smart surveillance solutions that allow you to monitor your property from anywhere in the world via your smartphone.",
      targetAudience: "Homeowners, retail stores, offices, warehouses, and educational institutions.",
      useCases: [
        "Home security and monitoring",
        "Office and workplace surveillance",
        "Retail theft prevention",
        "Warehouse and perimeter security",
        "Traffic and parking monitoring"
      ],
    },
    detailsSections: [
      {
        title: "Advanced Surveillance Technology",
        paragraphs: [
          "We install the latest IP and analog cameras with features like 4K resolution, night vision, motion detection, and two-way audio. Our systems are designed for both indoor and outdoor use, withstand weather conditions, and provide crystal-clear footage.",
        ],
      },
      {
        title: "Remote Monitoring & Integration",
        paragraphs: [
          "Access your feed anytime, anywhere. Our systems connect to your mobile device, sending instant alerts for suspicious activity. We can also integrate CCTV with access control systems and alarm systems for a comprehensive security solution.",
        ],
      },
    ],
    keyFeatures: [
      "HD/4K Video Quality",
      "Night Vision & Motion Detection",
      "Remote Mobile Access",
      "Cloud & Local Storage",
      "Professional Installation",
      "Maintenance & AMC Support"
    ],
    benefits: [
      "Crime deterrent",
      "Evidence collection",
      "Remote monitoring peace of mind",
      "Lower insurance premiums"
    ],
    visualBlocks: [
      { icon: "Video", title: "Surveillance", description: "24/7 monitoring systems.", layout: "2-col" },
      { icon: "Shield", title: "Security", description: "Advanced protection.", layout: "2-col" },
    ],
    process: {
      title: "Installation Process",
      steps: [
        "Site Survey — Assess coverage areas and blind spots.",
        "System Design — Select cameras and storage capacity.",
        "Installation — Professional wiring and mounting.",
        "Configuration — Network setup and remote access.",
        "Training — Handover and operation guidance.",
      ],
    },
    cta: {
      primary: { label: "Get Secure", to: "/contact" },
      secondary: { label: "View Products", to: "/services" },
    },
    relatedServices: ["networking-it-infrastructure", "computer-hardware-sales-repair", "it-consulting-digital-transformation"],
  },
  {
    slug: "computer-hardware-sales-repair",
    name: "Computer Hardware Sales & Repair",
    // Map to Index page service: "Computer Hardware Sales & Repair" - uses ComputerHardware Lottie
    lottieKey: "ComputerHardware",
    cardImage: servicesImages.general,
    seo: {
      metaTitle: "Computer Hardware Sales & Repair Services India | AMC Support",
      metaDescription: "Quality computer hardware sales and expert repair services. Laptops, PCs, components, and annual maintenance contracts (AMC) for businesses.",
      focusKeywords: [
        "computer hardware sales",
        "laptop repair services bhilai",
        "computer repair shop",
        "annual maintenance contract for computers",
        "genuine computer parts"
      ],
    },
    breadcrumb: "Computer Hardware Sales & Repair",
    hero: {
      headline: "Computer Hardware Sales & Repair: Quality Products & Expert Service",
      subheadline: "Your one-stop shop for computer hardware sales, upgrades, and repair services. We offer genuine parts, quick turnaround times, and AMC support for homes and offices.",
      image: IMAGES.labs3d, // Reusing generic hardware image if available
      imageAlt: "Computer hardware sales and repair - technician fixing motherboard",
    },
    description: {
      overview: "We provide comprehensive hardware solutions, from selling branded laptops and desktops to expert repair services. Whether you need to upgrade your RAM, replace a hard drive, or fix a broken screen, our certified technicians are ready to help. We also offer Annual Maintenance Contracts (AMC) to keep your systems running smoothly.",
      targetAudience: "Individuals, students, offices, and schools requiring hardware support.",
      useCases: [
        "Laptop and desktop repair",
        "Hardware upgrades (SSD, RAM)",
        "New computer sales and assembly",
        "Printer and peripheral setup",
        "Virus removal and OS installation"
      ],
    },
    detailsSections: [
      {
        title: "Sales & Upgrades",
        paragraphs: [
          "We stock a wide range of hardware including laptops, workstations, monitors, printers, and accessories. We also provide custom PC assembly for gaming or high-performance work needs.",
        ],
      },
      {
        title: "Repair & Maintenance",
        paragraphs: [
          "Our repair services cover hardware failures, software issues, data backup, and OS reinstallation. With our AMC services, businesses get regular checkups and priority support to minimize downtime.",
        ],
      },
    ],
    keyFeatures: [
      "Genuine Hardware Parts",
      "Certified Technicians",
      "Quick Turnaround Time",
      "On-site Support Available",
      "Annual Maintenance Contracts",
      "Data Backup Solutions"
    ],
    benefits: [
      "Extended device lifespan",
      "Cost-effective repairs",
      "Minimal downtime",
      "Expert advice on purchases"
    ],
    visualBlocks: [
      { icon: "HardDrive", title: "Hardware", description: "Sales and assembly.", layout: "2-col" },
      { icon: "Wrench", title: "Repair", description: "Expert fixing services.", layout: "2-col" },
    ],
    process: {
      title: "Service Process",
      steps: [
        "Diagnosis — Identify hardware or software issue.",
        "Quote — Estimate cost for parts and labor.",
        "Repair/Replace — Execute fix with genuine parts.",
        "Testing — Stress test the system.",
        "Delivery — Return device or complete on-site fix.",
      ],
    },
    cta: {
      primary: { label: "Get Support", to: "/contact" },
      secondary: { label: "Shop Hardware", to: "/services" },
    },
    relatedServices: ["networking-it-infrastructure", "cctv-camera-installation-security", "software-development"],
  },
  {
    slug: "networking-it-infrastructure",
    name: "Networking & IT Infrastructure",
    // Map to Index page service: "Networking & IT Infrastructure" - uses Networking Lottie
    lottieKey: "Networking",
    cardImage: servicesImages.networking,
    seo: {
      metaTitle: "Networking Solutions Company India | IT Infrastructure Setup",
      metaDescription: "Complete networking solutions and IT infrastructure setup. LAN/WAN, WiFi, structured cabling, server configuration, and network security.",
      focusKeywords: [
        "networking solutions company",
        "structured cabling services",
        "lan wan setup services",
        "it infrastructure setup india",
        "network security services"
      ],
    },
    breadcrumb: "Networking & IT Infrastructure",
    hero: {
      headline: "Networking & IT Infrastructure: Reliable Connectivity Solutions",
      subheadline: "Build a robust IT foundation with our networking services. Structured cabling, server configuration, WiFi setup, and network security for seamless business operations.",
      image: IMAGES.networking, // Reusing existing
      imageAlt: "Networking and IT infrastructure setup - server room and cabling",
    },
    description: {
      overview: "A strong network is the backbone of modern business. We provide end-to-end networking solutions including structured cabling, router/switch configuration, and wireless LAN setup. Whether you are setting up a new office or upgrading an existing infrastructure, we ensure high speed, security, and reliability.",
      targetAudience: "New offices, co-working spaces, enterprises, and educational campuses.",
      useCases: [
        "Office LAN/WAN setup",
        "Structured cabling (Cat6/Fiber)",
        "WiFi hotspot solutions",
        "Server room design and setup",
        "Network firewall and security"
      ],
    },
    detailsSections: [
      {
        title: "Structured Cabling & Connectivity",
        paragraphs: [
          "We design and install structured cabling systems that support high-speed data transfer. Our technicians ensure neat cable management, proper labeling, and testing for optimal performance.",
        ],
      },
      {
        title: "Network Security & Management",
        paragraphs: [
          "Protect your data with secure network architecture. We implement firewalls, VPNs, and access controls to prevent unauthorized access. We also offer network monitoring services to detect and resolve issues before they impact your business.",
        ],
      },
    ],
    keyFeatures: [
      "High-speed connectivity",
      "Secure architecture",
      "Scalable design",
      "Fiber optic cabling",
      "24/7 network monitoring",
      "VPN and remote access setup"
    ],
    benefits: [
      "Seamless collaboration",
      "Reduced latency and downtime",
      "Secure data transfer",
      "Easy scalability"
    ],
    visualBlocks: [
      { icon: "Network", title: "Networking", description: "LAN/WAN and cabling.", layout: "2-col" },
      { icon: "Server", title: "Infrastructure", description: "Server room setup.", layout: "2-col" },
    ],
    process: {
      title: "Infrastructure Setup",
      steps: [
        "Site Survey — Map out coverage and requirements.",
        "Design — Plan network topology and cabling routes.",
        "Installation — Run cables, mount racks, and configure devices.",
        "Configuration — Set up IPs, VPNs, and security.",
        "Documentation — Provide network maps and credentials.",
      ],
    },
    cta: {
      primary: { label: "Upgrade Network", to: "/contact" },
      secondary: { label: "Infrastructure Services", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "computer-hardware-sales-repair", "it-consulting-digital-transformation"],
  },
  {
    slug: "cloud-solutions-server-setup",
    name: "Cloud Solutions & Server Setup",
    // Map to Index page service: "Cloud Solutions & Server Setup" - uses Cloud Lottie
    lottieKey: "Cloud",
    cardImage: servicesImages.networking,
    seo: {
      metaTitle: "Cloud Solutions & Server Setup Services India | AWS Azure",
      metaDescription: "Expert cloud migration, server setup, and hosting solutions. AWS, Azure, VPS, and dedicated server configuration for high availability.",
      focusKeywords: [
        "cloud solutions services india",
        "server setup services",
        "aws cloud migration",
        "azure server configuration",
        "vps hosting services"
      ],
    },
    breadcrumb: "Cloud Solutions & Server Setup",
    hero: {
      headline: "Cloud Solutions & Server Setup: Scalable Infrastructure",
      subheadline: "Migrate to the cloud or set up robust on-premise servers. We handle AWS, Azure, VPS, and dedicated server configurations for maximum uptime and performance.",
      image: IMAGES.cloudCyber, // Reusing existing
      imageAlt: "Cloud solutions and server setup - AWS Azure cloud infrastructure",
    },
    description: {
      overview: "Modernize your IT infrastructure with our cloud and server solutions. We assist businesses in migrating to AWS, Azure, or Google Cloud, reducing capital expenditure on hardware. We also configure dedicated servers and VPS for businesses that require high control and security.",
      targetAudience: "Businesses looking to reduce IT costs, improve scalability, or enhance data backup strategies.",
      useCases: [
        "Cloud migration (AWS/Azure)",
        "VPS and dedicated server leasing",
        "Server configuration and hardening",
        "Backup and disaster recovery setup",
        "Hybrid cloud architecture"
      ],
    },
    detailsSections: [
      {
        title: "Cloud Migration",
        paragraphs: [
          "We make moving to the cloud seamless. Our team handles data migration, application re-hosting, and security configuration. We help you choose the right cloud service model (IaaS, PaaS, SaaS) based on your needs.",
        ],
      },
      {
        title: "Server Management",
        paragraphs: [
          "For workloads requiring on-premise or dedicated servers, we provide installation, patching, and monitoring. We ensure your servers are optimized for performance and protected against threats.",
        ],
      },
    ],
    keyFeatures: [
      "Scalable resources",
      "Automated backups",
      "High availability (99.9% uptime)",
      "Load balancing",
      "Global content delivery",
      "Cost optimization"
    ],
    benefits: [
      "Reduced hardware costs",
      "Business continuity",
      "Global accessibility",
      "Enhanced security"
    ],
    visualBlocks: [
      { icon: "Cloud", title: "Cloud", description: "AWS/Azure migration.", layout: "2-col" },
      { icon: "Database", title: "Servers", description: "VPS and dedicated setup.", layout: "2-col" },
    ],
    process: {
      title: "Server Setup Process",
      steps: [
        "Planning — Select cloud provider or server specs.",
        "Setup — Environment configuration and OS installation.",
        "Migration — Transfer data and applications.",
        "Security — Firewalls, SSL, and user access setup.",
        "Handover — Documentation and access controls.",
      ],
    },
    cta: {
      primary: { label: "Move to Cloud", to: "/contact" },
      secondary: { label: "Hosting Plans", to: "/services" },
    },
    relatedServices: ["it-consulting-digital-transformation", "software-development", "networking-it-infrastructure"],
  },
  {
    slug: "it-training-programming-courses",
    name: "IT Training & Programming Courses",
    // Map to Index page service: "IT Training & Programming Courses" - uses ItTraining Lottie
    lottieKey: "ItTraining",
    cardImage: servicesImages.team,
    seo: {
      metaTitle: "IT Training & Programming Courses India | Computer Classes",
      metaDescription: "Industry-aligned IT training and programming courses. Web development, Python, Java, and Tally training with practical projects and certification.",
      focusKeywords: [
        "it training courses india",
        "programming classes bhilai",
        "web development training",
        "python course chhattisgarh",
        "tally training institute"
      ],
    },
    breadcrumb: "IT Training & Programming Courses",
    hero: {
      headline: "IT Training & Programming Courses: Skill Up for the Future",
      subheadline: "Comprehensive IT training programs for students and professionals. Learn coding, web development, and software skills with hands-on projects and expert guidance.",
      image: IMAGES.aiMl, // Reusing existing training image
      imageAlt: "IT training and programming courses - students learning coding in lab",
    },
    description: {
      overview: "Bridge the gap between academic learning and industry demands with our IT training courses. We offer training in high-demand technologies like Full Stack Web Development, Python, Java, and Tally. Our curriculum focuses on practical skills, live projects, and placement assistance.",
      targetAudience: "Students, graduates, and professionals looking to upskill or switch careers to IT.",
      useCases: [
        "Full stack web development",
        "Python and Data Science basics",
        "Java and Android programming",
        "Tally and accounting software",
        "Internship and industrial training"
      ],
    },
    detailsSections: [
      {
        title: "Practical Learning Approach",
        paragraphs: [
          "We believe in learning by doing. Our courses include lab sessions, live projects, and coding assignments. Students work on real-world scenarios to build a portfolio that impresses employers.",
        ],
      },
      {
        title: "Career Support",
        paragraphs: [
          "Beyond training, we offer resume building, mock interviews, and job placement support. Our industry connections help students find internships and job opportunities in top IT companies.",
        ],
      },
    ],
    keyFeatures: [
      "Expert trainers",
      "Hands-on lab sessions",
      "Industry-standard curriculum",
      "Live projects",
      "Certification",
      "Placement assistance"
    ],
    benefits: [
      "Job-ready skills",
      "Industry-recognized certification",
      "Career guidance",
      "Practical experience"
    ],
    visualBlocks: [
      { icon: "GraduationCap", title: "Training", description: "Classroom and online.", layout: "2-col" },
      { icon: "Code", title: "Coding", description: "Programming languages.", layout: "2-col" },
    ],
    process: {
      title: "Training Journey",
      steps: [
        "Enrollment — Counsel and select course.",
        "Learning — Theory and practical labs.",
        "Projects — Build real-world apps.",
        "Assessment — Tests and certification.",
        "Placement — Resume help and interviews.",
      ],
    },
    cta: {
      primary: { label: "Join Course", to: "/contact" },
      secondary: { label: "View Syllabus", to: "/training" },
    },
    relatedServices: ["software-development", "custom-website-design-development", "cloud-solutions-server-setup"],
  },
  {
    slug: "data-recovery-services",
    name: "Data Recovery Services",
    // Map to Index page service: "Data Recovery Services" - uses DataRecovery Lottie
    lottieKey: "DataRecovery",
    cardImage: servicesImages.general,
    seo: {
      metaTitle: "Data Recovery Services India | Hard Drive & SSD Recovery",
      metaDescription: "Professional data recovery services. Recover lost data from hard drives, SSDs, RAID, and USB drives. Secure, confidential, and high success rate.",
      focusKeywords: [
        "data recovery services india",
        "hard drive recovery bhilai",
        "ssd data recovery",
        "raid data recovery services",
        "deleted file recovery"
      ],
    },
    breadcrumb: "Data Recovery Services",
    hero: {
      headline: "Data Recovery Services: Get Your Lost Data Back",
      subheadline: "Accidentally deleted files or a crashed drive? We provide professional data recovery for hard drives, SSDs, RAIDs, and flash drives with high success rates and confidentiality.",
      image: IMAGES.dataRecovery, // New key placeholder
      imageAlt: "Data recovery services - recovering data from hard drive in lab",
    },
    description: {
      overview: "Data loss can be catastrophic for business and personal files. Our data recovery experts use advanced tools and cleanroom environments to retrieve data from damaged, corrupted, or formatted storage devices. We recover data from HDDs, SSDs, RAID arrays, SD cards, and USB drives.",
      targetAudience: "Individuals and businesses who have experienced data loss due to hardware failure, accidental deletion, or virus attacks.",
      useCases: [
        "Hard drive (HDD) recovery",
        "Solid State Drive (SSD) recovery",
        "RAID server recovery",
        "SD card and USB flash recovery",
        "Deleted file restoration"
      ],
    },
    detailsSections: [
      {
        title: "Advanced Recovery Techniques",
        paragraphs: [
          "We handle both physical and logical damage. For physically damaged drives, we perform repairs in a controlled environment. For logical issues like formatting or corruption, we use specialized software to reconstruct file systems.",
        ],
      },
      {
        title: "Confidentiality & Security",
        paragraphs: [
          "We understand the sensitivity of your data. All recovery processes are conducted with strict confidentiality protocols. Your data is safe with us, and we ensure non-disclosure of any information recovered from your devices.",
        ],
      },
    ],
    keyFeatures: [
      "High success rate",
      "Secure and confidential",
      "All storage device types",
      "Free diagnosis",
      "No Data, No Fee policy",
      "Emergency recovery available"
    ],
    benefits: [
      "Peace of mind",
      "Recovery of critical business data",
      "Cost-effective vs recreating data",
      "Professional handling"
    ],
    visualBlocks: [
      { icon: "HardDriveDownload", title: "Recovery", description: "Retrieve lost files.", layout: "2-col" },
      { icon: "Lock", title: "Secure", description: "Confidential process.", layout: "2-col" },
    ],
    process: {
      title: "Recovery Process",
      steps: [
        "Evaluation — Free diagnosis of the device.",
        "Quote — Estimate price and success probability.",
        "Recovery — Clone and extract data.",
        "Verification — Verify file integrity with client.",
        "Return — Data returned on secure media.",
      ],
    },
    cta: {
      primary: { label: "Recover Data", to: "/contact" },
      secondary: { label: "Learn More", to: "/services" },
    },
    relatedServices: ["computer-hardware-sales-repair", "cloud-solutions-server-setup", "it-consulting-digital-transformation"],
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
