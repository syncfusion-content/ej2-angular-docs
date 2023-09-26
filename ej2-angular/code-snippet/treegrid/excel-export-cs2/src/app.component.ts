

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-treegrid';
import { ExcelExportProperties, RowDataBoundEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' (queryCellInfo)='queryCellInfo($event)' (excelQueryCellInfo)='excelQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' [allowExcelExport]='true' [pageSettings]='pager' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions'>
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
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    public toolbarOptions?: ToolbarItems[];

    ngOnInit(): void {
        this.data = sampleData;
        this.pager = { pageSize: 7 };
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: Object | any) : void {
        if (args['item'].text === 'Excel Export') {
            (this.treeGridObj as TreeGridComponent).excelExport();
        }
    }
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs | any): void {
        if(args.column.field == 'duration'){
            if(args.value === 0 || args.value === "") {
                args.style = {backColor: '#336c12'};
            }
            else if(args.value < 3) {
                args.style = {backColor: '#7b2b1d'};
            }
        }
    }
    queryCellInfo(args: RowDataBoundEventArgs | any): void {
        if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
            args.cell.style.background= '#336c12';
        } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
            args.cell.style.background= '#7b2b1d';
        }
    }
}



