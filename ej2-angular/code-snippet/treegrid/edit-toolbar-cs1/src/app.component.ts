

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [enableAutoFill]='true'  [enableHover]='false' [allowPaging]='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [allowSelection]='true' [toolbar]='toolbar' [selectionSettings]='selectionOptions' height='220' childMapping='subtasks' [treeColumnIndex]='1'>
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
    public editSettings?: EditSettingsModel;
    public pageSettings?: Object ;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' };
        this.editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        this.toolbar = ['Add', 'Update', 'Cancel'];
        this.pageSettings = {pageSize: 10};
    }
}


