---
layout: post
title: Show spinner while exporting in Angular Treegrid component | Syncfusion
description: Learn here all about Show spinner while exporting in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show spinner while exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Show spinner while exporting in Angular Treegrid component

You can show/ hide spinner component while exporting the Tree Grid using [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showspinner)/ [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidespinner) methods. You can use  [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.text** as **PDF Export** or **Excel Export** we can call the [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showspinner) method from Tree Grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexportcomplete) event, We can call the [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the Tree Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs17" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.