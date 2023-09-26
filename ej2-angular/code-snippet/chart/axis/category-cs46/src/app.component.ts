import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { categoryData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' (loaded)='onChartLoaded($event)' >
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Silver'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Bronze' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})

// declare the series colors

export class AppComponent implements OnInit {
    public color: string[] = ['#00BDAE', '#404041', '#357CD2'];
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = categoryData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 80,
           interval: 20, title: 'Medals',
        };
        this.legendSettings = { visible: true, position: 'Top' };
        this.title = 'Olympic Medals';
    }
    public onChartLoaded(args: ILoadedEventArgs): void {
      let legendTextCol: any = document.querySelectorAll('[id*="charts_chart_legend_text_"]');
      for (let i = 0; i < legendTextCol.length; i++) {
          //set the color to legend label
          legendTextCol[i].setAttribute('fill', this.color[i]);
      }
  }
  
}
