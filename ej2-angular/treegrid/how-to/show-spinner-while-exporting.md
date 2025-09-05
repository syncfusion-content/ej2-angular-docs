---
layout: post
title: Show spinner while exporting in Angular TreeGrid component | Syncfusion
description: Learn how to show and hide a spinner while exporting data in the Syncfusion Angular TreeGrid component using spinner methods and export events.
platform: ej2-angular
control: Show spinner while exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Show spinner while exporting in Angular TreeGrid component

A spinner can be displayed during TreeGrid export operations using the [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showspinner) and [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidespinner) methods.

Use the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event to show the spinner before initiating export, and hide it in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexportcomplete) events after export completes.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, use **args.item.text** to determine whether "PDF Export" or "Excel Export" is being invoked, and then call the [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showspinner) method on the TreeGrid instance.

Upon completion of PDF or Excel export, call the [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidespinner) method in the corresponding event.

The following demo displays the default spinner during TreeGrid export operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs17" %}

> For detailed feature walkthroughs, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional examples for exporting and visual enhancements are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).