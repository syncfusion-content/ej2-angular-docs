---
layout: post
title: Paging in Angular Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Grid component

Paging provides an option to display grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets that would otherwise overwhelm the user interface and degrade performance.

To enable paging, set the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the grid. When paging is enabled, a pager component is rendered at the bottom of the grid, allowing navigation through different pages of data.

To use paging functionality, inject the **PageService** into the providers section of your **AppModule** or component. This service provides the necessary methods and events to handle paging operations.

Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/) property. The `pageSettings` object allows control of various paging aspects, including page size, current page, total number of records, and advanced options like query string integration.

> Grid paging significantly improves performance by fetching only a pre-defined number of records from the data source, reducing initial load time and memory consumption.

## Customize the pager options 

Customizing pager options in the Syncfusion Grid allows tailoring the pagination control to specific requirements. The pager can be customized to display the number of pages using the `pageCount` property, change the current page using the `currentPage` property, control the number of records per page using the `pageSize` property, and adjust available page sizes through a dropdown using the `pageSizes` property. Additionally, the current page can be included as a query string in the URL for convenient navigation and bookmarking.

### Change the page size 

The Syncfusion Grid allows control over the number of records displayed per page, providing flexibility in data management. This feature is particularly useful when adjusting the amount of data visible at any given time. Use the [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) property to specify the initial number of records displayed on each page. The default value of the `pageSize` property is **12**.

The following example demonstrates how to change the page size of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs10" %}

### Change the page count 

The Syncfusion Grid allows adjustment of the number of pages displayed in the pager container. This is useful when managing the number of pages visible while navigating through extensive datasets. The default value of the `pageCount` property is **8**.

To change the page count in the Syncfusion Grid, utilize the [pageSettings.pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount) property, which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs11" %}

### Change the current page

The Syncfusion Grid allows changing the currently displayed page, which can be particularly useful when navigating to different pages of data during initial rendering or updating the displayed page based on user interactions or specific conditions. The default value of the `currentPage` property is **1**.

To change the current page in the Syncfusion Grid, utilize the [pageSettings.currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage) property, which defines the current page number of the pager.

The following example demonstrates how to dynamically change the current page using an external button click based on **TextBox** input:

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

The Syncfusion Grid allows including current page information as a query string in the URL. This feature is particularly useful for scenarios requiring maintenance and sharing of the grid's pagination state.

To add current page details to the URL as a query string in the Syncfusion Grid, enable the [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#enablequerystring) property. When this property is set to **true**, it automatically passes the current page information as a query string parameter with the URL when navigating to other pages within the grid.

> Enabling the `enableQueryString` property allows easy copying and sharing of the URL for the current page. When the shared URL is opened, it loads the grid with the exact page that was originally shared.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable or disable adding the current page to the URL as a query string. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `enableQueryString` property of the grid is updated accordingly.

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

The pager template in Syncfusion Grid allows customization of the appearance and behavior of the pager element used for navigation through different pages of grid data. This feature is particularly useful when custom elements are needed inside the pager instead of the default elements.

To use the pager template, specify the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#template) property in the Syncfusion Grid configuration. The `pagerTemplate` property allows definition of a custom template for the pager. Within the template, access the [currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount), **totalPages**, and **totalRecordsCount** values through the template context.

The following example demonstrates how to render a **NumericTextBox** component in the pager using the `pagerTemplate` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule,ChangeEventArgs } from '@syncfusion/ej2-angular-inputs'
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

The pager with a page size dropdown in Syncfusion Grid allows dynamic modification of the number of records displayed in the grid. This feature is useful when easy customization of records shown per page is needed.

To enable the page size dropdown feature in the Syncfusion Grid, set the [pageSettings.pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesizes) property to **true** in the grid configuration. This property configuration triggers rendering of a dropdown list within the pager, allowing selection of the desired page size. The selected page size determines the number of records displayed on each page of the grid.

The following example demonstrates how to integrate the page size dropdown feature by configuring the `pageSizes` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs6" %}

> If the pageSizes property is set to a boolean value such as 'true' or 'false,' the page size dropdown defaults to an array of strings containing options like ['All', '5', '10', '15', '20'].

### Customize page size dropdown 

The Syncfusion Grid allows customization of the default values in the page size dropdown of the pager, enabling modification of the number of records displayed per page. To achieve this, define the [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesizes) property as an array of strings instead of a boolean value.

The following example demonstrates how to customize the default values of the pager dropdown using the `pageSizes` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs14" %}

> The pageSizes property can be configured with either an array of strings or a boolean value.

## Navigate to specific page

Navigating to a specific page in the Syncfusion Grid is particularly useful when dealing with large datasets. It provides a quick and efficient way to jump to a specific page within the grid programmatically.

To achieve page navigation, use the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid/#gotopage) method provided by Syncfusion Grid. This method allows programmatic navigation to a specific page within the grid.

The following example demonstrates how to dynamically navigate to a particular page using the `goToPage` method triggered by an external button click based on **TextBox** input:

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

The pager element can be obtained in the Syncfusion Grid. This allows customization of the pager's appearance or behavior to meet application requirements.

[getPager](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpager) - This method allows obtaining a reference to the pager element within the Syncfusion Grid. It returns an HTML element representing the pager.

```ts
  this.grid.getPager()
```

## Dynamically calculate page size based on element height

There is an option to dynamically calculate the page size of a grid by considering the height of its parent element. This functionality proves invaluable in ensuring that the grid's content remains within the available space, preventing the need for excessive scrolling. It primarily serves the purpose of automatically adjusting the `pageSize` when the height of the grid's parent element changes dynamically. Upon each alteration in the parent element's height, invoking this method will compute the grid's `pageSize` and present the current page records accordingly. This feature effectively addresses situations where a static `pageSize` value does not cater to the varying heights of different parent elements, preventing unwanted empty spaces within the grid.

To achieve page size calculation based on an element's height in the Grid, utilize the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#calculatepagesizebyparentheight) method. This method calculates the page size based on the height of the parent element.

The following example demonstrates how to calculate the page size based on element height using the `calculatePageSizeByParentHeight` method triggered by a change event based on **NumericTextBox** input:

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

The Grid component provides built-in support for rendering a pager at the bottom of the grid by default. However, in certain scenarios, displaying the pager at the top of the grid may be desired. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. This event is triggered when the Grid completes rendering its data. By handling this event, the rendering of the pager can be customized and moved to the top of the Grid.

Here's an example that demonstrates how to render the pager at the top of the grid using the `dataBound` event:

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
> * The [created](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager are clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The Syncfusion Grid component triggers two primary pager events during paging actions:

[actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) - This event is triggered before any paging action (such as changing the page or page size) is initiated. This event can be used to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) - This event is triggered after a pager action is completed. It provides information about the action, such as the new page number, page size, and total number of records. This event can be used to perform actions or update the UI after the operation has been executed.

The following example demonstrates how to use these events to display notification messages indicating the current and next page during paging actions in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule,GridComponent, PageService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEventArgs } from '@syncfusion/ej2-grids';
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