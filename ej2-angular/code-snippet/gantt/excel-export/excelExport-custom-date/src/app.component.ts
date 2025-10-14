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
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" (toolbarClick)="toolbarClick($event)" allowExcelExport='true' [toolbar]="toolbar"  [taskFields]="taskSettings" [treeColumnIndex]='1'>
          <e-columns>
              <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 type='number'></e-column>
              <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 type='string'></e-column>
              <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 [format]='formatOptions' ></e-column>
              <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 type='number'></e-column>
              <e-column field='Progress' headerText='Progress' textAlign='Right' width=120 type='number'></e-column>
          </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    @ViewChild('gantt', {static: true}) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public formatOptions?: object;

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
        this.formatOptions = { type: 'date', format: "dd/MM/yyyy" };
        this.toolbar =  ['ExcelExport','CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
          (this.ganttInstance as GanttComponent).excelExport();
        } 
    };
}


