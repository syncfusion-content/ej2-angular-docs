---
layout: post
title: Selection in Angular TreeGrid component | Syncfusion
description: Learn all about selection in the Syncfusion Angular TreeGrid component, including single/multiple selection, selection modes, toggle selection, and touch interactions.
platform: ej2-angular
control: Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular TreeGrid component

Selection allows highlighting or selecting rows or cells within the TreeGrid. Selection can be performed with mouse clicks or keyboard arrow keys. To disable selection in the TreeGrid, set [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowselection) to `false`.

TreeGrid supports two types of selection, configurable using [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type):

* **Single** (default): Allows selection of only a single row or cell at a time.
* **Multiple**: Allows multiple rows or cells to be selected. Hold the CTRL key and click desired rows or cells to select multiple items. Hold SHIFT and click to select a range of rows or cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs8" %}

## Selection mode

Selection mode can be configured with [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#mode):

* **Row** (default): Selects entire rows.
* **Cell**: Selects individual cells only.
* **Both**: Allows simultaneous row and cell selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs9" %}

## Toggle selection

Toggle selection enables selecting and unselecting specific rows or cells by clicking them. Enable toggle selection by setting the [`enableToggle`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#enabletoggle) property in `selectionSettings` to `true`. Clicking on a selected row or cell will deselect it, and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs10" %}

> If multi-selection is enabled, the first click on any selected row (without pressing Ctrl) will clear previous selections. The second click on the same row will deselect it.

## Touch interaction

On touch devices, tapping anywhere on a TreeGrid row will select it. A popup appears for multi-row selection. To select multiple rows or cells, tap the popup and then tap the desired items.

![Multi row selection](../images/selection.jpg)

To select multiple rows or cells using touch, use the multi-selection popup:

![Multi row or cell selection](../images/mselection.jpg)

> For multi-selection on touch devices, [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type) must be set to **Multiple**.

The screenshot below shows TreeGrid touch selection in a device context:

![Touch Interaction](../images/touch-selection.jpg)

> For more about TreeGrid features, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). For live examples, see the [Angular TreeGrid demo](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).