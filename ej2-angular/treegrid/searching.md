---
layout: post
title: Searching in Angular TreeGrid component | Syncfusion
description: Learn here all about Searching in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular TreeGrid component

The Syncfusion Angular TreeGrid component includes a powerful built-in searching feature that facilitates searching for specific data within the tree grid. This feature enables efficient filtering of tree grid records based on user-defined search criteria, making it easier to locate and display relevant information. Whether you have a large dataset or simply need to find specific records quickly, the search feature provides a convenient solution.

To enable the searching feature in the tree grid, set the [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowsearching) property to **true**.

To further enhance the search functionality, you can integrate a search text box directly into the tree grid's toolbar. This allows you to enter search criteria conveniently within the tree grid interface. To add the search item to the tree grid's toolbar, use the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property and add **Search** item.

Here is an example that demonstrates the default searching feature of the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs1" %}

> The clear icon is shown in the Tree Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the Tree Grid.

## Initial search

By default, the search operation is performed on the tree grid data after the tree grid renders. However, there might be scenarios where need to perform a search operation on the tree grid data during the initial rendering of the tree grid. In such cases, you can make use of the initial search feature provided by the tree grid.

To apply search at initial rendering, need to set the following properties in the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#searchsettings) object.

Property |Description
--------|-----
**fields** |Specifies the [fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettingsModel/#fields) in which the search operation needs to be performed.
**operator** |Specifies the [operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator) to be used for the search operation.
**key** |Specifies the [key](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#key) value to be searched.
**ignoreCase** |[ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignorecase) specifies whether the search operation needs to be case-sensitive or case-insensitive. 
**ignoreAccent** |[ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettingsModel/#ignoreaccent) property will ignore the diacritic characters or accents in the text during a search operation.

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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs2" %}

> By default, tree grid searches all the bound column values. However, you can customize this behavior by definining the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#fields) property.

## Search operators

Search operators are symbols or keywords used to define the type of comparison or condition applied during a search operation. They help specify how the search key should match the data being searched. The [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator) property can be used to define the search operator in the tree grid. 

By default, the `searchSettings.operator` is set to **contains**, which returns the values contains the search key. The following operators are supported in searching:

Operator |Description
-----|-----
startswith |Checks whether a value begins with the specified value.
endswith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains with the specified value.
wildcard |Processes one or more search patterns using the **"*"** symbol, returning values that match the given patterns.
like |Processes a single search pattern using the **"%"** symbol, retrieving values that match the specified pattern.
equal |Checks whether a value equal to the specified value.
notequal |Checks whether a value not equal to the specified value.

These operators provide flexibility in defining the search behavior and allow you to perform different types of comparisons based on your requirements.

The following example demonstrates how to set the `searchSettings.operator` property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs3" %}

## Search by external button

The TreeGrid component allows you to perform searches programmatically, enabling you to search for records using an external button instead of relying solely on the built-in search bar. This feature provides flexibility and allows for custom search implementations within your application. To search for records using an external button, you can utilize the [search](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#search) method provided by the TreeGrid component.

The `search` method allows you to perform a search operation based on a search key or criteria. The following example demonstatres how to implement `search` by an external button using the following steps:

1. Add a button element outside of the TreeGrid component.
2. Attach a click event handler to the button.
3. Inside the event handler, get the reference of the TreeGrid component.
4. Invoke the `search` method of the tree grid by passing the search key as a parameter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs4/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs5" %}

## Search on each key stroke

The search on each keystroke feature in the Tree Grid enables you to perform real-time searching of tree grid data as they type in the search text box. This functionality provides a seamless and interactive searching experience, allowing you to see the search results dynamically updating in real time as they enter each keystroke in the search box

To achieve this, you need to bind the `keyup` event to the search input element inside the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the TreeGrid component. 

In the following example, the `created` event is bound to the TreeGrid component, and inside the event handler, the `keyup` event is bound to the search input element. Whenever the `keyup` event is triggered, the current `search` string is obtained from the `search` input element, and the [search]((https://ej2.syncfusion.com/angular/documentation/api/treegrid/#search)) method is invoked on the tree grid instance with the current search string as a parameter. This allows the search results to be displayed in real-time as you type in the search box.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs6" %}

> Search on each key stroke approach may affect the performance of the application when dealing with a large number of records.

## Perform search based on column formatting

By default, the search operation considers the underlying raw data of each cell for searching. However, in some cases, you may want to search based on the formatted data visible to the users. To search data based on column formatting, you can utilize the `grid.valueFormatterService.fromView` method within the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event. This method allows you to retrieve the formatted value of a cell and perform searching on each column using the **OR** predicate.

The following example demonstrates how to implement searching based on column formatting in the Tree Grid. In the `actionBegin` event, retrieve the search value from the [getColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumns) method. Iterate through the columns and check whether the column has a format specified. If the column has a format specified, use the `grid.valueFormatterService.fromView` method to get the formatted value of the cell. If the formatted value matches the search value, set the **OR** predicate that includes the current column filter and the new filter based on the formatted value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs7" %}

## Perform search operation in Grid using multiple keywords

In addition to searching with a single keyword, the TreeGrid component offers the capability to perform a search operation using multiple keywords. This feature enables you to narrow down your search results by simultaneously matching multiple keywords. It can be particularly useful when you need to find records that meet multiple search conditions simultaneously. This can be achieved by the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event of the Tree Grid.

The following example demonstrates, how to perform a search with multiple keywords in the tree grid by using the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid#query) property when the `requestType` is searching in the `actionBegin` event. The searchString is divided into multiple keywords using a comma (,) as the delimiter. Each keyword is then utilized to create a `predicate` that checks for a match in the desired columns. If multiple keywords are present, the predicates are combined using an **OR** condition. Finally, the Tree Grid's `query` property is updated with the constructed `predicate`, and the Tree Grid is refreshed to update the changes in the UI.

On the other hand, the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event is used to manage the completion of the `search` operation. It ensures that the search input value is updated if necessary and clears the `query` when the search input is empty.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs8" %}

## How to ignore accent while searching

By default, the searching operation in the TreeGrid component does not ignore diacritic characters or accents. However, there are cases where ignoring diacritic characters becomes necessary. This feature enhances the search experience by enabling data searching without considering accents, ensuring a more comprehensive and accurate search  and it can be achieved by utilizing the [searchSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignoreaccent) property of the TreeGrid component as **true**.

The following example demonstrates how to define the `ignoreAccent` property within the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#searchsettings) property of the tree grid. Additionally, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is included to modify the value of the `searchSettings.ignoreAccent` property. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered, and the `searchSettings.ignoreAccent` property is updated accordingly. This functionality helps to visualize the impact of the `searchSettings.ignoreAccent` setting when performing search operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs9" %}

> * You can set `searchSettings.ignoreAccent` property along with other search settings such as [fields](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#fields), [operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#operator), and [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#ignoreaccent) to achieve the desired search behavior.
> * This feature works only for the characters that are not in the ASCII range.
> * This feature may have a slight impact on search performance.

## Highlight the search text

The TreeGrid component allows you to visually highlight search results within the displayed data. This feature helps you to quickly identify where the search items are found within the displayed data. By adding a style to the matched text, you can quickly identify where the search items are present in the tree grid.

To achieve search text highlighting in the Tree Grid, you can utilize the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event. This event is triggered for each cell during the Tree Grid rendering process, allowing you to customize the cell content based on your requirements.

The following example demonstrates how to highlight search text in tree grid using the `queryCellInfo` event. The `queryCellInfo` event checks if the current cell is in the desired search column, retrieves the cell value, search keyword and uses the `includes` method to check if the cell value contains the search keyword. If it does, the matched text is replaced with the same text wrapped in a `span` tag with a `customcss` class. You can then use CSS to define the `customcss` class and style to easily identify where the search keywords are present in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs10" %}

## Clear search by external button

The TreeGrid component provides a capability to clear searched data in the tree grid. This functionality offers the ability to reset or clear any active search filters that have been applied to the tree grid's data.

To clear the searched tree grid records from an external button, you can set the [searchSettings.key](https://ej2.syncfusion.com/angular/documentation/api/treegrid/searchSettings/#key) property to an `empty` string to clear the search text. This property represents the current search text in the search box.

The following example demonstrates how to clear the searched records using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/searching-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/searching-cs11" %}

> You can also clear the searched records by using the clear icon within the search input field.

## See also

* [How to perform search by using Wildcard and LIKE operator filter](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filtering)