---
layout: post
title: Excel export in Angular Treegrid component | Syncfusion
description: Learn here all about Excel export in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Angular Treegrid component

The excel export allows exporting TreeGrid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method for exporting. To enable Excel export in the treegrid, set the [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowexcelexport-boolean) as true.

To use excel export, You need to inject the `ExcelExport` module in treegrid.

You can check this video to learn about how to perform Exporting and its customization in Angular TreeGrid.

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

## Persist collapsed state

You can persist the collapsed state in the exported document by defining `isCollapsedStatePersist` property as true in `TreeGridExcelExportProperties` parameter of [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs8" %}

> The CSV export allows exporting tree grid data to text document. Use the [`csvExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelexport) method for exporting. To enable CSV export in the treegrid, set the [`allowCsvExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowexcelexport-boolean) as true.

## Custom data source

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs9" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
