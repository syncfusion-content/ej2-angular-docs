

import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { SelectionSettingsModel, TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template:
    `<div style="padding-top: 7px; float:left">Hierarchy Mode</div><div style="padding-left: 10px; display: inline-block"><ejs-dropdownlist (change)='onChange($event)' [dataSource]='dropData' value='Parent' [fields]='fields'></ejs-dropdownlist></div>
        <ejs-treegrid #treegrid [dataSource]='data' [allowSelection]='true' [allowPaging]='true' height='230' copyHierarchyMode='Parent' [selectionSettings]='selectionOptions' [pageSettings]='pageSettings' childMapping='subtasks' [treeColumnIndex]='1'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='taskName' headerText='Task Name' width='200'></e-column>
            <e-column field='startDate' headerText='Start Date' width='100' format="yMd" textAlign='Right'></e-column>
            <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public dropData?: Object[];
    public fields?: Object;
    public selectionOptions?: SelectionSettingsModel;
    public pageSettings?: Object ;
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
    this.selectionOptions = { type: 'Multiple'};
    this.pageSettings = {pageSize: 10};
    }

    onChange(e: ChangeEventArgs): any {
        let mode: any = <string>e.value;
        (this.treeGridObj as TreeGridComponent).copyHierarchyMode = mode;
    }
}


