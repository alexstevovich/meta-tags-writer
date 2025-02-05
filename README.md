# Meta Tags Writer

A **lightweight**, **modular**, and **professional-grade** utility for generating **HTML meta tags**.  
Supports **SEO**, **Open Graph (Facebook, LinkedIn, Discord)**, and **Twitter meta tags**.  

Designed for **server-side rendering (SSR)** and **static site generation (SSG)**.

## Features

✅ **Fully modular** – Use individual meta writers or the full `CommonMetaTags`.  
✅ **Global formatting settings** – Control output formatting via `Config`.  
✅ **Simple API** – Minimal setup required.  
✅ **Works with both CommonJS (`require`) and ESM (`import`)**.  

---

## Installation

```sh
npm install meta-tags-writer
```

or using Yarn:

```sh
yarn add meta-tags-writer
```

---

## Usage

### **🔹 Basic Example (CommonMetaTags)**
```js
import { CommonMetaTags } from "meta-tags-writer";

const meta = new CommonMetaTags();
meta.setTitleForAll("My Awesome Page");
meta.setDescriptionForAll("This is an amazing page with great content.");
meta.setPreviewImageForAll("https://example.com/image.png");

console.log(meta.write({ newLine: true }));
```

**➞ Outputs:**
```html
<title>My Awesome Page</title>
<meta name="description" content="This is an amazing page with great content.">
<meta property="og:title" content="My Awesome Page">
<meta property="og:description" content="This is an amazing page with great content.">
<meta property="og:image" content="https://example.com/image.png">
<meta name="twitter:title" content="My Awesome Page">
<meta name="twitter:description" content="This is an amazing page with great content.">
<meta name="twitter:image" content="https://example.com/image.png">
```

---

## API Reference

### **🔹 Global Configuration (`Config`)**
`Config` allows you to set global formatting rules.
```js
import { Config } from "meta-tags-writer";

Config.useNewLineBetweenEntries = false; // Default: true
```

---

### ** Class: `SEOMetaTags` (SEO Metadata)**
Handles **title, description, keywords, robots, and canonical tags**.

#### **Example**
```js
import { SEOMetaTags } from "meta-tags-writer";

const seo = new SEOMetaTags();
seo.title = "SEO Optimized Page";
seo.description = "Boost your rankings with great SEO metadata!";
seo.canonical = "https://example.com";

console.log(seo.write());
```

** Outputs:**
```html
<title>SEO Optimized Page</title>
<meta name="description" content="Boost your rankings with great SEO metadata!">
<link rel="canonical" href="https://example.com">
```

---

### **🔹 Class: `OpenGraphMetaTags` (Facebook, LinkedIn, Discord)**
Handles **og:title, og:description, og:image, og:url, og:type**.

#### **Example**
```js
import { OpenGraphMetaTags } from "meta-tags-writer";

const og = new OpenGraphMetaTags();
og.ogTitle = "Awesome Article";
og.ogDescription = "Learn the best tips for success!";
og.ogImage = "https://example.com/image.jpg";

console.log(og.write());
```

---

### ** Class: `TwitterMetaTags` (Twitter Cards)**
Handles **twitter:title, twitter:description, twitter:image, twitter:card**.

#### **Example**
```js
import { TwitterMetaTags } from "meta-tags-writer";

const twitter = new TwitterMetaTags();
twitter.twitterTitle = "Breaking News!";
twitter.twitterDescription = "Big things are happening!";
twitter.twitterImage = "https://example.com/news.jpg";

console.log(twitter.write());
```

---

## Advanced Usage

### **🔹 Using `CommonMetaTags` for Full Meta Generation**
```js
import { CommonMetaTags } from "meta-tags-writer";

const meta = new CommonMetaTags();
meta.setTitleForAll("Complete Meta Solution");
meta.setDescriptionForAll("Handles SEO, Open Graph, and Twitter Cards.");
meta.setPreviewImageForAll("https://example.com/full-meta.png");

console.log(meta.write({ newLine: false }));
```

---

## License

Released under the **MIT License**.

