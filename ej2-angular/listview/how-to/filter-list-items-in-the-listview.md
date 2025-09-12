---
layout: post
title: Filter list items in the Angular ListView component | Syncfusion
description: Learn here all about Filter list items in the ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter Items in Angular ListView Using DataManager

You can dynamically filter items in the Angular ListView component based on user input using Syncfusion’s [`DataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started). This guide walks you through rendering a searchable ListView with real-time filtering.

## Steps to Implement Filtering

1. **Render a TextBox** to capture user input for filtering.
2. **Configure the ListView** with a [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) and set the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property.
3. **Bind the `keyup` event** to the TextBox to trigger filtering logic.
4. **Use `DataManager` and `Query.where`** to filter the data locally via the [`executeLocal`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executelocal) method.
5. **Update the ListView’s `dataSource`** with the filtered result.

## Filtering Variants

- **Starts with**: Default behavior using `Query.where(..., 'startswith', ...)`
- **Ends with**: Replace `'startswith'` with `'endswith'`
- **Contains**: Use `'contains'` for substring matching
- **Case-insensitive**: Normalize input and data using `.toLowerCase()` before filtering
- **Multiple conditions**: Chain multiple `Query.where()` clauses


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/getting-started-cs6/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
 
{% previewsample "page.domainurl/samples/listview/getting-started-cs6" %}

> In this demo, data has been filtered with starting character of the list items. You can also filter list items with ending character by passing the `endswith` in [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) clause instead of `startswith`.
