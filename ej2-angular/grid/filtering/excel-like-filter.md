---
layout: post
title: Excel like filter in Angular Grid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel like filter 
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Angular Grid component

The Syncfusion Angular Grid component provides an Excel-like filter feature that delivers a familiar and intuitive filtering interface similar to Microsoft Excel. This advanced filtering capability enables users to perform complex filtering operations on specific columns with ease, making it ideal for applications that handle large datasets and require sophisticated data filtering requirements.

The Excel-like filter combines multiple filtering options including text-based, number-based, date-based, and boolean-based filters within a single, comprehensive dialog. This feature is particularly beneficial when users need to apply multiple filter conditions simultaneously or when working with categorical data that requires checkbox-style selection.

The following example demonstrates how to implement Excel-like filtering in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs1" %}

> * The Excel-like filter feature supports various filter conditions, including text-based, number-based, date-based, and boolean-based filters.
> * The filter dialog provides additional options, such as sorting filter values, searching for specific values, and clearing applied filters.

## Checkbox filtering

The checkbox filtering feature in the Syncfusion Angular Grid provides a user-friendly approach to filter data through checkbox selections within individual columns. This filtering method excels when working with categorical data, allowing users to select multiple values simultaneously for more granular data filtering. The checkbox filter interface presents all unique values in a column as selectable checkboxes, making it intuitive for users to include or exclude specific data points.

This filtering approach is especially effective for columns containing discrete categories, status values, or boolean data where users need to view multiple selected values at once.

The following example demonstrates how to implement checkbox filtering in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/check-box-filter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/check-box-filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/check-box-filter-cs1" %}

## Customize the filter choice count

The Grid component optimizes performance by displaying a maximum of 1000 distinct values in the filter dialog checkbox list by default. This default configuration ensures efficient filter operations even when working with extensive datasets. The filter dialog retrieves distinct data from the first 1000 records bound to the Grid for optimal performance, while remaining records are accessible through the search functionality within the filter dialog.

The Grid allows customization of the distinct data count displayed in the checkbox list of Excel/checkbox type filter dialogs. This flexibility enables adjustment of the filter choice count based on specific application requirements and dataset characteristics.

