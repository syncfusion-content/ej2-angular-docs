---
layout: post
title: Angular Grid Filter Bar | Syncfusion
description: Learn how to use Filter Bar in Angular Data Grid with expression operators, configurable modes, column settings, custom templates, and filter status display.
platform: ej2-angular
control: Filter bar
documentation: ug
domainurl: ##DomainURL##
---

# Filter Bar in Angular Data Grid

The filter bar feature provides a row of input fields directly below the grid headers, enabling column-based data filtering. Each column displays an input field where filter criteria can be entered, and filtering can be applied depending on the configured filter mode to show matching results.

## Enable filter bar

To activate the filter bar, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowfiltering) property to `true` and include the `FilterService` in the providers array.

**Filter bar expressions:**

Filter expressions are operators that define the comparison between entered values and data in the Data Grid. The available operators depend on the column data type.

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

> Disable filtering for specific columns by setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowfiltering) to `false`.

## Filter bar modes

The Syncfusion Angular Data Grid filter bar operates in two distinct modes that determine when filtering actions are triggered. These modes support different interaction patterns based on application requirements and performance considerations.

**onEnter Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#mode) is set to `onEnter`, the filter bar captures filter criteria but delays filtering execution until the <kbd>Enter</kbd> key is pressed. This mode is beneficial when:

- Complex filter criteria need to be entered without triggering multiple filtering operations.
- Large datasets are involved where immediate filtering may cause performance issues.
- Filter criteria need to be reviewed and confirmed before applying changes.

**Immediate Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#mode) is set to `Immediate`, the filter bar applies filtering as filter criteria are typed or modified, after a debounce delay defined by the [immediateModeDelay](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#immediatemodedelay) property (default 1500 ms). This mode provides:

- Real-time filtering feedback and immediate result previews.
- A responsive search experience for quick data lookups.
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

## Display filter status in pager

The [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#showfilterbarstatus) property displays the current filter criteria in the grid pager area. This provides a clear summary of active filters without examining each column's filter bar input.

**When to use**: Enable this option for complex multi-column filters to maintain awareness of all active filtering criteria. This is particularly useful when filters are applied across columns that are scrolled out of view.

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

## Show or hide filter operators in the filter bar

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

## Hide filter bar for template column

Template columns can be used to render images, action buttons, or other custom components that are inherently non-filterable. To completely hide the filter bar input for a template column, use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#filtertemplate) property with an empty element.

The following example demonstrates hiding the filter bar for a template column:

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
- The default text input does not provide optimal interaction for specific data types.
- Specialized filtering controls are required for complex data structures.
- Application design requires consistent component usage across the interface.
- Guided input through dropdown selections or date pickers is required.

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

* [How to perform filter using Wildcard and LIKE filter operators](./filtering#wildcard-and-like-filters)
* [How to change the loading indicator in Angular Data Grid](../data-binding/data-binding#loading-indicator)