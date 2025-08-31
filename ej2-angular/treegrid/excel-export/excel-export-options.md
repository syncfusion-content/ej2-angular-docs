---
layout: post
title: Excel export options in Angular TreeGrid component | Syncfusion
description: Learn about customizing Excel export options in the Syncfusion Angular TreeGrid component of Essential JS 2, including hidden columns, column visibility control, and file naming.
platform: ej2-angular
control: Excel export options 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Angular TreeGrid component

## Customizing Excel export

Excel export in the TreeGrid component provides options for customizing the mapping between the TreeGrid content and the exported Excel document.

### Export hidden columns

Excel export enables the inclusion of hidden columns from the TreeGrid in the exported Excel document by setting `includeHiddenColumn` to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs4" %}

### Show or hide columns in exported Excel

You can control the visibility of columns during the Excel export process using the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExportComplete) events.

In the `toolbarClick` event, you can toggle the visibility of columns for export based on `args.item.text` being `Excel Export` by setting the `column.visible` property to `true` or `false` as needed.

In the excelExportComplete event, the column visibility state can be reverted to its previous configuration.

In the following example, the `Duration` column is hidden in the TreeGrid. While exporting, the `Duration` column is made visible and the `StartDate` column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs5" %}

### File name for the exported document

Assign a specific file name to the exported document by defining the `fileName` property in the [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExportProperties) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/excel-export-cs6" %}
