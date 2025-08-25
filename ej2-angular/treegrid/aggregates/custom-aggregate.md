---
layout: post
title: Custom aggregate in Angular TreeGrid component | Syncfusion
description: Learn about implementing custom aggregates in the Syncfusion Angular TreeGrid component, including configuration and usage of custom aggregation functions.
platform: ej2-angular
control: Custom aggregate
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Angular TreeGrid component

To calculate aggregate values using your own aggregation logic, use the custom aggregate feature in the TreeGrid. To enable custom aggregation, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property to `Custom` and assign your custom aggregation function to the [`customAggregate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#customaggregate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/aggregate-cs2" %}

> To access the custom aggregate value inside a template, use the key `Custom` within the context of your footer or summary template.