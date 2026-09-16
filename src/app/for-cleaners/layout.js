import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "For Cleaners — Your Jobs, Your Route, Your Day",
  description:
      "If the business you work for uses CleanSera, this is where your schedule lives: today's jobs, checklists, service notes, and a direct line to your dispatcher.",
  path: "/for-cleaners",
});

export default function ForCleanersLayout({ children }) {
  return children;
}
