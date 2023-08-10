---
layout: post
title: Hierarchy grid in Angular Grid component | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hierarchy grid 
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in Angular Grid component

The Hierarchy Grid in an Angular Grid component is typically used when you need to display hierarchical data in a tabular format with expandable and collapsible rows. It allows you to represent parent and child relationships within the grid, making it easier for you to navigate and understand the data.

This feature can be enabled by utilizing the [childGrid](https://ej2.syncfusion.com/angular/documentation/api/grid/#childgrid) and [childGrid.queryString](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) properties of the grid component.

To enable the Hierarchy Grid feature:

1. Inject the **DetailRowService** in the provider section of your **AppModule**. This service is essential for handling the hierarchy grid functionality.

2. Define the `childGrid` property within the Grid component configuration. This property describes the options of the child grid.

3. Specify the `childGrid.queryString` property to establish the relation between the parent and child grids and visualizes the data in a hierarchical structure. This property determines how the child records are fetched based on the parent record.

The following example demonstrates how to enable the hierarchy feature in the grid

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs5" %}

> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [DetailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) is enabled.

## Bind hierarchy grid with different field

By default, the parent and child grids have the same field name to map and render a hierarchical grid. However, the component supports establishing a parent-child relationship between grids with different field names. This feature is beneficial when you want to create a parent-child relationship between grids but need to use distinct field names for mapping the data. As a result, you can easily establish the desired relationship between the parent and child grids, even with different field names for data mapping.

By default, the parent and child grid relation is maintained using the [queryString](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) property, which requires the same field name for both grids. However, to achieve the parent and child relation with different fields, you need to modify the mapping value in the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event of child grid. 

In the following example, the `load` event is utilized to customize the mapping value for the child grid. By accessing the `parentDetails` property and its **parentKeyFieldValue**, you can set the desired mapping value. The `parentRowData` property contains the data of the parent row, and by using the **EmployeeID** field name, you can extract the corresponding value from the parent row data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs9" %}

> Make sure to adjust the field name according to your specific scenario.

## Expand child grid initially

Expanding the child grid initially in the Syncfusion Angular Grid component is helpful when you want to display the child rows of the hierarchical grid expanded by default upon grid load. This can be beneficial in scenarios where you want to provide immediate visibility into the hierarchical data without requiring you to manually expand each child row.

To achieve this, you can use the [expand](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expand) method with the desired target index (number) in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the grid. 

In the provided example, expand the third record of the grid by utilizing the `expand` method within the `dataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs7" %}

> Index values begin with **"0"**, allowing you to provide the desired target index to expand a specific child grid initially.

## Dynamically load child grid data

Dynamically load child grid data in Syncfusion Angular Grid helps improve performance, optimize data transmission, and enhance the your experience by providing on-demand access to relevant information. Additionally, it offers flexibility in data presentation, which helps improve the overall efficiency of your application.

To dynamically load the `dataSource` of a child grid in the Grid, you can utilize the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event of parent grid. This event allows you to customize the loading behavior of the child grid based on the data of parent grid.

The following example demonstrates how to dynamically load child grid data using the `load` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs8" %}

## Dynamically bind data to child grid based on parent row data

Dynamically binding data to a child grid based on the parent row data in the Syncfusion Angular Grid component is useful when you want to display child grid data that is specific to each parent row. This feature allows for a dynamic and contextual representation of data within the child grid.

To dynamically bind data to the child grid based on the parent row data instead of using the [queryString](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) property, you can utilize the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound) event of the grid. This event is triggered when expanding the child grid.

In the `detailDataBound` event handler, you can filter the child grid's dataSource based on the **EmployeeID** column value of the parent row data. This can be achieved by using the `DataManager` plugin and applying a filter to the child grid's dataSource. The filtered data can be assigned as the new dataSource for the child grid. This can be demonstrated by the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs12" %}

## Adding record in child grid

Adding a record in a child grid within the Syncfusion Angular Grid component is useful when you want to provide the ability to add new records to the child grid. This feature allows you to input and save additional data specific to each parent row.

To maintain the parent-child relationship in the Grid when adding a record to the child grid, you need to set the value for the `queryString` in the added data. This can be done using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

In the following example, the parent and child grids are related by the **EmployeeID** field. To add a new record in the child grid, the **EmployeeID** field needs to be set with the value of the parent record's `queryString` in the `actionBegin` event. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs10" %}

## Template column in child grid

A template column in a child grid within the Syncfusion Angular Grid component is valuable when you want to customize the appearance and functionality of specific columns in the child grid. It is useful for incorporating interactive elements, custom formatting, or complex data representation within specific columns of the child grid.

To achieve this, you can utilize the [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property of a column to display a custom element instead of a field value in the Grid. Template columns defined in the child grid will be null in the **ngOnInit** method, which means they will not be shown in the UI. They will be rendered after the entire HTML view rendering process, and you can access and utilize them in the **ngAfterViewInit** method to display the template columns in the child grid.

During the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event of the child grid, it is necessary to set the 'registeredTemplate' to empty. This action will remove any previously existing templates. By doing so, you gain the flexibility to dynamically apply templates to the grid's cells based on different conditions or requirements.

The following example demonstrates, how to show a custom image in the **Employee Image** column of the child grid by utilizing the `template` property of the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs11" %}

## How to get parent detail in child grid

Getting parent details in a child grid in an Angular Grid component is useful when you want to display and utilize information from the parent row within the child grid. This can be beneficial in scenarios where you need to provide additional context or perform calculations based on the parent row's data

To achieve this, you can utilize the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event. This event is triggered when the child grid is created and can be used to handle the child grid.

The following example demonstrates how to obtain parent details in a child grid using the `created` event. Within the `created` event, you can access the parent row data using `this.parentDetails.parentRowData` and display the desired details in the message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs16" %}

## Expand all by external button

The Hierarchy Grid in the Syncfusion Angular Grid component allows you to expand all child grid rows using an external button. This feature provides you with a convenient overview of all the hierarchical data within the grid, eliminating the need to manually expand each row individually.

By default, Grid renders all child grid rows in collapsed state. To expand all child grid rows in the Grid using an external button, you can utilize the [expandAll](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expandall) method provided by the DetailRow module. Similarly, to collapse all grid rows, you can use the [collapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#collapseall) method. 

The following example demonstrates how to expand and collapse the hierarchy grid using an external button click function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs6" %}

> The `expandAll` and `collapseAll` methods are not recommended for large datasets due to the considerable time it takes to update the changes in the UI.

## See Also

* [Multiple querystring in hierarchy child grid in Angular Grid](https://www.syncfusion.com/forums/165124/multiple-querystring-in-hierarchy-child-grid-in-angular-grid)
