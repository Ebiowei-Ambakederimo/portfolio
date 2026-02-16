/**
 * Canonical base URL for the site. Used for metadata alternates.canonical, sitemap, and robots.
 * Prefer NEXT_PUBLIC_SITE_URL in production so you can change it per environment.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ilui.vercel.app";
