---
layout: post
title: Excel like filter in Angular TreeGrid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel like filter 
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Angular TreeGrid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component offers an Excel-like filter feature, providing a familiar and user-friendly interface for filtering data within the TreeGrid. This feature simplifies complex filtering operations on specific columns, allowing for quick data location and manipulation, similar to Microsoft Excel. Excel-like filtering is especially useful when dealing with large datasets and complex filtering requirements.

Here is an example showcasing how to render the Excel-like filter within the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs1" %}

>* The Excel-like filter feature supports various filter conditions, including text-based, number-based, date-based, and boolean-based filters.
>* The filter dialog provides additional options, such as sorting filter values, searching for specific values, and clearing applied filters.

## Checkbox filtering

The checkbox filtering feature in TreeGrid enables filtering data based on checkbox selections within a column. This powerful filtering option simplifies the process of narrowing down data, providing a more efficient and user-friendly experience. The checkbox filter feature is particularly useful when dealing with columns containing categorical data.

Here is an example showcasing how to render the checkbox filter within the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs1" %}

## Customize the filter choice count

By default, the filter choice count is set to 1000, which means that the filter dialog will display a maximum of 1000 distinct values for each column as checkbox list data. This default value ensures that the filter operation remains efficient, even with large datasets. Additionally, the filter dialog retrieves and displays distinct data from the first 1000 records bound to the TreeGrid to optimize performance, while the remaining records are returned as a result of the search option within the filter dialog.

The TreeGrid component allows customizing the number of distinct data displayed in the checkbox list of the Excel/checkbox type filter dialog. This can be useful when customizing the default filter choice count values while using large datasets.

The filter choice count can be increased or decreased based on specific requirements. This can be achieved by adjusting the [filterChoiceCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSearchBeginEventArgs/#filterchoicecount) value.

The following example demonstrates how to customize the filter choice count in the checkbox list of the filter dialog. In the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event, check if the [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) is either `filterChoiceRequest` or `filterSearchBegin`, and then set the `filterChoiceCount` property to the desired value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs2" %}

> The specified filter choice count value determines the display of unique items as a checkbox list in the Excel/checkbox type filter dialog. This can result in a delay in rendering these checkbox items when opening the filter dialog. Therefore, it is advisable to set a restricted filter choice count value.

## Show customized text in checkbox list data

The TreeGrid component provides flexibility to customize the text displayed in the Excel/Checkbox filtering options. This allows modifying the default text and providing more meaningful and contextual labels for filtering.

To customize the text in the Excel/Checkbox filter, define a `filterItemTemplate` and bind it to the desired column. The `filterItemTemplate` property allows creating custom templates for filter items. Any logic and HTML elements can be used within this template to display the desired text or content.

In the example below, the text displayed in the filter checkbox list for the **Approved** column is customized. This is achieved by defining a `filterItemTemplate` within the <e-column> element for that specific column. Inside the template, Angular's template syntax is used to conditionally display **Approved** if the data value is true and **Not approved** if the value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}


import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field="approved"  headerText="Approved"  width="120"  displayAsCheckBox="true" [filter]="columnFilterSettings" > 
                      <ng-template #filterItemTemplate let-data>{{data.approved == true ? "Approved" : "Not approved"}}
                      </ng-template>
                    </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    public columnFilterSettings?: Object;
    public filterItemTemplate?: string;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};
        this.columnFilterSettings = {
          type: 'CheckBox',
          filterItemTemplate: this.filterItemTemplate,
        };
    }
   
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs3" %}

## Show template in checkbox list data

The `filterItemTemplate` property in the TreeGrid allows customizing the appearance of filter items in the TreeGrid's filter checkbox list for a specific column. This property is useful when providing a custom UI or additional information within the filter checkbox list, such as icons, text, or any HTML elements, alongside the default filter items.

In this example, the `filterItemTemplate` is used to render icons along with the category names in the filter checkbox list for the **Category Name** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs4" %}

## Customize the Excel filter dialog using CSS

