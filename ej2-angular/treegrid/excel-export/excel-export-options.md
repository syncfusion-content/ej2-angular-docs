---
layout: post
title: Excel export options in Angular Treegrid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export options 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Angular Treegrid component

## To customize excel export

The excel export provides an option to customize mapping of the treegrid to excel document.

### Export hidden columns

Excel Export provides an option to export hidden columns of TreeGrid by defining the `includeHiddenColumn` as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs4" %}

### Show or hide columns on exported excel

You can show a hidden column or hide a visible column while printing the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExportComplete) events.

In the `toolbarClick` event, based on `args.item.text` as `Excel Export`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `Duration` as a hidden column in the treegrid. While exporting, we have changed `Duration` to visible column and `StartDate` as hidden column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs5" %}

### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExportProperties).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/excel-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/excel-export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/excel-export-cs6" %}