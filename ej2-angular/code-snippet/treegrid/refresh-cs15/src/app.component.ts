

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, CommandColumnService, ITreeData } from '@syncfusion/ej2-angular-treegrid';
import { QueryCellInfoEventArgs, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    providers: [ CommandColumnService ],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' childMapping='subtasks'  [treeColumnIndex]='1'(rowDataBound)='rowDataBound($event)' (queryCellInfo)='queryCellInfo($event)' [height]='280' >
        <e-columns>
            <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right'></e-column>
            <e-column field='taskName' headerText='Task Name' width='200' ></e-column>
            <e-column field='startDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' width='140'></e-column>
            <e-column field='endDate' headerText='Start Date' textAlign='Right' [format]='formatOptions'width='140'></e-column>
            <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            <e-column  headerText='Custom Button'  [commands]='commands' width='160' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public commands?: Object[];  

    ngOnInit(): void {
        this.data = sampleData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: onclick  } }];
    }
    queryCellInfo(args: QueryCellInfoEventArgs) {
        if (!(args.data as ITreeData).hasChildRecords){
            if ((args.cell as HTMLElement).classList.contains("e-unboundcell")) {
                ((args.cell as HTMLElement).querySelector('.e-unboundcelldiv') as HTMLElement).style.display = "none";
            }
        }
    }
    rowDataBound(args: RowDataBoundEventArgs) {
        if (!(args.data as ITreeData).hasChildRecords) {
            (args.row as HTMLElement).style.backgroundColor = 'green';
        }
    }

}