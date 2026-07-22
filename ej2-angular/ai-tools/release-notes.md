---
layout: post
title: Release Notes - Syncfusion Angular AI and Smart Tooling | Syncfusion
description: Explore the release notes for Syncfusion Angular AI and Smart Tooling, covering MCP Server, Skills, and Agentic UI Builder updates with new features, breaking changes, and stability improvements across all versions.
control: Syncfusion Angular AI and Smart Tooling Release Notes
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Angular AI and Smart Tooling Release Notes

This document provides information about the changes and new features included in each version of the Syncfusion Angular AI and Smart Tooling, including the [@syncfusion/angular-assistant](https://www.npmjs.com/package/@syncfusion/angular-assistant) MCP Server, Skills, Agentic UI Builder and so on.

## MCP Server

**(v3.0.0) - July 21, 2026**

**Breaking Changes**

- The **UI Builder** tool has been redefined as an agent-skill based experience and is no longer available within this server. For more information about the **Agentic UI Builder**, refer to this [link](https://www.syncfusion.com/explore/agentic-ui-builder).

**(v2.0.1) - February 26, 2026**

**Bug Fixes**

- Resolved tool identifier issue and updated package dependencies for improved stability.

**(v2.0.0) - February 23, 2026**

**Breaking Changes**

- Renamed the coding assistant tool identifier from **`SyncfusionAngularAssistant`** to **`sf_angular_assistant`** for consistency, brevity, and improved user experience.

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

- Introduced **Agent Skills** — a set of lightweight, modular capabilities that extend the AI Coding Assistant with specialized knowledge, including pre-defined instructions, best practices, and curated code patterns for building Angular applications with Syncfusion components.
- Each skill is defined in a simple, readable `SKILL.md` file that specifies the correct setup, required modules, current APIs and patterns, and what a valid implementation looks like for a given component.
- Works as a standard, lightweight approach supported by modern AI development tools: install skills, the tool detects them, and the relevant skill is automatically applied to the user's prompt.

## Agentic UI Builder

**(v2.0.0) - February 23, 2026**

**Features**

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Layout, Component, and Styling) to generate complete Angular applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Layout Tool** (#sf_angular_layout) — Generates responsive UI blocks, grids, dashboards, and pre-built patterns.
  - **Component Tool** (#sf_angular_component) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion Angular components.
  - **Styling Tool** (#sf_angular_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).
