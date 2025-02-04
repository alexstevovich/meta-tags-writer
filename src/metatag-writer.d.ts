declare module "metatag-writer" {
    /**
     * Global configuration for meta tag generation.
     */
    export const GlobalConfig: {
        /**
         * Determines if meta tags should be formatted with new lines.
         */
        useNewLineBetweenEntries: boolean;
    };

    /**
     * Handles core SEO meta tags.
     */
    export class SEOMetaWriter {
        title?: string;
        description?: string;
        keywords?: string;
        robots?: string;
        googlebot?: string;
        bingbot?: string;
        canonical?: string;
        writeTags(): string;
    }

    /**
     * Handles Open Graph meta tags (for Facebook, LinkedIn, Discord, etc.).
     */
    export class OpenGraphMetaWriter {
        ogTitle?: string;
        ogDescription?: string;
        ogImage?: string;
        ogUrl?: string;
        ogType?: string;
        writeTags(): string;
    }

    /**
     * Handles Twitter meta tags.
     */
    export class TwitterMetaWriter {
        twitterTitle?: string;
        twitterDescription?: string;
        twitterImage?: string;
        twitterCard?: string;
        writeTags(): string;
    }

    /**
     * Handles page-specific meta tags (charset, viewport, theme color).
     */
    export class PageMetaWriter {
        charset?: string;
        viewport?: string;
        themeColor?: string;
        writeTags(): string;
    }

    /**
     * Combines all meta writers for unified management.
     */
    export class CommonMetaWriter {
        page: PageMetaWriter;
        seo: SEOMetaWriter;
        og: OpenGraphMetaWriter;
        twitter: TwitterMetaWriter;
        
        setTitleForAll(title: string): void;
        setDescriptionForAll(description: string): void;
        setPreviewImageForAll(imageUrl: string): void;
        generateMetaTags(): string;
    }
}
