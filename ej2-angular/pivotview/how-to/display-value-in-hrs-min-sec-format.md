---
layout: post
title: Display string values in pivot cells in Angular Pivotview | Syncfusion
description: Learn how to display custom string values in pivot table value cells using aggregateCellInfo event in Syncfusion Angular Pivotview component.
platform: ej2-angular
control: Display string value to pivot table values
documentation: ug
domainurl: ##DomainURL##
---

# Display string values in pivot table cells

The pivot table allows users to display custom string values in value cells by using the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event. This is useful when you need to format numeric values into readable strings, such as converting seconds to time format or applying custom formatting rules.

## Converting numeric values to time format

The following example demonstrates how to convert numeric values in the **Sold** field to time format (HH:MM:SS) using the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event. The event provides access to cell data through [args.cellSets](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateEventArgs/#cellsets), allowing you to customize the display value based on the underlying data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs314/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs314/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs314" %}
