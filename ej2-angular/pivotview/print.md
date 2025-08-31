---
layout: post
title: Print in Angular Pivotview component | Syncfusion
description: Learn here all about Print in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Pivotview component

The Angular PivotView component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

The rendered pivot table can be printed by invoking the [print](https://ej2.syncfusion.com/angular/documentation/api/grid/#print) method from the underlying [`Grid`](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) component instance. The [`Grid`](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) control manages the print functionality and captures the current state of the pivot table, including all applied filters, sorting, and formatting. The sample code below demonstrates how to trigger the print operation using an external button click.

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

To print the pivot chart, use the [print](https://ej2.syncfusion.com/angular/documentation/api/chart/#print) method from the underlying [`Chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) component instance. The [`Chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) control manages the print functionality and preserves all visual elements, including colors, legends, and data labels, in the printed output.

> To use pivot chart functionality, inject the `PivotChartService` module into the `@NgModule.providers` section.

> To display the pivot chart, set the [displayOption](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/) property to either **Chart** or **Both**.

The sample code below illustrates how to print the pivot chart through an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs319" %}