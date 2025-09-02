---
layout: post
title: Virtual Scrolling for Performance in Angular Kanban Component | Syncfusion
description: Learn here all about Virtual Scrolling in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtual scrolling
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular Kanban Component

Kanban allows you to load a large amount of data without any performance degradation. This feature can be enabled by setting the enableVirtualization](../api/kanban/#enablevirtualization) property in the Kanban to `true`.

## Virtual scrolling

Virtual scrolling optimizes data rendering within each column when using large datasets. Only a subset of cards that are visible and about to be loaded on the screen are rendered. The number of records displayed in the Kanban is determined implicitly by the height of the Kanban area and the card height. The [cardHeight](../api/kanban/#cardheight) property of Kanban can be used to set the cards' height in pixel value. By default, the card height will be `auto`.

When the Kanban column is scrolled, the virtual scrolling feature dynamically loads additional data on demand into view and unloads the data that is no longer visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/virtual-scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/virtual-scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/virtual-scrolling-cs1" %}

### Configure the remote data service

When the remote data is configured for the [dataSource](../api/kanban/#datasource), the service method will receive an additional `KanbanVirtualization` parameter to handle the initial data load for Kanban Virtualization.

To handle Kanban virtual scrolling, the server-side code needs to handle the `Where` and `Take` queries differently using the `KanbanVirtualization` parameter. The following is the example code for handling Kanban virtualization's initial data load using the `KanbanVirtualization` parameter.

```ts

public IActionResult LoadCard([FromBody] ExtendedDataManagerRequest dm)
{
    kanbanData = _context.KanbanCards.ToList();
    IEnumerable<KanbanCard> DataSource = kanbanData.AsEnumerable();
    DataOperations operation = new DataOperations();
    // For normal kanban data load `Where` query handling.
    if (dm.Where != null && dm.Where.Count > 0 && dm.KanbanVirtualization != "KanbanVirtualization")
    {
        dm.Where[0].value = dm.Where[0].value.ToString();
        DataSource = operation.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);
    }
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);
    }
    // For normal Kanban data load `Take` query handling.
    if (dm.Take != 0 && dm.KanbanVirtualization != "KanbanVirtualization")
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    // For Kanban virtual scrolling data load `Where` and `Take` query handling.
    var columnCount = new List<KeyValuePair<string, int>>();
    if (dm.KanbanVirtualization == "KanbanVirtualization" && dm.Where != null && dm.Where.Count > 0 && dm.Take != 0)
    {
        IEnumerable<KanbanCard> currentData = new List<KanbanCard>();
        List<WhereFilter> currentFilter = new List<WhereFilter>();
        for (int i = 0; i < dm.Where.Count; i++)
        {
            dm.Where[i].value = dm.Where[i].value.ToString();
            currentFilter.Add(dm.Where[i]);
            var filterData  = operation.PerformFiltering(DataSource, currentFilter, dm.Where[i].Operator);
            columnCount.Add(new KeyValuePair<string, int>(dm.Where[i].value.ToString(), filterData.Count()));
            filterData = operation.PerformTake(filterData, dm.Take);
            currentData = currentData.Concat(filterData);
            currentFilter.Clear();
        }
        DataSource = currentData;
    }
    // To return the data for Kanban virtual scrolling.
    if (dm.KanbanVirtualization == "KanbanVirtualization") {
        return Json(new { result = DataSource, count = columnCount });
    }
    // To return the data for Kanban virtual scrolling.
    else
    {
        return Json(DataSource);
    }
}

```

## Limitations for virtual scrolling

* When virtualization is enabled in a Kanban board and the card height is not explicitly set, it will not default to `auto` height. Instead, a fixed height of `100px` will be applied to the cards. It's important to note that the card height should be specified in pixel values, as percentage values are not accepted.
* When a card is dragged and dropped, the index position of the card will not be preserved when scrolling through the column.
* Virtualization is not supported for swimlanes in the Kanban board.
