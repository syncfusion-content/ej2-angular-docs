---
layout: post
title: Check box selection in Angular TreeGrid component | Syncfusion
description: Learn how to enable and configure checkbox selection in the Syncfusion Angular TreeGrid component, including selection modes, persistence, and row-only selection.
platform: ej2-angular
control: Check box selection
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in Angular TreeGrid component

Checkbox Selection provides an option to select multiple TreeGrid records with help of checkbox in each row.

To render a checkbox in each TreeGrid row, add a column with type set to `CheckBox` using the column [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs2" %}

> By default, selection is allowed via clicking either a row or its checkbox. To restrict selection to only the checkbox, set the [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#checkboxonly) property to `true`.
> To persist selection across operations, set [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#persistselection) to `true`. For persisted selection, at least one column must be defined as a primary key using the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property.

## Checkbox selection mode

Checkbox selection supports two modes, which can be set using [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#checkboxmode):

* **Default** (default): Multiple rows can be selected by clicking their checkboxes or rows sequentially.

* **ResetOnRowClick**: Clicking a row resets previous selections. To select multiple rows, press and hold the CTRL key while clicking desired rows. To select a range, press and hold the SHIFT key and click the rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs3" %}

> Checkbox Selection is intended for row selection only and is not compatible with cell selection mode.

## Conditional row selection using isRowSelectable

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#isRowSelectable) property. This feature enables dynamic business logic to determine which rows can be selected, ensuring that only rows meeting specific conditions are selectable. The `isRowSelectable` property accepts a function that evaluates each row’s data and returns **true** to enable selection or **false** to disable it. The function is executed for the entire data source before rendering, making it suitable for scenarios where selection must be restricted based on criteria.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs14" %}