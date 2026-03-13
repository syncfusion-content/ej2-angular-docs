---
layout: post
title: Cross hair in Angular Stock chart component | Syncfusion
description: Learn here all about Cross hair in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cross hair 
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair in Angular Stock chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/cross-hair-cs1" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/cross-hair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#fill-string) and [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#textstyle-fontmodel) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively.
Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/cross-hair-cs3" %}


**Snap to data**

Enabling the [`snapToData`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettingsModel/#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/cross-hair-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/cross-hair-cs4" %}

## Crosshair Label Customization

The [`crosshairLabelRender`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartModel#crosshairlabelrender) event is triggered before each crosshair axis label is rendered in the stock chart. This event provides the ability to customize the appearance and content of crosshair labels, or to conditionally prevent specific labels from being displayed.

The event arguments include:

- `text` – The default text for the crosshair label. You can modify this value to display custom content.
- `value` – The actual data value at the crosshair position.
- `axisName` – The name of the axis associated with the label.
- `axisOrientation` – The orientation of the axis, either `Horizontal` or `Vertical`.
- `textStyle` – Font properties for the label text, allowing customization of font family, size, weight, and color.
- `fill` – The background color of the crosshair label.
- `cancel` – Set this to **true** to prevent the label from being rendered.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/user-interaction/crosshair-label-render/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/user-interaction/crosshair-label-render/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/stock-chart/user-interaction/crosshair-label-render/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/stock-chart/user-interaction/crosshair-label-render" %}