---
layout: post
title: Angular Grid - Selection | Syncfusion
description: Angular Grid selection provides a complete overview of selection modes, APIs, and configuration to control selection lifecycle and UI feedback.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Grid Component

Selection in the Grid component provides interactive selection of specific cells, rows, or columns within the grid. Selection can be performed through mouse clicks, arrow keys (up, down, left, and right), or touch. This functionality highlights and allows manipulation or actions on specific cells, rows, or columns within the grid.

**Disabling selection**

To disable selection in the grid, set the [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid#allowselection) property to `false`.

**Selection types**

The Grid supports two selection types, configurable via the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property:

* `Single`: Enables selection of only one row, cell, or column at a time.
* `Multiple`: Enables selection of multiple rows, cells, or columns.

**Multi-selection controls**

* <kbd>CTRL</kbd> **+ Click:** Select or deselect separate rows, cells or columns.
* <kbd>SHIFT</kbd> **+ Click:** Select a range of rows, cells or columns between two points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs13" %}

> By default, the Grid component includes essential selection functionality. The Selection module is automatically available without requiring explicit injection. Refer to the [Selection API](https://ej2.syncfusion.com/angular/documentation/api/grid/selection) for complete configuration options.

## Selection mode

The selection mode feature allows switching between different modes for selecting rows, cells, or both within the grid based on specific requirements. This feature highlights and manipulates specific rows or cells in the grid.

To configure selection mode, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property. The Grid component supports three types of selection modes:

* `Row`: Enables row selection only (default mode).
* `Cell`: Enables cell selection only.
* `Both`: Enables simultaneous row and cell selection.

The following example demonstrates dynamically enabling and changing the `selectionSettings.mode` using the `DropDownList` component:

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

The touch interaction feature in grid provides easy interaction with the grid on touch screen devices. This feature improves the experience on mobile devices and tablets, making it easier to navigate and interact with the grid's content using touch gestures.

**Single Row Selection**: 

Tapping on a row selects it immediately, providing efficient single-row selection on touch interfaces.

**Multi-Row Selection**: 

Multiple rows can be selected by tapping a row, which triggers a popup as shown in the image. Once the popup is tapped, additional rows can be selected by tapping the required rows, enabling efficient multi-row interaction.

![Multi row selection](../images/selection.jpg) 

**Multi-Row or Cell Selection**: 

The Grid supports selecting both multiple rows and cells. Tap the popup to switch to multi-row or cell selection mode, then tap desired rows or cells to select them, as shown in the following image:

![Multi row or cell selection](../images/mselection.jpg)

> For multi-selection, it requires the selection [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) to be `Multiple`.

**Touch selection example**

The following screenshot illustrates how touch selection appears on a device:

![Touch Interaction](../images/touch-selection.jpg)

## Toggle selection

Toggle selection provides efficient selection state switching by enabling single-click selection and deselection. When this feature is enabled, clicking a selected item deselects it, and clicking an unselected item selects it.

To enable the toggle selection feature, set the [selectionSettings.enableToggle](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#enabletoggle) property to `true`.

The following example demonstrates the toggle selection for cells and rows using the `selectionSettings.enableToggle` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs10" %}

> * If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.
> * Toggle selection is a feature that can be applied to all types of selections. When the [checkboxOnly](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionsettings#checkboxonly) property restricts row or cell selection to only occur through checkbox clicks. When this property is set to `true`, users cannot select rows or cells by clicking directly on them; instead, selection is only possible by clicking the corresponding checkboxes. Refer to the [Checkbox Selection](./check-box-selection#allow-selection-only-through-checkbox-click) feature to learn more about implementing checkbox-only selection.

## Clear all selection programmatically

Use the [clearSelection](https://ej2.syncfusion.com/angular/documentation/api/grid#clearselection) method to programmatically clear selected rows, cells, or columns.

The following example demonstrates clearing selection by calling the `clearSelection` method in a button click event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs11" %}

> - In `Both` mode, if calling [clearCellSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#clearcellselection) first, it will clear cell selections, and then if calling [clearRowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#clearrowselection), it will clear row selections. The order of method calls determines which type of selection is cleared first.
> - To remove a specific selection in a row, cell, or column, utilize the following methods: `clearRowSelection` for clearing row selections, `clearCellSelection` for clearing cell selections, and [clearColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#clearcolumnselection) for clearing column selections.

## Persist selection

Persist selection maintains selected items across data manipulation and grid refresh operations. This functionality maintains tracking of the selected items across different grid operations.

To enable persist selection, set the [selectionSettings.persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#persistselection) property to `true`.

> * Persist selection requires at least one "primary key" column in the grid for proper identification and retention of selected items. set the [column.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/columnmodel#isprimarykey) as `true` to define the "primary key" column.
> * The `persistSelection` feature is not supported for cell selections in the Syncfusion<sup style="font-size:70%">&reg;</sup> angular Grid component.
> * The `persistSelection` feature is only supported for grid `Multiple` type selections.

The following example demonstrates persist selection for rows and columns using the `selectionSettings.persistSelection` property:

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

* [Animate selected row](https://www.syncfusion.com/forums/156448/animate-the-grid-selected-row-in-angular-grid)
* [Disable row selection on context menu click](https://www.syncfusion.com/forums/143449/how-can-i-disable-the-row-selection-on-context-menu-click-in-angular-grid)
* [Retrieve selected records](https://www.syncfusion.com/forums/150200/how-to-retrieve-the-selected-records-in-the-grid-in-angular-grid)
* [Prevent tab focus inside grid](https://www.syncfusion.com/forums/156333/how-to-prevent-tab-to-focus-on-a-cell-when-inside-a-grid-in-angular-grid)
* [Select first row after refresh](https://www.syncfusion.com/forums/152715/how-to-select-the-first-row-of-the-grid-after-the-grid-refreshed-in-angular-grid)
* [Select multiple rows at initial render](https://www.syncfusion.com/forums/156142/how-to-select-the-multiple-row-at-initial-render-in-angular-grid)
* [Cancel selection when adding a new record](https://www.syncfusion.com/forums/163325/how-to-cancel-the-selection-of-first-record-while-adding-a-new-record-in-angular-grid)
