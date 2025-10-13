---
layout: post
title: Customizing PDF Headers and Footers in Angular Gantt | Syncfusion
description: Learn how to customize headers and footers in PDF exports of the Syncfusion Angular Gantt component with text, lines, page numbers, and images.
platform: ej2-angular
control: header and footer of PDF exporting
documentation: ug
domainurl: ##DomainURL##
---

# Header and footer of PDF exporting in Angular Gantt component

Customizing headers and footers in PDF exports of the Angular Gantt component allows adding text, lines, page numbers, and images to enhance document professionalism for projects. Use [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/) with [header](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfHeader/) and [footer](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfFooter/) to define content arrays, specifying `type` (e.g., Text, Line), `value`, `position`, `style`, or `src` for images with `base64` encoding. Disable footers via [enableFooter](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/#enablefooter) set to **false**, ensuring tailored outputs with the `PdfExport` module injected and [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowpdfexport) enabled.

## Write a text in header and footer

Customize text in headers or footers using the [header](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfHeader/) or [footer](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfFooter/) properties in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). Set `type` to **Text**, define `value` for the text, `position` for x/y coordinates, and `style` for color or font size.

```ts
let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: 'INVOICE',
                position: { x: 380, y: 0 },
                style: { textBrushColor: '#C25050', fontSize: 25 },
            },

        ]
    }
}
```

## Draw a line in header and footer

Customize lines in headers or footers using the [header](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfHeader/) or [footer](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfFooter/) properties in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). Set `type` to **Line**, define `points` for start/end coordinates, `pageNumberType` for position, and `style` for color, width, or dash style.

```ts
let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
}
```

## Draw a page number in header and footer

Add page numbers to headers or footers using the [header](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfHeader/) or [footer](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfFooter/) properties in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). Set `type` to **PageNumber**, define `format` for display (e.g., 'Page {$current} of {$total}'), `position` for x/y coordinates, and `style` for color or font size.

```ts
let exportProperties: PdfExportProperties = {
    footer: {
        fromBottom: 0,
        height: 20,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}',
                position: { x: 0, y: 0 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}
```

## Insert an image in header and footer

Add images to headers or footers using the [header](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfHeader/) or [footer](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfFooter/) properties in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). Set `type` to **Image**, define `src` as a `base64` string, `position` for x/y coordinates, and `size` for height/width.

Note: PDF Export supports base64 string to export the images.

```ts
// Replace it with a valid Base64-encoded image.
let image: string = "/9j/4AAQSkZJRgABAQEAeAB4AAD..." 

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 },
            }
        ]
    }
}
```

The below code illustrates the pdf export customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-export-customization-cs1" %}

## Disable footer 

By default, the exported PDF file includes a footer. The footer can be disabled by setting the [enableFooter]() property to **false**. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-export-cs5" %}

## See also
- [How to export to PDF?](https://ej2.syncfusion.com/angular/documentation/gantt/pdf-export/pdf-export)
- [How to customize PDF export?](https://ej2.syncfusion.com/angular/documentation/gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)