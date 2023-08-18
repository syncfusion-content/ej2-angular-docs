---
layout: post
title: Footer aggregate in Angular Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Angular Grid component

The Syncfusion Angular Grid component allows you to calculate and display aggregate values in the footer cells. The footer aggregate value is calculated from all the rows in the grid. You can use the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#footertemplate) property to render the aggregate value in the footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs1" %}

> * Use the template reference variable name **#footerTemplate** to specify the footer template.
> * Inside the template, access the aggregate values using their corresponding [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name. For example, to access the sum aggregate value, use **data.sum**.

## Format the aggregate value

To format the aggregate value result in the Syncfusion Angular Grid component, you can use the [format](https://helpej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#format) property of the[AggregateColumnDirective](https://helpej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/). The `format` property allows you to specify a format string that determines how the aggregate value will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs2" %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event, [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getfootercontent) methods of the Grid.

In the following, footer content is appended to the header content using the `dataBound` event of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs3" %}
