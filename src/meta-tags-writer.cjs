/**
 * Meta Writer Library
 * 
 * A lightweight, modular, and professional-grade utility for generating HTML meta tags.
 * Supports SEO, Open Graph (Facebook, LinkedIn, Discord), and Twitter meta.
 * 
 * Fully modular (use individual writers or the full CommonMetaTags)
 * Supports global formatting settings via Config
 * Provides clear and well-structured API methods
 * Designed for server-side rendering (SSR) or static site generation (SSG)
 * 
 * Author: Alex Stevovich
 * License: MIT
 */

// Global Configuration
const Config = {
    /**
     * Determines whether generated meta tags should be formatted with new lines.
     * Set to `false` for a compact single-line format.
     */
    useNewLineBetweenEntries: true,
};

// SEO Meta Writer (Handles Core SEO Metadata)
class SEOMetaTags {
    constructor() {
        this.useNewLineBetweenEntries = Config.useNewLineBetweenEntries;
        this.title = undefined;
        this.description = undefined;
        this.keywords = undefined; // Optional, used by Bing/Yandex but ignored by Google
        this.robots = undefined;
        this.googlebot = undefined; // Under Review: May be removed after further research
        this.bingbot = undefined; // Under Review: May be removed after further research
        this.canonical = undefined;
    }

    /**
     * Generates and returns the HTML meta tags for SEO metadata.
     * @returns {string} - The generated SEO meta tags.
     */
    write() {
        const tags = [];
        if (this.title) tags.push(`<title>${this.title}</title>`);
        if (this.description) tags.push(`<meta name="description" content="${this.description}">`);
        if (this.keywords) tags.push(`<meta name="keywords" content="${this.keywords}">`);
        if (this.robots) tags.push(`<meta name="robots" content="${this.robots}">`);

        // 🚨 Under Review: These might be removed in future updates
        if (this.googlebot) tags.push(`<meta name="googlebot" content="${this.googlebot}">`);
        if (this.bingbot) tags.push(`<meta name="bingbot" content="${this.bingbot}">`);

        if (this.canonical) tags.push(`<link rel="canonical" href="${this.canonical}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Open Graph Meta Writer (Handles Facebook, LinkedIn, Discord Previews)
class OpenGraphMetaTags {
    constructor() {
        this.useNewLineBetweenEntries = Config.useNewLineBetweenEntries;
        this.ogTitle = undefined;
        this.ogDescription = undefined;
        this.ogImage = undefined;
        this.ogUrl = undefined;
        this.ogType = "website";
    }

    /**
     * Generates and returns the HTML meta tags for Open Graph metadata.
     * @returns {string} - The generated Open Graph meta tags.
     */
    write() {
        const tags = [];
        if (this.ogTitle) tags.push(`<meta property="og:title" content="${this.ogTitle}">`);
        if (this.ogDescription) tags.push(`<meta property="og:description" content="${this.ogDescription}">`);
        if (this.ogImage) tags.push(`<meta property="og:image" content="${this.ogImage}">`);
        if (this.ogUrl) tags.push(`<meta property="og:url" content="${this.ogUrl}">`);
        if (this.ogType) tags.push(`<meta property="og:type" content="${this.ogType}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Twitter Meta Writer (Handles Twitter Cards)
class TwitterMetaTags {
    constructor() {
        this.useNewLineBetweenEntries = Config.useNewLineBetweenEntries;
        this.twitterTitle = undefined;
        this.twitterDescription = undefined;
        this.twitterImage = undefined;
        this.twitterCard = "summary_large_image";
    }

    /**
     * Generates and returns the HTML meta tags for Twitter metadata.
     * @returns {string} - The generated Twitter meta tags.
     */
    write() {
        const tags = [];
        if (this.twitterCard) tags.push(`<meta name="twitter:card" content="${this.twitterCard}">`);
        if (this.twitterTitle) tags.push(`<meta name="twitter:title" content="${this.twitterTitle}">`);
        if (this.twitterDescription) tags.push(`<meta name="twitter:description" content="${this.twitterDescription}">`);
        if (this.twitterImage) tags.push(`<meta name="twitter:image" content="${this.twitterImage}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Page Meta Writer (Handles Charset, Viewport, Theme Color)
class PageMetaTags {
    constructor() {
        this.useNewLineBetweenEntries = Config.useNewLineBetweenEntries;
        this.charset = "UTF-8";
        this.viewport = "width=device-width, initial-scale=1.0";
        this.themeColor = undefined;
    }

    /**
     * Generates and returns the HTML meta tags for page-level settings.
     * @returns {string} - The generated page meta tags.
     */
    write() {
        const tags = [];
        if (this.charset) tags.push(`<meta charset="${this.charset}">`);
        if (this.viewport) tags.push(`<meta name="viewport" content="${this.viewport}">`);
        if (this.themeColor) tags.push(`<meta name="theme-color" content="${this.themeColor}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Common Meta Writer (Combines All Meta Writers)
class CommonMetaTags {
    constructor() {
        this.useNewLineBetweenEntries = Config.useNewLineBetweenEntries;
        this.page = new PageMetaTags();
        this.seo = new SEOMetaTags();
        this.og = new OpenGraphMetaTags();
        this.twitter = new TwitterMetaTags();
    }

    /**
     * Sets the title across all meta sections (SEO, OpenGraph, Twitter).
     */
    setTitleForAll(title) {
        this.seo.title = title;
        this.og.ogTitle = title;
        this.twitter.twitterTitle = title;
    }

    /**
     * Sets the description across all meta sections (SEO, OpenGraph, Twitter).
     */
    setDescriptionForAll(description) {
        this.seo.description = description;
        this.og.ogDescription = description;
        this.twitter.twitterDescription = description;
    }

    /**
     * Sets the preview image across OpenGraph & Twitter.
     */
    setPreviewImageForAll(imageUrl) {
        this.og.ogImage = imageUrl;
        this.twitter.twitterImage = imageUrl;
    }

    /**
     * Generates and returns all combined meta tags.
     * @returns {string} - The full set of meta tags.
     */
    write(options = {newLine:false}) {
        return [
            this.page.write(),
            this.seo.write(),
            this.og.write(),
            this.twitter.write()
        ].join(options.newLine ? "\n" : "");
    }
}

module.exports =  { CommonMetaTags, SEOMetaTags, OpenGraphMetaTags, TwitterMetaTags, PageMetaTags, Config };
