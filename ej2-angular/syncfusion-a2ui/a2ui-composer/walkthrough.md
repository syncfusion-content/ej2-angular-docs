---
layout: post
title: Composer Pages Walkthrough | Syncfusion
description: Tour every page in the A2UI Composer Playground — Create, Workspace, Gallery, Playground, and Catalog — and learn what each one is for.
control: Composer Playground
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Composer Pages Walkthrough

The Composer Playground is organized as **five focused pages**. Each page has one job, and the same JSON envelope flows between them.

[Open Composer Playground](https://a2ui-composer.syncfusion.com/#/)

| Page | One-line purpose |
| --- | --- |
| [Create](#create) | Author a brand-new surface from a prompt or template |
| [Workspace](#workspace) | Refine, edit, chat, and preview a surface in real time |
| [Gallery](#gallery) | Browse the available template designs you can load into Workspace |
| [Playground](#playground) | Tinker with isolated component snippets and JSON fragments |
| [Catalog](#catalog) | Inspect every A2UI primitive and Syncfusion adapter in the catalog |

## Create

The **Create** page is the entry point. It exists to convert an idea, prompt or template pick, into a draft surface that you can refine on the **Workspace** page.

**What you do here**

1. Type a description of the UI you want into the prompt input.
2. Or pick one of the featured template cards (Operations Dashboard, CRM Overview, Finance Summary, Inventory Tracker).
3. Click **Generate UI** (prompt path) or the template card (template path).
4. You are routed to the **Workspace** with the generated surface pre-loaded.

**Layout**

- A large prompt text box at the top with a **Generate UI** button.
- A grid of featured template cards beneath the prompt.
- A short sample-prompt gallery (for example, *"Build a CRM overview with KPI cards, a contacts grid, and a follow-ups scheduler"*) you can click to autofill.

**When to use it**

- First time authoring a surface.
- You have a fresh prompt and want the AI to scaffold the page.
- You want to start from a template rather than a blank surface.

## Workspace

**Workspace** is the authoring heart of the Composer. Every generated surface ends up here, and every edit happens here.

**Layout**

- **Top toolbar**: breadcrumb (page name, current generation target), **Load example…** dropdown, and **Reset** button.
- **Left Panel** with two tabs:
  - **AI Assistant** — chat with the assistant about your surface; every reply updates the JSON envelope.
  - **JSON** — JSON editor with live validation.
- **Right Panel** — the live preview, with a `SURFACE: <surfaceId>` header above the rendered Syncfusion components.

**What you do here**

1. Review the AI-generated surface in the live preview.
2. Refine it conversationally in the AI Assistant tab (*"Make booking field read-only"*, *"Add a status badge"*).
3. Or edit JSON directly in the JSON tab.
4. Once satisfied, click **Copy JSON** to copy the full A2UI v0.9 envelope.

**When to use it**

- Always — every other page feeds surfaces into the Workspace for refinement.

## Gallery

**Gallery** is the curated library of high quality surfaces. Think of it as the design system of built-in templates.

**What you do here**

1. Browse the template cards by category (Dashboards, CRMs, Finance, Inventory, …).
2. Hover a card to see the primary components it uses and a thumbnail.
3. Click **Open in Workspace** to drop the template into the Workspace for editing — you are routed there with the JSON already in place.

**Example built-in templates include**

| Template | Data domain | Primary components |
| --- | --- | --- |
| Operations Dashboard | Order pipeline, revenue trends, priority queue | `SyncfusionChart`, `SyncfusionDataGrid`, priority `Message` |
| CRM Overview | Customer accounts, contacts, opportunities, recent activity | `SyncfusionDataGrid`, `SyncfusionScheduler`, `Card` |
| Finance Summary | Income / expense / cash flow, budget vs actual, categories | `SyncfusionChart`, `Card`, `SyncfusionDataGrid` |
| Inventory Tracker | Stock on hand, low-stock alerts, supplier list | `SyncfusionDataGrid`, `SyncfusionNumericTextBox`, `Message` |

**When to use it**

- You want a known-good starter for a common CRUD/dashboard surface.
- You need to align a new agent to a known design language without authoring from scratch.

## Playground

**Playground** is an isolated sandbox for trying out component snippets and small JSON fragments. It does not persist work to your Workspace and does not count against any design lock on your agent.

**What you do here**

1. Pick a starter component (`Column`, `Card`, `DataGrid`, `Chart`, …) from the catalog panel.
2. Edit its props in the form view or directly in the JSON snippet.
3. See the rendered output in the preview pane.

**When to use it**

- You want to learn how a single A2UI component or Syncfusion adapter responds to a specific prop.
- You are debugging a single component from a larger surface and want to reproduce the issue in isolation.
- You are drafting a small snippet to paste into a larger Workspace JSON later (the Playground has a **Copy snippet** button for that).

## Catalog

**Catalog** is the component dictionary. It lists every component the Composer can emit, with live previews, descriptions, and the props each component supports.

**What you do here**

1. Browse A2UI layout primitives (`Column`, `Row`, `Text`, `Image`, `Icon`, `Divider`, …).
2. Browse Syncfusion EJ2 adapters (50+ components, including `SyncfusionDataGrid`, `SyncfusionChart`, `SyncfusionScheduler`, `SyncfusionDropDownList`, `SyncfusionTextBox`, …).
3. Click any component to see its reference card: description, props, defaults, sample output.
4. Use **Open in Workspace** to try it, or **Copy JSON, paste into the Workspace** to drop it into a surface you are editing.

Browse the available A2UI primitives and [Syncfusion Components](./../supported-components) included with the current release.

**When to use it**

- You want to know what props a component supports before writing the JSON by hand.
- Most Syncfusion components available in the bundled catalog are exposed through corresponding A2UI adapters.

## Next step

Once you are comfortable with the pages, jump to the end-to-end example: **[Build the SkyBook Sample](./skybook-sample)**.

## See also

* [A2UI Composer Overview](./overview)
* [Build the SkyBook Sample](./skybook-sample)
* [Common Questions](./common-questions)
* [Overview](./../overview)
* [Supported Components](./../supported-components)
* [A2UI v0.9 Protocol](https://a2ui.org/specification/v0.9-a2ui/)