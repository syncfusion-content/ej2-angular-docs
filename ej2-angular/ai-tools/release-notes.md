---
layout: post
title: Release Notes - Syncfusion Angular AI Coding Assistants | Syncfusion
description: Explore the release notes for Syncfusion Angular AI Coding Assistants, covering MCP Server, Skills, and Agentic UI Builder updates across all versions.
control: Syncfusion Angular AI Coding Assistants Release Notes
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Angular AI Coding Assistants Release Notes

This document provides information about the changes and new features included in each version of the Syncfusion Angular AI Coding Assistants, including the [@syncfusion/angular-mcp](https://www.npmjs.com/package/@syncfusion/angular-mcp) MCP Server, Skills, Agentic UI Builder and so on.

## MCP Server

**(v1.0.0) - August 3, 2026**

**Breaking Changes**

- The package has been renamed from [@syncfusion/angular-assistant](https://www.npmjs.com/package/@syncfusion/angular-assistant) to [@syncfusion/angular-mcp](https://www.npmjs.com/package/@syncfusion/angular-mcp). The [@syncfusion/angular-assistant](https://www.npmjs.com/package/@syncfusion/angular-assistant) package is deprecated and will no longer receive updates.

- The coding assistant tool identifier has been changed from **`sf_angular_assistant`** to **`search_docs`** for a better naming convention.

**(v3.0.0) - July 21, 2026**

**Breaking Changes**

- The **UI Builder** tool has been redefined as an agent-skill based experience and is no longer available within this server. For more information about the **Agentic UI Builder**, refer to this [link](https://www.syncfusion.com/explore/agentic-ui-builder).

**(v2.0.1) - February 26, 2026**

**Bug Fixes**

- Resolved tool identifier issue and updated package dependencies for improved stability.

**(v2.0.0) - February 23, 2026**

**Breaking Changes**

- Renamed the coding assistant tool identifier from **`SyncfusionAngularAssistant`** to **`sf_angular_assistant`** for consistency, brevity, and improved user experience.

**Features**

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Layout, Component, and Styling) to generate complete Angular applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Layout Tool** (#sf_angular_layout) — Generates responsive UI blocks, grids, dashboards, and pre-built patterns.
  - **Component Tool** (#sf_angular_component) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion Angular components.
  - **Styling Tool** (#sf_angular_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).

**(v1.0.1) - February 10, 2026**

**Features**

- Updated package dependencies to resolve security vulnerabilities and enhance stability.

**(v1.0.0) - December 16, 2025**

**Features**

- Added support for API key validation through file path reference.
- Updated package dependencies and security standards for improved reliability and safety.

**(v0.1.0) - October 10, 2025**

**Features**

- Initial release of AI Coding Assistant for Syncfusion Angular components.
- Provides context-aware assistance for building Angular applications with Syncfusion components.
- Includes support for component APIs, properties, and troubleshooting guidance.

## Skills

**Features**

- Introduced [Agent Skills](https://www.syncfusion.com/explore/agent-skills) — a set of lightweight, modular capabilities that extend the AI Coding Assistant with specialized knowledge, including pre-defined instructions, best practices, and curated code patterns for building Angular applications with Syncfusion components.
- Each skill is defined in a simple, readable `SKILL.md` file that specifies the correct setup, required modules, current APIs and patterns, and what a valid implementation looks like for a given component.
- Works as a standard, lightweight approach supported by modern AI development tools: install skills, the tool detects them, and the relevant skill is automatically applied to the user's prompt.

## Agentic UI Builder

**(v1.0.0) - Jun 5, 2026**

**Features**

- Evolved the [Agentic UI Builder](https://www.syncfusion.com/explore/agentic-ui-builder) architecture with Agent Skills, bringing implementation guidance directly into the project environment for more project-aware, context-grounded UI generation.
- Made UI generation easier to customize and align with internal coding standards and conventions.
- Streamlined the local development experience while preserving the same AI-assisted UI generation workflow developers already rely on.
