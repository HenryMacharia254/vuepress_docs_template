const { description } = require("../../package");

module.exports = {
  title: "Custom Docs Site",
  description: description,
  // Extra tags to be injected to the page HTML `<head>`
  head: [
    ["meta", { name: "theme-color", content: "#5ceb1a" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  // Theme configuration, here is the default theme configuration for VuePress.

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: "Intro",
        link: "/guide/",
      },
      {
        text: "Theme",
        link: "/theming/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: {
      "/guide/": ["", "using-vue", "Internationalization", "Frontmatter"],

      "/theming/": ["", "writing-a-theme", "Default-Theme-Config", "BlogTheme"],

      // "/guide": "auto",
      // "/theme": "auto"
    },

    displayAllHeaders: false, // Default: false

    // To enable numbers in code blocks
    // markdown: {
    //   lineNumbers: true,
    // },

    // Apply plugins，

    plugins: [
      "@vuepress/plugin-back-to-top",
      "@vuepress/plugin-medium-zoom",
      "@vuepress/last-updated",
      "@vuepress/active-header-links",
      "@vuepress/nprogress",
    ],
  },
};
