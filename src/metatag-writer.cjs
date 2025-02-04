/**
 * Meta Writer Library (CommonJS Version)
 * 
 * A lightweight, modular, and professional-grade utility for generating HTML meta tags.
 * Supports SEO, Open Graph (Facebook, LinkedIn, Discord), and Twitter meta.
 * 
 * Fully modular (use individual writers or the full CommonMetaWriter)
 * Supports global formatting settings via GlobalConfig
 * Provides clear and well-structured API methods
 * Designed for server-side rendering (SSR) or static site generation (SSG)
 * 
 * Author: Alex Stevovich
 * License: MIT
 */

// Global Configuration
const GlobalConfig = {
    useNewLineBetweenEntries: true,
};

// SEO Meta Writer
class SEOMetaWriter {
    constructor() {
        this.useNewLineBetweenEntries = GlobalConfig.useNewLineBetweenEntries;
        this.title = undefined;
        this.description = undefined;
        this.keywords = undefined;
        this.robots = undefined;
        this.googlebot = undefined;
        this.bingbot = undefined;
        this.canonical = undefined;
    }
    writeTags() {
        const tags = [];
        if (this.title) tags.push(`<title>${this.title}</title>`);
        if (this.description) tags.push(`<meta name="description" content="${this.description}">`);
        if (this.keywords) tags.push(`<meta name="keywords" content="${this.keywords}">`);
        if (this.robots) tags.push(`<meta name="robots" content="${this.robots}">`);
        if (this.googlebot) tags.push(`<meta name="googlebot" content="${this.googlebot}">`);
        if (this.bingbot) tags.push(`<meta name="bingbot" content="${this.bingbot}">`);
        if (this.canonical) tags.push(`<link rel="canonical" href="${this.canonical}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Open Graph Meta Writer
class OpenGraphMetaWriter {
    constructor() {
        this.useNewLineBetweenEntries = GlobalConfig.useNewLineBetweenEntries;
        this.ogTitle = undefined;
        this.ogDescription = undefined;
        this.ogImage = undefined;
        this.ogUrl = undefined;
        this.ogType = "website";
    }
    writeTags() {
        const tags = [];
        if (this.ogTitle) tags.push(`<meta property="og:title" content="${this.ogTitle}">`);
        if (this.ogDescription) tags.push(`<meta property="og:description" content="${this.ogDescription}">`);
        if (this.ogImage) tags.push(`<meta property="og:image" content="${this.ogImage}">`);
        if (this.ogUrl) tags.push(`<meta property="og:url" content="${this.ogUrl}">`);
        if (this.ogType) tags.push(`<meta property="og:type" content="${this.ogType}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Twitter Meta Writer
class TwitterMetaWriter {
    constructor() {
        this.useNewLineBetweenEntries = GlobalConfig.useNewLineBetweenEntries;
        this.twitterTitle = undefined;
        this.twitterDescription = undefined;
        this.twitterImage = undefined;
        this.twitterCard = "summary_large_image";
    }
    writeTags() {
        const tags = [];
        if (this.twitterCard) tags.push(`<meta name="twitter:card" content="${this.twitterCard}">`);
        if (this.twitterTitle) tags.push(`<meta name="twitter:title" content="${this.twitterTitle}">`);
        if (this.twitterDescription) tags.push(`<meta name="twitter:description" content="${this.twitterDescription}">`);
        if (this.twitterImage) tags.push(`<meta name="twitter:image" content="${this.twitterImage}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Page Meta Writer
class PageMetaWriter {
    constructor() {
        this.useNewLineBetweenEntries = GlobalConfig.useNewLineBetweenEntries;
        this.charset = "UTF-8";
        this.viewport = "width=device-width, initial-scale=1.0";
        this.themeColor = undefined;
    }
    writeTags() {
        const tags = [];
        if (this.charset) tags.push(`<meta charset="${this.charset}">`);
        if (this.viewport) tags.push(`<meta name="viewport" content="${this.viewport}">`);
        if (this.themeColor) tags.push(`<meta name="theme-color" content="${this.themeColor}">`);
        return tags.join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

// Common Meta Writer
class CommonMetaWriter {
    constructor() {
        this.useNewLineBetweenEntries = GlobalConfig.useNewLineBetweenEntries;
        this.page = new PageMetaWriter();
        this.seo = new SEOMetaWriter();
        this.og = new OpenGraphMetaWriter();
        this.twitter = new TwitterMetaWriter();
    }
    setTitleForAll(title) {
        this.seo.title = title;
        this.og.ogTitle = title;
        this.twitter.twitterTitle = title;
    }
    setDescriptionForAll(description) {
        this.seo.description = description;
        this.og.ogDescription = description;
        this.twitter.twitterDescription = description;
    }
    setPreviewImageForAll(imageUrl) {
        this.og.ogImage = imageUrl;
        this.twitter.twitterImage = imageUrl;
    }
    generateMetaTags() {
        return [
            this.page.writeTags(),
            this.seo.writeTags(),
            this.og.writeTags(),
            this.twitter.writeTags()
        ].join(this.useNewLineBetweenEntries ? "\n" : "");
    }
}

module.exports = { CommonMetaWriter, SEOMetaWriter, OpenGraphMetaWriter, TwitterMetaWriter, PageMetaWriter, GlobalConfig };
