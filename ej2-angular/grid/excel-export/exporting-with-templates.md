---
layout: post
title: Exporting Templates in Angular Grid control | Syncfusion
description: Learn here all about Exporting grids with templates in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting grid with templates
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid with templates in Angular Grid control

The grid offers the option to export the column, detail, and caption templates to an Excel document. The template contains images, hyperlinks, and customized text.

## Exporting with column template

The Excel export functionality allows you to export Grid columns that include images, hyperlinks, and custom text to an Excel document.

In the following sample, the hyperlinks and images are exported to Excel using [hyperlink](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#hyperlink) and [image](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#image) properties in the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo) event.

> Excel Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-template-export-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/column-template-export-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-template-export-cs2" %}

![ColumnTemplateExport](../images/colTemp_excel_expt.gif)

## Exporting with detail template

By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

The detail rows in the exported Excel can be customized or formatted using the [exportDetailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportdetailtemplate) event. In this event, the detail rows of the Excel document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnHeader](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateProperties/#columnheader) and [rows](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateProperties/#rows) properties using its [parentRow](https://ej2.syncfusion.com/angular/documentation/api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows for the creation of detail rows in the Excel document. Additionally, custom styles can be applied to specific cells using the [style](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell/#style) property.

> When using [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell/#rowspan), it is essential to provide the cell's [index](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell/#index) for proper functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/detail-template-export-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/detail-template-export-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/detail-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/detail-template-export-cs2" %}

![DetailTemplateExport](../images/detailTemp_excel_expt.gif)

## Exporting with caption template

The Excel export feature enables exporting of Grid with a caption template to an Excel document.

In the following sample, the customized caption text is exported to Excel using [captionText](https://ej2.syncfusion.com/angular/documentation/api/grid/exportGroupCaptionEventArgs/#captiontext) property in the [exportGroupCaption](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportgroupcaption) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/caption-template-export-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/caption-template-export-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/caption-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/caption-template-export-cs2" %}

![CaptionTemplateExport](../images/captionTemp_excel_expt.gif)