---
layout: post
title: Lazy load grouping in Angular Grid component | Syncfusion
description: Learn here all about Lazy load grouping in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lazy load grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Lazy load grouping in Angular Grid component

In Angular, lazy loading refers to the technique of loading data dynamically when they are needed, instead of loading everything upfront. Lazy loading can significantly improve the performance of your application by reducing the initial load time.

Lazy load grouping in Syncfusion Grid allows you to load and display grouped data efficiently by fetching only the required data on demand. This feature is useful when dealing with large datasets where loading all the data at once might affect performance. The Grid will render only the initial level caption rows in the collapsed state at grouping. The child rows of each caption will be fetched in on demand and render in the Grid when you expand the caption row.

To enable this feature, need to set the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) property to **true**.

The following example demonstrates how to enable the lazy load grouping feature by setting `groupSettings.enableLazyLoading` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs1" %}

## Handling the lazy load grouping at server-side

When using the lazy load grouping feature of the Grid, you can use the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) of `DataManager` when binding remote data to handle the lazy load grouping at the server-side. Along with the default server request, this feature will additionally send the following details to handle the lazy load grouping:

Property Name |Description
-----|-----
`isLazyLoad` |Used to differentiate the default grouping and lazy load grouping
`onDemandGroupInfo` |Contains the details of expanded caption row grouping `level`, `skip`, `take` and `filter` query of the child records

In the server-side, you can bind these details with the `isLazyLoad` and `onDemandGroupInfo` parameters in the `DataManagerRequest` model. Please refer to the below screenshots.

![IsLazyLoad](../images/islazyload.jpg)

![OnDemandGroupInfo](../images/groupinfo.jpg)

The following code example describes lazy load grouping being handled on the server-side along with other grid actions.

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
    if (dm.Sorted != null && dm.Sorted.Count > 0) //Sorting
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

## Lazy load grouping with infinite scrolling

Lazy loading grouping with infinite scrolling is a valuable feature in scenarios where there is a need to present grouped data, efficiently handle large datasets, and ensure a seamless experience. This feature enables loading data on demand as the interface is interacted with, ensuring optimal performance and responsiveness while effectively managing and presenting large grouped datasets

**How lazy load grouping with infinite scrolling works**

1. When you enable lazy load grouping with infinite scrolling, the Grid initially renders only the top-level caption rows in a collapsed state.

2. The child rows associated with each group caption are loaded and rendered in the Grid only when you expand the corresponding caption row.

3. Infinite scrolling enables the Grid to load additional data as the user scrolls to the end of the scrollbar.

To enable this feature, you need to set the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) and [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableinfinitescrolling) properties to **true**.

The following example demonstrates how to enable the lazy load grouping with infinite scrolling feature using the `groupSettings.enableLazyLoading` and `enableInfiniteScrolling` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs2" %}

> * The [enableInfiniteScrolling](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableinfinitescrolling) property is optional and can be set to **true** or **false** based on the requirement.
> * When enabling the `enableInfiniteScrolling` feature, it is necessary to define the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property.

## Lazy load grouping with virtual scrolling

The lazy load grouping with virtual scrolling feature in the Syncfusion Angular Grid allows you to efficiently present and analyze large grouped datasets. This feature optimizes performance, reduces initial load time, and provides smooth scrolling through the dataset. 

**How lazy load grouping with virtual scrolling works**

1. When you enable lazy load grouping with virtual scrolling, the Grid renders only the initial level caption rows in a collapsed state.

2. The child rows associated with each group caption are loaded and rendered in the Grid only when you expand the respective caption row.

3. Virtual scrolling allows the Grid to load and display a buffered set of records while scrolling vertically.

To enable this feature, you need to set the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) and [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) properties to **true**.

The following example demonstrates how to enable the lazy load grouping with virtual scrolling feature using the `groupSettings.enableLazyLoading` and `enableVirtualization` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/lazy-load-grouping-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/lazy-load-grouping-cs3" %}

> When using the `enableVirtualization` feature, it is necessary to define the [height](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property.

## Limitations for lazy load grouping

* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited due to the browser capability.
* Lazy load grouping is only supported by the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) and [JsonAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#json-adaptor) adaptors.
* Lazy load grouping is not compatible with the following features
    * Batch editing
    * Row template
    * Print
    * Row drag and drop in collapsed group
    * ExpandAll method   
    * Column virtualization
    * Hierarchical Grid
    * Detail Template
    * Row and Cell Spanning  
* Programmatic selection is not supported  in lazy load grouping.
* Drag selection, Cell selection (box and flow), Row Selection is not working in collapsed state.
* Clipboard is not support when the groups are in collapsed state.
