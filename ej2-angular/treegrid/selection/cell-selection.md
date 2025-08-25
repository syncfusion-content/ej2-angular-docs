---
layout: post
title: Cell selection in Angular TreeGrid component | Syncfusion
description: Learn how to perform cell selection in the Syncfusion Angular TreeGrid component, including selection modes, programmatic APIs, and retrieving selected cell indexes.
platform: ej2-angular
control: Cell selection
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Angular TreeGrid component

Cell selection in the TreeGrid can be performed using either mouse (click and drag) or keyboard arrow keys (up, down, left, right).

TreeGrid supports two types of cell selection modes, which can be set using the [`selectionSettings.cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#cellselectionmode) property:

* **Flow** (default): Selects a range of cells from the starting to ending index, including all intermediate cells within rows.
* **Box**: Selects a rectangular range of cells, based on the starting and ending column indexes, including all intermediate cells within those columns across the selected rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs1" %}

> For cell selection, set [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to `Cell` or `Both`.

## Perform cell selection programmatically

To programmatically select a cell, use the [`selectCell`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcell) method, passing the cell index as a parameter. To clear cell or row selections, call the [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearselection) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs11" %}

## Get selected row cell indexes

To retrieve the indexes of selected row cells, use the [`getSelectedRowCellIndexes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowcellindexes) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs12" %}