import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, ColumnSeriesService, LegendService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='Country' yName='Count'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public legendSettings?: Object;

    ngOnInit(): void {
      this.chartData = chartData;
      this.primaryXAxis = {
        valueType: 'Category',
        labelTemplate:
          '<div id="wrap">' +
            '<table>' +
              '<tr>' +
                '<td align="center" style="background-color: #2E8B57; font-size: 14px; color: #FFD700; font-weight: bold; padding: 5px">Country :</td>' +
                '<td align="center" style="background-color: #4682B4; font-size: 14px; color: #FFFFFF; font-weight: bold; padding: 5px">${label}</td>' +
              '</tr>' +
            '</table>' +
          '</div>'
      };
      this.primaryYAxis = {
        valueType: 'Double'
      };
      this.legendSettings = {
        visible: true,
        layout: "Auto",
        maximumColumns: 3,
        fixedWidth: true
      };

      this.title = 'Olympic Medals';
    }

}