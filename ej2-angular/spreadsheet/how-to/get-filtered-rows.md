---
layout: post
title: Get the filtered rows in the Angular Spreadsheet component | Syncfusion
description: Learn here all about how to get the filtered rows in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more. 
platform: ej2-angular
control: Spreadsheet
documentation: ug
domainurl: ##DomainURL##
---

## Get the filtered rows in Angular Spreadsheet component

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfiltering) property and [`applyFilter`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/filter-cs2" %}