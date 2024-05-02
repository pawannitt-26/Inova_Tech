// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fluentify',
  tagline: "Unlocking Language Mastery: Where Learning Knows No Bounds!",
  favicon: 'img/icon.jpeg',

  // Set the production url of your site here
  url: 'https://pawannitt-26-github-io.onrender.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fluentify', // Usually your GitHub org/user name.
  projectName: 'Fluentify Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/icon.jpeg',
      navbar: {
        title: 'Fluentify',
        logo: {
          alt: 'Fluentify',
          src: 'img/icon.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Objective',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/pawannitt-26',
            position: 'left',
            label: 'GitHub',
          },
          {
            href: 'https://discord.gg/GUzVRKUHgY',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/pawan_324005?igsh=MWVpN2MwajlkMXdmYQ==',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Our Website',
                href: 'https://pawannitt-26-github-io.onrender.com/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
