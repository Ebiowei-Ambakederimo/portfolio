import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "";

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