

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';
import { RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1'  (rowSelected)='rowSelected($event)' [height]='267'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='150' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' width='90'></e-column>
            <e-column field='EndDate' headerText='Start Date' textAlign='Right' [format]='formatOptions'width='90'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            <e-column field='Progress' headerText='Progress' width='80' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
    }
    rowSelected(args: RowSelectEventArgs) {
        alert("row index: "+ " " + (args.row as HTMLTableRowElement).getAttribute('aria-rowindex'));
        alert("column index: "+ " " + ((args.target as Element).closest('td') as HTMLTableCellElement).getAttribute('aria-colindex'));
    }


}
