---
layout: post
title: Persisting data in server in Angular TreeGrid component | Syncfusion
description: Learn here all about Persisting data in server in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Persisting data in server 
documentation: ug
domainurl: ##DomainURL##
---

# Persisting data in server in Angular TreeGrid component

Edited data can be persisted in the database using the RESTful web services.

All the CRUD operations in the tree grid are done through [DataManager](../../data). The `DataManager` has an option to bind all the CRUD related data in server-side.

> The ODataAdaptor persists data in the server as per OData protocol.

You can also check on this video about persisting data in server.

{% youtube "https://www.youtube.com/watch?v=UuD7_W2yIVs" %}


In the below section, we have explained how to get the edited data details on the server-side using the [UrlAdaptor](../../data/adaptors/#url-adaptor). Various adaptors are available to fetch data using `dataManager` property. Refer to the different adaptors section [here](https://ej2.syncfusion.com/angular/documentation/data/adaptors).

## Using URL adaptor

You can use the [UrlAdaptor](../../data/adaptors/#url-adaptor) of [DataManager](../../data) when binding data source from remote data. In the initial load of tree grid, data are fetched from remote data and bound to the tree grid using **url** property of `DataManager`.

When using `UrlAdaptor`, tree grid actions such as paging, filtering, sorting and editing must be handled on the server side.

You can map the CRUD operation in tree grid can be mapped to server-side Controller actions using the properties **insertUrl**, **removeUrl**, **updateUrl**, **crudUrl** and **batchUrl**.

>Refer to this section for handling only CRUD operations on the [server side](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/persisting-data-in-server#remote-save-adaptor).

The following code example describes the above behavior.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1'      height='270' [editSettings]='editSettings' idMapping='TaskID' parentIdMapping='parentID' hasChildMapping='isParent' >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            <e-column field='EndDate' headerText='End Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            <e-column field='Progress' headerText='Progress' width='100' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public editSettings: EditSettingsModel;
    public toolbarOptions: ToolbarItems[];

    public dataManager: DataManager = new DataManager({
        url: "Home/DataSource",
        updateUrl: "Home/Update",
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        batchUrl: "Home/Remove",
        adaptor: new UrlAdaptor
    });

    ngOnInit(): void {
        this.data = this.dataManager;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Row' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

Also, when using the `UrlAdaptor`, you need to return the data as JSON from the controller action and the JSON object must contain a property as `result` with dataSource as its value and one more property `count` with the dataSource total records count as its value.

The following code example describes the above behavior.

```typescript

public ActionResult DataSource(DataManager dm)
{
    var DataSource = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    if (dm.Where != null && dm.Where.Count > 0)
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");   //perform filtering  and maintain child records on Expand/Collapse operation
    }
    var count = DataSource.ToList<TreeData>().Count();
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

```

### Insert record

Using the **insertUrl** property, you can specify the controller action mapping URL to perform insert operation on the server-side.

The following code example describes the above behavior and also demonstrates how to insert a new record based on the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#newrowposition) property of the tree grid's [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editsettings), set as 'Below'.

```typescript

public void Insert(TreeGridData value, int relationalKey)
{
    var i = 0;
    for (; i < TreeData.tree.Count; i++)
    {
        if (TreeData.tree[i].TaskID == relationalKey)
        {
            break;
        }
    }
    i += FindChildRecords(relationalKey); // Inserted new record when newRowPosition API is in "Below".
    TreeData.tree.Insert(i + 1, value);
}

public int FindChildRecords(int id)
{
    var count = 0;
    for (var i = 0; i < TreeData.tree.Count; i++)
    {
        if (TreeData.tree[i].ParentItem == id)
        {
            count++;
            count += FindChildRecords(TreeData.tree[i].TaskID);
        }
    }
    return count;
}

```

The newly added record details are bound to the `value` parameter, and `relationalKey` contains the primaryKey value of a selected record, which helps to find the position of the newly added record. Refer to the following screenshot.

![Insert](../images/insert.PNG)

### Update record

Using the **updateUrl** property, the controller action mapping URL can be specified to perform save/update operation on the server-side.

The following code example describes the previous behavior.

```typescript

public ActionResult Update(TreeGridData value)
{
    var val = TreeData.tree.Where(ds => ds.TaskID == value.TaskID).FirstOrDefault();
    val.TaskName = value.TaskName;
    val.StartDate = value.StartDate;
    val.Duration = value.Duration;
    val.Priority = value.Priority;
    val.Progress = value.Progress;
    return Json(value);
}

```

The updated record details are bound to the `value` parameter. Refer to the following screenshot.

![Update](../images/update.PNG)

### Delete record

Using the **removeUrl** property, the controller action mapping URL can be specified to perform delete operation on the server-side.

The following code example describes the previous behavior.

```typescript

public ActionResult Delete(int key)
{
    TreeData.tree.Remove(TreeData.tree.Where(ds => ds.TaskID == key).FirstOrDefault());
}

```

The deleted record primary key value is bound to the `key` parameter. Refer to the following screenshot.

![Remove](../images/delete.PNG)

While deleting parent record, the corresponding child records also bound to the `deleted` parameter. Refer to the following screenshot.

![Delete](../images/remove.PNG)

### CRUD URL

Using the **crudUrl** property, the controller action mapping URL can be specified to perform all the CRUD operation at server-side using a single method instead of specifying separate controller action method for CRUD (insert, update and delete) operations.

The action parameter of **crudUrl** is used to get the corresponding CRUD action.

The following code example describes the above behavior.

```typescript

import { Component } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  template: `
  <ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='400' [toolbar]='toolbarOptions' [editSettings]='editSettings' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
               </ejs-treegrid>
 `,

})
export class AppComponent {
  public data: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/Datasource",
    crudUrl: 'Home/CrudUpdate',
  });
  public editSettings: EditSettingsModel={ allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Row' };;
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
}

```

```typescript

public ActionResult CrudUpdate(CRUDModel<TreeData> value, string action)
{
    if (action == "update")
    {
        List<TreeData> data = new List<TreeData>();
        data = TreeData.GetTree();
        var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
        val.TaskName = value.Value.TaskName;
        val.Duration = value.Value.Duration;
        return Json(val);
    }
    else if (action == "insert")
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
    else if (action == "remove")
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
        return Json(value);
    }
    return Json(value.Value);
}

```

Refer to the following screenshot to know about the action parameter.

![CRUD Update](../images/crudupdate.png)

> If you specify both **insertUrl** and **crudUrl**, only the **insertUrl** will be invoked when adding the record.

### Batch URL

The **batchUrl** property supports only for batch editing mode. You can specify the controller action mapping URL to perform batch operation on the server-side.

The following code example describes the above behavior.

```typescript

import { Component } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  template: `
  <ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='400' [toolbar]='toolbarOptions' [editSettings]='editSettings' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
               </ejs-treegrid>
 `,

})
export class AppComponent {
  public data: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/Datasource",
    batchUrl: 'Home/BatchUpdate',
  });
  public editSettings: EditSettingsModel={ allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Batch' };;
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
}

```
```typescript

 public ActionResult BatchUpdate(string action,List<TreeData> added, List<TreeData> changed, List<TreeData> deleted, int? key)
 {
     List<TreeData> datas = new List<TreeData>();
     datas = TreeData.GetTree();
     if (changed != null)
     {
         for (var i = 0; i <changed.Count(); i++)
         {
             var ord = changed[i];
             
             var val = datas.Where(ds => ds.TaskID == ord.TaskID).FirstOrDefault();
             val.TaskName = ord.TaskName;
             val.Duration = ord.Duration;
         }
     }
     if (deleted != null)
     {
         for (var i = 0; i < deleted.Count(); i++)
         {
             datas.Remove(datas.Where(or => or.TaskID == deleted[i].TaskID).FirstOrDefault());
         }
     }
     if (added != null)
     {
         for (var i = 0; i < added.Count(); i++)
         {
             datas.Insert(0, added[i]);
         }
     }
     var data = datas.ToList();
     return Json(data);

 }
 
```

![Batch](../images/batch.png)

## Remote save adaptor

To interact with server-side only for the CRUD operations, you can utilize the RemoteSaveAdaptor. This adaptor allows you to persist data changes on the server while handling other actions locally.

Datasource must be set to **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to server-side using **updateUrl**, **insertUrl**, **removeUrl** and **batchUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Tree Grid.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' hasChildMapping='isParent' idMapping='TaskID' parentIdMapping='parentID' >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            <e-column field='EndDate' headerText='End Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            <e-column field='Progress' headerText='Progress' width='100' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public value: any;
    public editSettings: EditSettingsModel;
    public toolbarOptions: ToolbarItems[];
    ngOnInit(): void {
        this.value = (window as any).griddata;
        this.data = new DataManager({
            json: JSON.parse(this.value),
            updateUrl: "Home/Update",
            insertUrl: "Home/Insert",
            removeUrl: "Home/Delete",
            batchUrl: "Home/Remove",
            adaptor: new RemoteSaveAdaptor();
        });
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Row' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

The following code example describes how to fetch the data from `ViewBag` in angular.

```
    <script type="text/javascript">
       window.griddata = '@Html.Raw(Json.Encode(ViewBag.dataSource))';
    </script>
```

The following code example describes the CRUD operations handled at server-side.

```typescript

public ActionResult Index(DataManager dm)
{
   var data = TreeData.GetTree();
   ViewBag.dataSource = data;
   return View();
}

public void Insert(TreeData value, int relationalKey)
{
    var i = 0;
    for (; i < TreeData.tree.Count; i++)
    {
        if (TreeData.tree[i].TaskID == relationalKey)
        {
            break;
        }
    }
    i += FindChildRecords(relationalKey); // Inserted new record when newRowPosition API is in "Below".
    TreeData.tree.Insert(i + 1, value);
}

public ActionResult Update(TreeData value)
{
    var val = TreeData.tree.Where(ds => ds.TaskID == value.TaskID).FirstOrDefault();
    val.TaskName = value.TaskName;
    val.StartDate = value.StartDate;
    val.Duration = value.Duration;
    val.Priority = value.Priority;
    val.Progress = value.Progress;
    return Json(value);
}

public ActionResult Delete(int key)
{
    TreeData.tree.Remove(TreeData.tree.Where(ds => ds.TaskID == key).FirstOrDefault());;
}

// Remove method (batchUrl) will be triggered when we delete parent record.

public ActionResult Remove(List<TreeGridData> changed, List<TreeGridData> added, List<TreeGridData> deleted)
{
    for (var i = 0; i < deleted.Count; i++)
    {
        TreeData.tree.Remove(TreeData.tree.Where(ds => ds.TaskID == deleted[i].TaskID).FirstOrDefault());
    }
}

```

## Passing additional parameter to server during CRUD operation

The TreeGrid component allows you to include custom parameters in data requests. This feature is particularly useful when you need to provide additional information to the server for enhanced processing.

By utilizing the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property of the tree grid along with the `addParams` method of the Query class, you can easily incorporate custom parameters into data requests for every tree grid action.

When performing CRUD operations in the Tree Grid, you can pass additional parameters using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event.  In this event, you can pass the parameter using the addParams method with args.requestType as save for edit/add actions and args.requestType as delete for delete actions.

The following example demonstrates how to send additional parameters to the server during CRUD actions.

```typescript
import { Component } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  template: `
  <ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' [query]='query' (actionBegin)='actionBegin($event)' height='400' [toolbar]='toolbarOptions' [editSettings]='editSettings' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' [isPrimaryKey]='true' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
               </ejs-treegrid>
 `,

})
export class AppComponent {
  public data: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/Datasource",
    crudUrl: 'Home/CrudUpdate',
    
  });
  public query?: Query;
  public editSettings: EditSettingsModel={ allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Row' };;
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  public actionBegin(args: any) {
    
    if (args.requestType == 'save') {
      this.query = new Query().addParams('Editing / Adding record', 'Success');
    } else if(args.requestType == 'delete') {
      this.query = new Query().addParams('Deleting record', 'Success');
    }
  }
}

```

![Additional parameters](../images/additional_parameters.png)
