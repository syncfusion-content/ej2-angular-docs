import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { setCulture, loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
import { GanttData } from './data';

// CLDR JSON imports.
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [locale]="locale" [treeColumnIndex]="1">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" [format]="formatOptions"></e-column>
        <e-column field="EndDate" headerText="End Date" textAlign="Right" width="210" [format]="formatOptionstwo"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" format="c2" type="number"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public formatOptions: object = {};
  public formatOptionstwo: object = {};
  public locale: string = 'es-AR';

  ngOnInit(): void {
    setCulture(this.locale);
    setCurrencyCode('ARS');
    loadCldr(cagregorian, currencies, numbers, timeZoneNames);
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };
    this.formatOptionstwo = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
