// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes, themes } from 'prism-react-renderer';


const config = {
  title: 'الدریچ',
  tagline: 'اولین مرجع فارسی بازی سیاهچال‌ها و اژدهایان (D&D)',
  favicon: 'img/eldritch.svg',

  // Set the production url of your site here
  url: 'https://eldritch.ir',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RashThePay', // Usually your GitHub org/user name.
  projectName: 'eldritch', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },
  plugins: [
  ],
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RashThePay/eldritch/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },

      }),
    ],
  ],
  themeConfig:
    ({
      // Replace with your project's social card
      navbar: {
        title: 'الدریچ',
        logo: {
          alt: 'الدریچ',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-light.svg'
        },
        items: [

          {
            type: 'dropdown',
            label: 'کتاب‌ها',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'phbSidebar',
                label: 'راهنمای بازیکنان'
              },
              // ... more items
            ],
          },
          { to: '/tools', label: 'ابزار', position: 'left' },
          {
            href: 'https://github.com/RashThePay/eldritch',
            label: 'گیت‌هاب',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'بخش‌ها',
            items: [
              {
                label: 'راهنمای بازی',
                to: '/docs',
              },
            ],
          },
          {
            title: 'اجتماعی',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'بیشتر',
            items: [
              {
                label: 'ابزار',
                to: '/tools',
              },
              {
                label: 'گیت‌هاب',
                href: 'https://github.com/RashThePay/eldritch',
              },
            ],
          },
        ],
        copyright: `کپی‌رایت © ${new Date().getFullYear()} ،الدریچ`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: "XH61QTZAV3",

        // Public API key: it is safe to commit it
        apiKey: '198e5dc940283dcbec2f6ece45cf5cbb',

        indexName: 'eldritch',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      }

    })
}

export default config;
