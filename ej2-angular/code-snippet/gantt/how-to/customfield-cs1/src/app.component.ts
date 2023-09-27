


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ToolbarItem, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { CheckBox } from "@syncfusion/ej2-buttons";
import { TextBox, NumericTextBox, MaskedTextBox } from "@syncfusion/ej2-inputs";
import { DatePicker, DateTimePicker } from "@syncfusion/ej2-calendars";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { editingData} from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="editingData" [taskFields]="taskSettings"  [toolbar]="toolbar" [editDialogFields]="editDialogFields" [addDialogFields]="addDialogFields" [editSettings]="editSettings" [columns]="columns" (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)"> </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    // Data for Gantt
    public divElement?: any;
    public inputs = {
       booleanedit: CheckBox,
       dropdownedit: DropDownList,
       datepickeredit: DatePicker,
       datetimepickeredit: DateTimePicker,
       maskededit: MaskedTextBox,
       numericedit: NumericTextBox,
       stringedit: TextBox
    };
    public editingData?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public editDialogFields?: object[];
    public addDialogFields?: object[];
    public columns?: object[];
    public toolbar?: ToolbarItem[];
    public selectionSettings?: SelectionSettingsModel;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.editingData = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editSettings = {
             allowEditing: true,
             allowAdding: true,
             allowDeleting: true,
             mode:"Dialog"
        };
        this.editDialogFields = [
                { type: 'General', headerText: 'General' },
                { type: 'Dependency' },
                { type: 'Resources' },
                { type: 'Notes' }
        ];
        this.addDialogFields = [
               { type: 'General', headerText: 'General' },
               { type: 'Dependency' },
               { type: 'Resources' },
               { type: 'Notes' }
        ];
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'EndDate', headerText: 'End Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
            { field: 'CustomField', headerText: 'CustomField', width: '150' }
        ];
        this.toolbar =  ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
}
public actionBegin(args: any) {
        if (args.requestType === "beforeOpenEditDialog" || args.requestType === "beforeOpenAddDialog" ) {
          var column = this.ganttObj.columnByField["CustomField"];
          this.divElement = this.ganttObj.createElement("div", { className: "e-edit-form-column"});
          var inputElement: any;
          inputElement = this.ganttObj.createElement("input", {
            attrs: {
              type: "text",
              id: this.ganttObj.controlId + "" + column.field,
              name: column.field,
              title: column.field
            }
          });
          this.divElement.appendChild(inputElement);
          var input = {
            enabled: true,
            floatLabelType: "Auto",
            placeholder: "CustomField",
            value: args.rowData.CustomField
          };
          var inputObj = new (this as any).inputs[column.editType](input);
          inputObj.appendTo(inputElement);
        }
    };
public actionComplete(args: any) {
        if (args.requestType === "openEditDialog" || args.requestType === "openAddDialog") {
          var generalTab = document.getElementById(this.ganttObj.controlId + "GeneralTabContainer");
          generalTab!.appendChild(this.divElement);
        }
    };
}



