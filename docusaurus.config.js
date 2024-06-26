// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes, themes } from 'prism-react-renderer';
import dict from './src/plugins/Dict/index.js'


const config = {
  title: 'الدریچ',
  tagline: 'اولین مرجع فارسی بازی دیو‌ها و دخمه‌ها (D&D)',
  favicon: 'img/fav.svg',

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
          remarkPlugins: [dict],
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
            type: 'docSidebar',
            sidebarId: 'booksSidebar',
            label: 'کتاب‌ها'
          },
          { to: '/tools', label: 'ابزارها', position: 'left' },
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
    })
}

export default config;
