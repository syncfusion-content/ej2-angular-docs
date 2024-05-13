---
layout: post
title: Column rendering in Angular Gantt component | Syncfusion
description: Learn here all about Column rendering in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column rendering
documentation: ug
domainurl: ##DomainURL##
---

# Column rendering in Angular Gantt component

In Syncfusion Angular Gantt chart, column rendering provides you with the ability to finely control how data is presented. This allows you to manually define columns, automatically generate them, and dynamically customize data presentation. With column rendering, you can ensure that your data is displayed exactly as needed, offering a wide range of possibilities for organizing and showcasing information within the gantt chart.

The column definitions are used as the data source schema in the gantt chart. The gantt operations such as sorting, filtering are performed based on column definitions. The [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property of gantt chart column is necessary to map the datasource values in the gantt chart columns.

> 1. If the column `field` is not specified in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource), the column values will be empty.
> 2. If the `field` name contains **dot** operator, it is considered as [complex binding](../column/column-rendering/#complex-data-binding).
> 3. It is must to define the `field` property for a template column, to perform CRUD or data operations such as filtering, searching etc.

## Define columns manually 

To define columns manually in gantt chart, you can use the `e-columns` to define the columns and represent each column with its respective properties such as [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field), [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) and [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#width) set accordingly. This allows you to customize the column's behavior and appearance based on the requirements.

Here's an example code snippet that demonstrates how to define columns manually in the Syncfusion Angular Gantt chart:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs1" %}

## Dynamic column generation 

The Syncfusion Gantt chart component allows you to dynamically generate columns at runtime, based on the data provided. This feature is useful when you need to display data with varying columns based on user requirements or dynamic data sources.

### Using ngFor directive

To create dynamically generated columns in the Syncfusion Gantt chart component using the ngFor directive, you will first need to define an array of column objects in your component.ts file. Each column object should include a [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) and [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) property, which will be used to bind the corresponding properties of the **e-column** component.

Here is an example for dynamically generate columns in the gantt chart using ngFor directive:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs2" %}

### Using valueAccessor property

Dynamic column generation using value accessor allows you to access and manipulate the display data values in a gantt chart column. By using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property of a gantt chart column, you can customize the display value of the column based on the data.

To use `valueAccessor` property, define the column with the property and provide a function that will return the formatted value. The function receives two arguments:
* **field**: represents the data field of the column.
* **data**: represents the data record for the corresponding row.

In the provided code, the **percentageFormatter** function takes the progress value of the data object, appends the percentage sign to it, and returns the formatted string. The **concatenateFields** function concatenates the TaskName and TaskID values of the data object and returns the combined string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs6" %}

> The `valueAccessor` function can have performance implications if it is used to access a large number of data records or to perform complex data manipulations. To avoid performance issues, you can enable the virtualization feature while using the valueAccessor property. This ensures that only the visible rows are rendered, resulting in faster rendering times.

### Display array type columns

The Gantt chart component allows you to easily bind an array of objects to a column using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property. This property allows customization of how the data is displayed in the column.

For example, consider a column named **Name** that contains an array of two objects, **FirstName** and **LastName**. The `valueAccessor` property can be used to join these two objects and bind them to the column.

This will display the concatenated value of **FirstName** and **LastName** in the **Name** column of the gantt chart. Here's an example of how this can be achieved:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs3" %}

>Since customized values are displayed in the **Name** column, data operations, such as sorting and filtering, cannot be performed for this column.

### Expression column

You can achieve an expression column in the Gantt chart by using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property. The `valueAccessor` property allows you to define a function that calculates the value for the expression column based on the values of other columns.

In this example, gantt chart has columns **TaskID**, **TaskName**, **Duration**, **Progress**, **units**, and **unit price**. An expression column called **Total Price** is added that calculates the total prices for value for each row based on the values of **units** and **Total Price** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs4" %}

>Since customized values are displayed in the **Total Price** column, data operations, such as sorting and filtering, cannot be performed for this column.


### Display serial number

To display serial number in the gantt chart for every rows, you can use the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event. The `rowDataBound` event is triggered for each row in the gantt when the data is bound to the gantt chart.

Here is an example code snippet that demonstrates how to display serial numbers in a gantt chart using `rowDataBound` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs5" %}

>Since customized values are displayed in the **S.No** column, data operations, such as sorting and filtering, cannot be performed for this column.