In the TreeGrid, the visual presentation of the Excel filter dialog can be enhanced. This can be achieved by utilizing CSS styles to modify the dialog's appearance according to the specific needs and aesthetics of the application.

**Removing context menu option**

The Excel filter dialog includes several features such as **context menu**, **search box**, and **checkbox list** that may not be required in some scenarios. These options can be removed using CSS styles applied to the TreeGrid component.

```css
.e-treegrid .e-excelfilter .e-contextmenu-wrapper 
{
    display: none;
}
```

The following example demonstrates how to remove the context menu option in the Excel filter dialog using the above mentioned CSS:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs5" %}

## Render checkbox list data in on-demand for Excel/checkbox filtering

The Excel/Checkbox filter type of TreeGrid has a restriction where only the first 1000 unique sorted items are accessible to view in the filter dialog checkbox list content by scrolling. This limitation is in place to avoid any rendering delays when opening the filter dialog. However, the searching and filtering processes consider all unique items in that particular column.

The Excel/Checkbox filter in the TreeGrid provides an option to load large data sets on-demand during scrolling to improve scrolling limitation functionality. This is achieved by setting the [filterSettings.enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#enableinfinitescrolling) property to **true**. This feature proves especially beneficial for managing extensive datasets, enhancing data loading performance in the checkbox list, and allowing interactive checkbox selection with persistence for the selection based on filtering criteria.

The Excel/Checkbox filter retrieves distinct data in ascending order, governed by its [filterSettings.itemsCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#itemscount) property, with a default value of **50**. As the checkbox list data scroller reaches its end, the next dataset is fetched and displayed, with the notable advantage that this process only requests new checkbox list data without redundantly fetching the existing loaded dataset.

### Customize the items count for initial rendering

Based on the items count value, the Excel/Checkbox filter gets unique data and displays it in the Excel/Checkbox filter content dialog. The count of on-demand data rendering for Excel/Checkbox filter can be customized by adjusting the [filterSettings.itemsCount](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#itemscount) property. The default value is `50`.

```ts
treegrid.filterSettings = { enableInfiniteScrolling: true, itemsCount: 40 };
```

> It is recommended to keep the itemsCount below **300**. Higher values will result in unwanted whitespace because of DOM maintenance and performance degradation.

### Customize the loading animation effect

A loading effect is presented to signify that loading is in progress when the checkbox list data scroller reaches the end, and there is a delay in receiving the data response from the server. The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [filterSettings.loadingIndicator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#loadingindicator) property. The default value is `Shimmer`.

```ts
treegrid.filterSettings = { enableInfiniteScrolling: true, loadingIndicator: 'Spinner' };
```

In the provided example, On-Demand Excel filter has been enabled for the TreeGrid:

```ts
import { Component, OnInit } from '@angular/core';
import { DataManager,Query, WebApiAdaptor,UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' [query]='query' parentIdMapping='ParentItem' hasChildMapping='isParent' idMapping='TaskID' height=265 allowPaging='true' allowFiltering='true' [pageSettings]='pageSettings' [filterSettings]='filterSettings'>
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                        <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
                        <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                        <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;
    public query?: Query;
  public pageSettings: Object | undefined;
  public filterSettings: Object | undefined;

    ngOnInit(): void {
        this.data = new DataManager({
                url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
                adaptor: new WebApiAdaptor, crossDomain: true
            });
        this.query = new Query().addParams('ej2treegrid', 'true');
        this.pageSettings = { pageCount: 5 };
        this.filterSettings = { type: 'Excel', enableInfiniteScrolling: true };
}
}
```

## Hide sorting options in filter dialog 

The Excel filter dialog includes several features such as **context menu**, **search box**, **sorting option** and **checkbox list**. The sorting options can be hidden using CSS styles applied to the TreeGrid component.

```css
.e-excel-ascending,
.e-excel-descending,
.e-separator.e-excel-separator {
  display: none;
}
```

The following example demonstrates how to hide the sorting option in the Excel filter dialog using the above mentioned CSS:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-filtering-cs6" %}