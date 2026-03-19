---
layout: post
title: Legend in Angular Sankey component \ Syncfusion
description: Learn here all about Legend in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Legend
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Angular Sankey component

A legend provides a visual key that helps users understand the categories and meanings represented by nodes in the Sankey Chart. The Sankey Chart provides comprehensive legend configuration options including positioning, styling, customization, and interactive behaviors. You can enable and customize the legend using the `legend` property and by injecting the `SankeyLegend` module.

This guide covers legend configuration, positioning strategies, customization options, and dynamic legend rendering events.

## Legend Settings Properties

The `legendSettings` property provides comprehensive options to configure legend appearance, behavior, and positioning. The following properties are commonly used:

| Property | Type | Default | Description |
|---------|------|---------|-------------|
| visible | boolean | true | Shows or hides the legend. |
| position | string | 'Auto' | Position of the legend (Auto, Top, Bottom, Left, Right, Custom). |
| width | string | null | Width of the legend container. |
| height | string | null | Height of the legend container. |
| shapeWidth | number | 10 | Width of the legend shape (icon). |
| shapeHeight | number | 10 | Height of the legend shape (icon). |
| padding | number | 8 | Padding around the legend container. |
| itemPadding | number | null | Padding between legend items. |
| shapePadding | number | 8 | Padding between the legend shape and its text. |
| background | string | 'transparent' | Background color of the legend. |
| opacity | number | 1 | Opacity of the legend container (0 to 1). |
| title | string | null | Title text for the legend. |
| enableHighlight | boolean | true | Enables highlighting of related nodes/links when a legend item is clicked. |
| isInversed | boolean | false | Inverts the legend layout. |

## Basic Legend Configuration

Here is an example of enabling and customizing the legend:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/legend/configuration-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/legend/configuration-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/legend/configuration-cs1" %}

## Legend Position

Control the legend position using the `position` property with the following options:

- **Top** – Legend appears above the Sankey diagram  
- **Bottom** – Legend appears below the Sankey diagram  
- **Left** – Legend appears to the left  
- **Right** – Legend appears to the right  
- **Auto** – Automatically positioned based on available space  
- **Custom** – Allows specifying exact coordinates using the `location` property  

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/legend/position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/legend/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/legend/position-cs1" %}

## Customized Legend

Customize the legend appearance with properties like background color, opacity, shape sizing, padding, and interactive highlighting. The following example demonstrates comprehensive legend styling:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/legend/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/legend/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/legend/customization-cs1" %}

## Custom Legend Position

Position the legend at a specific location using the `Custom` position setting. When using `Custom` position, specify the exact X and Y coordinates where the legend should appear. This provides precise control over legend placement:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/legend/custom-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/legend/custom-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/legend/custom-position-cs1" %}

## Advanced Legend Configuration

### Dynamic Legend Customization

Use the `legendItemRendering` event to modify legend items dynamically before rendering. This is useful for conditional styling, applying category-based colors, or modifying text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/legend/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/legend/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/legend/rendering-event-cs1" %}