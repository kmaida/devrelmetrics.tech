module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("src/assets/css/normalize.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}
