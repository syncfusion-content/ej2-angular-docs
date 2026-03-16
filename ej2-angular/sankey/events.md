---
layout: post
title: Events in Angular Sankey component | Syncfusion
description: Learn here all about Events in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Sankey component

The Sankey component exposes events that allow custom behavior, respond to user interactions, and hook into the diagram lifecycle. Below are commonly used events and examples of handling them in Angular.

## Event List

| Event | Description |
|-------|-------------|
| load | Triggers before the Sankey renders; modify config here. |
| loaded | Triggers after the Sankey has rendered. |
| legendItemRendering | Triggered before a legend item is rendered. |
| labelRendering | Triggered before a label is rendered. |
| nodeRendering | Triggered before a node is rendered; use for dynamic styling. |
| linkRendering | Triggered before a link is rendered; use for conditional styling. |
| tooltipRendering | Triggered before tooltip content is shown. |
| nodeClick | Fired when a node is clicked. |
| nodeEnter | Fired when mouse enters a node. |
| nodeLeave | Fired when mouse leaves a node. |
| linkClick | Fired when a link is clicked. |
| linkEnter | Fired when mouse enters a link. |
| linkLeave | Fired when mouse leaves a link. |
| sizeChanged | Fired when diagram size changes. |
| beforeExport | Fired before export starts. |
| afterExport | Fired after the export process completes. |
| exportCompleted | Fired after export completes. |
| beforePrint | Fired before the print process starts. |

## Lifecycle Events

### Load and Loaded

Use `load` to adjust configuration before render and `loaded` for post-render initialization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/load-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/load-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/load-cs1" %}

### Loaded Event

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/loaded-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/loaded-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/loaded-cs1" %}

## Interaction Events

Handle node and link interactions to provide custom UI or navigation.

### Node Interaction

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/node-interaction-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/node-interaction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/node-interaction-cs1" %}

### Link Interaction

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/link-interaction-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/link-interaction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/link-interaction-cs1" %}

## Rendering Events

Use `nodeRendering`, `linkRendering`, `labelRendering`, and `legendItemRendering` to customize elements dynamically.

### Node Rendering

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/node-rendering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/node-rendering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/node-rendering-cs1" %}

### Link Rendering

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/link-rendering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/link-rendering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/link-rendering-cs1" %}

### Label Rendering

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/label-rendering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/label-rendering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/label-rendering-cs1" %}

### Legend Item Rendering

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/legend-rendering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/legend-rendering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/legend-rendering-cs1" %}

## Export and Size Events

Handle `sizeChanged`, `beforeExport`, `afterExport`, `beforePrint`, and `exportCompleted` to react to layout changes and export/print lifecycle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/size-changed-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/size-changed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/size-changed-cs1" %}

## Complete Event Handler Example

Combine multiple events for comprehensive event handling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/events/complete-handler-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/events/complete-handler-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/events/complete-handler-cs1" %}