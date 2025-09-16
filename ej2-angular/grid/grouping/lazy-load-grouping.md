---
layout: post
title: Lazy load grouping in Angular Grid component | Syncfusion
description: Learn how to configure and optimize lazy load grouping in the Syncfusion Angular Grid component. Explore configuration, server-side handling, infinite and virtual scrolling, and best practices for large datasets.
platform: ej2-angular
control: Lazy load grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Lazy load grouping in Angular Grid component

Lazy loading in Angular refers to loading data dynamically as needed rather than loading all at once, resulting in improved application performance and reduced initial load time.

Lazy load grouping in the Syncfusion Angular Grid efficiently displays grouped data by fetching only necessary records on demand. This feature is especially valuable when working with large datasets. The Grid initially renders top-level caption rows in a collapsed state. When a group caption row is expanded, only the relevant child records are retrieved and rendered.

Enable lazy load grouping by setting the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) property to **true**.

The following example demonstrates enabling this feature via `groupSettings.enableLazyLoading`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs1" %}

## Server-side lazy load grouping

When using the lazy load grouping feature of the Grid, you can use the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) of `DataManager` when binding remote data to handle the lazy load grouping at the server-side. Along with the default server request, this feature will additionally send the following details to handle the lazy load grouping:

Property Name |Description
-----|-----
`isLazyLoad` |Used to differentiate the default grouping and lazy load grouping
`onDemandGroupInfo` |Contains the details of expanded caption row grouping `level`, `skip`, `take` and `filter` query of the child records

In the server-side, you can bind these details with the `isLazyLoad` and `onDemandGroupInfo` parameters in the `DataManagerRequest` model. Please refer to the below screenshots.

![IsLazyLoad](../images/islazyload.jpg)

![OnDemandGroupInfo](../images/groupinfo.jpg)

Example server controller for lazy load grouping:

```typescript
public IActionResult UrlDatasource([FromBody] DataManagerRequest dm)
{
    IEnumerable groupedData = null;
    IEnumerable<Customers> DataSource = customers;
    DataOperations operation = new DataOperations();

    if (dm.Search != null && dm.Search.Count > 0)
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);  //Search
    }
    if (dm.Where != null && dm.Where.Count > 0) //Filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);
    }
    int count = DataSource.Cast<Customers>().Count();
    if (dm.IsLazyLoad == false && dm.Sorted != null && dm.Sorted.Count > 0) //Sorting for grouping
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }   
    if (dm.IsLazyLoad == false && dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip); // Paging
    }
    if (dm.IsLazyLoad == false && dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    if (dm.IsLazyLoad)
    {
        groupedData = operation.PerformGrouping<Customers>(DataSource, dm); // Lazy load grouping
        groupedData = operation.PerformSorting(groupedData, dm); // Sorting with Lazy load grouping
        if (dm.OnDemandGroupInfo != null && dm.Group.Count() == dm.OnDemandGroupInfo.Level)
        {
            count = groupedData.Cast<Customers>().Count();
        }
        else
        {
            count = groupedData.Cast<Group>().Count();
        }
        groupedData = operation.PerformSkip(groupedData, dm.OnDemandGroupInfo == null ? dm.Skip : dm.OnDemandGroupInfo.Skip);
        groupedData = operation.PerformTake(groupedData, dm.OnDemandGroupInfo == null ? dm.Take : dm.OnDemandGroupInfo.Take);
    }
return dm.RequiresCounts ? Json(new { result = groupedData == null ? DataSource : groupedData, count = count }) : Json(DataSource);
}
```

> For best performance, always perform sorting after grouping when using lazy load grouping.

## Lazy load grouping with infinite scrolling

For optimal performance in large datasets and seamless navigation, combine lazy load grouping with infinite scrolling. This ensures only visible grouped records are fetched as users scroll.

**How it works:**

1. Only top-level group captions are initially rendered, fully collapsed.
2. Child rows are loaded and shown only when you expand a group caption.
3. As users scroll down, more groups or records are dynamically loaded.

Enable infinite scrolling by setting both [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) and [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableinfinitescrolling) to **true**.

Example enabling both features:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs2" %}

> * The [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableinfinitescrolling) property can be toggled as needed.
> * Always specify the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property when using infinite scrolling.

## Lazy load grouping with virtual scrolling

For highly performant navigation and rendering of very large grouped datasets, use lazy load grouping in combination with virtual scrolling. This ensures only the needed rows and groups are loaded and rendered at once.

**How it works:**

1. Initial render displays only collapsed top-level group captions.
2. Expanding a caption row triggers retrieval and rendering of only its children.
3. Virtualization loads a dynamic buffer of records as users scroll, reducing memory and DOM footprint.

Enable both features by setting [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) and [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) to **true**.

Example usage:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs3" %}

> Always define the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property when using virtualization.

## Limitations for lazy load grouping

* Browser-imposed element height limitations restrict the maximum total loaded records.
* Lazy load grouping is only supported with the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) and [JsonAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#json-adaptor).
* Not compatible with:
    * Batch editing
    * Row template
    * Printing
    * Row drag and drop in collapsed groups
    * ExpandAll method   
    * Column virtualization
    * Hierarchical grid
    * Detail template
    * Row and cell spanning  
* Programmatic selection (row/cell/drag) is not supported while groups are collapsed.
* Clipboard support is unavailable when groups are collapsed.