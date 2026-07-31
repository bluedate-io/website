import type { MetadataRoute } from "next";

const BASE_URL = "https://tryren.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cancellation-and-refund-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
