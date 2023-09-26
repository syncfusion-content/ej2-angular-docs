

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1'  [allowFiltering]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80>
                            <ng-template #filterTemplate let-data>
                                <ejs-dropdownlist id='dropdown' [(ngModel)]="data.priority" [enabled]="data.column.allowFiltering"
                                (change)=onChange($event) [dataSource]='dropdata' [fields]='fields'[popupHeight]='height' ></ejs-dropdownlist>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public data?: Object[];
    public fields: object = { text: 'Priority', value: 'priority' };
    public height = '220px';
    public dropdata: string[] = DataUtil.distinct(sampleData, 'priority') as string[];
    public onChange(args: any): void {
        this.treegrid?.filterByColumn('priority', 'equal', args.value);
    }
    ngOnInit(): void {
        this.data = sampleData;
    }
}


