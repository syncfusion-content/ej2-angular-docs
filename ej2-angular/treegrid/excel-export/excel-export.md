---
layout: post
title: Excel export in Angular TreeGrid component | Syncfusion
description: Learn about exporting data from the Syncfusion Angular TreeGrid component of Essential JS 2 to Excel documents, including features, module setup, customization, and state persistence.
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

> For more information, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. You can also explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to discover how to present and manipulate data.
