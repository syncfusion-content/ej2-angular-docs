---
layout: post
title: Angular Gantt Row Selection API Guide | Syncfusion
description: Explore how to configure and customize row selection in the Syncfusion Angular Gantt Chart component using API methods and events.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular Gantt Chart component

The Angular Gantt Chart component supports row selection using mouse clicks or keyboard navigation (arrow keys). This enables users to highlight, manipulate, or trigger actions on selected task rows.

## Single row selection

You can enable single row selection in the Gantt Chart component by setting [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#type) to **Single**. This allows you to select only one task row at a time.

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

You can enable multiple row selection in the Gantt Chart component by setting  [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings#type) to **Multiple**. This allows selection of more than one task row at a time by holding down the **Ctrl** key while clicking on multiple rows.

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

- On initial row selection: `rowSelecting` triggers first, followed by `rowSelected`.

- When selecting a different row:

  - [rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowselecting) is followed by [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowdeselected) to deselect the previously selected row.

  - Then, [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowselected) triggers for the newly selected row.

This sequence ensures proper handling of row transitions during selection and deselection.

## Select row at initial rendering

You can highlight or pre-select a specific row during the initial rendering of the Gantt Chart component by setting the [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt#selectedrowindex) property. This selects the row at the specified index when the Gantt loads.

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

> You can also select single or multiple rows during the initial load by using the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectrow) or [selectRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectrows) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) event.

## Select rows externally

You can programmatically or dynamically select single rows, multiple rows, or a range of rows in the Angular Gantt Chart component.

### Single row selection

Select a single row in the Gantt Chart component by calling the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectrow) method with the desired row index.

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

Select multiple rows in the Gantt Chart component by using the [selectRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectrows) method with an array of row indexes.

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

Select a range of rows in the Gantt Chart component by using the [selectRowsByRange](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#selectrowsbyrange) method with the start and end row indexes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-range-method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-range-method/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-range-method" %}

## Enable multi row selection without Ctrl key

You can enable simple multi-row selection by setting the `enableSimpleMultiRowSelection` property to **true** in the Grid configuration during the [created](https://ej2.syncfusion.com/angular/documentation/gantt/events#created) event. This allows multiple rows to be selected individually through clicks without holding the Ctrl key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selection-multiple/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selection-multiple/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selection-multiple" %}

## Get selected row information

To access selected row details in the Angular Gantt Chart component:

- [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#getselectedrowindexes) – Returns the index positions of selected rows.
- [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#getselectedrecords) – Provides the corresponding data objects.
- [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection#getselectedrows) – Retrieves the actual row elements from the DOM.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/row-selected-indexes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/selection/row-selected-indexes/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/row-selected-indexes/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/row-selected-indexes" %}


> **Note:** The Gantt Chart component supports keyboard navigation for row selection. Use arrow keys to move focus and `Enter` or `Space` to select rows. Ensure accessibility compliance by providing appropriate ARIA attributes.

## Customize row selection action

You can customize row selection in the Gantt Chart using [rowSelecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowselecting), [rowSelected](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowselected), [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdeselecting), and [rowDeselected](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdeselected) events, which allow dynamic control over selection behavior based on specific conditions.

The following demonstrates how row selection and background color updates are handled in the Angular Gantt Chart component:

- In `rowSelecting`, selection is prevented when `TaskID` is 2.
- In `rowSelected`, rows with **Progress** > 40 are highlighted with a green background.
- In `rowDeselected`, rows with **Progress** ≤ 40 are styled with mauve background color.
- In `rowDeselecting`, if **Progress** > 80, the background color changes to yellow.

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