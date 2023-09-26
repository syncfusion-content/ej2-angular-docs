

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent,  ToolbarItems, ToolbarService, PageService, PdfExportService, ExcelExportService  } from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    providers: [ToolbarService, PageService, PdfExportService,ExcelExportService],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID'
    parentIdMapping='parentID' [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='initialPage'
    [toolbar]='toolbarOptions' [allowPdfExport]='true' [allowExcelExport]='true'
    (excelExportComplete)='excelExportComplete()' (pdfExportComplete)='pdfExportComplete()'
    (toolbarClick)='toolbarClick($event)'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' width='100'></e-column>
            <e-column field='EndDate' headerText='Start Date' textAlign='Right' [format]='formatOptions'width='100'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public toolbarOptions?: ToolbarItems[];
    public initialPage?: object;
    public queryClone?: any;

    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
        this.initialPage = { pageCount: 5, pageSize: 5 };
    }
    toolbarClick(args: ClickEventArgs) {
      if (this.treegridObj && args.item.text === 'PDF Export') {
        this.queryClone = this.treegridObj.query;
        this.treegridObj.query = new Query().addParams("recordcount", "12");
        this.treegridObj.pdfExport();
      }
      else if (this.treegridObj && args.item.text === 'Excel Export') {
        this.queryClone = this.treegridObj.query;
        this.treegridObj.query = new Query().addParams("recordcount", "12");
        this.treegridObj.excelExport();
      }
    }
    pdfExportComplete() {
        if (this.treegridObj) {
          this.treegridObj.query = this.queryClone;
        }
    }
    excelExportComplete() {
        if (this.treegridObj) {
          this.treegridObj.query = this.queryClone;
        }
    }
  }



