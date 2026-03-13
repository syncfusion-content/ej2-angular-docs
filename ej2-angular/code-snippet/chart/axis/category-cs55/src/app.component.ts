import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartModule, ChartComponent, CategoryService, ColumnSeriesService, LegendService, TooltipService, DataLabelService } from '@syncfusion/ej2-angular-charts';
import {chinaData,indiaData,indonesiaData} from './datasource';


@Component({
  imports: [ChartModule],
  providers: [CategoryService, ColumnSeriesService, LegendService, TooltipService, DataLabelService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-chart id="chart-container" #chartRef [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [chartArea]="chartArea" [title]="title" [legendSettings]="legendSettings" (legendRender)="legendRender($event)">
        <e-series-collection>
            <e-series [dataSource]="chinaData" type="Column" xName="x" yName="y" name="China" [animation]="{enable:false}" [marker]="{dataLabel:{visible:true}}"></e-series>
            <e-series [dataSource]="indiaData" type="Column" xName="x" yName="y" name="India" [animation]="{enable:false}" [marker]="{dataLabel:{visible:true}}"></e-series>
            <e-series [dataSource]="indonesiaData" type="Column" xName="x" yName="y" name="Indonesia" [animation]="{enable:false}" [marker]="{dataLabel:{visible:true}}"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    @ViewChild('chartRef') public chartObj!: ChartComponent;

    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartArea?: Object;
    public title?: string;
    public legendSettings?: Object;
    public chinaData?:Object;
    public indiaData?:Object;
    public indonesiaData?:Object;
    public legendIcons: { [key: string]: string } = {
      China: 'https://img.icons8.com/color/100/china.png',
      India: 'https://img.icons8.com/color/100/india.png',
      Indonesia: 'https://img.icons8.com/color/100/indonesia.png'
    };
    ngOnInit(): void {
      this.chinaData = chinaData;
      this.indiaData = indiaData;
      this.indonesiaData = indonesiaData;
      this.primaryXAxis = {
        interval: 1,
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      };

      this.primaryYAxis = {
        title: 'Coal Production (Million Tonnes)',
        labelFormat: '{value}t'
      };

      this.chartArea = { border: { width: 0 } };

      this.legendSettings = {
        visible: true,
        template:
          '<div class="coal-legend-item" style="display:flex;align-items:center;gap:8px;padding:4px 8px;opacity:1;transition:opacity .3s;cursor:pointer;">' +
          '<img class="e-icon" src="" width="24" height="24" style="border-radius:4px;object-fit:cover;" />' +
          '<span class="e-label" style="font-size:13px;font-weight:bold;color:;"></span>' +
          '</div>'
      };

      this.title = 'Top 3 Countries by Coal Production (2022–2024)';
    }

    public legendRender(args: any): void {
      const chart: any = (this.chartObj as any).chart || (this.chartObj as any);
      const matchedSeries = (chart.series || []).filter((s: any) => s.name === args.text)[0];
      const opacity = matchedSeries && matchedSeries.visible === false ? '0.5' : '1';
      args.template = args.template
        .replace('opacity:1;', 'opacity:' + opacity + ';')
        .replace('src=""', 'src="' + (this.legendIcons[args.text] || '') + '"')
        .replace('color:;', 'color:' + args.fill + ';')
        .replace('></span>', '>' + args.text + '</span>');
    }

}

