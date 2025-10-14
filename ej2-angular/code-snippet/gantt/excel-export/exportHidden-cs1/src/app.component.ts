import { GanttAllModule, GanttComponent, ToolbarItem, ExcelExport } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
    imports: [GanttAllModule],
    standalone: true,
    selector: 'app-root',
    template: `
      <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowExcelExport='true' [treeColumnIndex]="1">
      </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public columns?: object[];

    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'StartDate', width: '150', visible: false },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ];
        this.toolbar = ['ExcelExport', 'CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            let excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: true
            };
            this.ganttInstance!.excelExport(excelExportProperties);
        } else if (args.item.id === 'ganttDefault_csvexport') {
            let excelExportProperties: ExcelExport | any = {
                includeHiddenColumn: true
            };
            this.ganttInstance!.csvExport(excelExportProperties);
        }
    };
}


