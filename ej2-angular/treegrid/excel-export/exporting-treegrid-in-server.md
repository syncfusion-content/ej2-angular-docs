---
layout: post
title: Export TreeGrid on the server in Angular TreeGrid component | Syncfusion
description: Learn how to perform server-side export of data in the Syncfusion Angular TreeGrid component of Essential JS 2, including Excel and CSV exporting, server configuration, and header rotation.
platform: ej2-angular
control: Exporting tree grid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting TreeGrid on the server in Angular TreeGrid component

The TreeGrid component includes support for server-side data export to Excel using the TreeGrid server export library.

## Server dependencies

Server-side export functionality is provided in the Syncfusion.EJ2.TreeGridExport package, available through Essential Studio<sup style="font-size:70%">&reg;</sup> and [nuget.org](https://www.nuget.org/). The following dependencies are required for server-side Excel exporting in TreeGrid:

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The code snippet below demonstrates server configuration using an ASP.NET Core Controller Action.

To export TreeGrid data on the server side, use the [`serverExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#serverexcelexport) method to pass TreeGrid properties to the server export action.

```typescript
public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}
public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToExcel<TreeData>(gridProperty, TreeData.GetDefaultData());
}
private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}
public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid id='TreeGrid' parentIdMapping='ParentItem' [dataSource]='data' [toolbar]='toolbar' height='273px'(toolbarClick)='toolbarClick($event)'>
               <e-columns>
                    <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                    <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
                    <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                    <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public toolbar: ToolbarItems[];

    public dataManager: DataManager = new DataManager({
        url: 'Home/UrlDatasource',
        adaptor: new UrlAdaptor()
    });

    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

    ngOnInit(): void {
        this.data = this.dataManager;
        this.toolbar = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'TreeGrid_gridcontrol_excelexport') { // 'TreeGrid_excelexport' -> TreeGrid component id + _ + toolbar item name
            this.treegrid.serverExcelExport('Home/ExcelExport');
        }
    }
}
```

## CSV export on the server side

Export TreeGrid data to CSV by using the [`serverCsvExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#servercsvexport) method, which passes TreeGrid properties to the server.

The following demo demonstrates invoking this method in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event. On the server side, the TreeGrid properties are deserialized and passed to the [`ExportToCsv`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGridExport.TreeGridExcelExport.html#Syncfusion_EJ2_TreeGridExport_TreeGridExcelExport_ExportToCsv__1_Syncfusion_EJ2_TreeGrid_TreeGrid_System_Collections_IEnumerable_Syncfusion_EJ2_TreeGridExport_ExcelExportProperties_) method, exporting the data to CSV format.

```typescript
public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}

public IActionResult CsvExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToCsv<TreeData>(gridProperty, TreeData.GetDefaultData());
}

private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}

public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid id='TreeGrid' parentIdMapping='ParentItem' [dataSource]='data' [toolbar]='toolbar' height='273px'(toolbarClick)='toolbarClick($event)'>
               <e-columns>
                    <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                    <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
                    <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                    <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public toolbar: ToolbarItems[];

    public dataManager: DataManager = new DataManager({
        url: 'Home/UrlDatasource',
        adaptor: new UrlAdaptor()
    });

    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

    ngOnInit(): void {
        this.data = this.dataManager;
        this.toolbar = ['CsvExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'TreeGrid_gridcontrol_csvexport') { // 'TreeGrid_csvexport' -> Tree Grid component id + _ + toolbar item name
            this.treegrid.serverCsvExport('Home/CsvExport');
        }
    }
}
```

## Rotate header text in the exported TreeGrid on the server side

TreeGrid supports customizing column header styles, such as changing text orientation and font color, in the exported Excel file. Use the `ExcelHeaderCellRendering` event to achieve this on the server side.

The `ExcelHeaderCellRendering` event is triggered while creating column headers in the Excel document to be exported from the server. Header customization can be performed within this event.

In the following demo, the `HeaderCellRotate` method of the `TreeGridExcelExport` class, invoked within the `ExcelHeaderCellRendering` event, is used to rotate the text of the column header in the exported Excel document.

```typescript
public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.ExcelHeaderCellRendering = ExcelHeaderQueryCellInfo;
    return (IActionResult)exp.ExcelExport<TreeGridItems>(gridProperty, TreeGridItems.GetDefaultData());
}

private void ExcelHeaderQueryCellInfo(object excel)
{
    Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs)excel;
    List<string> headerValues = new List<string>();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    TreeGridExcelExport exp = new TreeGridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}
```
