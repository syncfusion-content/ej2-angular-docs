---
layout: post
title: Angular Grid - Sorting | Syncfusion
description: Angular Grid sorting explains single and multi-column sorting, custom comparers, and UI options to control sort behavior and indicator rendering.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular Grid Component

The Grid component provides built-in support for sorting data-bound columns in ascending or descending order. To enable sorting in the grid, set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowsorting) property to `true`.

Sorting a particular column is accomplished by clicking on its column header. Each click on the header toggles the sort order between `Ascending` and `Descending`.

To use the sorting feature, inject the `SortService` in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs1" %}

> * Grid column sorted in `Ascending` order. If a click occurs on an already sorted column, the sort direction toggles.
> * Apply and clear sorting by using the [sortColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#sortcolumn) and [clearSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#clearsorting) methods.
> * To disable sorting for a specific column, set the [columns.allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowsorting) property to `false`.

## Initial sorting

The Grid component provided option to apply initial sorting by setting the [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings#columns) property to the desired [field](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel#field) and sort [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel#direction). This feature is useful for displaying data in a specific order when the grid initially loads.

The following example demonstrates setting [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings#columns) for "Order ID" and "Ship City" columns with a specified [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel#direction).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs2" %}

> The initial sorting defined in [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings#columns) will override any sorting applied through user interaction.

## Multi-column sorting

The Grid component supports multi-column sorting, allowing multiple columns to be sorted simultaneously. To enable multi-column sorting, set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowsorting) and the [allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowmultisorting) properties to `true`. This enables sorting of multiple columns by holding the <kbd>CTRL</kbd> key and clicking the column headers. This feature is useful for sorting data based on multiple criteria to analyze it in various ways.

To clear multi-column sorting for a particular column, press <kbd>Shift</kbd> while clicking the column header.

> * The [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowsorting) must be `true` while enabling multi-column sort.
> * Set [allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowmultisorting) property as `false` to disable multi-column sorting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs3" %}

## Prevent sorting for particular column

The Grid component provides the ability to prevent sorting for a particular column. This is useful when certain columns should not be included in the sorting process. 

This is achieved by setting the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowsorting) property of the particular column to `false`. 

The following example demonstrates disabling sorting for "Customer ID" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs11" %}

## Sort order

By default, the sorting order is "ascending → descending → none".

The first click on a column header sorts the column in ascending order. A second click sorts the column in descending order. A third click clears the sorting.

## Custom sorting 

The Grid component supports customizing the default sort action for a column by defining the [sortComparer](https://ej2.syncfusion.com/angular/documentation/api/grid/column#sortcomparer) property. The `sortComparer` function works similarly to the [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) comparer function, allowing custom sorting logic to be defined for a specific column.

The following example demonstrates defining a custom `sortComparer` function for the "Customer ID" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs5" %}

> The "customSortComparer" function takes two parameters: a and b, which are the values being compared. The function returns "-1", "0", or "1", depending on the comparison result.

### Display null values always at bottom 

By default, "null" values in a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid are displayed at the top when sorting in descending order and at the bottom when sorting in ascending order. However, "null" values can be configured to always display at the bottom of the grid regardless of sort direction. This is achieved by utilizing the [column.sortComparer](https://ej2.syncfusion.com/angular/documentation/api/grid/column#sortcomparer) method. This feature is particularly useful when working with data sets where "null" values need to be clearly separated from actual data entries.

The example below demonstrates displaying "null" values at the bottom of the grid while sorting the "Order Date" column in both ascending and descending order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/null-date-value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/null-date-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/null-date-value-cs1" %}

## Touch interaction

When tapping the grid header on touch devices, the selected column header is sorted and displays a popup ![Sorting](images/sorting.jpg) for multi-column sorting; tap the popup to sort multiple columns ![Multi Sorting](images/msorting.jpg) and then tap the desired grid headers.

> The [allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowmultisorting) and [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowsorting) should be `true` then only the popup will be shown.

The following screenshot represents a grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## Sort foreign key column based on text

To perform sorting based on foreign key column, the foreign key column can be enabled by using [column.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/column#datasource), [column.foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column#foreignkeyfield) and [column.foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column#foreignkeyvalue) properties.

**Sort foreign key column based on text for local data**

In the case of local data in the grid, the sorting operation will be performed based on the [foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column#foreignkeyvalue) property of the column. The `foreignKeyValue` property should be defined in the column definition with the corresponding foreign key value for each row. The grid will sort the foreign key column based on the text representation of the `foreignKeyValue` property.

The following example demonstrates sorting with a foreign key column enabled, where the "Customer ID" column acts as a foreign column displaying the "Contact Name" column from foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs10" %}

> Make sure to inject the `ForeignKeyService` in the provider section of the **AppModule** to ensure its availability throughout the application.

**Sort foreign key column based on text for remote data**

In the case of remote data in the grid, the sorting operation will be performed based on the [foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column#foreignkeyfield) property of the column. The `foreignKeyField` property should be defined in the column definition with the corresponding foreign key field name for each row. The grid will send a request to the server-side with the `foreignKeyField` name, and the server-side should handle the sorting operation and return the sorted data to the grid.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120 foreignKeyValue='FirstName'
                         [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService]
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public employeeData: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
            url: '/OData/Items',
            adaptor: new ODataV4Adaptor()
        });
        this.employeeData = new DataManager({
            url: '/OData/Brands',
            adaptor: new ODataV4Adaptor()
        });
    }
}

```

The following code example describes the handling of sorting operation at the server side.

```cs
public class ItemsController : ODataController
{
    [EnableQuery]
    public IQueryable<Item> Get()
    {
        List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
        List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
        var queryString = HttpContext.Current.Request.QueryString;
        var allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
        string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
        if (key != null)
        {
            if (key == "EmployeeID") {
                GridData = SortFor(key); //Only for foreignKey Column ascending
            }
            else if(key == "EmployeeID desc") {
                GridData = SortFor(key); //Only for foreignKey Column descending
            }
        }
        var count = GridData.Count();
        var data = GridData.AsQueryable();
        return data;
    }

    public List<Item> SortFor(String Sorted)
    {
        List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
        List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
        if (Sorted == "EmployeeID") //check whether ascending or descending
            empData = empData.OrderBy(e => e.FirstName).ToList();
        else if(Sorted == "EmployeeID desc")
            empData = empData.OrderByDescending(e => e.FirstName).ToList();
        List<Item> or = new List<Item>();
        for (int i = 0; i < empData.Count(); i++) {
            //Select the Field matching records
            IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
            or.AddRange(list);
        }
        return or;
    }
}
```

## Perform sorting based on its culture

Perform sorting based on culture in the Grid can be achieved by utilizing the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid#locale) property. By setting the `locale` property to the desired culture code, you enable sorting based on that specific culture. This allows you to apply locale-specific sorting rules and ensure accurate ordering for different languages and regions.

In the following example, sorting is performed based on the "ar" locale using the [column.sortComparer](https://ej2.syncfusion.com/angular/documentation/api/grid/column#sortcomparer) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/localization-cs4" %}

## Customizing the sort icon

Sort icon customization in the Grid is accomplished by overriding the default grid classes `.e-icon-ascending` and `.e-icon-descending` with custom content using CSS. The desired icons or symbols are specified using the `content` property as shown below:

```css
.e-grid .e-icon-ascending::before {
  content: '\e306';
}
	
.e-grid .e-icon-descending::before {
  content: '\e304';
}
```
The following sample demonstrates a grid rendered with a customized sort icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/sorting1-cs7" %}

## Sort columns externally

The Grid component in Syncfusion's Angular suite allows customization of column sorting and provides flexibility in sorting based on external interactions. Sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

External column sorting is accomplished using the [sortColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#sortcolumn) method with parameters `columnName`, `direction`, and `isMultiSort`. This method enables programmatic sorting of a specific column based on specified requirements.

The following example demonstrates adding sort columns to a grid. The `DropDownList` component selects the column and sort direction. When an external button is clicked, the [sortColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#sortcolumn) method is called with the specified `columnName`, `direction`, and `isMultiSort` parameters. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/sorting1-cs9" %}

### Remove sort columns

External removal of sort columns is accomplished using the `removeSortColumn` method provided by the Grid component. This method removes the sorting applied to a specific column.

The following example demonstrates removing sort columns. The `DropDownList` component selects the column. When an external button is clicked, the `removeSortColumn` method removes the selected sort column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/sorting1-cs8" %}

### Clear sorting 

Sorting is cleared on an external button click using the [clearSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#clearsorting) method provided by the Grid component. This method clears the sorting applied to all columns in the grid. 

The following example demonstrates to clear the sorting using `clearSorting` method in the external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/sorting1-cs6" %}

## Sorting Events

The Grid component provides two events that are triggered during the sorting action such as [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete). These events can be used to perform any custom actions before and after the sorting action is completed.

1. **actionBegin**: [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current grid state, including the current sorting column, direction, and data.

2. **actionComplete**: [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current grid state, including the sorted data and column information.

The following example demonstrates the use of the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) events work when sorting is performed. The `actionBegin` event event is used to cancel the sorting of the OrderID column. The `actionComplete` event is used to display a message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [GridModule],
providers: [SortService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid [dataSource]='data' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)' [allowSorting]='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public message?: string;

    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: SortEventArgs) {
        if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
            this.message = args.requestType + ' action cancelled for ' + args.columnName + ' column';
            args.cancel = true;
        }
    }
    actionComplete({ requestType, columnName }: SortEventArgs) {
        this.message = requestType + ' action completed for ' + columnName + ' column';
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting1-cs4" %}

> [args.requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is `sorting`.

## See Also

* [How to remove the Sorting indicator from the column headers in Angular Grid](https://www.syncfusion.com/forums/150597/how-to-remove-the-sorting-indicator-from-the-column-headers-in-angular-grid)
* [How to change loading indicator in Angular Grid](./data-binding/data-binding#loading-animation)