---
layout: post
title: Data binding in Angular TreeGrid component | Syncfusion
description: Learn about data binding in the Syncfusion Angular TreeGrid component, covering local and remote data integration, expand state mapping, and best practices.
platform: ej2-angular
control: Data binding
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular TreeGrid component

The TreeGrid supports flexible data binding options, allowing integration with both local object arrays and remote RESTful JSON data services. Assign the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property with either a JavaScript object array or a `DataManager` instance.

TreeGrid provides two primary data binding methods:
* Local data
* Remote data

To learn how to bind both local and remote data to the TreeGrid, watch this video:

{% youtube "https://www.youtube.com/watch?v=N-TS5zv_3cg" %}

## Binding with Ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property to bind the data source to TreeGrid from external fetch request. In the below code we have fetched the data source from the server with the help of fetch request and provided that to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property by using `onSuccess` event of the fetch.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/data-binding-cs1" %}

> * When binding data in this manner, the dataSource is treated as local data, and CRUD operations cannot be performed on the server end.

## Handling expandStateMapping

To control the expanded or collapsed state of parent rows, assign the [`expandStateMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandstatemapping) property to the field in your data source that indicates the expansion state.

The `expandStateMapping` property should map to a boolean field (e.g., `true` for expanded, `false` for collapsed) in your data source, enabling the TreeGrid to render parent records in the appropriate state based on data values.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='400' hasChildMapping='isParent', idMapping='TaskID' expandStateMapping='IsExpanded' parentIdMapping='ParentValue'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data: DataManager;

    public dataManager: DataManager = new DataManager({
        adaptor: new UrlAdaptor,
        url: "Home/DataSource",
    });

    ngOnInit(): void {
        this.data = this.dataManager;
    }
}
```

The following code example defines `expandStateMapping` property at server end.

```csharp
public ActionResult ExpandStateMapping()
{
  return View();
}

public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }
    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}
```

> For further details, visit the [`Angular TreeGrid feature tour`](https://www.syncfusion.com/angular-components/angular-tree-grid) to explore its advanced capabilities. Additionally, explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to see data presentation and manipulation in action.
