import { salesDatas } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuClickEventArgs, ContextMenuItem, ContextMenuService, GridComponent, GridModule, IGrid } from '@syncfusion/ej2-angular-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { AccumulationChartModel, ChartModel, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart, UpdateChartArgs } from '@syncfusion/ej2-grid-chart';

@Component({
  imports: [ GridModule],
  providers: [ContextMenuService],
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: Object[];
  public gridChart?: GridChart;
  public contextMenuItems?: ContextMenuItem[];
  public selectionSettings?: Object;

  ngOnInit(): void {
    this.data = salesDatas;
    this.selectionSettings = { type: 'Multiple' };
    this.contextMenuItems= [ 'Bar', 'StackingBar', 'StackingBar100', 'Pie', 'Column', 'StackingColumn', 'StackingColumn100', 'Line', 'StackingLine', 'StackingLine100', 'Area', 'StackingArea', 'StackingArea100', 'Scatter'];
  }

  created(): void {
    this.gridChart = new GridChart({
      enablePropertyPanel: true,
      allowExport: true,
      enableRtl: (this.grid as GridComponent).enableRtl,
      locale: (this.grid as GridComponent).locale,
      updateChartSettings: this.updateChartSettings.bind(this),
    });
  }

  contextMenuClick(args: ContextMenuClickEventArgs) {
    if (args.chartType) {
      const chartArgs: ChartPopupArgs = {
        gridInstance: (args.gridInstance as IGrid),
        chartType: args.chartType,
        records: (args.records as SalesRecord[]),
      };
      const chartModel: ChartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315,
        },
        margin: {
          top: 20,
          bottom: 20,
          right: 20,
          left: 20
        },
        tooltip: {
          enable: true,
          textStyle: {
            size: '16px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }
        },
        title: 'Sales Data',
        titleStyle: {
          size: '24px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 'Bold'
        },
        subTitle: 'Sales data for various products over the months',
        load: (args: ILoadedEventArgs) => {
          if (args.chart.titleStyle) {
            args.chart.titleStyle.color = '#1976d2';
          }
        }
      };
      const accumulationChartModel: AccumulationChartModel = {
        title :'Sales Distribution'
      }
      const model: ChartChanges = {
        chart: chartModel,
        accumulationChart: accumulationChartModel
      };
      const categorySeries: CategorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      (this.gridChart as GridChart).render(chartArgs, model, categorySeries);
    }
  }

  updateChartSettings(args: UpdateChartArgs){
    const chart = args.changes?.chart;
    if (!chart) return;

    const chartMargin = chart.margin;
    if (chartMargin && !isNullOrUndefined(chartMargin)) {
      if ((chartMargin.top ?? 0) < 20) chartMargin.top = 20;
      if ((chartMargin.bottom ?? 0) < 20) chartMargin.bottom = 20;
      if ((chartMargin.left ?? 0) < 20) chartMargin.left = 20;
      if ((chartMargin.right ?? 0) < 20) chartMargin.right = 20;
    }
  }
}

interface SalesRecord {
  Product: string;
  Category: string;
  Year: number;
  Online: number;
  Retail: number;
  ProfitLoss: number;
  UnitsSold: number;
  Revenue: number;
  Image: string;
  CategoryIcon: string;
}
