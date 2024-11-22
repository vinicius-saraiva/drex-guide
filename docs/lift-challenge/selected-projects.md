---
title: Selected Projects
sidebar_position: 2
description: Explore the nine innovative projects selected for the LIFT Challenge Real Digital
---

import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

# Selected Projects

Nine innovative projects were selected for the LIFT Challenge Real Digital, each exploring unique applications of DREX technology. Browse through the projects below to learn about their unique contributions to Brazil's CBDC ecosystem.

export const ProjectCards = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'DvP', value: 'dvp' },
    { label: 'PvP', value: 'pvp' },
    { label: 'IoT', value: 'iot' },
    { label: 'DeFi', value: 'defi' },
    { label: 'Offline', value: 'offline' },
  ];

  const projects = [
    {
      title: "Digital Asset Trading",
      team: "Mercado Bitcoin, Bitrust, CPqD",
      focus: "DvP of digital assets and cryptoassets",
      category: "dvp",
      papers: [{ lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/111" }]
    },
    {
      title: "Financial Asset Settlement",
      team: "Febraban",
      focus: "DvP of financial assets",
      category: "dvp",
      papers: [{ lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/108" }]
    },
    {
      title: "Cross-Border Payments",
      team: "Itaú Unibanco, B3, R3",
      focus: "PvP between Brazil and Colombia",
      category: "pvp",
      papers: [
        { lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/110" },
        { lang: "EN", url: "https://revista.liftlab.com.br/lift/article/view/119" }
      ]
    },
    {
      title: "Asset Tokenization",
      team: "Banco Santander Brasil",
      focus: "DvP and tokenization of vehicles and real estate",
      category: "dvp",
      papers: [{ lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/113" }]
    },
    {
      title: "IoT Integration",
      team: "Tecban, Capitual",
      focus: "E-commerce logistics with smart lockers",
      category: "iot",
      papers: [{ lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/114" }]
    },
    {
      title: "Rural Finance",
      team: "VERT, Digital Assets, Oliver Wyman",
      focus: "Programmable real-pegged stablecoin for rural financing",
      category: "defi",
      papers: [{ lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/115" }]
    },
    {
      title: "DeFi Lending",
      team: "Aave",
      focus: "Permissioned DeFi liquidity pool",
      category: "defi",
      papers: [
        { lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/107" },
        { lang: "EN", url: "https://revista.liftlab.com.br/lift/article/view/117" }
      ]
    },
    {
      title: "Offline Payments",
      team: "Giesecke + Devrient",
      focus: "Dual offline payment solutions",
      category: "offline",
      papers: [
        { lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/109" },
        { lang: "EN", url: "https://revista.liftlab.com.br/lift/article/view/118" }
      ]
    },
    {
      title: "SME Financing",
      team: "Visa do Brasil, Consensys, Microsoft",
      focus: "DeFi-based global financing for Brazilian SMEs",
      category: "defi",
      papers: [
        { lang: "PT", url: "https://revista.liftlab.com.br/lift/article/view/116" },
        { lang: "EN", url: "https://revista.liftlab.com.br/lift/article/view/121" }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="margin-bottom--sm tabs-container">
        <div className="button-group">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                console.log('Clicking:', category.value);
                setActiveFilter(category.value);
              }}
              className={`button button--${activeFilter === category.value ? 'primary' : 'secondary'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="grid-container">
              {filteredProjects.map((project, index) => (
                <div className="card margin-bottom--lg" key={index}>
                  <div className="card__header">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Team:</strong> {project.team}</p>
                    <p><strong>Focus:</strong> {project.focus}</p>
                  </div>
                  <div className="card__footer">
                    {project.papers.length === 1 ? (
                      <a href={project.papers[0].url} className="button button--primary button--block">
                        View Paper ({project.papers[0].lang})
                      </a>
                    ) : (
                      <div className="button-group button-group--block">
                        {project.papers.map((paper, pIndex) => (
                          <a 
                            key={pIndex}
                            href={paper.url} 
                            className={`button button--${paper.lang === 'EN' ? 'primary' : 'secondary'}`}>
                            {paper.lang}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<BrowserOnly>
  {() => <ProjectCards />}
</BrowserOnly>

:::tip Additional Resources
For comprehensive project details and outcomes, visit the [LIFT Lab Journal](https://revista.liftlab.com.br/revistas/2).
::: 