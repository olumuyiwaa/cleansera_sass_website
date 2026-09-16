import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "How It Works",
  description:
      "From setting up your business to getting paid — how a job moves through CleanSera, phase by phase, designed so ownership stays with you.",
  path: "/how-it-works",
});

export default function HowItWorksLayout({ children }) {
  return children;
}
