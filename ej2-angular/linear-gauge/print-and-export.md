---
layout: post
title: Print and export in Angular Linear gauge component | Syncfusion
description: Learn here all about Print and export in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print and export 
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in Angular Linear gauge component

## Print

<!-- markdownlint-disable MD013 -->

The rendered Linear Gauge can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#print) method. To use the print functionality, set the [`allowPrint`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#allowprint) property as **true** and inject the **PrintService** in the **providers**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/print-and-export-cs2" %}

## Export

### Image Export

<!-- markdownlint-disable MD013 -->

To use the image export functionality, set the [`allowImageExport`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#allowimageexport) property as **true** and inject the **ImageExportService** in the **providers**. The rendered Linear Gauge can be exported as an image using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#export) method. This method requires two parameters: export type and file name. The Linear Gauge can be exported as an image with the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/print-and-export-cs3" %}

### PDF Export

To use the PDF export functionality, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#allowpdfexport) property as **true** and inject the **PdfExportService** in the **providers**. The rendered Linear Gauge can be exported as PDF using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#export) method. The [`export`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation of the PDF document can be set as **Portrait** or **Landscape**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/print-and-export-cs4" %}

### Exporting Linear Gauge as base64 string of the file

The Linear Gauge can be exported as base64 string for the JPEG, PNG and PDF formats. The rendered Linear Gauge can be exported as base64 string of the exported image or PDF document used in the [`export`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#export) method. The arguments that are required for this method is export type, file name, orientation of the exported PDF document and **allowDownload** boolean value that is set as **false** to return base64 string. The value for the orientation of the exported PDF document is set as **null** for image export and **Portrait** or **Landscape** for the PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/print-and-export-cs5" %}

>The exporting of the Linear Gauge as base64 string is not applicable for the SVG format.