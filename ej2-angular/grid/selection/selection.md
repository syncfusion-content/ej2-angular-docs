---
layout: post
title: Selection in Angular Grid component | Syncfusion
description: Learn how to enable and use selection in the Syncfusion Angular Grid component, including selecting rows, cells, columns, touch interactions, toggling selection, and selection persistence.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Grid component

Selection in the Grid component enables users to select specific cells, rows, or columns interactively using mouse clicks, arrow keys, or touch gestures. This feature is useful for highlighting, manipulating, or performing actions on selected items in the Grid.

To disable selection, set the [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowselection) property to **false**.

The selection type is set using [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type):

* **Single** (default): Only a single row, cell, or column can be selected at a time.
* **Multiple**: Allows multiple selection for rows, cells, or columns.

For multi-selection: press and hold CTRL and click desired rows/cells/columns.  
To select a range: press and hold SHIFT and click the desired range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs13" %}

> The Grid loads basic selection features and the `SelectionService` automatically, so you do not need to inject it manually.

## Selection mode

The Grid lets you control the selection mode with [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode):

* **Row** (default): Allows selection of rows only.
* **Cell**: Allows selection of cells only.
* **Both**: Allows selection of rows and cells at the same time.

Example: Change selection mode dynamically with DropDownList:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs14" %}

## Touch interaction

Grid selection supports touch devices:

**Single Row Selection**: Tap a row to select it.

**Multi-Row Selection**: Tap a row, then the floating popup, then tap additional rows to select multiple.

![Multi row selection](../images/selection.jpg) 

**Multi-Row or Cell Selection**: Use the floating popup to choose and tap to select multiple rows/cells.

![Multi row or cell selection](../images/mselection.jpg)

> Multi-selection requires the selection [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to be **Multiple**.

![Touch Interaction](../images/touch-selection.jpg)

## Toggle selection

Enable row/cell/column toggling by setting [`selectionSettings.enableToggle`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#enabletoggle) to **true**. Click a selected row, cell, or column to unselect it, and vice versa.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs10" %}

> * In multi-selection mode, clicking a selected row without the Ctrl key deselects all other rows, keeping only that row selected. A second click       deselects it.
> * Toggle selection works for all types. If `checkboxOnly` is **true**, toggle selection from direct click is disabled.

## Clear all selection programmatically

Use the [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#clearselection) method to remove all selected rows, cells, or columns.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs11" %}

> In **Both** mode, calling `clearCellSelection` first clears cell selections, then `clearRowSelection` clears row selections. The order determines which is cleared first.
> Use `clearRowSelection`, `clearCellSelection`, and `clearColumnSelection` to clear row, cell, or column selections specifically.

## Persist selection

The Persist Selection feature retains selected items in a grid during operations like sorting, filtering, or refreshing. It ensures seamless tracking of selections across grid updates.

Set [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#persistselection) to **true** to retain selected items after data operations or grid refresh.

> * For persist selection, ensure at least one column is a primary key.
> * Persistence is not supported for cell selection, only for multiple row/column selection.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-presistence-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-presistence-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-presistence-cs2" %}

## See Also

* [Animate the Grid selected row in Angular Grid](https://www.syncfusion.com/forums/156448/animate-the-grid-selected-row-in-angular-grid)
* [How can I disable the row selection on context menu click in Angular Grid](https://www.syncfusion.com/forums/143449/how-can-i-disable-the-row-selection-on-context-menu-click-in-angular-grid)
* [How to retrieve the selected records in the Grid in Angular Grid](https://www.syncfusion.com/forums/150200/how-to-retrieve-the-selected-records-in-the-grid-in-angular-grid)
* [How to prevent tab to focus on a cell when inside a grid in Angular Grid](https://www.syncfusion.com/forums/156333/how-to-prevent-tab-to-focus-on-a-cell-when-inside-a-grid-in-angular-grid)
* [How to select the first row of the Grid, after the grid refreshed in Angular Grid](https://www.syncfusion.com/forums/152715/how-to-select-the-first-row-of-the-grid-after-the-grid-refreshed-in-angular-grid)
* [How to select the multiple row at initial render in Angular Grid](https://www.syncfusion.com/forums/156142/how-to-select-the-multiple-row-at-initial-render-in-angular-grid)
* [How to cancel the selection of first record while adding a new record in Angular Grid](https://www.syncfusion.com/forums/163325/how-to-cancel-the-selection-of-first-record-while-adding-a-new-record-in-angular-grid)
