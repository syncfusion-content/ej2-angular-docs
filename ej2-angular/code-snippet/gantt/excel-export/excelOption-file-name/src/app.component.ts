import { ExcelExportService, GanttAllModule, ToolbarService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { TextBoxModule, TextBoxComponent } from '@syncfusion/ej2-angular-inputs'
import { ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
  imports: [GanttAllModule, TextBoxModule],
  standalone: true,
  providers: [ExcelExportService, ToolbarService],
  selector: 'app-root',
  template:`
    <div style="padding: 0px 0 20px 0">
      <label style="padding: 30px 17px 0 0;font-weight:bold">Enter file name: </label>
      <ejs-textbox #textbox placeholder="Enter file name" width="120">
      </ejs-textbox>
    </div>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowExcelExport='true' [treeColumnIndex]="1">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  @ViewChild('textbox') public textbox?: TextBoxComponent;

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
      const excelExportProperties: ExcelExportProperties = {
        fileName: (this.textbox as TextBoxComponent).value !== "" ? (this.textbox as TextBoxComponent).value + '.xlsx' : 'new.xlsx'
      };
      this.ganttInstance!.excelExport(excelExportProperties);
    }
  };
}