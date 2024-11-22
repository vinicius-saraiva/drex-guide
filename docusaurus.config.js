module.exports = {
  title: 'drex.guide',
  tagline: 'Your comprehensive guide to Brazil\'s CBDC',
  url: 'https://vinicius-saraiva.github.io',
  baseUrl: '/drex-guide/',
  organizationName: 'vinicius-saraiva',
  projectName: 'drex-guide',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  // Theme configuration
  themeConfig: {
    navbar: {
      title: 'drex.guide',
      logo: {
        alt: 'DREX Guide Logo',
        src: 'img/newlogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start here',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/your-username/drex-guide',
          label: 'GitHub',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Technical Architecture',
              to: '/docs/technical-architecture/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/drex-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The DREX Guide. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
}