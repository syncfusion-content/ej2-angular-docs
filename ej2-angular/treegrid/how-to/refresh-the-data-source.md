---
layout: post
title: Refresh the data source in Angular Treegrid component | Syncfusion
description: Learn here all about Refresh the data source in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Refresh the data source 
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the data source in Angular Treegrid component

## How to refresh the datasource

You can add/delete the datasource records through an external button. To reflect the datasource changes in Tree Grid, you need to assign the modified data to dataSource property.

Please follow the below steps to refresh the Tree Grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```typescript

    const dataSource: object = extendArray((this.treegridObj as TreeGridComponent).dataSource as object[]);

    // Added New Record.
    (dataSource as object[]).unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('02/03/2017'), Duration: 10 });

    // Delete record.
    (dataSource as object[]).splice(selectedRowIndex, 1);

```

**Step 2**:

Refresh the Tree Grid after the datasource change by assign the modified data to dataSource property.

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