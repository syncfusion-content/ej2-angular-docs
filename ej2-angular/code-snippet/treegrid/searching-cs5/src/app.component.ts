

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, SearchSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button ej-button id='clear' (click)='clearSearch()'>Clear Search</button>
                <ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' childMapping='subtasks' [searchSettings]='searchSettings'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public searchSettings?: SearchSettingsModel;
    @ViewChild('treegrid') public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.searchSettings = { fields: ['taskName'], operator: 'contains', key: 'Pl', ignoreCase: true };
        this.toolbarOptions = ['Search'];
    }

    clearSearch() {
        (this.treegridObj as TreeGridComponent).searchSettings.key = '';
    }
}