Customization is achieved by modifying the [filterChoiceCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSearchBeginEventArgs/#filterchoicecount) value through the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. When the [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) is either `filterChoiceRequest` or `filterSearchBegin`, the `filterChoiceCount` property can be set to the desired value.

The following example demonstrates how to customize the filter choice count in the checkbox list:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs2" %}

> The specified filter choice count value determines the display of unique items as checkbox list in the Excel/checkbox type filter dialog. Higher values may result in rendering delays when opening the filter dialog. Therefore, setting a reasonable filter choice count value is recommended for optimal performance.

## Add current selection to filter Checkbox/Excel

By default, the CheckBox/Excel filter in the Syncfusion Angular Grid applies filtering based solely on currently selected items. When multiple filtering actions are performed sequentially on the same column, previously filtered values are cleared and replaced with the new selection.

The `Add current selection to filter` checkbox functionality enables retention of previous filter values while performing new searches. This checkbox appears when searching data in the CheckBox/Excel filter search bar, allowing users to include new selections without removing previously applied filters. This cumulative filtering approach provides greater flexibility for complex filtering scenarios.

The following image illustrates the `Add current selection to filter` functionality:

![Checkbox filter](../images/checkboxfilter.png)

## Show customized text in checkbox list data

The Syncfusion Angular Grid provides comprehensive customization capabilities for text displayed in Excel/Checkbox filtering options. This functionality allows modification of default text to provide more meaningful and contextual labels that better represent the data being filtered.

Text customization is achieved by defining a `filterItemTemplate` and binding it to the target column. The `filterItemTemplate` property enables creation of custom templates for filter items, supporting any logic and HTML elements within the template to display desired text or content.

The following example demonstrates text customization in the filter checkbox list for the **Delivered** column. The `filterItemTemplate` is defined within the `<e-column>` element, using Angular template syntax to conditionally display **Delivered** for true values and **Not delivered** for false values:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { categoryData } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
    <ejs-grid #grid [dataSource]="data" allowPaging="true" allowFiltering="true" [pageSettings]="pageSettings" [filterSettings]="filterOptions" >
      <e-columns>
        <e-column field="CategoryName"  headerText="Category Name"  width="120" ></e-column>
        <e-column field="Delivered"  headerText="Delivered"  width="120"  displayAsCheckBox="true" [filter]="columnFilterSettings" > 
    <ng-template #filterItemTemplate let-data>{{data.Delivered == true ? "Delivered" : "Not delivered"}}</ng-template></e-column>
        <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
  `,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public pageSettings?: PageSettingsModel = { pageSize: 6 };
  public filterOptions: Object = { type: 'Excel' };
  public columnFilterSettings?: Object;
  public filterItemTemplate?: string;

  ngOnInit(): void {
    this.data = categoryData;
    this.columnFilterSettings = {
      type: 'CheckBox',
      filterItemTemplate: this.filterItemTemplate,
    };
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs7" %}

## Show template in checkbox list data

The `filterItemTemplate` property in the Syncfusion Angular Grid enables comprehensive customization of filter item appearance within the grid's filter checkbox list for specific columns. This property proves valuable when providing custom UI elements or additional information within the filter checkbox list, including icons, formatted text, or complex HTML elements alongside default filter items.

Template customization enhances user experience by providing visual cues and additional context for filter options, making data filtering more intuitive and efficient.

The following example demonstrates usage of `filterItemTemplate` to render icons alongside category names in the filter checkbox list for the **Category Name** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { categoryData } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
    <ejs-grid #grid [dataSource]="data" allowPaging="true" allowFiltering="true" [pageSettings]="pageSettings" [filterSettings]="filterOptions" >
      <e-columns>
        <e-column field="CategoryName"  headerText="Category Name"  width="150" [filter]="columnFilterSettings">
        <ng-template #filterItemTemplate let-data><span [ngClass]="categoryIcons[data.CategoryName]"></span> {{data.CategoryName}} </ng-template>
        </e-column>
        <e-column field="Discontinued"  headerText="Discontinued"  width="100" displayAsCheckBox="true" ></e-column>
        <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
  `,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public pageSettings?: PageSettingsModel = { pageSize: 6 };
  public filterOptions: Object = { type: 'Excel' };
  public columnFilterSettings?: Object;
  @ViewChild('filterItemTemplate')
  public filterItemTemplate?: any;
  categoryIcons: { [key: string]: string } = {
    Beverages: 'fas fa-coffee',
    Condiments: 'fas	fa-leaf',
    Confections: 'fas fa-birthday-cake',
    DairyProducts: 'fas fa-ice-cream',
    Grains: 'fas fa-seedling',
    Meat: 'fas fa-drumstick-bite',
    Produce: 'fas fa-carrot',
    Seafood: 'fas fa-fish',
  };

  ngOnInit(): void {
    this.data = categoryData;
    this.columnFilterSettings = {
      type: 'Excel',
      filterItemTemplate: this.filterItemTemplate,
    };
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs4" %}

## Customize the excel filter dialog using CSS

The Syncfusion Angular Grid provides extensive flexibility for enhancing the visual presentation of the Excel filter dialog through CSS customization. This capability allows modification of the dialog's appearance to align with specific application requirements and aesthetic preferences.

**Removing context menu option**


The Excel filter dialog includes several features such as **context menu**, **search box**, and **checkbox list** that may not be required in certain scenarios. These options can be selectively removed using CSS targeting through the **className** attribute in the grid component.

To remove the context menu option from the Excel filter dialog, apply the following CSS rule:

```css
.e-grid .e-excelfilter .e-contextmenu-wrapper 
{
    display: none;
}
```

The following example demonstrates context menu removal in the Excel filter dialog using the above CSS customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-like-filtering-cs8" %}

## Bind custom remote datasource for excel/checkbox filtering

The Syncfusion Angular Grid allows you to dynamically change the filter data source for the Excel or checkbox filter module using custom remote data as well. This can be done by either assigning a custom remote [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) as the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) or by fetching the data initially and storing it in a global variable. This data can then be bound directly to the filter module's `dataSource` in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event for the `filterBeforeOpen` [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype), as detailed in our [knowledge base](https://support.syncfusion.com/kb/article/10065/how-to-change-the-data-source-for-checkbox-filter-popup-in-grid).

The following example demonstrates how to dynamically change the remote custom data source for all columns in the Excel or checkbox filter dialog using a `DataManager` with `WebApiAdaptor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering-custom-datasouce-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering-custom-datasouce-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering-custom-datasouce-cs1" %}

## Hide sorting option in filter dialog

The Excel-like filter dialog in the Syncfusion Angular Grid includes built-in sorting options (ascending and descending) by default. To hide these options, set the **display** property of the following CSS classes to **none**, which will prevent the sorting options from appearing in the filter dialog:

```css
.e-excel-ascending,
.e-excel-descending,
.e-separator.e-excel-separator {
 display: none;
}
```

The following example demonstrates how to hide sorting options in the Excel filter dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-like-filtering-hide/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-like-filtering-hide/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-like-filtering-hide" %}

## Render checkbox list data in on-demand for excel/checkbox filtering

The Excel/Checkbox filter type of Grid has a restriction where only the first 1000 unique sorted items are accessible to view in the filter dialog checkbox list content by scrolling. This limitation is in place to avoid any rendering delays when opening the filter dialog. However, the searching and filtering processes consider all unique items in that particular column.

The Excel/Checkbox filter provides on-demand loading capability for large datasets during scrolling to overcome scrolling limitations. This feature is enabled by setting the [filterSettings.enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#enableinfinitescrolling) property to **true**. This functionality proves especially beneficial for managing extensive datasets, enhancing data loading performance in the checkbox list, and enabling interactive checkbox selection with persistence based on filtering criteria.

The Excel/Checkbox filter retrieves distinct data in ascending order, governed by the [filterSettings.itemsCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#itemscount) property with a default value of **50**. As the checkbox list data scroller reaches its end, the next dataset is fetched and displayed. This process only requests new checkbox list data without redundantly fetching existing loaded datasets.

### Customize the items count for initial rendering

The items count value determines the unique data retrieved and displayed in the Excel/Checkbox filter content dialog. The count of on-demand data rendering for Excel/Checkbox filter can be customized by adjusting the [filterSettings.itemsCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#itemscount) property. The default value is `50`.

```ts
grid.filterSettings = { enableInfiniteScrolling = true, itemsCount = 40 };
```

> It is recommended to keep the itemsCount below **300**. Higher values may result in unwanted whitespace due to DOM maintenance performance degradation.

### Customize the loading animation effect

A loading effect indicates that data loading is in progress when the checkbox list data scroller reaches the end and there is a delay in receiving the data response from the server. The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [filterSettings.loadingIndicator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#loadingindicator) property. The default value is `Shimmer`.

```ts
grid.filterSettings = { enableInfiniteScrolling = true, loadingIndicator = 'Spinner' };
```

The following example demonstrates On-Demand Excel filter implementation for the Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/checkbox-excel-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/checkbox-excel-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/checkbox-excel-filter" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)