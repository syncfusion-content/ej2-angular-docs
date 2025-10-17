import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
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
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" locale="de-DE"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
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
            parentID: 'ParentID',
        };
    }
}
