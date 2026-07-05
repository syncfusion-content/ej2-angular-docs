---
layout: post
title: Tooltip in Angular Accumulation chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Accumulation chart component

Tooltip for the accumulation chart can be enabled by using the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#enable) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs31" %}

>Note: To use tooltip feature, inject the `AccumulationTooltipService` into the `@NgModule.providers`.

## Header

We can specify header for the tooltip using [`header`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#header) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs32" %}

## Format

By default, tooltip shows information of x and y value in points. In addition to that, you can show more
information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs33" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipsettings#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```ts
public tooltip = {
    enable: true,
    format: '${series.name} (${series.type})<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Size: ${point.size}<br>Opacity: ${series.opacity}'
};

```

In the above example, `point.y` is displayed with two decimal places, `point.percentage` is displayed in percentage format, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value or category value of the accumulation chart point.
- `point.y` – Specifies the numeric y-value of the accumulation chart point.
- `point.percentage` – Specifies the percentage contribution of the point value in the accumulation chart.
- `point.text` – Specifies the text value mapped to the point, when text mapping is configured.
- `point.tooltip` – Specifies the tooltip value mapped from the data source, when tooltip mapping is configured.
- `point.index` – Specifies the index position of the point in the accumulation chart.
- `point.color` – Specifies the fill color applied to the point.
- `point.visible` – Specifies the visibility state of the point.
- `series.name` – Specifies the name assigned to the accumulation chart series.
- `series.type` – Specifies the rendering type of the accumulation chart series, such as `Pie`, `Doughnut`, `Pyramid`, or `Funnel`.
- `series.opacity` – Specifies the opacity value applied to the accumulation chart series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the accumulation chart series type. For example, `point.percentage` is useful for pie and doughnut charts, while `point.text` and `point.tooltip` depend on the corresponding field mappings. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

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
{% include code-snippet/chart/series/inline-tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/inline-tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/inline-tooltip-cs1" %}

## Tooltip template

Any HTML element can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs34" %}

## Fixed tooltip

By default, tooltip track the mouse movement, but you can set a fixed position for the tooltip by using the [`location`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#location) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs38" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#fill) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettings#textstyle) property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationChartModel#highlightcolor) property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs35" %}

## Tooltip mapping name

By default, tooltip shows information of x and y value in points. You can show more information from datasource in tooltip by using the [`tooltipMappingName`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries#tooltipmappingname) property of the tooltip.
You can use the `${point.tooltip}` as place holders to display the specified tooltip content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs36" %}

## To customize individual tooltip

Using [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/index-default#tooltiprender) event, you can customize a tooltip for particular point. event, you can customize a tooltip for particular point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs37" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/tooltipSettingsModel#enablehighlight) property to **true**, the hovered pie slice is highlighted, while the remaining slices are dimmed, enhancing focus and clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs45" %}

## Follow pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the accumulation chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.

Enable this feature by setting the `followPointer` property to **true**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer-accumulation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer-accumulation/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer-accumulation/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/user-interaction/follow-pointer-accumulation" %}
