import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Pricing — Flat monthly plans, no commission",
  description:
      "CleanSera is a subscription, not a marketplace. Flat monthly plans from $49–$199 based on cleaner count — no cut of your bookings, ever.",
  path: "/pricing",
});

export default function PricingLayout({ children }) {
  return children;
}
