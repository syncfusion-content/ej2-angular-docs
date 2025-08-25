---
layout: post
title: Searching in Angular Grid component | Syncfusion
description: Learn here all about Searching in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular Grid component

The Syncfusion Angular Grid includes a powerful built-in searching feature that enables users to search for specific data within the grid. This feature provides efficient filtering of grid records based on user-defined search criteria, making it easier to locate and display relevant information. Whether working with large datasets or needing to find specific records quickly, the search feature offers a convenient and responsive solution.

To enable the searching feature, inject the **SearchService** in the providers section of your **AppModule** and set the [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsearching) property to **true**. This activates the search functionality within the grid component.

To enhance the search functionality, integrate a search text box directly into the grid's toolbar. This provides users with convenient access to search criteria within the grid interface. Add the search item to the grid's toolbar using the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property with the **Search** item included.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs1" %}

> * The clear icon appears in the Grid search text box when focused or after typing a single character. Clicking the clear icon clears both the search text and the search results in the Grid.
> * In the Syncfusion Grid component, searching operates independently for parent and child grids. Searching within the parent grid filters only parent records, while searching within the child grid filters only child records. The component does not support simultaneous searching across both parent and child grids.

## Initial search

By default, search operations are performed after the grid renders. However, scenarios exist where search operations need to occur during initial grid rendering. The initial search feature addresses this requirement by allowing predefined search criteria to be applied when the grid loads.

To apply search during initial rendering, configure the following properties within the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#searchsettings) object:

