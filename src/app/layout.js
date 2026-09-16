import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from "@/lib/siteConfig";

export const metadata = {
  // Lets every route's relative OG/canonical URLs resolve correctly, and
  // gives next/og's generated opengraph-image an absolute URL to serve.
  metadataBase: new URL(SITE_URL),
  // Route layouts pass a plain string title (e.g. "Pricing"), which this
  // template turns into "Pricing | CleanSera" — the previous setup had no
  // template at all, so every page rendered the exact same title.
  title: {
    default: `${SITE_NAME} — Software for cleaning businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Organization + SoftwareApplication structured data, present on every
// page since it describes the business/product as a whole rather than
// any one route. Helps eligibility for rich results (sitelinks, knowledge
// panel) on branded searches like "CleanSera reviews" or "CleanSera pricing".
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "49",
        highPrice: "199",
        offerCount: "3",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
