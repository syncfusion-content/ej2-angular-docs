

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { complexData } from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' [editSettings]="editSettings" [toolbar]="toolbar" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' [isPrimaryKey]='true' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='assignee.firstName' headerText='First Name' width=90>
                            <ng-template #editTemplate let-data>
                                <input class="e-input" name="assignee___firstName" type="text" id="assignee___firstName" [value]="data.assignee.firstName" />
                            </ng-template>
                        </e-column>
                        <e-column field='assignee.lastName' headerText='Last Name'  width=90>
                            <ng-template #editTemplate let-data>
                                <input class="e-input" name="assignee___lastName" type="text" id="assignee___lastName" [value]="data.assignee.lastName" />
                            </ng-template>
                        </e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
            </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    ngOnInit(): void {
        this.data = complexData;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,mode:'Row'
          };
          this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}




