/**
 * Meta Tags Writer Library
 * Generates HTML meta tags for SEO, Open Graph, Twitter, and more.
 *
 * Author: Alex Stevovich
 * License: MIT
 */

/** Configuration options */
export interface ConfigOptions {
    /** Determines whether generated meta tags should be formatted with new lines (default: true). */
    useNewLineBetweenEntries: boolean;
}

/** Global configuration */
export declare const Config: ConfigOptions;

/** Common interface for all meta writers */
export interface MetaWriter {
    /** Generates the meta tags as a string */
    write(): string;
}

/** SEO Meta Writer */
export declare class SEOMetaTags implements MetaWriter {
    title?: string;
    description?: string;
    keywords?: string;
    robots?: string;
    googlebot?: string;
    bingbot?: string;
    canonical?: string;
    write(): string;
}

/** Open Graph Meta Writer */
export declare class OpenGraphMetaTags implements MetaWriter {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type: string;
    write(): string;
}

/** Twitter Meta Writer */
export declare class TwitterMetaTags implements MetaWriter {
    title?: string;
    description?: string;
    image?: string;
    card: string;
    write(): string;
}

/** Page Meta Writer */
export declare class PageMetaTags implements MetaWriter {
    charset: string;
    viewport: string;
    themeColor?: string;
    write(): string;
}

/** Options for the `write()` method */
export interface WriteOptions {
    /** Whether to use new lines in the generated output (default: false). */
    newLine?: boolean;
}

/** Common Meta Tags Writer (combines all writers) */
export declare class CommonMetaTags {
    page: PageMetaTags;
    seo: SEOMetaTags;
    og: OpenGraphMetaTags;
    twitter: TwitterMetaTags;
    
    /** Sets the title across all meta sections */
    setTitleForAll(title: string): void;

    /** Sets the description across all meta sections */
    setDescriptionForAll(description: string): void;

    /** Sets the preview image across OpenGraph & Twitter */
    setImageForAll(imageUrl: string): void;

    /** Generates and returns all combined meta tags */
    write(options?: WriteOptions): string;
}

/** Default export for CJS & ESM compatibility */
declare const _default: {
    Config: typeof Config;
    CommonMetaTags: typeof CommonMetaTags;
    SEOMetaTags: typeof SEOMetaTags;
    OpenGraphMetaTags: typeof OpenGraphMetaTags;
    TwitterMetaTags: typeof TwitterMetaTags;
    PageMetaTags: typeof PageMetaTags;
};
export default _default;
