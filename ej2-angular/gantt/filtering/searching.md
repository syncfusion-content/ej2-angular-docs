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

To enable this feature, add the **Search** option to the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) configuration and inject `FilterService` and `ToolbarService` in the provider of the component.

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


The following sample demonstrates an initial search where `fields` is set to **TaskName**, `operator` is **contains**, `key` is **Pröduct**, with `ignoreCase` set to **true** and `ignoreAccent` set to **true** (e.g., typing "product" will match "Pröduct").

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/filtering/initialsearch-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/filtering/initialsearch-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/filtering/initialsearch-cs1" %}

## Search operators

Search operators specify the type of comparison used during a search. These are configured through the [searchSettings.operator](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#operator) property.

The following operators are supported in searching:

| Operator     | Description                                      |
|--------------|--------------------------------------------------|
| startsWith   | Matches values that begin with the specified text. |
| endsWith     | Matches values that end with the specified text.   |
| contains     | Matches values that include the specified text.    |
| equal        | Matches values that exactly match the specified text. |
| notEqual     | Matches values that do not match the specified text. |

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

To search specific columns in the Gantt component, use the [searchSettings.fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/searchSettings/#fields) property. This allows you to define which column fields should be included in the search, instead of searching across all columns by default.

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

## Clear search by external button

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

You can enable instant filtering in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt component by calling the [search](https://ej2.syncfusion.com/angular/documentation/api/gantt/#search) method on each `keyup` event.  This can be configured within the component’s [created](https://ej2.syncfusion.com/angular/documentation/gantt/events#created) event.

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
