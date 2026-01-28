import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://portfolio-ilui.vercel.app";

    return {
        rules: [
            {
            userAgent: "*",
            allow: "/",
            disallow: [""]
        },
        {
            userAgent: "Googlebot",
            allow: "/",
            disallow: [""],
        },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    };
}