---
layout: post
title: Angular Grid - Infinite Scroll | Syncfusion
description: Angular Grid infinite scrolling offers incremental loading, event‑driven data retrieval, and performance‑optimized processing of large datasets.
platform: ej2-angular
control: Infinite scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Infinite Scroll in Angular Grid Component

The infinite scrolling feature in the grid is a powerful tool for seamlessly handling extensive datasets by dynamically loading data as the vertical scrollbar reaches the end of the viewport. In infinite scrolling mode, a new block of data is loaded on-demand each time the scrollbar approaches the end, optimizing rendering performance by fetching only the required data blocks and reducing initial load time and memory usage. In this context, a block refers to the number of rows defined by the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesize) property, if not explicitly specified, the grid automatically calculates it based on the viewport and row height.

Injecting the `InfiniteScroll` module into the Grid component's `Inject` services array is required to enable infinite scrolling:

```ts
import { Inject, InfiniteScroll } from '@syncfusion/ej2-angular-grids';

<GridComponent>
  <Inject services={[InfiniteScroll]} />
</GridComponent>
```


Infinite scrolling feature can be enabled by setting the [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid#enableinfinitescrolling) property to `true`. The [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) property must also be specified to define the scrollable area of the grid. Refer to this [section](./scrolling#set-width-and-height) for grid basic scrolling setup and configurations.

> * The Grid does not send a new data request when revisiting the same page in infinite scroll mode.
> * The `height` property must be defined when enabling `enableInfiniteScrolling`.

The following example demonstrates to enable infinite scroll in the grid:

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

By default, three blocks are initially rendered when the grid is loaded. Each block corresponds to a page size of the grid, resulting in the rendering of a certain number of row elements determined by multiplying the initial block size with the page size.

Initial loading pages count configuration is managed through the [infiniteScrollSettings.initialBlocks](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings#initialblocks) property. The default value is "3". Subsequently, additional data is buffered and loaded based on either the page size or the number of rows rendered within the provided height.

The example below demonstrates to configure initialBlocks using a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component.

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

Cache mode in infinite scrolling improves performance by reusing previously loaded data blocks, minimizing frequent data requests. Enabling cache mode requires setting the [infiniteScrollSettings.enableCache](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings#enablecache) property to `true`.

The [maxBlocks](https://ej2.syncfusion.com/angular/documentation/api/grid/infiniteScrollSettings#maxblocks) property defines the maximum number of cached blocks. When this limit is exceeded, the grid removes the oldest block to manage DOM elements efficiently. The default value is "3".

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

> If [Hierarchy Grid](https://ej2.syncfusion.com/angular/documentation/grid/hierarchy-grid) or [Detail Template](https://ej2.syncfusion.com/angular/documentation/grid/row/detail-template) feature is enabled along with infinite scrolling without defining the height property, it will take a default height of "300px". Since the [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) property is mandatory for the hierarchy grid and detail template features, ensure to define it accordingly. 

## Limitations

* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited due to the browser capability.
* Set a static height for the component or its parent container when using infinite scrolling. The 100% height will work only if the component height is set to 100%, and its parent container has a static height.
* When infinite scrolling is activated, compatibility for copy-paste and drag-and-drop operations is limited to the data items visible in the current viewport of the grid.
* Cell selection will not be persisted in cache mode.
* Group records cannot be collapsed in cache mode.
* Lazy load grouping with infinite scrolling does not support cache mode, and the infinite scrolling mode is exclusively applicable to parent-level caption rows in the scenario.
* Aggregated information and total group items are displayed based on the current view items. To get the information regardless of the view items, refer to the [Group with paging](https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping#group-with-paging) topic.
* Programmatic selection using the [selectRows](https://ej2.syncfusion.com/angular/documentation/api/grid#selectrows) and [selectRow](https://ej2.syncfusion.com/angular/documentation/api/grid#selectrow) method is not supported in infinite scrolling.
* Infinite scrolling is not compatible with the following features:
    1. Batch editing.
    2. Row spanning.
    3. Column spanning.
    4. Row template.
    5. Row virtual scrolling.
    6. Autofill.
* Limitations of row drag and drop with infinite scrolling:
    1. In cache mode, the grid refreshes automatically if the content's "tr" element count exceeds the cache limit of the grid's content after the drop action.
    2. When performing row drag and drop with lazy load grouping, the grid will refresh automatically.
    3. In remote data, changes are applied only in the UI. They will be lost once the grid is refreshed. To restore them, update the changes in the database. By using the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdrop) event, send the request to the server and apply the changes in the database. After this, refresh the grid to show the updated data.
 
## See Also

* [How to fetch the data when the scrollbar reaches the end of the scroller in Angular Grid](https://www.syncfusion.com/forums/156622/how-to-fetch-the-data-when-the-scrollbar-reaches-the-end-of-the-scroller-in-angular-grid)
* [Lazy loading in Angular Grid](https://www.syncfusion.com/forums/160679/lazy-loading-in-angular-grid)
