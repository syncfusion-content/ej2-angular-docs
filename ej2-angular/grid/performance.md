---
layout: post
title: Performance tips for Angular DataGrid Component | Syncfusion
description: Checkout and learn here all about how to improve the loading performance of Angular DataGrid even binding large data set.
platform: Angular
control: DataGrid
documentation: ug
---

# Performance tips for Angular DataGrid Component

This comprehensive guide provides actionable strategies for optimizing Angular DataGrid performance when handling large datasets and numerous columns. The techniques outlined here ensure smooth data binding without performance degradation, maintaining optimal efficiency even with substantial data volumes.

## Improve loading performance with large datasets

The DataGrid renders DOM elements based on the number of rows and columns displayed. For example, binding 10 rows and 10 columns creates 100 DOM elements. To maintain optimal performance, limit the number of simultaneously rendered rows and columns using the strategies below.

### Optimizing performance with paging 

Implement [paging](https://ej2.syncfusion.com/angular/documentation/grid/paging) to display data in manageable segments, significantly improving application performance when handling large datasets. Paging reduces DOM load by rendering only the current page's data.

### Optimizing performance with row virtualization or infinite scrolling 

For substantial datasets, implementing either [virtualization](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling) or [infinite scrolling](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/infinite-scrolling) enhances application efficiency and reduces rendering overhead.

1.  **Virtualization**: Virtual scrolling renders only visible rows within the viewport, dramatically improving performance for large datasets. The DataGrid loads additional rows dynamically during scroll actions, maintaining smooth interaction regardless of total data volume. Reference the [documentation](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling) section for detailed implementation.

2.  **Infinite scrolling**: This "load-on-demand" approach fetches new data blocks when the scrollbar reaches the vertical scroller's end. Infinite scrolling prevents initial load delays by progressively loading content as needed. You can refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/infinite-scrolling) section dedicated to this feature.

### Optimizing performance with column virtualization

[Column virtualization](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling#column-virtualization) displays only columns currently within the viewport, enabling horizontal scrolling for additional columns. This feature proves essential when working with grids containing numerous columns, reducing initial loading time and improving responsiveness.

Combine row and column virtualization for maximum efficiency when handling both large datasets and multiple columns. This dual approach optimizes performance by loading only visible rows and columns dynamically.

### Browser height limitation in virtual scrolling

Virtual scrolling encounters browser-imposed height limitations when dealing with extremely large datasets. The maximum scrollable height varies by browser but typically ranges from 10 million to 33 million pixels. For datasets exceeding these limits, implement server-side paging or data segmentation strategies. Refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling#browser-height-limitation-in-virtual-scrolling-and-solution) for detailed solutions.

## Improve performance with custom content rendering

When displaying images or complex elements within columns, use [Column Template](https://ej2.syncfusion.com/angular/documentation/grid/columns/column-template) instead of customizing data through [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) or [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) events. These events trigger for every row and cell, creating rendering delays and potentially causing memory leaks from persistent elements. Column templates provide efficient custom rendering without performance penalties.

## Improve loading performance with optimized resources

Enhance DataGrid initial rendering performance by using the Custom Resource Generator (CRG) to download component-specific scripts instead of the complete ej2.min.js file. The full script contains all Syncfusion components, increasing load times unnecessarily.

Use [CRG](https://crg.syncfusion.com/) to select only required components and modules, generating optimized scripts and CSS files tailored to your application needs. This approach significantly reduces bundle size and improves initial loading performance.

## Update cell values efficiently without server calls

For live data scenarios, update cell values locally without frequent server requests using the [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/grid/#setcellvalue) method. This approach updates the DataGrid UI immediately while maintaining data consistency without database round trips.

## Optimize server-side operations with data adaptors

The Angular DataGrid supports various adaptors (OData, ODataV4, WebAPI, URL) for server-side operations and CRUD functionality. When implementing server-side processing, handle data operations in this recommended sequence for optimal performance:

1. Filtering
2. Sorting  
3. Aggregates
4. Paging
5. Grouping

Process operations in this order ensures efficient data handling and maintains consistent performance across different operation combinations.

## Resolve large dataset serialization issues

When transferring large datasets between client and server, increase the maximum JSON serialization length to prevent MaxJsonLength errors. Configure your server application to handle larger JSON payloads:

**Web.config configuration:**
```xml
<configuration> 
   <system.web.extensions>
       <scripting>
           <webServices>
               <jsonSerialization maxJsonLength="25000000"/>
           </webServices>
       </scripting>
   </system.web.extensions>
</configuration> 
```

**Server-side serializer configuration:**
```csharp
var serializer = new JavaScriptSerializer { MaxJsonLength = Int32.MaxValue };
```

## Optimize Angular applications with multiple DataGrids

Performance issues in applications with multiple DataGrids and templates typically stem from Angular's default change detection strategy rather than the DataGrid itself. When the DOM contains numerous elements, continuous change detection (triggered by DOM events and interactions) can cause performance degradation.

Angular provides two change detection strategies:

* **Default**: Uses `CheckAlways` strategy, triggering change detection for all components continuously
* **OnPush**: Uses `CheckOnce` strategy, limiting change detection to specific component updates

Implement the OnPush strategy to improve performance:

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  // Component implementation
}
```

For comprehensive guidance on OnPush implementation and handling child component updates, refer to:
* [OnPush Change Detection Strategy](https://blog.angular-university.io/onpush-change-detection-how-it-works/)
* [Angular ApplicationRef Documentation](https://angular.io/api/core/ApplicationRef#tick)
* [Change Detection Reference](https://angular.io/api/core/ChangeDetectorRef#detectChanges)

## Handle Excel export limitations for large datasets

Microsoft Excel supports a maximum of 1,048,576 records per worksheet, making it unsuitable for exporting millions of records. For large datasets, export data in CSV (Comma-Separated Values) format or other formats designed for handling substantial data volumes more efficiently than Excel.

Consider implementing chunked exports or server-side export processing for datasets exceeding Excel limitations. Refer to [Microsoft Excel specifications and limits](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) for detailed information on Excel constraints.