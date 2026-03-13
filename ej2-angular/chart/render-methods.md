---
layout: post
title: Render modes in Angular Chart component | Syncfusion
description: Learn here all about Render modes in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render modes 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Render modes in Angular Chart component

Chart supports two rendering modes:

* SVG
* Canvas

## SVG

SVG is the default rendering mode. Use SVG when you need interactivity, accessibility (DOM-based elements, ARIA), crisp vector output, animations, or when the dataset is small to moderate.

Advantages of SVG

- Best for accessibility and DOM-level interaction (tooltips, focus, ARIA labels).
- Supports CSS and SVG animations and built-in event handling.
- Easier to style and export as vector graphics for documents.

## Canvas

Canvas rendering is available via the chart input property `enableCanvas`. When enabled the chart draws to an HTML canvas surface rather than SVG, which can improve rendering throughput for very large datasets or rapid update scenarios.

Usage example (Angular template):

```html
<!-- Enable canvas rendering on the chart -->
<ejs-chart [enableCanvas]="true" [series]="chartSeries"></ejs-chart>
```

Or set via component property:

```ts
export class AppComponent {
	public enableCanvas = true;
	public chartSeries = [ /* ... */ ];
}
```

Default: `enableCanvas` is `false` (SVG). Property type: `boolean`.

When to prefer Canvas

- Very large point counts (see guidance below).
- High-frequency updates (many redraws per second).

### Canvas Limitations

- Canvas does not support SVG-specific features such as native SVG animations, DOM-level event targets for each shape, or vector export as SVG.
- Animations that rely on SVG/SMIL or CSS are not available in canvas mode; transitions should be implemented manually if needed.
- Accessibility: canvas content is bitmap; additional ARIA/hidden HTML must be provided to expose data to assistive tech.

**Tradeoffs and guidance**

- Dataset size: there is no single universal threshold, but as a practical guideline:
	- Up to ~5k points: SVG is usually fine and provides better interactivity.
	- ~5k–50k points: test both modes for your data and device targets.
	- >50k points: Canvas often performs significantly better.
- Update frequency: for live updates where you redraw tens of times per second, Canvas typically provides smoother results. For updates measured in seconds, SVG is often acceptable.
- Device/browser: mobile devices with limited CPU/GPU may benefit more from Canvas for large datasets.

Performance note: exact behavior depends on data complexity, styling, device hardware, and browser. We recommend running simple benchmarks with representative data for your target environment.

**Summary**

- Use SVG for accessibility, fine-grained interactions, animations, and small-to-moderate data sizes.
- Use Canvas (`[enableCanvas]="true"`) when you need raw rendering performance for very large datasets or high-frequency updates, and you can accept the limitations listed above.