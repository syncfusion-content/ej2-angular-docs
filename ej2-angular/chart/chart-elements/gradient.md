---
layout: post
title: Gradient in Angular Chart | Syncfusion
description: Learn here all about Gradient in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gradient
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Gradient in Angular Chart

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:
- Linear gradient
- Radial gradient

Gradients can be applied to:
- Series
- Trendlines
- Technical Indicators

## Linear gradient

A linear gradient blends color alongside a straight path from a defined start point to an end point. Configure it by adding `linearGradient` inside the target element (Series, Trendlines or Indicators). The gradient properties control the start and end positions, while `gradientColorStop` defines one or more color stops that determine how colors transition across the gradient.

In the `linearGradient`:
- `x1` - Sets the horizontal start position of the gradient (0 to 1).
- `y1` - Sets the vertical start position of the gradient (0 to 1).
- `x2` - Sets the horizontal end position of the gradient (0 to 1).
- `y2` - Sets the vertical end position of the gradient (0 to 1).

## Gradient color stops

The `gradientColorStop` property defines the color transitions along both linear and radial gradients. Configure one or more color stops within the `gradientColorStop` collection.

In the `gradientColorStop`:
- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop. Accepts any valid CSS color value (hex, RGB, RGBA, or named color).
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Range: -1 to 1.

### Series

Apply a linear gradient to a series by adding `linearGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs1" %}

### Trendlines

Apply a linear gradient to a trendline by adding `linearGradient` inside the target Trendline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs2" %}

### Technical Indicators

Apply a linear gradient to a technical indicator by adding `linearGradient` inside the target Indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs3" %}

## Radial gradient

A radial gradient blends colors outward from a central point, creating a circular or elliptical color progression. Configure it by adding `radialGradient` inside the target element (Series, Trendline, or Indicator). The gradient properties control the center, focal point, and radius, while `gradientColorStop` defines one or more color stops to control how colors transition from the center to the outer edge.

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient (0 to 1).
- `cy` - Sets the normalized vertical center of the gradient (0 to 1).
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate (0 to 1).
- `fy` - Sets the normalized vertical focal point (0 to 1).
- `r` - Sets the normalized radius of the gradient circle (0 to 1).

> Color stop properties (`offset`, `color`, `opacity`, `lighten`, and `brighten`) are shared with the linear gradient and are documented in the [Gradient color stops](#gradient-color-stops) section.

### Series

Apply a radial gradient to a series by adding `radialGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs4" %}

### Trendlines

Apply a radial gradient to a trendline by adding `radialGradient` inside the target Trendline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs9" %}

### Technical Indicators

Apply a radial gradient to a technical indicator by adding `radialGradient` inside the target Indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/gradient/chart-gradient-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/gradient/chart-gradient-cs10" %}

## Troubleshooting

- **Gradient not visible on markers or legend**: Ensure the gradient is applied directly on the series (and not only via a parent theme); the marker/legend/tooltip colors are inherited from the series gradient.
- **Colors transition abruptly**: Verify that `offset` values on `gradientColorStop` are monotonically increasing and span 0 to 100.
- **Radial gradient off-center**: Adjust `cx`, `cy`, and `r` (normalized 0 to 1) to fit the series shape.

## See also

- [Series](https://ej2.syncfusion.com/angular/documentation/api/chart/series)
- [Trendline API](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline)
- [Getting Started with Angular Chart](./getting-started)
