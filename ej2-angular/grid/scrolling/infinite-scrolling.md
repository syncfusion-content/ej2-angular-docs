---
layout: post
title: Infinite scroll in Angular Grid component | Syncfusion
description: Learn how to use infinite scroll in the Syncfusion Angular Grid component of Essential JS 2 for seamless handling of large data collections, efficient on-demand data loading, caching, and advanced performance management.
platform: ej2-angular
control: Infinite scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in Angular Grid component

The infinite scrolling feature in the Grid enables seamless handling of large data sets without compromising performance. Infinite scrolling operates using a “load-on-demand” concept, where data is loaded as needed when users scroll. In this mode, a new block of data is fetched each time the scrollbar reaches the end of the vertical scroller, significantly improving user experience and scalability for large data collections in the Angular Grid.

A **block** refers to a set of rows equal to the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) of the Grid. If the `pageSize` is not explicitly defined, the Grid automatically calculates it based on the grid's viewport height and row height.

To enable infinite scrolling, set the [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableinfinitescrolling) property to **true** and specify a content height using the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property.

> The Grid does not send a new data request when revisiting the same page in infinite scroll mode.
> The `height` property must be defined when enabling `enableInfiniteScrolling`.

The following example demonstrates how to enable infinite scroll in the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging1-cs2" %}

## Number of blocks rendered during initial loading

You can control how many blocks (pages) are initially rendered when the Grid loads. Each block contains a number of rows equal to the page size. The total number of initially rendered rows is determined by multiplying the initial block count with the page size.

Specify the initial loading page count using the [infiniteScrollSettings.initialBlocks](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings/#initialblocks) property. By default, three pages are loaded during initial rendering. Additional data is buffered based on the page size or the number of visible rows corresponding to the grid height.

The following example demonstrates how to use the `initialBlocks` property to set the number of initial pages loaded, controlled via a **DropDownList** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging1-cs3" %}

## Efficient data caching and DOM management in grid cache mode

With grid cache mode enabled, the Grid reuses cached data blocks when revisiting them, reducing unnecessary data fetches. The DOM row elements are managed based on the value defined in the [infiniteScrollSettings.maxBlocks](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings/#maxblocks) property. When the maximum block count is exceeded, the oldest block of row elements is removed to accommodate new rows.

Enable cache mode by setting the [enableCache](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings/#enablecache) property to true within [infiniteScrollSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/infinitescrollsettings/).

Use the `maxBlocks` property in [infiniteScrollSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings) to set the maximum block count. The default value is 3.

The following example demonstrates enabling or disabling cache mode for infinite scrolling, triggered by the [Switch](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component's [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging1-cs4" %}

> When enabling [Hierarchy Grid](https://ej2.syncfusion.com/angular/documentation/grid/hierarchy-grid) or [Detail Template](https://ej2.syncfusion.com/angular/documentation/grid/row/detail-template) features together with infinite scrolling and the `height` property is not specified, a default height of **300px** will be applied. Since the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property is required for hierarchy grid and detail template, always define it as needed.

## Limitations

* Browsers have element height limitations—extremely large record sets may be restricted based on browser capabilities.
* The component or its parent container must have a static height set when using infinite scrolling. Setting height to 100% requires the parent container to also have a static height.
* When infinite scrolling is enabled, copy-paste and drag-and-drop features are restricted to the rows currently visible in the viewport.
* Cell selection does not persist when using cache mode.
* Group records cannot be collapsed in cache mode.
* Lazy load grouping with infinite scrolling does not support cache mode. Infinite scrolling is applied exclusively to parent-level caption rows in this context.
* Aggregated information and total group items are shown based only on currently rendered view items. For total aggregation across all items, refer to the [Group with paging](https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping#group-with-paging) guide.
* Programmatic selection using [selectRows](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) and [selectRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrow) methods is not supported with infinite scrolling.
* Infinite scrolling is not compatible with these features:
    1. Batch editing
    2. Normal editing
    3. Row spanning
    4. Column spanning
    5. Row template
    6. Row virtual scrolling
    7. Autofill
* Row drag and drop limitations with infinite scrolling:
    1. In cache mode, the grid will automatically refresh if the number of row **tr** elements exceeds the cache limit after a drop action.
    2. When performing row drag and drop with lazy load grouping, the grid will refresh automatically.
    3. With remote data, changes from row drag and drop apply only to the UI and are lost upon grid refresh unless updated in the database. Use the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop) event to update the back-end accordingly and refresh the grid to display changes.

## See Also

* [How to fetch the data when the scrollbar reaches the end of the scroller in Angular Grid](https://www.syncfusion.com/forums/156622/how-to-fetch-the-data-when-the-scrollbar-reaches-the-end-of-the-scroller-in-angular-grid)
* [Lazy loading in Angular Grid](https://www.syncfusion.com/forums/160679/lazy-loading-in-angular-grid)
