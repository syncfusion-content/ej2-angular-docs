

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';
import { IStockChartEventArgs, ChartTheme, ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id='stockChartEvents' [enablePeriodSelector]='enable' [title]='title' [titleStyle]='titleStyle'
            [chartArea]='chartArea' [primaryXAxis]='primaryXAxis' style="display:block;" [tooltip]='tooltip'
            [crosshair]='crosshair' [primaryYAxis]='primaryYAxis' (tooltipRender)='tooltipRender($event)' [seriesType]='seriesType'
            [indicatorType]='indicatorType'>
            <e-stockchart-series-collection>
                <e-stockchart-series [dataSource]='data1' type='Spline' xName='date' yName='high'>
                </e-stockchart-series>
                <e-stockchart-series [dataSource]='data1' type='Spline' xName='date' yName='low'>
                </e-stockchart-series>
            </e-stockchart-series-collection>
            <e-stockchart-stockevents>
                <e-stockchart-stockevent [date]="date1" text="Q2" description="2012 Quarter2"
                    type="Flag"  background='#6c6d6d' [border]="border1" [seriesIndexes]="seriesIndex1"></e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date2" text="Open" description="Markets opened"
                    [textStyle]="textStyle" background="#f48a21" [border]="border2"></e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date3" text="Q3" description="2013 Quarter3"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date4" text="Q4" description="2013 Quarter4"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3" [seriesIndexes]="seriesIndex2">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date5" text="G" description="Google Stock"
                    [textStyle]="textStyle" background="#f48a21" [border]="border2"></e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date6" text="Y" description="Yahoo Stock"
                    type="Square" [textStyle]="textStyle" background="#841391" [border]="border5" [seriesIndexes]="seriesIndex3">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date7" text="Y2" description="Year 2013" type="Pin"
                    [showOnSeries]="onSeries" [textStyle]="textStyle" background="#6322e0" [border]="border6">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date8" text="Q2" description="2013 Quarter2"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date9" text="Q2" description="Surge in Stocks"
                    type="ArrowUp" [textStyle]="textStyle" background="#3ab0f9" [border]="border4" [seriesIndexes]="seriesIndex4">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date10" text="Q3" description="2013 Quarter3"
                    type="Flag" [textStyle]="textStyle" background="#f48a21" [border]="border2">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date11" text="Q4" description="2013 Quarter4"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date12" text="Y3" description="Year 2014" type="Pin"
                    [showOnSeries]="onSeries" [textStyle]="textStyle" background="#6322e0" [border]="border6" [seriesIndexes]="seriesIndex5">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date13" text="Q2" description="2014 Quarter2"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3" [seriesIndexes]="seriesIndex6">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date14" text="Q3" description="2014 Quarter3"
                    [textStyle]="textStyle" background="#f48a21" [border]="border2"></e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date15" text="Q4" description="2014 Quarter4"
                    type="Flag" [textStyle]="textStyle" background="#6c6d6d" [border]="border3">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date16" text="Y4" description="Year 2015" type="Pin"
                    [showOnSeries]="onSeries" [textStyle]="textStyle" background="#6322e0" [border]="border6" [seriesIndexes]="seriesIndex7">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date17" text="End" description="Markets closed"
                    type="ArrowDown" [textStyle]="textStyle" background="#3ab0f9" [border]="border4">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date18" text="A" description="Amazon Stock"
                    [textStyle]="textStyle" background="#f48a21" [border]="border2"></e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date19" text="Q1" description="AAPL Stock"
                    [textStyle]="textStyle" background="#dd3c9f" [border]="border7" type="Text" [seriesIndexes]="seriesIndex8">
                </e-stockchart-stockevent>
                <e-stockchart-stockevent [date]="date20" text="Close" description="Markets closed"
                    [textStyle]="textStyle" background="#f48a21" [border]="border2"></e-stockchart-stockevent>
            </e-stockchart-stockevents>
        </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    indicatorType: any;
    crosshair: any;
    chartArea: any;
    onSeries: any;
    titleStyle: any;
    seriesType: any;
    tooltipRender($event: any) {
        throw new Error('Method not implemented.');
    }
    public primaryXAxis?: Object;
    public data1?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public tooltip?: Object;
    public date1:  Date = new Date(2012, 3, 1);
    public date2:  Date = new Date(2012, 3, 20);
    public date3:  Date = new Date(2012, 6, 1);
    public date4:  Date = new Date(2012, 9, 1);
    public date5:  Date = new Date(2012, 7, 30);
    public date6:  Date = new Date(2012, 10, 1);
    public date7:  Date = new Date(2012, 12, 0);
    public date8:  Date = new Date(2013, 3, 1);
    public date9:  Date = new Date(2013, 3, 20);
    public date10: Date =  new Date(2013, 6, 1);
    public date11: Date =  new Date(2013, 9, 1);
    public date12: Date =  new Date(2013, 12, 0);
    public date13: Date =  new Date(2014, 3, 1);
    public date14: Date =  new Date(2014, 6, 1);
    public date15: Date =  new Date(2014, 9, 1);
    public date16: Date =  new Date(2014, 12, 0);
    public date17: Date =  new Date(2014, 2, 2);
    public date18: Date =  new Date(2015, 1, 7);
    public date19: Date =  new Date(2015, 1, 2);
    public date20: Date =  new Date(2015, 2, 12);
    public border1: object = { color: '#6c6d6d' };
    public textStyle: object = { color: 'white' };
    public border2: object = { color: '#f48a21' };
    public border3: object = { color: '#6c6d6d' };
    public border4: object = { color: '#3ab0f9' };
    public border5: object = { color: '#841391' };
    public border6: object = { color: '#6322e0' };
    public border7: object = { color: '#dd3c9f' };
    public seriesIndex1: number[] = [0];
    public seriesIndex2: number[] = [1];
    public seriesIndex3: number[] = [0];
    public seriesIndex4: number[] = [1];
    public seriesIndex5: number[] = [0];
    public seriesIndex6: number[] = [1];
    public seriesIndex7: number[] = [0];
    public seriesIndex8: number[] = [1];
enable: any;
    ngOnInit(): void {
        this.data1 = chartData;
        this.primaryXAxis = {
            valueType: 'DateTime',
        };
        this.tooltip = { enable: true };
        this.marker = { visible: true, width: 10, height: 10 };
        this.title = 'Unemployment Rates 1975-2010';
    }
}


