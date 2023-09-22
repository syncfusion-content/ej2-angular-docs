---
layout: post
title: Excel cell style customization in Angular Grid component | Syncfusion
description: Learn here all about Excel cell style customization in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel cell style customization 
documentation: ug
domainurl: ##DomainURL##
---

# Excel cell style customization in Angular Grid component

## Conditional cell formatting

Grid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported excel by **args.cell** and **backColor** property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs2" %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the [`theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#theme) in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs3" %}

>By default, material theme is applied to exported excel document.

## Rotate a header text to a certain degree in the exported grid

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#excelheaderquerycellinfo) event of the Grid.

The `excelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported. Customize the column header in this event.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping-cs1" %}
