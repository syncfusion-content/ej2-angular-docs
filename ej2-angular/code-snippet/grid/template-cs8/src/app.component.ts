import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { SparklineAllModule, } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { Sparkline } from '@syncfusion/ej2-angular-charts';
import { GridComponent,} from '@syncfusion/ej2-angular-grids'

@Component({
imports: [
        
        GridModule,
        SparklineAllModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]='data' height='315px' (created)="renderGridSparkline()">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
        <e-column headerText='Employee Performance Rating' width='280'>
          <ng-template #template let-griddata>
            <div id="spkline{{griddata.EmployeeID}}"></div>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

  public data?: object[] = employeeData;
  @ViewChild('grid')
  grid?: GridComponent;

  public lineData: object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];

  ngOnInit(): void {
  }

  public getSparkData(type: string, count: number) {
    return this.lineData[count] as number[];
  }

  public renderGridSparkline(): void {
    setTimeout(() => {
      const length =(this.grid as GridComponent).getDataRows().length
      for (let i: number = 1; i <= length; i++) {
        let line: Sparkline = new Sparkline({
          height: '50px',
          width: '90%',
          lineWidth: 2,
          valueType: 'Numeric',
          fill: '#3C78EF',
          dataSource: this.getSparkData('line', i)
        });
        line.appendTo('#spkline' + i);
      }
    }, 100)
  }
}




