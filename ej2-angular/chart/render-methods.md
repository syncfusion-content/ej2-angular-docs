---
layout: post
title: Rendering Modes in Angular Chart | Syncfusion
description: Learn here all about Render modes in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render modes 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Rendering Modes in Angular Chart

Chart supports two rendering modes:

* SVG
* Canvas

## SVG

SVG is the default rendering mode. Use SVG when you need interactivity, accessibility (DOM-based elements, ARIA), crisp vector output, animations, or when the dataset is small to moderate.

### Advantages of SVG

- Best for accessibility and DOM-level interaction (tooltips, focus, ARIA labels).
- Supports CSS and SVG animations, along with built-in event handling.
- Easier to style and export as scalable vector graphics for documents.

## Canvas

Canvas rendering is available via the chart input property [`enableCanvas`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#enablecanvas). When enabled, the chart draws to an HTML canvas surface rather than SVG, which can improve rendering throughput for very large datasets or rapid update scenarios.

**Default Value:** `false` (SVG)

**Type:** `boolean`

**Available in:** Essential JS 2 Angular Chart v18.4 and later. (Note: confirm the exact release that introduced `enableCanvas` in your published documentation set.)

### Usage example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/render-modes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/render-modes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/render-modes-cs1" %}

To switch back to SVG at runtime, set `[enableCanvas]="false"` or remove the binding. Changing the mode after the chart has rendered requires re-initializing the chart instance.

### When to prefer Canvas

- Very large point counts (see Tradeoffs and guidance below).
- High-frequency updates (many redraws per second).

### Canvas Limitations

- Canvas does not support SVG-specific features such as native SVG animations or vector export as SVG.
- Per-shape DOM-level event targets are not available; element-level events must be handled through the chart's own event API.
- Animations that rely on SVG/SMIL or CSS are not available in canvas mode. Implement transitions manually if needed.
- Accessibility: canvas content is bitmap; provide additional ARIA or hidden HTML to expose data to assistive technologies.
- Print and export behaviors differ when canvas mode is enabled. See [`Chart print and export`](./chart-print) for details.
- Tooltip, crosshair, selection, and zoom interaction are still supported via the chart's API but rely on coordinates instead of DOM elements.
- Server-side rendering (Angular Universal): canvas requires a DOM and is not supported during server rendering; defer initialization to the browser.

### Tradeoffs and guidance

- **Dataset size:** there is no single universal threshold. As a practical guideline based on internal benchmarks:
    - **Small to moderate data:** SVG is usually fine and provides better interactivity (tooltips, focus, native events).
    - **Large data:** Canvas generally performs better as the number of points grows, since SVG node creation and layout become costly.
    - When in doubt, profile both modes with representative data on your target device.
- **Update frequency:** for live updates where you redraw tens of times per second, Canvas typically provides smoother results. For updates measured in seconds, SVG is often acceptable.
- **Device/browser:** mobile devices with limited CPU/GPU may benefit more from Canvas for large datasets.

Performance note: exact behavior depends on data complexity, styling, device hardware, and browser. We recommend running simple benchmarks with representative data for your target environment.

### Summary

- Use SVG for accessibility, fine-grained interactions, animations, and small-to-moderate data sizes.
- Use Canvas (`[enableCanvas]="true"`) when you need raw rendering performance for very large datasets or high-frequency updates, and you can accept the limitations listed above.

### See also

- [Getting started with Angular Chart](./getting-started)
- [Chart appearance](./appearance)
- [Chart accessibility](./accessibility)
- [Chart print and export](./chart-print)
- [`enableCanvas` API reference](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#enablecanvas)