// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Technical Architecture',
      items: ['technical-architecture/overview', 'technical-architecture/details'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/configuration'],
    },
  ],
};

module.exports = sidebars;
