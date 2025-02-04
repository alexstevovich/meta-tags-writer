# MetaTag Writer

## Overview
MetaTag Writer is a lightweight and modular library for generating HTML meta tags for SEO, Open Graph (Facebook, LinkedIn, Discord), and Twitter Cards. This package is designed for server-side rendering (SSR) or static site generation (SSG) and allows structured and programmatic meta tag management.

## Features
- **Modular Structure**: Use individual meta writers or the full `CommonMetaWriter`.
- **SEO Optimization**: Supports core SEO tags like title, description, robots, and canonical links.
- **Social Media Previews**: Generates Open Graph (`og:`) and Twitter (`twitter:`) meta tags.
- **Global Configuration**: Adjust output format using `GlobalConfig`.
- **SSR & SSG Compatible**: Designed for server-side rendering or static HTML generation.

## Installation
```sh
npm install metatag-writer
```

## Usage
### Importing the Library
```javascript
import { CommonMetaWriter } from 'metatag-writer';

const metaWriter = new CommonMetaWriter();
metaWriter.setTitleForAll("Example Page");
metaWriter.setDescriptionForAll("This is an example description.");
metaWriter.setPreviewImageForAll("https://example.com/image.jpg");

console.log(metaWriter.generateMetaTags());
```

### Example Output
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Example Page</title>
<meta name="description" content="This is an example description.">
<meta property="og:title" content="Example Page">
<meta property="og:description" content="This is an example description.">
<meta property="og:image" content="https://example.com/image.jpg">
<meta name="twitter:title" content="Example Page">
<meta name="twitter:description" content="This is an example description.">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

## API Reference
### Global Configuration
```javascript
import { GlobalConfig } from 'metatag-writer';
GlobalConfig.useNewLineBetweenEntries = false;
```

### Class: `SEOMetaWriter`
Handles core SEO metadata.
```javascript
const seo = new SEOMetaWriter();
seo.title = "Example Title";
console.log(seo.writeTags());
```

### Class: `OpenGraphMetaWriter`
Generates Open Graph meta tags for social sharing.
```javascript
const og = new OpenGraphMetaWriter();
og.ogTitle = "Example Title";
og.ogImage = "https://example.com/image.jpg";
console.log(og.writeTags());
```

### Class: `TwitterMetaWriter`
Handles Twitter Card meta tags.
```javascript
const twitter = new TwitterMetaWriter();
twitter.twitterCard = "summary_large_image";
twitter.twitterTitle = "Example Title";
console.log(twitter.writeTags());
```

### Class: `PageMetaWriter`
Manages page-related meta tags.
```javascript
const page = new PageMetaWriter();
page.themeColor = "#ffffff";
console.log(page.writeTags());
```

### Class: `CommonMetaWriter`
Combines all meta writers for convenience.
```javascript
const meta = new CommonMetaWriter();
meta.setTitleForAll("Example Title");
meta.setDescriptionForAll("This is an example.");
meta.setPreviewImageForAll("https://example.com/image.jpg");
console.log(meta.generateMetaTags());
```

## License
This project is licensed under the MIT License.

## Author
Developed by **Your Name**.

