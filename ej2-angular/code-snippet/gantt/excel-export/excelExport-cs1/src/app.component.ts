import { GanttModule, GanttComponent, ToolbarItem,ToolbarService, ExcelExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    providers: [ToolbarService, ExcelExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:`
       <ejs-gantt #gantt id="ganttDefault" height="370px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowExcelExport='true'>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
    @ViewChild('gantt', {static: true}) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];

    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID:'ParentID',
        };
        this.toolbar =  ['ExcelExport','CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
          (this.ganttInstance as GanttComponent).excelExport();
        } else if(args.item.id === 'ganttDefault_csvexport') {
          (this.ganttInstance as GanttComponent).csvExport();
        }
    };
}