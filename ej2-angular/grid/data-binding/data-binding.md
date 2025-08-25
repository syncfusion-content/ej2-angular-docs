---
layout: post
title: Data binding in Angular Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Grid component

Data binding is a fundamental technique that empowers the Angular Grid component to seamlessly integrate data into its interface, enabling dynamic and interactive grid views. This capability proves essential when working with large datasets or when data requires remote fetching through RESTful services.

The Syncfusion Angular Grid utilizes the **DataManager**, which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The primary property, [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource), accepts either a DataManager instance or a collection of JavaScript object arrays.

The Grid supports two primary data binding methods:

* Local data
* Remote data

To learn about binding local, remote, or observable data to the Angular Grid, you can check this video:

{% youtube "https://www.youtube.com/watch?v=Xkq1tXOXL7k" %}

## Loading indicator

The Syncfusion Angular Grid provides a loading animation feature that clearly identifies when data is being loaded or refreshed. This feature offers users clear visual feedback during grid operations such as sorting, filtering, grouping, and data refresh actions.

You can utilize the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/angular/documentation/api/grid/loadingIndicatorModel/) property to configure the loading indicator, which supports two indicator types:

* Spinner (default indicator)
* Shimmer

The following example demonstrates setting the `loadingIndicator.indicatorType` property by changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) method applies the changes and displays the updated loading indicator type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/loading-indicator/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/loading-indicator/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/loading-indicator" %}

## Refresh the datasource using property

Refreshing the data source in an Angular Grid involves updating the displayed data dynamically. This operation is essential when reflecting changes in the underlying data without reloading the entire page or component.

You can utilize the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property in conjunction with the [setProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method. This approach ensures the grid reflects data source changes without requiring complete page or component reload.

For adding or deleting data source records, follow these steps:

**Step 1**: Add or delete the data source record using the following code:

```typescript
this.grid.dataSource.unshift(data); // Add a new record
this.grid.dataSource.splice(selectedRow, 1); // Delete a record
```

**Step 2**: Refresh the data source after changes by invoking the `setProperties` method:

```typescript
(this.grid as GridComponent).setProperties({ dataSource: (this.grid as GridComponent).dataSource as object[] });
```

The following example demonstrates adding a new record to the data source through an external button:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs2" %}

## Dynamically change the datasource or columns or both

The Angular Grid component allows dynamic modification of the data source, columns, or both. This feature proves valuable when refreshing the grid's content and structure without requiring complete page reload.

You can utilize the [changeDataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#changedatasource) method to update the data source, columns, or both based on your application requirements. During the changing process for data source and columns, existing grid actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns.

**1. Change both data source and columns:**

To modify both existing columns and the data source, pass both arguments to the `changeDataSource` method. The following example demonstrates changing both the data source and columns.

You can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property to bind local data to the grid. The code below provides an example of creating a data source for the grid:

```typescript
export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', Freight: 32.38,
        ShipCity: 'Reims'
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61,
        ShipCity: 'Münster'
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Freight: 61.34,
        ShipCity: 'Rio de Janeiro'
    }];
```

The following code demonstrates creating [columns](https://ej2.syncfusion.com/angular/documentation/grid/columns/columns) for the grid based on the provided grid data source:

```typescript
public newColumn: ColumnModel[] = [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 125 },
];
```

The following code demonstrates updating the data source and columns defined above using the `changeDataSource` method:

```typescript
this.gridInstance.changeDataSource(data, newColumn);
```

**2. Modify only the existing columns:**

To modify existing columns in a grid, you can add or remove columns or change the entire column set using the [changeDataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#changedatasource) method. Set the first parameter to null and provide the new columns as the second parameter. Note that if a column field is not specified in the data source, its corresponding column values will be empty.

The following code demonstrates adding new columns with existing grid columns ('newColumn') using the `changeDataSource` method:

```typescript
public newColumn1: ColumnModel[] = [
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
];
let column: any = this.newColumn.push(...this.newColumn1);
this.gridInstance.changeDataSource(null, column);
```

**3. Modify only the data source:**

You can change the entire data source in the grid using the `changeDataSource` method. Provide the data source as the first argument; the optional second argument specifies new columns for the grid. If columns are not specified, the grid automatically generates columns based on the data source.

You can assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of creating a new data source for the grid:

```typescript
export let employeeData: Object[] = [
    {
        FirstName: 'Nancy', City: 'Seattle', Region: 'WA',
        Country: 'USA'
    },
    {
        FirstName: 'Andrew', City: 'London', Region: null,
        Country: 'UK',
    },
    {
        FirstName: 'Janet', City: 'Kirkland', Region: 'WA',
        Country: 'USA'
    }];
```

The following code demonstrates using the `changeDataSource` method to bind the new **employeeData** to the grid:

```typescript
this.gridInstance.changeDataSource(employeeData);
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/data-datasource/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/data-datasource/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/data-datasource" %}

>* The Grid state persistence feature does not support the `changeDataSource` method.
>* In this document, the above sample uses local data for the `changeDataSource` method. For those using remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/grid/flexible-data) resource.

## Prevent converting local time zone format for date column

By default, the Syncfusion Angular Grid automatically converts date values to the local time zone of the client system. However, in some scenarios, you may need to display the original date as received from the server without timezone conversion.

To prevent timezone conversion for date columns, use the `serverTimezoneOffset` property from `DataUtil`. Setting this property to **0** ensures dates remain in the original format received from the server without conversion to the local timezone.

The following example demonstrates preventing local time zone conversion for date columns in the Syncfusion Angular Grid using the `DataUtil.serverTimezoneOffset` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-timezone/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-timezone/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/databinding-timezone" %}

## Set custom headers using a custom adaptor

Custom headers in HTTP requests send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the Syncfusion Angular Grid, custom headers can be added when making API requests, ensuring each request carries necessary information for server-side validation and processing.

This approach proves particularly useful when integrating the Grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, the `WebApiAdaptor` can be extended to create a custom adaptor. The `beforeSend` method in the custom adaptor allows modifying request headers before sending them to the server. This ensures every request from the Grid includes the required headers.

The following example demonstrates setting custom headers using a custom adaptor in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-headers-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/custom-headers-cs1/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-headers-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-headers-cs1" %}

![CustomHeaders](../images/custom-headers.png)

## See also

* [Binding a firebase data source to Grid using AngularFire2](https://www.syncfusion.com/blogs/post/binding-a-firebase-data-source-to-grid-using-angularfire2.aspx)
* [How to bind SQL Server data in Angular DataGrid using SqlClient data provider](https://support.syncfusion.com/kb/article/11679/how-to-bind-sql-server-data-in-angular-datagrid-using-sqlclient-data-provider)