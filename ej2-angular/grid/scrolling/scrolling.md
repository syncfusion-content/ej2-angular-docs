---
layout: post
title: Angular Grid - Scrolling | Syncfusion
description: Angular Grid scrolling covers scroll behavior, dimension settings, responsive layouts, sticky headers, auto-scrolling, and dual-scrollbar configuration.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Grid Component

The scrolling feature in the Angular Grid component enables seamless navigation through content extending beyond the visible grid area. Scrollbars automatically appear when content exceeds the grid dimensions configured via the [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/grid#width) properties.

Scrollbar behavior:

* **Vertical scrollbar**: Appears when total row height exceeds the grid element height.
* **Horizontal scrollbar**: Appears when total column width exceeds the grid element width.
* **Default dimensions**: Both `height` and `width` default to "auto".

## Set width and height

The grid dimension configuration enables precise control over scrollbar display and grid size. Use pixel values with the [width](https://ej2.syncfusion.com/angular/documentation/api/grid#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) properties to define exact dimensions.

In the following example, the scrollbar is enabled, and the grid's `height` is set to "315" pixels, while the `width` is set to "400" pixels:

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

Responsive grid sizing enables dynamic adjustment to available space. The [width](https://ej2.syncfusion.com/angular/documentation/api/grid#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) properties accept "100%" values to fill the parent container.

Parent element configuration is required when setting `height` to "100%". The parent container must explicitly define a height value for the grid's responsive layout to function correctly.

In the following example, the parent container has explicit height and width set, and the grid container's height and width are both set to "100%":

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

Sticky header configuration keeps column headers visible during vertical scrolling. The [enableStickyHeader](https://ej2.syncfusion.com/angular/documentation/api/grid#enablestickyheader) property enables this behavior when set to `true`.

The following demo enables sticky header behavior during parent container scrolling.

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

Auto-scroll functionality automatically displays selected rows in view. The [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid#rowselected) event triggers scroll positioning when navigating large datasets.

The following example demonstrates auto-scroll implementation using the `rowSelected` event:

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

Scrollbar placeholder hiding enhances interface cleanliness by removing unnecessary scrollbar placeholders. The [hideScroll](https://ej2.syncfusion.com/angular/documentation/api/grid#hidescroll) method determines scrollbar visibility based on content overflow.

The following example demonstrates the `hideScroll` method implementation with the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event:

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

Dual scrollbar rendering at top and bottom positions enhances horizontal navigation for large datasets. This configuration enables convenient scrolling from either position.

Implementation steps:

| Step | Action | Details |
|------|--------|---------|
| 1 | Add HTML Element | Insert `<div id="scroller">` above the grid to create a top scrollbar. |
| 2 | Initialize in [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event | Position the scroller `div` above grid content dynamically. |
| 3 | Synchronize Scroll Events | Link `onscroll` events between the scroller and grid content. |
| 4 | Adjust Width and Visibility | Use the `setScroller()` method to match scrollbar width and respond to resize. |

The following example demonstrates to use the `created` event to insert a scrollbar at the top of the grid content:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/scrolling-cs5" %}
