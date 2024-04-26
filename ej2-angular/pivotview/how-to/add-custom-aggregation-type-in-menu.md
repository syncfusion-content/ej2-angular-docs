---
layout: post
title: Add custom aggregation type to the menu in Angular Pivotview component | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add custom aggregation type to the menu 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to the menu in Angular Pivotview component

By using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#databound) event, you can add your own custom aggregate type(s) to the pivot table's aggregate menu.

In the following example, we have added the aggregation types **CustomAggregateType 1** and **CustomAggregateType 2** to the aggregate menu. The calculation for those aggregated types can be done using the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs315" %}