import { Component, OnInit } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core'
import { PageService, SortService, TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { FilterService, EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #emptyTreeGrid [dataSource]='data' [treeColumnIndex]='1' [editSettings]='editSettings' [toolbar]='toolbar' allowFiltering='true' [filterSettings]='filterSettings' (actionComplete)='onActionComplete($event)' (dataBound)="dataBound($event)" childMapping='subtasks' allowPaging='true' allowSorting='true'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' type='number' textAlign='Right' isPrimaryKey="true" [validationRules]="taskIdRules" width=110></e-column>
            <e-column field='taskName' headerText='Task Name' type='string' textAlign='Left' [validationRules]="taskNameRules" width=130></e-column>
            <e-column field='priority' headerText='Priority' type='string' textAlign='Left' width=100 editType='dropdownedit' [edit]="priorityParams"></e-column>
            <e-column field='assignee' headerText='Assignee' type='string' textAlign='Left' width=110></e-column>
            <e-column field='status' headerText='Status' type='string' textAlign='Left' editType='dropdownedit' [edit]="statusParams" width=120></e-column>
            <e-column field='duration' headerText='Duration in Days' type='number' editType='numericedit' textAlign='Right' width=150></e-column>
        </e-columns>
        <ng-template #emptyRecordTemplate>
            <div class='emptyRecordTemplate'>
                <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/emptyRecordTemplate_light.svg" class="e-emptyRecord" alt="No record" style="width: 50px; height: 50px;">
                <div><b>There is no data available to display at the moment.</b></div><br>
            </div>
        </ng-template>
    </ejs-treegrid>`,
    standalone: true,
    imports: [TreeGridModule, ButtonModule,],
    providers: [FilterService, EditService, ToolbarService, PageService, SortService],
})
export class AppComponent {
    public pageSettings?: Object;
    @ViewChild('emptyTreeGrid', { static: false }) public treegrid: TreeGridComponent;
    @ViewChild('emptyRecordTemplate', { static: false }) public emptyRecordTemplate: any;
    @ViewChild('addRecordBtn') public addRecordButton: ButtonComponent;
    public data: Object[] = [];
    public toolbar?: string[];
    public filterSettings: any;
    public editSettings?: Object;
    public taskIdRules: Object = { required: true, number: true };
    public taskNameRules: Object = { required: true };
    public priorityParams: Object = { params: { dataSource: [{ priority: "Low" }, { priority: "Medium" }, { priority: "High" }, { priority: "Critical" }] } };
    public statusParams: Object = { params: { dataSource: [{ status: "Open" }, { status: "Inprogress" }, { status: "Review-Request" }, { status: "Review-Reject" }, { status: "Closed" }] } }

    public onActionComplete(args: any) {
        // Toggle filter dialog based on visible records
        if (args.requestType === 'filterAfterOpen' && this.treegrid.flatData.length === 0) {
            if (args.filterModel.filterSettings.columns.length > 0 && args.filterModel.filterSettings.columns.some((col: any) => col.field === args.columnName)) {
                args.filterModel.dlgObj.show();
            }
            else {
                args.filterModel.dlgObj.hide();
            }
        }
        if ((args.requestType === 'delete' || args.requestType === 'searching') && this.treegrid.flatData.length === 0 && this.treegrid.searchSettings.key === '') {
            this.treegrid.toolbarModule.enableItems([this.treegrid.element.id + '_gridcontrol_searchbar'], false);
        }
        if (args.action === 'clearFilter' && this.treegrid.flatData.length !== 0) {
            this.treegrid.toolbarModule.enableItems([this.treegrid.element.id + '_gridcontrol_searchbar'], true);
        }
    }

    public dataBound(args: any) {
        const isGridEmpty = this.treegrid.flatData.length === 0;
        if (this.treegrid.searchSettings.key === '' || this.treegrid.searchSettings.key === undefined) {
            this.treegrid.toolbarModule.enableItems([this.treegrid.element.id + '_gridcontrol_searchbar'], !isGridEmpty);
        }
        const filterMenudivs: any = this.treegrid.element.querySelectorAll('.e-filtermenudiv');
        filterMenudivs.forEach((div: HTMLElement) => {
            if (isGridEmpty && (this.treegrid as any).grid.filterSettings.columns.length == 0) {
                div.classList.add('e-disabled');
                div.style.cursor = 'default';
            } else {
                div.classList.remove('e-disabled');
                div.style.removeProperty('cursor');
            }
        });
    }
    ngOnInit(): void {
        this.data = [];
        this.toolbar = ["Add", "Update", "Cancel", "Delete", "Search"];
        this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.filterSettings = { type: 'Menu', hierarchyMode: 'Parent' };
    }
}
