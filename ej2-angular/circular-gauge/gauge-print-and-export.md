---
layout: post
title: Gauge print and export in Angular Circular gauge component | Syncfusion
description: Learn here all about Gauge print and export in Syncfusion Angular Circular gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gauge print and export 
documentation: ug
domainurl: ##DomainURL##
---


# Gauge print and export in Angular Circular gauge component

## Print

To use the print functionality, we should inject the `PrintService` into the `@NgModule.providers` and set the [`allowPrint`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#allowprint) property to **true**. The rendered circular gauge can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#print).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-print-and-export-cs1" %}

## Export

### Image Export

To use the image export functionality, we should inject the `ImageExportService` into the `@NgModule.providers` and set the [`allowImageExport`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#allowimageexport) property to **true**. The rendered circular gauge can be exported as an image using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#export) method. The method requires two parameters: image type and file name. The circular gauge can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-print-and-export-cs2" %}

We can get the image file as base64 string for the JPEG and PNG formats. The circular gauge can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-print-and-export-cs3" %}

### PDF Export

To use the PDF export functionality, we should inject the `PdfExportService` into the `@NgModule.providers` and set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#allowpdfexport) property to **true**. The rendered circular gauge can be exported as PDF using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#export) method. The [`export`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and "0" indicates portrait and "1" indicates landscape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-print-and-export-cs4" %}

>Note: The exporting of the circular gauge as base64 string is not supported in the PDF export.