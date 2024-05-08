


import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { sampleData ,drop_Data} from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
@Component({
    imports: [
    TreeGridAllModule,DropDownListModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=250>
                            <ng-template #editTemplate let-data3>
                                <ejs-dropdownlist [dataSource]='datas' [fields]='fields' [(value)]="taskData.taskName">
                                    <ng-template #headerTemplate="" let-data2="">
                                        <table><tr><th>Task ID</th><th>Task Name</th></tr></table>
                                    </ng-template>
                                    <ng-template #itemTemplate let-data1>
                                        <div class="e-grid">
                                            <table class="e-table">
                                                <tbody>
                                                    <tr>
                                                        <td class="e-rowcell">{{data1.taskID}}</td>
                                                        <td class="e-rowcell">{{data1.taskName}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </ng-template>
                                </ejs-dropdownlist>
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
    public datas:any=drop_Data;
    public fields = { text: 'taskName' };
    public query: Query = new Query()
        .from('datas')
        .select(['taskName', 'taskID'])
        .take(6);

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.taskData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['taskName'] = this.taskData['taskName'];
        }
    }

}