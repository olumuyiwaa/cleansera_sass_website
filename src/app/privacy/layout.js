import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How CleanSera collects, uses, and protects data for businesses, their customers, and their cleaners.",
  path: "/privacy",
});

export default function PrivacyLayout({ children }) {
  return children;
}
