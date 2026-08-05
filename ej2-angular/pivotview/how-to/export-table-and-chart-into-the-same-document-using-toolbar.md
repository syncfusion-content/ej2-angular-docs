---
layout: post
title: How to Export Table and Chart into the Same Document in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to export table and chart into the same document in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Export table and chart into the same PDF document using toolbar.
documentation: ug
domainurl: ##DomainURL##
---

# How to Export Table and Chart into the Same Document in Angular Pivot Table

By default, when the [displayOption.view](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel#view) property is set to **Both** in the pivot table, the export functionality exports either the table or the chart to the PDF document based on the current value of the [displayOption.primary](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel#primary) property. However, to export both the table and the chart into the same PDF document simultaneously, use the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method during the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event.

This approach is particularly useful when users need comprehensive reports that include both tabular data and visual representations in a single document.

## Implementation steps

Follow these steps to enable combined table and chart export:

1. **Configure the pivot view** with both table and chart display options
2. **Handle the actionBegin event** to intercept the default export action
3. **Call the pdfExport method** with the `exportBothTableAndChart` parameter set to **true**

## Code example

The following example demonstrates how to restrict the built-in export action by setting the [args.cancel](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel) option to **true** in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event, and then export both the table and chart by calling the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method with the `exportBothTableAndChart` argument set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs313/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs313/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs313" %}
