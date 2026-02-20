import { useEffect } from "react";

export default function Seo({
  title = "Genius36 | Trusted IT, Digital Marketing & Software Solutions.",
  description = "Delivering cutting-edge IT solutions, software development, and training across India. We provide comprehensive technology solutions tailored to empower your business and educational needs",
  keywords = "IT company, web development, software solutions, IT training, cloud services, networking, cybersecurity",
  url = "https://genius36.com",
  image = "https://genius36.com/logo.png",
  author = "Genius36 Technologies India LLP",
}) {
  useEffect(() => {
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

    /* =======================
       BASIC META
    ======================= */
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "author", author);
    setMeta("name", "robots", "index, follow");
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
    canonical.setAttribute("href", url);

    /* =======================
       OPEN GRAPH
    ======================= */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Genius36");

    /* =======================
       TWITTER
    ======================= */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
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
      name: "Genius36 Technologies",
      url: "https://genius36.com",
      logo: image,
      description: description,
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
    });
  }, [title, description, keywords, url, image, author]);

  return null;
}
