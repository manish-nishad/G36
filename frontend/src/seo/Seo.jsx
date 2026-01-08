import { useEffect } from "react";

export default function Seo({
  title = "Genius36 Technologies | IT Solutions",
  description = "Pan-India IT solutions partner delivering web development, software solutions and IT training.",
  keywords = "IT company, web development, software solutions, IT training",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
  }, [title, description, keywords]);

  return null;
}
