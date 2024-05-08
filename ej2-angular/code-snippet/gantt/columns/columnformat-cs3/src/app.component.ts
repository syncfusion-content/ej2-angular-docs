import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { setCulture, loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import { GanttData } from './data';

@Component({
  imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
  template:
    `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings" [locale]='locale' [taskFields]="taskSettings" [treeColumnIndex]='1'>
            <e-columns>      
              <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
              <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 ></e-column>
              <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 [format]='formatOptions'></e-column>
              <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
              <e-column field='Progress' headerText='Progress' textAlign='Right' width=120 format='c2' type='number'></e-column>
        </e-columns>
       </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public formatOptions?: object;
  public splitterSettings?: object;
  public locale: string = 'es-AR';
  public ngOnInit(): void {
    setCulture('es-AR');
    setCurrencyCode('ARS');
    loadCldr(
      cagregorian,
      currencies,
      numbers,
      timeZoneNames
    );
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };
    this.splitterSettings = {
      position: '75%'
    };
  }
}