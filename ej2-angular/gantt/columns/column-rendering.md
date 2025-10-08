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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component supports column rendering to control data presentation. Column definitions act as the data schema and support operations such as sorting and filtering. The [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property is required to map data source values to columns and must be defined for features like complex binding and template-based actions.

> * If the `field` is not defined in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource), the column will display empty values.
> * A `field` with a dot operator is treated as [complex binding](../column/column-rendering/#complex-data-binding).
> * To enable CRUD, filtering, or searching, the `field` must be defined for template columns.

## Define columns manually 

To manually define columns in the Gantt component, use `e-columns` and set properties like [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field), [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) and [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#width). This enables customization of column behavior and appearance based on specific requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs1" %}

## Auto generated columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt component automatically generates columns when the [columns](https://ej2.syncfusion.com/angular/documentation/api/gantt#columns) property is either empty or undefined during initialization, binding all fields from the `dataSource` as individual Gantt columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/auto-generated-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/auto-generated-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/auto-generated-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/auto-generated-cs1" %}

## Dynamic column generation 

You can dynamically generate columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt component at runtime based on the provided data. This is useful when the column structure needs to adapt to user requirements or dynamic data sources.

### Using ngFor directive

To dynamically generate columns in the Gantt component, define an array of column objects in the component file. Each object should include [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) and [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext), which are bound to the respective properties of the **e-column** component using `ngFor` directive.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs2" %}

### Using valueAccessor property

The [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property is used to format column data in the Gantt component. It accepts a function that returns a custom display value using the following two arguments:

- `field`: The column's data field.  
- `data`: The data record for the row.

In the following example, `percentageFormatter` returns the progress value with a `%` sign, while `concatenateFields` returns a combined string of **TaskName** and **TaskID**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs6/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs6" %}

> The `valueAccessor` function may impact performance when used with large datasets or complex logic. To improve rendering speed, enable the virtualization feature so that only visible rows are processed and displayed.

### Display array type columns

The Gantt component supports binding an array of objects to a column using the  [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property. It accepts a function that returns a custom display value, which is then displayed in the column.

In the following example, the **Name** column shows the combined value of **FirstName** and **LastName** by using a custom function defined in `valueAccessor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs3" %}

>Since customized values are displayed in the **Name** column, data operations, such as sorting and filtering, cannot be performed for this column.

### Expression column

You can achieve an expression column in the Gantt component using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#valueaccessor) property. It accepts a function that returns a calculated value, which is displayed in the column based on other column values.

In the following example, the chart includes columns like **TaskID**, **TaskName**, **Duration**, **Progress**, **units**, and **unit price**. A  **Total Price** column is added to display the result of multiplying **units** and **unit price** for each row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs4" %}

> Since custom values are displayed in the **Total Price** column, operations like sorting and filtering are not supported for this column.

### Display serial number

You can display serial numbers for each row in the Gantt component using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdatabound) event. This event triggers when data is bound to each row, allowing you to assign and display a serial number directly in the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnrender-cs5/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnrender-cs5" %}

> Since custom values are displayed in the **S.No** column, data operations such as sorting and filtering are not supported for this column.