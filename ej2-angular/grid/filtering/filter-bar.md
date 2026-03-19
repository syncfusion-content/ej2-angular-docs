---
layout: post
title: Angular Grid - Filter Bar | Syncfusion
description: Angular Grid filter bar enables filtering with expression operators, configurable modes, column settings, custom templates, and active filter status display.
platform: ej2-angular
control: Filter bar 
documentation: ug
domainurl: ##DomainURL##
---

# Filter Bar in Angular Grid Component

The filter bar feature provides a row of input fields directly below the grid headers, enabling instant data filtering. Each column displays an input field where filter criteria can be entered, and the grid updates immediately to show matching results.

To activate the filter bar, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowfiltering) property to `true` and include the `FilterService` in the providers array.

**Filter bar expressions:**

Filter expressions are operators that define how the grid compares entered values against data. The available operators depend on the column data type.

| Expression | Example | Description | Column Type |
|------------|---------|-------------|-------------|
| = | =value | Matches values exactly equal to the entered value | Number |
| != | !=value | Matches values not equal to the entered value | Number |
| > | >value | Matches values greater than the entered value | Number |
| < | <value | Matches values less than the entered value | Number |
| >= | >=value | Matches values greater than or equal to the entered value | Number |
| <= | <=value | Matches values less than or equal to the entered value | Number |
| * | *value | Matches values that start with the entered text | String |
| % | %value | Matches values that end with the entered text | String |
| N/A | N/A | Always uses equal operator for Date columns | Date |
| N/A | N/A | Always uses equal operator for Boolean columns | Boolean |

The following example demonstrates basic filter bar activation in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs1" %}

> To enable or dynamically switch the filter type, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filtersettings#type) as `FilterBar` mode.

## Filter bar modes

The Syncfusion Angular Grid filter bar operates in two distinct modes that determine when filtering actions are triggered. These modes provide different user experiences based on application requirements and user preferences.

**OnEnter Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#mode) is set to `OnEnter`, the filter bar captures filter criteria but delays filtering execution until the <kbd>Enter</kbd> key is pressed. This mode is beneficial when:

- Users need to enter complex filter criteria without triggering multiple filtering operations.
- Working with large datasets where immediate filtering might cause performance issues.
- Users prefer to review and confirm their filter criteria before applying changes.

**Immediate Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#mode) is set to `Immediate`, the filter bar applies filtering instantly as users type or modify filter criteria. This mode provides:

- Real-time filtering feedback and immediate result previews.
- Enhanced user experience for quick data searches.
- Instant visual confirmation of filter effects.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs2" %}

## Display filter text in pager

The [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#showfilterbarstatus) property displays the current filter criteria in the grid pager area. This provides a clear summary of active filters without examining each column's filter bar input.

**When to use**: Enable this when working with complex multi-column filters to maintain awareness of all active filtering criteria. This is particularly useful when filters are applied across columns that are scrolled out of view.

The following example shows filter status display in the pager:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs3" %}

## Show or hide filter bar operator in filter bar cell

The [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#showfilterbaroperator) property displays a dropdown in each filter bar cell, allowing the filter operator to be changed directly in the UI. By default, string columns use the `startswith` operator, but this can be changed to `contains`, `endswith`, `equal`, etc.

To display the operator dropdown in filter bar cells, set the [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#showfilterbaroperator) property of the `filterSettings` configuration to `true`. By default, this property is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs4" %}

## Prevent filtering for particular column

Set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowfiltering) property to `false` on a [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column) to disable the filter bar input for that specific column. Disable filtering on non-filterable columns like action (button) columns, image columns, etc.

The following example disables filtering for the "Customer ID" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs5" %}

## Hide filter bar for template column

Template columns can be used to render images, action buttons, or other custom components that are inherently non-filterable. To completely hide the filter bar input for a template column, use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filtertemplate) property with an empty element.

The following example demonstrates to hide the filter bar for a template column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/filter-bar-cs6" %}

## Filter bar template with custom component

The [filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filterbartemplate) property replaces the default text input with a custom component in the filter bar. This allows using specialized input controls like date pickers, dropdowns, or numeric inputs that provide a better filtering experience for specific data types.

Custom filter bar templates are particularly useful when:
- Default text input doesn't provide optimal user experience for specific data types.
- Specialized filtering controls are required for complex data structures.
- Application design requires consistent component usage across the interface.
- Users need guided input through dropdown selections or date pickers.

To implement a custom filter bar template, define the `filterBarTemplate` property within the column configuration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/filter-bar-cs8/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/filter-bar-cs8" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)