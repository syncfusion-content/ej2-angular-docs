---
layout: post
title: Legend in Angular 3D Circular Chart component | Syncfusion
description: Learn here all about legend in Syncfusion Angular 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Legend 
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Angular 3D Circular Chart component

The legend provides information about the data points rendered in the 3D Circular Chart. It can be added by enabling the `visible` option in the `legendSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/legend" %}

>To use the legends feature, inject the `CircularChartLegend3DService` into the `@NgModule.providers`.

## Position and alignment

By using the `position` property, the legend can be positioned at the `left`, `right`, `top` or `bottom` of the 3D Circular Chart. By default, the legend will be positioned to the right of the 3D Circular Chart. Additionally, you can align the legend to the `center`, `far` or `near` of the chart using the `alignment` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/position/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/position/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/position/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/position" %}

## Legend reverse

You can reverse the order of the legend items by using the `reverse` property in `legendSettings`. By default, the legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/reverse/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/reverse/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/reverse/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/reverse" %}

## Legend shape

To change the legend shape, use the `legendShape` property in the `series`. By default, the legend shape is set to `seriesType`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/legend-shape" %}

## Legend size

The legend size can be changed by using the `width` and `height` properties in `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/legend-size" %}

## Legend item size

The size of the legend items can be customized by using the `shapeHeight` and `shapeWidth` properties in `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-size/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-size/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-size/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/item-size" %}

## Legend paging

Paging will be enabled by default when the legend items exceed the legend bounds. Each legend item can be viewed by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/paging/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/paging/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/paging/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/paging" %}

## Legend text wrap

When the legend text exceeds the container, the text can be wrapped using the `textWrap` property in `legendSettings`. End users can also wrap the legend text based on the `maximumLabelWidth` property in `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/text-wrap" %}

## Legend title

You can set a title for the legend using the `title` property in `legendSettings`. The `size`, `color`, `opacity`, `fontStyle`, `fontWeight`, `fontFamily`, `textAlignment`, and `textOverflow` of the legend title can be customized using the `titleStyle` property in `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/legend-title" %}

## Arrow page navigation

The page number will always be visible when using legend paging. However, it is now possible to disable the page number and enable page navigation with the left and right arrows. To render the arrow page navigation, set the `enablePages` property to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/arrow-page" %}

## Legend item padding

The `itemPadding` property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/item-padding" %}