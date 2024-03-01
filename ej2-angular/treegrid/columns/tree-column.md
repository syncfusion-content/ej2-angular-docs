---
layout: post
title: Tree Column in Angular TreeGrid component | Syncfusion
description: Learn here all about tree column in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns  
documentation: ug
domainurl: ##DomainURL##
---

# Tree Column in Angular TreeGrid component

The Syncfusion Angular TreeGrid component provides a convenient way to represent parent-child relationships using expand and collapse icons in the tree column cell. This can be achieved by utilizing the [treeColumnIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#treecolumnindex) property by setting its value to a column index. This guide outlines how to configure and use this property to display the expand or collapse icon in the desired column.

```ts

<ejs-treegrid [dataSource]='data' [treeColumnIndex]='2'>
    <!-- Other tree grid configurations -->
</ejs-treegrid>

```

## Change expand and collapse icon 

The Syncfusion Angular TreeGrid component allows to customize the default expand and collapse icons by applying custom CSS styles.

To customize the expand and collapse icons, use the following CSS styles:

```ts

.e-treegrid .e-treegridexpand::before {
  content: "\2795";
}

.e-treegrid .e-treegridcollapse::before {
  content: "\2796";
}

```

In the following demo, the expand and collapse icons are customized using the CSS styles

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="custom-column.style.css" %}
{% include code-snippet/treegrid/tree-column-cs1/src/custom-column.style.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs1" %}

## Change indent space of tree column cell text 

The TreeGrid component allows to customize the indent space of tree column cell text by leveraging the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid#querycellinfo) event. 

In the following demonstration, apply an indent space by adding a CSS class to the tree column cell using the `queryCellInfo` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs2" %}

## Render parent rows in collapsed state 

You can easily render all the parent rows in a collapsed state in the TreeGrid component using the [enableCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablecollapseall) property. Using this property, all parent rows are collapsed during the initial rendering.

In the following demo, all parent rows are rendered in a collapsed state in initial rendering. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs3" %}

## Retain expanded and collapsed state 

To maintain the expanded and collapsed state of specific parent rows in the Syncfusion Angular TreeGrid, utilize the [expandStateMapping](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandstatemapping) property. This property corresponds to a value within the data object of the data source, signifying the expand status of the parent row. This guide demonstrates how to utilize this property to ensure that specific parent records are in the desired state during the initial rendering.

### Local data

In local data binding, the parent rows are rendered in an expanded or collapsed state based on the value of the `expandStateMapping` property in the data source.

In the following demonstration, the JSON object has an `isExpanded` property with a boolean value. Based on this value, the parent rows are shown in an expanded or collapsed state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-column-cs4/src/datasource.ts  %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs4" %}

### Remote data

In the following demo, the expanded and collapsed states are retained using the `expandStateMapping` property with the remote data binding feature of the tree grid.

```ts
import { Component, OnInit } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='400' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' expandStateMapping='IsExpanded'  loadChildOnDemand='true'>
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
               </ejs-treegrid>`,

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

The following code example describes handling of child records at server end.

```ts

public ActionResult loadChildOndemand()
{
    TreeData.tree = new List<TreeData>();
    return View();
}
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the ExpandStateMapping property whether is true or false
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = false;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction")
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = true;
    }
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    data = new List<TreeData>();
    foreach (var rec in DataSource)
    {
        data.Add(rec as TreeData);
    }
    var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.ParentValue)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
    foreach (var Record in data.ToList())
    {
        if (GroupData.ContainsKey(Record.TaskID.ToString()))
        {
            var ChildGroup = GroupData[Record.TaskID.ToString()];
            if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting the child records
            {
                IEnumerable ChildSort = ChildGroup;
                ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSort)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (dm.Search != null && dm.Search.Count > 0) // Searching the child records
            {
                IEnumerable ChildSearch = ChildGroup;
                ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSearch)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (ChildGroup?.Count > 0)
                AppendChildren(dm, ChildGroup, Record, GroupData, data);
        }
    }
    DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the skip index based on collapsed parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> CollapseFilter = new List<WhereFilter>();
        CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var CollapsedParentRecord = operation.PerformFiltering(DataSource, CollapseFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the skip index based on expanded parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> ExpandFilter = new List<WhereFilter>();
        ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var ExpandedParentRecord = operation.PerformFiltering(DataSource, ExpandFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

private void AppendChildren(DataManagerRequest dm, List<TreeData> ChildRecords, TreeData ParentValue, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data) // Getting child records for the respective parent
{
    string TaskId = ParentValue.TaskID.ToString();
    var index = data.IndexOf(ParentValue);
    DataOperations operation = new DataOperations();
    foreach (var Child in ChildRecords)
    {
        //Based on the provided condition, the child records are retained and the value is passed from the server to the client.
        if (ParentValue.IsExpanded)
        {
            string ParentId = Child.ParentValue.ToString();
            if (TaskId == ParentId)
            {
                ((IList)data).Insert(++index, Child);
                if (GroupData.ContainsKey(Child.TaskID.ToString()))
                {
                    var DeepChildRecords = GroupData[Child.TaskID.ToString()];
                    if (DeepChildRecords?.Count > 0)
                    {
                        if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
                        {
                            IEnumerable ChildSort = DeepChildRecords;
                            ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSort)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        if (dm.Search != null && dm.Search.Count > 0) // searching the child records
                        {
                            IEnumerable ChildSearch = DeepChildRecords;
                            ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSearch)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        AppendChildren(dm, DeepChildRecords, Child, GroupData, data);
                        if (Child.IsExpanded)
                        {
                            index += DeepChildRecords.Count;
                        }
                    }
                }
            }
        }
    }

}

public ActionResult Update(CRUDModel<TreeData> value)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
    val.TaskName = value.Value.TaskName;
    val.Duration = value.Value.Duration;
    return Json(val);
}

public ActionResult Insert(CRUDModel<TreeData> value)
{
    var c = 0;
    for (; c < TreeData.GetTree().Count; c++)
    {
        if (TreeData.GetTree()[c].TaskID == value.RelationalKey)
        {
            if (TreeData.GetTree()[c].isParent == null)
            {
                TreeData.GetTree()[c].isParent = true;
            }
            break;
        }
    }
    c += FindChildRecords(value.RelationalKey);
    TreeData.GetTree().Insert(c + 1, value.Value);

    return Json(value.Value);
}

public int FindChildRecords(int? id)
{
    var count = 0;
    for (var i = 0; i < TreeData.GetTree().Count; i++)
    {
        if (TreeData.GetTree()[i].ParentValue == id)
        {
            count++;
            count += FindChildRecords(TreeData.GetTree()[i].TaskID);
        }
    }
    return count;
}

public object Delete(CRUDModel<TreeData> value)
{
    if (value.deleted != null)
    {
        for (var i = 0; i < value.deleted.Count; i++)
        {
            TreeData.GetTree().Remove(TreeData.GetTree().Where(ds => ds.TaskID == value.deleted[i].TaskID).FirstOrDefault());
        }
    }
    else
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
    }
    return Json(value);
}

public class CRUDModel<T> where T : class
{

    public TreeData Value;
    public int Key { get; set; }
    public int RelationalKey { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
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
            for (var t = 1; t <= 1500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = true, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = true, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 6; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```

> [View the `expandStateMapping` property with remote data sample on GitHub](https://github.com/SyncfusionExamples/expand-state-mapping-with-remote-data-in-angular-tree-grid)

## Persist expanded and collapsed states on page refresh using localStorage

To persist the expanded and collapsed state of rows using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event when the page refreshes in the browser, this guide illustrates how to utilize localStorage to save and retrieve the state of rows.

   1. Save the collapsed record’s primarykey value to localStorage in the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsed) event of the Tree Grid by using the [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) method of the local storage.
   2. On page refresh, the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event will be triggered. In that event, retrieve the saved records by using the [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) method of the local storage.
   3. Then, collapsed the specific rows by using the [CollapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey) method of Tree Grid by passing the primary key value as a parameter. and collapse the specific rows by using the [collapseRow] method of the Tree Grid by passing the row detail.
 
In the following demo, the above-mentioned steps have been followed to persist the expanded or collapsed state while refreshing the page in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs5" %}

## Programmatically expand and collapse a row  

In the Tree Grid, you can programmatically expand and collapse rows using various methods provided by the tree grid. This guide demonstrates how to leverage these methods to control the expansion and collapse of rows based on different criteria.

* **[expandAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandall)**:

To expand all rows in the tree grid, use the `expandAll` method.

```ts
this.treegrid.expandAll();
```

* **[collapseAll](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseall)**:

To collapse all rows in the tree grid, use the `collapseAll` method.

```ts
this.treegrid.collapseAll();
```

* **[expandAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandatlevel)**:

To expand the records at a specific hierarchical level, use the `expandAtLevel` method.

```ts
this.treegrid.expandAtLevel(0);
```

* **[collapseAtLevel](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapseatlevel)**:

To collapse the records at a specific hierarchical level, use the `collapseAtLevel` method.

```ts
this.treegrid.collapseAtLevel(0);
```

* **[expandByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandbykey)**:

To expand records based on a given primary key value, use the `expandByKey` method.

```ts
this.treegrid.expandByKey(1); //Here pass the primary key value
```

* **[collapseByKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsebykey)**:

To collapse records based on a given primary key value, use the `collapseByKey` method

```ts
this.treegrid.collapseByKey(1);//Here pass the primary key value
```

* **[expandRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expandrow)**:

To expand child rows based on the row element, use the `expandRow` method. 

```ts
this.treegrid.expandRow(tr); //Here pass the row element as parameter
```

* **[collapseRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapserow)**:

To collapse child rows based on the row element, use the `collapseRow` method. 

```ts
this.treegrid.collapseRow(tr);//Here pass the row element as parameter
```

## Expand and collapse action events 

In the Tree Grid, you can customize the behavior and perform specific actions when the expand or collapse icon is clicked. This can be achieved using a set of events provided by the tree grid.

The following events are available for handling expand and collapse actions:

* [expanding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expanding): This event is triggered before a row is expanded. You can perform custom actions or cancel the row expansion based on certain conditions.

* [expanded](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#expanded): This event is triggered after a row is expanded. You can perform additional actions or updates after the row expansion is completed.

* [collapsing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsing): This event is triggered before a row is collapsed. You can perform custom actions or cancel the row collapse based on certain conditions.

* [collapsed](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#collapsed): This event is triggered after a row is collapsed. You can perform additional actions or updates after the row collapse is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/tree-column-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/tree-column-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/tree-column-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/tree-column-cs6" %}
