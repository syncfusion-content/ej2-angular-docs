

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90 [validationRules]='taskidRule' ></e-column>
                    <e-column field='taskName' headerText='Task Name' editType='stringedit' textAlign='Left' width=180  [validationRules]='stringRule' ></e-column>
                    <e-column field='approved' headerText='Approved' editType='booleanedit' type='boolean' textAlign='Right' [displayAsCheckBox]='true' width=110></e-column>
                    <e-column field='priority' headerText='Priority' editType='dropdownedit' textAlign='Right' width=110 [validationRules]='stringRule' ></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType='datetimepickeredit' [validationRules]='dateRule' width=180 ></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' editType='numericedit' width=120 [edit]='editing' [validationRules]='progressRule' ></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public editing?: Object;
    public formatOptions?: Object;
    public editOptions?: Object;
    public stringRule?: Object;
    public taskidRule?: Object;
    public progressRule?: Object;
    public dateRule?: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        this.editing = { params: { format: 'n' } };
        this.formatOptions = { format: 'M/d/y hh:mm a', type: 'dateTime' };
        this.progressRule = { number: true, min: 0 };
        this.taskidRule = { required: true, number: true };
        this.dateRule = { date: true };
        this.stringRule = { required: true };
    }
}



