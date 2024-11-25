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
    },
    {
      type: 'doc',
      id: 'what-is-drex',
    },
    {
      type: 'doc',
      id: 'origin-of-drex',
    },
    {
      type: 'category',
      label: 'LIFT Challenge',
      items: [
        'lift-challenge/what-is-lift-challenge',
        'lift-challenge/selected-projects',
      ],
    },
    {
      type: 'category',
      label: 'Pilot Project',
      items: [
        'pilot-project/overview',
        'pilot-project/phase-1',
        'pilot-project/phase-2',
        'pilot-project/pilot-technical-details',
      ],
    },
    {
      type: 'category',
      label: 'Workshops',
      items: [
        'workshops/finance-tokenization',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/recommended-reading',
      ],
    }
  ],
};

module.exports = sidebars;
