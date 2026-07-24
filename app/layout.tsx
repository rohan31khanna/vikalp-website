
import { Cormorant_Garamond, Inter } from "next/font/google";
import ScrollToTop from "@/components/ui/ScrollToTop";
import DisclaimerGate from "@/components/ui/DisclaimerGate";
import "./globals.css";
import type { Metadata, Viewport } from "next";


const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});


const siteDescription =
  "VIKALP Advocates & Legal Consultants is a full-service law firm in New Delhi providing strategic legal solutions in corporate, civil, property, family law, arbitration, and dispute resolution.";

const siteName = "VIKALP Advocates & Legal Consultants";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,
  
  keywords: [
  "Law Firm",
  "Advocate",
  "Legal Services",
  "Corporate Lawyer",
  "Civil Litigation",
  "Criminal Lawyer",
  "Family Law",
  "Arbitration",
  "Property Law",
  "New Delhi",
  "India",
],

authors: [
  {
    name: siteName,
  },
],

  metadataBase: new URL("https://vikalp.in"),

  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/icon1.png", type: "image/png" },
  ],
  apple: "/apple-icon.png",
},


  alternates: {
    canonical: "/",
  },

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},

 openGraph: {
  title: siteName,
  description: siteDescription,
  url: "/",
  siteName: siteName,
  locale: "en_IN",
  type: "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "VIKALP Advocates & Legal Consultants",
    },
  ],
},

applicationName: siteName,

creator: siteName,

publisher: siteName,

formatDetection: {
  telephone: false,
  email: false,
  address: false,
},
category: "Legal Services",


twitter: {
  card: "summary_large_image",
  title: siteName,
  description: siteDescription,

  images: ["/og-image.png"],
},


};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteName,
  url: "https://vikalp.in",
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${headingFont.variable} ${bodyFont.variable}`}
>
      <body className="min-h-full flex flex-col">

  <DisclaimerGate />

  {children}

  <ScrollToTop />

</body>
    </html>
  );
}
