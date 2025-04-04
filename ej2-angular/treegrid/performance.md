---
layout: post
title: Performance best practices for Angular TreeGrid Component | Syncfusion
description: Checkout and learn here all about how to improve the loading performance of Angular TreeGrid even binding large data set.
platform: ej2-angular
control: TreeGrid
documentation: ug
---

# Performance best practices for Angular TreeGrid Component
This article offers Essential<sup style="font-size:70%">&reg;</sup> strategies for enhancing the loading performance of the Angular Tree Grid, particularly when managing complex hierarchical data with numerous columns. It discusses practical methods to efficiently bind large datasets while maintaining optimal performance. With a focus on actionable insights and tailored recommendations, this guide equips users with the techniques required to fine-tune the performance of the Angular Tree Grid, enabling smoother interactions and a better overall user experience, even with extensive data scenarios.

## How to improve loading performance by binding a large dataset
The Tree Grid component displays hierarchical data using rows and columns. When working with large datasets, it's crucial to optimize the rendering process for enhanced performance. For example, binding a dataset with 10 parent rows, each containing 10 child rows, and displaying 10 columns results in 1100 elements rendered in the DOM (Document Object Model).

To ensure the best loading performance, it is advisable to limit the number of rows and columns rendered at a time. By doing so, you can reduce the computational load on the browser, allowing the Tree Grid to efficiently handle larger datasets without performance degradation.

### Optimizing performance with paging 
When working with extensive hierarchical datasets in the Tree Grid, implementing paging is a highly effective way to enhance performance. [Paging](https://ej2.syncfusion.com/angular/documentation/treegrid/paging) divides the data into smaller, manageable segments and displays it page by page. This reduces the number of rows rendered at any given time, resulting in faster load times and smoother interactions.    

By enabling paging, users can navigate through large datasets with ease while maintaining optimal performance. This approach is particularly advantageous when dealing with deeply nested hierarchical data, as it minimizes the rendering overhead on the browser.For detailed steps on how to enable and configure paging in the Tree Grid, refer to the Tree Grid Paging [Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/paging).

### Optimizing performance with row virtualization or infinite scrolling 
To enhance the efficiency of your application when working with large hierarchical datasets, it is recommended to use either [virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll) or [infinite scrolling](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/infinite-scroll). These techniques help reduce the load on your application and significantly improve overall performance.

1.  **Virtualization**: The Virtual Scrolling feature in the Angular Tree Grid enables efficient handling and display of extensive hierarchical data. This approach optimizes rendering by loading only the visible rows within the viewport, instead of rendering the entire dataset at once. Virtualization is particularly useful when dealing with deeply nested or large datasets, ensuring faster load times and smoother interactions. For more information on implementing row virtualization, refer to the Tree Grid Virtual Scrolling [Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll).
   
2.  **Infinite scrolling**: The Infinite Scrolling feature in the Angular Tree Grid is an effective solution for seamlessly working with extensive hierarchical datasets. This feature operates on a "load-on-demand" basis, fetching data only as required. In the default infinite scrolling mode, a new block of data is loaded each time the scrollbar reaches the end of the vertical scroller. Infinite scrolling ensures that the Tree Grid handles large datasets without compromising performance. For more information on implementing infinite scrolling, refer to the Tree Grid Infinite Scrolling [Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/infinite-scroll).
   
### Optimizing performance with column virtualization in large no of columns
The [Column Virtualization](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#column-virtualization) feature in the Angular Tree Grid optimizes the rendering of columns by displaying only the columns that are currently within the viewport. It allows users to horizontally scroll to view additional columns as needed. This is particularly beneficial when working with Tree Grids that contain a large number of columns, as it helps improve performance and reduce the initial loading time.

It is possible to enable both row and column virtualization in the Tree Grid. This combined approach ensures efficient handling of large hierarchical datasets by dynamically loading only the visible rows and columns. As a result, performance is optimized, and the overall responsiveness of the grid is enhanced, even with complex data structures. For more information on implementing column virtualization in the Tree Grid, refer to the Tree Grid [Column Virtualization Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#column-virtualization).

## Enhancing loading performance with large data using custom text or elements in column cells
When integrating image or template elements into a column in the Tree Grid, it is recommended to use the Column Template feature. This approach ensures efficient rendering and avoids potential delays that might occur when customizing data through the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) or [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) events.

#### Why choose column templates instead of events?
1.  **Performance Optimization**: The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) and [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) events are triggered for each row and cell rendering, which can introduce significant delays, especially with large hierarchical datasets.
2.  **Avoid Persistent Elements**: Rendering custom elements using events can lead to the persistence of previously rendered elements, potentially increasing rendering times over time.
3.  **Streamlined Rendering**: By leveraging column templates, you can achieve the desired customization without impacting rendering performance, ensuring a smoother and faster experience.By adopting the Column Template feature, you can efficiently customize the Tree Grid columns while maintaining optimal performance and rendering speed.
   
For detailed guidance, refer to the [Tree Grid Column Template Documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-template).

## How to update cell values without frequent server calls 
For scenarios such as live updates or real-time data manipulation in the Tree Grid, it is crucial to update cell values without frequent server calls. This approach is especially useful when the data is initially bound from the server but requires subsequent edits without triggering a database refresh.

The Tree Grid provides the [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue) method, enabling you to update cell values directly in the UI without affecting the underlying database. This ensures a seamless and efficient way to handle edit operations while maintaining optimal performance.

## How to optimize server-side data operations with adaptors
The Angular Tree Grid supports a variety of adaptors, such as `OData`, `ODataV4`, `WebAPI`, and `URL` to enable efficient server-side data operations and CRUD functionalities. By integrating these adaptors with the `DataManager` component, you can seamlessly bind remote hierarchical data sources to the Tree Grid and perform operations.

During server-side operations like filtering, sorting, and paging, action queries are generated based on the adaptor’s specifications. These queries must be processed on the server side, and the results should be returned in a format compatible with the Tree Grid.

To ensure optimal performance and data accuracy, follow this order when processing and returning data to the Tree Grid:
* Filtering:    Apply filters to retrieve only the relevant data.
* Sorting:      Organize the filtered data in the desired order.
* Aggregates:   Calculate any required summary values.
* Paging:       Divide the data into manageable chunks for rendering.

By following this sequence, you can ensure that the Tree Grid efficiently handles large datasets while maintaining a smooth user experience.

## See also
* [Browser height limitation in virtual scrolling and solution](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/virtual-scroll#browser-height-limitation-in-virtual-scrolling-and-solution)
* [How to improve loading performance by referring individual script and CSS](https://ej2.syncfusion.com/angular/documentation/grid/performance#how-to-improve-loading-performance-by-referring-individual-script-and-css)
* [How to avoid MaxJsonLength error while passing large amount of records](https://ej2.syncfusion.com/angular/documentation/grid/performance#how-to-avoid-maxjsonlength-error-while-passing-large-amount-of-records)
* [Optimizing Angular app performance with multiple grids and templates](https://ej2.syncfusion.com/angular/documentation/grid/performance#optimizing-angular-app-performance-with-multiple-grids-and-templates)
* [Microsoft excel limitation while exporting millions of records to excel file format](https://ej2.syncfusion.com/angular/documentation/grid/performance#microsoft-excel-limitation-while-exporting-millions-of-records-to-excel-file-format)


