---
layout: post
title: Printing in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table prints the current grid or pivot chart view to a hard copy via the print method.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Printing in Angular Pivot Table

The Angular Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

Call the [`print`](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#print) method on the underlying [`Grid`](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) instance (accessed via the `grid` property of the `PivotView` instance through a `@ViewChild` reference) to print the rendered pivot table. The `Grid` control captures the current state of the pivot table, including all applied filters, sorting, and formatting.

The sample below prints the pivot table when an external button is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs318/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs318/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs318" %}

## Print pivot chart

Call the [`print`](https://ej2.syncfusion.com/angular/documentation/api/chart/index-default#print) method on the underlying [`Chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) instance (accessed via the `chart` property of the `PivotView` instance through a `@ViewChild` reference) to print the pivot chart. The `Chart` control preserves colors, legends, and data labels in the printed output.

> Set the [`displayOption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel) property to **Chart** or **Both** to display the pivot chart.

> To enable pivot chart functionality, inject the `PivotChartService` module into the `@NgModule.providers` section.

The sample below prints the pivot chart when an external button is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs319" %}

## See Also

* [Pivot Chart](./pivot-chart)
* [Excel Export](./excel-export)
* [PDF Export](./pdf-export)