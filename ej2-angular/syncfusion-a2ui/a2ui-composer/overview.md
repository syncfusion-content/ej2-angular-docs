---
layout: post
title: A2UI Composer Overview | Syncfusion
description: Learn what the Syncfusion A2UI Composer Playground is, who it is for, and how it fits into the A2UI for Angular workflow.
control: Composer Playground
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# A2UI Composer Overview

The Syncfusion<sup style="font-size:70%">&reg;</sup> A2UI Composer Playground is an AI-powered, browser-based designer for authoring [A2UI v0.9](https://a2ui.org/specification/v0.9-a2ui/) JSON, the declarative wire format that the [Syncfusion A2UI for Angular package](https://www.npmjs.com/package/@syncfusion/ej2-angular-a2ui) renderer turns into fully interactive Syncfusion EJ2 Angular surfaces.

Open the Composer, describe the UI you want, refine the output, and copy the JSON straight into your Angular application or your Syncfusion A2UI Agent. No component code is written by hand.

[Open Composer Playground](https://a2ui-composer.syncfusion.com/)

## What is the Composer?

The Composer is a visual authoring environment for A2UI v0.9 surfaces. It pairs a natural-language generator with a structured editor so you can:

- **Generate UI from a prompt:** Type *"Build a customer accounts dashboard with a grid, a chart, and a KPI row"* and the Composer emits a complete A2UI surface: `createSurface`, `updateComponents`, and `updateDataModel` operations, all ready to copy.
- **Edit the JSON directly:** Every surface has a JSON view that is validated as you type, so malformed output is rejected before it reaches your app.
- **Preview live.** The right-hand preview renders the surface with the real Syncfusion components, exactly as `@syncfusion/ej2-angular-a2ui` will render it at runtime.
- **Iterate with an AI assistant:** The Workspace lets you chat with an assistant that understands A2UI primitives and Syncfusion EJ2 components, so refinements like *"Make the Email field read-only"* or *"Add a status badge"* round-trip through the same JSON envelope.
- **Lock structure into agents:** Copied JSON files can be bound to a Syncfusion A2UI Agent with one call, `agent.set_design(...)`, so the agent always echoes the same structure and only varies the data values.

The Composer is the design side of the A2UI for Angular stack. The runtime side, validation, catalog, and renderer, ships in the [Syncfusion A2UI for Angular package](https://www.npmjs.com/package/@syncfusion/ej2-angular-a2ui); the Composer only authors JSON, no Angular code is generated or executed.

## When should you use the Composer?

Use the Composer when any of the following are true:

- **You are designing a new agent-driven surface** and want to define the layout before wiring up a real agent.
- **You want to lock a UI contract for an agent** so the LLM cannot invent its own structure on every request — bind the Composed JSON with `agent.set_design(...)`.
- **You are exploring the A2UI v0.9 protocol** and want a live, low-cost way to learn the four operations (`createSurface`, `updateComponents`, `updateDataModel`, `deleteSurface`) and the component catalog.
- **You need a starter template** — the built-in templates (Operations Dashboard, CRM Overview, Finance Summary, Inventory Tracker) are pre-built Composer surfaces you can copy and adapt.

If you are wiring up the runtime side (an Angular app that already has `<syncfusion-a2ui-provider>` mounted), see [Getting Started with A2UI for Angular](../getting-started) and [AI Integration](../ai-integration) instead.

## Who is the Composer for?

- **Application engineers** prototyping agent UIs before committing to a design lock.
- **Agent developers** who need a reproducible design contract that pins the LLM to a known surface structure.
- **Designers and product owners** who want to see a Syncfusion-styled surface without writing Angular.
- **Anyone learning A2UI v0.9** who would rather see a working surface than read the spec.

## Composer's position in the A2UI flow

The Composer sits between idea and runtime:

1. You author or generate a surface in the Composer.
2. You copy the JSON and bind it to an agent (or paste it directly into an Angular app).
3. The agent echoes that structure verbatim on every request; only data values change.
4. The Angular app renders the surface with `<syncfusion-a2ui-provider [surface]="surface"/>`.

The Composer never ships runtime code; it ships A2UI v0.9 JSON.

## Composer at a glance

| Composer page | Purpose |
| --- | --- |
| **Create** | Generate a new surface from a prompt or pick a featured template |
| **Workspace** | Edit JSON, chat with the AI Assistant, and preview live |
| **Gallery** | Browse the available templates and example surfaces |
| **Playground** | Try components and JSON snippets in an isolated sandbox |
| **Catalog** | Browse all available Syncfusion EJ2 adapters and A2UI primitive components |

For what each page does and how to move between them, see [Walkthrough](./walkthrough).

## See also

* [Composer Pages Walkthrough](./walkthrough)
* [Build the SkyBook Sample](./skybook-sample)
* [Common Questions](./common-questions)
* [Overview](./../overview)
* [Getting Started with A2UI for Angular](./../getting-started)
* [AI Integration with Syncfusion A2UI for Angular](./../ai-integration)
* [Supported Components](./../supported-components)
* [A2UI v0.9 Protocol](https://a2ui.org/specification/v0.9-a2ui/)