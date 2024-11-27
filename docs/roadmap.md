---
sidebar_position: 4
title: "Roadmap"
description: "Development roadmap and future features of drex.guide"
---
##

:::tip Vision
Your <strong>one-stop shop for DREX information</strong>, organizing scattered online content into a clear, structured knowledge base for everyone.
:::

<div className="roadmap-container">

<div className="phase-column">
    <div className="phase-title">🚀 Now - Foundation Phase</div>
    <div className="phase-card current">
        - DREX Project Overview
        - Official Documentation
        - Regulatory Framework
        - Technical Specifications

        **Status**: In Progress 🔄
    </div>
</div>

<div className="phase-column">
    <div className="phase-title">🤖 Next - AI Enhancement Phase</div>
    <div className="phase-card upcoming">
        - Video Summaries
        - Presentation Highlights
        - Searchable Transcripts
        - Key Points Extraction

        **Status**: Coming Soon 🔜
    </div>
</div>

<div className="phase-column">
    <div className="phase-title">📚 Later - Complete Library Phase</div>
    <div className="phase-card future">
        - Resource Categories
        - Advanced Search
        - Use Cases
        - Research Papers
        - Expert Interviews

        **Status**: Planning 📋
    </div>
</div>

</div>

## Detailed Features

### Foundation Phase
Our current focus is building a comprehensive knowledge base that organizes and structures all official DREX information. We're curating content from the Central Bank, organizing technical documentation, and creating clear explanations of the DREX ecosystem.

### AI Enhancement Phase
Next, we'll implement AI-powered features to make long-format content more accessible. This includes automatically generating summaries of technical presentations, creating searchable transcripts of important videos, and extracting key points from official documents.

### Complete Library Phase
The final phase will transform drex.guide into the definitive DREX resource hub, featuring categorized content, advanced search capabilities, and a comprehensive collection of use cases, research papers, and expert insights.

## Get Involved

:::info Contribute
Have feedback or want to contribute? Message us directly on WhatsApp:

[<button class="button button--primary button--lg">💬 Message on WhatsApp</button>](https://wa.me/5524992679147?text=Hello,%20I%20have%20feedback%20on%20drex.guide.)
:::

:::tip Stay Updated
Don't forget to sign up for updates on our [home page](/) to receive the latest DREX news and feature announcements!
:::

<style>
{`
.roadmap-container {
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.phase-column {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.phase-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: var(--ifm-color-primary);
}

.phase-card {
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: var(--ifm-global-shadow-lw);
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
    border-left: 5px solid;
    color: var(--ifm-color-emphasis-900);
}

.phase-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--ifm-global-shadow-md);
}

[data-theme='light'] .current {
    background: #e6fff0;
    border-left-color: #00c853;
}

[data-theme='light'] .upcoming {
    background: #e3f2fd;
    border-left-color: #2196f3;
}

[data-theme='light'] .future {
    background: #f3e5f5;
    border-left-color: #9c27b0;
}

[data-theme='dark'] .current {
    background: rgba(0, 200, 83, 0.15);
    border-left-color: #00c853;
    color: var(--ifm-color-emphasis-0);
}

[data-theme='dark'] .upcoming {
    background: rgba(33, 150, 243, 0.15);
    border-left-color: #2196f3;
    color: var(--ifm-color-emphasis-0);
}

[data-theme='dark'] .future {
    background: rgba(156, 39, 176, 0.15);
    border-left-color: #9c27b0;
    color: var(--ifm-color-emphasis-0);
}

.phase-card ul {
    list-style-type: none;
    padding-left: 0;
    margin: 1rem 0;
}

.phase-card li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
}

.phase-card li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--ifm-color-primary);
}

@media (max-width: 996px) {
    .phase-column {
        flex-basis: calc(50% - 1rem);
    }
}

@media (max-width: 768px) {
    .phase-column {
        flex-basis: 100%;
    }
    
    .phase-card {
        margin-bottom: 1rem;
    }
}
`}
</style>