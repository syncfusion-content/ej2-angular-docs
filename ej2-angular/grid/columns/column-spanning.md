---
layout: post
title: Angular Grid - Column Spanning | Syncfusion
description: Angular Grid column spanning supports merging header or cell columns, configuration for colspan behavior, and customization for complex multi-column layouts.
platform: ej2-angular
control: Column spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Column Spanning in Angular Grid Component

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows adjacent cells to be merged horizontally, creating a more informative and visually appealing layout. By defining the [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs#colspan) attribute within the [QueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) event, cells can be spanned and the appearance of the Grid can be customized effectively.

In the following demo, Employee "Davolio" doing analysis from "9.00" AM to "10.00" AM, so that cells have spanned.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/spanning-cs1" %}

## Change the border color while column spanning

The border color of spanned cells can be customized through the  [QueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event. This event is triggered before the cell element is appended to the Grid, which makes it possible to apply styles programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/spanning-cs3" %}

## Limitations

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid#updatecell) method does not support column spanning.
* Column spanning is not supported with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Autofill

## Column spanning using enableColumnSpan property    

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid introduces a simplified approach to horizontally merge cells using the [enableColumnSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablecolumnspan) property. 

When the `enableColumnSpan` property is enabled, the Grid automatically merges cells with matching data across adjacent columns without requiring manual span configuration using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) event. These merged cells are visually combined into a single cell, improving readability.

Here is an example of using the `enableColumnSpan` property to merge cells horizontally:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-spanning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-spanning-cs1" %}

> To control spanning at the column level, the [enableColumnSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablecolumnspan) property can be disabled in the column definition. Setting `enableColumnSpan` to `false` prevents merging for that specific column.

### Limitations

* Virtualization
* Infinite Scrolling
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid