---
layout: post
title: Adding header and footer in Angular Grid Component | Syncfusion
description: Learn here all about Adding header and footer in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding header and footer 
documentation: ug
domainurl: ##DomainURL##
---

# Adding header and footer in Angular Grid component

The Syncfusion Grid enables the addition of customized header and footer sections to exported PDF documents. This feature allows for the inclusion of custom text, page numbers, lines, page size adjustments, and control over the orientation of the header and footer.

## Adding text in header and footer

With the Syncfusion Grid, custom text can be added to the header or footer section of an exported PDF document.  

The header section of a PDF document is positioned at the top of each page. This area is ideal for displaying information such as company logos, document titles, dates, or other elements that should be present on every page.

The footer section appears at the bottom of each page and is commonly used for content like page numbers, copyright notices, or disclaimers. Footer content is repeated consistently across all pages.

To add text to the header or footer of an exported PDF document:

1. Access the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) of the Grid component.
2. Configure the [header](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#header) or [footer](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#footer) property with the desired content.
3. Trigger the PDF export operation.

The code example below demonstrates how to add a header to the exported PDF document:

```typescript
const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x: 200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
        ]
    }
}
```

## Drawing a line in header and footer

When exporting data from the Syncfusion Grid to a PDF document, it is possible to add a line in the header and footer section. This enhancement provides a visual separation between the header or footer and the main content.

The [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property of the Grid supports customization of line styles. Supported line styles include:

* Dash
* Dot
* DashDot
* DashDotDot
* Solid

To add a line in the header or footer of the exported PDF document, you can access the `header.contents` or `footer.contents` property of the [header](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#header) or [footer](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#footer) in the `pdfExportProperties` property of the grid. 

The following code example demonstrates drawing a line in the header and footer:

```typescript
const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            }
        ]
    },
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
        ],
    },
}
```

## Adding page numbers in header and footer

When exporting the Syncfusion Grid to a PDF document, page numbers can be included in the header or footer, providing navigation references in the output file.

Configure this functionality through the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property of the Grid. Supported page number types include:

* LowerLatin – a, b, c, …
* UpperLatin – A, B, C, …
* LowerRoman – i, ii, iii, …
* UpperRoman – I, II, III, …
* Number – 1, 2, 3, …
* Arabic – 1, 2, 3, …

To insert a page number in the header or footer, specify the appropriate content in the [header](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#header) or [footer](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#footer) section of `pdfExportProperties`:

The following code example demonstrates adding a page number in the footer:

```typescript
const exportProperties: PdfExportProperties = {
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', // Optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#4169e1', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}
```

## Inserting an image in header and footer

The Syncfusion Grid enables insertion of images within the header or footer when exporting to PDF, making it possible to include organization logos, branding elements, or other relevant graphics.

Images should be provided as base64 strings in the .jpeg format. This is set using the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property.

To insert an image into the header or footer of the exported PDF document:

1. Convert the target image to a base64 string in .jpeg format.
2. Access the `pdfExportProperties` property of the Grid component.
3. Assign the encoded string or path to the `src` property within `header.contents` or `footer.contents`.
4. Perform the PDF export operation.

```typescript
const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
        ]
    }
}
```

The following example demonstrates how to add a header and footer to the exported grid. In this example, lines are added to the header and footer, an image is inserted in the header, and a page number is added in the footer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/exporting-cs5" %}

## Repeating column headers on every page

When exporting data from the Syncfusion Grid to PDF, column headers can be repeated on each page. This ensures column headings remain visible and identifiable throughout multi-page documents.

By default, the column header appears only on the first page. To have headers repeated on every page, set the `repeatHeader` property of the **pdfGrid** object to **true**. This can be accomplished using the [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfheaderquerycellinfo) event of the Grid.

The following example illustrates repeating column headers on every page of the exported PDF document using the `pdfHeaderQueryCellInfo` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs6" %}