---
layout: post
title: Filtering in Angular Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Grid component

Filtering is a powerful feature in the Syncfusion Grid component that enables users to selectively view data based on specific criteria. This functionality allows you to narrow down large datasets and focus on relevant information, thereby enhancing data analysis and decision-making capabilities.

To use filtering functionality, inject **FilterService** in the provider section of **AppModule**.

To enable filtering in the Grid, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property to true. Once filtering is enabled, configure various filtering options through the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) property to define the behavior and appearance of filters.

The following example demonstrates basic filtering functionality:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs1" %}

> * Apply and clear filtering programmatically using [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * Disable filtering for specific columns by setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply an initial filter, you need to specify the filter criteria using the [predicate](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate/) object in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns). The `predicate` object represents the filtering condition and contains properties such as field, operator, and value.

The following example demonstrates initial filter configuration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs2" %}

### Initial filter with multiple values for same column

You can establish an initial filter containing multiple values for a particular column, which helps preset filter conditions using multiple values. This functionality displays filtered records immediately when the grid loads.

To apply multiple values for the same column at initial rendering, set multiple filter [predicate](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate/) objects in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

The following example demonstrates initial filtering with multiple values for the same **CustomerID** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs3" %}

### Initial filter with multiple values for different columns 

You can apply initial filters with multiple values across different columns by setting predefined filter settings for each column. This results in filtered records displayed immediately upon grid initialization.

To apply filters with multiple values for different columns at initial rendering, configure multiple filter [predicate](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate/) objects in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

The following example demonstrates how to perform an initial filter with multiple values for different **Order ID** and **Customer ID** columns using `filterSettings.columns` and `predicate`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs12" %}

## Filter operators

