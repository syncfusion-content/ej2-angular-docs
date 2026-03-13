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

Use `curvature` to control the link bend and `colorType` to determine whether links inherit source, target, or blended colors.

## Link Thickness

Link thickness is driven by the `value` property on the link data; larger values render thicker links.

## Advanced Link Configuration

Use the `linkRendering` event to customize individual links dynamically during rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/links/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/links/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/links/rendering-event-cs1" %}
