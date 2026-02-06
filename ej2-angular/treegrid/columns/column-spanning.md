---
layout: post
title: Column spanning in Angular TreeGrid component | Syncfusion
description: Learn here all about Column spanning in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in Angular TreeGrid component

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid allows merging adjacent cells horizontally, creating a visually appealing and informative layout. By defining the `colSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following example, Employee **Davolio** is scheduled for analysis from "9.00 AM" to "10.00 AM", so those cells have been spanned.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/spanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/spanning-cs1" %}

## Change the border color while column spanning

The border color for the spanned cells can be changed by using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/index-default#querycellinfo) event. This event triggers before the cell element is appended to the TreeGrid element, allowing customization of the cell appearance including border styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/spanning-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/spanning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/spanning-cs2" %}

## Limitations

Column spanning in the TreeGrid has the following limitations:

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/index-default#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling

> When using column spanning, ensure that the spanned cells do not interfere with TreeGrid operations such as sorting, filtering, or editing, as this may lead to unexpected behavior.

## Column spanning implementation through API

The Syncfusion Angular TreeGrid provides an API-based approach to horizontally merge cells with identical values in the same row across adjacent columns.

The column spanning feature in the Syncfusion Angular TreeGrid can be enabled using `enableColumnSpan` property to **true** in the TreeGrid configuration, which significantly enhances readability and delivers a cleaner layout by eliminating repetitive data in columns such as "Status", "Permit Status", "Inspection Status" and "Punch List Status".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/spanning-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/spanning-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/spanning-cs3" %}

> In the sample, column spanning is disabled at the column level for the price based columns such as "Planned Budget" and "Actual Spend" by setting each column's `enableColumnSpan` property to **false**.

### Limitations

* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export