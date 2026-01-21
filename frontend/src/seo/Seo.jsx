import { useEffect } from "react";

export default function Seo({
  title = "Genius36 Technologies | IT Solutions",
  description = "Pan-India IT solutions partner delivering web development, software solutions, IT training, cloud and infrastructure services.",
  keywords = "IT company, web development, software solutions, IT training, cloud services, networking, cybersecurity",
  url = "https://genius36.com",
  image = "https://genius36.com/logo.png",
}) {
  useEffect(() => {
    /* =======================
       BASIC META
    ======================= */
    document.title = title;

    const setMeta = (attr, key, content) => {
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);

    /* =======================
       OPEN GRAPH (FB / LINKEDIN)
    ======================= */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    /* =======================
       TWITTER CARD
    ======================= */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

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
      name: "Genius36 Technologies",
      url: "https://genius36.com",
      logo: "https://genius36.com/logo.png",
      description:
        "Pan-India IT solutions company providing web development, software solutions, cloud, networking, cybersecurity, and IT training.",
      foundingDate: "2014",
      sameAs: [
        "https://www.linkedin.com/company/genius36",
        "https://www.instagram.com/genius36",
        "https://twitter.com/genius36",
      ],
      knowsAbout: [
        "Web Development",
        "Software Development",
        "IT Infrastructure",
        "Cloud Solutions",
        "Cyber Security",
        "IT Training",
      ],
      memberOf: [
        { "@type": "Organization", name: "Google" },
        { "@type": "Organization", name: "Microsoft" },
        { "@type": "Organization", name: "Amazon" },
        { "@type": "Organization", name: "IBM" },
        { "@type": "Organization", name: "Infosys" },
      ],
    });
  }, [title, description, keywords, url, image]);

  return null;
}
