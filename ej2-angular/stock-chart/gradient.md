---
layout: post
title: Gradient in Angular Stock chart component | Syncfusion
description: Learn here all about Gradient in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gradient
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Gradient in Angular Stock chart control

<!-- markdownlint-disable MD038 -->

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:
- Linear gradient
- Radial gradient

Gradients can be applied to:
- Series
- Trendlines
- Technical Indicators

## Linear gradient

A linear gradient blends color along side a straight path from a defined start point to an end point. Configure it by adding `linearGradient` inside the target element (Series, Trendlines or Indicators) and define one or more color stops that control how colors transition across the gradient. Set the start and end positions of the gradient using `x1`, `y1`, `x2` and `y2` properties. The gradient color stop values such as `offset`, `color`, `opacity`, `lighten` and `brighten` are set using the `gradientColorStop` property.

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

### Series

Apply a linear gradient to a series by adding `linearGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/stock-chart/chart-gradient-cs1" %}

### Technical Indicators

Apply a linear gradient to a technical indicator by adding `linearGradient` inside the target Indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/stock-chart/chart-gradient-cs3" %}

## Radial gradient

A radial gradient blends colors outward from a central point, creating a circular or elliptical color progression. Configure it by adding `radialGradient` inside the target element (Series, Trendline, or Indicator) and define one or more color stops to control how colors transition from the center to the outer edge. Set the gradient’s center, optional focal point, and radius using `radialGradient` properties. The color stop values such as `offset`, `color`, `opacity`, `lighten`, and `brighten` are set using the `gradientColorStop` property.

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient (0 to 1).
- `cy` - Sets the normalized vertical center of the gradient (0 to 1).
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate (0 to 1).
- `fy` - Sets the normalized vertical focal point (0 to 1).
- `r` - Sets the normalized radius of the gradient circle (0 to 1).

In the `gradientColorStop`:

- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Ranges: -1 to 1.

### Series

Apply a radial gradient to a series by adding `radialGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/stock-chart/chart-gradient-cs4" %}

### Technical Indicators

Apply a linear gradient to a technical indicator by adding `linearGradient` inside the target Indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-gradient-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/stock-chart/chart-gradient-cs5" %}

