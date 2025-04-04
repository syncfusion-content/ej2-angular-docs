---
layout: post
title: Scrolling in Angular Grid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Grid component

The scrolling feature in the Angular Grid component allows you to navigate through the content that extends beyond the visible area of the grid . It provides scrollbars that are automatically displayed when the content exceeds the specified `width` or `height` of the grid element. This feature is useful when you have a large amount of data or when the content needs to be displayed within a limited space. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) are used to set the grid height and width, respectively.

> The default value for `height`and `width` is `auto`.

## Set width and height

The Angular Grid component offers a straightforward method to tailor the width and height of the scroller to meet your specific requirements. This is particularly useful when you want precise control over the dimensions of the scroller. To achieve this, you can use pixel values as numbers for the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) properties of the Grid.

In the following example, the scrollbar is enabled, and the grid's `height` is set to 315 pixels, while the `width` is set to 400 pixels:

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

The Grid component allows you to create a responsive layout by making it fill its parent container and automatically adjust its size based on the available space and changes in the container's dimensions. This capability is particularly useful for building applications that need to adapt to various screen sizes and devices.

To achieve this, you need to specify the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) properties of the Grid as 100%. However, keep in mind that setting the height property to 100% requires the Grid's parent element to have an explicit height defined.

In the following example, the parent container has explicit height and width set, and the Grid container's height and width are both set to 100%. This ensures that the Grid adjusts its size responsively based on the dimensions of the parent container:

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

The Angular Grid component provides a feature that allows you to make column headers remain fixed while scrolling, ensuring they stay visible at all times. To achieve this, you can utilize the [enableStickyHeader](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablestickyheader) property by setting it to **true**.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

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

The Angular Grid component allows you to scroll the grid content to the position of the selected row, ensuring that the selected row is automatically brought into view. This feature is particularly useful when dealing with a large dataset and wanting to maintain focus on the selected row. To achieve this, you can utilize the [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected) event provided by the Grid.

The following example that demonstrates how to use the `rowSelected` event to scroll to the selected row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/scrolling-select-cs1" %}

## Hide the empty placehoder of scrollbar

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides a feature to hide the empty placeholder of the scrollbar, offering a cleaner interface without unnecessary scrollbars. To achieve this, you can utilize the [hideScroll](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidescroll) method. This method allows you to determine whether the scrollbar should be hidden based on the content's overflow.

The following example that demonstrates how to use the `hideScroll` method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event:

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

The Syncfusion Angular Grid allows rendering scrollbars at both the top and bottom, enhancing horizontal navigation for large datasets. This feature ensures users can scroll the Grid from either direction, enhancing usability and accessibility.

Steps to render scrollbars at the top in the Grid:

1. **Add a Scrollbar** - Insert a `<div id="scroller">` above the Grid in the template to act as a top scrollbar.
2. **Initialize Scrollbar in [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) Event** - Retrieve the Grid's content and move the scroller `div` above it dynamically.
3. **Synchronize Scroll Events** - Link `onscroll` events of the scroller `div` and the Grid content to scroll together.
4. **Adjust Scrollbar Width and Visibility** - Use `setScroller()` to match the scrollbar width with the Grid and update it on window resize.

The following example demonstrates how to use the `created` event to insert a scrollbar at the top of the Grid content:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs5" %}