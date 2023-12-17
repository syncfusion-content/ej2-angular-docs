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

Filtering is a powerful feature in the Syncfusion Grid component that enables you to selectively view data based on specific criteria. It allows you to narrow down large datasets and focus on the information you need, thereby enhancing data analysis and decision-making.

To use filter, inject **FilterService** in the provider section of **AppModule**.

To enable filtering in the Grid, you need to set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property of the Grid component to true. Once filtering is enabled, you can configure various filtering options through the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings) property of the Grid component. This property allows you to define the behavior and appearance of the filter.

Here is an example that demonstrates the default filtering feature of the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs1" %}

> * You can apply and clear filtering, by using [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply an initial filter, you need to specify the filter criteria using the [predicate](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate) object in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns). The `predicate` object represents the filtering condition and contains properties such as field, operator, and value.

Here is an example of how to configure the initial filter using the `predicate` object:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs2" %}

## Filter operators

The Syncfusion Grid component provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property in the [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#columns) object.

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
* Filter Bar with the [filterSettings.showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#showFilterBarOperator) property enabled on the Grid [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

>By default, the Syncfusion Angular Grid uses different filter operators for different column types. The default filter operator for string type columns is **startsWith**, for numerical type columns is **equal**, and for boolean type columns is also **equal**.

## Diacritics filter

The diacritics filter feature in the Syncfusion Angular Grid is useful when working with text data that includes accented characters (diacritic characters). By default, the grid ignores these characters during filtering. However, if you need to consider diacritic characters in your filtering process, you can enable this feature by setting the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) property to true using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).

Consider the following sample where the `ignoreAccent` property is set to true in order to include diacritic characters in the filtering process:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs4" %}

## Filtering with case sensitivity

The Syncfusion Angular Grid provides the flexibility to enable or disable case sensitivity during filtering. This feature is useful when you want to control whether filtering operations should consider the case of characters. It can be achieved by using the  [enableCaseSensitivity](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#enablecasesensitivity) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings) of the grid.

Below is an example code demonstrating how to enable or disable case sensitivity while filtering:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs5" %}

## Enable different filter for a column

The Syncfusion Angular Grid offers the flexibility to customize filtering behavior for different columns by enabling various types of filters such as **Menu**, **Excel**, **Checkbox**. This feature allows you to tailor the filtering experience to suit the specific needs of each column in your grid. For example, you might prefer a menu-based filter for a category column, an Excel-like filter for a date column, and a checkbox filter for a status column. 

It can be achieved by adjusting the [column.filter.type](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property based on your requirements.

Here's an example where the menu filter is enabled by default for all columns, but you can dynamically modify the filter types through a dropdown:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/filter-cs6/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs6" %}

## Change default filter operator for particular column

The Syncfusion Grid component provides the flexibility to change the default filter operator for a particular column. By default, the filter operator for string-type columns is **startsWith**, for numerical-type columns is **equal**, and for boolean-type columns is also **equal**. However, you may need to customize the filter operator to better match the nature of the data in a specific column. This can be achieved using the operator property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#filtersettings) configuration.

Here's an example that demonstrates how to change the default filter operator column :

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/filter-cs7/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs7" %}

## How to get filtered records

Retrieving filtered records in the Syncfusion Angular Grid is essential when you want to work with data that matches the currently applied filters. You can achieve this using available methods and properties in the grid component.

**1.Using the getFilteredRecords() method**

The [getFilteredRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getfilteredrecords) method is used to obtain an array of records that match the currently applied filters on the grid.

This method retrieves an array of records that match the currently applied filters on the grid.

Here's an example of how to get the filtering data in a Syncfusion grid using the `getFilteredRecords` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/filter-cs9/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs9" %}

**2.Using the properties in the FilterEventArgs object**

Alternatively, you can use the properties available in the [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs) object to obtain the filter record details.

* [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#columns): This property returns the collection of filtered columns.

* [currentFilterObject](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilterobject): This property returns the object that is currently filtered.

* [currentFilteringColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilteringcolumn): This property returns the column name that is currently filtered.

To access these properties, you can use the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event handler as shown below:

```typescript
actionComplete(args: FilterEventArgs) {
    var column = args.columns;
    var object = args.currentFilterObject;
    var name = args.currentFilteringColumn;
}
```

## Clear filtering using methods

The Syncfusion Grid provides a method called [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearfiltering) to clear the filtering applied to the grid. This method is used to remove the filter conditions and reset the grid to its original state. 

Here's an example of how to clear the filtering in a Syncfusion grid using the `clearFiltering` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs10" %}

## Filtering events

Filtering events allow you to customize the behavior of the grid when filtering is applied. You can prevent filtering for specific columns, show messages to users, or perform other actions to suit your application's needs.

To implement filtering events in the Syncfusion Angular Grid, you can utilize the available events such as [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete). These events allow you to intervene in the filtering process and customize it as needed.

In the given example, the filtering is prevented for **ShipCity** column during `actionBegin` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-cs11" %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to apply initial filter on custom binding in Angular Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)