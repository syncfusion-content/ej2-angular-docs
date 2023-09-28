


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { editingData, editingResources } from './data';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { closest,addClass } from '@syncfusion/ej2-base';
import { GanttComponent, ToolbarItem, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
    `<p><b>Gantt</b></p>
    <ejs-gantt id="ganttDefault" #gantt height="280px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [timelineSettings]="timelineSettings" [labelSettings]="labelSettings" [treeColumnIndex]="1" height="450px" [allowSelection]="true" dateFormat="MMM dd, y" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [highlightWeekends]="true" [gridLines]="gridLines" [editSettings]="editSettings" [toolbar]="toolbar"
    [resourceFields]="resourceFields" [resources]="resources" [splitterSettings]="splitterSettings"></ejs-gantt>
    <p><b>List</b></p>
    <ejs-treeview id="tree1" #treeObj height="200px" [fields]='field' [allowDragAndDrop]='allowDragAndDrop' (nodeDragStop)="onDragStop($event)" ></ejs-treeview>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
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
    public field: Object = { dataSource: editingResources, id: 'resourceId', text: 'resourceName' };
    public allowDragAndDrop: boolean = true;
    @ViewChild('gantt')
    public ganttObj?: GanttComponent| any;
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
            child: 'subtasks',
            notes: 'info',
            resourceInfo: 'resources'
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
            id: 'resourceId',
            name: 'resourceName'
        };
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        };
        this.projectStartDate= new Date('03/28/2019');
        this.projectEndDate= new Date('07/06/2019');
        this.splitterSettings = {
            columnIndex: 2
        };
        this.gridLines= 'Both';
        this.toolbar =  [ 'Add', 'Update', 'Edit', 'Delete', 'ExpandAll', 'CollapseAll',];
    }
    created(): void {
        addClass([this.ganttObj.ganttChartModule.chartElement], 'e-droppable');
    };
    onDragStop(args: DragAndDropEventArgs): void {
        let chartEle: any = closest(args.target, '.e-chart-row');
        let gridEle: any = closest(args.target, '.e-row');
        if(gridEle){
          var index = this.ganttObj.treeGrid.getRows().indexOf(gridEle);
          this.ganttObj.selectRow(index);
        }
        if (chartEle) {
            var index = chartEle.ariaRowIndex;
            this.ganttObj.selectRow(Number(index));
        }
        let record: any = args.draggedNodeData;
        let selectedData = this.ganttObj.flatData[this.ganttObj.selectedRowIndex];
        let selectedDataResource = selectedData.taskData.resources;
        let resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
              resources.push(selectedDataResource[i].resourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                resources: resources
            };
            this.ganttObj.updateRecordByID(data);
            var elements = document.querySelectorAll('.e-drag-item');
            while (elements.length > 0 && elements[0].parentNode) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }
    }
}




