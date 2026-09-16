import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Support",
  description: "Get help with CleanSera — browse common questions or contact our support team directly.",
  path: "/support",
});

export default function SupportLayout({ children }) {
  return children;
}
