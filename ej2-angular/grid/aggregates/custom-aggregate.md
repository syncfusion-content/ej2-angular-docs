---
layout: post
title: Custom aggregate in Angular Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Angular Grid component

Sometimes you can have a scenario to calculate aggregate value using your own aggregate function, we can achieve this behavior using the custom aggregate option.
To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) as **Custom** and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for Total and Group aggregations.
* **Total aggregation** - the custom aggregate function will be called with whole data and the current [`AggregateColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective) object.

* **Group aggregation** - it will be called with current group details and the [`AggregateColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-custom-cs1" %}

> To access the custom aggregate value inside template, use the key as **Custom**