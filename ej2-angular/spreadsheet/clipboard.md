---
layout: post
title: Clipboard in Angular Spreadsheet component | Syncfusion
description: Learn here all about Clipboard in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Angular Spreadsheet component

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#enableclipboard) property in Spreadsheet.

> By default, the `enableClipboard` property is true.

## Cut

It is used to cut the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the [`cut`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#cut) method.

## Copy

It is used to copy the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#copy) method.

## Paste

It is used to paste the clipboard data to the selected range, rows or columns. You have the following options in Paste,

* `Paste Special` - You can paste the values with formatting.
* `Paste` - You can paste only the values without formatting.

It also performs for external clipboard operation. If you perform cut and paste, clipboard data will be cleared, whereas in copy and paste the clipboard contents will be maintained. If you perform paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
* Using the [`paste`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#paste) method.

> If you use the Keyboard shortcut key for cut (`Ctrl + X`) | copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/clipboard-cs1" %}

## Prevent the paste functionality

The following example shows, how to prevent the paste action in spreadsheet. In [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#actionbegin) event, you can set `cancel` argument as false in paste request type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/clipboard-cs2" %}

## Limitations

* External clipboard is not fully supported while copying data from another source and pasting into a spreadsheet, it only works with basic supports (Values, Number, cell, and Text formatting).
* If you copy =SUM(A2,B2) and paste, the formula reference will change depending on the pasted cell address but we don't have support for nested formula(formula reference will be same).
* Clipboard is not supported with conditional formatting (values only pasting).
* We have limitation while copying the whole sheet data and pasting it into another sheet.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.
