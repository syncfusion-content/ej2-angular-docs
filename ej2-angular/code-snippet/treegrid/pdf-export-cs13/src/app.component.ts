

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData, sampleData } from './datasource';
import { ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' [allowPdfExport]='true' (pageSettings)='pager' [treeColumnIndex]='1' childMapping='subtasks' [toolbar]='toolbarOptions'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>
                <br>
                <ejs-treegrid [dataSource]='data' height='220' parentIdMapping='parentID' idMapping='TaskID' [allowPaging]='true' [treeColumnIndex]='1'>
        <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>
                
                `
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    pager?: { pageSize: number; };
    firstTreeGrid?: TreeGridComponent;
    secondTreeGrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.pager = { pageSize: 7 };
        this.toolbarOptions = ['PdfExport'];
    }
    toolbarClick(args: Object | any) : void {
        if (args['item'].text === 'PDF Export') {
            let firstGridPdfExport: Promise<Object> = this.firstTreeGrid?.pdfExport({}, true) as any;
            firstGridPdfExport.then((pdfData: Object) => {
                this.secondTreeGrid?.pdfExport({}, false, pdfData);
            });
        }
    }
}



