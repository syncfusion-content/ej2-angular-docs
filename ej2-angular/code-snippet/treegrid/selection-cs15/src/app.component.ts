import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component, OnInit, ViewChild } from '@angular/core';
import {
    FilterService,
    ToolbarItems,
    ToolbarService,
    EditService ,
    TreeGridAllModule
} from '@syncfusion/ej2-angular-treegrid';

import { QueryCellInfoEventArgs, GridAllModule } from '@syncfusion/ej2-angular-grids';

import {
    ChangeEventArgs,
    FieldSettingsModel,
    DropDownListModule,
} from '@syncfusion/ej2-angular-dropdowns';

import { showCheckBoxData } from './datasource';
type HierarchyCheckboxMode =
    | 'self'
    | 'hierarchy'
    | 'filteredHierarchy';

interface HierarchyModeItem {
    id: string;
    name: string;
}

interface TaskData {
    taskID: number;
    taskName: string;
    assignee: string;
    designation: string;
    priority: string;
    status: string;
    progress: string;
    expanded?: boolean;
    subTasks?: TaskData[];
}

@Component({
    imports: [
        TreeGridModule,
    ],
    providers: [
        FilterService,
        ToolbarService,
       EditService
    ],
    standalone: true,
    styleUrls: ['app.style.css'],
    selector: 'app-container',
    template: `
   <div class="control-section">
    <div class="content-wrapper">
        <div class="checkboxprop">
            <div class="checkboxmode">
                <span>Hierarchy Checkbox Mode</span>
                <div class="checkboxmode">
                    <ejs-dropdownlist id="hierarchyModes" tabindex="1" width="180px" [dataSource]="hierarchyModeData"
                        [fields]="hierarchyModeFields" value="Self" (change)="hierarchyModeChange($event)">
                    </ejs-dropdownlist>
                </div>
            </div>
        </div>
        <ejs-treegrid #treegrid id="TreeGrid" aria-label="Tree Grid" [dataSource]="data" childMapping="subTasks"
            [treeColumnIndex]="1" [toolbar]="toolbarOptions" [allowFiltering]="true" [height]="380" [editSettings]='editSettings'
            [hierarchyCheckboxMode]="hierarchyCheckboxMode">
            <e-columns>
                <e-column field="taskID" [visible]="false" [isPrimaryKey]="true">
                </e-column>
                <e-column field="taskName" headerText="Task Name" width="270" [showCheckbox]="true">
                </e-column>
                <e-column field="assignee" headerText="Employee" width="180">
                </e-column>
                <e-column field="designation" headerText="Designation" width="220">
                </e-column>
                <e-column field="priority" headerText="Priority" width="140">
                </e-column>
                <e-column field="status" headerText="Status" width="120">
                <ng-template #template let-data>
                <span
                [class]="'status-badge ' + getStatusClass(data.status)">
                {{ data.status }}
                </span>
                </ng-template>
                </e-column>
                <e-column field="progress" headerText="Progress" width="120" textAlign="Right">
                </e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</div>`
})
export class AppComponent implements OnInit {
    public data: TaskData[] =
        showCheckBoxData as TaskData[];

    public toolbarOptions: ToolbarItems[] = [
        'Search', 'Delete'
    ];
    public editSettings: Object = {allowDeleting: true};
    public hierarchyCheckboxMode:
        HierarchyCheckboxMode = 'self';

    public hierarchyModeData: HierarchyModeItem[] = [
        {
            id: 'Self',
            name: 'Self'
        },
        {
            id: 'Hierarchy',
            name: 'Hierarchy'
        },
        {
            id: 'FilteredHierarchy',
            name: 'Filtered Hierarchy'
        }
    ];

    public hierarchyModeFields: FieldSettingsModel = {
        text: 'name',
        value: 'id'
    };

    public hierarchyModeChange(
        args: ChangeEventArgs
    ): void {
        if (args.value === 'Hierarchy') {
            this.hierarchyCheckboxMode = 'hierarchy';
        } else if (
            args.value === 'FilteredHierarchy'
        ) {
            this.hierarchyCheckboxMode =
                'filteredHierarchy';
        } else {
            this.hierarchyCheckboxMode = 'self';
        }
    }
    public getStatusClass(status: string): string {
        return status.toLowerCase().replace(/\s+/g, '-');
    }
}