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

Legend provides information about the series rendered in the chart.

To known more about legend settings, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=jfQ-7ftHodI" %}

## Position and Alignment

By using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#position) property, you can position the legend at left, right, top or bottom of the chart. The legend is positioned at the bottom of the chart, by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs38/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs38/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs38" %}

Custom position helps you to position the legend anywhere in the chart using x, y coordinates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs39/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs39/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs39" %}

<!-- markdownlint-disable MD036 -->

**Legend Reverse**

<!-- markdownlint-disable MD036 -->

You can reverse the order of the legend items by using the [`reverse`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs40/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs40/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs40" %}

**Legend Alignment**

<!-- markdownlint-disable MD036 -->

You can align the legend as `center`, `far` or `near` to the chart using [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#alignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs41/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs41/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs41" %}

## Customization

To change the legend icon shape, you can use [`legendShape`](https://ej2.syncfusion.com/angular/documentation/api/chart/series/#legendshape) property
in the [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/series/). By default legend icon shape is `seriesType`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs42/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs42/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs42" %}

### Legend Size

By default, legend takes 20% - 25% of the chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the chart's width vertically, when placed on left or right position of the chart. You can change this default legend size by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#height) property of the `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs43/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs43/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs43" %}

### Legend Item Size

You can customize the size of the legend items by using the [`shapeHeight`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#shapewidth) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs44/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs44/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs44" %}

### Paging for Legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/legend-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/legend-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/legend-cs1" %}

### Legend Text Wrap

When the legend text exceeds the container, the text can be wrapped by using [`textWrap`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#textwrap) Property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#maximumlabelwidth) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs45/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs45/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs45" %}

## Set the label color based on series color

You can set the legend label color based on series color by using chart's [loaded](https://ej2.syncfusion.com/angular/documentation/api/chart/#loaded) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs46/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs46/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs46" %}

## Series Selection on Legend

By default, legend click enables you to collapse the series visibility.  On other hand, if you need to select a series through legend click, disable the [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#togglevisibility).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs47/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs47/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs47" %}

## Enable Animation

You can customize the animation while clicking legend by setting enableAnimation as true or false using `enableAnimation` property in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs48/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs48/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs48" %}

## Collapsing Legend Item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs49/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs49/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs49" %}

## Legend Title

You can set title for legend using `title` property in `legendSettings`. You can also customize the `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity` and `textOverflow` of legend title. `titlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `maximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs50/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs50/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs50" %}

## Arrow Page Navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `enablePages` to get this support.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs51/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs51/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs51" %}

## Legend Item Padding

The [`itemPadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs52/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/axis/category-cs52/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs52" %}

>Note: To use legend feature, we need to inject `LegendService` into the `@NgModule.Providers`.

## See Also

* [Customize each shape in legend](./how-to/legend-customization/#customize-each-shape-in-legend)
