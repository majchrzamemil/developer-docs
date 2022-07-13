// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Beyond Identity Developer Documentation",
  tagline: "Comprehensive guides, tutorials, example code, and more for Beyond Identity developer tools.",
  url: "https://developer.beyondidentity.com",
  baseUrl: "/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  favicon: "img/favicon.ico",
  organizationName: "gobeyondidentity", // Usually your GitHub org/user name.
  projectName: "developer-docs", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          id: 'first', // omitted => default instance
          path: 'static/api/v0/openapi.json',
          routeBasePath: 'api/v0',
        },
        docs: {
          id: "first", // force ignore docs generated by v0, we want docs to live on the plugin
          path: 'nodocs',
          routeBasePath: 'nodocs',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v1/openapi.yaml',
            url: 'api/v1/openapi.yaml',
            route: 'api/v1',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default', // these are the default docs, any versioning will happen here
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: "https://github.com/gobeyondidentity/developer-docs/blob/v1",
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
            path: 'v1',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides', // these are the default docs, any versioning will happen here
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebarsGuides.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Developer Docs",
        logo: {
          alt: "Beyond Identity",
          src: "img/logo.svg",
          width: 60,
          height: 55,
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: false,
          },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Documentation",
          },
          { to: "/guides/guide1", label: "Guides", position: "left" },
          { to: "/api/v1", label: "REST API v1", position: "left" },
          {
            href: "https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ",
            label: "Join Slack",
            position: "right",
          },
          {
            href: "https://github.com/gobeyondidentity",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/beyondidentity",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/BI_Developers",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://www.beyondidentity.com/developers/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/gobeyondidentity",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['kotlin'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'XR6OEXXDWH',

        // Public API key: it is safe to commit it
        apiKey: 'ded4af2cbfd11dbc6acaaa90a22b89cb',

        indexName: 'localhost',

        // Optional: see doc section below
        // contextualSearch: true,

        // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // // Optional: Algolia search parameters
        // searchParameters: {},

        // // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

      },
    }),
};

module.exports = config;
