// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/okaidia');
const darkCodeTheme = require('prism-react-renderer/themes/ultramin');
const math = require('remark-math');
const katex = require('rehype-katex');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ستار ريل بالعربي',
  tagline: 'هونكاي: مكتبة ستار ريل',
  url: 'https://hsrarabic.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Oso00Luffy', // Usually your GitHub org/user name.
  projectName: 'hsrarabic', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },
  themeConfig: {
    // Other configurations
    i18n: {
      ar: {
        direction: 'rtl',
      },
    },
  },
  
  plugins: [
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        createRedirects(routePath) {
          const charMatch = routePath.match(/^(\/characters\/[a-z]+\/)(.+)$/);
          if (charMatch) {
            const char = charMatch[2];
            // console.log(`Adding alias from ${char} to ${routePath}`);
            if (char.startsWith('trailblazer-')) {
              const elemental = `${char.replace('trailblazer-', '')[0]}mc`
              return [`/${char}`, `/characters/${char}`, `/${elemental}`, `/characters/${elemental}`, `${charMatch[1]}/trailblazer`];
            }
            return [`/${char}`, `/characters/${char}`];
          }
          const evidenceMatch = routePath.match(/^(\/evidence\/characters\/[a-z]+\/)(.+)$/);
          if (evidenceMatch) {
            const char = evidenceMatch[2];
            // console.log(`Adding evidence alias from ${char} to ${routePath}`);
            if (char.startsWith('trailblazer-')) {
              const elemental = `${char.replace('trailblazer-', '')[0]}mc`
              return [`/evidence/characters/${elemental}`, `/evidence/characters/${char}`, `${evidenceMatch[1]}/${elemental}`, `${evidenceMatch[1]}/trailblazer`];
            }
            return [`/evidence/characters/${char}`];
          }
          return [];
        },
        redirects: [
          { from: '/damage', to: '/combat-mechanics/damage/damage-formula' },
        ]
      }),
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 960,
        min: 640,
        steps: 2,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-2048.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(45, 40, 47)',
          },
        ],
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          routeBasePath: '/newsletter',
          blogTitle: 'Newsletter',
          path: 'newsletter',
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-117136430-6'
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  // Removed typesense theme and configuration
};

module.exports = config;
