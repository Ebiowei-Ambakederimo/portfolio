import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1},
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/works`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // {
        //     url: `${baseUrl}/`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.9,
        // },
    ];

}