---
layout: post
title: Export table and chart into the same document using toolbar in Angular Pivotview component | Syncfusion
description: Learn here all about Export table and chart into the same document using toolbar in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export table and chart into the same document using toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Export table and chart into the same document using toolbar 

Even if the [displayOption.view](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/#view) property is set to **Both** in the pivot table, you can only export either the table or the chart to the PDF document based on the current value set in the [displayOption.primary](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/#primary) property. But, to export both the table and the chart to the same PDF document, use the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/pivotview#pdfexport) method during the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionbegin) event invoke.

In the following example, the built-in export action can be restricted by setting the [args.cancel](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/pivotActionBeginEventArgs/#cancel) option to **true** in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionbegin) event, and both the table and the chart can be exported by calling the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/pivotview#pdfexport) method and setting the `exportBothTableAndChart` argument to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs313/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs313/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs313" %}
