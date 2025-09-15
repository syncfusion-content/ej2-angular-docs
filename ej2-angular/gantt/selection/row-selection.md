---
layout: post
title: Row selection in Angular Gantt component | Syncfusion
description: Learn here all about Row selection in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular Gantt component

Row selection in the Gantt component enables selecting specific rows or ranges of rows using mouse clicks or keyboard navigation (up, down, left, right arrows). This feature is useful for highlighting, manipulating, or performing actions on selected tasks within the chart.

## Single row selection

You can enable single row selection in the Gantt chart by setting [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) to **Single**. This allows you to select only one task row at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-single-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-single-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-single-selection" %}

## Multiple row selection

You can enable multiple row selection in the Gantt chart by setting  [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) to **Multiple**. This allows selection of more than one task row at a time by holding down the **Ctrl** key while clicking on multiple rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-multiple-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-multiple-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-multiple-selection" %}

## Row selection event sequence

- On initial row selection, the `rowSelecting` event triggers first, followed by `rowSelected` event.

- When another row is selected:

  - [rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) is followed by [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselected) to deselect the previously selected row.

  - Finally, [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselected) triggers for the newly selected row.

This sequence ensures proper handling of row transitions during selection and deselection.

## Select row at initial rendering

You can highlight or pre-select a specific row during the initial rendering of the Gantt chart by setting the [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectedrowindex) property. This selects the row at the given index when the chart loads.

The following example selects the row at index 5 during initial load:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selectrow-initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selectrow-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selectrow-initial-cs1" %}

> You can also select single or multiple rows during the initial load by using the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrow) or [selectRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrows) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event.

## Select rows externally

You can programmatically or dynamically select single rows, multiple rows, or a range of rows in the Gantt chart.

### Single row selection

Select a single row in the Gantt chart by calling the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrow) method with the desired row index.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-single-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-single-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-single-method" %}

### Multiple rows selection

Select multiple rows in the Gantt chart by using the [selectRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrows) method with an array of row indexes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-multiple-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-multiple-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-multiple-method" %}

### Range of rows selection

Select a range of rows in the Gantt chart by using the [selectRowsByRange](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrowsbyrange) method with the start and end row indexes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-range-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-range-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-range-method" %}

## Get selected row information

To get selected row information in a Gantt chart, use [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#getselectedrowindexes) to fetch the index positions, [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#getselectedrecords) to access the corresponding data objects, and [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#getselectedrows) to retrieve the actual row elements. These methods allow you to work with selected tasks based on their index, data, or DOM reference.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-selected-indexes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-selected-indexes/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-selected-indexes" %}

## Customize row selection action

You can customize row selection in the Gantt chart using [rowSelecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowselecting), [rowSelected](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowselected), [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdeselecting), and [rowDeselected](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdeselected) events, which allow dynamic control over selection behavior based on specific conditions.

The following demonstrates how row selection and background color updates are managed in a Gantt chart. Row selection is cancelled in the `rowSelecting` event when `TaskID` is 2. Background color changes are based on `Progress` values: in `rowSelected`, if Progress > 40, the row is highlighted with `rgba(203, 246, 205, 1)`; in `rowDeselected`, if Progress ≤ 40, the color changes to `#e1838eff`; and in `rowDeselecting`, if Progress > 80, it changes to `#f5f54bff`.

The following sample demonstrates
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-selection-events/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-selection-events/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-selection-events" %}