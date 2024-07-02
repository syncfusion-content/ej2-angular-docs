---
layout: post
title: Searching in Angular Spreadsheet component | Syncfusion
description: Learn here all about Searching in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular Spreadsheet component

Find and Replace helps you to search for the target text and replace the found text with alternative text within the sheet or workbook. You can use the [`allowFindAndReplace`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowfindandreplace) property to enable or disable the Find and Replace functionality.

> * The default value for `allowFindAndReplace` property is `true`.

## Find

Find feature is used to select the matched contents of a cell within the sheet or workbook. It is extremely useful when working with large set of data source.

**User Interface**:

Find can be done by any of the following ways:

* Select the Search icon in the Ribbon toolbar or use `Ctrl + F` key to open the Find dialog.
* Use find Next and find Previous buttons to search the given value in the workbook.
* Select the option button in Find dialog to open the Find and Replace dialog. Then, select the below properties for enhanced searching.

> * `Search within`: To search the target in a sheet (default) or in an entire workbook.
> * `Search by`: It enhance the search, either By Rows (default), or By Columns.
> * `Match case`: To find the matched value with case sensitive.
> * `Match exact cell contents`: To find the exact matched cell value with entire match cases.

* Using [`find()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#find) method to perform find operation.

## Replace

Replace feature is used to change the find contents of a cell within sheet or workbook. Replace All is used to change all the matched contents of a cell within sheet or workbook.

**User Interface**:

Replace can be done by any of the following ways:

* Use `Ctrl + H` key to open the Find and Replace dialog.
* Use Replace button to change the found value in sheet or workbook.
* Using Replace All button, all the matched criteria can be replaced with find value based on sheet or workbook.
* Using [`replace()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#replace) method to perform replace operation by passing the argument `args.replaceby` as `replace`.
* Using [`replace()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#replace) method to perform replace all operation by passing the argument `args.replaceby` as `replaceall`.

## Go to

Go to feature is used to navigate to a specific cell address in the sheet or workbook.

**User Interface**:

* Use `Ctrl + G` key to open the Go To dialog.
* Use [`goTo()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#goto) method to perform Go To operation.

In the following sample, searching can be done by following ways:

* Select the Home tab in the Ribbon toolbar, and then select the Search icon.
* Enter any value in the search textbox.
* Select the next (or) previous button to find the entered value in the spreadsheet.
* You can have more options to find values by selecting the more options in the search toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/searching-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/searching-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/searching-cs1" %}

## Limitations

* Undo/redo for Replace All is not supported in this feature.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.