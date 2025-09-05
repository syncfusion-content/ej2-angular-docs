---
layout: post
title: Searching in Angular TreeGrid component | Syncfusion
description: Learn how to enable and customize searching in the Syncfusion Angular TreeGrid component, including search settings, operators, column-specific search, and advanced scenarios.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular TreeGrid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component provides a built-in searching feature that enables users to locate records efficiently within large datasets. This search capability allows filtering TreeGrid records based on user-defined criteria, streamlining the process of displaying relevant information.

To enable searching, set the [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowsearching) property to **true**.

To further enhance usability, a search text box can be added to the TreeGrid toolbar. Add the **Search** item to the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property to provide a convenient interface for entering search criteria.

Here is an example demonstrating the default searching feature of the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs1" %}

> The clear icon appears in the TreeGrid search text box when it contains text. Clicking the clear icon removes the search text and resets search results.

## Initial search

By default, searching operates after the TreeGrid renders. To perform a search when the TreeGrid initially loads, configure the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#searchsettings) object:

Property | Description
-------- | -----------
**fields** | Specifies the [fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettingsModel/#fields) to be searched.
**operator** | Sets the [operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator) for comparison.
**key** | Sets the [key](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#key) value to search for.
**ignoreCase** | Sets case-insensitive search using [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignorecase).
**ignoreAccent** | Ignores diacritic characters during search by enabling the [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettingsModel/#ignoreaccent) property.

The following example demonstrates how to set an initial search in the tree grid using the `searchSettings` property. The `searchSettings` property is set with the following values:

1. `fields`: **taskName** specifies that the search should be performed only in the 'taskName' field.
2. `operator`: **contains** indicates that the search should find records that contain the specified search key.
3. `key`: **plan** is the initial search key that will be applied when the grid is rendered.
4. `ignoreCase`: **true** makes the search case-insensitive.
5. `ignoreAccent`: **true** ignores diacritic characters or accents during the search operation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs2" %}

> By default, searching targets all bound columns. Use [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#fields) to restrict search to specific columns.

## Search operators

Search operators are symbols or keywords used to define the type of comparison or condition applied during a search operation. They help specify how the search key should match the data being searched. The [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator) property can be used to define the search operator in the tree grid. 

By default, the `searchSettings.operator` is set to **contains**, which returns the values contains the search key. The following operators are supported in searching:

Operator   | Description
-----------| -----------
startswith | Checks if a value starts with the specified string.
endswith   | Checks if a value ends with the specified string.
contains   | Checks if a value contains the specified string (default).
wildcard   | Searches using patterns with the **"*"** symbol.
like       | Searches using patterns with the **"%"** symbol.
equal      | Checks for exact string match.
notequal   | Checks for values not equal to the specified string.

The following example demonstrates dynamic operator selection through a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) and the DropDownList [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs3" %}

## Search by external button

The [search](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#search) method enables programmatic record searching, allowing implementation of custom search triggers such as an external button.

Follow these steps:

1. Add a button outside the TreeGrid.
2. Attach a click event handler.
3. Reference the TreeGrid component in the handler.
4. Call the `search` method with the search key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs4" %}

## Search specific columns

By default, the [search](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#search) functionality searches all visible columns. However, if you want to `search` only specific columns, you can define the specific column's field names in the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#fields) property. This allows you to narrow down the search to a targeted set of columns, which is particularly useful when dealing with large datasets or tree grids with numerous columns.

The following example demonstrates how to search specific columns such as **taskName** and **progress** by using the `searchSettings.fields` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs5" %}

## Search on each keystroke

Enable real-time searching by binding the `keyup` event to the search input inside the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the TreeGrid. With each keystroke, update search results dynamically by calling the [search](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#search) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs6" %}

> Searching on every keystroke may affect performance for large datasets.

## Search based on column formatting

By default, the search operation considers the underlying raw data of each cell for searching. However, in some cases, you may want to search based on the formatted data visible to the users. To search data based on column formatting, you can utilize the `grid.valueFormatterService.fromView` method within the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event. This method allows you to retrieve the formatted value of a cell and perform searching on each column using the **OR** predicate.

The following example demonstrates how to implement searching based on column formatting in the Tree Grid. In the `actionBegin` event, retrieve the search value from the [getColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumns) method. Iterate through the columns and check whether the column has a format specified. If the column has a format specified, use the `grid.valueFormatterService.fromView` method to get the formatted value of the cell. If the formatted value matches the search value, set the **OR** predicate that includes the current column filter and the new filter based on the formatted value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs7" %}

## Multiple keyword searching

TreeGrid supports searching with multiple keywords, allowing broader results when filtering data using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event and custom predicates.

The following example demonstrates, how to perform a search with multiple keywords in the tree grid by using the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid#query) property when the `requestType` is searching in the `actionBegin` event. The searchString is divided into multiple keywords using a comma (,) as the delimiter. Each keyword is then utilized to create a `predicate` that checks for a match in the desired columns. If multiple keywords are present, the predicates are combined using an **OR** condition. Finally, the Tree Grid's `query` property is updated with the constructed `predicate`, and the Tree Grid is refreshed to update the changes in the UI.

On the other hand, the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event is used to manage the completion of the `search` operation. It ensures that the search input value is updated if necessary and clears the `query` when the search input is empty.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs8" %}

## Ignore accent while searching

To perform accent-insensitive search, enable the [searchSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignoreaccent) property as **true**. This provides more inclusive search results, ignoring diacritic marks in text.

The following example demonstrates toggling the `ignoreAccent` property with an [EJ2 Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs9" %}

> * You can set `searchSettings.ignoreAccent` property along with other search settings such as [fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#fields), [operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator), and [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignoreaccent) to achieve the desired search behavior.
> * This feature works only for the characters that are not in the ASCII range.
> * This feature may have a slight impact on search performance.

## Highlight search text

Highlight search matches in TreeGrid cells using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event. Customize cell content by replacing matched text with a styled element.

The following example demonstrates how to highlight search text in tree grid using the `queryCellInfo` event. The `queryCellInfo` event checks if the current cell is in the desired search column, retrieves the cell value, search keyword and uses the `includes` method to check if the cell value contains the search keyword. If it does, the matched text is replaced with the same text wrapped in a `span` tag with a `customcss` class. You can then use CSS to define the `customcss` class and style to easily identify where the search keywords are present in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs10" %}

## Clear search with external button

TTo clear active search results, set [searchSettings.key](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#key) to an empty string using an external button, or use the built-in clear icon in the search field.

The following example demonstrates how to clear the searched records using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/searching-cs11" %}

> Searched records can also be cleared using the search field's clear icon.

## See also

* [How to perform search by using Wildcard and LIKE operator filter](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filtering)