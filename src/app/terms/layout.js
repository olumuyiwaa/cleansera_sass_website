import { buildMetadata } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of CleanSera's software and services.",
  path: "/terms",
});

export default function TermsLayout({ children }) {
  return children;
}
