const { CommonMetaTags } = require("../src/meta-tags-writer.cjs");

const commonMetaTags = new CommonMetaTags()
console.log(commonMetaTags.write())