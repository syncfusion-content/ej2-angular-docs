---
layout: post
title: Insert a sheet programmatically and make the inserted sheet as the active sheet in the Angular Spreadsheet component | Syncfusion
description: Learn here all about insert a sheet programmatically and make the inserted sheet as the active sheet in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more. 
platform: ej2-angular
control: Spreadsheet
documentation: ug
domainurl: ##DomainURL##
---

## Insert a sheet programmatically and make it the active sheet in Angular Spreadsheet component

A sheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data. Using [insertSheet](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#insertsheet) method, you can insert one or more sheets at the desired index. Then, you can make the inserted sheet as active sheet by focusing the start cell of that sheet using the [goTo](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#goto) method.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/insert-sheet-change-active-sheet-cs1" %}