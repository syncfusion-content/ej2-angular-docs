---
layout: post
title: Pdf export options in Angular Grid component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export options 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export options in Angular Grid component

## Export current page

PDF export provides an option to export the current page into PDF. To export current page, define the [`exportType`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#exporttype) to **CurrentPage**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs11" %}

## Export the selected records only

You can export the selected records data by passing it to [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) Property in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, We can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method and pass the selected data to [`PdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs3" %}

## Export filtered data only

You can export the filtered data by defining the resulted data in [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs4" %}

## Export hidden columns

PDF export provides an option to export hidden columns of Grid by defining the [`includeHiddenColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#includehiddencolumn) as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs12" %}

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfExportComplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_pdfexport**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs13" %}

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs14" %}

## Change page size

Page size can be customized for the exported document using the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties).

Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs15" %}

## Define file name

You can assign the file name for the exported document by defining [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#filename) property in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs16" %}

## Font customization

### Default fonts

By default, grid uses **Helvetica** font in the exported document. You can change the default font by using [`pdfExportProperties.theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```typescript

import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

...

const pdfExportProperties: PdfExportProperties = {
    theme: {
        header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
        caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
        record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
    }
};

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using [`pdfExportProperties.theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property.

In the following example, we have used Algeria font to export the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs17" %}

> **PdfTrueTypeFont** accepts base 64 format of the Custom Font.