The Syncfusion Grid component provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property in the [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#columns) object.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date
in |Filters multiple records in the same column that exactly match any of the selected values. |String &#124; Number &#124; Date
notin |Filters multiple records in the same column that do not match any of the selected values. |String &#124; Number &#124; Date

## Wildcard and LIKE operator filter

**Wildcard** and **LIKE** filter operators filters the value based on the given string pattern, and they apply to string-type columns. But it will work slightly differently.

### Wildcard filtering

The **Wildcard** filter processes one or more search patterns using the "*" symbol, retrieving values matching the specified patterns. This filter option supports all search scenarios in the DataGrid.

**Wildcard pattern examples:**

| Operator | Description |
|----------|-------------|
| a*b | Everything that starts with "a" and ends with "b" |
| a* | Everything that starts with "a" |
| *b | Everything that ends with "b" |
| *a* | Everything that contains "a" |
| *a*b* | Everything containing "a", followed by anything, then "b", followed by anything |

![Wildcard filter in Angular Grid.](../images/angular-grid-wildcard-search.gif)

### LIKE filtering

The **LIKE** filter processes single search patterns using the "%" symbol, retrieving values matching the specified patterns. The following Grid features support LIKE filtering on string-type columns:

* Filter Menu
* Filter Bar with [filterSettings.showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#showFilterBarOperator) property enabled
* Custom Filter of Excel filter type

**LIKE pattern examples:**

| Operator | Description |
|----------|-------------|
| %ab% | Returns all values that contain "ab" characters |
| ab% | Returns all values that end with "ab" characters |
| %ab | Returns all values that start with "ab" characters |

![LIKE filter in Angular Grid.](../images/angular-grid-like-filter.gif)

## Diacritics filter

The diacritics filter feature handles text data that includes accented characters (diacritic characters). By default, the grid ignores these characters during filtering. To consider diacritic characters in filtering operations, enable this feature by setting the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) property to true within [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).

The following example demonstrates diacritics filtering with the `ignoreAccent` property set to true:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs4" %}

## Perform ENUM column filtering

The Syncfusion Angular Grid allows you to filter enum-type data using the [FilterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) feature. This is particularly useful for filtering predefined values, such as categories or statuses.

To achieve this functionality:

1. Render [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) in the [FilterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) for the enum-type column
2. Bind the enumerated list data to the column
3. Use the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property to display enum values in a readable format
4. In the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event of the DropDownList, dynamically filter the column using the [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#filterbycolumn) method

The following example demonstrates enum-type data filtering:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridModule,GridComponent,FilterService } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { data, OrderData, FileType } from './datasource';

@Component({
  imports: [GridModule, DropDownListModule],
  selector: 'app-root',
  standalone: true,
  providers: [FilterService],
  template: `
    <ejs-grid #grid [dataSource]="data" [allowFiltering]="true" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="100"></e-column>
        <e-column field="Type" headerText="Type" width="130">
          <ng-template #template let-data>
            {{ data.Type === 1 ? 'Base' : data.Type === 2 ? 'Replace' : data.Type === 3 ? 'Delta' : '' }}
          </ng-template>
          <ng-template #filterTemplate let-data>
            <div>
              <ejs-dropdownlist  #dropDown [dataSource]="filterDropData" [fields]="{ text: 'Type', value: 'Type' }" [value]="filterDropData[0].Type" (change)="onTypeFilterChange($event)">
              </ejs-dropdownlist>
            </div>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: OrderData[];
  public filterDropData: { Type: string }[] = [
    { Type: 'All' },
    { Type: 'Base' },
    { Type: 'Replace' },
    { Type: 'Delta' },
  ];
  ngOnInit(): void {
    this.data = data; 
  }
  public onTypeFilterChange(args: ChangeEventArgs): void {
    if (args.value === 'All') {
      this.grid?.clearFiltering();
    } else {
      this.grid?.filterByColumn(
        'Type',
        'contains',
        FileType[args.value as keyof typeof FileType]
      );
    }
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid/filtering-enum/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering-enum/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering-enum" %}

## Filtering with case sensitivity

The Syncfusion Angular Grid provides the flexibility to enable or disable case sensitivity during filtering. This feature is useful when you want to control whether filtering operations should consider the case of characters. It can be achieved by using the  [enableCaseSensitivity](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#enablecasesensitivity) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) of the grid.

Below is an example code demonstrating how to enable or disable case sensitivity while filtering:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs5" %}

## Enable different filter for a column

The Syncfusion Angular Grid offers the flexibility to customize filtering behavior for different columns by enabling various types of filters such as **Menu**, **Excel**, **Checkbox**. This feature allows you to tailor the filtering experience to suit the specific needs of each column in your grid. For example, you might prefer a menu-based filter for a category column, an Excel-like filter for a date column, and a checkbox filter for a status column. 

It can be achieved by adjusting the [column.filter.type](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property based on your requirements.

Here's an example where the menu filter is enabled by default for all columns, but you can dynamically modify the filter types through a dropdown:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/filter-cs6/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs6" %}

## Change default filter operator for particular column

The Syncfusion Grid component provides the flexibility to change the default filter operator for a particular column. By default, the filter operator for string-type columns is **startsWith**, for numerical-type columns is **equal**, and for boolean-type columns is also **equal**. However, you may need to customize the filter operator to better match the nature of the data in a specific column. This can be achieved using the operator property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#filtersettings) configuration.

Here's an example that demonstrates how to change the default filter operator column :

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/filter-cs7/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs7" %}

## Filter grid programmatically with single and multiple values using method 

Programmatic filtering in the Syncfusion Angular Grid with single and multiple values allows you to apply filters to specific columns in the grid without relying on interactions through the interface.

This can be achieved by utilizing the [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/#filterbycolumn) method of the Grid.

The following example demonstrates programmatic filtering using single and multiple values for **OrderID** and **CustomerID** columns through external button click functions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs8" %}

## How to get filtered records

Retrieve filtered records using available methods and properties in the Grid component when working with data that matches currently applied filters.

**1.Using the getFilteredRecords() method**

The [getFilteredRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getfilteredrecords) method obtains an array of records that match currently applied filters on the grid.

The following example demonstrates getting filtered data using the `getFilteredRecords` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/filter-cs9/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs9" %}

**2.Using the properties in the FilterEventArgs object**

Alternatively, use properties available in the [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/) object to obtain filter record details:

* [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#columns): Returns the collection of filtered columns
* [currentFilterObject](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilterobject): Returns the currently filtered object
* [currentFilteringColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilteringcolumn): Returns the currently filtered column name

Access these properties using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event handler:

```typescript
actionComplete(args: FilterEventArgs) {
    var column = args.columns;
    var object = args.currentFilterObject;
    var name = args.currentFilteringColumn;
}
```

## Clear filtering using methods

The Grid provides the [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearfiltering) method to remove filter conditions and reset the grid to its original state.

The following example demonstrates clearing filters using the `clearFiltering` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs10" %}

## Filtering events

Filtering events allow you to customize grid behavior when filtering is applied. You can prevent filtering for specific columns, display messages to users, or perform other actions to suit your application requirements.

Implement filtering events using available events such as [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete). These events allow you to intervene in the filtering process and customize it as needed.

The following example demonstrates filtering prevention for the **ShipCity** column during the `actionBegin` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { MessageModule } from '@syncfusion/ej2-angular-notifications'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel, GridComponent, FilterEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        MessageModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<div id='message'>{{message}}</div><ejs-grid #grid [dataSource]='data' [allowFiltering]='true' height='273px' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public message: string | undefined;
    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: FilterEventArgs) {
        if (args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity') {
            args.cancel = true;
            this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action is cancelled for ' + args.currentFilteringColumn;
        }
    }

    actionComplete(args: FilterEventArgs) {
        if (args.requestType == 'filtering' && args.currentFilteringColumn) {
            this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
        } else {
            this.message = '';
        }
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs11" %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to apply initial filter on custom binding in Angular Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)