

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid } from '@syncfusion/ej2-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' (created) = 'created($event)' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150>
                     <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [dataSource]='dropdata'
                             [fields]='fields' [popupHeight]='height'></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public data?: Object[];
    public filterSettings?: Object;
    public dropdata: string[] = [];
    public fields: object = { text: 'taskName', value: 'taskName' };
    public height = '220px';
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};
    }
    created(args: any): void{
        this.dropdata = DataUtil.distinct(((this.treegrid as TreeGridComponent).grid as Grid).dataSource as any, 'taskName') as string[];
    }
}


