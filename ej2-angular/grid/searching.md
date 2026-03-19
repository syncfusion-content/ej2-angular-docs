---
layout: post
title: Angular Grid - Searching | Syncfusion
description: Angular Grid searching covers built‑in search functionality, configuration options, case sensitivity, and examples to find and highlight data across the grid.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular Grid Component

The Syncfusion Angular Grid includes a powerful built-in searching feature that enables efficient filtering of grid records based on search criteria. This feature allows quick discovery of specific data within large datasets. Whether the application works with small or large datasets, the search feature provides a seamless solution for locating relevant records instantly.

## Enable searching

To use the searching feature, need to inject `SearchService` in the providers section.

In addition, a search text box can be placed directly in the grid [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) to provide a convenient place to enter search criteria. This can be done by injecting the `Toolbar` module into the grid and configuring the `toolbar` property with `Search` item.

The following example demonstrates enabling the `toolbar` with search option in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs1" %}

> * The clear icon is shown in the Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the grid.
> * In Syncfusion Grid component, searching operates independently for parent and child grids. Searching within the parent grid filters only parent records, and similarly, searching within the child grid filters only child records. The component does not support simultaneous searching across both parent and child grids.

## Initial search

By default, the search operation is performed after the grid renders. However, scenarios may require applying a search automatically when the grid first loads. The initial search feature enables this by setting search criteria before the grid displays its data.

To apply search at initial rendering, need to set the following properties in the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#searchsettings) object.

