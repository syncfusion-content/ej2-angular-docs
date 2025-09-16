---
layout: post
title: Filter bar in Angular Grid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter bar 
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in Angular Grid component

The filter bar feature in the Syncfusion Angular Grid provides an intuitive and immediate way to filter data by displaying input fields directly below each column header. This filtering approach allows users to enter filter criteria and instantly view filtered results, making it ideal for scenarios requiring quick data searches and real-time filtering feedback.

The filter bar is particularly effective for applications where users need to perform frequent filtering operations or when working with datasets that require immediate visual feedback during the filtering process. Unlike other filtering methods, the filter bar maintains visibility of filter criteria, providing users with a clear understanding of applied filters at all times.

To enable the filter bar, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property to true. This renders a filter bar row next to the header, allowing users to filter records using different expressions based on column data types.

**Filter bar expressions:**
You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

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

> To enable or dynamically switch the filter type, set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filtersettings/#type) as **FilterBar**.

## Filter bar modes

The Syncfusion Angular Grid filter bar operates in two distinct modes that determine when filtering actions are triggered. These modes provide different user experiences based on application requirements and user preferences.

**OnEnter Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#mode) is set to **OnEnter**, the filter bar captures filter criteria but delays filtering execution until the **Enter** key is pressed. This mode is beneficial when:

- Users need to enter complex filter criteria without triggering multiple filtering operations
- Working with large datasets where immediate filtering might cause performance issues
- Users prefer to review and confirm their filter criteria before applying changes

**Immediate Mode:**

When [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#mode) is set to **Immediate**, the filter bar applies filtering instantly as users type or modify filter criteria. This mode provides:

- Real-time filtering feedback and immediate result previews
- Enhanced user experience for quick data searches
- Instant visual confirmation of filter effects

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

The Syncfusion Angular Grid provides functionality to display current filter status within the pager component. This feature helps users understand applied filters and filtering criteria without examining individual filter bar cells.

Enable this feature by setting the [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbarstatus) property to true within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) configuration. The pager will then display a summary of active filters, providing clear visibility into the current filtering state.

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

The Syncfusion Angular Grid allows users to modify filter operators directly within the filter bar cells during the filtering process. This feature enables dynamic operator changes without accessing separate dialog boxes or menus.

For example, while the default operator for string-type columns is "startswith," users can change this to other operators like "contains," "endswith," or "equal" directly within the filter bar interface.

Enable this functionality by setting the [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbaroperator) property to true within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) configuration.

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

You can disable filtering for specific columns by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property to false within the [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) configuration. This feature is useful when certain columns contain data that should not be filtered, such as action columns or calculated fields.

When filtering is disabled for a column, the filter bar input field for that column will not be rendered, providing a cleaner interface and preventing unnecessary filtering attempts.

The following example demonstrates how to disable the filter bar for the **CustomerID** column:

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

By default, the filter bar is disabled for template columns since template content may not correspond directly to filterable data. However, you can explicitly hide the filter bar for template columns to provide a cleaner interface.

Use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) to define custom filter bar behavior for template columns. Setting this property to an empty template effectively hides the filter bar for that column.

The following example demonstrates how to hide the filter bar for a template column:

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

The [filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) feature enables you to replace the default text box in filter bar cells with custom components. This powerful customization option allows you to implement specialized filtering interfaces using various Syncfusion components such as DatePicker, NumericTextBox, ComboBox, or MultiSelect.

Custom filter bar templates are particularly useful when:
- Default text input doesn't provide optimal user experience for specific data types
- You need specialized filtering controls for complex data structures
- Application design requires consistent component usage across the interface
- Users need guided input through dropdown selections or date pickers

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

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)