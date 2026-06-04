---
layout: post
title: Angular Grid - Column Rendering | Syncfusion
description: Angular Grid column rendering allows custom cell and header layouts, templates, and flexible options for complex content and interactive elements.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Column Rendering in Angular Grid Component

Columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid define the structure and presentation of data. This section outlines manual, automatic, and dynamic rendering approaches to ensure clarity and flexibility in grid design.

The column definitions serve as the data source schema in the grid. Grid operations such as sorting, filtering, and grouping are performed based on column definitions. The [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) property of the grid column is necessary to map the data source values to the grid columns.

> 1. If the column `field` is not specified in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource), the column values will be empty.
> 2. If the `field` name contains a `dot` operator, it is considered complex binding.
> 3. The `field` property must be defined for a Template column to perform CRUD or data operations such as filtering and searching.

## Define columns manually 

To define columns manually in the grid, use the `e-columns` element to define the columns and represent each column with its respective properties such as [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field), [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertext), [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type), and [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column#width) set accordingly. This allows customization of the column's behavior and appearance based on requirements.

Here's an example code snippet that demonstrates defining columns manually in the Angular Data Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/paging-cs1" %}

## Auto-generated columns

Columns are automatically created when the `columns` option is not defined during Grid initialization. In this case, the Grid generates columns based on the fields in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource). Each field in the data source is displayed as a column, and the field name appears in the column header.

The following code snippet enables auto-generated columns in the Angular Data Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs3" %}

> * When columns are auto-generated, the column [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) is determined from the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource).
> * Auto-generating columns for large datasets can affect performance. To improve efficiency, columns can be defined manually in the `columns` option during initialization. Alternatively, the column virtualization feature can be enabled by setting [enableColumnVirtualization](https://ej2.syncfusion.com/angular/documentation/api/grid#enablecolumnvirtualization) to `true`.

### Set primary key for auto-generated columns in editing

Primary key configuration for auto-generated columns is necessary when editing is enabled in the Grid to uniquely identify each row for operations such as updating or deleting data. This can be achieved by setting the `isPrimaryKey` property to `true` for the column object through the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs4" %}

If the column `field` name is known, the [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyfield) method can be used to retrieve the column object. Then, the `isPrimaryKey` property can be set to `true` for that column, as demonstrated in the code snippet below:

```typescript
onDataBound(event: any): void {
    const column: ColumnModel = this.grid.getColumnByField('OrderID');
    column.isPrimaryKey = true;
  }
```

### Defining column properties for auto-generated columns

Auto-generated columns can be customized to meet specific requirements by modifying properties such as [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type), [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format), and [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column#width) for auto-generated columns in Angular Data Grid, use the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event of the Grid component. The event is triggered after data has been loaded into the Grid, ensuring that all columns are created and available. At this point, the necessary options for the auto-generated columns can be configured.

In the below example, `width` is set for the "OrderID" column, `type` is set for the "Order Date" column and `format` is set for the "Freight" and "Order Date" columns.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs5" %}

## Dynamic column generation 

The Angular Data Grid component allows dynamic generation of columns at runtime based on the provided data. This feature is useful when displaying data with varying columns depending on specific requirements or dynamic data sources.

### Using ngFor directive

To create dynamically generated columns in the Angular Data Grid component using the ngFor directive, first define an array of column objects in the component.ts file. Each column object should include a [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) and [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertext) property, which will be used to bind the corresponding properties of the `e-column` component.

Here is an example of dynamically generating columns in the grid using the `*ngFor` directive:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dynamic-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dynamic-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dynamic-column-cs1" %}

> The data source or columns can be changed dynamically in the Angular Data Grid by using the [changeDataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#changedatasource) method. For more information, please refer to [this](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/data-binding#dynamically-change-the-datasource-or-columns-or-both) section.

### Using valueAccessor property

Dynamic column generation using value accessor allows access and manipulation of the display data values in a grid column. By using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/grid/column#valueaccessor) property of a grid column, the display value of the column can be customized based on the data.

To use the `valueAccessor` property, define the column with the property and provide a function that will return the formatted value. The function receives two arguments:
* `field`: represents the data field of the column.
* `data`: represents the data record for the corresponding row.
* `column`: represents the current column object.

In the provided code, the `currencyFormatter` function takes the Freight value of the data object, appends the "Euro" symbol to it, and returns the formatted string. The `concatenateFields` function concatenates the "ShipCity" and "ShipRegion" values of the data object and returns the combined string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs10" %}

> The `valueAccessor` function can have performance implications on large datasets. To avoid this, enable **row virtualization** by setting [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid#enablevirtualization) to `true`. This ensures that only visible rows are rendered, improving performance.

### Display array type columns

Array of objects binding to a column in the Grid component can be achieved using the `valueAccessor` property. This allows combining multiple values from an array into a single, readable string for display.

For example, consider a column named "Name" that contains an array of two objects, "FirstName" and "LastName". The `valueAccessor` property can be used to join these two objects and bind them to the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs11" %}

### Expression column

An expression column displays a calculated value based on other fields in the same row. This can be implemented using the `valueAccessor` property, which allows defining a custom function to compute the value dynamically.

For example, consider an expression column named "Calories Intake". This column calculates the total calories for each row using values from the "Protein", "Fat", and "Carbohydrate" columns. The `valueAccessor` function can perform the necessary calculation, including formulas or other custom logic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/expression-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/expression-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/expression-cs1" %}

### Display serial number

Serial number display in the Grid for every row can be achieved using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event. The `rowDataBound` event is triggered for each row in the Grid when the data is bound to the Grid. Inside the `rowDataBound` event handler, a serial number can be calculated using the current page number, page size, and the row's index on that page. These values are available from the Grid's [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#pagesettings) property:

* `pageSize`: Number of rows shown per page.
* `currentPage`: The current page number.
* `rowIndex`: The index of the row within the current page.

Here is an example code snippet that demonstrates displaying serial numbers in an Angular Data Grid using the `rowDataBound` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs31" %}

## Complex data binding

The Angular Data Grid component supports complex data binding by using the dot (.) operator in the [column.field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field). This feature is particularly useful when dealing with nested or complex data structures.

### Using local data

When binding local data that contains nested objects, the dot (.) operator in the column's `field` property allows access to specific properties within those nested objects.

In the below example, the nested "Employee" object's "FirstName" and "LastName" properties are bound using the dot (.) operator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs18" %}

### Using remote data

To enable complex data binding in the Grid component using remote data, add the [expand](https://ej2.syncfusion.com/documentation/api/data/query#expand) query to the Grid’s [query](https://ej2.syncfusion.com/angular/documentation/api/grid#query) property. This ensures that related or nested data is eagerly loaded from the server, allowing direct access to complex fields using dot (.) notation in the column definitions.

In the below example, the `expand` query loads the nested "Employee" object's "City" property using the dot (.) operator.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/complex-data-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/complex-data-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/complex-data-cs2" %}

### Complex data binding with list or array of objects

Complex data binding with lists or arrays of objects is supported in the Grid. This feature allows binding complex data with multiple levels of nested objects and arrays to the Grid.

The following example shows setting a complex field for a data source containing an array of objects:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/complex-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/complex-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/complex-data-cs1" %}

### Setting a complex column as a foreign key column

The Grid component provides the ability to set complex columns as foreign key columns. This allows related data from a foreign data source to be displayed based on a nested field value.

The following example demonstrates setting the "Employee.EmployeeID" column as a foreign key column and displaying the "FirstName" column from the foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs11" %}