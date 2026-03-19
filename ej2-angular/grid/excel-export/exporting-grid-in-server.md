---
layout: post
title: Angular Grid - Server-Side Export | Syncfusion
description: Angular Grid server‑side Excel export enables backend workbook generation, endpoint setup, and scalable large‑data exports without blocking clients.
platform: ej2-angular
control: Server-side Export
documentation: ug
domainurl: ##DomainURL##
---

# Server-Side Excel Export

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides server-side Excel export functionality using the Grid server export library. This approach enables Excel export operations to execute on the server, delivering enhanced security and flexibility. Server-side export requires configuring server dependencies and implementing the necessary server configuration.

> For client-side Excel export setup, refer to the [Excel Export Feature Guide](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-exporting).

## Server dependencies

Server-side export functionality for the Grid component requires specific dependencies to handle the export process on the server.

| **Dependency** | **Description** |
|---|---|
| `Syncfusion.EJ2` | Core package containing main components and functionalities of Syncfusion Essential JS 2. |
| `Syncfusion.EJ2.GridExport` | Server-side export functionality package for Grid component, providing APIs and tools to handle Excel data export. |

## Server configuration

Server configuration for Grid Excel export requires the following setup using an ASP.NET Core Controller Action:

| **Step** | **Action** | **Description** |
|---|---|---|
| 1 | Set up dependencies | Import necessary server-side dependencies and libraries. |
| 2 | Define controller action | Create action to receive Grid properties from client and initiate server export. |
| 3 | Call serverExcelExport | Use [serverExcelExport](https://ej2.syncfusion.com/angular/documentation/api/grid#serverexcelexport) method to pass Grid properties to server action URL. |

The following example demonstrates server configuration using ASP.NET Core Controller Action:

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

> Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/Angular-EJ2-Grid-server-side-exporting).

## CSV Export in server side

The Grid component provides powerful server-side CSV export capabilities using the [serverCsvExport](https://ej2.syncfusion.com/angular/documentation/api/grid#servercsvexport) method, enabling seamless export operations with enhanced server-side processing and CSV file generation.

To initiate CSV export, invoke the `serverCsvExport` method within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event. The server deserialize Grid properties and passes them to the `CsvExport` method, which handles exporting the properties to CSV format.

The following example demonstrates server-side CSV export implementation:

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

And on the client:

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

## Export grid as memory stream

The Grid component delivers flexible memory stream export capabilities, allowing data export as a memory stream for advanced processing instead of direct browser downloads. This powerful feature enables seamless integration with backend systems and custom file handling workflows. To obtain the memory stream of exported Grid data, set the `AsMemoryStream` parameter to `true` in the [ExcelExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_ExcelExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) and [CsvExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_CsvExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) methods.

The following example demonstrates obtaining the memory stream of exported grid data:

```ts
public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // Set third parameter to true for memory stream
    return (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}

public object CsvExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return (MemoryStream)exp.CsvExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}
```

## Merge Grid memory stream

The powerful [Essential XlsIO](https://help.syncfusion.com/file-formats/xlsio/overview) library enables seamless merging of multiple memory streams into a single stream, providing efficient data consolidation capabilities for complex export scenarios. For comprehensive information about merge options and advanced worksheet manipulation, refer to the [XlsIO documentation](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet).

The Grid's memory stream can be merged with an existing memory stream, file stream, or local file using the following flexible approaches.

### Merging with an existing memory stream

Memory stream merging provides efficient data consolidation capabilities. To merge the Grid's memory stream with an existing memory stream, use the `ExcelEngine` and `AddCopy` method of Worksheets directly.

The following example demonstrates merging the Grid's memory stream with an existing memory stream.

```ts
using Syncfusion.XlsIO;

public MemoryStream ms1; // existing memory stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // get the memory stream of exported grid data
    MemoryStream ms2 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    //New instance of ExcelEngine is created equivalent to launching Microsoft Excel with no workbooks open
    ExcelEngine excelEngine = new ExcelEngine();
    //Instantiate the Excel application object
    IApplication application = excelEngine.Excel;
    //Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of existing memory stream and grid's memory stream through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);

    //Copy all the worksheet from the Source workbook to the destination workbook
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    return ms3;
}
```

### Merging with an existing file stream

File stream integration enables seamless merging with existing file resources. To merge the Grid's memory stream with an existing file stream, directly use the file stream in the merge operation.

The following example demonstrates merging with an existing file stream:

```ts
using Syncfusion.XlsIO;

public FileStream fs1; // existing file stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the existing stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}
```

### Merging with a local file

Local file integration provides flexible merge capabilities. To merge a local file with the Grid's memory stream, first convert the local file into a file stream.

The following example demonstrates merging with a local file:

```ts
using Syncfusion.XlsIO;

// get the file stream of local file
public FileStream fs1 = new FileStream("D:/ExcelDoc.xlsx", FileMode.Open, FileAccess.Read); // ExcelDoc.xlsx is a local file which is located in local disk D.

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the local file's stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}
```

### Download merged memory stream

Download capabilities enable seamless file delivery to end users. The merged memory stream can be downloaded by converting it into a `FileStreamResult`.

The following example demonstrates downloading the merged memory stream to the browser:

```ts
using Syncfusion.XlsIO;

public ActionResult ExcelExport(string gridModel)
{
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of streams through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    // Save the MemoryStream into FileStreamResult
    FileStreamResult fileStreamResult = new FileStreamResult(ms3, "Application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    fileStreamResult.FileDownloadName = "Export.xlsx";
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    // return the file
    return fileStreamResult;
}
```

## Rotate header text in exported grid on server side

The Grid component delivers powerful server-side customization capabilities for column header styles in exported Excel files, including advanced text orientation, font color, and comprehensive visual styling options. This feature enhances the professional appearance of exported data and creates highly customized Grid representations in Excel documents.

To customize column headers, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#excelheaderquerycellinfo) event of the Grid. This event triggers when creating column headers for the Excel document during server-side export, allowing collection of column header details and handling of customizations.

The following example demonstrates rotating header text of column headers in the exported Excel document using the `HeaderCellRotate` method of the `GridExcelExport` class in the `ServerExcelHeaderQueryCellInfo` event:

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
    exp.HeaderCellRotate(name, 45); // Rotate to desired degree
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}
```

## Limitations

* The export feature for detail and caption templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.
