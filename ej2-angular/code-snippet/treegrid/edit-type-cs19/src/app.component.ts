
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { sampleData1 } from './datasource';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { EditSettingsModel, ToolbarItems,EditService, ToolbarService, PageService  } from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
@Component({
    imports: [
    TreeGridAllModule,TimePickerModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=250></e-column>
                        <e-column field='startDate' headerText='Start Time' width='140' format='hh :mm a' textAlign='Right'>
                            <ng-template #editTemplate let-data>
                                <ejs-timepicker   [(value)]='taskData.startDate'></ejs-timepicker >
                            </ng-template>
                        </e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public taskData?: object | any;
     
    ngOnInit(): void {
        this.data = sampleData1;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.taskData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['startDate'] = this.taskData['startDate'];
        }
    }

}