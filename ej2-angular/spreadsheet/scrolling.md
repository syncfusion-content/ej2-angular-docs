---
layout: post
title: Scrolling in Angular Spreadsheet component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Spreadsheet component

Scrolling helps you to move quickly to different areas of the worksheet. It moves faster if we use horizontal and vertical scroll bars. Scrolling can be enabled by setting the [`allowScrolling`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowscrolling) as true.

> By default, the `allowScrolling` property is true.

You have the following options in Scrolling by using [`scrollSettings`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/scrollSettings).

* Finite scrolling.
* Virtual scrolling.

## Finite Scrolling

Finite scrolling supports two type of modes in scrolling. You can use the [`isFinite`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/scrollSettings/#isfinite) property in [`scrollSettings`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/scrollsettings) to specify the mode of scrolling.

* Finite - This mode does not create a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/scrollSettings/#isfinite) property as `true`.

* Infinite - This mode creates a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/scrollSettings/#isfinite) property as `false`.

> By Default, the `isFinite` property is `false`.

## Virtual Scrolling

* Virtual scrolling allows you to load data that you require (load data based on viewport size) without buffering the entire huge database. You can set the `enableVirtualization` property in `scrollSettings` as `true`.

In virtual scrolling `enableVirtualization` is set to true means, it allows you to load the spreadsheet data while scrolling.

> By Default, the `enableVirtualization` property is `true`.

**User Interface**:

You can scroll through the worksheet using one of the following ways,

* Using the `arrow` keys.
* Using the Horizontal and Vertical`scroll` bars.
* Using the `mouse` wheel.

## Finite scrolling with defined rows and columns

If you want to perform scrolling with defined rows and columns, you must define `rowCount` and `colCount` in the [`sheets`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#sheets) property and set `isFinite` as true and `enableVirtualization` as false in `scrollSettings`.

The following code example shows the finite scrolling with defined rows and columns in the spreadsheet. Here, we used rowCount as 20 and colCount as 20, after reaching the 20th row or 20th column you can't able to scroll.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/scrolling-cs1" %}

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.