const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/pierreraffalli/Desktop/react/refacto site photo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/pierreraffalli/Desktop/react/refacto site photo/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/pierreraffalli/Desktop/react/refacto site photo/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/pierreraffalli/Desktop/react/refacto site photo/src/pages/index.js"))),
  "component---src-pages-photos-js": hot(preferDefault(require("/Users/pierreraffalli/Desktop/react/refacto site photo/src/pages/photos.js")))
}

