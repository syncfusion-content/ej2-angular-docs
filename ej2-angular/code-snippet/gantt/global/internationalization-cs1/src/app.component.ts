


import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Ganttdata } from './data';

L10n.load({
  'de-DE': {
      'gantt': {
           "id": "Ich würde",
            "name": "Name",
            "startDate": "Anfangsdatum",
            "duration": "Dauer",
            "progress": "Fortschritt",
        }
    }
});

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" locale="de-DE"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public ngOnInit(): void {
        setCulture('de-DE');
        loadCldr(
            './numbers.json',
            './ca-gregorian.json',
        );
        this.data = Ganttdata;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
    }
}



