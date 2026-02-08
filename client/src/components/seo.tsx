import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>;
}

export function SEO({
  title,
  description,
  keywords,
  image = "/opengraph.jpg",
  type = "website",
  schema
}: SEOProps) {
  const [location] = useLocation();
  const fullUrl = `https://www.queenswaymobiletyres.co.uk${location}`;
  const siteTitle = `${title} | Queensway Mobile Tyres`;

  useEffect(() => {
    // Update Title
    document.title = siteTitle;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph
    updateMeta("og:title", siteTitle, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:type", type, "property");
    updateMeta("og:url", fullUrl, "property");
    updateMeta("og:image", image, "property");

    // Twitter
    updateMeta("twitter:title", siteTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullUrl);

    // JSON-LD Schema
    if (schema) {
      let script = document.querySelector("script[type='application/ld+json']");
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

  }, [title, description, keywords, image, type, fullUrl, schema, siteTitle]);

  return null;
}