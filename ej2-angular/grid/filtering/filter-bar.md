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

The filter bar feature provides a user-friendly way to filter data in the Syncfusion Angular Grid. It displays an input field for each column, allowing you to enter filter criteria and instantly see the filtered results.

By defining the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true, then filter bar row will be rendered next to header which allows you to filter data. You can filter the records with different expressions depending upon the column type.

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

The following example demonstrates how to activate default filtering in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-bar-cs1" %}

> To enable or dynamically switch the filter type, you must set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filtersettings/#type) as **FilterBar**.

## Filter bar modes

The Syncfusion Angular Grid component refers to two different ways in which the grid's filter bar can operate when filtering criteria are applied. These modes, "OnEnter Mode" and "Immediate Mode," offer users different experiences and behaviors when interacting with the filter bar.

**OnEnter Mode:**
By settings [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#mode) as **OnEnter**, the filter bar captures the filter criteria entered but doesn't initiate filtering until the **Enter** key is pressed. This allows multiple criteria modifications without triggering immediate filtering actions.

**Immediate Mode:**
By settings [filterSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#mode) as **Immediate**, the filter bar instantly applies filtering as filter criteria are entered. Filtering actions take place as soon as criteria are input or modified, providing real-time previews of filtering results.

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

The Syncfusion Angular Grid component provides an option to display filter text within the pager, indicating the current filtering status. Enabling this feature provides you with a clear understanding of the applied filters and the criteria used for filtering.

To enable the display of filter text within the pager, you should set the [showFilterBarStatus](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbarstatus) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) configuration.

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

In the Syncfusion Angular Grid component, you have the ability to modify the filter operator for a column directly within the user interface during the filtering process through the filter bar cell. For instance, the default operator for filtering string-type columns in the filter bar is "startswith". Now, you can customize the default operator for a specific column using the filter operator feature.

To achieve this functionality, you can enable the  [showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#showfilterbaroperator) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).

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

In the Syncfusion Angular Grid, you can prevent filtering for a specific column by utilizing the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) object and setting it to **false**. This feature is useful when you want to disable filtering options for a particular column.

Here's an example that demonstrates how to remove the filter bar for the **CustomerID** column in Syncfusion Angular Grid:

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

By default, the filter bar is set to a disabled mode for template columns in the grid. However, in certain cases, you may want to hide the filter bar for a template column to provide a customized filtering experience.

To hide the filter bar for a template column, you can use the [filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column/). This property allows you to define a custom template for the filter bar of a column.

Here's an example that demonstrates how to hide the filter bar for a template column in the Syncfusion Angular Grid:

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

The [filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) feature in the Syncfusion Angular Grid allows you to customize the components displayed in the filter bar. Normally, a text box is the default element rendered in the filter bar cell. This flexibility allows you to use various components, such as datepicker, numerictextbox, combobox, and multiselect, within the filter bar based on your specific requirements.

To utilize this feature, you can define a custom template for the filter bar by setting the `filterBarTemplate` property of a column in your Angular application:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-bar-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/filter-bar-cs7/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-bar-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/filter-bar-cs7" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
* [How to change loading indicator in Angular Grid](../data-binding/data-binding#loading-animation)