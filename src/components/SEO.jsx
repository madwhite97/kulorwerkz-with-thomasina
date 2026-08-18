import { useEffect } from "react";

export default function SEO({
    title,
    description,
    canonical,
    type = "website",
}) {
    useEffect(() => {
        document.title = title;

        const setMeta = (attribute, value, content) => {
            let tag = document.querySelector(
                `meta[${attribute}="${value}"]`
            );

            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute(attribute, value);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        };

        const setCanonical = (url) => {
            let tag = document.querySelector(
                'link[rel="canonical"]'
            );

            if (!tag) {
                tag = document.createElement("link");
                tag.setAttribute("rel", "canonical");
                document.head.appendChild(tag);
            }

            tag.setAttribute("href", url);
        };

        const setMetaProperty = (property, content) => {
            setMeta("property", property, content);
        };

        const setMetaName = (name, content) => {
            setMeta("name", name, content);
        };

        setMetaName("description", description);

        setCanonical(canonical);

        setMetaProperty("og:title", title);

        setMetaProperty(
            "og:description",
            description
        );

        setMetaProperty(
            "og:url",
            canonical
        );

        setMetaProperty(
            "og:type",
            type
        );

        setMetaProperty(
            "og:site_name",
            "Kulorwerkz with Thomasina"
        );

        setMetaProperty(
            "og:image",
            "https://kulorwerkz.com/images/kulorwerkz-og.jpg"
        );

        setMetaProperty(
            "og:image:width",
            "1200"
        );

        setMetaProperty(
            "og:image:height",
            "630"
        );
    }, [title, description, canonical, type]);

    return null;
}