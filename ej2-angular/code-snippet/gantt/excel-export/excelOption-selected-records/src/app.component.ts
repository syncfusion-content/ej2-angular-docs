import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, ToolbarItem, ToolbarService, ExcelExportService, SelectionService  } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [GanttModule,DropDownListAllModule],
  providers: [ToolbarService, ExcelExportService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [selectionSettings]='selectionSettings' [taskFields]="taskSettings" [toolbar]="toolbar" allowExcelExport="true" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];
  public selectionSettings?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.toolbar = ['ExcelExport'];
    this.selectionSettings = { type: 'Multiple' };
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      const selectedRecords = (this.ganttInstance as GanttComponent).treeGrid.getSelectedRecords();
        const exportProperties = {
          dataSource: selectedRecords
        };
      (this.ganttInstance as GanttComponent).excelExport(exportProperties);
    }
  }
}
