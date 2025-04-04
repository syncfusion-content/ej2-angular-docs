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

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid allows you to merge adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](https://ej2.syncfusion.com/angular/documentation/api/treegrid/queryCellInfoEventArgs/#colspan) attribute in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/queryCellInfoEventArgs) event, you can easily span cells and customize the appearance of the tree grid.

In the following demo, Employee **Davolio** doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

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

You can change the border color for the spanned cells by the using [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event. This event triggers before the cell element is appended to the tree grid element.

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

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling