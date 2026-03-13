---
layout: post
title: Gradient in Angular Accumulation chart component | Syncfusion
description: Learn here all abount Gradient in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gradient
documentation: ug
domainurl: ##DomainURL##
---

# Gradient in Angular Accumulation chart component

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:

- Linear gradient
- Radial gradient

## Linear gradient

A linear gradient blends colors along a straight path from a defined start point to an end point. In accumulation charts, a linear gradient can be applied either to the whole series or to each point via the pointRender event. An `linearGradient` is configured with one or more color stops.

The linear gradient properties are:

- `x1` - Horizontal start position of the gradient (0 to 1).
- `y1` - Vertical start position of the gradient (0 to 1).
- `x2` - Horizontal end position of the gradient (0 to 1).
- `y2` - Vertical end position of the gradient (0 to 1).

Properties for `gradientColorStop`:

- `offset` - Position along the gradient (0 to 100).
- `color` - Base color at the stop.
- `opacity` - Transparency (0 to 1).
- `lighten` - Adjusts lightness (positive lightens, negative darkens).
- `brighten` - Adjusts brightness (positive increases, negative decreases).

### Apply gradient to the entire series

A linear gradient may be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs5" %}

### Apply a gradient per point using the point render event

A diagonal linear gradient can be applied per data point using the pointRender event for a clear light-to-shadow transition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs6" %}

## Radial gradient

In the `linearGradient`:
- `x1` - Sets the horizontal start position of the gradient (0 to 1).
- `y1` - Sets the vertical start position of the gradient (0 to 1).
- `x2` - Sets the horizontal end position of the gradient (0 to 1).
- `y2` - Sets the vertical end position of the gradient (0 to 1).

In the `gradientColorStop`:
- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Ranges: -1 to 1.

### Apply a radial gradient to the entire series

A radial gradient can be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs7" %}

### Apply a radial gradient per point using the point render event

The following example uses a distinct color palette and an off-center radial gradient to create a clear light-to-shadow effect on each data point. The gradient is configured in pointRender, so each data point receives its own radial gradient derived from its base color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs8" %}
