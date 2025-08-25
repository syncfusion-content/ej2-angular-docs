---
layout: post
title: PDF cell style customization in Angular TreeGrid component | Syncfusion
description: Learn how to customize PDF cell styles in the Syncfusion Angular TreeGrid component, including conditional formatting and theme options for PDF export.
platform: ej2-angular
control: PDF cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# PDF cell style customization in Angular TreeGrid component

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfQueryCellInfo) event. This event allows conditional formatting of TreeGrid cells in the exported PDF document based on the column's cell values.

In the example below, the background color of the `Duration` column in the exported PDF document is customized by setting the `backgroundColor` property of `args.cell` in the event handler.

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

PDF export provides an option to apply a theme to the exported PDF document.

To apply a theme during PDF export, define the `theme` property in `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs3" %}

> By default, the material theme is applied to the exported PDF document.