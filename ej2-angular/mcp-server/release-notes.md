---
layout: post
title: Release Notes | Syncfusion Angular MCP Server
description: Version history and release notes for the Syncfusion Angular MCP Server, including new features, breaking changes, and updates for the AI-powered Angular development assistant.
control: Release Notes
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Angular MCP Server Release Notes

This document provides information about the changes and new features included in each version of the [@syncfusion/angular-assistant](https://www.npmjs.com/package/@syncfusion/angular-assistant) MCP server package.

## (v2.0.0) – February 23, 2026

### Features

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Layout, Component, and Styling) to generate complete Angular applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Layout Tool** (#sf_angular_layout) — Generates responsive UI blocks, grids, dashboards, and pre-built patterns.
  - **Component Tool** (#sf_angular_component) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion Angular components.
  - **Styling Tool** (#sf_angular_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).

### Breaking Changes

- Renamed the coding assistant tool identifier from **`SyncfusionAngularAssistant`** to **`sf_angular_assistant`** for consistency, brevity, and improved user experience.

## (v1.0.1) – February 10, 2026

### Features

- Updated package dependencies to resolve security vulnerabilities and enhance stability.

## (v1.0.0) – December 16, 2025

### Features

- Added support for API key validation through file path reference.
- Updated package dependencies and security standards for improved reliability and safety.

## (v0.1.0) – October 10, 2025

### Features

- Initial release of AI Coding Assistant for Syncfusion Angular components.
- Provides context-aware assistance for building Angular applications with Syncfusion components.
- Includes support for component APIs, properties, and troubleshooting guidance.
