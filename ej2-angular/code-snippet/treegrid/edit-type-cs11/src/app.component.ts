import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';

import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems,EditService, ToolbarService, PageService,  TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { EditEventArgs, IEditCell, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule} from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule,TextBoxModule, FormsModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' [valueAccessor]="valueAccessor"  clipMode='EllipsisWithTooltip' textAlign='Left' width=200>
                            <ng-template #editTemplate let-data>
                                <ejs-textbox id="ShipAddress" [multiline]='true' [(ngModel)]="taskData.taskName" ></ejs-textbox>
                            </ng-template>
                        </e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=100></e-column>
                        <e-column field='duration' editType= 'numericedit' headerText='Duration' textAlign='Right' width=120></e-column>
                        <e-column field='approved' headerText='Approved' width='80'  [displayAsCheckBox]='true' editType= 'booleanedit'></e-column>    
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    public taskData?: object | any;
    
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    public valueAccessor = (field: string, data:any) => {
        const value = data.taskName;
        return (value !== undefined) ? value.split('\n').join('<br>') : '';
    };
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.taskData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['taskName'] = this.taskData['taskName'];
        }
    }
}
