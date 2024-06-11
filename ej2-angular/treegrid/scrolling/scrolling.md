---
layout: post
title: Scrolling in Angular TreeGrid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular TreeGrid component

The scrolling feature in the TreeGrid component allows navigation through content that extends beyond the visible area of the tree grid. Scrollbars are automatically displayed when the content exceeds the specified [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) or [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) of the tree grid element. This feature is useful for large amounts of data or when content needs to be displayed within a limited space. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of the rows exceeds the height of the tree grid element.
* The horizontal scrollbar appears when the total width of the columns exceeds the width of the tree grid element.
* The `height` and `width` are used to set the tree grid height and width, respectively.

> The default value for `height`and `width` of the tree grid is `auto`.

## Set width and height

The TreeGrid component offers a straightforward method to tailor the width and height of the tree grid component to meet your specific requirements. This is particularly useful when you want precise control over the dimensions of the tree grid. To achieve this, you can use pixel values as numbers or percentage values for the [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) properties of the tree grid.

In the following example, the scrollbar is enabled, and the tree grid's `height` is set to 315 pixels, while the `width` is set to 400 pixels:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scrolling-cs1" %}

## Responsive with parent container

The TreeGrid component allows you to create a responsive layout by making it fill its parent container and automatically adjust its size based on the available space and changes in the container's dimensions. This capability is particularly useful for building applications that need to adapt to various screen sizes and devices.

To achieve this, you need to specify the [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) properties of the tree grid as 100%. However, setting the height property to 100% requires the tree grid's parent element to have an explicitly defined height.

In the following example, the parent container has explicit height and width set, and the tree grid container's height and width are both set to 100%. This ensures that the tree grid adjusts its size responsively based on the dimensions of the parent container:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scrolling-cs2" %}

## Scroll to selected row

The TreeGrid component allows you to scroll the tree grid content to the position of the selected row, ensuring that the selected row is automatically brought into view. This feature is particularly useful when dealing with a large dataset and wanting to maintain focus on the selected row. To achieve this, you can utilize the [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowselected) event of the Tree Grid.

The following example demonstrates how to use the `rowSelected`` event to scroll to the selected row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scrolling-cs4" %}

## Hide the empty placehoder of scrollbar

The TreeGrid component provides support to hide the empty placeholder of the scrollbar, offering a cleaner interface without unnecessary scrollbars. To achieve this, you can utilize the [hideScroll](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidescroll) method of the grid object using the tree grid instance. This method allows you to determine whether the scrollbar should be hidden based on the content's overflow.

The following example demonstrates how to use the `hideScroll` method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/scrolling-cs5" %}