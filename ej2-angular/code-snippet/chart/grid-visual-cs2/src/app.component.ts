import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
import {
  LineSeriesService,
  DateTimeService,
  LegendService,
  TooltipService,
  SelectionService
} from '@syncfusion/ej2-angular-charts';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { GridComponent, ActionEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { orderData } from './datasource';

@Component({
  imports: [ChartModule, GridModule],
  providers: [
    LineSeriesService,
    DateTimeService,
    LegendService,
    TooltipService,
    SelectionService,
    PageService
  ],
  standalone: true,
  selector: 'app-container',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]="true" [pageSettings]='pageSettings' (dataBound)='dataBound()' (actionComplete)='actionComplete($event)'>
                <e-columns>
                    <e-column field='OrderDate' headerText='Order Date' width=130 format='yMd' textAlign='right'></e-column>
                    <e-column field='Freight' width=120 format='C2' textAlign='right'></e-column>
                </e-columns>
             </ejs-grid>
             <ejs-chart #chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
                <e-series-collection>
                    <e-series type='Line' xName='OrderDate' yName='Freight' name='dataview' [marker]='marker'></e-series>
                </e-series-collection>
             </ejs-chart>`

})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public data?: Object[];
  public title?: string;
  public marker?: Object;
  public pageSettings?: Object;
  @ViewChild('chart') public chart?: ChartComponent;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = new DataManager(orderData as JSON[]).executeLocal(new Query().take(100));
    this.pageSettings = { pageSize: 10 };
    this.primaryXAxis = { valueType: 'DateTime' };
    this.primaryYAxis = { title: 'Freight' };
    this.title = 'Freight by Order Date';
    this.marker = { visible: true, height: 10, width: 10 };
  }

  dataBound(): void {
    this.chart!.series[0].dataSource = this.grid?.getCurrentViewRecords();
  }

  public actionComplete(args: ActionEventArgs): void {
    // Extend the conditional to 'sorting' / 'filtering' to refresh the Chart for those interactions.
    if (args.requestType === 'paging') {
      this.chart!.series[0].dataSource = this.grid?.getCurrentViewRecords();
      this.chart?.refresh();
    }
  }
}
