---
layout: post
title: Editing in Angular Spreadsheet component | Syncfusion
description: Learn here all about Editing in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Editing in Angular Spreadsheet component

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowediting) property to enable or disable the editing feature.

## Edit cell

You can start editing by one of the following ways,

* Double click a cell to start the edit mode.
* Press `F2` key to edit the active cell.
* Use formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
* Using the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#startedit) method.

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Perform mouse click on any other cell rather than the current editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
* Using the [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#endedit) method.

## Cancel editing

To cancel the editing without saving the changes, you can use one of the following ways,

* Press `ESCAPE` key, this will remove the editable state and update the unchanged cell content.
* Using the [`closeEdit`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#closeedit) method.

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#closeedit) method in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/editing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/editing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/editing-cs1" %}

## Limitations

* Text overflow in cells is not supported in Editing.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
