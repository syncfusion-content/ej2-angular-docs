

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, ToolbarItems, ToolbarService, PdfExportService, PageService, ExcelExportService, SelectionSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { PdfExportProperties } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    providers: [ToolbarService, PdfExportService, PageService, ExcelExportService],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='initialPage' [allowPdfExport]='true' [allowExcelExport]='true' [toolbar]='toolbarOptions' (toolbarClick)='toolbarClick($event)' [selectionSettings]='selectionSettings'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' width='100'></e-column>
            <e-column field='EndDate' headerText='End Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' width='100'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public editOptions?: Object;
    public formatOptions?: Object;
    public toolbarOptions?: ToolbarItems[];
    public selectionSettings?: SelectionSettingsModel;
    public initialPage?: object;
    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.editOptions = { params: { format: 'y/M/d' } };
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.initialPage = { pageCount: 5, pageSize: 5 };
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
        this.selectionSettings = { type: 'Multiple'};
    }
    toolbarClick(args: ClickEventArgs) {
      if (this.treegridObj && args.item.text === 'PDF Export') {
                const selectedRecords = this.treegridObj.getSelectedRecords();
                const exportProperties = {
                    dataSource: selectedRecords,
                };
                this.treegridObj.pdfExport(exportProperties);
      }
      else if (this.treegridObj && args.item.text === 'Excel Export') {
                const selectedRecords = this.treegridObj.getSelectedRecords();
                const exportProperties = {
                    dataSource: selectedRecords,
                };
                this.treegridObj.excelExport(exportProperties);
            }
    }
  }



