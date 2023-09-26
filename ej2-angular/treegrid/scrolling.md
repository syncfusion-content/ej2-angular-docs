---
layout: post
title: Scrolling in Angular Treegrid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Treegrid component

The scrollbar will be displayed in the treegrid when content exceeds the element [`width`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) or [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height). The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the treegrid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the treegrid element width.
* The [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) are used to set the treegrid height and width, respectively.

> The default value for [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) is `auto`.

## Set width and height

To specify the [`width`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) of the scroller in the pixel, set the pixel value to a number.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs28/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs28/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs28" %}

## Responsive with parent container

Specify the [`width`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) as `100%` to make the treegrid element fill its parent container.
Setting the [`height`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) to `100%` requires the treegrid parent element to have explicit height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/responsive-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/responsive-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/responsive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/responsive-cs1" %}

## Scroll to selected row

Scroll the tree grid content to the selected row position by using the [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowselected) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scroll-selection-cs1" %}

## Hide the scrollbar when the content is not overflown

Hide the scrollbar of the tree grid content by using the [`hideScroll`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidescroll) method when the content doesn't overflow its parent element.

In the following sample, the [`hideScroll`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidescroll) method is invoked inside the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scroll-selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scroll-selection-cs2" %}