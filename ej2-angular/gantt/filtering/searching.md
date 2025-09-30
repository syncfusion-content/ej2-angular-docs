---
layout: post
title: Searching in Angular Gantt component | Syncfusion
description: Learn here all about Searching in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Searching 
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows quick filtering of records based on search input, improving access to relevant data in large datasets.

To enable this feature, add the **Search** option to the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) configuration and inject `FilterService` in the providers section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/default-search-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/default-search-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/default-search-cs1" %}

## Initial search

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt compoenent allows applying search criteria during initial load using the [searchSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/) property.  

To configure this feature, define the following properties:

| Property      | Description                                                                                  |
|---------------|----------------------------------------------------------------------------------------------|
| `fields`      | Defines the fields where the search should be applied.                                       |
| `operator`    | Sets the condition for matching (e.g., `contains`, `equals`).                                |
| `key`         | Specifies the value to search for.                                                            |
| `ignoreCase`  | Determines if the search should be case-insensitive.                                         |
| `ignoreAccent`| Ignores diacritic characters or accents during the search.


The following sample demonstrates an initial search where `fields` is set to **TaskName**, `operator` is **contains**, `key` is **Product**, and `ignoreCase` is **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/initialsearch-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/initialsearch-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/initialsearch-cs1" %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#fields) property.

## Search operators

Search operators specify the type of comparison used during a search. These are configured through the [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#operator) property.

The following operators are supported in searching:

| Operator     | Description                                      |
|--------------|--------------------------------------------------|
| `startsWith` | Matches values that begin with the specified text. |
| `endsWith`   | Matches values that end with the specified text.   |
| `contains`   | Matches values that include the specified text.    |
| `equal`      | Matches values that exactly match the specified text. |
| `notEqual`   | Matches values that do not match the specified text. |

> The default value for `searchSettings.operator` is `contains`.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/search-operators-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/search-operators-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/search-operators-cs1" %}

## Search by external button

To perform a search from an external button in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt, call the [search](https://ej2.syncfusion.com/angular/documentation/api/gantt/#search) method programmatically with the desired keyword.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/externalbutton-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/externalbutton-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/externalbutton-cs1" %}

> You should set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) property to **true** for searching the content externally.

## Search specific columns

By default, the Gantt component searches across all columns. To restrict the search to specific columns, define the required field names in the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#fields) property.

This following sample demonstrates searching only within the **TaskName** and **Duration** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/specific-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/specific-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/specific-column-cs1" %}

## Search by external button

To clear the search results in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt from an external button, set the [searchSettings.key](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#key) property to an empty string. 
 
Alternatively, you can invoke the [search](https://ej2.syncfusion.com/angular/documentation/api/gantt/#search) method with an empty string to reset the search.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/clearSearch-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/clearSearch-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/clearSearch-cs1" %}

## Search on each key stroke

The keystroke-based search feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt compoenent enables dynamic filtering of grid data as text is entered in the search box.

To implement this, bind the `keyup` event to the search input element within the [search](https://ej2.syncfusion.com/angular/documentation/api/gantt/#search) method, which is triggered from the [created](https://ej2.syncfusion.com/angular/documentation/api/gantt/#created) event of the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/key-stroke-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/key-stroke-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/key-stroke-cs1" %}

## Highlight the search text

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component supports highlighting matched search text within grid cells to improve visibility of search results. 

This can be achieved using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event, which is triggered during cell rendering. Within this event, check if the cell belongs to the target column, retrieve the cell value and search keyword, and use the `includes` method to detect matches. If a match is found, wrap the matched text in a `<span>` with a custom CSS class for styling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/highlight-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/highlight-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/highlight-cs1" %}
