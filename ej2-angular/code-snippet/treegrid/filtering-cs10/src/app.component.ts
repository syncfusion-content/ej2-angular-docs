

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<div style="padding-top: 7px; display: inline-block">Hierarchy Mode<ejs-dropdownlist (change)='onChange($event)' [dataSource]='dropData' value='Parent' [fields]='fields'></ejs-dropdownlist></div>
    <ejs-treegrid #treegrid [dataSource]='data' height='210' [treeColumnIndex]='1' [allowFiltering]='true'  childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public dropData?: Object[];
    public fields?: Object;
     @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.dropData = [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ];
    this.fields = { text: 'mode', value: 'id' };
    }
        onChange(e: ChangeEventArgs): any {
        let mode: any = <string>e.value;
        (this.treeGridObj as TreeGridComponent).filterSettings.hierarchyMode = mode;
        this.treeGridObj?.clearFiltering();
    }
}



