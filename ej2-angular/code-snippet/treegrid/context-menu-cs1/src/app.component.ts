

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, RowDD } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' [allowPaging]='true' pageSettings='pager'
    [contextMenuItems]='contextMenuItems'
    [allowResizing]='true' [allowSorting]='true' [treeColumnIndex]='1'  childMapping='subtasks' [allowExcelExport]='true' [allowPdfExport]='true'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pager?: Object;
    public editSettings?: Object;
    public contextMenuItems?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'Indent', 'Outdent'];
        this.pager = { pageSize: 8 }
    }
}



