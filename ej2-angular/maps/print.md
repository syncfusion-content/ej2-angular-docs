---
layout: post
title: Print in Angular Maps component | Syncfusion
description: Learn here all about Print in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Maps component

## Print

The rendered Maps can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/angular/documentation/api/maps/#print) method. To use the print functionality, the **PrintService** must be injected into the Maps using **providers** of the Angular component and set the [`allowPrint`](https://ej2.syncfusion.com/angular/documentation/api/maps/#allowprint) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs79/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs79/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs79/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs79" %}

## Export

### Image Export

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **Maps.Inject(ImageExport)** method and set the [`allowImageExport`](https://ej2.syncfusion.com/angular/documentation/api/maps/#allowimageexport) property to **true**. The rendered Maps can be exported as an image using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/maps/#export) method. The method requires two parameters: image type and file name. The Maps can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs80/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs80/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs80/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs80" %}

### Exporting Maps as base64 string of the file

We can get the image file as base64 string for the JPEG and PNG formats. The rendered Maps can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/maps/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs81/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs81/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs81/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs81" %}

### PDF Export

To use the PDF export functionality, **PdfExport** module must be injected into the Maps using **Maps.Inject(PdfExport)** method and set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/maps/#allowpdfexport) property to **true**. The rendered map can be exported as PDF using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/maps/#export) method. The [`export`](https://ej2.syncfusion.com/angular/documentation/api/maps/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs82/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs82/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs82/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs82" %}

>The exporting of the map as base64 string is not supported in the PDF export.

### Export the tile maps

The rendered Maps with providers such as OSM, Bing and Google static maps can be exported using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/maps/#export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs83/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs83/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs83/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs83" %}