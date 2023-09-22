---
layout: post
title: Selection in Angular Grid component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Grid component

Selection provides an option to highlight a row or cell or column. Selection can be done through simple Mouse down or Arrow keys. To disable selection in the Grid, set the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowselection) to false.

The grid supports two types of selection that can be set by using the [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type).They are:

* **Single** - The **Single** value is set by default. Allows you to select only a single row or cell or column.
* **Multiple** - Allows you to select multiple rows or cells or columns.

To perform the multi-selection, press and hold CTRL key and click the desired rows or cells  or columns.

To select range of rows or cells or columns, press and hold the SHIFT key and click the rows or cells or columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/selection-cs13" %}

## Selection mode

Grid supports three types of selection mode which can be set by using [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode). They are:

* **Row** - The **row** value is set by default. Allows you to select rows only.
* **Cell** - Allows you to select cells only.
* **Both** - Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/selection-cs14" %}

## Touch interaction

When you tap Grid row on touch screen devices, then the tapped row is selected.
Also, it will show a popup ![Multi row selection](../images/selection.jpg)  for multi-row-selection.
To select multiple rows or cells, tap the popup![Multi row or cell selection](../images/mselection.jpg)  and then tap the desired rows or cells.

> For multi-selection, It requires the selection [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to be **Multiple**.

The following screenshot represents a Grid touch selection in the device.

![Touch Interaction](../images/touch-selection.jpg)

## See Also

* [Animate the Grid selected row in Angular Grid](https://www.syncfusion.com/forums/156448/animate-the-grid-selected-row-in-angular-grid)
* [How can I disable the row selection on context menu click in Angular Grid](https://www.syncfusion.com/forums/143449/how-can-i-disable-the-row-selection-on-context-menu-click-in-angular-grid)
* [How to retrieve the selected records in the Grid in Angular Grid](https://www.syncfusion.com/forums/150200/how-to-retrieve-the-selected-records-in-the-grid-in-angular-grid)
* [How to prevent tab to focus on a cell when inside a grid in Angular Grid](https://www.syncfusion.com/forums/156333/how-to-prevent-tab-to-focus-on-a-cell-when-inside-a-grid-in-angular-grid)
* [How to select the first row of the Grid, after the grid refreshed in Angular Grid](https://www.syncfusion.com/forums/152715/how-to-select-the-first-row-of-the-grid-after-the-grid-refreshed-in-angular-grid)
* [How to select the multiple row at initial render in Angular Grid](https://www.syncfusion.com/forums/156142/how-to-select-the-multiple-row-at-initial-render-in-angular-grid)
* [How to cancel the selection of first record while adding a new record in Angular Grid](https://www.syncfusion.com/forums/163325/how-to-cancel-the-selection-of-first-record-while-adding-a-new-record-in-angular-grid)