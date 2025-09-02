---
layout: post
title: Performance tips for ##Platform_Name## Gantt control | Syncfusion
description: Checkout and learn here all about how to improve the loading performance of ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gantt permformance
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Performance tips for ##Platform_Name## Gantt control

This guide offers tips to boost the Angular Gantt chart's loading performance, especially for large datasets. It provides valuable insights into the steps required to bind a large data source without experiencing performance degradation. By offering detailed explanations and actionable tips, this resource aims to empower readers with the knowledge and best practices necessary to optimize the performance of the Angular Gantt component during data binding, ensuring a smooth and efficient user experience.

## How to improve loading performance by binding large dataset

A Gantt chart consists of rows, columns, and taskbars. For example, binding 10 rows and 10 columns results in rendering 100 elements in the Document Object Model (DOM) of Grid area and 10 elements in the Document Object Model (DOM) of chart area. To ensure optimal loading performance for the component, it is recommended to limit the number of rows and columns rendered. This approach helps in efficiently managing large datasets and enhancing the overall user experience.

### Optimizing performance with virtualization

To enhance your application's efficiency, especially when dealing with substantial datasets, it is recommended to using [virtualization](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll). Implementing these techniques can significantly reduce the load on your application and elevate its overall performance.

1.  **Row Virtualization**: The Virtual scrolling feature in the Angular Gantt component enables the efficient handling and display of large volumes of data without compromising performance. This approach optimizes the rendering process by loading only the visible rows within the Gantt viewport, rather than rendering the entire dataset simultaneously. For more information on implementing row virtualization , you can refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll#row-virtualization) section dedicated to this feature. This can be visualized while performing the vertical scroll action.

2. **Timeline Virtualization**: The timeline virtualization feature in the Angular Gantt Component enables efficient handling and display of large timespan without compromising performance. This approach optimizes the rendering process by loading only the visible timeline cells, which are typically three times the width of the Gantt element. Other timeline cells render on-demand during horizontal scrolling. For more information on implementing timeline virtualization, you can refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll#timeline-virtualization) section dedicated to this feature. This can be visualized while performing the horizontal scroll action.

3. **Load On Demand**: The Load on demand feature in the Angular Gantt component enables you to render a large number of tasks in the Gantt Chart with optimal performance. With virtualization enabled, only the root-level records are fetched from the datasource during the initial load. When expanding a root parent node or scrolling vertically, the corresponding tasks are dynamically fetched from the datasource and updated in the DOM based on the current viewport position. This ensures that only the necessary data is rendered, significantly improving performance and responsiveness.

### Optimizing performance with AutoCalculateDateScheduling

