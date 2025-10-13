import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ToolbarItem, EditSettingsModel, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { MenuItemModel, ContextMenu } from '@syncfusion/ej2-navigations';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [GanttModule, ContextMenuModule],
    providers: [EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-contextmenu id='contextmenu' [items]= 'menuItems' (select)="select($event)"></ejs-contextmenu>
       <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editSettings = {
            allowAdding: true
        };
        this.toolbar = ['Add'];
    }
    public menuItems: MenuItemModel[] = [
        {
            text: 'Bottom'
        },
        {
            text: 'Above'
        },
        {
            text: 'Below'
        },
        {
            text: 'Child'
        },
        {
            text: 'Top'
        }];

    public select(args: any) {
        if (args.item.text === "Bottom") {
            this.ganttInstance.editSettings.newRowPosition = "Bottom";
            this.ganttInstance.openAddDialog();
        } else if (args.item.text === "Above") {
            if (this.ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                this.ganttInstance.editSettings.newRowPosition = "Above";
                this.ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Below") {
            if (this.ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                this.ganttInstance.editSettings.newRowPosition = "Below";
                this.ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Child") {
            if (this.ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                this.ganttInstance.editSettings.newRowPosition = "Child";
                this.ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Top") {
            this.ganttInstance.editSettings.newRowPosition = "Top";
            this.ganttInstance.openAddDialog();
        }
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_add') {
            let contextmenuObj: ContextMenu = getInstance(document.getElementById("contextmenu_0"), ContextMenu) as ContextMenu;
            contextmenuObj.open(40, 20);
        }
    };
}

function getInstance(arg0: HTMLElement | null, ContextMenu: any): ContextMenu {
    throw new Error('Function not implemented.');
}

