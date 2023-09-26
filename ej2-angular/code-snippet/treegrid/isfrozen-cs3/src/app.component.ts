

import { TreeGrid, Selection, Edit, Toolbar, EditSettingsModel, FreezeService } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' childMapping='subtasks' height='310' [treeColumnIndex]='0' [toolbar]='toolbar' [editSettings]='editSettings' allowSelection='false' enableHover='false' (actionComplete)="actionComplete($event)">
        <e-columns>
            <e-column field='taskID' headerText='Task ID' [validationRules]='validationrules' width='90' textAlign='Right'></e-column>
            <e-column field='taskName' headerText='Task Name' width='200' freeze='Left'></e-column>
            <e-column field='duration' headerText='Duration' [validationRules]='validationrules' width='110' textAlign='Right'></e-column>
            <e-column field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right'></e-column>
            <e-column field='endDate' headerText='End Date' width='150' format='yMd' textAlign='Right'></e-column>
            <e-column field='progress' headerText='Progress' width='110' textAlign='Right'></e-column>
            <e-column field='priority' headerText='Priority' width='110' freeze='Right'></e-column>
            <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
        </e-columns>
    </ejs-treegrid>`,
    providers: [FreezeService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: string[];
    public editSettings?: EditSettingsModel;
    public validationrules?: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.validationrules = { required: true };
    }

    actionComplete(args: any) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('duration', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('taskID', { max: 20 });
        }
    }
}



