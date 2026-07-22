import type { MetadataRoute } from "next";

const BASE_URL = "https://vikalp.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },

    // Practice Areas

    {
      url: `${BASE_URL}/practice-areas/civil-litigation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/practice-areas/consumer-disputes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/practice-areas/corporate-commercial`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/practice-areas/criminal-law`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/practice-areas/family-law`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/practice-areas/property-real-estate`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Static Pages

    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${BASE_URL}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${BASE_URL}/careers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}