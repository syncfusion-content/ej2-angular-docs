---
layout: post
title: Legend in Angular Heatmap chart component | Syncfusion
description: Learn here all about Legend in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Legend 
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Angular Heatmap chart component

The legend is used to provide the information about the heat map cell. You can enable the legend by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#visible) property to true and injecting the `Legend` module using the `HeatMap.Inject(Legend)`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legend-cs1" %}

## Legend types

Heat map supports two legend types: Gradient and list type.

* Gradient - This is a continuous color legend with smooth color transition between palette color values.
* List - List is a fixed color legend. Each palette color information is shown separately in the list item.

You can change the legend type by using the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings/#type) property in the `paletteSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legendtype-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legendtype-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legendtype-cs1" %}

## Placement

You can place the legend at left, right, top, or bottom to the heat map layout by using the [position](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#position) property. The legend is positioned at the right to the heat map by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legendplacement-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legendplacement-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legendplacement-cs1" %}

## Alignment

You can align the legend as center, far, or near to the heat map using the [alignment](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#alignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legendalignment-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legendalignment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legendalignment-cs1" %}

## Legend dimensions

You can change the legend dimensions with values in pixels or percentage by using the [width](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#height) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legenddimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legenddimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legenddimension-cs1" %}

## Paging for legend

Paging is available only for the list type legend in the heat map, and it can be enabled by default,when the legend items exceed the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legendpaging-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legendpaging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legendpaging-cs1" %}

>Note: To use legend feature, we need to inject `Legend` using `HeatMap.Inject(Legend)`.

## Smart Legend

Smart legend is another way of showing list type legend with responsiveness and readability, when the palette has more number of items. You can enable this smart legend by using the [enableSmartLegend](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#enablesmartlegend) property when the palette type is set to **Fixed**.

In smart legend, you can change the display type of legend labels by using the [labelDisplayType](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#labeldisplaytype) property.

The following are the legend label display types:
* All: Displays all labels in the legend.
* Edge: Displays the legend labels only at extreme ends.
* None: None of the labels are displayed. The tooltip will appear for this type of label display when hovering over the legend item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/smartlegend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/smartlegend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/smartlegend-cs1" %}

## Legend Selection

In the HeatMap, the legend selection is used to toggle the visibility of cell for viewing the specific range value. You can enable the legend selection using the [toggleVisibility](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#togglevisibility) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legendselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legendselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legendselection-cs1" %}

## Legend Title

The legend title displays a specific information about the legend. You can enable the legend title by setting the [title](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#title) property by providing the text and customizing the legend title text style using the [textStyle](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/titleModel/#textStyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/legend/legend-title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/legend/legend-title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/legend/legend-title-cs1" %}