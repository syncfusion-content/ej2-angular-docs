---
layout: post
title: Exporting grid in cordova application in Angular Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting grid in cordova application 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in Angular Grid component

Exporting the Syncfusion Angular Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the Syncfusion Angular Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a Syncfusion Angular Grid in a Cordova application. It utilizes the [excelExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#excelexportcomplete) and [pdfExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs4" %}