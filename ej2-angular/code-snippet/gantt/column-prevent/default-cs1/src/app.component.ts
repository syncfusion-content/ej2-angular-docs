

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='add' (click)='addColumn()'>Add Columns</button>
               <button ej-button id='remove' (click)='removeColumn()'>Remove Columns</button>
               <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" enablePersistence='true' [columns]="columns"(dataBound)='dataBound()'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public data?: object[];
    public taskSettings?: object;
    public ganttChart?: GanttComponent;
    public splitterSettings?: object;
    public columns?: object[];
    public ngOnInit(): void {
        this.data = [
            {
              TaskID: 1,
              TaskName: 'Project Initiation',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
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
            child: 'subtasks',
        };
        this.columns =  [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150},
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150},
        { field: 'Progress', headerText: 'Progress', width: 150 },
        ];
    }

    dataBound() {
        let gantt = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
        let cloned = gantt.addOnPersist;
        gantt.addOnPersist = function (key: any) {
            key = key.filter((item: string)  => item !== "columns");
            return cloned.call(this, key);
        };
    }

    addColumn() {
        let gantt = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
        let obj = { field: "Progress", headerText: 'Progress', width: 100 };
        gantt.columns.push(obj as any); //you can add the columns by using the Gantt columns method
        gantt.refresh();
   }

    removeColumn() {
         let gantt = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
        gantt.columns.pop();
        gantt.refresh();
   }
}



