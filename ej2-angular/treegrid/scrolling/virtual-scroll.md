---
layout: post
title: Virtual scroll in Angular TreeGrid component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtual scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Angular TreeGrid component

The virtual scrolling feature in the TreeGrid component allows you to efficiently handle and display a large amount of data without experiencing any performance degradation. It optimizes the rendering process by loading only the visible rows in the tree grid viewport, rather than rendering the entire dataset at once. This is particularly useful when dealing with datasets that contain thousands of records.

To enable virtualization in the tree grid, you need to inject the **VirtualScrollService**. This service is responsible for managing the virtual scrolling behavior and optimizing the rendering of data to enhance performance.

## Row virtualization

Row virtualization is a feature in the tree grid that allows you to load and render rows only in the content viewport. It provides an alternative way of paging where data is loaded dynamically while scrolling vertically, rather than loading all the data at once. This is particularly useful when dealing with large datasets, as it improves the performance and reduces the initial load time.

To set up row virtualization, you need to define the [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablevirtualization) property as **true** and specify the content height using the [height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#height) property in the tree grid configuration.

The number of records displayed in the tree grid is implicitly determined by the height of the content area. Additionally, you have an option to explicitly define the visible number of records using the [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize) property. The loaded data will be cached and reused when needed in the future.

The following example demonstrates row virtualization using `enableVirtualization` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/virtual-scroll-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/virtual-scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/virtual-scroll-cs1" %}

### Limitations 

* Row virtual scrolling is not compatible with the following feature
	1. Batch editing
	2. Detail template
	3. Row template
	4. Rowspan
	5. Autofill
	
* It is necessary to set a static height for the component or its parent container when using row virtualization. The 100% height will work only if the component height is set to 100%, and its parent container has a static height.

* When row virtual scrolling is activated, compatibility for copy-paste and drag-and-drop operations is limited to the data items visible in the current viewport of the tree grid.
* The cell-based selection is not supported for row virtual scrolling. 
* Using different row heights with a template column, when the template height differs for each row, is not supported.
* Due to the element height limitation in browsers, the maximum number of records loaded by the tree grid is limited by the browser capability.
* The height of the tree grid content is calculated using the row height and total number of records in the data source and hence features which changes row height such as text wrapping are not supported.
* If you want to increase the row height to accommodate the content then you can specify the row height as below to ensure all the table rows are in same height.

    ```css
    .e-treegrid .e-row {
        height: 2em;
    }
    ```
## Column virtualization

Column virtualization feature in the tree grid that allows you to optimize the rendering of columns by displaying only the columns that are currently within the viewport. It allows horizontal scrolling to view additional columns. This feature is particularly useful when dealing with tree grids that have a large number of columns, as it helps to improve the performance and reduce the initial loading time.

To enable column virtualization, you need to set the [enableColumnVirtualization](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecolumnvirtualization) property of the tree grid to **true**. This configuration instructs the tree grid to only render the columns that are currently visible in the viewport. 

The following example demonstrates column virtualization using `enableColumnVirtualization`  property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/virtual-scroll-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/virtual-scroll-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/virtual-scroll-cs2" %}

> Column's [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) is required for column virtualization. If column's width is not defined then tree grid will consider its value as **200px**.

### Limitations 

* While using column virtual scrolling, column width should be in pixel. Percentage values are not accepted.
* Selected column details are only retained within the viewport. When the next set of columns is loaded, the selection for previously visible columns is lost.
* The cell selection is not supported for column virtual scrolling
* The following features are compatible with column virtualization and works only within the viewport:
   1. Column resizing
   2. Column reordering
   3. Auto-fit
   4. Print
   5. Clipboard
   6. Column menu - AutofitAll

* Column virtual scrolling is not compatible with the following feature
    1. Colspan
    2. Batch editing
    3. Column with infinite scrolling
    4. Stacked header
    5. Row template
    6. Detail template
    7. Autofill
    8. Column chooser

## Browser height limitation in virtual scrolling and solution

You can load millions of records in the tree grid by using virtual scrolling, where the tree grid loads and renders rows on-demand while scrolling vertically. As a result, tree grid lightens the browser’s load by minimizing the DOM elements and rendering elements visible in the viewport. The height of the tree grid is calculated using the Total Records Count * [Row Height](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowheight) property.

The browser has some maximum pixel height limitations for the scroll bar element. The content placed above the maximum height can't be scrolled if the element height is greater than the browser's maximum height limit. The browser height limit affects the virtual scrolling of the tree grid. When a large number of records are bound to the tree grid, it can only display the records until the maximum height limit of the browser. Once the browser's height limit is reached while scrolling, the user won't able to scroll further to view the remaining records.

For example, if the row height is set as 30px and the total record count is 1000000(1 million), then the height of the tree grid element will be 30,000,000 pixels. In this case, the browser's maximum height limit for a div is about 22,369,600 (The maximum pixel height limitation differs for different browsers). The records above the maximum height limit of the browser can't be scrolled.

This height limitation is not related to the TreeGrid component. It fully depends on the default behavior of the browser. The same issue is reproduced in the normal HTML table too.

The following image illustrates the height limitation issue of a normal HTML table in chrome browsers.

![Browser height limitation in HTML table of Chrome](../images/chrome.png)

TreeGrid component also faced the same issue as mentioned in the below image.

![Tree Grid with browser height limitation](../images/virtual-tree.png)

The Tree Grid has an option to overcome this limitation of the browser in the following ways.

### Solution 1: Using external buttons

You can prevent the height limitation problem in the browser when scrolling through millions of records by loading the segment of data through different strategy.

In the following sample, tree grid is rendered with a large number of records(nearly 2 million). Here, you can scroll 0.5 million records at a time in tree grid. Once you reach the last page of 0.5 million records, the **Load Next Set** button will be shown at the bottom of the tree grid. By clicking that button, you can view the next set of 0.5 million records in tree grid. Also, the **Load Previous Set** button will be shown at the top of the tree grid to load the previous set of 0.5 million records.

Let's see the step by step procedure for how we can overcome the limitation in the TreeGrid component.

1. Create a custom adaptor by extending UrlAdaptor and binding it to the tree grid DataSource property. In the processQuery method of the custom adaptor, we handled the Skip query based on the current page set to perform the data operation with whole records on the server.

    ```typescript
        class CustomUrlAdaptor extends UrlAdaptor {
            processQuery(args) {
                if (arguments[1].queries) {
                    for (const i = 0; i < arguments[1].queries.length; i++) {
                        if (arguments[1].queries[i].fn === 'onPage') {
                            // pageSet - defines the number of segments going to split the 2million records. In this example 0.5 million records are considered for each set so the pageSet is 1, 2, 3 and 4.
                            // maxRecordsPerPageSet – In this example the value is define as 0.5 million.

                            // gridPageSize – the pageSize defined in the Grid as pageSettings->pageSize property

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

2. Render the tree grid by define the following features.

    ```typescript
        <ejs-treegrid #grid [dataSource]='data' idMapping='taskID' parentIdMapping='parentID' hasChildMapping='isParent' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-treegrid>
    ```

3. In the beforeDataBound event, we set the args.count as 0.5 million to perform scrolling with 0.5 million records and all the data operations are performed with whole records which is handled using the custom adaptor. And also particular segment records count is less than 0.5 million means it will directly assigned the original segmented count instead of 0.5 million.

    ```typescript
        beforeDataBound(args) {
            // storing the total records count which means 2 million records count
            totalRecords = args.count;

            // change the count with respect to maxRecordsPerPageSet (maxRecordsPerPageSet = 500000)
            args.count = args.count - ((pageSet - 1) * maxRecordsPerPageSet) > maxRecordsPerPageSet ?maxRecordsPerPageSet : args.count - ((pageSet - 1) * maxRecordsPerPageSet);
        }
    ```

4. Render “Load Next Set” button and “Load Previous Set” button at bottom and top of the grid component.

    ```typescript
        <button ejs-button cssClass="e-info prevbtn" (onClick)="prevBtnClick($event)" content="Load Previous Set..."></button>

        <ejs-treegrid #grid [dataSource]='data' idMapping='taskID' parentIdMapping='parentID' hasChildMapping='isParent' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-treegrid>

        <button ejs-button cssClass="e-info nxtbtn" (onClick)="nxtBtnClick($event)" content="Load Next Set..."></button>
    ```

5. While click on the `Load Next Set` / `Load Previous Set` button corresponding page data set is loaded to view remaining records of total 2 millions records after doing some simple calculation.

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

> If you perform tree grid actions such as filtering, sorting, etc., after scrolling through the 0.5 million data, the tree grid performs those data actions with the whole records, not just the current loaded 0.5 million data.

### Solution 2: Using RowHeight property

You can reduce the [row height](https://ej2.syncfusion.com/angular/documentation/treegrid/row/row#row-height) using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowheight) property of the tree grid. It will reduce the overall height to accommodate more rows. But this approach optimizes the limitation, but if the height limit is reached after reducing row height also, you have to opt for the previous solution or use paging.

In the following image, you can see how many records will be scrollable when setting rowHeight to "36px" and "30px".

![Row Height](../images/row-height.png)

### Solution 3: Using paging instead of virtual scrolling

Similar to virtual scrolling, the [paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging/) feature also loads the data in an on-demand concept. Pagination is also compatible with all the other features in tree grid. So, use the paging feature instead of virtual scrolling to view a large number of records in the tree grid without any kind of performance degradation or browser height limitation.

## See also

* [Load on demand with virtualization in tree grid.](https://www.syncfusion.com/blogs/post/load-on-demand-and-virtualization-in-essential-js-2-treegrid)
* [Boosting Tree Grid Performance with Virtualization](https://www.syncfusion.com/blogs/post/boosting-javascript-tree-grid-performance-virtualization)
