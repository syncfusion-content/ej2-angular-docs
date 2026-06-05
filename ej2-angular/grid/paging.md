---
layout: post
title: Angular Grid - Paging | Syncfusion
description: Angular Grid paging supports client and server paging with options, templates, and performance features to navigate large data sets efficiently.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Grid Component

Paging allows the Angular Grid to display data in segmented pages instead of loading the entire dataset at once. This greatly improves initial load performance and overall responsiveness especially with large datasets by rendering only the records of the current page.

To enable paging in the Angular Grid, import the `PageService` from `@syncfusion/ej2-angular-grids` and add it to the Grid component's providers array.

```ts
import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { PageService } from '@syncfusion/ej2-angular-grids';

 @Component({
    selector: 'app-root',   
    templateUrl: 'app.component.html',
    providers: [PageService],
    standalone: true,
    imports: [ GridModule, ]
 })

 export class AppComponent {
    public data: Object[];
    public pageSettings: Object;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 5 }; 
    }
}
```

## Enable paging

Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid#allowpaging) property to `true`. This automatically renders a pager at the bottom of the grid for easy navigation between pages.

Use the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings) property to customize paging options such as page size, current page, and total record count.

> Paging improves performance by allowing the grid to fetch and display only a predefined number of records from the data source.

## Customize pager options 

Customize the pager options in the Angular Data Grid using the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings) object:
 
- `pageCount`: Number of pages to display in the pager.
- `currentPage`: Denotes the active page.
- `pageSize`: Number of rows displayed per page.
- `pageSizes`:  Displays a `DropDownList` in the pager to select desired page size.
- `enableQueryString`: Include the current page in the URL as a query string parameter for easier navigation and bookmarking.

### Change page size 

The Grid supports adjusting the number of records shown per page for flexible data presentation. The [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesize) property defines the initial number of records shown, replacing the default value of "12".

The following example demonstrates modifying the page size dynamically using a textbox value and an external button click:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs10" %}

### Change page count 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports customizing the number of page links shown in the pager through the [pageSettings.pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagecount) property. The default value is "8", and it can be adjusted to enhance navigation, especially when handling large datasets.

The example below demonstrates updating the page count dynamically using a textbox value and an external button click:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs11" %}

