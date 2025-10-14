---
layout: post
title: Performance tips for ##Platform_Name## Gantt control | Syncfusion
description: Checkout and learn here all about how to improve the loading performance of ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gantt performance
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Performance tips for ##Platform_Name## Gantt control

This guide provides practical techniques to optimize the Angular Gantt component's performance, particularly when working with large datasets. Learn how to implement best practices that maintain smooth user experience while handling substantial amounts of project data efficiently.

## Improving loading performance with large datasets

A Gantt chart renders rows, columns, and taskbars in the DOM. For example, displaying 10 rows and 10 columns creates 100 elements in the grid area DOM and 10 elements in the chart area DOM. To ensure optimal loading performance, limit the number of rendered rows and columns when working with large datasets.

### Optimizing performance with virtualization

Virtualization techniques significantly improve application efficiency when handling large datasets by rendering only visible content:

1. **Row virtualization**: The virtual scrolling feature enables efficient handling of large data volumes by loading only visible rows within the Gantt viewport rather than rendering the entire dataset. This optimization occurs during vertical scroll actions. For detailed implementation, refer to the [row virtualization documentation](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll#row-virtualization).

2. **Timeline virtualization**: This feature optimizes timeline rendering by loading only visible timeline cells (typically three viewport widths). Additional timeline cells render on-demand during horizontal scrolling. For implementation details, see the [timeline virtualization documentation](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll#timeline-virtualization).

3. **Load on demand**: This feature renders large task collections with optimal performance. With virtualization enabled, only root-level records load initially. Child tasks load dynamically when expanding parent nodes or scrolling vertically, ensuring only necessary data renders based on the current viewport position.

### Optimizing performance with AutoCalculateDateScheduling

By default, the Angular Gantt component automatically calculates start and end dates in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) based on working time, holidays, weekends, and predecessors. For large datasets, these calculations can impact performance.

Set the [autoCalculateDateScheduling](https://ej2.syncfusion.com/angular/documentation/api/gantt/#autoCalculateDateScheduling) property to **false** to improve initial load performance. This disables parent-child validation, data validation, and predecessor validation, allowing faster rendering.

**Important**: When disabling `autoCalculateDateScheduling`, provide complete data including start date, end date, and duration in your data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs2" %}

>When setting `autoCalculateDateScheduling` property to **false**, you must provide a valid data source; otherwise, the Gantt chart will render with invalid dates.

### Optimizing custom content rendering

When integrating images or template elements into Gantt columns, use the [Column Template](https://ej2.syncfusion.com/angular/documentation/gantt/columns/column-template) feature instead of customizing data through [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) or [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) events. These events trigger for each row and cell, potentially causing rendering delays and element persistence issues over time.

### Optimizing loading performance by referring individual script and CSS

Enhance initial rendering performance by using the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) to download only required component scripts. The default ej2.min.js includes all Syncfusion components, which may increase load times. CRG allows selective component and module selection, reducing bundle size and improving loading performance.

### Performance benchmarks

The following tables show typical load times for various Gantt configurations, comparing non-virtualized and virtualized scenarios:

**Test environment**

- Component Version: Syncfusion Angular Gantt 31.1.17
- Angular Version: 20.1.0
- Browser: Edge 138
- Operating System: Windows 11
- CPU: 12th Gen Intel® Core™ i5-1235U
- RAM: 16GB

**Non-virtualized scenario (2,500 tasks)**

| Scenario                        | Load time (seconds) |
|---------------------------------|---------------------|
| Default hierarchy(Parent-Child) | 3.8                 |
| + Predecessor                   | 5.4                 |
| + Resources                     | 6.5                 |
| + Split taskbars                | 7.8                 |

**Virtualized scenario (25,000 tasks)**

| Scenario                        | Load time (seconds) |
|---------------------------------|---------------------|
| Default hierarchy(Parent-Child) | 2.1                 |
| + Predecessor                   | 5.6                 |
| + Resources                     | 6.2                 |
| + Split taskbars                | 6.8                 |

## Optimizing server-side data operations with adaptors

The Angular Gantt component supports various adaptors (OData, ODataV4, WebAPI, URL) for server-side data operations and CRUD functionalities. Using these adaptors with the `DataManager` component enables seamless remote data binding and action execution.

During data operations like filtering and sorting, corresponding action queries generate according to adaptor requirements. Handle these actions on the application side and return processed data to the Gantt. For efficient data processing, return processed data in this order:
* Filtering
* Sorting
* Aggregates

## Avoiding MaxJsonLength errors with large datasets

The Angular Gantt component operates on a client-server basis, sending data as JSON objects. Large JSON object serialization can cause MaxJsonLength errors. Resolve this by increasing the maximum length for JSON serialization in your web.config file or at the deserialization point.

**Solution 1**

```csharp
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

**Solution 2**
```csharp
var serializer = new JavaScriptSerializer { MaxJsonLength = Int32.MaxValue };
```

## Optimizing Angular apps with multiple gantts and templates

Performance issues in applications with multiple Gantt components relate to Angular's change detection mechanism rather than the Syncfusion component itself. Large DOM populations cause performance issues due to continuous change detection.

> For more information on common reasons for slowdowns in Angular apps, you can [refer](https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/ ) to the [documentation](https://www.thirdrocktechkno.com/blog/top-reasons-why-your-angular-app-is-slow/ ) link:

[Angular](https://v17.angular.io/api/core/ChangeDetectionStrategy) provides two change detection strategies:

* **Default change detection**: Uses the `CheckAlways` strategy with automatic change detection until explicitly deactivated. This can cause continuous detection for all template references.

* **OnPush change detection**: Uses the `CheckOnce` strategy, disabling automatic change detection until reactivated. This triggers detection only for specific inputs rather than all template references.

Implement OnPush change detection strategy using:

```ts
 @Component({ 
  selector: "app-root", 
  templateUrl: "app.component.html", 
  providers: [ReorderService], 
  changeDetection: ChangeDetectionStrategy.OnPush 
}) 
```

For additional guidance on OnPush strategy implementation:
* [OnPush Change Detection](https://blog.angular-university.io/onpush-change-detection-how-it-works/)
* [ApplicationRef - Tick](https://v17.angular.io/api/core/ApplicationRef#tick)
* [Tick - Description](https://v17.angular.io/api/core/testing/tick#description)
* [DetectChange - Anchor](https://v17.angular.io/api/core/ChangeDetectorRef#!#detectChanges-anchor)

## Microsoft Excel limitations for large exports

Microsoft Excel supports only 1,048,576 records per sheet by default, making direct export of millions of records unfeasible. For large datasets, consider exporting to CSV (Comma-Separated Values) or other formats that handle large data more efficiently than Excel. For detailed Excel specifications, refer to the [Microsoft documentation](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3).

## Tree shaking and bundle size optimization

The Syncfusion Angular Gantt component supports tree shaking through modular, tree-shakable packages. Import specific modules based on requirements:

```typescript
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { FilterService, SortService, SelectionService } from '@syncfusion/ej2-angular-gantt';
```

The following table shows example production build sizes with incremental feature additions:

| **Module**          | **Raw size** | **Transfer size** |
|---------------------|--------------|-----------------------------|
| Empty app           | 220.26 kB    | 60.71 kB                    |
| GanttModule         | 2.55 MB      | 473.29 kB                   |
| + SortService       | 2.56 MB      | 475.69 kB                   |
| + SelectionService  | 2.58 MB      | 477.38 kB                   |
| + FilterService     | 2.99 MB      | 538.76 kB                   |
| + ReorderService    | 3.00 MB      | 541.35 kB                   |
| + ExcelService      | 3.14 MB      | 569.72 kB                   |

- **Raw size**: Uncompressed bundle size  
- **Transfer size**: Compressed size for network transfer

Tree shaking maintains manageable bundle sizes by including only imported features. Using `GanttAllModule` significantly increases bundle size by including all features regardless of usage.

For detailed implementation, refer to the [Syncfusion Angular Tree Shaking](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/tree-shaking) documentation.

## See also

- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [Virtual scrolling](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll)
- [Column template](https://ej2.syncfusion.com/angular/documentation/gantt/columns/column-template)