---
layout: post
title: Exporting TreeGrid on the server in Angular TreeGrid | Syncfusion
description: Learn how to export the Angular TreeGrid component to PDF on the server side using server export libraries and configuration with Syncfusion Essential JS 2.
platform: ej2-angular
control: Exporting TreeGrid in server 
documentation: ug
domainurl: ##DomainURL##
---

# PDF Exporting TreeGrid on the server in Angular TreeGrid component

The TreeGrid provides an option to export data to PDF on the server side using the TreeGrid server export library.

## Server dependencies

The server-side export functionality is available in the `Syncfusion.EJ2.TreeGridExport` package, which is distributed in Essential Studio<sup style="font-size:70%">&reg;</sup> and on [nuget.org](https://www.nuget.org/). The following dependencies are required for TreeGrid server-side PDF exporting:

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The following code snippet demonstrates server configuration using an ASP.NET Core Controller Action.

To export the TreeGrid on the server side, call the [`serverPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#serverpdfexport) method, which sends the TreeGrid properties to the server-side exporting action.

```typescript

public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}
public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToPdf<TreeData>(gridProperty, TreeData.GetDefaultData());
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
        this.toolbar = ['PdfExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'TreeGrid_gridcontrol_pdfexport') { // 'TreeGrid_pdfexport' -> TreeGrid component id + _ + toolbar item name
            this.treegrid.serverPdfExport('Home/PdfExport');
        }
    }
}

```
## Rotate a header text to a certain degree in the exported TreeGrid on the server side

The TreeGrid supports customization of column header styles—such as text orientation and font color—in the exported PDF file. To achieve this, define the `BeginCellLayout` event of the `PdfExportProperties` and create an event handler to perform the required actions.

The `PdfHeaderCellRendering` event is triggered when creating a column header in the PDF document. Collect column header details in this event and handle the customization inside the BeginCellLayout event handler.

In the following demo, the `DrawString` method from the `Graphics` object is used to rotate the column header text inside the `BeginCellLayout` event handler.

> PDF exporting does not support rotating the column header text on the client side.

```typescript

public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridPdfExport exp = new TreeGridPdfExport();
    TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.PdfHeaderCellRendering = PdfHeaderQueryCellInfo;
    PdfGrid grid = new PdfGrid();
    Syncfusion.EJ2.TreeGridExport.PdfExportProperties pdfExportProperties = new Syncfusion.EJ2.TreeGridExport.PdfExportProperties();
    pdfExportProperties.IsRepeatHeader = true;
    exp.BeginCellLayout = new PdfGridBeginCellLayoutEventHandler(BeginCellEvent);
    System.Collections.IEnumerable data = Syncfusion.EJ2.Base.Dat.DataTableToJson(ViewBag.dataSource);
    var result = exp.PdfExport<dynamic>(gridProperty, data, pdfExportProperties);
    return View();
}

public void BeginCellEvent(object sender, PdfGridBeginCellLayoutEventArgs args)
{
    PdfGrid grid = (PdfGrid)sender;
    var brush = new PdfSolidBrush(new PdfColor(Color.DimGray));
    args.Graphics.Save();
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // Set transform X and Y as needed
    args.Graphics.RotateTransform(-60);   // Set rotation degree as needed
    // Draw the text at the specified bounds.
    args.Graphics.DrawString(headerValues[args.CellIndex], new PdfStandardFont(PdfFontFamily.Helvetica, 10), brush, new PointF(0, 0));
    if (args.IsHeaderRow)
    {
        grid.Headers[0].Cells[args.CellIndex].Value = string.Empty;
    }
    args.Graphics.Restore();
}

private void PdfHeaderQueryCellInfo(object pdf)
{
    Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs)pdf;
    PdfGrid grid = new PdfGrid();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
    SizeF size = font.MeasureString(longestString);
    name.Headers[0].Height = size.Width * 2;
}

```
## Passing additional parameters to the server while exporting

Passing additional parameters to the server when exporting data in the Syncfusion Angular TreeGrid involves providing flexibility to include extra information or customize the export process based on specific requirements.

You can achieve this by utilizing the [query](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event. Within the `query` property, you can invoke the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method to add parameters to the request.

The following example demonstrates how to pass additional parameters to the server when Excel exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically **recordcount** as **12**, are passed using the `addParams` method and displayed as a message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs19" %}