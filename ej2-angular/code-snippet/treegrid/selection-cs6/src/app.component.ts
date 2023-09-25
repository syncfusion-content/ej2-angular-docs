

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template:`<button ej-button class='e-flat' (click)='click()'>Clear Selection</button>
                <ejs-treegrid #treegrid [selectedRowIndex]='2' [dataSource]='data' [treeColumnIndex]='1' [selectionSettings]='selectionOptions' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { type: 'Multiple' };
    }

    click(): void{
        (this.treegrid as TreeGridComponent).clearSelection();
    }
}



