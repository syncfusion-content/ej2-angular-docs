---
layout: post
title: Excel export in Angular TreeGrid component | Syncfusion
description: Learn about exporting data from the Syncfusion Angular TreeGrid component of Essential JS 2 to Excel documents.
platform: ej2-angular
control: Excel export 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Angular TreeGrid component

Excel export in the TreeGrid component enables exporting TreeGrid data to an Excel document. The [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method is used for exporting data. To enable Excel export in TreeGrid, set the [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowexcelexport-boolean) property to true.

Inject the `ExcelExport` module into the TreeGrid to use the Excel export feature.

Watch this video to learn how to perform exporting operations and customize them in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=cgVdlF7zzfE" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs7" %}

## Show spinner while exporting

Showing a spinner while exporting in the TreeGrid enhances the experience by displaying a spinner during the export process. This feature provides a visual indication of the export progress, improving the understanding of the exporting process.

To show or hide a spinner while exporting theTreeGrid, you can utilize the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidespinner) methods provided by the TreeGrid within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

The `toolbarClick` event is triggered when a toolbar item in the TreeGrid is clicked. Within the event handler, the code checks if the clicked item is related with Excel export. If a match is found, the `showSpinner` method is used on the TreeGrid instance to display the spinner.

To hide the spinner after the exporting is completed, bind the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexportcomplete) event and use the `hideSpinner` method on the TreeGrid instance to hide the spinner.

The following example demonstrates how to show and hide the spinner during Excel export in a TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs17" %}

## Persisting collapsed state

The collapsed state of nodes in the exported Excel document can be persisted by setting the `isCollapsedStatePersist` property to true within the `TreeGridExcelExportProperties` parameter of the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs8" %}

> The CSV export feature allows exporting TreeGrid data to a text document. Use the [`csvExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method for exporting. To enable CSV export in TreeGrid, set the [`allowCsvExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowexcelexport-boolean) property to true.

## Custom data source

Excel export provides the capability to define a data source dynamically before exporting. To export data dynamically, assign a value to the `dataSource` property in `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs9" %}

## Exporting Custom Aggregates in Tree Grid  
The Tree Grid enables exporting custom aggregates, which summarize column data, to an Excel document using the `ExcelAggregateQueryCellInfo` event.  
 
In the provided example, the customAggregateFn function computes the item count for a selected category, while the `ExcelAggregateQueryCellInfo` event customizes the exported cell values in the Excel document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-angular/samples/treegrid/excel-export-cs10" %}

## Passing additional parameters to the server while exporting

Passing additional parameters to the server when exporting data in the Syncfusion Angular TreeGrid involves providing flexibility to include extra information or customize the export process based on specific requirements.

You can achieve this by utilizing the query property and the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event. Within the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property, you can invoke the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method to add parameters to the request.

The following example demonstrates how to pass additional parameters to the server when Excel exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically **recordcount** as **12**, are passed using the `addParams` method and displayed as a message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs11" %}

> For more information, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. You can also explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to discover how to present and manipulate data.
