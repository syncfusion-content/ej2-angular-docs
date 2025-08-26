---
layout: post
title: Refresh the data source in Angular TreeGrid component | Syncfusion
description: Learn how to refresh the data source in the Syncfusion Angular TreeGrid component after adding or deleting records and efficiently update the view.
platform: ej2-angular
control: Refresh the data source 
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the data source in Angular TreeGrid component

## How to refresh the data source

Records can be added or deleted from the data source using an external button. To reflect these changes in the TreeGrid, assign the updated data to the dataSource property.

Follow these steps to refresh the TreeGrid after a data source change:

**Step 1:**

Add or delete a data source record using the following code:

```typescript

    const dataSource: object = extendArray((this.treegridObj as TreeGridComponent).dataSource as object[]);

    // Added New Record.
    (dataSource as object[]).unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('02/03/2017'), Duration: 10 });

    // Delete record.
    (dataSource as object[]).splice(selectedRowIndex, 1);

```

**Step 2:**

Refresh the TreeGrid after modifying the data source by reassigning the updated data to the dataSource property.

```typescript
    (this.treegridObj as TreeGridComponent).dataSource = dataSource; // Refresh the TreeGrid.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-datasource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-datasource-cs2" %}

> Refresh the header by using the [`refreshHeader`](https://ej2.syncfusion.com/angular/documentation/api/treerid/#refreshheader) method in the tree grid.
> Refresh both the header and the content by using the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refresh) method in the tree grid.
> Refer to Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.