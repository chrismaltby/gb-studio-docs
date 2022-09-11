// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GB Studio",
  tagline:
    "A quick and easy to use drag and drop retro game creator for your favourite handheld video game system.",
  url: "https://gbstudio.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "chrismaltby", // Usually your GitHub org/user name.
  projectName: "gb-studio-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es", "pl"],
    localeConfigs: {
      en: {
        label: "English",
      },
      de: {
        label: "Deutsch",
      },
      es: {
        label: "Español",
      },
      pl: {
        label: "Polski",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/chrismaltby/gb-studio-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/share.png",
      navbar: {
        title: "GB Studio",
        logo: {
          alt: "GB Studio Logo",
          src: "img/icon.png",
        },
        items: [
          { type: "localeDropdown", position: "left" },
          { to: "/about", label: "About", position: "right" },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Docs",
          },
          {
            href: "https://github.com/chrismaltby/gb-studio",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://chrismaltby.itch.io/gb-studio",
            label: "Download",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Introduction",
                href: "/docs",
              },
              {
                label: "Installation",
                href: "/docs/installation",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/bxerKnc",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/gbstudio",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/GBStudioDev",
              },
            ],
          },
          {
            title: "Downloads",
            items: [
              {
                href: "https://chrismaltby.itch.io/gb-studio",
                label: "Download",
              },
              {
                href: "https://github.com/chrismaltby/gb-studio",
                label: "GitHub",
              },
            ],
          },
          {
            title: "Press",
            items: [
              {
                href: "https://drive.google.com/drive/folders/1gP7yfN7oc_jKIn1n9s3Tq4evRjsigcag?usp=sharing",
                label: "Press Kit",
              },
            ],
          },
        ],
        copyright: `GB Studio Copyright © ${new Date().getFullYear()} Chris Maltby.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
