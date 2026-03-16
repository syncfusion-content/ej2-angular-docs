---
layout: post
title: Angular Grid - Data Binding | Syncfusion
description: Data binding in Angular Grid connects component state, local arrays, or remote sources to grid rows, enabling dynamic updates and controlled data flow.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Angular Grid Component

Data binding is a fundamental technique that empowers the Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid utilizes the [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started), which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

The Grid supports two primary data binding methods:

* Local data
* Remote data

To learn about binding local, remote, or observable data to the Angular Grid, see this video:

{% youtube "https://www.youtube.com/watch?v=Xkq1tXOXL7k" %}

## Loading indicator

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/angular/documentation/api/grid/loadingIndicatorModel) property of the grid can be utilized, which supports two types of indicators:

- `Spinner` (default)
- `Shimmer`

The following example demonstrates setting the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/javascript/documentation/api/grid/loadingindicatormodel#indicatortype) property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/index-default#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method is used to apply the changes and display the updated loading indicator type.

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

Refreshing the data shown in a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid involves updating the data that the grid displays dynamically. This operation reflects changes in the underlying data without reloading the entire page or component.

To achieve this, use the [datasource](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#datasource) property in conjunction with the [setProperties] method. This ensures the grid reflects changes in the `dataSource` without requiring a complete page or component reload.

For example, when adding or deleting data source records, follow these steps:

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

he Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component supports dynamic modification of the data source, columns, or both. This feature refreshes the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, the [changeDataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#changedatasource) method can be utilized. This method enables updating the data source, columns, or both, based on application requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

**1. Change both data source and columns:**

To modify both the existing columns and the data source, pass both arguments to the `changeDataSource` method. The following example demonstrates changing both the data source and columns.

Assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource) property to bind local data to the grid. The code below provides an example creating a data source for the grid.

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

To modify existing columns in a grid, add or remove columns or replace the entire set of columns using the [changeDataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#changedatasource) method. To use this method, set the first parameter to `null` and provide the new columns as the second parameter. Note that if a column field is not specified in the `dataSource`, its corresponding column values will be empty. The following example illustrates modifying existing columns.

The following code demonstrates adding new columns with existing grid columns "newColumn" using the `changeDataSource` method:

```typescript
public newColumn1: ColumnModel[] = [
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
];
let column: any = this.newColumn.push(...this.newColumn1);
this.gridInstance.changeDataSource(null, column);
```

**3. Modify only the data source:**

Change the entire data source in the grid using the `changeDataSource` method. Provide the data source as the first argument; the optional second argument can specify new columns for the grid. If columns are not specified, the grid auto-generates columns based on the data source. The following example demonstrates modifying the data source.

Assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of creating a new data source for the grid.

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

> * The Grid state persistence feature does not support the `changeDataSource` method.
> * In this document, the above sample uses local data for the `changeDataSource` method. For those using remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/grid/flexible-data) resource.

## Prevent converting local time zone format for date column

By default, the Syncfusion Angular Grid automatically converts date values to the local time zone of the client system. However, in some scenarios, it may be necessary to display the original date as received from the server without timezone conversion.

To prevent timezone conversion for date columns, use the `serverTimezoneOffset` property from `DataUtil`. Setting this property to "0" ensures dates remain in the original format received from the server without conversion to the local timezone.

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

Custom headers in HTTP requests are used to send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, custom headers can be added when making API requests, ensuring that each request carries the necessary information for server-side validation and processing.

This method is particularly useful when integrating the grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, extend the `WebApiAdaptor` to create a custom adaptor. The `beforeSend` method in the custom adaptor enables modification of request headers before sending them to the server, ensuring that every request from the grid includes the required headers.

The following example demonstrates setting custom headers using the custom adaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid.

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