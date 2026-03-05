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
  webMobile: "/images/servicePage/webMobile.jpg",
  softwareDevelopment: "/images/servicePage/webMobile.jpg",
  uiUx: "/images/servicePage/uiUx.jpg",
  ecommerce: "/images/servicePage/ecommerce.jpg",
  digitalMarketing: "/images/servicePage/digitalMarketing.jpg",
  cloudCyber: "/images/servicePage/cloudCyber.jpg",
  aiMl: "/images/servicePage/aiMl.jpg",
  labs3d: "/images/servicePage/labs3d.jpg",
  datarecovery: "/images/servicePage/datarecovery.jpg"

};

export const servicePages = [
  {
    slug: "custom-website-design-development",
    name: "Custom Website Design & Development",
    // Map to Index page service: "Custom Website Design & Development" - uses WebDevelopment Lottie
    lottieKey: "WebDevelopment",
    cardImage: servicesImages.WebDevelopment, // Assuming this exists, otherwise use a generic
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
   "hero": {
      "headline": "Website & Mobile App Development – Create Powerful Digital Experiences for Modern Businesses",
      "description": "Looking for a reliable custom website development company in India? We deliver professional web development services that drive business growth. With over 10 years of experience, we specialize in building responsive websites, custom web applications, and modern SPAs using technologies like React, Next.js, and Node.js. Our responsive website development services ensure your site looks perfect on desktops, tablets, and smartphones.",
      "subheadline": `In today’s connected world, a strong digital presence is essential for business success.
         Companies need fast, secure, and user-friendly platforms to engage customers and stay ahead of competitors. 
         At <strong>Genius36 Technologies</strong>, we deliver advanced  <strong>Website & Mobile App Development</strong> solutions that help 
         organizations build impactful online and mobile experiences.<p>Our expert team transforms ideas into intelligent digital products that enhance visibility, improve customer interaction, and support long-term growth.</p>`,
      "image": IMAGES.webMobile,
      "imageAlt": "Professional website and mobile app development services - modern digital solutions"
    },
    "whyChooseUs": {
      "title": "Why Choose Genius36 Technologies for Web & App Solutions?",
      "description": "Selecting the right technology partner plays a critical role in project success. We combine innovation, technical excellence, and strategic thinking to deliver reliable digital solutions.",
      "features": [
        "Skilled designers, developers, and architects",
        "Proven delivery across multiple industries",
        "Secure and scalable system architecture",
        "Mobile-first and performance-driven approach",
        "Transparent communication process",
        "Long-term technical assistance",
        "Business-focused implementation"
      ]
    },
    "services_overview": {"title":"Our Website & Mobile App Development Services"},
    "services": [
      {
        "id": 1,
        "title": "Custom Website Creation",
        "description": "We build tailor-made websites that reflect your brand identity and business goals.",
        "features": [
          "Unique layouts",
          "Responsive interfaces",
          "Fast loading speed",
          "SEO-ready structure",
          "Secure frameworks"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Application Engineering",
        "description": "Our team develops intuitive and high-performing applications for Android and iOS platforms.",
        "features": [
          "Native and cross-platform development",
          "User-friendly navigation",
          "Advanced security features",
          "App store deployment support",
          "Regular updates"
        ]
      },
      {
        "id": 3,
        "title": "Progressive Web Applications (PWA)",
        "description": "We design lightweight, app-like web solutions that work across devices.",
        "features": [
          "Offline accessibility",
          "Push notifications",
          "Low data consumption",
          "Faster browsing",
          "Easy maintenance"
        ]
      },
      {
        "id": 4,
        "title": "E-Commerce Platform Development",
        "description": "We create digital storefronts that deliver seamless shopping experiences.",
        "features": [
          "Product management systems",
          "Secure payment integration",
          "Order tracking tools",
          "Inventory control",
          "Customer dashboards"
        ]
      },
      {
        "id": 5,
        "title": "CMS-Based Website Solutions",
        "description": "We develop content-managed websites that are easy to update and manage.",
        "features": [
          "User-friendly admin panels",
          "Plugin integrations",
          "Custom themes",
          "SEO optimization",
          "Scalability"
        ]
      },
      {
        "id": 6,
        "title": "API & Third-Party Integration",
        "description": "We connect your digital platforms with external systems and services.",
        "features": [
          "Payment gateways",
          "CRM and ERP tools",
          "Cloud services",
          "Analytics platforms",
          "Marketing automation"
        ]
      },
      {
        "id": 7,
        "title": "UI/UX Design & Optimization",
        "description": "We focus on delivering smooth and engaging user experiences.",
        "features": [
          "User research",
          "Wireframing",
          "Prototyping",
          "Usability testing",
          "Interface refinement"
        ]
      },
      {
        "id": 8,
        "title": "Application Testing & Quality Assurance",
        "description": "We ensure your product meets performance and security standards.",
        "features": [
          "Functional validation",
          "Compatibility checks",
          "Load testing",
          "Security assessment",
          "Bug resolution"
        ]
      },
      {
        "id": 9,
        "title": "Maintenance & Performance Enhancement",
        "description": "We provide ongoing support to keep your platforms updated and efficient.",
        "features": [
          "System monitoring",
          "Feature upgrades",
          "Security patches",
          "Technical assistance",
          "Speed optimization"
        ]
      }
    ],
    "benefits": {
      "title": "Business Benefits of Our Digital Solutions",
      "description": "Our development services help businesses achieve sustainable growth. You can expect:",
      "points": [
        {
          "icon": "📈",
          "text": "Improved online visibility"
        },
        {
          "icon": "🚀",
          "text": "Higher customer engagement"
        },
        {
          "icon": "💼",
          "text": "Better operational efficiency"
        },
        {
          "icon": "💰",
          "text": "Increased revenue opportunities"
        },
        {
          "icon": "⭐",
          "text": "Stronger brand reputation"
        }
      ]
    },
    "industries": {
      "title": "Industries We Serve",
      "description": "Our expertise spans across diverse sectors. We adapt each solution to industry-specific requirements.",
      "list": [
        "Healthcare",
        "Education",
        "Retail & E-Commerce",
        "Real Estate",
        "Logistics",
        "Manufacturing",
        "Finance",
        "Travel & Tourism",
        "Startups",
        "Professional Services"
      ]
    },
    "methodology": {
      "title": "Our Development Methodology",
      "description": "We follow a structured approach to ensure quality and timely delivery.",
      "steps": [
        {
          "step": 1,
          "title": "Discovery & Analysis",
          "description": "We understand your objectives and technical needs."
        },
        {
          "step": 2,
          "title": "Planning & Architecture",
          "description": "We design system frameworks and workflows."
        },
        {
          "step": 3,
          "title": "Design & Prototyping",
          "description": "We create interactive models for validation."
        },
        {
          "step": 4,
          "title": "Development & Integration",
          "description": "We implement features and connect systems."
        },
        {
          "step": 5,
          "title": "Testing & Validation",
          "description": "We verify performance and reliability."
        },
        {
          "step": 6,
          "title": "Deployment & Launch",
          "description": "We release your platform into live environments."
        },
        {
          "step": 7,
          "title": "Optimization & Support",
          "description": "We provide continuous improvement and maintenance."
        }
      ]
    },
    "technologies": {
      "title": "Technologies & Tools We Use",
      "description": "We utilize modern and reliable technologies.",
      "categories": [
        {
          "category": "Frontend",
          "tools": ["React", "Angular", "Vue", "Next.js", "Tailwind", "Bootstrap"]
        },
        {
          "category": "Backend",
          "tools": ["Node.js", "Java", "Python", "PHP", ".NET"]
        },
        {
          "category": "Mobile",
          "tools": ["Flutter", "React Native", "Swift", "Kotlin"]
        },
        {
          "category": "Database",
          "tools": ["MySQL", "MongoDB", "PostgreSQL"]
        },
        {
          "category": "Cloud",
          "tools": ["AWS", "Azure", "Google Cloud"]
        },
        {
          "category": "DevOps",
          "tools": ["Docker", "Kubernetes", "Jenkins"]
        }
      ]
    },
    "pricingModels": {
      "title": "Engagement & Pricing Models",
      "description": "We offer flexible working arrangements.",
      "models": [
        {
          "icon": "🔹",
          "title": "Fixed Scope Projects",
          "description": "Ideal for clearly defined requirements."
        },
        {
          "icon": "🔹",
          "title": "Time-Based Billing",
          "description": "Suitable for evolving projects."
        },
        {
          "icon": "🔹",
          "title": "Dedicated Development Team",
          "description": "Best for long-term collaboration."
        }
      ]
    },
    "clientAchievements": {
      "title": "Client Achievements",
      "description": "Our clients have achieved significant results with our solutions",
      "achievements": [
        "Faster product launches",
        "Higher user retention",
        "Reduced technical issues",
        "Improved digital presence"
      ]
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "questions": [
        {
          "question": "How long does development take?",
          "answer": "Timelines vary based on project complexity, usually between 1–6 months."
        },
        {
          "question": "Do you provide post-launch support?",
          "answer": "Yes, we offer long-term maintenance services."
        },
        {
          "question": "Can you redesign existing platforms?",
          "answer": "Yes, we modernize outdated websites and apps."
        },
        {
          "question": "Are your solutions secure?",
          "answer": "We follow industry security standards."
        },
        {
          "question": "Will my product be SEO-friendly?",
          "answer": "Yes, all web platforms are optimized for search engines."
        }
      ]
    },
    cta: {
      primary: { label: "Start Project", to: "/contact" },
      secondary: { label: "View Portfolio", to: "/projects" },
    },
    relatedServices: ["software-development", "ui-ux-responsive-design", "digital-marketing-seo"],
  },
  {
    slug: "software-development-services",
    name: "Software Development Services",
    // Map to Index page service: "Software Development" - uses SoftwareDevelopment Lottie
    lottieKey: "SoftwareDevelopment",
    cardImage: servicesImages.SoftwareDevelopment, // Assuming generic workspace image
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
    "hero": {
    "headline": "Software Development Services – Build Scalable & Future-Ready Digital Solutions",
    "description": "Looking for a reliable custom software development company in India? We provide end-to-end software development services that help businesses build scalable, secure, and high-performing digital solutions. With over a decade of experience, we specialize in creating enterprise-grade applications, SaaS platforms, and bespoke software tailored to your unique business needs.",
    "subheadline": `In today’s fast-paced digital world, businesses need powerful, secure, and scalable software solutions to stay competitive. At <strong>Genius36 Technologies</strong>, we provide end-to-end <strong>Software Development Services</strong> that help organizations streamline operations, enhance customer experience, and achieve long-term growth.<p>From startups and small businesses to enterprises and global brands, we design, develop, test, deploy, and maintain custom software solutions tailored to your unique business requirements. Our goal is to transform your ideas into intelligent digital products that deliver real business value.<p>`,
    "image": IMAGES.softwareDevelopment,
    "imageAlt": "Professional software development services - custom scalable solutions"
    },
    "whyChooseUs": {
      "title": "Why Choose Genius36 Technologies for Software Development?",
      "description": "Choosing the right development partner is crucial for project success. At Genius36 Technologies, we combine technical expertise, business understanding, and innovation to deliver exceptional results.",
      "stats": [
        {
          "value": "11+",
          "label": "Years of Industry Experience"
        },
        {
          "value": "50+",
          "label": "Skilled Developers & Engineers"
        },
        {
          "value": "25+",
          "label": "Successful Projects Delivered"
        }
      ],
      "features": [
        "Global Clientele Across Multiple Industries",
        "Agile & Secure Development Practices",
        "Dedicated Project Managers",
        "24/7 Technical Support"
      ]
    },
    "services_overview": {"title":"Our Comprehensive Software Development Services"},
    "services": [
      {
        "id": 1,
        "title": "Custom Software Development",
        "description": "Our custom software development services are designed to solve your unique business challenges. We build tailor-made solutions that align with your workflows, processes, and objectives.",
        "features": [
          "Personalized features",
          "High scalability",
          "Better system integration",
          "Improved operational efficiency",
          "Enhanced security"
        ]
      },
      {
        "id": 2,
        "title": "Enterprise Software Development",
        "description": "We develop enterprise-grade software solutions that help organizations manage complex operations, automate workflows, and improve productivity.",
        "features": [
          "ERP systems",
          "CRM platforms",
          "HRM systems",
          "Supply chain software",
          "Business intelligence tools"
        ]
      },
      {
        "id": 3,
        "title": "Software Product Development",
        "description": "From concept to commercialization, we help you build successful digital products. Our team handles everything from ideation and prototyping to development and deployment.",
        "features": [
          "Market readiness",
          "User-friendly design",
          "Performance optimization",
          "Continuous upgrades"
        ]
      },
      {
        "id": 4,
        "title": "Software Consulting Services",
        "description": "Our IT consulting services help you make informed technology decisions. We analyze your existing systems, identify gaps, and suggest cost-effective solutions.",
        "features": [
          "Technology roadmap",
          "System architecture",
          "Digital transformation strategy",
          "Cloud migration planning"
        ]
      },
      {
        "id": 5,
        "title": "Software Modernization",
        "description": "Legacy systems can slow down your business. We modernize outdated software using the latest technologies to improve speed, security, and usability.",
        "features": [
          "Re-engineering",
          "Cloud migration",
          "UI/UX redesign",
          "Database optimization",
          "API integration"
        ]
      },
      {
        "id": 6,
        "title": "Software Outsourcing Services",
        "description": "Reduce operational costs and access global talent through our outsourcing services. We provide dedicated development teams based on your project requirements.",
        "features": [
          "Lower development cost",
          "Faster project delivery",
          "Access to expert developers",
          "Flexible engagement models"
        ]
      },
      {
        "id": 7,
        "title": "Software Integration Services",
        "description": "We integrate third-party tools, APIs, and systems into your software ecosystem to ensure seamless data flow and business continuity.",
        "features": [
          "Payment gateways",
          "CRM & ERP systems",
          "Marketing platforms",
          "Cloud services",
          "Analytics tools"
        ]
      },
      {
        "id": 8,
        "title": "Support & Maintenance Services",
        "description": "Our relationship doesn't end after deployment. We provide continuous support to keep your software secure, updated, and optimized.",
        "features": [
          "Bug fixing",
          "Performance monitoring",
          "Security updates",
          "Feature enhancements",
          "Server management"
        ]
      },
      {
        "id": 9,
        "title": "Software Re-Engineering",
        "description": "We redesign and restructure existing software to improve scalability, flexibility, and performance. This helps businesses adapt to changing market demands.",
        "features": []
      }
    ],
    "businessImpact": {
      "title": "Our Business Impact",
      "description": "Our solutions help businesses achieve measurable results:",
      "metrics": [
        {
          "icon": "🚀",
          "value": "70%",
          "label": "Faster Development"
        },
        {
          "icon": "📈",
          "value": "80%",
          "label": "Improved Scalability"
        },
        {
          "icon": "💰",
          "value": "50%",
          "label": "Reduced Maintenance Costs"
        },
        {
          "icon": "🔄",
          "value": "40%",
          "label": "Legacy Systems Modernized"
        }
      ]
    },
    "industries": {
      "title": "Industries We Serve",
      "description": "We deliver customized software solutions across multiple industries. Our industry-specific expertise allows us to create solutions that address real-world challenges.",
      "list": [
        "Healthcare",
        "FinTech",
        "Education",
        "Logistics",
        "Retail & E-commerce",
        "Manufacturing",
        "Real Estate",
        "Travel & Hospitality",
        "Media & Entertainment",
        "Startups & SMEs"
      ]
    },
    "developmentProcess": {
      "title": "Our Proven Development Process",
      "description": "We follow a structured and transparent development approach to ensure quality and timely delivery.",
      "steps": [
        {
          "step": 1,
          "icon": "🔍",
          "title": "Requirement Analysis",
          "description": "We understand your business goals, user expectations, and technical requirements."
        },
        {
          "step": 2,
          "icon": "🎨",
          "title": "Design & Planning",
          "description": "Our UI/UX designers and architects create wireframes and system blueprints."
        },
        {
          "step": 3,
          "icon": "💻",
          "title": "Development",
          "description": "Our developers use agile methodologies to build scalable and secure systems."
        },
        {
          "step": 4,
          "icon": "🧪",
          "title": "Testing & Quality Assurance",
          "description": "We perform rigorous testing to eliminate bugs and ensure performance."
        },
        {
          "step": 5,
          "icon": "🚀",
          "title": "Deployment",
          "description": "We deploy your software in a live environment with complete configuration."
        },
        {
          "step": 6,
          "icon": "🔧",
          "title": "Support & Optimization",
          "description": "We provide ongoing monitoring and continuous improvement."
        }
      ]
    },
    "technologies": {
      "title": "Technologies We Use",
      "description": "We use modern and reliable technologies to build future-ready solutions.",
      "categories": [
        {
          "category": "Frontend",
          "tools": ["React", "Angular", "Vue", "Next.js", "Tailwind", "Bootstrap"]
        },
        {
          "category": "Backend",
          "tools": ["Node.js", "Java", "Python", "PHP", ".NET"]
        },
        {
          "category": "Mobile",
          "tools": ["Android", "iOS", "Flutter", "React Native"]
        },
        {
          "category": "Database",
          "tools": ["MySQL", "MongoDB", "PostgreSQL", "Oracle"]
        },
        {
          "category": "Cloud & DevOps",
          "tools": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
        },
        {
          "category": "CMS",
          "tools": ["WordPress", "Drupal", "Magento"]
        },
        {
          "category": "AI & Automation",
          "tools": ["Artificial Intelligence", "Chatbots", "RPA", "Data Analytics"]
        }
      ]
    },
    "pricingModels": {
      "title": "Flexible Engagement Models",
      "description": "We offer multiple engagement models to suit your budget and project needs.",
      "models": [
        {
          "icon": "🔹",
          "title": "Fixed Price Model",
          "description": "Ideal for projects with defined scope and timelines."
        },
        {
          "icon": "🔹",
          "title": "Hourly Model",
          "description": "Pay only for the hours worked."
        },
        {
          "icon": "🔹",
          "title": "Dedicated Team Model",
          "description": "Hire dedicated developers for long-term projects."
        }
      ]
    },
    "clientSuccess": {
      "title": "Client Success & Testimonials",
      "description": "Our clients have experienced:",
      "achievements": [
        {
          "icon": "✔",
          "text": "3x Revenue Growth"
        },
        {
          "icon": "✔",
          "text": "60% Cost Reduction"
        },
        {
          "icon": "✔",
          "text": "2x User Engagement"
        },
        {
          "icon": "✔",
          "text": "Faster Market Launch"
        }
      ],
      "note": "We focus on delivering measurable business success."
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "questions": [
        {
          "question": "How long does software development take?",
          "answer": "Project timelines range from 1 to 6 months depending on complexity."
        },
        {
          "question": "Do you provide post-launch support?",
          "answer": "Yes, we offer ongoing maintenance and support."
        },
        {
          "question": "Do you sign NDAs?",
          "answer": "Yes, we ensure complete confidentiality."
        },
        {
          "question": "Is your software secure?",
          "answer": "Absolutely. We follow industry security standards."
        }
      ]
    },
    cta: {
      primary: { label: "Discuss Your Project", to: "/contact" },
      secondary: { label: "Our Process", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "it-consulting-digital-transformation", "custom-website-design-development"],
  },
  {
    slug: "ui-ux-responsive-design-services",
    name: "UI/UX & Responsive Design Services",
    // Map to Index page service: "UI/UX & Responsive Design" - uses UIUXDesign Lottie
    lottieKey: "UIUXDesign",
    cardImage: servicesImages.ItConsultation,
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
    breadcrumb: "UI/UX & Responsive Design",
    "hero": {
      "headline": "UI/UX & Responsive Design Services – Create Engaging Digital Experiences That Convert",
      "description": "In the digital age, user experience is a key differentiator for businesses. A well-designed interface can attract and retain customers, while a poor one can drive them away. At Genius36 Technologies, we offer comprehensive UI/UX and responsive design services that help you create intuitive, visually appealing, and performance-driven digital experiences.",   
      "subheadline": "Design intuitive, visually appealing, and performance-driven interfaces that help businesses attract, engage, and retain customers. We focus on usability, accessibility, and conversion optimization to deliver exceptional user satisfaction and measurable business results.",
      "image": IMAGES.uiUx,
      "imageAlt": "Professional UI/UX and responsive design services - engaging user experiences"
    },
    "whyChooseUs": {
      "title": "Why Choose Genius36 Technologies for UI/UX & Responsive Design?",
      "description": "Selecting the right design partner can significantly impact your brand reputation and customer engagement. At Genius36 Technologies, we combine creativity, research, and technology to deliver world-class digital experiences.",
      "features": [
        "10+ Years of Design & Development Expertise",
        "Certified UI/UX Designers & Researchers",
        "User-Centered Design Approach",
        "Mobile-First & Responsive Frameworks",
        "Data-Driven Design Decisions",
        "Proven Track Record Across Industries",
        "Transparent Communication & Support"
      ],
      "note": "We focus on building long-term relationships by consistently delivering high-quality, business-focused designs."
    },
    "services_overview": {"title":"Our UI/UX & Responsive Design Services"},
    "services": [
      {
        "id": 1,
        "title": "User Interface (UI) Design",
        "description": "We create visually stunning interfaces that reflect your brand identity and improve user engagement.",
        "features": [
          "Clean layouts",
          "Consistent branding",
          "Interactive elements",
          "High-resolution visuals",
          "Design system creation"
        ]
      },
      {
        "id": 2,
        "title": "User Experience (UX) Design",
        "description": "Our UX design services focus on understanding user behavior and building seamless digital journeys.",
        "features": [
          "User research",
          "Persona creation",
          "Customer journey mapping",
          "Wireframing",
          "Usability testing"
        ]
      },
      {
        "id": 3,
        "title": "Responsive Web Design",
        "description": "We design websites that adapt perfectly to all screen sizes and devices.",
        "features": [
          "Mobile-friendly layouts",
          "Improved SEO ranking",
          "Higher engagement rates",
          "Faster loading speed",
          "Better accessibility"
        ]
      },
      {
        "id": 4,
        "title": "Mobile App UI/UX Design",
        "description": "We design intuitive and engaging mobile app interfaces for Android and iOS platforms.",
        "features": [
          "Smooth navigation",
          "Gesture-friendly layouts",
          "Minimal learning curve",
          "High user retention"
        ]
      },
      {
        "id": 5,
        "title": "Website Redesign Services",
        "description": "Upgrade your outdated website with modern UI/UX standards.",
        "features": [
          "Visual modernization",
          "Performance improvement",
          "Conversion optimization",
          "Accessibility compliance"
        ]
      },
      {
        "id": 6,
        "title": "Dashboard & SaaS Interface Design",
        "description": "We create powerful dashboards and SaaS interfaces that simplify complex data.",
        "features": [
          "Data visualization",
          "Role-based dashboards",
          "Custom widgets",
          "Workflow optimization"
        ]
      },
      {
        "id": 7,
        "title": "Interaction & Motion Design",
        "description": "Enhance user engagement with subtle animations and micro-interactions.",
        "features": [
          "Hover effects",
          "Page transitions",
          "Loading animations",
          "Feedback indicators"
        ]
      },
      {
        "id": 8,
        "title": "UX Audit & Usability Testing",
        "description": "We evaluate your existing platform and identify usability gaps.",
        "features": [
          "Heuristic evaluation",
          "Heatmap analysis",
          "User testing",
          "Performance review"
        ]
      },
      {
        "id": 9,
        "title": "Accessibility & Inclusive Design",
        "description": "We design interfaces that are usable by everyone, including people with disabilities.",
        "features": [
          "WCAG compliance",
          "Keyboard navigation",
          "Screen reader support",
          "Color contrast optimization"
        ]
      }
    ],
    "businessImpact": {
      "title": "Design Impact on Business Growth",
      "description": "Effective UI/UX design directly influences customer satisfaction and business performance. Our design solutions help you achieve:",
      "metrics": [
        {
          "icon": "📈",
          "value": "40%",
          "label": "Increase in User Engagement"
        },
        {
          "icon": "🚀",
          "value": "30%",
          "label": "Higher Conversion Rates"
        },
        {
          "icon": "💡",
          "value": "25%",
          "label": "Reduction in Bounce Rate"
        },
        {
          "icon": "💰",
          "value": "25%",
          "label": "Improved Customer Retention"
        }
      ],
      "note": "We focus on designing experiences that generate measurable ROI."
    },
    "industries": {
      "title": "Industries We Serve",
      "description": "Our UI/UX expertise spans across multiple industries. We understand industry-specific user behavior and design accordingly.",
      "list": [
        "Healthcare",
        "FinTech",
        "Education",
        "E-commerce",
        "Real Estate",
        "Travel & Hospitality",
        "Logistics",
        "Manufacturing",
        "Media & Entertainment",
        "Startups & SMEs"
      ]
    },
    "developmentProcess": {
      "title": "Our Proven Design Process",
      "description": "We follow a structured design methodology to ensure consistent quality.",
      "steps": [
        {
          "step": 1,
          "icon": "🔍",
          "title": "Discovery & Research",
          "description": "We analyze your business goals, target audience, and competitors."
        },
        {
          "step": 2,
          "icon": "🎯",
          "title": "Strategy & Planning",
          "description": "We define user flows, information architecture, and design roadmap."
        },
        {
          "step": 3,
          "icon": "🖌",
          "title": "Wireframing & Prototyping",
          "description": "We create interactive prototypes to visualize the user journey."
        },
        {
          "step": 4,
          "icon": "🎨",
          "title": "Visual Design",
          "description": "We develop high-fidelity designs aligned with your brand."
        },
        {
          "step": 5,
          "icon": "🧪",
          "title": "Testing & Validation",
          "description": "We conduct usability testing and refine designs."
        },
        {
          "step": 6,
          "icon": "🚀",
          "title": "Development Handoff",
          "description": "We provide detailed design assets and documentation."
        }
      ]
    },
    "technologies": {
      "title": "Tools & Technologies We Use",
      "description": "We use industry-leading design tools to deliver premium results.",
      "categories": [
        {
          "category": "Design & Prototyping",
          "tools": ["Figma", "Adobe XD", "Sketch", "InVision"]
        },
        {
          "category": "Graphics & Animation",
          "tools": ["Adobe Photoshop", "Illustrator", "After Effects", "Lottie"]
        },
        {
          "category": "Collaboration & Testing",
          "tools": ["Zeplin", "Jira", "Slack", "Miro", "Hotjar"]
        },
        {
          "category": "Frontend Support",
          "tools": ["HTML5", "CSS3", "JavaScript", "Tailwind", "Bootstrap"]
        }
      ]
    },
    "pricingModels": {
      "title": "Flexible Engagement Models",
      "description": "We offer flexible pricing and engagement options.",
      "models": [
        {
          "icon": "🔹",
          "title": "Fixed Price Model",
          "description": "Best for defined design projects."
        },
        {
          "icon": "🔹",
          "title": "Hourly Model",
          "description": "Ideal for short-term tasks."
        },
        {
          "icon": "🔹",
          "title": "Dedicated Designer Model",
          "description": "Hire full-time designers for ongoing needs."
        }
      ]
    },
    "clientSuccess": {
      "title": "Client Success & Case Highlights",
      "description": "Our clients have achieved:",
      "achievements": [
        {
          "icon": "✔",
          "text": "2x Increase in App Retention"
        },
        {
          "icon": "✔",
          "text": "35% Improvement in Task Completion Rate"
        },
        {
          "icon": "✔",
          "text": "50% Faster User Onboarding"
        },
        {
          "icon": "✔",
          "text": "Higher Customer Satisfaction Scores"
        }
      ],
      "note": "We focus on delivering design solutions that drive business success."
    },
    "faq": {
      "title": "Frequently Asked Questions (FAQs)",
      "questions": [
        {
          "question": "How long does a UI/UX project take?",
          "answer": "Typically 2–8 weeks depending on complexity."
        },
        {
          "question": "Do you follow accessibility standards?",
          "answer": "Yes, we follow WCAG guidelines."
        },
        {
          "question": "Can you redesign existing platforms?",
          "answer": "Absolutely. We specialize in redesign and optimization."
        },
        {
          "question": "Do you provide development support?",
          "answer": "Yes, we collaborate closely with developers."
        },
        {
          "question": "Will I own the design files?",
          "answer": "Yes, all assets belong to you after project completion."
        }
      ]
    },
    cta: {
      primary: { label: "Get Consultation", to: "/contact" },
      secondary: { label: "Our Services", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "networking-it-infrastructure", "software-development"],
  },
  {
    slug: "ecommerce-solutions-platforms",
    name: "E-Commerce Solutions & Platforms",
    // Map to Index page service: "E-Commerce Solutions & Platforms" - uses Ecommerce Lottie
    lottieKey: "Ecommerce",
    cardImage: servicesImages.Ecommerce,
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
    breadcrumb:"E-Commerce Solutions & Platforms",
   "hero": {
    "headline": "E-Commerce Solutions & Platforms – Turn Your Online Store into a Revenue Engine",
    "description": "In the competitive world of online retail, having a powerful and user-friendly e-commerce platform is essential for success. At Genius36 Technologies, we offer comprehensive e-commerce development services that help businesses build fast, secure, and customer-focused online stores. Whether you're launching a new product line or expanding your existing business, our solutions are designed to drive consistent sales growth and enhance customer satisfaction.",
    "subheadline": `Online shopping has become the preferred way for customers to discover, compare, and purchase products. To succeed in this competitive environment, businesses need fast, secure, and customer-focused e-commerce platforms. At <strong>Genius36 Technologies</strong>, we deliver advanced <strong>E-Commerce Solutions & Platforms</strong> that help brands establish a strong digital presence and achieve consistent sales growth.<p>Our team designs and develops intelligent online stores that focus on usability, performance, and scalability. From simple product websites to complex multi-vendor marketplaces, we provide tailored solutions that match your business goals and customer expectations.</p>`,
    "image": IMAGES.ecommerce,
    "imageAlt": "Professional e-commerce solutions and platforms - online store development"
  },
  "services_overview": {"title":"Our E-Commerce Development Services"},
  "whyChooseUs": {
    "title": "Why Partner with Genius36 Technologies for E-Commerce Development?",
    "description": "Creating a successful online store requires more than just attractive design. It demands technical excellence, strategic planning, and continuous improvement. At Genius36 Technologies, we combine creativity with technology to build platforms that perform.",
    "features": [
      "Extensive experience in online retail development",
      "Skilled designers, developers, and consultants",
      "Secure and reliable transaction systems",
      "Mobile-friendly and search-engine-ready stores",
      "Performance-focused architecture",
      "Ongoing technical assistance",
      "Transparent project management"
    ],
    "note": "We work closely with our clients to ensure every solution delivers long-term value."
  },
  "services": [
    {
      "id": 1,
      "title": "Tailor-Made Online Store Development",
      "description": "We design and build customized e-commerce websites that reflect your brand and business strategy.",
      "features": [
        "Unique layouts and branding",
        "Smart product management",
        "Smooth checkout experience",
        "Custom features and modules",
        "Speed and performance optimization"
      ]
    },
    {
      "id": 2,
      "title": "Shopify Store Setup & Customization",
      "description": "Our Shopify specialists create visually appealing and high-converting stores using customized themes and advanced tools.",
      "features": [
        "Store configuration",
        "Theme modification",
        "App installation",
        "Payment and shipping setup",
        "Store performance tuning"
      ]
    },
    {
      "id": 3,
      "title": "WooCommerce Store Solutions",
      "description": "We transform WordPress websites into fully functional online stores using WooCommerce.",
      "features": [
        "Easy content control",
        "Strong SEO structure",
        "Flexible customization",
        "Secure payment processing",
        "Cost-effective scalability"
      ]
    },
    {
      "id": 4,
      "title": "Magento Development for Large Businesses",
      "description": "For high-volume and enterprise-level operations, we provide advanced Magento development services.",
      "features": [
        "Custom extensions",
        "Multi-store management",
        "Speed optimization",
        "ERP and CRM connections",
        "Enhanced security layers"
      ]
    },
    {
      "id": 5,
      "title": "Mobile Commerce Development",
      "description": "We create mobile-first shopping platforms and applications to improve customer convenience.",
      "features": [
        "Faster browsing and checkout",
        "Personalized notifications",
        "Higher engagement",
        "Improved repeat purchases"
      ]
    },
    {
      "id": 6,
      "title": "Multi-Vendor Marketplace Solutions",
      "description": "We develop digital marketplaces where multiple sellers can list and sell products.",
      "features": [
        "Vendor control panels",
        "Commission tracking",
        "Product moderation",
        "Customer review systems",
        "Automated payouts"
      ]
    },
    {
      "id": 7,
      "title": "Secure Payment System Integration",
      "description": "We connect your store with trusted payment gateways to ensure safe and smooth transactions.",
      "features": [
        "UPI and Net Banking",
        "Debit/Credit Cards",
        "Paytm, Razorpay, Stripe, PayPal",
        "International payments"
      ]
    },
    {
      "id": 8,
      "title": "Third-Party Integration Services",
      "description": "We integrate your online store with essential tools for smooth operations.",
      "features": [
        "Inventory systems",
        "Accounting software",
        "CRM platforms",
        "Shipping partners",
        "Marketing automation tools"
      ]
    },
    {
      "id": 9,
      "title": "Store Maintenance & Performance Optimization",
      "description": "We provide continuous technical support to keep your store running smoothly.",
      "features": [
        "Bug resolution",
        "System monitoring",
        "Security updates",
        "Feature enhancements",
        "Server optimization"
      ]
    }
  ],
  "businessImpact": {
    "title": "How Our E-Commerce Solutions Help Your Business",
    "description": "Our solutions are designed to improve overall business performance and customer satisfaction. You can expect:",
    "metrics": [
      {
        "icon": "📊",
        "value": "50%",
        "label": "Increased online visibility"
      },
      {
        "icon": "📈",
        "value": "30%",
        "label": "Higher sales conversions"
      },
      {
        "icon": "🛒",
        "value": "40%",
        "label": "Reduced cart abandonment"
      },
      {
        "icon": "💡",
        "value": "20%",
        "label": "Improved customer loyalty"
      }
    ],
    "note": "We focus on building platforms that support steady and sustainable growth."
  },
  "industries": {
    "title": "Industries We Work With",
    "description": "Our e-commerce solutions serve businesses across various sectors. Each solution is customized based on customer behavior and industry trends.",
    "list": [
      "Clothing and Fashion",
      "Electronics and Gadgets",
      "Grocery and Essentials",
      "Health and Wellness",
      "Online Learning",
      "Home and Furniture",
      "Beauty and Personal Care",
      "Wholesale and B2B",
      "Handcrafted Products",
      "Emerging Startups"
    ]
  },
  "developmentProcess": {
    "title": "Our E-Commerce Development Methodology",
    "description": "We follow a structured workflow to ensure quality and timely delivery.",
    "steps": [
      {
        "step": 1,
        "icon": "🔍",
        "title": "Business Analysis",
        "description": "We study your products, customers, and market position."
      },
      {
        "step": 2,
        "icon": "🎯",
        "title": "Platform Planning",
        "description": "We recommend the most suitable technology and platform."
      },
      {
        "step": 3,
        "icon": "🖌",
        "title": "Design & User Experience",
        "description": "We create attractive and easy-to-use interfaces."
      },
      {
        "step": 4,
        "icon": "💻",
        "title": "Development & Configuration",
        "description": "We implement core features and integrations."
      },
      {
        "step": 5,
        "icon": "🧪",
        "title": "Quality Testing",
        "description": "We check security, speed, and functionality."
      },
      {
        "step": 6,
        "icon": "🚀",
        "title": "Store Launch",
        "description": "We deploy your store and prepare it for live users."
      }
    ]
  },
  "technologies": {
    "title": "Technologies & Platforms We Use",
    "description": "We utilize modern tools to ensure reliability and scalability.",
    "categories": [
      {
        "category": "E-Commerce Platforms",
        "tools": ["Shopify", "WooCommerce", "Magento", "OpenCart", "BigCommerce"]
      },
      {
        "category": "Frontend Technologies",
        "tools": ["React", "Vue", "Next.js", "HTML5", "CSS3", "Tailwind"]
      },
      {
        "category": "Backend Systems",
        "tools": ["Node.js", "PHP", "Python", ".NET"]
      },
      {
        "category": "Databases",
        "tools": ["MySQL", "MongoDB", "PostgreSQL"]
      },
      {
        "category": "Cloud Services",
        "tools": ["AWS", "Azure", "Google Cloud"]
      },
      {
        "category": "Marketing & Analytics",
        "tools": ["Google Analytics", "CRM Systems", "Ad Tracking Tools"]
      }
    ]
  },
  "pricingModels": {
    "title": "Our Engagement & Pricing Models",
    "description": "We provide flexible engagement options based on your needs.",
    "models": [
      {
        "icon": "🔹",
        "title": "Fixed Project Model",
        "description": "Best for projects with defined scope."
      },
      {
        "icon": "🔹",
        "title": "Time-Based Model",
        "description": "Pay only for the hours used."
      },
      {
        "icon": "🔹",
        "title": "Dedicated Resource Model",
        "description": "Hire a full-time development team."
      }
    ]
  },
  "clientSuccess": {
    "title": "Client Success Highlights",
    "description": "Our clients have experienced:",
    "achievements": [
      {
        "icon": "✔",
        "text": "Significant growth in online revenue"
      },
      {
        "icon": "✔",
        "text": "Faster order processing"
      },
      {
        "icon": "✔",
        "text": "Better customer retention"
      },
      {
        "icon": "✔",
        "text": "Improved brand recognition"
      }
    ],
    "note": "We focus on delivering real business outcomes, not just technical solutions."
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "Which platform should I choose?",
        "answer": "The best platform depends on your business size, budget, and future plans. Our experts guide you through the selection process."
      },
      {
        "question": "Will my store work on mobile devices?",
        "answer": "Yes, all our solutions are fully responsive."
      },
      {
        "question": "Can you upgrade my existing website?",
        "answer": "Yes, we provide secure migration and redesign services."
      },
      {
        "question": "Do you offer SEO-friendly stores?",
        "answer": "Yes, our platforms follow SEO best practices."
      },
      {
        "question": "How secure will my store be?",
        "answer": "We implement industry-standard security protocols."
      }
    ]
  },
    cta: {
      primary: { label: "Get Secure", to: "/contact" },
      secondary: { label: "View Products", to: "/services" },
    },
    relatedServices: ["networking-it-infrastructure", "computer-hardware-sales-repair", "it-consulting-digital-transformation"],
  },
  {
    slug: "digital-marketing-seo-services",
    name: "Digital Marketing & SEO Services",
    // Map to Index page service: "Digital Marketing & SEO Services" - uses DigitalMarketing Lottie
    lottieKey: "DigitalSEO",
    cardImage: servicesImages.ItTraining,
    seo: {
      metaTitle: "Digital Marketing & SEO Services India | Genius36",
      metaDescription: "Expert digital marketing and SEO services in India. Boost your online visibility, traffic, and revenue with our proven strategies.",
      focusKeywords: [
        "computer hardware sales",
        "laptop repair services bhilai",
        "computer repair shop",
        "annual maintenance contract for computers",
        "genuine computer parts"
      ],
    },
    breadcrumb: "Digital Marketing & SEO Services",
    "hero": {
    "headline": "Digital Marketing & SEO Services – Grow Your Brand, Traffic & Revenue Online",
    "description": "In today's digital landscape, having a strong online presence is essential for business success. At Genius36 Technologies, we offer comprehensive digital marketing and SEO services that help you build visibility, engage your audience, and generate consistent leads. Our strategies are designed to improve search rankings, increase website traffic, strengthen brand authority, and maximize return on investment for sustainable online growth.",
    "subheadline": `In today’s competitive digital environment, having an online presence is not enough. Your business needs visibility, engagement, and consistent leads to succeed. At <strong>Genius36 Technologies, </strong> we provide result-driven <strong>Digital Marketing & SEO Services </strong>that help brands connect with the right audience and convert visitors into loyal customers.<p>Our marketing strategies are designed to improve search rankings, increase website traffic, strengthen brand authority, and maximize return on investment. Whether you are a startup, small business, or established enterprise, our customized solutions support your growth at every stage.</p>`,
    "image": IMAGES.digitalMarketing,
    "imageAlt": "Professional digital marketing and SEO services - grow your online presence"
      },
      "whyChooseUs": {
        "title": "Why Choose Genius36 Technologies for Digital Marketing & SEO?",
        "description": "Successful digital marketing requires expertise, data analysis, creativity, and continuous optimization. Our team combines all these elements to deliver measurable outcomes.",
        "features": [
          "Experienced SEO & Digital Marketing Specialists",
          "Proven Track Record of Ranking & Lead Generation",
          "Data-Driven Marketing Approach",
          "Transparent Reporting & Analytics",
          "White-Hat SEO Practices",
          "Conversion-Oriented Campaigns",
          "Dedicated Account Managers"
        ],
        "note": "We focus on building sustainable online growth rather than short-term results."
      },
      "services_overview": {"title":"Our Digital Marketing & SEO Services"},
      "services": [
        {
          "id": 1,
          "title": "Search Engine Optimization (SEO)",
          "description": "Our SEO services help your website rank higher on search engines and attract qualified traffic.",
          "features": [
            "Keyword research and analysis",
            "On-page optimization",
            "Technical SEO improvements",
            "Content optimization",
            "Link building",
            "Local SEO setup"
          ]
        },
        {
          "id": 2,
          "title": "Pay-Per-Click Advertising (PPC)",
          "description": "We manage paid advertising campaigns that generate instant visibility and leads.",
          "features": [
            "Google Ads management",
            "Display advertising",
            "Remarketing campaigns",
            "Budget optimization",
            "Conversion tracking"
          ]
        },
        {
          "id": 3,
          "title": "Social Media Marketing (SMM)",
          "description": "We build your brand presence across major social platforms and engage your audience.",
          "features": [
            "Facebook",
            "Instagram",
            "LinkedIn",
            "Twitter (X)",
            "YouTube"
          ],
          "note": "Our social strategies focus on awareness, engagement, and lead generation."
        },
        {
          "id": 4,
          "title": "Content Marketing",
          "description": "High-quality content attracts, educates, and converts users. We create valuable content that supports SEO and branding.",
          "features": [
            "Blog writing",
            "Website copywriting",
            "Case studies",
            "Infographics",
            "Email newsletters"
          ]
        },
        {
          "id": 5,
          "title": "Local SEO Services",
          "description": "We help local businesses dominate regional search results and attract nearby customers.",
          "features": [
            "Google Business Profile optimization",
            "Local citations",
            "Review management",
            "Location-based keywords",
            "Map ranking improvement"
          ]
        },
        {
          "id": 6,
          "title": "Email Marketing Campaigns",
          "description": "We design targeted email campaigns to nurture leads and retain customers.",
          "features": [
            "Campaign design",
            "Audience segmentation",
            "Automation setup",
            "Performance analysis",
            "List management"
          ]
        },
        {
          "id": 7,
          "title": "Conversion Rate Optimization (CRO)",
          "description": "We optimize your website and landing pages to improve lead and sales performance.",
          "features": [
            "User behavior analysis",
            "A/B testing",
            "Funnel optimization",
            "CTA improvement",
            "Heatmap tracking"
          ]
        },
        {
          "id": 8,
          "title": "Online Reputation Management (ORM)",
          "description": "We help businesses maintain a positive digital image and build customer trust.",
          "features": [
            "Review monitoring",
            "Brand mention tracking",
            "Negative feedback handling",
            "Reputation building strategies"
          ]
        },
        {
          "id": 9,
          "title": "Marketing Analytics & Reporting",
          "description": "We track campaign performance and provide detailed insights.",
          "features": [
            "Traffic analysis",
            "Keyword ranking reports",
            "Lead tracking",
            "ROI measurement",
            "Campaign optimization plans"
          ]
        }
      ],
      "businessImpact": {
        "title": "How Our Marketing Solutions Help Your Business",
        "description": "Our digital marketing strategies are designed to deliver consistent business growth. You can expect:",
        "metrics": [
          {
            "icon": "📈",
            "value": "50%",
            "label": "Increased website traffic"
          },
          {
            "icon": "🎯",
            "value": "30%",
            "label": "Higher-quality leads"
          },
          {
            "icon": "💰",
            "value": "25%",
            "label": "Better conversion rates"
          },
          {
            "icon": "⭐",
            "value": "20%",
            "label": "Stronger brand recognition"
          }
        ],
        "note": "We focus on turning online visitors into paying customers."
      },
      "industries": {
        "title": "Industries We Serve",
        "description": "Our marketing solutions support businesses across multiple sectors. We customize campaigns based on industry behavior and competition.",
        "list": [
          "IT & Software",
          "Healthcare",
          "Education",
          "Real Estate",
          "Retail & E-commerce",
          "Manufacturing",
          "Travel & Tourism",
          "Finance",
          "Startups",
          "Professional Services"
        ]
      },
      "developmentProcess": {
        "title": "Our Digital Marketing Process",
        "description": "We follow a structured workflow for consistent results.",
        "steps": [
          {
            "step": 1,
            "icon": "🔍",
            "title": "Business & Market Analysis",
            "description": "We study your competitors, audience, and goals."
          },
          {
            "step": 2,
            "icon": "🎯",
            "title": "Strategy Development",
            "description": "We create a customized marketing roadmap."
          },
          {
            "step": 3,
            "icon": "🚀",
            "title": "Campaign Setup",
            "description": "We implement SEO, ads, and social media campaigns."
          },
          {
            "step": 4,
            "icon": "🧪",
            "title": "Optimization & Testing",
            "description": "We continuously refine campaigns for better performance."
          },
          {
            "step": 5,
            "icon": "📊",
            "title": "Performance Monitoring",
            "description": "We track results using analytics tools."
          },
          {
            "step": 6,
            "icon": "📋",
            "description": "We share reports and optimize strategies."
          }
        ]
      },
      "technologies": {
        "title": "Tools & Technologies We Use",
        "description": "We leverage advanced marketing tools to improve accuracy and performance.",
        "categories": [
          {
            "category": "SEO & Analytics",
            "tools": ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"]
          },
          {
            "category": "Advertising",
            "tools": ["Google Ads", "Meta Ads Manager", "LinkedIn Ads"]
          },
          {
            "category": "Social Media Tools",
            "tools": ["Hootsuite", "Buffer", "Sprout Social"]
          },
          {
            "category": "Email Marketing",
            "tools": ["Mailchimp", "HubSpot", "Sendinblue"]
          },
          {
            "category": "CRO & Heatmaps",
            "tools": ["Hotjar", "Crazy Egg", "Google Optimize"]
          }
        ]
      },
      "pricingModels": {
        "title": "Flexible Engagement Models",
        "description": "We offer flexible pricing options for businesses of all sizes.",
        "models": [
          {
            "icon": "🔹",
            "title": "Monthly Retainer",
            "description": "Ideal for long-term marketing campaigns."
          },
          {
            "icon": "🔹",
            "title": "Project-Based",
            "description": "Suitable for short-term goals."
          },
          {
            "icon": "🔹",
            "title": "Performance-Based",
            "description": "Linked to specific KPIs (on request)."
          }
        ]
      },
      "clientSuccess": {
        "title": "Client Success & Results",
        "description": "Our clients have achieved:",
        "achievements": [
          {
            "icon": "✔",
            "text": "3x Growth in Organic Traffic"
          },
          {
            "icon": "✔",
            "text": "50% Increase in Qualified Leads"
          },
          {
            "icon": "✔",
            "text": "Improved Search Rankings"
          },
          {
            "icon": "✔",
            "text": "Higher ROI on Ad Spend"
          }
        ],
        "note": "We focus on delivering real, measurable success."
      },
      "faq": {
        "title": "Frequently Asked Questions (FAQs)",
        "questions": [
          {
            "question": "How long does SEO take to show results?",
            "answer": "SEO typically takes 3–6 months for noticeable improvement."
          },
          {
            "question": "Do you follow Google guidelines?",
            "answer": "Yes, we use only ethical and approved practices."
          },
          {
            "question": "Can you handle small budgets?",
            "answer": "Yes, we create cost-effective strategies."
          },
          {
            "question": "Do you provide monthly reports?",
            "answer": "Yes, detailed reports are shared regularly."
          },
          {
            "question": "Can you manage international campaigns?",
            "answer": "Yes, we support global marketing campaigns."
          }
        ]
      },
    cta: {
      primary: { label: "Get Support", to: "/contact" },
      secondary: { label: "Shop Hardware", to: "/services" },
    },
    relatedServices: ["networking-it-infrastructure", "cctv-camera-installation-security", "software-development"],
  },
  {
    slug: "cloud-solutions-server-setup",
    name: "Cloud, Cybersecurity & IT Consultancy",
    // Map to Index page service: "Networking & IT Infrastructure" - uses Networking Lottie
    lottieKey: "Cloud",
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
   "hero": {
      "headline": "Cloud, Cybersecurity & IT Consultancy – Secure, Optimize & Transform Your Digital Infrastructure",
      "description": "In the era of digital transformation, businesses need robust cloud solutions, strong cybersecurity measures, and strategic IT consulting to stay competitive. At Genius36 Technologies, we provide comprehensive services that help organizations protect their data, improve performance, and adopt future-ready technologies. Our expertise in cloud architecture, security frameworks, and IT strategy enables us to build resilient systems that support growth and innovation.",
      "subheadline": `Modern businesses rely on technology to operate efficiently, serve customers, and stay competitive. However, managing digital systems without proper security and strategy can expose organizations to risks and inefficiencies. At <strong>Genius36 Technologies, </strong> we provide advanced < strong >Cloud Solutions, Cybersecurity Services, and IT Consulting </ strong >that help organizations protect their data, improve performance, and adopt future-ready technologies.<p>Our experts work closely with you to design reliable systems, minimize threats, and align technology investments with business objectives.</p>`,
      "image": IMAGES.cloudCyber,
      "imageAlt": "Professional cloud, cybersecurity and IT consultancy services - secure digital infrastructure"
    },
    "whyChooseUs": {
      "title": "Why Work with Genius36 Technologies for Cloud, Security & IT Advisory?",
      "description": "Choosing the right technology partner can define your long-term success. Our team brings deep technical knowledge and strategic insight to every project.",
      "features": [
        "Experienced cloud architects and security specialists",
        "Proven methodologies and compliance-driven practices",
        "Customized infrastructure planning",
        "Proactive risk management",
        "Transparent communication",
        "Long-term technical support",
        "Business-oriented consulting approach"
      ],
      "note": "We focus on building resilient systems that support growth and innovation."
    },
    "services_overview": {"title":"Our Cloud, Cybersecurity & IT Consultancy Services"},
    "services": [
      {
        "id": 1,
        "title": "Cloud Infrastructure Planning & Migration",
        "description": "We help businesses move applications and data to reliable cloud environments with minimal disruption.",
        "features": [
          "Cloud readiness assessment",
          "Platform selection (AWS, Azure, GCP)",
          "Secure data migration",
          "Hybrid and multi-cloud setup",
          "Cost optimization"
        ]
      },
      {
        "id": 2,
        "title": "Cloud Operations & Management",
        "description": "Our team ensures your cloud environment runs smoothly and efficiently.",
        "features": [
          "Performance monitoring",
          "Resource optimization",
          "Backup management",
          "Scalability planning",
          "Cost control"
        ]
      },
      {
        "id": 3,
        "title": "Network & System Protection Services",
        "description": "We implement multi-layered defense mechanisms to safeguard digital assets.",
        "features": [
          "Firewall configuration",
          "Intrusion detection systems",
          "Endpoint protection",
          "Network monitoring",
          "Threat prevention"
        ]
      },
      {
        "id": 4,
        "title": "Risk Assessment & Vulnerability Analysis",
        "description": "We identify system weaknesses before attackers can exploit them.",
        "features": [
          "Penetration testing",
          "Security audits",
          "Configuration reviews",
          "Compliance checks",
          "Threat modeling"
        ]
      },
      {
        "id": 5,
        "title": "Data Protection & Privacy Solutions",
        "description": "We design secure frameworks to protect sensitive information.",
        "features": [
          "Encryption strategies",
          "Secure access controls",
          "Backup and recovery plans",
          "Regulatory compliance",
          "Identity management"
        ]
      },
      {
        "id": 6,
        "title": "IT Strategy & Digital Transformation Consulting",
        "description": "We align technology investments with business goals.",
        "features": [
          "IT roadmap development",
          "Infrastructure modernization",
          "Process automation planning",
          "Technology stack evaluation",
          "Vendor assessment"
        ]
      },
      {
        "id": 7,
        "title": "Business Continuity & Disaster Recovery Planning",
        "description": "We prepare organizations to handle unexpected disruptions.",
        "features": [
          "Backup architecture",
          "Failover configuration",
          "Recovery testing",
          "Risk mitigation plans",
          "Crisis response strategies"
        ]
      },
      {
        "id": 8,
        "title": "Compliance & Governance Services",
        "description": "We help businesses meet industry standards and regulatory requirements.",
        "features": [
          "ISO standards",
          "GDPR",
          "SOC 2",
          "HIPAA (where applicable)",
          "Local regulatory frameworks"
        ]
      },
      {
        "id": 9,
        "title": "Managed IT Support & Technical Assistance",
        "description": "We provide ongoing technical services to ensure system reliability.",
        "features": [
          "24/7 monitoring",
          "Incident management",
          "Patch updates",
          "Helpdesk services",
          "Infrastructure maintenance"
        ]
      }
    ],
    "businessImpact": {
      "title": "How Our Technology Services Benefit Your Organization",
      "description": "Our solutions help businesses achieve operational stability and digital confidence. You can expect:",
      "metrics": [
        {
          "icon": "🔒",
          "value": "50%",
          "label": "Reduced security incidents"
        },
        {
          "icon": "⚡",
          "value": "40%",
          "label": "Improved system performance"
        },
        {
          "icon": "💰",
          "value": "30%",
          "label": "Lower infrastructure expenses"
        },
        {
          "icon": "📊",
          "value": "100%",
          "label": "Better compliance readiness"
        }
      ],
      "note": "We focus on preventing problems before they impact your business."
    },
    "industries": {
      "title": "Industries We Support",
      "description": "Our cloud, security, and consulting services serve diverse sectors. We tailor each solution according to industry requirements.",
      "list": [
        "Healthcare",
        "Banking & Finance",
        "Education",
        "Manufacturing",
        "Retail",
        "Logistics",
        "Government",
        "Technology Startups",
        "Professional Services"
      ]
    },
    "developmentProcess": {
      "title": "Our Service Delivery Framework",
      "description": "We follow a structured approach to ensure quality and reliability.",
      "steps": [
        {
          "step": 1,
          "icon": "🔍",
          "title": "Technology Assessment",
          "description": "We review your current systems, risks, and objectives."
        },
        {
          "step": 2,
          "icon": "🎯",
          "title": "Strategic Planning",
          "description": "We create a customized improvement roadmap."
        },
        {
          "step": 3,
          "icon": "🚀",
          "title": "Implementation",
          "description": "We deploy tools, platforms, and controls."
        },
        {
          "step": 4,
          "icon": "🧪",
          "title": "Validation & Testing",
          "description": "We verify system stability and security."
        },
        {
          "step": 5,
          "icon": "📊",
          "title": "Optimization",
          "description": "We fine-tune performance and resource usage."
        },
        {
          "step": 6,
          "icon": "📋",
          "title": "Ongoing Support",
          "description": "We provide continuous monitoring and guidance."
        }
      ]
    },
    "technologies": {
      "title": "Platforms, Tools & Technologies We Use",
      "description": "We utilize proven platforms and tools to deliver dependable solutions.",
      "categories": [
        {
          "category": "Cloud Platforms",
          "tools": ["Amazon Web Services", "Microsoft Azure", "Google Cloud"]
        },
        {
          "category": "Security Tools",
          "tools": ["Fortinet", "Palo Alto", "Sophos", "CrowdStrike"]
        },
        {
          "category": "Monitoring & Management",
          "tools": ["Nagios", "Zabbix", "SolarWinds"]
        },
        {
          "category": "Identity & Access",
          "tools": ["Okta", "Azure AD", "IAM Systems"]
        },
        {
          "category": "Backup & Recovery",
          "tools": ["Veeam", "Acronis", "Commvault"]
        }
      ]
    },
    "pricingModels": {
      "title": "Engagement & Pricing Options",
      "description": "We offer flexible working models based on your needs.",
      "models": [
        {
          "icon": "🔹",
          "title": "Retainer-Based Support",
          "description": "Ideal for long-term management."
        },
        {
          "icon": "🔹",
          "title": "Project-Based Consulting",
          "description": "Suitable for specific initiatives."
        },
        {
          "icon": "🔹",
          "title": "On-Demand Assistance",
          "description": "Best for urgent requirements."
        }
      ]
    },
    "clientSuccess": {
      "title": "Client Success & Outcomes",
      "description": "Our clients have experienced:",
      "achievements": [
        {
          "icon": "✔",
          "text": "Improved system reliability"
        },
        {
          "icon": "✔",
          "text": "Stronger data protection"
        },
        {
          "icon": "✔",
          "text": "Faster recovery from incidents"
        },
        {
          "icon": "✔",
          "text": "Reduced operational risks"
        }
      ],
      "note": "We deliver solutions that strengthen business resilience."
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "questions": [
        {
          "question": "Do you support cloud migration for small businesses?",
          "answer": "Yes, we create scalable solutions for businesses of all sizes."
        },
        {
          "question": "How do you ensure data safety?",
          "answer": "We implement encryption, access controls, and monitoring systems."
        },
        {
          "question": "Can you help with regulatory compliance?",
          "answer": "Yes, our team supports multiple compliance frameworks."
        },
        {
          "question": "Do you provide emergency support?",
          "answer": "Yes, we offer rapid-response services."
        },
        {
          "question": "Will you manage our IT systems long-term?",
          "answer": "Yes, we provide ongoing management and advisory support."
        }
      ]
    },
    cta: {
      primary: { label: "Upgrade Network", to: "/contact" },
      secondary: { label: "Infrastructure Services", to: "/services" },
    },
    relatedServices: ["cloud-solutions-server-setup", "computer-hardware-sales-repair", "it-consulting-digital-transformation"],
  },
  {
    slug: "ai-ml-training-technology-workshops",
    name: "AI/ML Training & Technology Workshops",
    // Map to Index page service: "AI/ML Training & Technology Workshops" - uses AI Lottie
    lottieKey: "AIML",
    cardImage: servicesImages.networking,
    seo: {
      metaTitle: "AI/ML Training & Technology Workshops India | Genius36",
      metaDescription: "Expert AI/ML training and technology workshops in India. Learn AI, ML, and data science skills with hands-on training and industry insights.",
      focusKeywords: [
        "cloud solutions services india",
        "server setup services",
        "aws cloud migration",
        "azure server configuration",
        "vps hosting services"
      ],
    },
    breadcrumb: "AI/ML Training & Technology Workshops",
    "hero": {
    "headline": "AI/ML Training & Technology Workshops – Empower Teams with Intelligent Skills for the Future",
    "description": "Artificial Intelligence and Machine Learning are transforming industries and creating new opportunities. At Genius36 Technologies, we offer comprehensive training programs and workshops that equip individuals and teams with the knowledge and skills needed to excel in the AI/ML landscape. Our courses combine theoretical foundations with practical applications, enabling participants to develop job-ready expertise and strategic understanding of intelligent technologies.",
    "subheadline":`Artificial Intelligence and Machine Learning are transforming the way organizations operate, innovate, and compete. To stay ahead, 
    professionals and businesses must continuously upgrade their technical capabilities. At <strong>Genius36 Technologies, </strong>, we deliver
    practical <strong>AI/ML Training & Technology Workshops </strong>that help individuals and teams master intelligent systems and apply them in 
    real-world scenarios.<p>Our programs combine theory, hands-on practice, and industry insights to ensure participants gain job-ready expertise and strategic understanding.</p>`,
    "image": IMAGES.aiMl,
    "imageAlt": "Professional AI/ML training and technology workshops - empower your team"
  },
  "whyChooseUs": {
    "title": "Why Choose Genius36 Technologies for AI/ML Learning Programs?",
    "description": "Selecting the right training partner is essential for skill development and long-term success. Our instructors and mentors focus on delivering meaningful learning experiences.",
    "features": [
      "Industry-certified trainers and practitioners",
      "Project-oriented learning methodology",
      "Updated curriculum aligned with market needs",
      "Interactive classroom and online sessions",
      "Personalized mentoring support",
      "Corporate and academic training options",
      "Performance-based assessments"
    ],
    "note": "We aim to build confidence, competence, and career readiness."
  },
  "services_overview": {"title":"Our AI/ML Training & Technology Workshops Services"},
  "services": [
    {
      "id": 1,
      "title": "Foundations of Artificial Intelligence",
      "description": "This module introduces participants to core concepts and applications of intelligent systems.",
      "features": [
        "AI fundamentals",
        "Problem-solving models",
        "Knowledge representation",
        "Intelligent agents",
        "Ethical considerations"
      ]
    },
    {
      "id": 2,
      "title": "Machine Learning Certification Program",
      "description": "A comprehensive course focused on data-driven modeling and predictive analysis.",
      "features": [
        "Supervised and unsupervised methods",
        "Feature engineering",
        "Model evaluation",
        "Optimization techniques",
        "Real-life use cases"
      ]
    },
    {
      "id": 3,
      "title": "Deep Learning & Neural Networks",
      "description": "Advanced training on building intelligent systems using neural architectures.",
      "features": [
        "Artificial neural networks",
        "Convolutional models",
        "Recurrent networks",
        "Transfer learning",
        "Performance tuning"
      ]
    },
    {
      "id": 4,
      "title": "Data Science & Analytics Training",
      "description": "Learn how to extract meaningful insights from large datasets.",
      "features": [
        "Data preprocessing",
        "Statistical analysis",
        "Visualization techniques",
        "Business intelligence tools",
        "Decision support systems"
      ]
    },
    {
      "id": 5,
      "title": "Corporate AI Upskilling Workshops",
      "description": "Customized sessions designed to enhance organizational capabilities.",
      "features": [
        "Process automation",
        "Predictive maintenance",
        "Customer behavior analysis",
        "Intelligent reporting",
        "Workflow optimization"
      ]
    },
    {
      "id": 6,
      "title": "Python for Intelligent Systems",
      "description": "Practical programming training for AI and ML development.",
      "features": [
        "Python fundamentals",
        "Libraries for data processing",
        "Model development",
        "Application deployment",
        "Performance testing"
      ]
    },
    {
      "id": 7,
      "title": "Natural Language Processing (NLP) Training",
      "description": "Learn how to build systems that understand and generate human language.",
      "features": [
        "Text classification",
        "Sentiment analysis",
        "Chatbot development",
        "Language models",
        "Speech processing"
      ]
    },
    {
      "id": 8,
      "title": "Computer Vision & Image Analysis",
      "description": "Hands-on training in visual recognition and pattern detection.",
      "features": [
        "Image preprocessing",
        "Object detection",
        "Facial recognition",
        "Video analytics",
        "Visual classification"
      ]
    },
    {
      "id": 9,
      "title": "AI Project Mentorship Program",
      "description": "Participants receive guidance on building complete AI solutions.",
      "features": [
        "Project planning",
        "Technical review",
        "Code optimization",
        "Deployment support",
        "Career guidance"
      ]
    }
  ],
  "benefits": {
    "title": "How Our Training Benefits Individuals and Organizations",
    "description": "Our learning programs deliver practical value and measurable improvement. Participants gain:",
    "points": [
      {
        "icon": "📊",
        "text": "Strong analytical thinking"
      },
      {
        "icon": "🚀",
        "text": "Improved technical confidence"
      },
      {
        "icon": "💼",
        "text": "Enhanced career opportunities"
      },
      {
        "icon": "🤖",
        "text": "Practical implementation skills"
      },
      {
        "icon": "📈",
        "text": "Better organizational productivity"
      }
    ],
    "note": "We focus on transforming learners into capable innovators."
  },

  "methodology": {
    "title": "Our Learning Methodology",
    "description": "We follow a structured and learner-centric approach.",
    "steps": [
      {
        "step": 1,
        "title": "Skill Assessment",
        "description": "We evaluate participants' current knowledge levels."
      },
      {
        "step": 2,
        "title": "Customized Curriculum Design",
        "description": "We design learning paths based on goals."
      },
      {
        "step": 3,
        "title": "Interactive Instruction",
        "description": "Live sessions with real-time demonstrations."
      },
      {
        "step": 4,
        "title": "Practical Implementation",
        "description": "Hands-on labs and assignments."
      },
      {
        "step": 5,
        "title": "Evaluation & Feedback",
        "description": "Regular assessments and progress tracking."
      },
      {
        "step": 6,
        "title": "Certification & Placement Support",
        "description": "Recognition and career guidance."
      }
    ]
  },
  "technologies": {
    "title": "Tools, Platforms & Technologies Used",
    "description": "We train participants using industry-standard tools and environments.",
    "categories": [
      {
        "category": "Programming & Frameworks",
        "tools": ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
      },
      {
        "category": "Data Handling",
        "tools": ["Pandas", "NumPy", "SQL"]
      },
      {
        "category": "Visualization",
        "tools": ["Matplotlib", "Seaborn", "Power BI"]
      },
      {
        "category": "Cloud & Deployment",
        "tools": ["AWS", "Google Cloud", "Azure"]
      },
      {
        "category": "Collaboration",
        "tools": ["GitHub", "Jupyter Notebook", "VS Code"]
      }
    ]
  },
  "pricingModels": {
    "title": "Training Models & Delivery Options",
    "description": "We offer flexible learning formats.",
    "models": [
      {
        "icon": "🔹",
        "title": "Classroom Training",
        "description": "Instructor-led in-person sessions."
      },
      {
        "icon": "🔹",
        "title": "Online Live Programs",
        "description": "Virtual classes with interactive support."
      },
      {
        "icon": "🔹",
        "title": "Corporate Bootcamps",
        "description": "On-site enterprise training."
      },
      {
        "icon": "🔹",
        "title": "Self-Paced Learning",
        "description": "Recorded modules with mentorship."
      }
    ]
  },
  "clientAchievements": {
    "title": "Success Stories & Outcomes",
    "description": "Our training has empowered individuals and organizations to achieve significant milestones. Some of our success stories include",
    "achievements": [
     "Placement in leading companies", "Career growth and promotions",
      "Successful project deployments",
      "Recognition in technical communities"
    ],
    "note": "We measure success through real-world achievements."
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "Who can join these programs?",
        "answer": "Students, professionals, and business teams can enroll."
      },
      {
        "question": "Are certifications provided?",
        "answer": "Yes, participants receive recognized certificates."
      },
      {
        "question": "Do you offer beginner-friendly courses?",
        "answer": "Yes, we provide entry-level and advanced programs."
      },
      {
        "question": "Can companies request customized training?",
        "answer": "Absolutely. We design tailored workshops."
      },
      {
        "question": "Is placement assistance available?",
        "answer": "Yes, we provide career guidance and interview support."
      }
    ]
  },
    cta: {
      primary: { label: "Move to Cloud", to: "/contact" },
      secondary: { label: "Hosting Plans", to: "/services" },
    },
    relatedServices: ["it-consulting-digital-transformation", "software-development", "networking-it-infrastructure"],
  },
  {
    slug: "labs-setup-3d-printing-services",
    name: "Labs Setup & 3D Printing Services",
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
    "hero": {
    "headline": "Labs Setup & 3D Printing Services – Build Innovation Spaces for Research, Learning & Manufacturing",
    "description": "Creating functional laboratories and fabrication centers is essential for fostering innovation and practical learning. At Genius36 Technologies, we specialize in designing and setting up advanced labs equipped with the latest tools and technologies. Our services include everything from conceptual planning to equipment installation and operational training, ensuring that your lab meets academic, industrial, or research requirements effectively.",
    "subheadline": `Modern laboratories and rapid prototyping facilities play a vital role in driving innovation, experimentation, and product development. Well-equipped technical environments empower students, researchers, engineers, and entrepreneurs to transform ideas into functional solutions. At <strong>Genius36 Technologies,</strong> we provide complete <strong>Labs Setup & 3D Printing Services </strong>to help institutions and organizations create advanced innovation ecosystems.<p>From conceptual planning to equipment installation and operational training, we deliver end-to-end solutions tailored to academic, industrial, and research requirements.</p>`,
    "image": IMAGES.labs3d,
    "imageAlt": "Professional labs setup and 3D printing services - innovation spaces"
  },
  "whyChooseUs": {
    "title": "Why Choose Genius36 Technologies for Lab Infrastructure & Prototyping Solutions?",
    "description": "Developing a functional laboratory and fabrication center requires specialized expertise and systematic execution. Our team ensures every project meets technical standards and long-term usability goals.",
    "features": [
      "Extensive experience in laboratory planning and deployment",
      "Collaboration with leading equipment manufacturers",
      "Customized layouts and workflows",
      "Compliance with safety regulations",
      "Professional installation and testing",
      "Ongoing technical guidance",
      "Cost-effective implementation strategies"
    ],
    "note": "We focus on creating productive environments that encourage experimentation and innovation."
  },
  "services_overview": {"title":"Our Labs Setup & 3D Printing Services"},
  "services": [
    {
      "id": 1,
      "title": "STEM & Innovation Lab Development",
      "description": "We design and implement science, technology, engineering, and mathematics learning spaces for educational institutions.",
      "features": [
        "Robotics stations",
        "Electronics workbenches",
        "Coding platforms",
        "Sensor kits",
        "Interactive learning tools"
      ]
    },
    {
      "id": 2,
      "title": "Research & Testing Facility Establishment",
      "description": "We set up advanced research environments for universities and industrial organizations.",
      "features": [
        "Specialized equipment sourcing",
        "Controlled environment design",
        "Calibration systems",
        "Safety mechanisms",
        "Documentation support"
      ]
    },
    {
      "id": 3,
      "title": "Maker Space & Fabrication Lab Creation",
      "description": "We build creative hubs that encourage hands-on experimentation and product development.",
      "features": [
        "CNC machines",
        "Laser cutters",
        "Electronics assembly zones",
        "Tool storage systems",
        "Safety enclosures"
      ]
    },
    {
      "id": 4,
      "title": "3D Printing & Rapid Prototyping Solutions",
      "description": "We provide professional additive manufacturing services for design validation and product testing.",
      "features": [
        "FDM, SLA, and resin printing",
        "High-precision modeling",
        "Custom material selection",
        "Prototype finishing",
        "Small-batch production"
      ]
    },
    {
      "id": 5,
      "title": "Educational Laboratory Setup",
      "description": "We develop practical learning environments for schools, colleges, and training centers.",
      "features": [
        "Physics, chemistry, and biology labs",
        "Computer laboratories",
        "Electronics practice rooms",
        "Skill development centers"
      ]
    },
    {
      "id": 6,
      "title": "Equipment Installation & Commissioning",
      "description": "We handle safe installation and operational verification of laboratory machinery.",
      "features": [
        "Site inspection",
        "Technical configuration",
        "Performance validation",
        "Safety compliance checks",
        "Handover documentation"
      ]
    },
    {
      "id": 7,
      "title": "Training & Capacity Building Programs",
      "description": "We conduct hands-on training sessions to help users operate equipment effectively.",
      "features": [
        "Machine operation",
        "Maintenance procedures",
        "Troubleshooting techniques",
        "Safety protocols",
        "Workflow optimization"
      ]
    },
    {
      "id": 8,
      "title": "Maintenance & Technical Support Services",
      "description": "We ensure continuous functionality through preventive and corrective services.",
      "features": [
        "Routine inspections",
        "Component replacement",
        "Software updates",
        "Calibration checks",
        "Remote assistance"
      ]
    },
    {
      "id": 9,
      "title": "Customized Laboratory Design & Layout Planning",
      "description": "We create ergonomic and efficient layouts based on space availability and usage requirements.",
      "features": [
        "Workflow efficiency",
        "Ventilation planning",
        "Power management",
        "Safety zoning",
        "Expansion readiness"
      ]
    }
  ],
  "benefits": {
    "title": "How Our Solutions Add Value",
    "description": "Our services help institutions and organizations achieve measurable benefits. You can expect:",
    "points": [
      {
        "icon": "🔬",
        "text": "Enhanced research productivity"
      },
      {
        "icon": "🛠",
        "text": "Improved practical learning outcomes"
      },
      {
        "icon": "🚀",
        "text": "Faster product validation"
      },
      {
        "icon": "💰",
        "text": "Reduced prototyping expenses"
      },
      {
        "icon": "📈",
        "text": "Increased innovation capacity"
      }
    ],
    "note": "We emphasize long-term performance and operational sustainability."
  },
  "methodology": {
    "title": "Our Implementation Methodology",
    "description": "We follow a structured workflow to ensure quality delivery.",
    "steps": [
      {
        "step": 1,
        "title": "Needs Assessment",
        "description": "We analyze objectives, space constraints, and technical requirements."
      },
      {
        "step": 2,
        "title": "Planning & Design",
        "description": "We prepare layout plans, equipment lists, and budgets."
      },
      {
        "step": 3,
        "title": "Procurement & Logistics",
        "description": "We source certified tools and manage transportation."
      },
      {
        "step": 4,
        "title": "Installation & Configuration",
        "description": "We deploy systems and configure settings."
      },
      {
        "step": 5,
        "title": "Testing & Validation",
        "description": "We verify performance, safety, and accuracy."
      },
      {
        "step": 6,
        "title": "Training & Handover",
        "description": "We provide operational training and documentation."
      },
      {
        "step": 7,
        "title": "Post-Setup Support",
        "description": "We offer continuous technical assistance."
      }
    ]
  },
  "technologies": {
    "title": "Technologies, Tools & Equipment",
    "description": "We work with reliable tools and modern fabrication technologies.",
    "categories": [
      {
        "category": "Prototyping Equipment",
        "tools": ["FDM Printers", "SLA Printers", "Resin Printers", "CNC Machines"]
      },
      {
        "category": "Electronics & Robotics",
        "tools": ["Microcontrollers", "Sensors", "IoT Kits", "PLC Systems"]
      },
      {
        "category": "Design Software",
        "tools": ["AutoCAD", "SolidWorks", "Fusion 360", "Blender"]
      },
      {
        "category": "Safety & Utilities",
        "tools": ["Fire Suppression Systems", "Ventilation Units", "UPS Systems"]
      }
    ]
  },
  "pricingModels": {
    "title": "Engagement & Service Models",
    "description": "We offer flexible service structures based on project scope.",
    "models": [
      {
        "icon": "🔹",
        "title": "Turnkey Implementation",
        "description": "Complete end-to-end delivery."
      },
      {
        "icon": "🔹",
        "title": "Modular Setup",
        "description": "Phase-wise deployment."
      },
      {
        "icon": "🔹",
        "title": "Consultancy-Based",
        "description": "Advisory and planning support."
      }
    ]
  },
  "clientAchievements": {
    "title": "Project Outcomes & Success Stories",
    "description": "Our clients have achieved significant milestones through our lab setup and prototyping services. Some of the outcomes include",
    "achievements": [
        "Improved research capabilities", 
        "Higher student engagement",
        "Faster product development cycles",
        "Better equipment utilization"
      
    ],
    "note": "We focus on delivering measurable results."
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "Do you provide turnkey laboratory setup?",
        "answer": "Yes, we deliver complete end-to-end solutions."
      },
      {
        "question": "Can you customize lab designs?",
        "answer": "Absolutely. Each layout is tailored."
      },
      {
        "question": "Do you supply equipment?",
        "answer": "Yes, we handle procurement and installation."
      },
      {
        "question": "Is training included?",
        "answer": "Yes, operational training is part of our service."
      },
      {
        "question": "Do you offer maintenance contracts?",
        "answer": "Yes, long-term support options are available."
      }
    ]
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
  lottieKey: "Datarecovery",
  cardImage: servicesImages.datarecovery,
  seo: {
    metaTitle: "Professional Data Recovery Services in India | Hard Drive & RAID Recovery",
    metaDescription: "Secure and reliable data recovery services in India. We recover data from damaged hard drives, SSDs, RAIDs, and mobile devices. High success rate & 100% confidentiality.",
    focusKeywords: [
      "data recovery services in india",
      "hard drive data recovery",
      "raid recovery services",
      "database recovery company",
      "secure data retrieval services",
      "crashed hard disk recovery"
    ]
  },
  breadcrumb: "Data Recovery Services",
  "hero": {
    "headline": "Professional Data Recovery Services – Retrieve Your Critical Lost Data Securely",
    "description": "Experiencing data loss due to hardware failure, accidental deletion, or a cyberattack? Genius36 Technologies provides industry-leading data recovery services to restore your valuable information. With specialized labs and advanced forensic tools, we handle everything from simple file recovery to complex server RAID reconstruction, ensuring maximum data safety and privacy.",
    "subheadline": "Data loss can strike at any time, threatening business continuity and personal memories. Whether it’s a corrupted drive, a formatted system, or a natural disaster, the need to recover information is urgent.<br><br>At <strong>Genius36 Technologies</strong>, we offer specialized <strong>Data Recovery Services</strong> designed to retrieve data from damaged, failed, or inaccessible storage media. Our 'No Data, No Fee' policy and strict non-disclosure agreements ensure a risk-free and secure experience for our clients.",
    "image": IMAGES.datarecovery,
    "imageAlt": "Professional data recovery lab with engineers working on hard drives and storage systems"
  },
  "whyChooseUs": {
    "title": "Why Choose Genius36 Technologies for Data Recovery?",
    "description": "Data recovery requires precision, expertise, and the right environment. We go beyond standard software fixes to ensure the highest chance of successful retrieval.",
    "features": [
      "Class 100 Cleanroom lab standards",
      "High success rate on complex cases",
      "Strict confidentiality & NDAs",
      " 'No Data, No Fee' guarantee",
      "Quick turnaround times",
      "Expertise in encrypted drives",
      "24/7 emergency support available"
    ]
  },
  "services_overview": { "title": "Our Comprehensive Data Recovery Solutions" },
  "services": [
    {
      "id": 1,
      "title": "Hard Drive Recovery (HDD & SSD)",
      "description": "We recover data from all types of hard drives, including SATA, SAS, SSD, and SCSI, facing mechanical or logical failures.",
      "features": [
        "Head crash repair",
        "Bad sector management",
        "SSD chip-off recovery",
        "Firmware corruption fixes",
        "PCB board repair"
      ]
    },
    {
      "id": 2,
      "title": "RAID & NAS Server Recovery",
      "description": "Specialized reconstruction for failed RAID arrays (0, 1, 5, 6, 10) and Network Attached Storage devices.",
      "features": [
        "Multiple drive failure handling",
        "RAID controller failure recovery",
        "Re-striping and reconstruction",
        "NAS file system repair",
        "VMware/Hyper-V recovery"
      ]
    },
    {
      "id": 3,
      "title": "Database & Email Recovery",
      "description": "Repair and extraction of data from corrupted database files and email servers for business continuity.",
      "features": [
        "SQL/Oracle DB repair",
        "Exchange/Outlook recovery",
        "Table row extraction",
        "Corrupted file header repair",
        "Migration error rollback"
      ]
    },
    {
      "id": 4,
      "title": "Mobile & Device Recovery",
      "description": "Retrieving lost photos, contacts, and messages from smartphones, tablets, and flash storage.",
      "features": [
        "Android & iOS recovery",
        "Water damage restoration",
        "Locked/Disabled device access",
        "SD Card recovery",
        "Internal chip extraction"
      ]
    },
    {
      "id": 5,
      "title": "Logical Data Recovery",
      "description": "Software-based recovery for data lost due to formatting, deletion, viruses, or partition errors.",
      "features": [
        "Accidental deletion recovery",
        "Formatted drive restoration",
        "Virus/malware removal",
        "Partition table recovery",
        "Raw file extraction"
      ]
    },
    {
      "id": 6,
      "title": "Tape Data Recovery",
      "description": "Restoring data from damaged or degraded magnetic tapes used for archival backups.",
      "features": [
        "LTO, DLT, DAT formats",
        "Tape splicing and repair",
        "Mold and water damage treatment",
        "Legacy system migration",
        "Data compression decompression"
      ]
    },
    {
      "id": 7,
      "title": "Forensic Data Recovery",
      "description": "Legal-grade data extraction and preservation for investigations and e-discovery.",
      "features": [
        "Chain of custody maintenance",
        "Deleted artifact recovery",
        "Hash value verification",
        "Court-admissible reports",
        "Fraud investigation support"
      ]
    },
    {
      "id": 8,
      "title": "Encrypted Drive Recovery",
      "description": "Unlocking and recovering data from BitLocker, FileVault, and other encrypted storage volumes.",
      "features": [
        "Password recovery assistance",
        "Key damage recovery",
        "Corrupted decryption fix",
        "Safe data extraction",
        "Volume remounting"
      ]
    },
    {
      "id": 9,
      "title": "Data Backup Solutions",
      "description": "Proactive setup to prevent future data loss through automated and secure backup strategies.",
      "features": [
        "Cloud backup integration",
        "Hybrid backup strategies",
        "Disaster recovery planning (DRP)",
        "Automated scheduling",
        "Redundancy setup"
      ]
    }
  ],
  "benefits": {
    "title": "Business Benefits of Professional Recovery",
    "description": "Losing data can be catastrophic. Our services provide a safety net that ensures your operations keep running.",
    "points": [
      {
        "icon": "🛡️",
        "text": "Minimized operational downtime"
      },
      {
        "icon": "🔒",
        "text": "Guaranteed data confidentiality"
      },
      {
        "icon": "💰",
        "text": "Cost savings vs data recreation"
      },
      {
        "icon": "⚖️",
        "text": "Compliance with legal requirements"
      },
      {
        "icon": "🧠",
        "text": "Peace of mind"
      }
    ]
  },
  "industries": {
    "title": "Industries We Serve",
    "description": "Data is critical across all sectors. We have experience recovering sensitive information for diverse industries.",
    "list": [
      "Banking & Finance",
      "Healthcare & Medical",
      "Legal Services",
      "IT & Software",
      "Government",
      "Education",
      "Media & Entertainment",
      "E-Commerce",
      "Manufacturing",
      "Telecommunications"
    ]
  },
  "methodology": {
    "title": "Our Recovery Process",
    "description": "We use a systematic, forensic approach to maximize the chances of recovering your data.",
    "steps": [
      {
        "step": 1,
        "title": "Free Media Evaluation",
        "description": "We analyze the device to determine the failure type and recovery potential."
      },
      {
        "step": 2,
        "title": "Quote & Approval",
        "description": "We provide a fixed-price quote and await your authorization to proceed."
      },
      {
        "step": 3,
        "title": "Imaging & Cloning",
        "description": "We create a sector-by-sector copy of the drive to prevent further damage."
      },
      {
        "step": 4,
        "title": "Data Extraction",
        "description": "Using specialized tools, we extract raw data from the clone."
      },
      {
        "step": 5,
        "title": "Verification & Integrity Check",
        "description": "We verify file integrity to ensure recovered data is usable."
      },
      {
        "step": 6,
        "title": "Secure Transfer",
        "description": "Recovered data is transferred to a new secure storage device."
      },
      {
        "step": 7,
        "title": "Return & Data Destruction",
        "description": "We return the recovered data and securely wipe the original failed media if requested."
      }
    ]
  },
  "technologies": {
    "title": "Tools & Technologies We Use",
    "description": "We utilize state-of-the-art hardware and software for successful recovery.",
    "categories": [
      {
        "category": "Hardware Tools",
        "tools": ["PC-3000", "DeepSpar", "Head Combs", "Soldering Stations", "Write Blockers"]
      },
      {
        "category": "Software Utilities",
        "tools": ["R-Studio", "UFS Explorer", "WinHex", "Encase", "FTK Imager"]
      },
      {
        "category": "Cleanroom Standards",
        "tools": ["Class 100 Cleanroom", "ESD Protection", "Anti-static mats"]
      },
      {
        "category": "Encryption",
        "tools": ["BitLocker Toolkits", "OpenSSL", "Forensic Decryption"]
      },
      {
        "category": "Storage Target",
        "tools": ["External HDDs", "SSDs", "NAS Arrays", "Cloud Secure Storage"]
      }
    ]
  },
  "pricingModels": {
    "title": "Service Tiers",
    "description": "We offer transparent pricing based on the complexity and urgency of the recovery.",
    "models": [
      {
        "icon": "🔹",
        "title": "Standard Recovery",
        "description": "For logical failures and non-physical issues (5-7 business days)."
      },
      {
        "icon": "🔹",
        "title": "Priority Recovery",
        "description": "Expedited service for critical business needs (24-48 hours)."
      },
      {
        "icon": "🔹",
        "title": "Emergency Recovery",
        "description": "24/7 dedicated engineering for immediate disaster response."
      }
    ]
  },
  "clientAchievements": {
    "title": "Client Success Stories",
    "description": "We have recovered millions of gigabytes of data for satisfied clients.",
    "achievements": [
      "Saved critical financial records",
      "Restored family photo archives",
      "Recovered multi-terabyte RAID servers",
      "Helped legal teams win cases"
    ]
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "What is the success rate of data recovery?",
        "answer": "Success rates vary, but for logical failures, it is above 95%. For physical damage, it depends on the severity of the drive condition."
      },
      {
        "question": "Do you charge if data cannot be recovered?",
        "answer": "No, we operate on a 'No Data, No Fee' policy for most standard recovery cases."
      },
      {
        "question": "Is my data kept confidential?",
        "answer": "Absolutely. We adhere to strict NDAs and data privacy protocols to ensure your information remains secure."
      },
      {
        "question": "How long does the recovery process take?",
        "answer": "Standard services typically take 3-5 business days, while emergency services can be completed within 24 hours."
      },
      {
        "question": "Should I run data recovery software myself?",
        "answer": "If data is critical, avoid DIY software as it can overwrite data. Professional diagnosis is recommended for physical failures."
      }
    ]
  },
  cta: {
    primary: { "label": "Get Free Quote", "to": "/contact" },
    secondary: { "label": "Call Expert Now", "to": "/contact" }
  },
  relatedServices: ["it-infrastructure-support", "cloud-solutions", "cyber-security-services"]
  }

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
