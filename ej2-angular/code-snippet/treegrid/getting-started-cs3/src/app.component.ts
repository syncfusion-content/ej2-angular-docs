

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' [sortSettings]="sortSettings"
                [allowSorting]="true" childMapping='subtasks' [allowPaging]="true" [pageSettings]='pageSettings'>
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
    public sortSettings?: SortSettingsModel;
    public pageSettings?: PageSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.sortSettings = { columns: [{ field: 'taskName', direction: 'Ascending' }, { field: 'taskID', direction: 'Descending' }]  };
        this.pageSettings = { pageSize: 6 };
    }
}


