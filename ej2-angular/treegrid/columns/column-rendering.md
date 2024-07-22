---
layout: post
title: Column rendering in Angular TreeGrid component | Syncfusion
description: Learn here all about column rendering in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Column Rendering

In Syncfusion Angular Tree Grid, column rendering provides you with the ability to finely control how data is presented. This allows you to manually define columns, automatically generate them, and dynamically customize data presentation. With column rendering, you can ensure that your data is displayed exactly as needed, offering a wide range of possibilities for organizing and showcasing information within the tree grid.

The column definitions are used as the data source schema in the tree grid. The Tree Grid operations, such as sorting, filtering are performed based on column definitions. The [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) property of tree grid column is necessary to map the datasource values in the tree grid columns.

> 1. If the column `field` is not specified in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource), the column values will be empty.
> 2. If the `field` name contains **dot** operator, it is considered as [complex binding](../columns/column-rendering/#complex-data-binding).
> 3. It is must to define the `field` property for a template column, to perform CRUD or data operations such as filtering, searching etc.

## Define columns manually 

To define columns manually in tree grid, you can use the `e-columns` element to define the columns and represent each column with its respective properties such as [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field), [headerText](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext), [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type), and [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) set accordingly. This allows you to customize the column's behavior and appearance based on the requirements.

Here's an example code snippet that demonstrates how to define columns manually in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-render-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-render-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-render-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/columns-render-cs1" %}

## Auto generated columns

The Tree Grid automatically generates columns when the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column) declaration is empty or undefined while initializing the tree grid. All the columns in the **dataSource** are bound as tree grid columns.

You can use the following code snippet to enable auto-generated columns in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/auto-generated-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/auto-generated-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/auto-generated-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/auto-generated-cs1" %}

>* When the columns are auto-generated, the column [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) is determined from the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource).
>* If you have a large dataset, auto-generating columns can result in performance issues. In this case, it is recommended to specify the columns manually in the columns property during initialization or else use column virtualization feature by setting [enableColumnVirtualization](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecolumnvirtualization) property value as **true**.

### Set Primary Key for auto generated columns when editing is enabled

When editing is enabled in the tree grid, you may need to set a primary key for auto-generated columns to uniquely identify each row for operations such as updating or deleting data. This can be achieved using the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property of the column object by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event.

By setting `isPrimaryKey` to **true** for an auto-generated column in the Syncfusion Tree Grid, you can specify it as the primary key column, which uniquely identifies each row when editing is enabled.

Here is an example code snippet that shows how to set a primary key for an auto-generated column when editing is enabled:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/auto-generated-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/auto-generated-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/auto-generated-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/auto-generated-cs2" %}

If the column [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) name is known, the [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield) method can be used to retrieve the column object. Then, the `isPrimaryKey` property can be set to **true** for that column, as demonstrated in the code snippet below:

```typescript
onDataBound(event: any): void {
    const column: ColumnModel = this.treegrid.getColumnByField('taskID');
    column.isPrimaryKey = true;
  }
```

### Set column options to auto generated columns

To configure column options such as [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type), [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) and [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) for auto-generated columns in Syncfusion Tree Grid, you can use the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event of the TreeGrid component. This event is triggered after the data has been bound to the Tree Grid. By handling this event, you can specify the desired column options for the auto-generated columns.

Here's an example of how you can set column options for auto-generated columns using the `dataBound` event:

In the below example, `width` is set for **taskID** column, **date** `type` is set for **startDate**, **endDate** column and `format` is set for **duration**, **startDate** and **endDate** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/auto-generated-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/auto-generated-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/auto-generated-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/auto-generated-cs3" %}

## Dynamic column generation 

The Syncfusion TreeGrid component allows you to dynamically generate columns at runtime, based on the data provided. This feature is useful when you need to display data with varying columns based on user requirements or dynamic data sources.

### Using ngFor directive

To create dynamically generated columns in the Syncfusion TreeGrid component using the ngFor directive, you will first need to define an array of column objects in your component.ts file. Each column object should include a [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) and [headerText](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) property, which will be used to bind the corresponding properties of the **e-column** component.

Here is an example for dynamically generate columns in the tree grid using ngFor directive:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dynamic-column-cs1" %}

### Using valueAccessor property

Dynamic column generation using value accessor allows you to access and manipulate the display data values in a tree grid column. By using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property of a tree grid column, you can customize the display value of the column based on the data.

To use `valueAccessor` property, define the column with the property and provide a function that will return the formatted value. The function receives two arguments:
* **field**: represents the data field of the column.
* **data**: represents the data record for the corresponding row.

