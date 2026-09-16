// Central place for the handful of facts every page's metadata needs, so
// the site URL and default social-share copy live in one spot instead of
// being retyped in every route's layout.js.

export const SITE_NAME = "CleanSera";

// No trailing slash. Set NEXT_PUBLIC_SITE_URL in the real deployment to the
// actual production domain — this default is a placeholder, and any page
// left pointing at it will leak an unreal canonical/OG URL to search
// engines and social previews.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://cleansera.com";

export const DEFAULT_DESCRIPTION =
    "Scheduling, dispatch, and a branded booking site for cleaning businesses. Your staff, your customers, your brand — run entirely by you.";

/**
 * Builds a full Next.js Metadata object for one route, so every page gets
 * a real, unique title/description/canonical/OG/Twitter block instead of
 * silently inheriting the homepage's. `path` is the route's path starting
 * with "/", e.g. "/pricing" or "" for the homepage.
 */
export function buildMetadata({ title, description, path = "" }) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
