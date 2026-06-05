---
layout: post
title: Angular Grid - Virtual Scrolling | Syncfusion
description: Angular Grid virtual scrolling explains viewport rendering, row virtualization techniques, and configuration to handle very large datasets efficiently.
platform: ej2-angular
control: Virtual scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual Scrolling in Angular Grid Component

The virtual scrolling feature in the Angular Data Grid seamlessly handles and displays large amounts of data without performance degradation. It improves the rendering process by loading only the visible rows in the grid viewport, rather than rendering the entire dataset at once. This powerful capability is essential when dealing with datasets that contain thousands of records.

To enable virtualization, inject the `VirtualScrollService`, which manages virtual scrolling behavior and optimized data rendering for performance.

## Row virtualization

Row virtualization loads and renders rows only in the content viewport. It provides an effective alternative to traditional paging where data is loaded dynamically while scrolling vertically, rather than loading all the data at once. This approach significantly improves performance and reduces the initial load time when dealing with large datasets.

Row virtualization setup requires defining the [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/grid#enablevirtualization) property to `true` and specifying content height using the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#height) property in the grid configuration.

The Grid displays records based on the content area height. The [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel#pagesize) property explicitly defines the visible number of records. The loaded data is cached and reused when needed in the future.

The following example enables row virtualization using the `enableVirtualization` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging1-cs8" %}

### Limitations 

* Row virtual scrolling is incompatible with these features:
    1. Batch editing
    2. Detail template
    3. Row template
    4. Rowspan
    5. Autofill
    6. Hierarchy grid
* Copy-paste and drag-and-drop are limited to rows currently visible in the viewport.
* Cell-based selection is not supported.
* Different row heights within a template column (when template heights vary by row) are not supported.
* For remote data, group expand/collapse state is not persisted.
* The total maximum number of records that can be virtualized is limited by browser scroll height capabilities.
* Content height is calculated from row height and record count, so features altering row heights (like text wrapping) are not supported.
* To support larger content or text-wrapped rows, set a uniform row height using CSS:

    ```css
    .e-grid .e-row {
        height: 2em;
    }
    ```
* Aggregates and group totals show values only for the current visible view. For totals across all data, see [Group with paging](https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping#group-with-paging).
* Set a static height for the grid or its parent container; 100% height only works if both the component and its parent have explicit static heights.

## Column virtualization

Column virtualization feature in the grid optimizes the rendering of columns by displaying only the columns that are currently within the viewport. It enables seamless horizontal scrolling to view additional columns. This powerful feature significantly improves performance and reduces the initial loading time when dealing with grids that have a large number of columns.

Column virtualization configuration requires setting the [enableColumnVirtualization](https://ej2.syncfusion.com/angular/documentation/api/grid#enablecolumnvirtualization) property of the grid to `true`. This configuration instructs the grid to render only the columns currently visible in the viewport.

The following example enables column virtualization using the `enableColumnVirtualization` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging1-cs9" %}

> Column's [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column#width) is required for column virtualization. If column's width is not defined then grid will consider its value as "200px".

### Limitations 

* Column width must be specified in pixels; percentage values are not accepted.
* Column selection is retained only within the viewport. When new columns load, previously visible column selections are lost.
* Fixed positioning applies only to viewport columns. When scrolling to new columns, fixed positioning is removed.
* Cell selection is not supported for column virtual scrolling.
* <kbd>Ctrl + Home</kbd> and <kbd>Ctrl + End</kbd> keyboard shortcuts are not supported with column virtual scrolling.

**Compatible features** (work within viewport):
* Column resizing
* Column reordering
* Auto-fit
* Print
* Clipboard operations
* Column menu with AutofitAll and Grouping options

**Incompatible features**:
* Grouping
* Column spanning
* Batch editing
* Stacked header
* Row template
* Detail template
* Hierarchy grid
* Autofill
        

## Browser height limitation in virtual scrolling and solutions

Virtual scrolling enables loading millions of records efficiently by rendering rows on-demand while scrolling vertically. The grid lightens the browser's load by minimizing DOM elements and rendering only visible elements in the viewport. Grid height is calculated using: Total records count × [Row Height](https://ej2.syncfusion.com/angular/documentation/api/grid#rowheight).

Browsers have a maximum allowable scrollable element height. When the grid's content height exceeds this limit, vertical scrolling cannot access records beyond the browser's max height. For example, with a row height of 30px and 1,000,000 records, the height could exceed 22,369,600 pixels—a hard limit in Chrome or Firefox. This restricts virtual scrolling beyond a certain record count in both grids and standard HTML tables.

**Illustrations:**

![Browser height limitation in HTML table](../images/html-table.gif)

![Grid with browser height limitation](../images/grid.gif)

To address this browser limitation, consider the following approaches:

### Solution 1: Using external buttons

Prevent the browser height limitation when scrolling through millions of records by loading data in segments.

In the following sample, the grid is rendered with a large number of records (nearly 2 million). The example scrolls "0.5" million records at a time. Once the last page of "0.5" million records is reached, the **Load Next Set** button appears at the bottom of the grid. Clicking that button displays the next set of "0.5" million records. A **Load Previous Set** button appears at the top to load the previous set of "0.5" million records.

The following steps demonstrate overcoming the limitation in the Syncfusion Grid component.

1. Create a custom adaptor by extending UrlAdaptor and binding it to the grid DataSource property. In the processQuery method of the custom adaptor, we handled the Skip query based on the current page set to perform the data operation with whole records on the server.

    ```typescript
        class CustomUrlAdaptor extends UrlAdaptor {
            processQuery(args) {
                if (arguments[1].queries) {
                    for (const i = 0; i < arguments[1].queries.length; i++) {
                        if (arguments[1].queries[i].fn === 'onPage') {
                            // pageSet - defines the number of segments going to split the 2million records. In this example 0.5 million records are considered for each set so the pageSet is 1, 2, 3 and 4.
                            // maxRecordsPerPageSet - In this example the value is define as 0.5 million.

                            // gridPageSize - the pageSize defined in the Grid as pageSettings->pageSize property

                            // customize the pageIndex based on the current pageSet (It send the skip query including the previous pageSet ) so that the other operations performed for total 2millions records instead of 0.5 million alone.
                            arguments[1].queries[i].e.pageIndex = (((pageSet - 1) * maxRecordsPerPageSet) / gridPageSize) + arguments[1].queries[i].e.pageIndex;
                        }
                    }
                }
                let original = super.processQuery.apply(this, arguments);
                return original;
            }
        }
        this.data = new DataManager({
            adaptor: new CustomUrlAdaptor(),
            url: "Home/UrlDatasource"
        });
    ```

2. Render the grid by define the following features.

    ```typescript
        <ejs-grid #grid [dataSource]='data' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-grid>
    ```

3. In the beforeDataBound event, we set the args.count as "0.5" million to perform scrolling with "0.5" million records and all the data operations are performed with whole records which is handled using the custom adaptor. And also particular segment records count is less than "0.5" million means it will directly assigned the original segmented count instead of "0.5" million.

    ```typescript
        beforeDataBound(args) {
            // storing the total records count which means 2 million records count
            totalRecords = args.count;

            // change the count with respect to maxRecordsPerPageSet (maxRecordsPerPageSet = 500000)
            args.count = args.count - ((pageSet - 1) * maxRecordsPerPageSet) > maxRecordsPerPageSet ?maxRecordsPerPageSet : args.count - ((pageSet - 1) * maxRecordsPerPageSet);
        }
    ```

4. Render "Load Next Set" button and "Load Previous Set" button at bottom and top of the grid component.

    ```typescript
        <button ejs-button cssClass="e-info prevbtn" (onClick)="prevBtnClick($event)" content="Load Previous Set..."></button>

        <ejs-grid #grid [dataSource]='data' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-grid>

        <button ejs-button cssClass="e-info nxtbtn" (onClick)="nxtBtnClick($event)" content="Load Next Set..."></button>
    ```

5. While click on the "Load Next Set" / "Load Previous Set" button corresponding page data set is loaded to view remaining records of total 2 millions records after doing some simple calculation.

    ```typescript
        // Triggered when clicking the Previous/ Next button.
        prevNxtBtnClick(args) {
            if (grid.element.querySelector('.e-content') && grid.element.querySelector('.e-content').getAttribute('aria-busy') === 'false') {
                // Increase/decrease the pageSet based on the target element.
                pageSet = args.target.classList.contains('prevbtn') ? --pageSet : ++pageSet;
                this.rerenderGrid(); // Re-render the Grid component.
            }
        }
    ```

 <!-- You can view the hosted link for this sample [here](https://ej2.syncfusion.com/aspnetcore/Load_millions_of_records). -->

![Prevent browser height limitation](../images/external-button.png)

> Grid actions like filtering and sorting apply across the entire data set, not just the currently loaded segment.

### Solution 2: Using RowHeight property

Reduce the row height using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid#rowheight) property to minimize total grid height before hitting the browser limit. If the limitation persists even after reduction, use segment navigation or paging.

**Demonstration - scrollable records at 36px and 30px row heights:**

![Row Height](../images/row-height.gif)

### Solution 3: Using paging instead of virtual scrolling

Similar to virtual scrolling, the [paging](https://ej2.syncfusion.com/angular/documentation/grid/paging) feature also loads the data in an on-demand concept. Pagination is also compatible with all the other features(Grouping, Editing, etc.) in grid. So, use the paging feature instead of virtual scrolling to view a large number of records in the grid without any kind of performance degradation or browser height limitation.

## See also

[How to load a million records in less than a second Grid](https://www.syncfusion.com/blogs/post/how-to-load-a-million-records-in-less-than-a-second-in-syncfusion-angular-data-grid.aspx)
