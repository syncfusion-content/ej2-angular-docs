

import { Component, OnInit } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="stockChartSpline" [enablePeriodSelector]="enable" [chartArea]="chartArea"[primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [seriesType]="seriesType"
      [indicatorType]="indicatorType">
      <e-stockchart-series-collection>
        <e-stockchart-series [dataSource]="dataManager" [query]="query" type="Spline" xName="ShippedDate"
          yName="Freight" >
        </e-stockchart-series>
      </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
  chartArea: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public dataManager: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Orders"
  });
  public query: Query = new Query()
    .take(5)
    .where("Estimate", "lessThan", 50, false);
  public primaryXAxis: Object = {
    valueType: "DateTime",
    crosshairTooltip: { enable: true },
    majorGridLines: { width: 0 }
  };
  public primaryYAxis: Object = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 }
  };
  public seriesType: string[] = [];
  public indicatorType: string[] = [];
  public periods: object[] = [];
  public enable: boolean = false;
}


