module.exports = {
  title: "Strapi Developer Documentation",
  port: 8081,
  description: 'The headless CMS developers love.',
  base: '/documentation/developer-docs/',
  plugins: {
    '@vuepress/medium-zoom': {},
    'vuepress-plugin-element-tabs':{},
    '@vuepress/google-analytics':{
        ga: 'UA-54313258-1',
      },
    'seo': {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://strapi.io/assets/favicon-32x32.png',
      },
    ],

    [
      'meta',
      {
        property: 'og:title',
        content: 'Strapi Developer Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://strapi.io/documentation/developer-docs/',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'The headless CMS developers love.',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://strapi.io/documentation/developer-docs/assets/meta.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:article:author',
        content: 'strapi',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://strapi.io/documentation/developer-docs/',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:site',
        content: '@strapijs',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'Strapi Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'The headless CMS developers love.',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'http://strapi.io/assets/images/strapi-website-preview.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      {
        text: 'Versions',
        items: [
          {
            text: 'Latest',
            link: '/latest/',
          },
        ],
      },
      {
        text: 'Website',
        link: 'https://strapi.io',
      },
      {
        text: 'Forum',
        link: 'https://forum.strapi.io',
      },
      {
        text: 'Slack',
        link: 'https://slack.strapi.io',
      },
      {
        text: 'Blog',
        link: 'https://strapi.io/blog',
      },
      {
        text: 'Tutorials',
        link: 'https://strapi.io/tutorials',
      },
    ],
    repo: 'strapi/documentation',
    docsDir: 'developer-docs',
    docsBranch: 'documentation',
    algolia: {
      apiKey: 'a93451de224096fb34471c8b8b049de7',
      indexName: 'strapi',
    },
    editLinks: true,
    editLinkText: 'Improve this page',
    serviceWorker: true,
    sidebarDepth: 1,
    sidebar: {
      '/latest/': [
        {
          collapsable: false,
          title: '🚀 Getting Started',
          children: [
            ['/latest/getting-started/introduction', 'Introduction'],
            ['/latest/getting-started/installation', 'Installation'],
            ['/latest/getting-started/deployment', 'Deployment'],
            ['/latest/getting-started/contributing', 'Contributing'],
            ['/latest/getting-started/troubleshooting', 'Troubleshooting'],
            ['/latest/getting-started/usage-information', 'Telemetry'],
            '/latest/getting-started/quick-start',
          ],
        },
        {
          collapsable: true,
          title: '📄 Content API',
          children: [
            ['/latest/content-api/api-endpoints', 'API Endpoints'],
            ['/latest/content-api/parameters', 'Parameters'],
            ['/latest/content-api/integrations', 'Integrations'],
          ],
        },
        {
          collapsable: true,
          title: '💡 Concepts',
          children: [
            '/latest/concepts/configurations',
            '/latest/concepts/controllers',
            '/latest/concepts/customization',
            '/latest/concepts/draft-and-publish',
            '/latest/concepts/file-structure',
            '/latest/concepts/hooks',
            '/latest/concepts/middlewares',
            '/latest/concepts/models',
            '/latest/concepts/plugins',
            '/latest/concepts/policies',
            '/latest/concepts/public-assets',
            '/latest/concepts/queries',
            '/latest/concepts/requests-responses',
            '/latest/concepts/routing',
            '/latest/concepts/services',
            '/latest/concepts/templates',
            '/latest/concepts/webhooks',
          ],
        },
        {
          collapsable: true,
          title: '📚 Guides',
          children: [
            '/latest/guides/api-token',
            '/latest/guides/auth-request',
            '/latest/guides/count-graphql',
            '/latest/guides/slug',
            '/latest/guides/is-owner',
            '/latest/guides/custom-admin',
            '/latest/guides/custom-data-response',
            '/latest/guides/databases',
            '/latest/guides/draft',
            '/latest/guides/error-catching',
            '/latest/guides/external-data',
            '/latest/guides/jwt-validation',
            '/latest/guides/process-manager',
            '/latest/guides/scheduled-publication',
            '/latest/guides/secure-your-app',
            '/latest/guides/send-email',
            '/latest/guides/registering-a-field-in-admin',
            '/latest/guides/client',
            '/latest/guides/update-version',
            '/latest/guides/unit-testing',
          ],
        },
        {
          collapsable: true,
          title: '⚙️️ Admin Panel',
          children: [
            '/latest/admin-panel/customization',
            '/latest/admin-panel/custom-webpack-config',
            '/latest/admin-panel/deploy',
            '/latest/admin-panel/forgot-password',
          ],
        },
        {
          collapsable: true,
          title: '📦 Plugins',
          children: [
            '/latest/plugins/documentation',
            '/latest/plugins/email',
            '/latest/plugins/graphql',
            '/latest/plugins/upload',
            '/latest/plugins/users-permissions',
          ],
        },
        {
          collapsable: true,
          title: '🔌 Local Plugins',
          children: [
            '/latest/plugin-development/quick-start',
            '/latest/plugin-development/plugin-architecture',
            '/latest/plugin-development/backend-development',
            '/latest/plugin-development/frontend-development',
            '/latest/plugin-development/frontend-field-api',
            '/latest/plugin-development/frontend-settings-api',
          ],
        },
        {
          collapsable: true,
          title: '💻 Command Line Interface',
          children: ['/latest/cli/CLI'],
        },
        {
          collapsable: true,
          title: '🏗 Global strapi',
          children: ['/latest/global-strapi/api-reference'],
        },
        {
          collapsable: false,
          title: '📚 Resources',
          children: [
            ['https://github.com/strapi/documentation/blob/master/CONTRIBUTING.md', 'Contributing guide'],
            '/latest/migration-guide/',
          ],
        },
      ],
    },
  },
};
