---
layout: post
title: PDF export options in Angular TreeGrid component | Syncfusion
description: Learn about PDF export options in the Syncfusion Angular TreeGrid component, including exporting current page, selected records, hidden columns, custom fonts, and advanced settings.
platform: ej2-angular
control: PDF export options 
documentation: ug
domainurl: ##DomainURL##
---

# PDF export options in Angular TreeGrid component

## Export current page

PDF export provides an option to export only the current page to a PDF document. To export the current page, set the `exportType` property to `CurrentPage` in the export properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs4" %}

## Export selected records only

You can export only the selected records in the TreeGrid by passing the selected data to the [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pdfExportProperties/#datasource) property in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event.

In the following demo, the selected records are retrieved using the [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrecords) method and passed to the [`PdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs5" %}

## Export hidden columns

PDF export provides an option to include hidden columns in the exported PDF by setting the `includeHiddenColumn` property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs6" %}

## Show or hide columns in exported PDF

You can show a hidden column or hide a visible column while exporting the TreeGrid using the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfExportComplete) events.

In the `toolbarClick` event, based on `args.item.text` as `PDF Export`, set the `column.visible` property to `true` or `false` to show or hide columns for export.

In the `pdfExportComplete` event, revert columns to their previous visibility states.

In the example below, the `Duration` column is hidden in the TreeGrid. While exporting, the `Duration` column is made visible and the `StartDate` column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs7" %}

## Change page orientation

You can change the page orientation of the exported PDF to Landscape (the default is Portrait) using the `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs8" %}

## Change page size

The page size of the exported PDF document can be customized using the `exportProperties`. Supported page sizes include:

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
{% include code-snippet/treegrid/pdf-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs9" %}

## PDF export customization

PDF export provides options to customize how the TreeGrid is mapped to the exported PDF document.

### File name for exported document

You can specify the file name for the exported document by setting the `fileName` property in `PdfExportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs10" %}

### Default fonts for PDF exporting

By default, the TreeGrid uses the `Helvetica` font in the exported PDF document. You can change the default font by using the `pdfExportProperties.theme` property. The available default fonts are:

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example below demonstrates how to change the default font:

```typescript

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    let pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold)},
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font for PDF exporting

You can set a custom font for TreeGrid header, content, and caption cells in the exported document using the `pdfExportProperties.theme` property.

In the following example, the Advent Pro font is used to export the TreeGrid with Hungarian fonts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs11" %}

> `PdfTrueTypeFont` accepts the base64 format of the custom font.