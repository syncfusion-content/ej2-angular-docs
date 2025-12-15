---
layout: post
title: Angular Gantt Cell Selection API | Syncfusion
description: Explore cell selection in Syncfusion Angular Gantt Chart, including single, multiple, external selection, and customization via API methods and events.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Angular Gantt component

Cell selection in the Gantt component enables interactive selection of specific cells or ranges of cells within the grid. You may select cells using mouse clicks or arrow keys (up, down, left, right). This is useful for highlighting, manipulating, or performing operations on particular gantt cells.

## Single cell selection

Single cell selection in the Gantt chart is enabled by setting [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#type) to **Single**. This allows selecting only one cell at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-single-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-single-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-single-selection" %}

## Multiple cell selection

Multiple cell selection in the Gantt chart is enabled by setting [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#type) to **Multiple**. This allows selecting multiple cells at a time by holding the **Ctrl** key while clicking on each desired cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-multiple-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-multiple-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-multiple-selection" %}

## Cell selection mode

Cell selection mode controls how cells or ranges are selected. Set the desired mode using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionsettings#cellselectionmode):

* **Flow** (default): Selects a continuous flow of cells between the start and end indices across rows.
* **Box**: Selects a rectangular range covering specified rows and columns.
* **BoxWithBorder**: Similar to Box mode, but applies a border for better visual distinction of the selected range.

> For cell selection modes, [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionsettings#mode) must be **Cell** or **Both**, and [type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionsettings#type) must be **Multiple**.

You can dynamically update `cellSelectionMode` with a DropDownList component, as shown in this example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-selection-mode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-selection-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-selection-mode" %}

## Select cells externally

You may programmatically select a single row, multiple cells, or a range of cells in the Gantt chart using built-in methods.

### Single cell selection

Select a specific cell in the Gantt chart by calling the [selectCell](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectcell) method and providing the desired row and column indexes as arguments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-single-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-single-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-single-method" %}

### Multiple cell selection

Select multiple cells in the Gantt chart by calling the [selectCells](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectcells) method and providing an array of the row and column indexes for each target cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-multiple-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-multiple-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-multiple-method" %}

## Get selected cell information

To retrieve information about selected cells in the Gantt chart, use methods like [getSelectedRowCellIndexes](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#getselectedrowcellindexes) method to get the list of row and column indexes for selected cells, and the [getCellSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#getcellselectedrecords) method to retrieve the related data objects for each selected cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-get-information/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-get-information/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-get-information" %}

## Customize cell selection action

You may customize cell selection behavior in the Gantt chart using [cellSelecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#cellselecting), [cellSelected](https://ej2.syncfusion.com/angular/documentation/gantt/events#cellselected), [cellDeselecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#celldeselecting), and [cellDeselected](https://ej2.syncfusion.com/angular/documentation/gantt/events#celldeselected) events. These events provide dynamic control over selection, allowing conditional logic and visual updates based on specific criteria.

The following sample demonstrates customizing cell selection in the Gantt chart using Syncfusion events. In the `cellSelected` event, the background color is set to `rgb(96, 158, 101)`, while selection is canceled in the `cellSelecting` event when the `TaskName` is `Perform Soil test`. During `cellDeselecting`, the text color is changed to `rgb(253, 253, 253)`, and in the `cellDeselected` event, the background color is updated to `rgb(245, 69, 69)`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/customize-cellselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/customize-cellselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/customize-cellselection-cs1" %}