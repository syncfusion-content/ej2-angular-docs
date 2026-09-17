---
layout: post
title: A2UI Composer Common Questions | Syncfusion
description: Frequently asked questions and troubleshooting for Syncfusion A2UI Composer Playground — covering JSON errors, agent binding, prompts, and live preview issues.
control: Composer Playground
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# A2UI Composer Common Questions

A focused set of answers to questions that come up while authoring surfaces in the A2UI Composer Playground, binding them to an agent, or wiring them into an Angular app. If you are new to the Composer, start with [A2UI Composer Overview](./overview); for a tour of every page in the Composer, see [Composer Pages Walkthrough](./walkthrough).

[Open Composer Playground](https://a2ui-composer.syncfusion.com/#/)

## Frequently asked questions

### Why am I seeing "No root component found"?

Every surface must include `{ "id": "root", "component": "Column", ... }` as the first component in the `components` array. The renderer walks the tree starting from `root`, so any surface without one fails to mount.

### Why does my surface say "Component with id 'X' not found"?

A parent's `children` array references an id that is not defined anywhere in the same surface's `components` array. Verify that every id listed under `children` has a matching entry in `components`. The Composer highlights missing references in the JSON panel as you edit.

### Why isn't the button click triggering any action?

The button's `onClick` payload must use the event wrapper shape:

```json
{ "event": { "name": "action_name" } }
```

If you pass a raw function string or omit the `event` wrapper, the renderer cannot serialize the action back to the agent.

### Why does the Workspace preview show a blank surface or an error?

Three things to check:

1. Every component id is unique within the same surface.
2. Every id in a `children` array is defined in `components`.
3. `catalogId` matches a valid catalog available in the current environment.

If any one of those is wrong, the renderer rejects the surface rather than partially rendering it.

### Why does my agent return a different layout for the same request?

The LLM is improvising the structure on every call. Save the Composed design as a JSON file under `examples/designs/` and bind it via `agent.set_design("examples/designs/your-surface.json")` (or a directory of designs). Once `set_design(...)` locks the structure, every reply uses the same composition and only the data values vary.

### Why does the same Composer prompt produce a different layout each time?

Generation is non-deterministic at temperature > 0. To get a stable starting shape, open one of the four featured templates from the Gallery and then refine it in the Workspace with the AI Assistant. Each refinement round-trips through the same JSON envelope, so the structure stabilizes quickly.

### Why does the SkyBook app in my shell not connect to the agent?

Confirm that the agent URL configured in the Angular app's environment (`environment.agentUrl`, or `VITE_AGENT_URL` if you read it through a build-time replacement) matches the URL the agent is actually listening on. The example `FlightBookingAgent` serves on `http://127.0.0.1:10006`; the SkyBook app defaults to `http://localhost:10005`. Point SkyBook at the correct port and restart `npm start` so the new configuration is picked up.

### Why is the AI Assistant in Workspace ignoring my refinements?

The AI Assistant edits the JSON envelope but does not guarantee deterministic output. Click **View details** on its latest reply to see exactly what changed; if the structure drifts, switch to the **JSON** tab and pin the exact fields you want (`text`, `props`, `children`) yourself, then keep the next refinement requests narrow and specific (`"make only the Email field read-only"`, not `"polish the form"`).

## See also

* [A2UI Composer Overview](./overview)
* [Composer Pages Walkthrough](./walkthrough)
* [Build the SkyBook Sample](./skybook-sample)
* [Overview](./../overview)
* [Getting Started with A2UI for Angular](./../getting-started)
* [AI Integration with Syncfusion A2UI for Angular](./../ai-integration)
* [Supported Components](./../supported-components)
* [A2UI v0.9 Protocol](https://a2ui.org/specification/v0.9-a2ui/)