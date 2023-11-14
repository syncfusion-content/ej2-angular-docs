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

Paging provides an option to display grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets. 

To enable paging, you need to set the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the grid. When paging is enabled, a pager component rendered at the bottom of the grid, allowing you to navigate through different pages of data.

To use paging, you need to inject the **PageService** into the provider section of your **AppModule**. This service provides the necessary methods and events to handle paging functionality.

Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/) property. The `pageSettings` object allows you to control various aspects of paging, such as the page size, current page, and total number of records.

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Customize the pager options 

Customizing the pager options in the Syncfusion Grid allows you to tailor the pagination control according to your specific requirements. You can customize the pager to display the number of pages using the `pageCount` property, change the current page using `currentPage` property, display the number of records in the grid using the `pageSize` property, and even adjust the page sizes in a dropdown using the `pageSizes` property. Additionally, you can include the current page as a query string in the URL for convenient navigation. 

### Change the page size 

The Syncfusion Grid allows you to control the number of records displayed per page, providing you with flexibility in managing your data. This feature is particularly useful when you want to adjust the amount of data visible to you at any given time. To achieve this, you can utilize the [pageSettings.pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) property. This property is used to specify the initial number of records to display on each page. The default value of `pageSize` property is **12**.

The following example demonstrates how to change the page size of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs10" %}

### Change the page count 

The Syncfusion Grid allows you to adjust the number of pages displayed in the pager container. This is useful when you want to manage the number of pages you see while navigating through extensive datasets. The default value of `pageCount` property is **8**.

To change the page count in the Syncfusion Grid, you can utilize the [pageSettings.pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount) property, which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs11" %}

### Change the current page

The Syncfusion Grid allows you to change the currently displayed page, which can be particularly useful when you need to navigate through different pages of data either upon the initial rendering of the grid or update the displayed page based on interactions or specific conditions. The default value of `currentPage` property is **1**.

To change the current page in the Syncfusion Grid, you can utilize the [pageSettings.currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage) property, which defines the current page number of the pager.

The following example demonstrates how to dynamically change the current page using an external button click based on **TextBox** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs12" %}

### Add current page in URL as a query string 

The Syncfusion Grid allows you to include the current page information as a query string in the URL. This feature is particularly useful for scenarios where you need to maintain and share the state of the grid's pagination.

To add the current page detail to the URL as a query string in the Syncfusion Grid, you can enable the [enableQueryString](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#enablequerystring) property. When this property is set to **true**, it will automatically pass the current page information as a query string parameter along with the URL when navigating to other pages within the grid. 

> By enabling the `enableQueryString` property, you can easily copy the URL of the current page and share it with others. When the shared URL is opened, it will load the grid with the exact page that was originally shared.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable or disable the addition of the current page to the URL as a query string. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `enableQueryString` property of the grid is updated accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs13" %}

## Pager template

The pager template in Syncfusion Grid allows you to customize the appearance and behavior of the pager element, which is used for navigation through different pages of grid data. This feature is particularly useful when you want to use custom elements inside the pager instead of the default elements.

To use the pager template, you need to specify the [pagerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#template) property in your Syncfusion Grid configuration. The `pagerTemplate` property allows you to define a custom template for the pager. Within the template, you can access the [currentPage](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

The following example demonstrates how to render a **NumericTextBox** component in the pager using the `pagerTemplate` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/pager-template-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/pager-template-cs1" %}

## Pager with page size dropdown

The pager with a page size dropdown in Syncfusion Grid allows you to dynamically change the number of records displayed in the grid. This feature is useful when you want to easily customize the number of records to be shown per page.

To enable the page size Dropdown feature in the Syncfusion Grid, you need to set the [pageSettings.pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesizes) property to **true** in the grid configuration. This property configuration triggers the rendering of a dropdown list within the pager, allowing you to select the desired page size. The selected page size determines the number of records displayed on each page of the grid.

The following example that demonstrates how to integrate the page size Dropdown feature by configuring the `pageSizes` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs6" %}

> If the pageSizes property is set to a boolean value like 'true' or 'false,' the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20'].

### Customize page size dropdown 

The Syncfusion Grid allows you to customize the default values of the page size dropdown in the pager, allowing you to change the number of records displayed per page. To achieve this, you can define the [pageSizes](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesizes) property as an array of string instead of boolean value.

The following example demonstrate how to customize the default values of the pager dropdown using the `pageSizes` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs14" %}

> The pageSizes property can be configured with either an array of strings or a boolean value.

## How to navigate to particular page 

Navigating to a particular page in the Syncfusion Grid is particularly useful when dealing with large datasets. It provides a quick and efficient way to jump to a specific page within the grid.

To achieve page navigation, you can use the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid/#gotopage) method provided by Syncfusion Grid. This method allows you to programmatically navigate to a specific page within the grid.

The following example demonstrates how to dynamically navigate to a particular page using the `goToPage` method triggered by an external button click based on **TextBox** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs16" %}

## How to get the pager element

You can get pager element in the Syncfusion Grid. This allows you to customize the pager's appearance or behavior to meet the requirements of your application.

[getPager](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpager)- This method allows you to obtain a reference to the pager element within the Syncfusion Grid. It returns an HTML element representing the pager.

```ts
  this.grid.getPager()
```

## Dynamically calculate page size based on element height

You have an option to dynamically calculate the page size of a grid by considering the height of its parent element. This functionality proves invaluable in ensuring that the grid's content remains within the available space, preventing the need for excessive scrolling. It primarily serves the purpose of automatically adjusting the `pageSize` when the height of the grid's parent element changes dynamically. Upon each alteration in the parent element's height, invoking this method will compute the grid's `pageSize` and present the current page records accordingly. This feature effectively addresses situations where a static `pageSize` value does not cater to the varying heights of different parent elements, preventing any unwanted empty spaces within the grid.

To achieve page size calculation based on an element's height in the Grid, you can utilize the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#calculatepagesizebyparentheight) method. This method calculates the page size based on the height of the parent element.

The following example demonstrates how to calculate the page size based on element height using the `calculatePageSizeByParentHeight` method triggered by a change event based on the **NumericTextBox** input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs18" %}

## Render pager at the top of the grid 

The Grid component provides built-in support for rendering a pager at the bottom of the grid by default. However, in certain scenarios, you might want to display the pager at the top of the grid. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. This event is triggered when the Grid completes rendering its data. By handling this event, you can customize the rendering of the pager and move it to the top of the Grid.

Here's an example that demonstrates how to render the pager at the top of the grid using the `dataBound` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs7" %}

> During the paging action, the pager component triggers the below three events.
> * The [created](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The Syncfusion Grid component triggers two pager events during paging actions:

[actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin)-  This event triggered before any paging action (such as changing the page, changing the page size and etc) is initiated. You can use this event to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete)- This event triggered after a pager action is completed. It provides information about the action, such as the new page number, page size, and the total number of records. You can use this event to perform actions or update the UI after the operation has been executed.

The following example that example demonstrates how to use these events to display notification messages to indicate the current and next page during paging actions in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs19" %}

## See Also

* [Group with Paging](./grouping/grouping#group-with-paging)
