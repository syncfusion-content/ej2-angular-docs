---
layout: post
title: PDF export in Angular TreeGrid component | Syncfusion
description: Learn how to enable and use PDF export in the Syncfusion Angular TreeGrid component, including showing a spinner and providing a custom data source.
platform: ej2-angular
control: PDF export 
documentation: ug
domainurl: ##DomainURL##
---

# PDF export in Angular TreeGrid component

The PDF export feature allows you to export TreeGrid data to a PDF document. To enable this functionality, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpdfexport) property to `true`. Exporting is initiated by calling the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) method.

To use the PDF export functionality, you must inject the `PdfExport` module into the TreeGrid.

You can watch this video to learn how to perform exports and customize them in the Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=cgVdlF7zzfE" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs12" %}

<!-- Multiple exporting

PDF export provides an option for exporting multiple treegrids to same file. In this exported document, each treegrid will be exported to new page of document in same file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs13" %} -->

## Show spinner while exporting

You can show or hide a spinner component during the export process by using the `showSpinner` and `hideSpinner` methods. Use the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event to show the spinner before exporting and the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexportcomplete) event to hide it after the export is finished.

In the following demo, the default spinner component is rendered when exporting the TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs14" %}

## Custom data source

PDF export provides an option to define a data source dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pdf-export-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pdf-export-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pdf-export-cs15" %}

> You can refer to our [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.