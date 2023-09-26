

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='315' >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' width='90'></e-column>
            <e-column field='EndDate' headerText='End Date' textAlign='Right' [format]='formatOptions' width='90'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column  headerText='Priority' width='90'>
             <ng-template #template let-data>
             <div>
              <ejs-dropdownlist value='Normal' [dataSource]='dropData' (change)='onChange($event)' >
              </ejs-dropdownlist>
             </div>
            </ng-template>
            </e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public dropData?: string[];

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.dropData = ['Normal', 'Low', 'High', 'Critical', 'Breaker'];
    }
    public onChange(args: any): void {
     /** Event will trigger when you have change the value in dropdown column */
     alert(args.value);
    }
}



