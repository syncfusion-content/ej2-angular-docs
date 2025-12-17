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

The row spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid allows merging cells in the same column vertically, creating a visually appealing and informative layout. By defining the `rowSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

The `queryCellInfo` event is triggered for each cell in the TreeGrid, and allows customizing the cells in the TreeGrid. By handling this event, the `rowSpan` attribute can be set for a cell to achieve row spanning.

In the following demo, the **Lunch Break** cell spans multiple rows in the "1:00 PM" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-spanning-cs1" %}

> * To disable the spanning for particular TreeGrid page, use **requestType** from `queryCellInfo` event argument.
> * The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Limitations

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/index-default#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Row drag and drop
    4. Autofill
    5. Row or cell editing
    6. Batch editing
    7. CRUD

## Row spanning implementation through API   

The Syncfusion Angular TreeGrid provides an API-based approach to vertically merge cells with identical values in the same column across consecutive rows.

The row spanning feature in the Syncfusion Angular TreeGrid can be enabled using `enableRowSpan` property to **true** in the TreeGrid configuration, which significantly enhances readability and delivers a cleaner layout by eliminating repetitive data in columns such as "Status", "Permit Status", "Inspection Status" and "Punch List Status".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-spanning-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-spanning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/row-spanning-cs2" %}

> In the sample, row spanning is disabled at the column level for the price based columns such as "Planned Budget" and "Actual Spend" by setting each column's `enableRowSpan` property to **false**.

### Limitation

* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export