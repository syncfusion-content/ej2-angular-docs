

import { Component, ViewChild, OnInit } from '@angular/core';
import { IDataOptions, PivotView, IAxisSet, IFieldOptions, PivotViewComponent, FieldListService, PivotCellSelectedEventArgs, CellSelectedObject, DataSourceSettings, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Chart, Category, Legend, Tooltip, ColumnSeries, LineSeries, SeriesModel } from '@syncfusion/ej2-charts';
import { renewableEnergy } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings showFieldList='true' width=width height=height [gridSettings]=gridSettings (cellSelected)="cellSelected($event)" (dataBound)="dataBound($event)"></ejs-pivotview><div><br/><div id="Chart"></div>`
})

export class AppComponent implements OnInit {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public onInit: boolean = true;
    public measureList: { [key: string]: string } = {};
    public chart?: Chart;
    public selectedCells?: CellSelectedObject[];
    public chartSeries?: SeriesModel[];

    @ViewChild('pivotview',{static: false})
    public pivotObj?: PivotViewComponent;

    frameChartSeries(): SeriesModel[] {
        let columnGroupObject: { [key: string]: { x: string, y: number }[] } = {};
        for (let cell of this.selectedCells!) {
        if (cell.measure !== '') {
            let columnSeries = ((this.pivotObj?.dataSourceSettings as DataSourceSettings ).values.length > 1 && this.measureList[cell.measure]) ?
            (cell.columnHeaders.toString() + ' ~ ' + this.measureList[cell.measure]) : cell.columnHeaders.toString();
            if (columnGroupObject[columnSeries]) {
            columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
            } else {
            columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
            }
        }
        }
        let columnKeys: string[] = Object.keys(columnGroupObject);
        let chartSeries: SeriesModel[] = [];
        for (let key of columnKeys) {
            chartSeries.push({
                dataSource: columnGroupObject[key],
                xName: 'x',
                yName: 'y',
                type: 'Column',
                name: key
            });
        }
        return chartSeries;
    }

    chartUpdate(): void {
        if (this.onInit) {
            this.onInit = false;
            Chart.Inject(ColumnSeries, LineSeries, Legend, Tooltip, Category);
            this.chart = new Chart({
                title: 'Sales Analysis',
                legendSettings: {
                    visible: true
                },
                tooltip: {
                    enable: true
                },
                primaryYAxis: {
                    title: (this.pivotObj?.dataSourceSettings as DataSourceSettings).values.map(function (args: IFieldOptions) { return args.caption || args.name }).join(' ~ '),
                },
                primaryXAxis: {
                    valueType: 'Category',
                    title: (this.pivotObj?.dataSourceSettings as DataSourceSettings).rows.map(function (args: IFieldOptions) { return args.caption || args.name }).join(' ~ '),
                    labelIntersectAction: 'Rotate45'
                },
                series: this.chartSeries,
            }, '#Chart');
        } else {
            (this.chart as Chart).series = this.chartSeries as SeriesModel[];
            (this.chart as Chart).primaryXAxis.title = (this.pivotObj?.dataSourceSettings as DataSourceSettings).rows.map(function (args: IFieldOptions) { return args.caption || args.name }).join(' ~ ');
            (this.chart as Chart).primaryYAxis.title = (this.pivotObj?.dataSourceSettings as DataSourceSettings).values.map(function (args: IFieldOptions) { return args.caption || args.name }).join(' ~ ');
            this.chart?.refresh();
        }
    }
    dataBound(args: any): void {
        if(this.onInit) {
            for (let value of (this.pivotObj?.dataSourceSettings as DataSourceSettings).values) {
                this.measureList[(value as any).name] = (value.caption || value.name) as string;
            }
            this.pivotObj?.grid.selectionModule.selectCellsByRange(
            { cellIndex: 1, rowIndex: 1 },
            { cellIndex: 3, rowIndex: 3 }
            );
        }
    }
    cellSelected(args: PivotCellSelectedEventArgs): void {
        this.selectedCells = args.selectedCellsInfo;
        if (this.selectedCells && this.selectedCells.length > 0) {
            this.chartSeries = this.frameChartSeries();
            this.chartUpdate();
        }
    }

    ngOnInit(): void {

        this.width = "100%";
        this.height = 350;

        this.gridSettings = {
            columnWidth: 120,
            allowSelection: true,
            selectionSettings: {
            mode: 'Cell',
            type: 'Multiple',
            cellSelectionMode: 'Box',
            } 
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: renewableEnergy as IDataSet[],
            expandAll: true,
            enableSorting: true,
            drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
            formatSettings: [{ name: 'ProCost', format: 'C0' }],
            rows: [
                { name: 'Year', caption: 'Production Year' }
            ],
            columns: [
                { name: 'EnerType', caption: 'Energy Type' },
                { name: 'EneSource', caption: 'Energy Source' }
            ],
            values: [
                { name: 'ProCost', caption: 'Revenue Growth' }
            ],
            filters: []
        };
    }
 }



