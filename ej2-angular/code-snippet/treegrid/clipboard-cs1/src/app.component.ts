

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [allowSelection]='true' [allowPaging]='true' height='260' [selectionSettings]='selectionOptions' [pageSettings]='pageSettings' childMapping='subtasks' [treeColumnIndex]='1'>
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
    public selectionOptions?: SelectionSettingsModel;
    public pageSettings?: Object ;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { type: 'Multiple'};
        this.pageSettings = {pageSize: 10};
    }
}