In the provided code, the **currencyFormatter** function takes the price value of the data object, appends the Euro symbol to it, and returns the formatted string. The **orderFormatter** function concatenates the orderName and Category values of the data object and returns the combined string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dynamic-column-cs2" %}

> The `valueAccessor` function can have performance implications if it is used to access a large number of data records or to perform complex data manipulations. To avoid performance issues, you can enable the virtualization feature while using the valueAccessor property. This ensures that only the visible rows are rendered, resulting in faster rendering times.

### Display array type columns

The TreeGrid component allows you to easily bind an array of objects to a column using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property. This property allows customization of how the data is displayed in the column.

For example, consider a column named **Name** that contains an array of two objects, **FirstName** and **LastName**.  The `valueAccessor` property can be used to join these two objects and bind them to the column.

This will display the concatenated value of **FirstName** and **LastName** in the **Name** column of the tree grid. Here's an example of how this can be achieved:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dynamic-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/dynamic-column-cs3" %}

>Since customized values are displayed in the **Name** column, data operations, such as sorting and fiiltering, cannot be performed for this column.

### Expression column

You can achieve an expression column in the Tree Grid by using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property. The `valueAccessor` property allows you to define a function that calculates the value for the expression column based on the values of other columns.

In this example, tree grid has columns **orderID**, **orderName**, **units**, and **unitprice**. An expression column called **Total price** is added that calculates the total prices for each row based on the values of **units** and **unitprice** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/expression-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/expression-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/expression-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/expression-cs1" %}

>Since customized values are displayed in the **Total Price** column, data operations, such as sorting and fiiltering, cannot be performed for this column.

### Display serial number

To display serial number in the tree grid for every rows, you can use the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event. The `rowDataBound` event is triggered for each row in the tree grid when the data is bound to the tree grid.

Within the event handler, the [pagesize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize) and [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#currentpage) index can be obtained from the tree grid's [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pagesettings) property. Using these values, the serial number can be calculated based on the page size, current page, and row index. Finally, the calculated serial number can be set as the innerHTML of the corresponding row cell.

Here is an example code snippet that demonstrates how to display serial numbers in a tree grid using `rowDataBound` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/expression-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/expression-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/expression-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/expression-cs2" %}

>Since customized values are displayed in the **S.No** column, data operations, such as sorting and fiiltering, cannot be performed for this column.

## Complex data binding

The Syncfusion TreeGrid component allows you to achieve complex data binding by using the dot (.) operator in the [column.field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field). This feature is particularly useful when dealing with nested or complex data structures.

### Using local data

To enable complex data binding in the TreeGrid component using local data, use the dot (.) operator in the `field` property of the column. Here is an example of how to achieve complex data binding using local data:

In the below example, we have bound the nested **Task** object's **firstName** and **lastName** properties using the dot (.) operator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/complex-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/complex-data-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/complex-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/complex-data-cs1" %}

>Since customized values are displayed in the column, data operations, such as sorting and fiiltering, cannot be performed for this column.

### Using remote data

To enable complex data binding in the TreeGrid component using remote data, add the [expand](https://ej2.syncfusion.com/documentation/api/data/query/#expand) query to the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property of the Tree Grid, to eager load the complex data. Here is an example of how to achieve complex data binding using remote data:

In the below example, we have used the `expand` query to load the nested Tasks object's **Name** property using the dot (.) operator.

```typescript
import { Component } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `
  <ejs-treegrid [dataSource]='data' [query]="query" [treeColumnIndex]='1' height='400' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' [allowPaging]="true" [pageSettings]="pagesettings" >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                  <e-column field='Tasks.Name' headerText='Name' width='100' textAlign='Right'></e-column>
                  </e-columns>
               </ejs-treegrid>
 `,

})
export class AppComponent {
  public data: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/Datasource",
  });
  public query?: Query = new Query().expand('Tasks');
  public pagesettings = { pageSize: 12, pageSizeMode: 'Root' };
}

```

The following code example describes handling of server end.

```typescript

public ActionResult DataSource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

```

> [View the complex data binding with remote data sample on GitHub](https://github.com/SyncfusionExamples/complex-data-binding-with-remote-data-in-angular-tree-grid)

### Complex data binding with list of array of objects

The Syncfusion TreeGrid component supports complex data binding with lists of arrays of objects. This feature allows you to bind complex data with multiple levels of nested objects and arrays to the tree grid.

The following example shows how to set complex field for datasource having array of objects.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/complex-data-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/complex-data-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/complex-data-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/complex-data-cs2" %}

>Since customized values are displayed in the column, data operations, such as sorting and fiiltering, cannot be performed for this column.