In the Angular Gantt chart component, by default it automatically calculates the start and end dates in [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) based on various factors such as working time, holidays, weekends, and predecessors. However, when rendering a large dataset, these calculations for data validation may result in performance issues. To avoid this, set the  [autoCalculateDateScheduling](https://ej2.syncfusion.com/angular/documentation/api/gantt/#autoCalculateDateScheduling) property to **false**. 

The [`autoCalculateDateScheduling`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#autoCalculateDateScheduling) property can help you reduce the time taken for the Gantt chart to render on the initial load. When this API is enabled, parent-child validation, data validation, and predecessor validation are restricted, allowing the Gantt chart to load more quickly. Since we are disabling the validations, data source provided to gantt should have all data such as start date, end date, duration, as proper data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs2" %}
>When setting `autoCalculateDateScheduling` property to **false**, you must provide the valid data source; otherwise, the Gantt chart will render with invalid dates.

### Optimizing loading performance by binding large data by showing custom text or element

When integrating image or template elements into a gantt column, it's recommended to utilize the [Column Template](https://ej2.syncfusion.com/angular/documentation/gantt/columns/column-template) feature instead of customizing data through the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) or [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) events. These events are triggered for each row and cell rendering, which can introduce delays in the component's rendering process. Moreover, rendering custom elements using these events may lead to the persistence of rendered elements, potentially causing longer rendering times over time. By opting for the column template feature, you can efficiently fulfill this requirement without experiencing rendering delays and ensure a more streamlined rendering process.

### Optimizing loading performance by referring individual script and CSS

To enhance the performance of the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt component during initial rendering and certain actions, it is recommended to download specific component scripts using CRG (Custom Resource Generator) for optimized project loading. By default, the ej2.min.js script file includes all Syncfusion<sup style="font-size:70%">&reg;</sup> component scripts, which may lead to longer load times. Using [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator), you can selectively choose the components and their modules that your project requires. Subsequently, you can download only the necessary scripts and CSS, thereby improving loading times and optimizing resource utilization according to your project's needs.

[CRG website link](https://crg.syncfusion.com/) 

So to improve the performance of gantt during the initial rendering, suggested you to refer individual script and CSS.

### Performance Benchmarks

The tables below illustrate typical load times for Gantt charts with various configurations, comparing non-virtualized and virtualized scenarios. Each row reflects the impact of adding only the specified feature to a default parent-child hierarchy on loading and interactivity performance.

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


## How to optimize server-side data operations with adaptors

The Angular Gantt component provides support for various adaptors (OData, ODataV4, WebAPI, URL, etc.) to facilitate server-side data operations and CRUD functionalities. By utilizing these adaptors along with the `DataManager` component, you can seamlessly bind remote data sources to the Gantt and execute actions. During data operations such as filtering and sorting, the corresponding action queries are generated according to the adaptor's requirements. It is crucial to handle these actions on the application side and return the processed data back to the Gantt. Refer to the documentation for comprehensive details. It's worth noting that for efficient data processing, the suggested order for returning processed data to the Gantt is as follows:
* Filtering
* Sorting
* Aggregates

## How to avoid MaxJsonLength error while passing large amount of records

The Angular Gantt component operates on a client-server basis, meaning data is sent as a JSON object between the client and server. The reported issue occurs due to the serialization of a large JSON object. To resolve this, you need to increase the maximum length for serializing large JSON objects. This can be done by altering the [MaxJsonLength](https://social.msdn.microsoft.com/Forums/en-US/ab1a5864-46e2-4c57-9511-dc3f60cc314a/how-to-increase-maxjsonlength-for-json-post-in-mvc3?forum=aspmv) property in your web.config file or at the point of deserialization.

**Solution: 1**

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

**Solution : 2**
```csharp
var serializer = new JavaScriptSerializer { MaxJsonLength = Int32.MaxValue };
```

## Optimizing Angular app performance with multiple gantt and templates

The performance degradation issue is specifically linked to the Angular framework and is unrelated to the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt.

When your application's DOM is populated with a large number of items, performance issues arise due to continuous change detection (e.g., typing into an input continuously). For more information on common reasons for slowdowns in Angular apps, you can [refer](https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/ ) to the [documentation](https://www.thirdrocktechkno.com/blog/top-reasons-why-your-angular-app-is-slow/ ) link:
  
In [Angular](https://v17.angular.io/api/core/ChangeDetectionStrategy), there are two default change detection strategies available:
  
* **Default Change Detection**:               
Utilizes the default `CheckAlways` strategy, where change detection is automatic until explicitly deactivated. For example, entering a value into a text box triggers continuous change detection for all template references, leading to the reported issue. 
  
* **OnPush Change Detection**: 
Adopts the `CheckOnce` strategy, disabling automatic change detection until reactivated by setting the strategy to Default (CheckAlways). Enabling this strategy ensures that change detection triggers only for the input text box, rather than for all template references, overcoming the reported issue. 
  
To address this, it's recommended to implement the OnPush change detection strategy in your application. This can be achieved by using the following code snippet:

```ts
 @Component({ 
  selector: "app-root", 
  templateUrl: "app.component.html", 
  providers: [ReorderService], 
  changeDetection: ChangeDetectionStrategy.OnPush 
}) 
```
Using the OnPush strategy may lead to child components not being updated when the input changes. You can address this by referring to the following links,
* [OnPush Change Detection](https://blog.angular-university.io/onpush-change-detection-how-it-works/)
* [ApplicationRef - Tick](https://v17.angular.io/api/core/ApplicationRef#tick)
* [Tick - Description](https://v17.angular.io/api/core/testing/tick#description)
* [DetectChange - Anchor](https://v17.angular.io/api/core/ChangeDetectorRef#!#detectChanges-anchor)

## Microsoft Excel limitation while exporting millions of records to excel file format

By default, Microsoft Excel supports only 1,048,576 records per sheet. Therefore, exporting millions of records directly to Excel is not feasible. For more details on Microsoft Excel specifications and limits, you can refer to the [documentation](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3). It is recommended to export large datasets in CSV (Comma-Separated Values) or other formats that handle large data more efficiently than Excel.

## Tree shaking and bundle size optimization
The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component is designed with tree shaking as a primary feature. It's organized into modular, tree-shakable packages, allowing you to import specific modules based on your requirements. For example, import the `GanttModule` for basic functionality or include feature modules such as `FilterService`, `SortService`, or `SelectionService` when needed:

```typescript
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { FilterService, SortService, SelectionService } from '@syncfusion/ej2-angular-gantt';
```

The table below shows example production build sizes. Each row demonstrates the effect of importing just the base Gantt or adding a specific service on top. Actual bundle sizes may vary based on your exact app, Angular version, and build optimizations.

Each row adds only the named feature/service to the base `GanttModule`, demonstrating the incremental effect on your bundle.

| **Module**          | **Raw Size** | **Transfer Size** |
|---------------------|--------------|-----------------------------|
| Empty App           | 220.26 kB    | 60.71 kB                    |
| GanttModule         | 2.55 MB      | 473.29 kB                   |
| + SortService       | 2.56 MB      | 475.69 kB                   |
| + SelectionService  | 2.58 MB      | 477.38 kB                   |
| + FilterService     | 2.99 MB      | 538.76 kB                   |
| + ReorderService    | 3.00 MB      | 541.35 kB                   |
| + ExcelService      | 3.14 MB      | 569.72 kB                   |

- **Raw Size**: The uncompressed size of the bundle.  
- **Transfer Size**: The compressed size, which is what gets downloaded. Compressed sizes are crucial as they reduce the time and bandwidth required to transfer resources over the network, leading to faster application load times.  

These numbers demonstrate how tree shaking keeps bundle sizes manageable by including only the features you import. For comparison, importing `GanttAllModule` instead of selectively adding only needed modules will significantly increase your bundle size, as it includes all Gantt chart features whether or not you use them.

For detailed implementation steps and configuration, refer to the [Syncfusion Angular Tree Shaking](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/tree-shaking).

## See also

- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [Virtual scrolling](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll)
- [Column template](https://ej2.syncfusion.com/angular/documentation/gantt/columns/column-template)