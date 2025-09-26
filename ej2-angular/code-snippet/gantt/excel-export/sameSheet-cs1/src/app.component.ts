import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttAllModule, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  template: `
    <p><b>First Gantt:</b></p>
    <ejs-gantt #gantt1 id="ganttDefault1" height="280px" [dataSource]="firstDatasource" [taskFields]="firstTaskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowExcelExport="true" [treeColumnIndex]="1">
    </ejs-gantt>

    <p><b>Second Gantt:</b></p>
    <ejs-gantt #gantt2 id="ganttDefault2" height="250px" [dataSource]="seconDatasource" [taskFields]="secondTaskSettings" allowExcelExport="true" [treeColumnIndex]="1"></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt1', { static: true }) public firtGanttInstance?: GanttComponent;
  @ViewChild('gantt2', { static: true }) public secondGanttInstance?: GanttComponent;

  public firstDatasource?: object[];
  public seconDatasource?: object[];
  public firstTaskSettings?: object;
  public secondTaskSettings?: object;
  public toolbar?: ToolbarItem[];

  ngOnInit(): void {
    this.firstDatasource = GanttData.slice(0, 5);
    this.seconDatasource = GanttData.slice(4, 8);

    this.firstTaskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };

    this.secondTaskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };

    this.toolbar = ['ExcelExport'];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault1_excelexport') {
      const exportProps: ExcelExportProperties = {
        multipleExport: { type: 'AppendToSheet', blankRows: 2 }
      };

      const firstExport = this.firtGanttInstance!.excelExport(exportProps, true);
      firstExport.then((firstSheetData: any) => {
        this.secondGanttInstance!.excelExport(exportProps, false, firstSheetData);
      });
    }
  }
}
