---
layout: post
title: Tooltip in Angular 3D Chart control | Syncfusion
description: Learn here all about tooltip in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular 3D Chart control

<!-- markdownlint-disable MD036 -->

The 3D Chart will display details about the points through tooltip, when the mouse is moved over the specific point.

## Default tooltip

By default, tooltip is not visible. The tooltip can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#enable) property in `tooltipSettings` to **true** and by injecting `Tooltip3DService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs1" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, tooltip track the mouse movement, but the tooltip can be set in fixed position by using the [`location`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#location) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs2" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, more information can be shown in tooltip by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#format) property. For example the format `${series.name} : ${point.y}` shows series name and point y value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs3" %}


## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```ts
public tooltip = {
  enable: true,
  format: '${series.name} (${series.type})<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Opacity: ${series.opacity}'
};

```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value of the data point, such as DateTime or category values.
- `point.y` – Specifies the numeric y-value of the data point.
- `series.name` – Specifies the name assigned to the series.
- `series.type` – Specifies the rendering type of the series, such as `Column`, `Bar`, `Line`, or `StackingColumn`.
- `series.opacity` – Specifies the opacity value applied to the series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the 3D chart series type. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimal places
  - `c2` – currency format
  - `p1` – percentage format
  - `e1` – exponential notation

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs6" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#template) property of the tooltip. The ${x} and ${y} can be used as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs4" %}

## Customize the appearance of tooltip

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#fill) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs5" %}