import { useEffect } from "react";

export default function Seo({
  title = "Genius36 | Trusted IT, Digital Marketing & Software Solutions.",
  description = "Genius36 offers the best IT solutions, website design, software development, and digital marketing services in Raipur, Bhilai, and Bilaspur in 2026",
  keywords = "IT company, web development, software solutions, IT training, cloud services, networking, cybersecurity",
  url,
  image = "/G_new.svg",
  author = "Genius36 Technologies India LLP",
  robots = "index, follow",
  children,
}) {
  useEffect(() => {
    document.title = title;

    const absoluteUrl = (value) => {
      if (!value) return "";
      if (/^https?:\/\//i.test(value)) return value;
      return `${window.location.origin}${value.startsWith("/") ? "" : "/"}${value}`;
    };

    const resolvedUrl = url || `${window.location.origin}${window.location.pathname}`;
    const resolvedImage = absoluteUrl(image);

    const setMeta = (attr, key, content) => {
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    /* =======================
       BASIC META
    ======================= */
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "author", author);
    setMeta("name", "robots", robots);
    setMeta("name", "theme-color", "#0d6efd");

    /* =======================
       CANONICAL
    ======================= */
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", resolvedUrl);

    /* =======================
       OPEN GRAPH
    ======================= */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", resolvedUrl);
    setMeta("property", "og:image", resolvedImage);
    setMeta("property", "og:site_name", "Genius36");

    /* =======================
       TWITTER
    ======================= */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", resolvedImage);
    setMeta("name", "twitter:site", "@genius36");

    /* =======================
       ORGANIZATION SCHEMA
    ======================= */
    const schemaId = "organization-schema";

    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = schemaId;
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://genius36.com/#organization",
      name: "Genius36 Technologies India LLP",
      url: "https://genius36.com",
      logo: "https://genius36.com/G_new.svg",
      description: description,
      foundingDate: "2014",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-82005-93901",
        contactType: "sales",
        areaServed: "IN"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.linkedin.com/company/genius36",
        "https://www.facebook.com/genius36",
        "https://x.com/genius36",
      ],
      knowsAbout: [
        "Web Development",
        "Software Development",
        "IT Infrastructure",
        "Cloud Solutions",
        "Cyber Security",
        "IT Training",
        "Digital Marketing",
        "SEO Services",
        "E-commerce",
        "3D Printing",
        "AI/ML Training"
      ],
    });

    // Add LocalBusiness schema
    const localBusinessId = "localbusiness-schema";
    let localSchemaScript = document.getElementById(localBusinessId);
    if (!localSchemaScript) {
      localSchemaScript = document.createElement("script");
      localSchemaScript.type = "application/ld+json";
      localSchemaScript.id = localBusinessId;
      document.head.appendChild(localSchemaScript);
    }

    localSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://genius36.com/#localbusiness",
      name: "Genius36 Technologies India LLP",
      url: "https://genius36.com",
      telephone: "+91-82005-93901",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "20.5937",
        longitude: "78.9629"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      },
      priceRange: "$$"
    });

    // Add WebSite schema
    const webSiteId = "website-schema";
    let webSiteSchemaScript = document.getElementById(webSiteId);
    if (!webSiteSchemaScript) {
      webSiteSchemaScript = document.createElement("script");
      webSiteSchemaScript.type = "application/ld+json";
      webSiteSchemaScript.id = webSiteId;
      document.head.appendChild(webSiteSchemaScript);
    }

    webSiteSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://genius36.com/#website",
      url: "https://genius36.com",
      name: "Genius36 Technologies",
      description: "Leading IT Solutions Provider in India - Web Development, Software Training, Digital Marketing, Cloud Solutions",
      publisher: {
        "@id": "https://genius36.com/#organization"
      }
    });
  }, [title, description, keywords, url, image, author, robots]);

  return children || null;
}
