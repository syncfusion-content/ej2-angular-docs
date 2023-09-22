---
layout: post
title: Pdf cell style customization in Angular Grid component | Syncfusion
description: Learn here all about Pdf cell style customization in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf cell style customization in Angular Grid component

## Conditional cell formatting

Grid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported document by **args.cell** and **backgroundColor** property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs9" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the [`theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) in [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs10" %}

> By default, material theme is applied to exported PDF document.