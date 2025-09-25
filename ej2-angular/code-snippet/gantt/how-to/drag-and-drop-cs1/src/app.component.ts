import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, GanttAllModule } from '@syncfusion/ej2-angular-gantt'
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'
import { EditService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { editingData, editingResources } from './data';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { closest, addClass } from '@syncfusion/ej2-base';
import { GanttComponent, ToolbarItem, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule, GanttAllModule, TreeViewModule],
    providers: [EditService, SelectionService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<p><b>Gantt</b></p>
    <ejs-gantt id="ganttDefault" #gantt height="280px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [timelineSettings]="timelineSettings" [labelSettings]="labelSettings" [treeColumnIndex]="1" height="450px" [allowSelection]="true" dateFormat="MMM dd, y" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [highlightWeekends]="true" [gridLines]="gridLines" [editSettings]="editSettings" [toolbar]="toolbar"
    [resourceFields]="resourceFields" [resources]="resources" [splitterSettings]="splitterSettings"></ejs-gantt>
    <p><b>List</b></p>
    <ejs-treeview id="tree1" #treeObj height="200px" [fields]='field' [allowDragAndDrop]='allowDragAndDrop' (nodeDragStop)="onDragStop($event)" ></ejs-treeview>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public labelSettings?: object;
    public selectionSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public toolbar?: object;
    public splitterSettings?: object;
    public editSettings?: object;
    public gridLines?: string;
    public resources?: object[];
    public resourceFields?: object;
    public field: Object = { dataSource: editingResources, id: 'ResourceId', text: 'ResourceName' };
    public allowDragAndDrop: boolean = true;
    @ViewChild('gantt')
    public ganttObj?: GanttComponent | any;
    timelineSettings: any;
    public ngOnInit(): void {
        this.data = editingData;
        this.resources = editingResources;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID',
            notes: 'Info',
            resourceInfo: 'Resources'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.selectionSettings = {
            type: 'Multiple'
        };
        this.resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName'
        };
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'Resources'
        };
        this.projectStartDate = new Date('03/28/2019');
        this.projectEndDate = new Date('07/06/2019');
        this.splitterSettings = {
            columnIndex: 2
        };
        this.gridLines = 'Both';
        this.toolbar = ['Add', 'Update', 'Edit', 'Delete', 'ExpandAll', 'CollapseAll',];
    }
    created(): void {
        addClass([this.ganttObj.ganttChartModule.chartElement], 'e-droppable');
    };
    onDragStop(args: DragAndDropEventArgs): void {
        args.cancel = true;
        let chartEle: any = closest(args.target, '.e-chart-row');
        let gridEle: any = closest(args.target, '.e-row');
        if (gridEle) {
            var index = this.ganttObj.treeGrid.getRows().indexOf(gridEle);
            this.ganttObj.selectRow(index);
        }
        if (chartEle) {
            var index = chartEle.rowIndex;
            this.ganttObj.selectRow(index);
        }
        let record: any = args.draggedNodeData;
        let selectedData = this.ganttObj.flatData[this.ganttObj.selectedRowIndex];
        let selectedDataResource = selectedData.taskData.Resources;
        let resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
                resources.push(selectedDataResource[i].ResourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                Resources: resources
            };
            this.ganttObj.updateRecordByID(data);
        }
    }
}