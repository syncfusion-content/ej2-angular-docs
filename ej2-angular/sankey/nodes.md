---
layout: post
title: Nodes in Angular Sankey component | Syncfusion
description: Learn here all about Nodes in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Nodes
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in Angular Sankey component

Nodes are the fundamental building blocks of a Sankey Chart, representing sources, targets, and intermediate entities in flow diagrams. The Sankey Chart provides extensive customization options for node appearance, enabling you to create visually meaningful and interactive flow diagrams.

This guide covers node customization including styling, individual appearance changes, opacity control, positioning, and dynamic rendering events.

## Node Appearance

The nodeStyle property allows you to customize the visual appearance of all nodes in the Sankey Chart. This provides a unified style for all nodes, which can be overridden at the individual node level or through rendering events.

### Node Style Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | number | 20 | Width of the node rectangle in pixels. |
| padding | number | 10 | Spacing between nodes and their labels. |
| fill | string | null | Fill color of nodes. If not specified, theme color is used. |
| stroke | string | '' | Stroke color of node borders. |
| strokeWidth | number | 1 | Width of the node border stroke. |
| opacity | number | 1 | Opacity of the node (0 to 1). |
| highlightOpacity | number | 1 | Opacity of node when highlighted. |
| inactiveOpacity | number | 0.3 | Opacity of inactive nodes (when interacting with others). |

## Global Node Customization

Customize the global node appearance by configuring the `nodeStyle` property with properties such as fill color, stroke, width, padding, and opacity levels. Here is an example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/customization-cs1" %}

## Individual Node Customization

Beyond global styling, you can customize the appearance of specific nodes by setting individual properties. Each node can have its own `color`, styling, and appearance settings that override the global `nodeStyle` configuration. This approach is useful when you want certain nodes to stand out or follow a specific color scheme:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/individual-color-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/individual-color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/individual-color-cs1" %}

## Opacity and Interaction

Control how nodes appear during user interactions. The Sankey Chart provides three opacity properties:

- **`opacity`**: The default opacity of nodes in their normal state (0 to 1)
- **`highlightOpacity`**: The opacity when a node is highlighted or hovered
- **`inactiveOpacity`**: The opacity of nodes that are not actively being interacted with

Configure these properties to provide visual feedback and improve the interactivity experience:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/opacity-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/opacity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/opacity-cs1" %}

## Node Offset

Use the `offset` property to adjust node positions vertically (in Horizontal orientation) or horizontally (in Vertical orientation).  
This is useful when manually arranging nodes to avoid overlaps or create specific flow layouts.

- **Horizontal orientation** → offset moves nodes vertically  
- **Vertical orientation** → offset moves nodes horizontally

This property is useful for manually arranging nodes to avoid overlaps or create specific flow patterns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/offset-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/offset-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/offset-cs1" %}

## Advanced Node Configuration

### Dynamic Node Customization

Use the `nodeRendering` event to customize node appearance dynamically during the render process. This event is triggered for each node before it is rendered, allowing you to apply conditional styling, calculate colors based on data values, or modify properties based on context. This is the most powerful way to create data-driven node visualizations:

## Node Rendering Event

Use `nodeRendering` to apply dynamic styling based on data or context. Additionally:  
This event triggers before each node is rendered, enabling data‑driven styling logic. You can conditionally apply colors, adjust sizes, or modify any appearance property dynamically based on node values or relationships.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/rendering-event-cs1" %}