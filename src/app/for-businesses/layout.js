import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "For Cleaning Businesses — Own Your Booking Flow",
  description:
      "Run your cleaning business on your own branded booking site, roster, and dispatch — without a marketplace taking a cut or owning your customer relationships.",
  path: "/for-businesses",
});

export default function ForBusinessesLayout({ children }) {
  return children;
}
