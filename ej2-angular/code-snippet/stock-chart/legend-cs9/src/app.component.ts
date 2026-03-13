import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StockChartModule,  StockChartAllModule, ChartAllModule, StockChartComponent, DateTimeService, LineSeriesService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit, ViewChild } from '@angular/core';
import { chartData } from './datasource';

@Component({
  imports: [StockChartModule, StockChartAllModule, ChartAllModule],
  providers: [DateTimeService, LineSeriesService, LegendService, TooltipService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-stockchart id="chart-container" #stockRef
 [height]="height"
    [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
    [series]="series" [title]="title" [legendSettings]="legendSettings">
  </ejs-stockchart>`
})
export class AppComponent implements OnInit {
  @ViewChild('stockRef') public stockObj!: StockChartComponent;
  public height: string = '455px';
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public series?: Object[];
  public title?: string;
  public legendSettings?: any;
  public iconMap: any = {
    Google: 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    MicrosoftEdge: 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
  };

  public LegendTemplate = (props: any) => {
    const seriesName = props.series.name;
    const icon = this.iconMap[seriesName] || '';
    return (
      '<div style="display:flex;align-items:center;gap:8px;padding:5px;cursor:pointer;">' +
        '<img src="' + icon + '" width="24" height="24" ' +
        'style="object-fit:contain;border-radius:2px;" alt="' + seriesName + '"/>' +
        '<span style="font-size:13px;font-weight:500;">' + seriesName + '</span>' +
      '</div>'
    );
  };

  ngOnInit(): void {
    this.primaryYAxis = {
      lineStyle: { color: 'transparent' },
      majorTickLines: { color: 'transparent', width: 0 }
    };
    this.primaryXAxis = {
      majorTickLines: { color: 'transparent', width: 0 }
    };
    this.series = [
      { dataSource: chartData, type: 'Candle', name: 'Google' },
      { dataSource: chartData, type: 'Candle', name: 'MicrosoftEdge' }
    ];
    this.title = 'AAPL Stock Price';
    this.legendSettings = {
      visible: true,
      template: this.LegendTemplate
    };
  }
}
