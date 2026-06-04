---
layout: post
title: Angular Grid – PDF Server Export | Syncfusion
description: Angular Grid PDF server export covers server‑side PDF generation, API endpoints, and efficient large grid export without relying on client‑side processing.
platform: ej2-angular
control: Exporting grid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Performing Server Side PDF Export in the Angular Grid

The Grid component provides the ability to export grid data to a PDF document on the server side using the Grid server export library. Server-side PDF export operations provide additional security and flexibility. Enabling server-side PDF exporting requires configuring server dependencies and implementing the necessary server configuration.

## Server dependencies

To enable server-side PDF exporting in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, include the following dependencies:

* `Syncfusion.EJ2`
* `Syncfusion.EJ2.GridExport`

These dependencies are available in the Essential Studio<sup style="font-size:70%">&reg;</sup> package and can also be obtained from [nuget.org](https://www.nuget.org/).

## Server configuration

To export grid data to a PDF document on the server side, perform the following server configuration using an ASP.NET Core Controller Action:

1. Set up the necessary dependencies and imports in the server-side code.

2. Define a controller action that handles server-side PDF export. This action receives Grid properties from the client-side and initiates the PDF export operation on the server.

3. Use the [serverPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#serverpdfexport) method to pass Grid properties to the server exporting action. This method specifies the server action URL and other export options.

The following code snippet shows server configuration using ASP.NET Core Controller Action.

```typescript

public ActionResult PdfExport([FromForm] string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return exp.PdfExport<OrdersDetails>(gridProperty, orddata);
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
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbar' height='273px' (toolbarClick)='toolbarClick($event)'>
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
        this.toolbar = ['PdfExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            this.grid.serverPdfExport('Home/PdfExport');
        }
    }
}
```

> Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/Angular-EJ2-Grid-server-side-exporting).


## Export grid as memory stream

The Grid provides the ability to export data as a memory stream instead of downloading it as a file in the browser. To obtain the memory stream of the exported Grid, set the `AsMemoryStream` parameter to `true` in the [PdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#pdfexport) method.

The following code demonstrates getting the memory stream of exported grid.

```ts
public object PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // Pass third parameter as true to get the MemoryStream of exported grid data
    return (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
}
```

## Merge grid's memory stream

The [Essential<sup style="font-size:70%">&reg;</sup> PDF](https://help.syncfusion.com/file-formats/pdf/overview) library merges multiple memory streams into a single stream. For more information about the merge option, refer to this [documentation](https://help.syncfusion.com/file-formats/pdf/merge-documents).

A memory stream, file stream, or local file can be merged with the Grid's memory stream in the following ways:

### Merging with an existing memory stream

When an existing memory stream is available, it can be directly used to merge with the Grid's memory stream.

In the following code, the [Merge](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_Syncfusion_Pdf_PdfDocumentBase_Syncfusion_Pdf_Parsing_PdfLoadedDocument_) method of the [PdfDocumentBase](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html) class merges the grid's memory stream with an existing memory stream.

```ts
using Syncfusion.Pdf;

public MemoryStream ms1; // Existing memory stream

public object PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // Memory stream of exported grid data
    MemoryStream ms2 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    PdfDocument finalDoc = new PdfDocument();
    Stream[] streams = { ms1, ms2 }; // ms1 = existing stream, ms2 = grid's stream
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    finalDoc.Close(true);
    ms1.Dispose();
    ms2.Dispose();
    return ms3;
}
```

### Merging with an existing file stream

When an existing file stream is available, it can be directly used to merge with the Grid's memory stream. In the following code, the existing file stream is merged with the Grid's memory stream.

```ts
using Syncfusion.Pdf;

public FileStream fs1; // Existing file stream

public ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    PdfDocument finalDoc = new PdfDocument();
    Stream[] streams = { fs1, ms1 }; // fs1 = file stream, ms1 = grid's stream
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    return ms3;
}
```

### Merging with a local file

To merge a local file with the Grid's memory stream, convert it into a file stream before merging. In the following code, the existing local file is merged with the Grid's memory stream.

```ts
using Syncfusion.Pdf;

// Convert local file to a file stream
public FileStream fs1 = new FileStream("D:/PdfDoc.pdf", FileMode.Open, FileAccess.Read);

public ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    PdfDocument finalDoc = new PdfDocument();
    Stream[] streams = { fs1, ms1 }; // fs1 = local file stream, ms1 = grid's stream
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    return ms3;
}
```

### Downloading the merged memory stream

The merged memory stream can be downloaded by converting it into a `FileStreamResult`. In the following code, the merged memory stream is downloaded to the browser.

```ts
using Syncfusion.Pdf;

public ActionResult PdfExport(string gridModel)
{
    PdfDocument finalDoc = new PdfDocument();
    // ms1 and ms2 are the streams to be merged
    Stream[] streams = { ms1, ms2 };
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);
    ms3.Position = 0;
    FileStreamResult fileStreamResult = new FileStreamResult(ms3, "application/pdf");
    fileStreamResult.FileDownloadName = "Export.pdf";
    finalDoc.Close(true);
    ms1.Dispose();
    ms2.Dispose();
    return fileStreamResult;
}
```

## Rotating header text in the exported grid

The Grid provides the ability to rotate the header text while exporting the grid on the server side.

1. The server-side event [PdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfheaderquerycellinfo) is triggered when creating a column header for the PDF document to be exported. In this event, column header details can be collected and customizations can be handled.

2. In the `BeginCellLayout` event handler, the `Graphics.DrawString` method can be used to rotate the header text to the desired degree. This event is triggered when creating a column header for the PDF document to be exported, and column header details are collected in this event with custom handling done in the `BeginCellLayout` event handler.

In the following demo, the `DrawString` method from the `Graphics` is used to rotate the header text of the column header inside the `BeginCellLayout` event handler.

> Rotating column headers is not supported in client side PDF exporting.

```typescript
public ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    gridProperty.ServerPdfHeaderQueryCellInfo = PdfHeaderQueryCellInfo;
    PdfGrid grid = new PdfGrid();
    PdfExportProperties pdfExportProperties = new PdfExportProperties();
    pdfExportProperties.IsRepeatHeader = true;
    pdfExportProperties.BeginCellLayout = new PdfGridBeginCellLayoutEventHandler(BeginCellEvent);
    gridProperty.ServerPdfQueryCellInfo = PdfQueryCellInfo;
    IEnumerable data = Utils.DataTableToJson(dt);
    var result = exp.PdfExport<dynamic>(gridProperty, data, pdfExportProperties);
    return result;
}
public void BeginCellEvent(object sender, PdfGridBeginCellLayoutEventArgs args)
{
    PdfGrid grid = (PdfGrid)sender;
    var brush = new PdfSolidBrush(new PdfColor(Color.DimGray));
    args.Graphics.Save();
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // User-defined X, Y positioning
    args.Graphics.RotateTransform(-60);   // User-defined rotation degree
    args.Graphics.DrawString(headerValues[args.CellIndex], new PdfStandardFont(PdfFontFamily.Helvetica, 10), brush, new PointF(0, 0));
    if (args.IsHeaderRow)
        {
            grid.Headers[0].Cells[args.CellIndex].Value = string.Empty;
        }
    args.Graphics.Restore();
}
private void PdfHeaderQueryCellInfo(object pdf)
{
    ServerPdfHeaderQueryCellInfoEventArgs name = (ServerPdfHeaderQueryCellInfoEventArgs)pdf;
    PdfGrid grid = new PdfGrid();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
    SizeF size = font.MeasureString(longestString);
    name.Headers[0].Height = size.Width * 2;
}
```

## Passing additional parameters to the server during export

Passing additional parameters to the server when exporting data in the Angular Grid provides flexibility to include extra information or customize the export process based on specific requirements.

This is achieved by utilizing the [query](https://ej2.syncfusion.com/angular/documentation/api/grid#query) property and the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event. Within the `query` property, invoke the `addParams` method to add parameters to the request.

The following example demonstrates passing additional parameters to the server when PDF exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically "recordcount" as "15", are passed using the addParams method and displayed as a message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/passing-parameters-on-server/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/passing-parameters-on-server/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/passing-parameters-on-server" %}

## Limitations

* The export feature for detail and caption templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.