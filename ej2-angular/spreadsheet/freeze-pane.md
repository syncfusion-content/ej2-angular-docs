---
layout: post
title: Freeze pane in Angular Spreadsheet component | Syncfusion
description: Learn here all about Freeze pane in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Freeze pane 
documentation: ug
domainurl: ##DomainURL##
---

# Freeze pane in Angular Spreadsheet component

Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using the [`frozenRows`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#frozenrows) and [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#frozencolumns) properties inside the [`Sheet`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#sheets) property.

## Apply freezepanes on UI

**User Interface**:

In the active spreadsheet, click the cell where you want to create freeze panes. Freeze panes can be done in any of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#freezepanes) method programmatically.

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Rows` item.
* You can specify the number of frozen rows using the `frozenRows` property inside the `Sheet` property.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen columns. Frozen columns can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Columns` item.
* You can specify the number of frozen columns using the `frozenColumns` property inside the `Sheet` property.

In this demo, the frozenColumns is set as ‘2’, and the frozenRows is set as ‘2’. Hence, the two columns on the left and the top two rows are frozen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/freezepane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/freezepane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/freezepane-cs1" %}

## Limitations

Here, we have listed out the limitations with Freeze Panes feature.

* Merging the cells between freeze and unfreeze area.
* If images and charts are added inside the freeze area cells, their portion in the unfreeze area will not move when scrolling.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)