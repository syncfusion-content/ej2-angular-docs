
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { sampleData,multiselectdata  } from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
import { FocusInEventArgs } from '@syncfusion/ej2-angular-inputs';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
    TreeGridAllModule,RichTextEditorAllModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=250 editType="textarea" [disableHtmlEncode]="false" allowTextwrap=true>
                            <ng-template #editTemplate let-data1>
                                <div *ngIf="taskData && taskData.taskName !== undefined">
                                    <ejs-richtexteditor id="rteEdit" [(value)]="taskData.taskName" (focus)="onFocus($event)" #rteEdit></ejs-richtexteditor>
                                </div>
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
    public taskData: object | any;
  
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

    onFocus(args: FocusInEventArgs): void {
        ((args.event as Event).target as EventTarget).addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') {
                e.stopPropagation();
            }
        });
    }
}