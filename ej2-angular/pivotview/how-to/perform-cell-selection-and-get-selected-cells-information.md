---
layout: post
title: Angular Pivot Table: Select Cells & Get Data | Syncfusion
description: Select and retrieve data from cells in the Syncfusion EJ2 Angular Pivot Table. Learn to manage user interaction and data extraction.
platform: ej2-angular
control: Perform cell selection and get selected cells information 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection and Getting Cell Information

You can select any cell/row by setting the property `gridSettings.allowSelection` as `true` where the selected cells can be highlighted. It can be done through mouse down or arrow keys.

## Selection mode

It supports four types of selection mode that can be set by the property `gridSettings.selectionSettings.mode`. They are,

* **`Row`**: The `Row` value is set by default, and allows you to select only rows.
* **`Column`**: Allows you to select only columns.
* **`Cell`**: Allows you to select only cells.
* **`Both`**: Allows you to select rows and columns at the same time.

## Selection type

It supports two types of selection that can be set by the property `gridSettings.selectionSettings.type`. They are,

* **`Single`**: The `Single` value is set by default, and it only allows selection of a single row or a column or a cell.
* **`Multiple`**: Allows you to select multiple rows or cells.
To perform the multi-selection, press and hold CTRL key and click the desired rows or columns or cells. To select range of rows or cells, press and hold the SHIFT key and click the rows or columns or cells.

## Event

The event `cellSelected` fires on every cell/row/column on selected/deselected operations and it provides the selected cells information with its corresponding column and row headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs168/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs168/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs168" %}