| Property | Description |
|----------|-------------|
| `fields` | Specifies the [fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettingsModel#fields) (column names) in which the search operates. By default, the grid searches all columns. Set this property to limit the search to specific columns. |
| `operator` | Specifies the [operator](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#operator) that determines the way the search key matches the data. Available Options include `startswith`, `endswith`, `contains`, `equal`, and others. The default value is `contains`. |
| `key` | Specifies the [key](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#key) value (search text) to be applied. The grid filters records matching this value based on the specified operator. |
| `ignoreCase` | Set [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#ignorecase) to `true` to make the search case-insensitive. For example, searching "john" finds "John", "JOHN", and "john". |
| `ignoreAccent` | Set [ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettingsModel#ignoreaccent)  to `true` to ignore diacritic characters (accents) during searching. For example, "café" matches "cafe". |

The following example demonstrates configuring initial search by setting these properties.

```js
const searchSettings = {
  fields: ['CustomerID'],
  operator: 'contains',
  key: 'Ha',
  ignoreCase: true,
  ignoreAccent: true
}
```

This configuration searches the "Customer ID" column for records containing "Ha" (case-insensitive, accent-insensitive). When the grid loads, it automatically filters to show only matching records. If these properties are misconfigured or left "undefined", the grid displays all records without initial filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs2" %}

> By default, the grid searches all visible columns. Customize this by setting the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#fields) property to limit searching to specific columns only.

## Search operators

Search operators are symbols or keywords used to define the type of comparison or condition applied during a search operation. They specify the way the search key is compared with the column data. Different operators enable different types of matching logic. The [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#operator) property configures which operator the grid uses.

By default, the `searchSettings.operator` is set to `contains`, which returns records containing the search key anywhere in the specified columns. The following operators are available.

| Operator | Description | Example |
|----------|-------------|---------|
| **startswith** | Matches records that begin with the search key | Searching "John" finds "Johnson" and "Johnathan", but not "St. John" |
| **endswith** | Matches records that end with the search key | Searching "son" finds "Johnson" and "Allison", but not "Sunshine" |
| **contains** | Matches records containing the search key anywhere | Searching "son" finds "Johnson", "Sunshine", and "Allison" |
| **wildcard** | Uses wildcards (* symbol) for pattern matching | Searching "J*n" finds "John", "Jen", "Jargon" |
| **like** | Uses SQL LIKE pattern (% symbol) for matching | Searching "J%n" finds "John", "Jen", "Jargon" |
| **equal** | Matches records exactly equal to the search key | Searching "John" finds only cells containing exactly "John" |
| **notequal** | Matches records that DO NOT equal the search key | Searching "John" finds all records except those with exactly "John" |

These operators provide flexibility in defining the search behavior and allow different types of comparisons to be performed based on the requirements.

The following example demonstrates setting the `searchSettings.operator` property based on the selected dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event of the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component.

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

The Grid component provides the [search](https://ej2.syncfusion.com/angular/documentation/api/grid#search) method, which enables programmatic searching. This allows implementing custom search interfaces outside the grid's toolbar, such as using a dedicated search button or external search box.

Implementation steps for searching via an external button:

1. Add a textbox and a button element outside the grid component.
2. Attach a `click` event handler to the button.
3. Enter the text to search in the grid.
4. In the event handler, get the entered text from the textbox.
5. Call the grid's `search` method, passing the text as a parameter.

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

By default, the [search](https://ej2.syncfusion.com/angular/documentation/api/grid#search) functionality searches across all visible columns. However, scenarios may require searching only specific columns. The [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#fields) property enables limiting the search scope to targeted columns.

This approach is useful when:
- Applications work with large grids containing many columns (reduces processing time).
- Search should focus on key columns (like "Customer ID" or "Freight") rather than all columns.
- Displaying search results for specific fields improves relevance.

The following example searches only the "Customer ID", "Freight", and "Ship Country" columns.

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

The real-time search feature enables searching as each keystroke is entered into the search box. This provides immediate, dynamic search results without requiring pressing <kbd>Enter</kbd> or clicking a button.

Implementation of real-time search:

1. Bind the `keyup` event to the search input element inside the grid's [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event.
2. The `keyup` event triggers the search method on each keystroke.
3. The grid results update in real-time as typing occurs.

In the following example, the `created` event of the grid binds the `keyup` event to the search input element. When typing occurs, the `keyup` event fires, retrieves the current search text from the input, and calls the grid's [search](https://ej2.syncfusion.com/angular/documentation/api/grid#search) method with the new text. This produces real-time filtering as typing happens.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs6" %}

> Search on each key stroke approach may affect the performance of the application when dealing with a large number of records.

## Perform search based on column formatting

By default, search operations examine the underlying raw data in cells. However, scenarios may require searching based on formatted values visible in the interface. For example, searching for dates in a specific format or currency amounts with formatting applied. This can be achieved using the `grid.valueFormatterService.fromView` method.

Implementation of searching the formatted data:

1. Use the `grid.valueFormatterService.fromView` method within the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event.
2. This method retrieves the formatted (displayed) value of a cell.
3. Compare the formatted value against the search term using `OR` logic.
4. This allows the grid to match both raw and formatted data.

In the following example, the `actionBegin` event checks if a column has formatting applied. If it does, the formatted value is retrieved and compared against the search term using `OR` logic, allowing the grid to match both raw and formatted data. In the `actionBegin` event, retrieve the search value from the [getColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumns) method. Iterate through the columns and check whether the column has a format specified. If the column has a format specified, use the `grid.valueFormatterService.fromView` method to get the formatted value of the cell. If the formatted value matches the search value, set the `OR` predicate that includes the current column filter and the new filter based on the formatted value.

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

The Grid component supports searching with multiple keywords simultaneously. This enables narrowing search results by matching multiple conditions at once. For example, finding records where CustomerID contains "A" and ShipCountry contains "US".

Implementation of multi-keyword search:

1. Use the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event.
2. Split the search text by a delimiter (comma, space, etc.).
3. Create filter predicates for each keyword.
4. Combine them using `OR` logic (records matching any keyword are shown).

In the following example, entering "France, Germany" in the search box searches for records where the country is either "France" or "Germany". Each keyword is then utilized to create a `predicate` that checks for a match in the desired columns. If multiple keywords are present, the predicates are combined using an `OR` condition. Finally, the grid's `query` property is updated with the constructed `predicate`, and the Grid is refreshed to update the changes in the UI.

On the other hand, the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event is used to manage the completion of the `search` operation. It ensures that the search input value is updated if necessary and clears the `query` when the search input is empty.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs7" %}

> By using multiple keywords, searches are more flexible and powerful. Keywords are split by a delimiter and combined using `OR` logic, meaning the grid displays records matching any of the provided keywords.

## Ignoring accents while searching

By default, the search operation distinguishes between characters with and without accents (diacritics). For example, searching for "Chai" does not find "Chäi". Set the [searchSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#ignoreaccent) property to `true` to make the search accent-insensitive.

This feature is useful when:
- Applications work with international data containing accented characters (é, ñ, ü, etc.).
- Search should match both "Chäi" and "Chai" as equivalent.
- Input searches may not include accents even though data contains them.

The following example demonstrates toggling the `ignoreAccent` property using a switch button. Additionally, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch#getting-started) component is included to modify the value of the `searchSettings.ignoreAccent` property. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event is triggered, and the `searchSettings.ignoreAccent` property is updated accordingly. This functionality helps to visualize the impact of the `searchSettings.ignoreAccent` setting when performing search operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs9" %}

> * The `ignoreAccent` property can be combined with other search settings such as `fields`, `operator`, `ignoreCase` to customize search behavior.
> * This feature applies only to non-ASCII characters (characters with diacritical marks).
> * Enabling accent-ignoring may have a slight performance impact on very large datasets.

## Highlight the search text

Search text highlighting visually emphasizes where search keywords appear in the grid. The Grid component supports highlighting matched text by styling the text with colors or background colors.

Implementation approach:

1. Use the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event.
2. This event fires for each cell during rendering.
3. Check if the current cell's column is the search column.
4. Retrieve the cell value and search keyword.
5. Replace the matched text with the same text wrapped in a `<span>` element with a "customcss" class.

Define the CSS class to apply highlighting styles (e.g., `background-color: yellow;`):

```css
.customcss {
  background-color: yellow;
  font-weight: bold;
}
```

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

The Grid component provides the capability to clear search results and reset the grid to display all records. This is useful for resetting search filters when a "Clear" or "Reset" button is clicked.

Implementation of clearing search results from an external button:

1. Set the [searchSettings.key](https://ej2.syncfusion.com/angular/documentation/api/grid/searchSettings#key) property to an empty string.
2. This property represents the current search text.
3. Setting it to empty clears the search text and resets the grid.

The following example demonstrates clearing search records using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/searching-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/searching-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/searching-cs5" %}

> Alternatively, the search box's built-in clear icon also clears search results. When the search box has focus or contains text, clicking the clear icon removes the text and resets the grid to display all records.

## Retrieving searched records using a button click

The Grid component enables retrieving the records that match the current search criteria. This allows capturing searched results for export, further processing, or display in another component.

Implementation of retrieving searched records using an external button.

1. Use the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event.
2. This event fires when a search action completes.
3. Access the search text from the event.
4. Use the `DataManager.executeQuery()` method with the search text to retrieve matching records.

The following example demonstrates to retrieve searched records using an external button.

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

[How to perform search by using Wildcard and LIKE operator filter](./filtering/filtering#wildcard-and-like-operator-filter)