---
layout: post
title: Infinite scroll in Angular TreeGrid component | Syncfusion
description: Learn how to enable and configure infinite scroll in the Syncfusion Angular TreeGrid component for efficient large data handling, cache management, and best practices.
platform: ej2-angular
control: Infinite scroll
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in Angular TreeGrid component

The infinite scrolling feature in the TreeGrid offers seamless handling of large datasets while maintaining high performance. Infinite scroll operates on a "load-on-demand" concept, where data is fetched only as needed. In default infinite scrolling mode, a new block of data is loaded each time the scrollbar reaches the end of the TreeGrid's vertical scroller. This approach delivers enhanced performance and responsiveness when working with extensive data collections.

In infinite scrolling, a **block** refers to the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize) of the TreeGrid. If `pageSize` is not explicitly set, it is calculated automatically based on the TreeGrid’s viewport height and row height.

To enable infinite scrolling, set [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/treegrid#enableinfinitescrolling) to **true** and define the content height using the [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) property.

> In infinite scrolling, the TreeGrid will not initiate a new data request when revisiting the same page.
> The `height` property must be specified when using `enableInfiniteScrolling`.

The following example demonstrates how to enable infinite scroll in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs1" %}

## Number of blocks rendered during initial loading

The number of blocks to be initially rendered when the tree grid is loaded. Each block corresponds to a page size of the tree grid, resulting in the rendering of a certain number of row elements determined by multiplying the initial block size with the page size.

You can define the initial loading pages count by using [infiniteScrollSettings.initialBlocks](https://ej2.syncfusion.com/angular/documentation/api/treegrid/infiniteScrollSettings/#initialblocks) property. By default, this property loads three pages during the initial rendering. Subsequently, additional data is buffered and loaded based on either the page size or the number of rows rendered within the provided height.

The following an example of how you can use the `initialBlocks` property to set the initial loading pages based on **DropDownList** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs2" %}

## Efficient data caching and DOM management in cache mode

In TreeGrid cache mode, previously loaded blocks are reused when revisiting, minimizing data requests as you scroll back and forth. The maximum number of cached blocks is controlled by the [infiniteScrollSettings.maxBlocks](https://ej2.syncfusion.com/angular/documentation/api/treegrid/infiniteScrollSettings/#maxblocks) property (default is 3). When this limit is exceeded, the oldest block of row elements is removed from the cache to accommodate new rows.

To enable cache mode, set [enableCache](https://ej2.syncfusion.com/angular/documentation/api/treegrid/infiniteScrollSettings/#enablecache) to **true** in [infiniteScrollSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/infinitescrollsettings/). Set the maximum block count using `maxBlocks` as needed.

The following example demonstrates enabling or disabling cache mode using a [Switch](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component's [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs3" %}

## Limitations

* Due to browser element height limitations, the maximum number of records loaded by TreeGrid is limited by browser capabilities.
* Always set a static height for the TreeGrid or its parent container when using infinite scrolling. Setting 100% height works only if the parent container has a fixed height.
* When infinite scrolling is enabled, copy-paste and drag-and-drop operations are limited to rows in the current viewport.
* Cell selection is not persisted in cache mode.
* Aggregate information is shown based only on current view items.
* Programmatic selection using [selectRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrows) and [selectRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrow) is not supported in infinite scrolling mode.
* Infinite scrolling is not compatible with:
    1. Batch editing
    2. Row/Cell editing
    3. Row spanning
    4. Column spanning
    5. Row template
    6. Row virtual scrolling
    7. Detail template
    8. Autofill
* Limitations with row drag and drop:
    1. In cache mode, the TreeGrid automatically refreshes if the number of content row elements (`tr`) exceeds the cache limit after a drop action.
    2. With remote data, changes made via drag and drop affect only the UI. These changes are lost after a refresh unless they are updated in the backend. Use the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrop) event to update your server and refresh the TreeGrid to display new data.
* Infinite scrolling does not support rendering records in a collapsed state. All records need to be fully expanded on initial load for this feature to work.
