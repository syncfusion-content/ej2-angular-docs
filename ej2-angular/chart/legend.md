---
layout: post
title: Legend in Angular Chart component | Syncfusion
description: Learn here all about Legend in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Legend 
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Angular Chart component

The legend provides information about the series rendered in the chart and helps users identify each series by its color, shape, or style.

To get started quickly with legends in angular Charts, refer to this video:

{% youtube "https://www.youtube.com/watch?v=jfQ-7ftHodI" %}

## Position and alignment

By using the[`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#position)property, the legend can be positioned at the left, right, top, or bottom of the chart. By default, the legend is positioned at the bottom of the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs38" %}

Custom positioning allows the legend to be placed anywhere in the chart using `x` and `y` coordinates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs39" %}

<!-- markdownlint-disable MD036 -->

**Legend reverse**

<!-- markdownlint-disable MD036 -->

Use the [`reverse`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#reverse) property to reverse the order of legend items. By default, the legend item for the first series is placed first.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs40" %}

**Legend alignment**

<!-- markdownlint-disable MD036 -->

Align the legend to `center`, `far`, or `near` using the [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#alignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs41/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs41" %}

## Customization

To change the legend icon shape, use the [`legendShape`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#legendshape) property in the [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/series). By default, the legend icon shape is the `seriesType`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs42/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs42" %}

### Legend size

By default, the legend occupies approximately 20%–25% of the chart height when positioned at the top or bottom, and 20%–25% of the chart width when positioned at the left or right. Change the default size using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#height) properties of `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs43/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs43" %}

### Legend item size

Customize the size of legend items using the [`shapeHeight`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#shapewidth) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs44" %}

### Paging for legend

Paging is enabled automatically when legend items exceed the legend bounds. Navigate between pages using the provided navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/legend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/legend-cs1" %}

### Legend text wrap

When legend text exceeds the container, enable wrapping using the [`textWrap`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#textwrap) property. Wrapping can also be controlled using the [`maximumLabelWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#maximumlabelwidth) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs45" %}

## Set the label color based on series color

Set the legend label color based on the series color by using the chart’s [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/chart#loaded) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs46/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs46" %}

## Series selection on legend

By default, clicking a legend item toggles the visibility of its series. To select a series through a legend click, disable [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#togglevisibility).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs47/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs47" %}

## Enable animation

Enable or disable animation during legend interactions by setting `enableAnimation` to `true` or `false` in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs48" %}

## Collapsing legend item

By default, the series name is displayed as a legend item. To omit a legend item for a particular series, set the series name to an empty string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs49" %}

## Legend title

Set a title for the legend using the `title` property in `legendSettings`. The title can be customized using `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity`, and `textOverflow`. Use `titlePosition` to place the title at `Top`, `Left`, or `Right`. The `maximumTitleWidth` property sets the width of the legend title and defaults to `100px`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs50" %}

## Arrow page navigation

When legend paging is enabled, page numbers are shown by default. To display only left and right arrows for navigation, set `enablePages` to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs51" %}

## Legend item padding

Use the [`itemPadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#itempadding) property to adjust the spacing between legend items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs52/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs52" %}

## Legend layout

The [`layout`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#layout) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart#legendsettings) displays the legend horizontally or vertically. By default, [`layout`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#layout) is set to **Auto**. The [`maximumColumns`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#maximumcolumns) property defines the maximum number of columns that can be displayed within the available space when using auto layout. Enabling the [`fixedWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#fixedwidth) property ensures that all legend items have equal widths, determined by the maximum item width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs53/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs53" %}

-Note: To use legend feature, inject `LegendService` into the `@NgModule.Providers`.

## See also

* [Customize each shape in legend](./how-to/legend-customization#customize-each-shape-in-legend)
