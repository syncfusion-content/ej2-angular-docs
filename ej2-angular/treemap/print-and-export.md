---
layout: post
title: Print and export in Angular Treemap component | Syncfusion
description: Learn here all about Print and export in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print and export 
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in Angular Treemap component

## Print

To use the print functionality, we should inject the `PrintService` into the `@NgModule.providers` and set the [`allowPrint`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#allowprint) property to **true**. The rendered treemap can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#print).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs47/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs47/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs47" %}

## Export

### Image Export

To use the image export functionality, we should inject the `ImageExportService` into the `@NgModule.providers` and set the [`allowImageExport`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#allowimageexport) property to **true**. The rendered treemap can be exported as an image using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#export) method. The method requires two parameters: image type and file name. The treemap can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs48/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs48/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs48" %}

We can get the image file as base64 string for the JPEG and PNG formats. The treemap can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs49/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs49/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs49" %}

### PDF Export

To use the PDF export functionality, we should inject the `PdfExportService` into the `@NgModule.providers` and set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#allowpdfexport) property to **true**. The rendered treemap can be exported as PDF using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#export) method. The [`export`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs50/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs50/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs50" %}

>The exporting of the treemap as base64 string is not supported in the PDF export.
