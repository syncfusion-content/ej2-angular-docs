---
layout: post
title: Filtering in Angular Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Grid component

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings).

To use filter, inject **FilterService** in the provider section of **AppModule**.

<!---
The Grid supports two types of filter, they are
* Filter bar
* Excel
-->

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs9" %}

> * You can apply and clear filtering, by using [`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate) object in [`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs10" %}

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

## Wildcard and LIKE operator filter

**Wildcard** and **LIKE** filter operators filters the value based on the given string pattern, and they apply to string-type columns. But it will work slightly differently.

### Wildcard filtering

The **Wildcard** filter can process one or more search patterns using the "*" symbol, retrieving values matching the specified patterns.

* The **Wildcard** filter option is supported for the DataGrid that has all search options.

**For example:**

Operator |Description
-----|-----
a*b |Everything that starts with "a" and ends with "b".
a* |Everything that starts with "a".
*b |Everything that ends with "b".
*a* |Everything that has an "a" in it.
*a*b* |Everything that has an "a" in it, followed by anything, followed by a "b", followed by anything.

![WildcardFilter](../images/wildcard_search.gif)

### LIKE filtering

The **LIKE** filter can process single search patterns using the "%" symbol, retrieving values matching the specified patterns. The following Grid features support LIKE filtering on string-type columns:

* Filter Menu
* Filter Bar with the [`filterSettings.showFilterBarOperator`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#showFilterBarOperator) property enabled on the Grid [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

> By default, the [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) value is **equal**.

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) as **true**.

In the following sample, type **aero** in **Name** column to filter diacritic characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-diacritics-cs1" %}

## Filter bar

You can customize default filter bar component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **Name** column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-template-cs2" %}

## Filter menu

You can customize default filter menu component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **ShipName** column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-template-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-template-cs3" %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to apply initial filter on custom binding in Angular Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)