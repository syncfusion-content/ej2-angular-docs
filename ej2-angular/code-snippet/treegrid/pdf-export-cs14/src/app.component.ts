


import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid id='TreeGrid' [dataSource]='data' height='220' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' [allowPdfExport]='true' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions' (pdfExportComplete)='pdfExportComplete()'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')  public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args['item'].text === 'PDF Export') {
            (this.treegrid as TreeGridComponent).showSpinner();
            (this.treegrid as TreeGridComponent).pdfExport();
        }
    }

    pdfExportComplete(): void {
        (this.treegrid as TreeGridComponent).hideSpinner();
    }
}




