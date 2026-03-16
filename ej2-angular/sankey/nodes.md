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

Nodes are the fundamental building blocks of a Sankey diagram, representing sources, sinks, and intermediaries. The Sankey component provides customization options for global node styles and per-node overrides. Additionally: Nodes represent sources, targets, and intermediate entities in flow diagrams, and customization of their appearance helps create visually meaningful and interactive flow diagrams.

## Node Appearance

Configure global appearance using `nodeStyle` (width, padding, fill, stroke, opacity, highlightOpacity, inactiveOpacity). Individual nodes can override these values. Also: the `nodeStyle` property allows customizing the visual appearance of all nodes, providing a unified style that can be overridden for specific nodes or via rendering events.

### Node Style Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | number | 20 | Width of node rectangle in pixels. |
| padding | number | 10 | Spacing between nodes and labels. |
| fill | string | null | Fill color; falls back to theme if not set. |
| stroke | string | '' | Border color for nodes. |
| strokeWidth | number | 1 | Border stroke width. |
| opacity | number | 1 | Default opacity for nodes. |
| highlightOpacity | number | 1 | Opacity when highlighted. |
| inactiveOpacity | number | 0.3 | Opacity for inactive nodes. |

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

Override per-node color and label properties directly in your data model. Additionally: each node can have its own color and appearance settings that override the global `nodeStyle`, useful when highlighting specific nodes or creating custom color schemes.

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

Use `opacity`, `highlightOpacity`, and `inactiveOpacity` to control visual feedback during interactions. Additionally:  
- **opacity** defines normal visibility,  
- **highlightOpacity** applies when nodes are hovered or highlighted,  
- **inactiveOpacity** dims unrelated nodes during interaction to emphasize active relationships.

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

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/nodes/offset-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/nodes/offset-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/nodes/offset-cs1" %}

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