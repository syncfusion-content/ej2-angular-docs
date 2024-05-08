---
layout: post
title: Excel cell style customization in Angular Treegrid component | Syncfusion
description: Learn here all about Excel cell style customization in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# Excel cell style customization in Angular Treegrid component

## Conditional cell formatting

TreeGrid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelQueryCellInfo) event. In this event, we can format the treegrid cells of exported Excel document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported excel by `args.cell` and `backgroundColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs2" %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the `theme` in `exportProperties` .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs3" %}

>By default, material theme is applied to exported excel document.