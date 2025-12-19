---
layout: post
title: Row spanning in Angular TreeGrid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in Angular TreeGrid component

Row spanning in the TreeGrid allows merging cells in the same column vertically, creating a visually appealing and informative layout. By defining the `rowSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

The `queryCellInfo` event is triggered for each cell in the TreeGrid, and allows customizing the cells in the TreeGrid. By handling this event, the `rowSpan` attribute can be set for a cell to achieve row spanning.

In the following demo, the "Lunch Break" cell spans multiple rows in the "1:00 PM" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-spanning-cs1" %}

## Row spanning via API

Row spanning in the TreeGrid allows automatically merging cells with identical values in the same column across consecutive rows. This significantly enhances readability and delivers a cleaner layout by eliminating repetitive data.To enable row spanning, set the `enableRowSpan` property to "true" in the TreeGrid configuration.
 
In the following example, row spanning is applied to the "Status", "Permit Status", "Inspection Status", and "Punch List Status" columns, while it is disabled for the "Planned Budget" and "Actual Spend" columns by setting the `enableRowSpan` property to "false" in the column level.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-spanning-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-spanning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/row-spanning-cs2" %}

### Limitations
 
The following list outlines the features that are not compatible with row spanning:
 
* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export

## See Also
* [Column Spanning in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-spanning)