const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  transpilePackages: ["andamiojs"],
  async redirects() {
    return [
      {
        source: '/course/module/:moduleId',
        destination: '/course/module/:moduleId/overview',
        permanent: true
      }
    ]
  }
});
