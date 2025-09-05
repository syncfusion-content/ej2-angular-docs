---
layout: post
title: Excel cell style customization in Angular TreeGrid component | Syncfusion
description: Learn how to customize Excel cell styles in the Syncfusion Angular TreeGrid component of Essential JS 2, including conditional formatting and theming options.
platform: ej2-angular
control: Excel cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# Excel cell style customization in Angular TreeGrid component

## Conditional cell formatting

Cells in the exported Excel file from the TreeGrid component can be customized or formatted using the [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelQueryCellInfo) event. This event allows formatting of TreeGrid cells in the exported Excel document based on the corresponding column cell value.

In the example below, the background color is set for the `Duration` column in the exported Excel file by using `args.cell` and the `backgroundColor` property.

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

Excel export in TreeGrid provides an option to apply a theme to the exported Excel document.

To apply a theme in the exported Excel file, define the `theme` property in the `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs3" %}

> By default, the material theme is applied to the exported Excel document.
