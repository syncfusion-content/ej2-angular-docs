---
layout: post
title: Scrolling in Angular Grid component | Syncfusion
description: Learn how to use scrolling in the Syncfusion Angular Grid component of Essential JS 2, including managing large data sets, customizing scrollbars, responsive layouts, and advanced scrollbar visibility.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Grid component

The scrolling feature in the Angular Grid component enables seamless navigation through content that extends beyond the visible area of the grid. Scrollbars are automatically displayed when the content exceeds the specified `width` or `height` of the grid element, making it practical to display large amounts of data within a limited space. Vertical and horizontal scrollbars are displayed under the following conditions:

* The vertical scrollbar is shown when the total height of rows in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of column widths exceeds the grid element width.
* The [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) properties set the grid's height and width, respectively.

> The default value for both `height` and `width` is `auto`.

## Set width and height

The Angular Grid component enables you to precisely define the width and height of the scroller to match your requirements. Use pixel values (as numbers) for the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) properties for direct control of the grid's dimensions.

In the following example, the vertical and horizontal scrollbars are enabled. The grid's `height` is set to 315 pixels and the `width` to 400 pixels:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs1" %}

## Responsive with parent container

The Grid can fill its parent container and respond automatically to changes in available space, making it ideal for adaptive layouts and responsive applications. To achieve this, specify the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) properties as **100%**. Note that when setting the grid's height to 100%, the parent container must have an explicit height defined.

The example below demonstrates a parent container with explicit dimensions and the grid set to 100% height and width for responsive behavior:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs2" %}

## Sticky header

The Angular Grid supports sticky column headers, ensuring that headers remain visible while scrolling through the grid content. Enable this feature by setting the [enableStickyHeader](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablestickyheader) property to **true**.

In the following demonstration, column headers remain fixed while scrolling the Grid's parent div:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs3" %}

## Scroll to selected row

The Angular Grid can automatically scroll to and bring any selected row into view. This is especially useful when working with large datasets and ensures the selected row remains in focus. Use the [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected) event to scroll to a selected row.

The following example shows how the `rowSelected` event can be used to scroll to the chosen row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-select-cs1" %}

## Hide the empty placeholder of scrollbar

The Syncfusion Grid allows you to hide empty scrollbar placeholders for a cleaner appearance. Use the [hideScroll](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidescroll) method to hide the scrollbar based on content overflow. This helps maintain a tidy interface and avoids showing unnecessary scrollbars.

The following example demonstrates how to use the `hideScroll` method in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs4" %}

## Render scrollbar in both top and bottom

The Syncfusion Angular Grid supports rendering horizontal scrollbars at both the top and bottom, improving navigation when working with wide datasets. This enhances accessibility by providing scroll access from either direction.

**To render a scrollbar at the top of the Grid:**

1. **Add a Scrollbar** - Insert a `<div id="scroller">` above the Grid in the template to serve as the top scrollbar.
2. **Initialize Scrollbar in [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) Event** - Dynamically move the scroller `div` above the grid content and set up its properties.
3. **Synchronize Scroll Events** - Connect the `onscroll` events of the top scroller and the Grid content so they scroll together.
4. **Adjust Scrollbar Width and Visibility** - Use `setScroller()` to ensure the scrollbar width matches the Grid and updates on window resize.

The example below shows how to use the `created` event to insert and synchronize a scrollbar at the top of the Grid content:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs5" %}
