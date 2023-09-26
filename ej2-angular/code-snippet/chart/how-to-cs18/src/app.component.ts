

import { Component, OnInit, ViewChild } from '@angular/core';
import { ILoadedEventArgs, Series, IMouseEventArgs, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `  <ejs-chart style='display:block;' #chart [chartArea]='chartArea' [width]='width' align='center' id='chartcontainer' [primaryXAxis]='primaryXAxis'
            [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip' (chartMouseClick)='chartMouseClick($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Gold' width=2 fill="red" opacity=0.7> </e-series>
                <e-series [dataSource]='data1' type='Column' xName='x' yName='y' name='Silver' width=2 fill="orange" opacity=0.7> </e-series>
                <e-series [dataSource]='data2' type='Column' xName='x' yName='y' name='Bronze' width=2 fill="grey" opacity=0.7> </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    chartArea: any;
    primaryYAxis: any;
  width: any;
    ngOnInit(): void {
    }
    @ViewChild('chart')
    public chart1?: ChartComponent;
    public previousTarget = null;
    public data: Object[] = [
        { x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }
    ];
    public data1: Object[] = [
        { x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }
    ];
    public data2: Object[] = [
        { x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }
    ];
    public primaryXAxis: Object = {
        valueType: 'Category', interval: 1,
    };
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = {
        enable: true
    };
    public chartMouseClick(args: IMouseEventArgs): void {
       var flag = false;
    if (((args.target).indexOf('chart_legend_text') > -1) || ((args.target).indexOf('chart_legend_shape') > -1) ||
      (args.target).indexOf('chart_legend_shape_marker_') && !(args.target).indexOf('chart_legend_element')) {
      var ids = ((args.target).indexOf('chart_legend_text') > -1) ?
        (args.target).split('chart_legend_text_')[1] : args.target.split('chart_legend_shape_marker_')[1] || args.target.split('chart_legend_shape_')[1];
      for (var i = 0; i < this.chart1!.series.length; i++) {
        this.chart1!.series[i].visible = false;
      }
      if (ids == this.previousTarget) {
        for (var j = 0; j < this.chart1!.series.length; j++)
          this.chart1!.series[j].visible = true;
        this.chart1!.series[ids].visible = false;
        this.previousTarget = null;
        flag = true;
      }
      if (!flag)
        this.previousTarget = ids as any;
    }
    };
}


