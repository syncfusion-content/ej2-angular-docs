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

The Sankey Chart provides comprehensive events that allow you to customize behavior, respond to user interactions, and hook into the chart life cycle. These events enable advanced customization scenarios including data transformation, analytics tracking, and dynamic UI updates.

This guide covers life cycle events, rendering events, interaction events, and export/print events.

## Event List

| Event | Description |
|-------|-------------|
| load | Triggers before the Sankey loads. Allows customization before rendering. |
| loaded | Triggers after the Sankey is fully loaded and rendered. |
| legendItemRendering | Triggers before a legend item is rendered. Allows customization of legend items. |
| labelRendering | Triggers before a label is rendered. Allows customization of label text and style. |
| nodeRendering | Triggers before a node is rendered. Allows customization of node appearance. |
| linkRendering | Triggers before a link is rendered. Allows customization of link appearance. |
| tooltipRendering | Triggers before a tooltip is rendered. Allows customization of tooltip content. |
| nodeClick | Triggers when a node is clicked. |
| nodeEnter | Triggers when the mouse enters a node area. |
| nodeLeave | Triggers when the mouse leaves a node area. |
| linkClick | Triggers when a link is clicked. |
| linkEnter | Triggers when the mouse enters a link area. |
| linkLeave | Triggers when the mouse leaves a link area. |
| sizeChanged | Triggers when the chart size changes. |
| beforeExport | Triggers before the export process starts. |
| afterExport | Triggers after the export process completes. |
| exportCompleted | Triggers when export is completed. |
| beforePrint | Triggers before the print process starts. |

## Lifecycle Events

### Load Event

The `load` event triggers before the Sankey Chart begins rendering. Use this event to customize configuration, apply themes, or prepare data before the chart loads:

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

The `loaded` event triggers after the Sankey Chart is completely rendered and ready for interaction. Use this event to initialize calculations, perform analytics, or trigger dependent components:

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

### Node Interaction

Handle node click and hover events to respond to user actions and provide interactive feedback:

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

Handle link click and hover events:

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

Use rendering events to customize elements dynamically based on data values, conditions, or business logic. This is the most powerful approach for data-driven styling.

### Node Rendering

The `nodeRendering` event triggers before each node is rendered, allowing dynamic node customization:

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

The `linkRendering` event triggers before each link is rendered, allowing dynamic link customization:

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

The `labelRendering` event triggers before each label is rendered, allowing dynamic label customization:

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

The `legendItemRendering` event triggers before a legend item is rendered, allowing custom legend item styling:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/legend-rendering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/legend-rendering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/legend-rendering-cs1" %}

## Size Changed Event

Respond when the chart size changes (e.g., window resize):

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