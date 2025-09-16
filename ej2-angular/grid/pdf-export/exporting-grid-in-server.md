---
layout: post
title: Exporting Grid in Server in Angular Grid Component | Syncfusion
description: Learn here all about Exporting grid in server in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting grid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting Grid in Server in Angular Grid Component

The Grid component supports exporting grid data to a PDF document on the server using the Grid server export library. Server-side PDF export provides enhanced security and flexibility for export operations. To enable server-side PDF exporting, configure all required server dependencies and implement appropriate server-side logic.

## Server dependencies

For server-side PDF exporting with the Syncfusion Grid component, include the following dependencies in your server project:

* Syncfusion.EJ2
* Syncfusion.EJ2.GridExport

These packages are available as part of Essential Studio and can be installed via [nuget.org](https://www.nuget.org/).

## Server configuration

To export the grid data as a PDF document on the server, perform the following configuration using an ASP.NET Core Controller action:

1. Import the necessary Syncfusion libraries and dependencies in your server-side codebase.
2. Define a controller action to handle the server-side PDF export. This action should receive grid properties from the client and initiate the export logic.
3. Invoke the [serverPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#serverpdfexport) method on the Grid to pass grid properties and export options to the server endpoint. This method uses the specified server action URL.

The sample below illustrates server configuration using an ASP.NET Core Controller Action:

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

> **Note:** For quick implementation and testing, refer to the example available on [GitHub](https://github.com/SyncfusionExamples/Angular-EJ2-Grid-server-side-exporting).

## Export grid as memory stream

The Grid can export its data as a memory stream rather than directly downloading the file in the browser. To obtain a memory stream of the exported grid, set the `AsMemoryStream` parameter to **true** in the [PdfExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridPdfExport.html#Syncfusion_EJ2_GridExport_GridPdfExport_PdfExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_PdfExportProperties_) method.

Example for exporting as a memory stream:

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

The [Essential PDF](https://help.syncfusion.com/file-formats/pdf/overview) library allows merging multiple memory streams into a single PDF file. For further details on merging, see the [merge documents documentation](https://help.syncfusion.com/file-formats/pdf/merge-documents).

You can merge a memory stream, a file stream, or a local file with the exported Grid's memory stream as shown below.

### Merging with an existing memory stream

To merge with an existing memory stream, directly use it along with the Grid's memory stream using the [Merge](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_Syncfusion_Pdf_PdfDocumentBase_Syncfusion_Pdf_Parsing_PdfLoadedDocument_) method of [PdfDocumentBase](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html):

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

To merge with a file stream, combine the file stream with the Grid's memory stream:

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

To merge a local file, convert it into a file stream before merging:

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

To download the merged memory stream as a file in the browser, convert it into a `FileStreamResult`:

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

The Grid component allows customizing column header styles, including rotating header text in server-side exported PDF files. This can be accomplished using the `BeginCellLayout` event of the `PdfExportProperties` class with a custom event handler.

1. Handle the [PdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfheaderquerycellinfo) event to collect column header details for the PDF export.
2. Use the `BeginCellLayout` event of `PdfExportProperties` to apply rotation and custom drawing of the header text.

In the below example, the `DrawString` method is used to rotate and render the header text during the `BeginCellLayout` event:

> **Note**: PDF exporting does not support client-side column header rotation.

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

You can pass additional parameters to the server when exporting data, which allows customizing export behavior or including extra information as needed.

Use the [query](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event. The `addParams` method within the query property allows you to append parameters to the export request.

The following demonstrates adding parameters (e.g., **recordcount** as **15**) to a PDF export request within the `toolbarClick` event:

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

* Exporting detail and caption templates is not supported in server-side exporting.
* Multiple grid exporting is not supported with server-side exporting.
