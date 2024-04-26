---
layout: post
title: Cell selection in Angular Treegrid component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Angular Treegrid component

Cell Selection can be done through simple Mouse down or Arrow keys(up, down, left and right).

TreeGrid supports two types of cell selection mode which can be set by using [`selectionSettings.cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#cellselectionmode). They are:

* **`Flow`** - The `Flow` value is set by default.
Select range of cells between the start index and end index which includes in between cells of rows.
* **`Box`** - Select range of cells within the start and end column indexes which includes in between cells of rows within the range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs1" %}

> Cell Selection requires the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to be `Cell` or  `Both`.

## Perform cell selection programmatically

To perform cell selection programmatically, you can use [`selectCell`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcell) method. To use this method you need to pass the cellIndex as parameter like in the below sample.

To clear the selected rows or cells, by calling the [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearselection) method in tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs11" %}

## How to get selected row cell in tree grid

To get the selected row cell index, Use [`getSelectedRowCellIndexes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowcellindexes) method in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/selection-cs12" %}