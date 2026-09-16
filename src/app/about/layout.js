import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "About Us",
  description:
      "CleanSera builds for the cleaning business, not around it — software that feels premium and clear, built for real operating needs instead of a generic marketplace.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}
