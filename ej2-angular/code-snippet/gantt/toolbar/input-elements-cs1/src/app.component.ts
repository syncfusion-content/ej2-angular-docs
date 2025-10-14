import { Component, ViewEncapsulation, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GanttComponent, GanttModule, ToolbarService, FilterService } from '@syncfusion/ej2-angular-gantt';
import { ItemModel, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { AutoCompleteAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule, ToolbarModule, AutoCompleteAllModule],
    providers: [ToolbarService, FilterService],
    template: `
    <ng-template #template>
      <ejs-autocomplete #autoComplete placeholder="Search TaskName" [dataSource]="dropDownData" (change)="onChange($event)">
      </ejs-autocomplete>
    </ng-template>
    <ejs-toolbar [items]="toolbarItems"></ejs-toolbar>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [allowFiltering]="true"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: false }) public gantt?: GanttComponent;
    @ViewChild('template', { static: true }) public templateRef!: TemplateRef<any>
    public data?: object[];
    public taskSettings?: object;
    public dropDownData: string[] = [
        'ClearFilter',
        'Project Kickoff', 'Site Selection', 'Soil Analysis',
        'Approval of Soil Report', 'Cost Estimation',
        'Create Floor Plan', 'Material Listing', 'Approval of Estimate'
    ];
    public toolbarItems: ItemModel[] = [];

    ngOnInit(): void {
        this.data = [
            { TaskID: 1, TaskName: 'Project Kickoff', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
            { TaskID: 2, TaskName: 'Site Selection', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 55 },
            { TaskID: 3, TaskName: 'Soil Analysis', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 65 },
            { TaskID: 4, TaskName: 'Approval of Soil Report', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 35 },
            { TaskID: 5, TaskName: 'Cost Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
            { TaskID: 6, TaskName: 'Create Floor Plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 95 },
            { TaskID: 7, TaskName: 'Material Listing', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 35 },
            { TaskID: 8, TaskName: 'Approval of Estimate', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 85 }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        this.toolbarItems = [
            {
                template: this.templateRef,
                align: 'Left',
                tooltipText: 'Search TaskName'
            }
        ];
    }

    onChange(event: ChangeEventArgs): void {
        const selectedTask = event.value as string;
        if (event.itemData) {
            (this.gantt as GanttComponent).filterByColumn('TaskName', 'equal', selectedTask);
        } else {
            (this.gantt as GanttComponent).clearFiltering();
        }
    }
}
