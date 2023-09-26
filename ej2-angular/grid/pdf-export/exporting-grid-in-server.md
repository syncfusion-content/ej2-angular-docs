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

The Grid component provides an option to export grid data to a PDF document on the server side using the Grid server export library. This allows you to perform PDF export operations on the server, providing additional security and flexibility. To enable server-side PDF exporting, you need to configure the server dependencies and implement the necessary server configuration.

## Server dependencies

To enable server-side PDF exporting in the Syncfusion Angular Grid component, you need to include the following dependencies:

* Syncfusion.EJ2
* Syncfusion.EJ2.GridExport

These dependencies are available in the Essential Studio package and can also be obtained from [nuget.org](https://www.nuget.org/).

## Server configuration

To export the grid data to a PDF document on the server side, you need to perform the following server configuration using an ASP.NET Core Controller Action:

1. Set up the necessary dependencies and imports in your server-side code.

2. Define a controller action that handles the server-side PDF export. This action should receive the Grid properties from the client-side and initiate the PDF export operation on the server.

3. Use the [serverPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#serverpdfexport) method to pass the Grid properties to the server exporting action. This method allows you to specify the server action URL and other export options.

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
>Note: Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/Angular-EJ2-Grid-server-side-exporting).

## Rotate a header text in the exported grid

Grid component provides support for customizing column header styles, including rotating the header text to a certain degree in the exported PDF file on the server side. To achieve this requirement, you can use the `BeginCellLayout` event of the `PdfExportProperties` class along with a custom event handler.

1. The [PdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfheaderquerycellinfo) event is triggered when creating a column header for the PDF document to be exported. In this event, you can collect the column header details and handle customizations.

9. In the `BeginCellLayout` event handler, you can use the `Graphics.DrawString` method to rotate the header text to the desired degree, will be triggered when creating a column header for the PDF document to be exported. Collect the column header details in this event and handle the custom in the `BeginCellLayout` event handler.

In the following demo, the `DrawString` method from the `Graphics` is used to rotate the header text of the column header inside the `BeginCellLayout` event handler.

> A PDF exporting is not supported to rotate the column header on the client side.

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
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // give the value for bounds x and Y by the user
    args.Graphics.RotateTransform(-60);   // give the rotate degree value by the user
    // Draw the text at particular bounds.
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

## Limitations

* The export feature for detail templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.