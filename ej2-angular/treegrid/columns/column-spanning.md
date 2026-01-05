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

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid allows merging adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](https://ej2.syncfusion.com/angular/documentation/api/treegrid/queryCellInfoEventArgs/#colspan) attribute in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/queryCellInfoEventArgs) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following example, Employee **Davolio** is doing analysis from 9.00 AM to 10.00 AM, so those cells have been spanned.

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

The border color for the spanned cells can be changed by using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event. This event triggers before the cell element is appended to the TreeGrid element, allowing customization of the cell appearance including border styles.

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

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling

> When using column spanning, ensure that the spanned cells do not interfere with TreeGrid operations such as sorting, filtering, or editing, as this may lead to unexpected behavior.