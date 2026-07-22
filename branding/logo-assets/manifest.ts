import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIKALP Advocates & Legal Consultants",
    short_name: "VIKALP",
    description:
      "Professional legal services in Corporate Law, Civil Litigation, Criminal Law, Arbitration, Family Law, Property Law and Legal Consultancy.",

    start_url: "/",

    display: "standalone",

    background_color: "#0B1F3A",

    theme_color: "#0B1F3A",

    orientation: "portrait",

    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}