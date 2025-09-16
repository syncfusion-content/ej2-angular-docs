---
layout: post
title: Exporting grid in Cordova application in Angular Grid component | Syncfusion
description: Learn how to export grid data in a Cordova application using the Syncfusion Angular Grid component, including strategies for exporting Excel and PDF files.
platform: ej2-angular
control: Exporting grid in cordova application 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in Cordova application in Angular Grid component

Exporting data from the Syncfusion Angular Grid within a Cordova application enables users to generate and download reports, share information in Excel or PDF formats, and archive data for offline access. As Cordova applications do not support direct file downloads in the traditional browser sense, it is necessary to handle exported data using Blob streams.

To export the Syncfusion Angular Grid data in a Cordova application, use the available grid exporting methods and the export completion events to retrieve the Blob stream. The process involves handling the [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) and [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) events, which provide the Blob data after export operation is finished. The `exportBlob` function is responsible for creating a downloadable link to enable users to access the exported file on their device.

The following example demonstrates exporting a Syncfusion Angular Grid to Excel and PDF formats in a Cordova application. Blob streams are obtained in the export completion event handlers, and a download link is created for the exported file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs4" %}