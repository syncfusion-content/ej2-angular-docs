---
layout: post
title: Paging in Angular TreeGrid component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular TreeGrid component

Paging provides an option to display tree grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets. 

To enable paging, you need to set the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the tree grid. When paging is enabled, a pager component rendered at the bottom of the tree grid, allowing you to navigate through different pages of data.

To use paging, you need to inject the **PageService** into the provider section of your **AppModule**. This service provides the necessary methods and events to handle paging functionality.

Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings) property. The `pageSettings` object allows you to control various aspects of paging, such as the page size, current page, and total number of records.

> You can achieve better performance by using tree grid paging to fetch only a pre-defined number of records from the data source.

## Customize the pager options 

Customizing the pager options in the Tree Grid allows you to tailor the pagination control according to your specific requirements. You can customize the pager to display the number of pages using the [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount) property, change the current page using [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage) property, display the number of records in the tree grid using the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize) property, and even adjust the page sizes in a dropdown using the [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes) property. Additionally, you can include the current page as a query string in the URL for convenient navigation. 

### Change the page size 

The Tree Grid allows you to control the number of records displayed per page, providing you with flexibility in managing your data. This feature is particularly useful when you want to adjust the amount of data visible to you at any given time. To achieve this, you can utilize the [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize) property. This property is used to specify the initial number of records to display on each page. The default value of `pageSize` property is **12**.

The following example demonstrates how to change the page size of a tree grid using an external button click based on **TextBox** input.

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

### Change the page count 

The Tree Grid allows you to adjust the number of pages displayed in the pager container. This is useful when you want to manage the number of pages you see while navigating through extensive datasets. The default value of [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount) property is **8**.

To change the page count in the Tree Grid, you can utilize the `pageCount` property of [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings), which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a tree grid using an external button click based on **TextBox** input.

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

### Change the current page

The Tree Grid allows you to change the currently displayed page, which can be particularly useful when you need to navigate through different pages of data either upon the initial rendering of the tree grid or update the displayed page based on interactions or specific conditions. The default value of [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage) property is **1**.

To change the current page in the Tree Grid, you can utilize the `currentPage` property of [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings), which defines the current page number of the pager.

The following example demonstrates how to dynamically change the current page using an external button click based on **TextBox** input:

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

### Add current page in URL as a query string 

The Tree Grid allows you to include the current page information as a query string in the URL. This feature is particularly useful for scenarios where you need to maintain and share the state of the tree grid's pagination.

To add the current page detail to the URL as a query string in the tree grid, you can enable the [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#enablequerystring) property. When this property is set to **true**, it will automatically pass the current page information as a query string parameter along with the URL when navigating to other pages within the tree grid. 

> By enabling the `enableQueryString` property, you can easily copy the URL of the current page and share it with others. When the shared URL is opened, it will load the tree grid with the exact page that was originally shared.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable or disable the addition of the current page to the URL as a query string. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `enableQueryString` property of the tree grid is updated accordingly.

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

## Page size Mode

In the TreeGrid component, the page size mode feature allows you to specify the number of records displayed on each page using the [pageSizeMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizemode) property of the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings).

Two page size modes are available in the Tree Grid paging, each providing a different way to determine the number of records displayed on a page. Following are the two types of `pageSizeMode`:

* **All** : This is the default mode. In this mode, the number of records displayed on each page is based on the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize) property. All records, including both parent and child records, are considered when determining the number of records per page.
* **Root** : In this mode, the number of root nodes or the 0th level records displayed per page is based on the `pageSize` property. Only the root-level records are counted irrespective of the child records count, when determining the number of records per page.

By configuring the pageSizeMode property, you can control how records are paginated in the Tree Grid, providing flexibility in displaying data according to your requirements.

The following example demonstrates how to use the `pageSizeMode` property in the tree grid:

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

The pager template in the TreeGrid component allows you to customize the appearance and behavior of the pager element, which is used for navigation through different pages of tree grid data. This feature is particularly useful when you want to use custom elements inside the pager instead of the default elements.

To use the pager template, you need to specify the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#template) property in your Tree Grid configuration. The `pagerTemplate` property allows you to define a custom template for the pager. Within the template, you can access the [currentPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

The following example demonstrates how to render a **NumericTextBox** component in the pager using the `pagerTemplate` property:

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

The pager with a page size dropdown in the Tree Grid allows you to dynamically change the number of records displayed in the tree grid. This feature is useful when you want to easily customize the number of records to be shown per page.

To enable the page size Dropdown feature in the tree grid, you need to set the [pageSettings.pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes) property to **true** in the tree grid configuration. This property configuration triggers the rendering of a dropdown list within the pager, allowing you to select the desired page size. The selected page size determines the number of records displayed on each page of the tree grid.

The following example that demonstrates how to integrate the page size Dropdown feature by configuring the `pageSizes` property:

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

> If the pageSizes property is set to a boolean value like 'true' the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20'].

### Customize page size dropdown 

The Tree Grid allows you to customize the default values of the page size dropdown in the pager, allowing you to change the number of records displayed per page. To achieve this, you can define the [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettings/#pagesizes) property as an array of string instead of boolean value.

The following example demonstrate how to customize the default values of the pager dropdown using the `pageSizes` property:

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

> The pageSizes property can be configured with either an array of strings or a boolean value.

## How to navigate to particular page 

Navigating to a particular page in the Tree Grid is particularly useful when dealing with large datasets. It provides a quick and efficient way to jump to a specific page within the tree grid.

To achieve page navigation, you can use the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/treegrid#gotopage) method provided by the tree grid. This method allows you to programmatically navigate to a specific page within the tree grid.

The following example demonstrates how to dynamically navigate to a particular page using the `goToPage` method triggered by an external button click based on **TextBox** input:

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

## How to get the pager element

You can get pager element in the Tree Grid. This allows you to customize the pager's appearance or behavior to meet the requirements of your application.

[getPager](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getpager)- This method allows you to obtain a reference to the pager element within the tree grid. It returns an HTML element representing the pager.

```ts
  this.treegrid.getPager()
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

## Render pager at the top of the tree grid 

The TreeGrid component provides built-in support for rendering a pager at the bottom of the tree grid by default. However, in certain scenarios, you might want to display the pager at the top of the tree grid. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event. This event is triggered when the tree grid completes rendering its data. By handling this event, you can customize the rendering of the pager and move it to the top of the tree grid.

Here's an example that demonstrates how to render the pager at the top of the tree grid using the `dataBound` event:

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

> During the paging action, the pager component triggers the below three events.
> * The [created](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The TreeGrid component triggers two pager events during paging actions:

[actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin)-  This event triggered before any paging action (such as changing the page, changing the page size and etc) is initiated. You can use this event to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete)- This event triggered after a pager action is completed. It provides information about the action, such as the new page number, page size, and the total number of records. You can use this event to perform actions or update the UI after the operation has been executed.

The following example demonstrates how to use these events to display notification messages to indicate the current and next page during paging actions in the tree grid:

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
