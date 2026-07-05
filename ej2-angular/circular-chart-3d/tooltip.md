---
layout: post
title: Tooltip in Angular 3D Circular Chart component | Syncfusion
description: Learn here all about tooltip in Syncfusion Angular 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular 3D Circular Chart component

The 3D Circular Chart will display details about the points through a tooltip, when the mouse is moved over a specific point. By default, the tooltip is not visible. It can be enabled by using the `enable` property in `tooltip` to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/tooltip" %}

>To use tooltip feature, inject the `CircularChartTooltip3DService` into the `@NgModule.providers`.

## Header

You can specify a header for the tooltip by using the `header` property in `tooltip`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/header/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/header/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/header" %}

## Format

By default, the tooltip shows information about the x and y values in points. Additionally, more information can be displayed in the tooltip by using the `format` property. For example, the format `${series.name} : ${point.x}` shows the series name and the point's x value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-format/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-format/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/tooltip-format" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the `format` property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier is applied by adding a colon (`:`) followed by the required format.

For example:

```ts
public tooltip = {
    enable: true,
    format: '${series.name} (${series.type})<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Size: ${point.size}<br>Opacity: ${series.opacity}'
};

```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, `point.percentage` is displayed in percentage format, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value or category value of the 3D circular chart point.
- `point.y` – Specifies the numeric y-value of the 3D circular chart point.
- `point.percentage` – Specifies the percentage contribution of the point value in the 3D circular chart.
- `point.text` – Specifies the text value mapped to the point, when text mapping is configured.
- `point.tooltip` – Specifies the tooltip value mapped from the data source, when tooltip mapping is configured.
- `point.index` – Specifies the index position of the point in the 3D circular chart.
- `point.color` – Specifies the fill color applied to the point.
- `point.visible` – Specifies the visibility state of the point.
- `series.name` – Specifies the name assigned to the 3D circular chart series.
- `series.opacity` – Specifies the opacity value applied to the 3D circular chart series.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the 3D circular chart series. For example, `point.percentage` is useful for pie and doughnut charts, while `point.text` and `point.tooltip` depend on the corresponding field mappings. String tokens such as `series.name`, `point.text`, `point.tooltip`, `point.color`, and `point.visible` return string values, so DateTime or number formatting is not applied to these tokens.

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimals
  - `c2` – currency format
  - `p1` – percentage format
  - `e1` – exponential notation

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/inline-tooltip-format/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/inline-tooltip-format/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/inline-tooltip-format" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the `template` property in the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/template" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement, but it can be set to a fixed position using the `location` property in `tooltip`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/fixed-tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/fixed-tooltip/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/fixed-tooltip" %}

## Customization

The `fill` and `border` properties are used to customize the background color and border of the tooltip, respectively. The `textStyle` property in the tooltip is used to customize the font of the tooltip text. Additionally, the `highlightColor` property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-custom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-custom/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/tooltip-custom" %}

## Customization of individual tooltip

Using the `tooltipRender` event, you can customize tooltip values for a particular point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/tooltip-event" %}