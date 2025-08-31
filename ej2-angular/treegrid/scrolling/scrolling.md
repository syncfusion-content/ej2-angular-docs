---
layout: post
title: Scrolling in Angular TreeGrid component | Syncfusion
description: Learn how to enable and configure scrolling in the Syncfusion Angular TreeGrid component, including responsive sizing, sticky headers, scroll-to-row, and hiding scrollbars.
platform: ej2-angular
control: Scrolling
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular TreeGrid component

The scrolling feature in the TreeGrid component enables navigation through large amounts of data that extend beyond the visible area. Scrollbars are automatically displayed when the content exceeds the specified [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) or [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) of the TreeGrid. This feature is essential for presenting extensive content or working within limited screen space.

- A vertical scrollbar appears when the total row height exceeds the TreeGrid's height.
- A horizontal scrollbar appears when the total column width exceeds the TreeGrid's width.
- The `height` and `width` properties control the TreeGrid's dimensions.

> By default, the TreeGrid's `height` and `width` are set to `auto`.

## Set width and height

You can set exact width and height for the TreeGrid component according to your UI requirements by assigning a numeric pixel value or percentage to the [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) properties. 

For example, set the TreeGrid's `height` to 315 pixels and `width` to 400 pixels to enable scrollbars:

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

Create a responsive layout by setting the TreeGrid's [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) to `100%`. The TreeGrid will fill its parent container and adjust its size dynamically. The parent element must have an explicit height for the TreeGrid's 100% height to take effect.

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

## Sticky header

The TreeGrid offers sticky headers, which keep column headers visible at the top while scrolling vertically. This enhances user experience by maintaining data context during navigation of wide or long hierarchical data sets.

For example, in a project management application, users often need to scroll through a detailed list of tasks and subtasks. When the dataset is large, scrolling down can cause confusion if the column headers scroll out of view, making it difficult to remember what each column represents. By enabling sticky headers, the column headers remain visible even while scrolling, allowing users to easily keep track of the data context.

To enable sticky headers in the TreeGrid, you can simply set the `enableStickyHeader` property to **true**. This makes the column headers stick to the top of the TreeGrid container or its parent scrolling container when you scroll vertically.

The following sample demonstrates how to enable or disable the sticky header in the TreeGrid using a [Switch](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) and its [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-sticky-header/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-sticky-header/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/scrolling-sticky-header" %}

## Scroll to selected row

Scroll the TreeGrid content to bring the selected row into view using the [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowselected) event. This is especially useful when working with large datasets.

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

## Hide the empty placeholder of the scrollbar

You can hide the empty placeholder of the TreeGrid's scrollbar for a cleaner interface. Use the [hideScroll](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidescroll) method on the TreeGrid instance, typically within the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event.

Here is an example of using `hideScroll`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/scrolling-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/scrolling-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/scrolling-cs5" %}