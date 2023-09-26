

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
    TreeGridComponent, ToolbarItems, ToolbarService, PdfExportService,
    PageService, SelectionSettingsModel
} from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid id='TreeGrid' [dataSource]='data' height='220' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' [allowPdfExport]='true' [pageSettings]='pager' [treeColumnIndex]='1' [selectionSettings]='selectionSettings' childMapping='subtasks' [toolbar]='toolbarOptions'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    providers: [ToolbarService, PdfExportService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public selectionSettings?: SelectionSettingsModel;
    public initialPage?: object;
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
pager: any;
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['PdfExport'];
        this.selectionSettings = { type: 'Multiple' };
    }

    toolbarClick(args: ClickEventArgs) {
        if (args.item.id === 'TreeGrid_gridcontrol_pdfexport') {
            const selectedRecords = (this.treegrid as TreeGridComponent).getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            this.treegrid?.pdfExport(exportProperties);
        }
    }
}



