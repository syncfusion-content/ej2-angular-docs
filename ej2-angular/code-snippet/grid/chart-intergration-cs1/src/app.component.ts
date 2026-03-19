import { salesDatas } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuClickEventArgs, ContextMenuItem, ContextMenuService, GridComponent, GridModule, IGrid } from '@syncfusion/ej2-angular-grids';
import { ChartModel } from '@syncfusion/ej2-charts';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart } from '@syncfusion/ej2-grid-chart';

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
      enableRtl: (this.grid as GridComponent).enableRtl,
      locale: (this.grid as GridComponent).locale,
    });
  }

  contextMenuClick(args: ContextMenuClickEventArgs) {
    if (args.chartType) {
      const chartArgs: ChartPopupArgs = {
        gridInstance: (args.gridInstance as IGrid),
        chartType: args.chartType,
        records: args.records as SalesRecord[],
      };
      const chartModel: ChartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        }
      };

      const model: ChartChanges = { chart: chartModel, accumulationChart: {} };
      const categorySeries: CategorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      (this.gridChart as GridChart).render(chartArgs, model, categorySeries);
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
