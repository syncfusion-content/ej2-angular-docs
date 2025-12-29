---
layout: post
title: Check box selection in Angular TreeGrid component | Syncfusion
description: Learn how to enable and configure checkbox selection in theAngular TreeGrid component, including selection modes, persistence
platform: ej2-angular
control: Check box selection
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in Angular TreeGrid component

Checkbox Selection provides an option to select multiple TreeGrid records with help of checkbox in each row.

To render a checkbox in each TreeGrid row, add a column with type set to `CheckBox` using the column [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs2" %}

> By default, selection is allowed via clicking either a row or its checkbox. To restrict selection to only the checkbox, set the [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#checkboxonly) property to `true`.
> To persist selection across operations, set [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#persistselection) to `true`. For persisted selection, at least one column must be defined as a primary key using the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#isprimarykey) property.

## Checkbox selection mode

Checkbox selection supports two modes, which can be set using [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#checkboxmode):

* `Default`: Multiple rows can be selected by clicking their checkboxes or rows sequentially.

* `ResetOnRowClick`: Clicking a row resets previous selections. To select multiple rows, press and hold the **CTRL** key while clicking desired rows. To select a range, press and hold the **SHIFT** key and click the rows.

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

## Conditional row selection

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/angular/documentation/api/treegrid#isRowSelectable) callback. This allows selection to be controlled by custom business logic, ensuring that only rows meeting specific conditions can be selected. The callback receives each row’s data and returns "true" to allow selection or "false" to prevent it.

Local data: The callback runs once when the TreeGrid initializes and evaluates all records because the full dataset is already available on the client.

Remote data: The callback runs only for the rows displayed on the current page when the TreeGrid first loads. It runs again whenever the TreeGrid fetches new data such as during paging, filtering, or sorting to re-evaluate the newly visible rows.

In the following sample, selection is disabled for rows where the "Progress" column has the value "Completed".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs14" %}
