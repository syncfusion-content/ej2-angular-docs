---
layout: post
title: Performance best practices for Angular TreeGrid Component | Syncfusion
description: Learn best practices for optimizing performance and fast data loading in the Syncfusion Angular TreeGrid component when working with large and complex hierarchical datasets.
platform: ej2-angular
control: TreeGrid
documentation: ug
---

# Performance best practices for Angular TreeGrid component

This article provides actionable strategies for optimizing the loading performance of the Angular TreeGrid, especially when working with complex hierarchical data containing many columns and rows. It outlines methods for efficiently binding large datasets while maintaining an optimal user experience and performance, even under demanding scenarios.

## Improving loading performance with large datasets

The TreeGrid displays hierarchical data using rows and columns. With large data sources, optimizing rendering is critical. For example, binding a dataset with 10 parent records, each having 10 child records, and 10 columns results in 1,100 DOM elements rendered. To maximize performance, limit the number of rows and columns rendered simultaneously, reducing browser workload and enabling TreeGrid to handle extensive data without degradation.

### Enhance performance with paging

Enable [paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging) to divide the data into pages and limit the number of rows rendered at a time. This improves both load times and user responsiveness, especially with deeply nested data. For guidance on configuring paging, see the TreeGrid [Paging documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/paging).

### Optimize performance with row virtualization and infinite scrolling

Use [virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll) or [infinite scrolling](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/infinite-scroll) to manage large hierarchical datasets efficiently:

1. **Virtualization**: Only the rows visible in the viewport are rendered, rather than the entire dataset, greatly increasing performance with large or deeply nested data. For details, see the TreeGrid [Virtual Scrolling documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll).

2. **Infinite Scrolling**: Loads data on demand as the user scrolls, fetching new blocks of rows when reaching the end of the vertical scroller, and keeping the TreeGrid responsive. See the TreeGrid [Infinite Scrolling documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/infinite-scroll).

### Column virtualization for large numbers of columns

The [column virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#column-virtualization) feature optimizes column rendering by displaying only those within the current viewport; additional columns become visible when horizontally scrolled. This is essential for TreeGrids with many columns to reduce initial load time and DOM size.

Both row and column virtualization can be combined, dynamically loading only visible rows and columns for maximum efficiency and improved grid responsiveness, even in complex hierarchical scenarios. See the TreeGrid [Column Virtualization documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#column-virtualization) for more details.

## Using column templates for efficient custom cell content

When customizing TreeGrid columns with images or templates, use the column template feature to avoid rendering delays. Relying on [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) or [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) events can slow down rendering with large data. 

#### Why choose column templates instead of events?
1.  **Performance Optimization**: The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) and [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) events are triggered for each row and cell rendering, which can introduce significant delays, especially with large hierarchical datasets.
2.  **Avoid Persistent Elements**: Rendering custom elements using events can lead to the persistence of previously rendered elements, potentially increasing rendering times over time.
3.  **Streamlined Rendering**: By leveraging column templates, you can achieve the desired customization without impacting rendering performance, ensuring a smoother and faster experience.By adopting the Column Template feature, you can efficiently customize the Tree Grid columns while maintaining optimal performance and rendering speed.
   
For detailed guidance, refer to the [Tree Grid Column Template Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-template).

## Updating cell values without frequent server calls

For live updates or batch editing scenarios, use the [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue) method to update cell values directly in the UI after initial data binding. This method updates the value in the TreeGrid without sending requests to the server or database, maintaining both performance and a responsive interface.

## Optimizing server-side data operations with adaptors

Angular TreeGrid supports adaptors such as `OData`, `ODataV4`, `WebAPI`, and `URL` for server-side data operations and CRUD functionality. With the `DataManager` component, remote hierarchical data sources can be efficiently managed and bound.

During server-side operations—such as filtering, sorting, aggregates, and paging—the TreeGrid generates action queries as per the adaptor in use. These queries should be processed on the server, and data returned in a compatible structure. For best results and accurate records, the recommended server-side sequence is:

* Apply filtering to select relevant records.
* Perform sorting on the filtered dataset.
* Compute aggregates if required.
* Apply paging to reduce the result set before sending to the client.

Following this order ensures the TreeGrid loads large datasets efficiently and accurately.

## See also

* [Browser height limitation in virtual scrolling and solution](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#browser-height-limitation-in-virtual-scrolling-and-solution)
* [How to improve loading performance by referring individual script and CSS](https://ej2.syncfusion.com/angular/documentation/grid/performance#how-to-improve-loading-performance-by-referring-individual-script-and-css)
* [How to avoid MaxJsonLength error while passing large amount of records](https://ej2.syncfusion.com/angular/documentation/grid/performance#how-to-avoid-maxjsonlength-error-while-passing-large-amount-of-records)
* [Optimizing Angular app performance with multiple grids and templates](https://ej2.syncfusion.com/angular/documentation/grid/performance#optimizing-angular-app-performance-with-multiple-grids-and-templates)
* [Microsoft Excel limitation when exporting millions of records](https://ej2.syncfusion.com/angular/documentation/grid/performance#microsoft-excel-limitation-while-exporting-millions-of-records-to-excel-file-format)
