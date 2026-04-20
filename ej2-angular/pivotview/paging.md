---
layout: post
title: Paging in Angular Pivotview component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Pivotview component

The paging feature in the Pivot Table component is designed to handle large datasets efficiently by dividing the data into manageable pages. This prevents performance issues associated with rendering large amounts of data at once, allowing users to navigate through rows and columns page by page.

To enable paging, set the [`enablePaging`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablepaging) property to **true**. Paging can be configured in the code-behind during the initial rendering of the component using the [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagesettings) property. This allows you to define the initial page setup for rows and columns. The key properties within [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagesettings) include:

* [`currentRowPage`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#currentrowpage): Allows user to set the current row page number to be displayed in the pivot table.
* [`currentColumnPage`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#currentcolumnpage): Allows user to set the current column page number to be displayed in the pivot table.
* [`rowPageSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#rowpagesize): Allows user to set the total number of records to be displayed on each page of the pivot table's row axis.
* [`columnPageSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#columnpagesize): Allows user to set the total number of records to be displayed on each page of the pivot table's column axis.

## Pager UI

When paging is enabled, a built-in pager UI appears at the bottom of the Pivot Table by default. This user-friendly interface enables seamless navigation across row and column axis pages using navigation buttons or an input box, and allows dynamic page size adjustments via dropdown menus.

You can also change the position, visibility, compact view, and template of the row and column pagers by using the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings).

> In order to see and use the pager UI, insert the `PagerService` module into the pivot table using the `@NgModule.providers` section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs201/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs201/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs201" %}

### Show pager UI at top or bottom

The Pivot Table component allows you to configure the placement of the pager UI to match your layout preferences. You can display the pager UI either at the top or bottom of the pivot table by setting the [`position`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#position) property within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. By default, the pager UI appears at the bottom, but setting the position property to **Top** places it above the pivot table. This can be ideal for layouts where navigation controls are preferred at the top for better visibility or alignment with other UI elements.

The following code demonstrates how to configure the pager UI to appear at the top of the pivot table:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs202/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs202/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs202" %}

### Inverse pager

The Pivot Table allows you to toggle the positions of the row and column pagers in the pager UI. By default, the row pager appears on the left side of the pager UI, and the column pager appears on the right. To swap these positions—displaying the column pager on the left and the row pager on the right—set the [`isInversed`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#isinversed) property to **true** within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs203/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs203/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs203" %}

### Compact view

The Pivot Table provides a compact view for the pager UI, displaying only the previous and next navigation buttons to minimize the interface. To enable the compact view, set the [`enableCompactView`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#enablecompactview) property to **true** within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. This streamlined layout focuses on essential navigation controls, ideal for layouts requiring a simplified paging experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs204/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs204/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs204" %}

### Show or hide paging option

The Pivot Table allows you to control the visibility of the row and column pagers in the pager UI using the [`showRowPager`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#showrowpager) and [`showColumnPager`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#showcolumnpager) properties within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. By default, both row and column pagers are visible in the pager UI. To hide either the row pager or the column pager, set the corresponding property to **false**. This allows you to display only the necessary navigation controls based on your layout requirements.

The following code demonstrates how to hide the row pager by setting the [`showRowPager`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#showrowpager) property to **false**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs205/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs205/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs205" %}

### Show or hide page size

The Pivot Table allows you to control the visibility of the "Rows per page" and "Columns per page" dropdowns in the pager UI using the [`showRowPageSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#showrowpagesize) and [`showColumnPageSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#showcolumnpagesize) properties within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. These dropdowns display a list of predefined or user-defined page sizes, enabling you to adjust the number of rows or columns displayed per page at runtime. By default, both dropdowns are visible in the pager UI. To hide either the "Rows per page" or "Columns per page" dropdown, set the corresponding property to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs206/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs206/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs206" %}

### Customize page size

The Pivot Table allows you to specify a list of page sizes for the "Rows per page" and "Columns per page" dropdowns in the pager UI using the [`rowPageSizes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#rowpagesizes) and [`columnPageSizes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#columnpagesizes) properties within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. By default, the "Rows per page" dropdown includes page sizes of 10, 50, 100, and 200, while the "Columns per page" dropdown includes page sizes of 5, 10, 20, 50, and 100. To define a different set of page sizes, assign an array of numbers to the [`rowPageSizes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#rowpagesizes) or [`columnPageSizes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#columnpagesizes) properties.

The following example sets the "Rows per page" dropdown with page sizes of 10, 20, 30, 40, and 50, and the "Columns per page" dropdown with page sizes of 5, 10, 15, 20, and 30:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs207/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs207/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs207" %}

### Template

The Pivot Table allows you to define a custom layout for the pager UI using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#template) property within the [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagersettings) configuration. By default, the pager UI displays built-in navigation controls. To replace these with custom HTML elements, assign the ID of the custom elements to the [`template`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#template) property. This enables you to create a unique pager interface that aligns with your application’s design requirements.

This following example shows how to create a custom template for both row and column pagers. First, include the necessary HTML code in your `index.html` file and assign its ID to the [`template`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pagerSettings/#template) property. Then, during the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event, the Syncfusion [`Pager`](https://ej2.syncfusion.com/angular/documentation/pager/getting-started) control is appended to the designated HTML elements. You can configure the pager by setting properties like [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagesize), [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/#totalrecordscount), and [`currentPage`](https://ej2.syncfusion.com/angular/documentation/api/pager/#currentpage). When you click on a custom row or column pager, the [`currentRowPage`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#currentrowpage) and [`currentColumnPage`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pageSettings/#currentcolumnpage) properties in [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#pagesettings) are updated, enabling navigation with the custom pager.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/pagingTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/pagingTemplate-cs1/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/pagingTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/pagingTemplate-cs1" %}