Property |Description
--------|-----
**fields** |Specifies the [fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettingsModel/#fields) in which the search operation will be performed.
**operator** |Defines the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#operator) used for the search operation.
**key** |Sets the [key](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#key) value to be searched.
**ignoreCase** |Determines whether the [search operation](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#ignorecase) is case-sensitive or case-insensitive.
**ignoreAccent** |Controls whether the [search operation](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettingsModel/#ignoreaccent) ignores diacritic characters or accents in the text.

The following example demonstrates how to configure initial search in the grid using the `searchSettings` property with these specific values:

1. `fields`: **CustomerID** restricts the search to the 'CustomerID' field only.
2. `operator`: **contains** finds records containing the specified search key.
3. `key`: **Ha** serves as the initial search term applied when the grid renders.
4. `ignoreCase`: **true** enables case-insensitive searching.
5. `ignoreAccent`: **true** ignores diacritic characters or accents during search operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs2" %}

> By default, the grid searches all bound column values. Customize this behavior by defining the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#fields) property with specific column fields.

## Search operators

Search operators are symbols or keywords that define the type of comparison or condition applied during search operations. They specify how the search key should match the data being searched. Use the [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#operator) property to define the search operator in the grid.

The default `searchSettings.operator` is **contains**, which returns values containing the search key. The following operators are supported for searching:

Operator |Description
-----|-----
startswith |Checks whether a value begins with the specified value.
endswith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
wildcard |Processes one or more search patterns using the **"*"** symbol, returning values that match the given patterns.
like |Processes a single search pattern using the **"%"** symbol, retrieving values that match the specified pattern.
equal |Checks whether a value equals the specified value.
notequal |Checks whether a value does not equal the specified value.

These operators provide flexibility in defining search behavior and enable different types of comparisons based on specific requirements.

The following example demonstrates how to configure the `searchSettings.operator` property by responding to dropdown value changes using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs11" %}

## Search by external button

The Syncfusion Grid component supports programmatic searches, enabling record searches using external buttons instead of relying solely on the built-in search bar. This feature provides flexibility and allows custom search implementations within applications. Use the [search](https://ej2.syncfusion.com/angular/documentation/api/grid/#search) method provided by the Grid component to search for records using external buttons.

The `search` method performs search operations based on a search key or criteria. The following example demonstrates how to implement external button searching using these steps:

1. Add a button element outside the grid component.
2. Attach a click event handler to the button.
3. Get the grid component reference inside the event handler.
4. Invoke the `search` method of the grid by passing the search key as a parameter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs3" %}

## Search specific columns

By default, the [search](https://ej2.syncfusion.com/angular/documentation/api/grid/#search) functionality searches all visible columns. To search only specific columns, define the targeted column field names in the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#fields) property. This approach narrows down the search to a targeted set of columns, which proves particularly useful when working with large datasets or grids containing numerous columns.

The following example demonstrates how to search specific columns such as **CustomerID**, **Freight**, and **ShipCity** using the `searchSettings.fields` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs4" %}

## Search on each key stroke

The search on each keystroke feature in the Syncfusion Grid enables real-time searching of grid data as users type in the search text box. This functionality provides a seamless and interactive searching experience, allowing users to see search results updating dynamically in real-time as they enter each keystroke in the search box.

To implement this feature, bind the `keyup` event to the search input element inside the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event of the grid component.

In the following example, the `created` event is bound to the grid component. Inside the event handler, the `keyup` event is bound to the [search](https://ej2.syncfusion.com/angular/documentation/api/grid/#search) input element. When the `keyup` event triggers, the current search string is obtained from the search input element, and the `search` method is invoked on the grid instance with the current search string as a parameter. This enables search results to display in real-time as users type in the search box.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs6" %}

> The search on each keystroke approach may impact application performance when working with large numbers of records.

## Perform search based on column formatting

By default, search operations consider the underlying raw data of each cell. However, in some cases, searching based on the formatted data visible to users becomes necessary. To search data based on column formatting, utilize the `grid.valueFormatterService.fromView` method within the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. This method retrieves the formatted value of a cell and performs searching on each column using the **OR** predicate.

The following example demonstrates how to implement searching based on column formatting in the Grid. In the `actionBegin` event, the search value is retrieved using the [getColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumns) method. The process iterates through columns and checks whether each column has a specified format. If a column has a format specified, the `grid.valueFormatterService.fromView` method retrieves the formatted value of the cell. When the formatted value matches the search value, an **OR** predicate is set that includes the current column filter and the new filter based on the formatted value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs10" %}

## Perform search operation in Grid using multiple keywords

In addition to single keyword searches, the Grid component supports search operations using multiple keywords. This feature enables users to narrow down search results by simultaneously matching multiple keywords, which proves particularly useful when finding records that meet multiple search conditions simultaneously. This functionality can be achieved through the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event of the Grid.

The following example demonstrates how to perform searches with multiple keywords in the grid using the `query` property when the `requestType` is searching in the `actionBegin` event. The searchString is divided into multiple keywords using a comma (,) as the delimiter. Each keyword creates a `predicate` that checks for matches in the desired columns. When multiple keywords are present, the predicates are combined using an **OR** condition. Finally, the Grid's `query` property is updated with the constructed `predicate`, and the Grid is refreshed to reflect the changes in the UI.

The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event manages the completion of the search operation. It ensures the search input value is updated when necessary and clears the `query` when the search input is empty.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs7" %}

> This approach enables search operations in the grid using multiple keywords for more refined search results.

## How to ignore accent while searching

By default, searching operations in the Grid component do not ignore diacritic characters or accents. However, scenarios exist where ignoring diacritic characters becomes necessary. This feature enhances the search experience by enabling data searching without considering accents, ensuring more comprehensive and accurate search results. This can be achieved by setting the [searchSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#ignoreaccent) property of the Grid component to **true**.

The following example demonstrates how to define the `ignoreAccent` property within the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#searchsettings) property of the grid. Additionally, an [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is included to modify the value of the `searchSettings.ignoreAccent` property. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event triggers, and the `searchSettings.ignoreAccent` property updates accordingly. This functionality helps visualize the impact of the `searchSettings.ignoreAccent` setting during search operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs9" %>

> * The [searchSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#ignoreaccent) property can be combined with other search settings such as [fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#fields), [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#operator), and [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#ignorecase) to achieve desired search behavior.
> * This feature works only for characters that are not in the ASCII range.
> * This feature may have a slight impact on search performance.

## Highlight the search text

The Syncfusion Grid component enables visual highlighting of search results within displayed data. This feature helps users quickly identify where search items are found within the displayed data. By applying styles to matched text, users can easily identify where search items are present in the grid.

To achieve search text highlighting in the Grid, utilize the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event. This event triggers for each cell during the Grid rendering process, enabling customization of cell content based on specific requirements.

The following example demonstrates how to highlight search text in the grid using the `queryCellInfo` event. The `queryCellInfo` event checks if the current cell is in the desired search column, retrieves the cell value and search keyword, and uses the `includes` method to check if the cell value contains the search keyword. When a match is found, the matched text is replaced with the same text wrapped in a `span` tag with a `customcss` class. CSS can then be used to define the `customcss` class and apply styling to easily identify where search keywords are present in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs8" %}

## Clear search by external button

The Syncfusion Grid component provides the capability to clear searched data in the grid. This functionality offers the ability to reset or clear any active search filters that have been applied to the grid's data.

To clear searched grid records from an external button, set the [searchSettings.key](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings/#key) property to an empty string to clear the search text. This property represents the current search text in the search box.

The following example demonstrates how to clear searched records using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs5" %}

> Searched records can also be cleared using the clear icon within the search input field.

## Retrieving searched records using a button click

The Syncfusion Angular Grid enables users to retrieve searched records using an external button. This functionality allows capturing the search text entered in the toolbar and filtering the data accordingly.

To achieve this, use the [actionComplete](../api/grid/#actionComplete) event. This event triggers when a search action is performed, providing access to the search text. The captured search string can then be used with the `executeQuery` method of the `DataManager` to retrieve matching records.

The following example demonstrates how to retrieve searched records using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/retrieve-searched-records-cs1" %}

## See also

* [How to perform search by using Wildcard and LIKE operator filter](./filtering/filtering#wildcard-and-like-operator-filter)