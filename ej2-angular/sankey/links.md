---
layout: post
title: Links in Angular Sankey component | Syncfusion
description: Learn here all about Links in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Links
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Links in Angular Sankey component

Links are the connecting paths that visualize flow between nodes. Each link connects a source node to a target node and carries a quantitative value that determines its visual thickness.

## Link Style Properties

The `linkStyle` property allows you to customize opacity, curvature, color blending and interaction behaviors.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| opacity | number | 0.35 | Opacity of the link (0 to 1). |
| highlightOpacity | number | 1 | Opacity when highlighted. |
| inactiveOpacity | number | 0.3 | Opacity of inactive links. |
| curvature | number | 0.55 | Curvature factor of the link path (0 = straight, 1 = fully curved). |
| colorType | string | 'Blend' | Color blending type: 'Source', 'Target', or 'Blend'. |

## Basic Link Customization

Customize global link appearance using the `linkStyle` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/links/customization-cs1" %}

## Link Curvature and Color

The `curvature` property controls the bend of the links, affecting the visual flow representation:

- **Value 0**: Creates straight lines between nodes
- **Value 0.5-0.7**: Creates moderate curves (often preferred for readability)
- **Value 1.0**: Creates maximum curvature with smooth paths

Choose curvature values based on your data density and aesthetic preferences:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/curvature-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/curvature-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/links/curvature-cs1" %}

## Link Color Type

The `colorType` property determines how links are colored, providing flexibility in visual representation:

- **'Source'**: Links inherit the color of their source node (useful for tracking origin)
- **'Target'**: Links inherit the color of their target node (useful for tracking destination)
- **'Blend'**: Links display a smooth gradient blend of source and target node colors (default - recommended for most cases)

The color type you choose affects how users perceive flow relationships in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/colortype-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/colortype-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/links/colortype-cs1" %}

## Link Value and Thickness

The link thickness is determined by the `value` property in the link data. This quantitative value is automatically mapped to the visual thickness of the link:

- **Larger values**: Create thicker links (proportional to the value)
- **Smaller values**: Create thinner links
- **Equal values**: Create links of equal thickness

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/thickness-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/thickness-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/links/thickness-cs1" %}

## Advanced Link Configuration

Use the `linkRendering` event to customize link appearance dynamically during the render process. This event is triggered for each link before rendering, allowing you to apply conditional styling based on flow values, source-target combinations, or other data attributes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/links/rendering-event-cs1" %}
