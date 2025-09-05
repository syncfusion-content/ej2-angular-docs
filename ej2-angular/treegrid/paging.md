---
layout: post
title: Paging in Angular TreeGrid component | Syncfusion
description: Learn how to use paging in the Syncfusion Angular TreeGrid component, including configuration, customization, and advanced pagination features for handling large datasets.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular TreeGrid component

Paging allows data in the TreeGrid to be displayed in segmented pages, simplifying navigation through large datasets. This feature is especially useful for efficiently working with extensive records.

Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpaging) property to **true**. When paging is enabled, a pager is rendered at the bottom of the TreeGrid, providing navigation controls for moving between pages.

To use paging, inject the **PageService** into your AppModule providers. The PageService supplies functionality and events necessary for handling pagination.

Configure paging options with the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings) property. The `pageSettings` object allows control over the page size, current page, page count, query string enablement, and other paging behaviors.

> For improved performance, paging can be used to load only a set number of records from the data source at a time.

## Customize pager options

The TreeGrid pager can be tailored to specific requirements. Use properties within [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings) to:

- Set visible page numbers with [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount).
- Define the starting page using [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage).
- Display a set number of records per page with [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize).
- Enable a page size dropdown with [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes).
- Persist the current page in the URL with [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#enablequerystring).

## Change the page size

Control the number of records displayed per page by setting the [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize) property. The default value is **12**.

The following example demonstrates how to change the page size using an external button and a **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs1" %}

## Change the page count

Adjust the number of page links shown in the pager using the [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount) property. The default value is **8**.

The following example shows how to change page count using an external button and a **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs2" %}

## Change the current page

Set or update the currently displayed page with the [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage) property. The default is **1**.

This example demonstrates dynamic current page control using an external button and **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs3" %}

## Add current page in URL as a query string

Enable the [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#enablequerystring) property to **true** within the `pageSettings` to include the current page in the URL as a query string. This enables sharing of the TreeGrid's paging state through direct links.

For example, toggling the [EJ2 Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) triggers an update to the `enableQueryString` property via its [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs4" %}

> With `enableQueryString` enabled, sharing the TreeGrid's URL loads the previously used page when reopened.

## Page size mode

The [pageSizeMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizemode) property in `pageSettings` defines how records are counted for paging:

- **All** (default): The page size applies to all visible rows, including parent and child records.
- **Root**: Only root-level nodes are counted for page size. Child records are displayed with their parent and do not affect paging count.

The following example demonstrates the use of the `pageSizeMode` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs11/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs11" %}

## Pager template

Customize the appearance and behavior of the pager using the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#template) property. Templates may access properties such as currentPage, pageSize, pageCount, totalPages, and totalRecordsCount for custom layout or logic.

To use the pager template, you need to specify the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#template) property in your Tree Grid configuration. The `pagerTemplate` property allows you to define a custom template for the pager. Within the template, you can access the [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

The following example demonstrates the use of **NumericTextBox** component in the pager using the `pagerTemplate` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {PageSettingsModel, TreeGridComponent, PageService} from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule, NumericTextBoxModule
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=250 [treeColumnIndex]='1' [allowPaging]='true'  [pageSettings]='PageSettings' childMapping='subtasks' >
                    <ng-template #pagerTemplate let-data>
                        <div class="e-pagertemplate">
                            <div class="col-lg-12 control-section">
                                <div class="content-wrapper"  style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                                    <ejs-numerictextbox  step='1' width='75' min='1' max='3' value={{data.currentPage}} (change)='change($event)'></ejs-numerictextbox>
                                </div>
                            </div>
                            <div id="totalPages" class="e-pagertemplatemessage"
                                style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                                    <span class="e-pagenomsg"> {{data.currentPage}} of {{data.totalPages}} pages ({{data.totalRecordsCount}} items)</span>
                            </div>
                        </div>
                    </ng-template>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    public PageSettings?: PageSettingsModel;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
        change(args:ChangeEventArgs){
            this.PageSettings = { currentPage: args.value };
        }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/pager-template-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pager-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/pager-template-cs1" %}

## Pager with page size dropdown

Enable a page size dropdown in the pager by setting [pageSettings.pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes) to **true**. This renders a dropdown allowing the user to change page size at runtime. If set to `true`, the dropdown will offer ['All', '5', '10', '15', '20'] as default options.

To customize the dropdown options, provide an array of strings via the `pageSizes` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs5" %}

### Customize page size dropdown

Use an array of string values with [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes) to set custom page size options. Both boolean and array values are accepted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs6" %}

## Navigate to a particular page

Navigate to any page programmatically by using the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid#gotopage) method, which is triggered by an external button click based on **TexBox** input. This is useful when interacting with external UI elements to control the current page of the TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs7/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs7" %}

## Get the pager element

You can get pager element in the Tree Grid. This allows you to customize the pager's appearance or behavior to meet the requirements of your application.

[getPager](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getpager)- This method allows you to obtain a reference to the pager element within the tree grid. It returns an HTML element representing the pager.

```ts
  this.treegrid.getPager();
```

## Dynamically calculate page size based on element height

You have an option to dynamically calculate the page size of a tree grid by considering the height of its parent element. This functionality proves invaluable in ensuring that the tree grid's content remains within the available space, preventing the need for excessive scrolling. It primarily serves the purpose of automatically adjusting the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize) when the height of the tree grid's parent element changes dynamically. Upon each alteration in the parent element's height, invoking this method will compute the tree grid's `pageSize` and present the current page records accordingly. This feature effectively addresses situations where a static `pageSize` value does not cater to the varying heights of different parent elements, preventing any unwanted empty spaces within the tree grid.

To achieve page size calculation based on an element's height in the tree grid, you can utilize the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#calculatepagesizebyparentheight) method of the grid object through the tree grid instance. This method calculates the page size based on the height of the parent element.

The following example demonstrates how to calculate the page size based on element height using the `calculatePageSizeByParentHeight` method triggered by a change event based on the **NumericTextBox** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs8/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs8" %}

## Render pager at the top

The TreeGrid renders its pager at the bottom by default. To render it at the top, handle the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event to reposition the pager programmatically as shown in the following example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs9/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs9" %}

> Paging actions raise these [Pager](https://ej2.syncfusion.com/angular/documentation/api/pager/) events:
> * [created](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#created): When the Pager is initialized.
> * [click](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#click): When a numeric pager item is clicked.
> * [dropDownChanged](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#dropdownchanged): When a page size dropdown value is selected.

## Pager events

TreeGrid paging triggers the following events:

- [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin): Fired before any paging action begins. Allows customization or control over paging workflows.
- [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete): Fired after a paging action is complete, with details such as current/next page and page size.

See the following example for using these events to display notification messages during paging:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent,ToolbarItems, PageSettingsModel, PageService } from '@syncfusion/ej2-angular-treegrid';
import { PageEventArgs } from '@syncfusion/ej2-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <p id="message" style="color:red;align:center">{{actioncomplete_message}}</p>
                <p id="message1" style="color:red;align:center">{{actionbegin_message}}</p>   
                <ejs-treegrid  #treegrid [dataSource]='data' height=230 [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings'  (actionBegin)="onActionBegin($event)" (actionComplete)="onActionComplete($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object ;
    public actioncomplete_message?: string;
    public actionbegin_message?: string;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
   
    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings = {  pageSize: 8 };
    }
    onActionBegin({requestType,currentPage,previousPage}: PageEventArgs) {
        if (requestType === 'paging') {
            this.actionbegin_message = (currentPage as string) > (previousPage as string)
                ? `You are going to switch to page ${parseInt((currentPage as string), 10) + 1}`
                : `You are going to switch to page ${previousPage}`;
        }
    }
    onActionComplete(args: PageEventArgs) {
        if (args.requestType === 'paging') {
            this.actioncomplete_message= 'Now you are in page ' + args.currentPage;
        }
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/page-cs10/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/page-cs10" %}

## See Also

* [How to change loading indicator in Angular TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/loading-animation)