### Change current page

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports programmatic page navigation through the [pageSettings.currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#currentpage) property. The default value is "1", indicating the first page. This property can be modified during initial rendering or updated later to navigate to a specific page based on interaction.

The following example demonstrates dynamically changing the current page using a textbox value and an external button click:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs12" %}

### Add current page in URL as query string 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows appending the current page number to the URL by enabling the [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#enablequerystring) property. When set to `true`, the grid includes the current page as a query string, maintaining pagination state and enabling easy sharing of specific views.

The following example demonstrates toggling this behavior using an [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started). The switch's [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event updates the `enableQueryString` property dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs13" %}

## Pager template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports customizing the pager through the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#template) property, allowing replacement of default pager controls with custom elements.

Within the template, context values such as [currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#currentpage), [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesize), [pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagecount),[totalPages](https://ej2.syncfusion.com/angular/documentation/api/grid/pagertemplatecontext#totalpages), [totalRecordsCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pagertemplatecontext#totalrecordscount), `pagerTemplate` are available for building customized pager layouts.

The example below demonstrates using a [NumericTextBox](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) within the pager via the `pagerTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NumericTextBoxModule,ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { data } from './datasource';
import {GridModule, PageService,GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, NumericTextBoxModule],
    providers: [PageService],
    standalone: true,
    selector: 'app-root',
    template:`
        <ejs-grid #grid [dataSource]='data' [allowPaging]='true'
        [pageSettings]='initialPage'>
            <ng-template #pagerTemplate let-data>
            <div class="e-pagertemplate">
                <div class="col-lg-12 control-section">
                    <div class="content-wrapper">
                    <ejs-numerictextbox format='###.##' step='1' min='1' max='3' value={{data.currentPage}} 
                    (change)='change($event)' width="200px"></ejs-numerictextbox>
                    </div>
                </div>
                <div id="totalPages" class="e-pagertemplatemessage" 
                style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                <span class="e-pagenomsg">{{data.currentPage}} of {{data.totalPages}} pages 
                ({{data.totalRecordsCount}} items)</span>
            </div>
            </div>
            </ng-template>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
            </ejs-grid>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('grid')
    public grid?: GridComponent;
    public data: Object[] = [];
    public initialPage?: PageSettingsModel;
    
    ngOnInit(): void {
        this.data = data;
        this.initialPage = { pageSize: 5 };
    }
    change(args: ChangeEventArgs) {
      this.initialPage = { currentPage: args.value };
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/pager-template-cs1" %}

## Pager with page size dropdown

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a built-in page size dropdown that enables adjusting the number of records displayed per page. This can be enabled by setting the [pageSettings.pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesizes) property to `true`.

When enabled, the pager displays a dropdown that allows selecting the preferred page size, and the grid updates immediately based on the selected value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs6" %}

> If the `pageSizes` property is set to a boolean value such as `true` or `false`, the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20']. The `All` option denotes rendering all data in a single page.

### Customize page size dropdown 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows customizing the page size dropdown by setting the [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesizes) property as an array of strings. This defines the selectable page size options and controls the number of records displayed per page.

The following example demonstrates configuring custom values for the pager dropdown using the `pageSizes` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs14" %}

> The `pageSizes` property can be configured with either an array of strings or a boolean value.

## Navigate to specific page

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports programmatic page navigation through the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid#gotopage) method. This method is useful for quickly accessing a particular page, especially when working with large datasets.

The example below demonstrates navigating to a specific page by using `goToPage` method through an external button click based on textbox input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs16" %}

## Get the pager element

The pager element in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid can be obtained using the [getPager](https://ej2.syncfusion.com/angular/documentation/api/grid#getpager) method which returns an HTML element representing the pager. This enables customizing the pager's appearance or behavior to meet application requirements.

```ts
  this.grid.getPager()
```

## Dynamically calculate page size based on element height

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports calculating the pageSize dynamically based on the height of its parent element. This ensures efficient use of available space by adjusting the number of displayed records to prevent unnecessary scrolling or empty areas.

Use the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/angular/documentation/api/grid#calculatepagesizebyparentheight) method to recalculate the page size whenever the parent element's height changes.

The following example demonstrates updating the page size dynamically using the `calculatePageSizeByParentHeight` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs18" %}

## Render pager at the top of the grid 

By default, pager displayed at the bottom of the grid. It is also possible to displaying the pager at the top of the grid. This can be achieved by handling the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event, which triggers after the grid has finished rendering. Within this event, the pager element can be programmatically moved to the top of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs7" %}

> During paging actions, the pager component triggers the following three events:
> * The [created](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel#click) event triggers when the numeric items in the pager are clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides two primary events for handling paging operations:

[actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#actionbegin): Triggered before a paging action occurs, such as changing the page or page size. Use this event to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#actioncomplete): Triggered after a paging action is completed. It provides details such as the current page number, selected page size, and total record count. Use this event to perform actions or update the UI after the operation has been executed.

The following example demonstrates using these events to display notification messages that indicate the current and upcoming page during paging operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule,GridComponent, PageService, PageEventArgs } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';

@Component({
    imports: [ GridModule],
    providers: [PageService],
    standalone: true,
    selector: 'app-root',
    template: `
    <p id="message1">{{ message1 }}</p>
    <p id="message">{{ message }}</p>    
    <ejs-grid #grid [dataSource]="data" allowPaging="true"
            (actionBegin)="onActionBegin($event)" (actionComplete)="onActionComplete($event)"
            [pageSettings]="initialPage">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
                <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
                <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width="120"></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public initialPage?: object;
    @ViewChild('grid') grid?: GridComponent;
    public message?: string;
    public message1?: string;

    ngOnInit(): void {
        this.data = orderDetails;
        this.initialPage = { pageSize: 5 };
    }
    onActionBegin({requestType,currentPage,previousPage}: PageEventArgs) {
        if (requestType === 'paging') {
            this.message = (currentPage as string) > (previousPage as string)
                ? `You are going to switch to page ${parseInt((currentPage as string), 10) + 1}`
                : `You are going to switch to page ${previousPage}`;
        }
    }
    onActionComplete(args: PageEventArgs) {
        if (args.requestType === 'paging') {
            this.message1 = 'Now you are in page ' + args.currentPage;
        }
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs19" %}

## See Also

* [Group with Paging](./grouping/grouping#group-with-paging)
* [How to change loading indicator in Angular Grid](./data-binding/data-binding#loading-animation)