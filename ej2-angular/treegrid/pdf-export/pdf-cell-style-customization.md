---
layout: post
title: Pdf cell style customization in Angular Treegrid component | Syncfusion
description: Learn here all about Pdf cell style customization in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf cell style customization in Angular Treegrid component

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported document by `args.cell` and `backgroundColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs2" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `exportProperties` .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs3" %}

> By default, material theme is applied to exported PDF document.