---
layout: post
title: Exporting grid in server in Angular Grid component | Syncfusion
description: Learn here all about Exporting grid in server in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting grid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in server in Angular Grid component

The Grid have an option to export the data to Excel in server side using Grid server export library.

## Server dependencies

The Server side export functionality is shipped in the Syncfusion.EJ2.GridExport package, which is available in Essential Studio and [nuget.org](https://www.nuget.org/).The following list of dependencies is required for Grid server side Excel exporting action.

* Syncfusion.EJ2
* Syncfusion.EJ2.GridExport

## Server configuration

The following code snippet shows server configuration using ASP.NET Core Controller Action.

To Export the Grid in server side, You need to call the [`serverExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#serverexcelexport) method for passing the Grid properties to server exporting action.

```typescript

public ActionResult ExcelExport([FromForm] string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return exp.ExcelExport<OrdersDetails>(gridProperty, orddata);
}

private Grid ConvertGridObject(string gridProperty)
{
    Grid GridModel = (Grid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Grid));
    GridColumnModel cols = (GridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(GridColumnModel));
    GridModel.Columns = cols.columns;
    return GridModel;
}

public class GridColumnModel
{
    public List<GridColumn> columns { get; set; }
}
public IActionResult UrlDatasource([FromBody]DataManagerRequest dm)
{
    IEnumerable DataSource = OrdersDetails.GetAllRecords();
    DataOperations operation = new DataOperations();
    int count = DataSource.Cast<OrdersDetails>().Count();
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}

```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbar' height='273px'(toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public toolbar: ToolbarItems[];

    public dataManager: DataManager = new DataManager({
        url: 'Home/UrlDatasource',
        adaptor: new UrlAdaptor()
    });

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = this.dataManager;
        this.toolbar = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            this.grid.serverExcelExport('Home/ExcelExport');
        }
    }
}

```

>Note: Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/Angular-EJ2-Grid-server-side-exporting).

## CSV Export in server side

You can export the Grid to CSV format by using the [`serverCsvExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#servercsvexport) method which will pass the Grid properties to server.

In the below demo, we have invoked the above method inside the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event. In server side, we have deserialized the Grid properties and passed to the `CsvExport` method which will export the properties to CSV format.

```typescript

        public ActionResult CsvGridExport([FromForm] string gridModel)
        {
            GridExcelExport exp = new GridExcelExport();
            Grid gridProperty = ConvertGridObject(gridModel);
            return exp.CsvExport<OrdersDetails>(gridProperty, orddata);
        }

        private Grid ConvertGridObject(string gridProperty)
        {
           Grid GridModel = (Grid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Grid));
           GridColumnModel cols = (GridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(GridColumnModel));
           GridModel.Columns = cols.columns;
           return GridModel;
        }

        public IActionResult UrlDatasource([FromBody]DataManagerRequest dm)
        {
            IEnumerable DataSource = OrdersDetails.GetAllRecords();
            DataOperations operation = new DataOperations();
            int count = DataSource.Cast<OrdersDetails>().Count();
            return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
        }


```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbar' height='273px'(toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public toolbar: ToolbarItems[];

    public dataManager: DataManager = new DataManager({
        url: 'Home/UrlDatasource',
        adaptor: new UrlAdaptor()
    });

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = this.dataManager;
        this.toolbar = ['CsvExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_csvexport') { // 'Grid_csvexport' -> Grid component id + _ + toolbar item name
            this.grid.serverCsvExport('Home/CsvGridExport');
        }
    }
}

```

## Rotate a header text to a certain degree in the exported grid on the server side

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the `ServerExcelHeaderQueryCellInfo` event of the Grid.

The `ServerExcelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported in the server side. Customize the column header in this event.

In the following demo, using the `HeaderCellRotate` method of the `GridExcelExport` class in the `ServerExcelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

```typescript
public ActionResult ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    gridProperty.ServerExcelHeaderQueryCellInfo = ExcelHeaderQueryCellInfo;
    IEnumerable data = Utils.DataTableToJson(dt);
    var result = exp.ExcelExport<dynamic>(gridProperty, data);
    return result;
}
private void ExcelHeaderQueryCellInfo(object excel)
{
    ServerExcelHeaderQueryCellInfoEventArgs name = (ServerExcelHeaderQueryCellInfoEventArgs)excel;
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    GridExcelExport exp = new GridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}

```

## Limitations

* The export feature for detail templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.